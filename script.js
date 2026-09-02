const routes = [
  {id:"R1", color:"#e50914", distance:4.2, time:6, traffic:"Medium", risk:"Low", obstacles:1, road:"Good", note:"Balanced route with low risk and moderate traffic."},
  {id:"R2", color:"#5b9cff", distance:2.8, time:4, traffic:"Low", risk:"Medium", obstacles:2, road:"Good", note:"Fast, compact route with two reported obstacles."},
  {id:"R3", color:"#ffc857", distance:3.6, time:5, traffic:"Heavy", risk:"High", obstacles:3, road:"Moderate", note:"Shorter than R1 but carries higher traffic and risk."},
  {id:"R4", color:"#40e58c", distance:3.1, time:7, traffic:"Low", risk:"Low", obstacles:0, road:"Excellent", note:"Lowest-risk option with clear roads, but the slowest ETA."}
];

let selectedRoute = null;
let criterion = null;
let map = null;
let routeLayers = [];

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="dashboard") setTimeout(initMap,150);
}

function setPriority(btn){
  document.querySelectorAll(".priority").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
}

function toast(msg){
  const el=document.getElementById("toast");
  el.textContent=msg; el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),2400);
}

function startAnalysis(){
  showPage("scan");
  let progress=0;
  const messages=[
    ["LOCATING CITY NETWORK...", "Locating emergency origin and destination"],
    ["MAPPING FOUR POSSIBILITIES...", "Generating four candidate routes"],
    ["CHECKING CONDITIONS...", "Comparing time, distance, traffic and risk"],
    ["SPIDER-SENSE CALIBRATION...", "Preparing decision-support dashboard"]
  ];
  let step=0;
  const bar=document.getElementById("scanBar"), title=document.getElementById("scanTitle");
  const msg=document.getElementById("scanMessage"), data=document.getElementById("scanData"), count=document.getElementById("scanRoutes");
  const timer=setInterval(()=>{
    progress+=4;
    bar.style.width=progress+"%";
    data.textContent=progress+"%";
    count.textContent=Math.min(4,Math.floor(progress/25))+" / 4";
    if(progress%25===0 && step<messages.length){
      title.textContent=messages[step][0]; msg.textContent=messages[step][1]; step++;
    }
    if(progress>=100){
      clearInterval(timer);
      buildDashboard();
      setTimeout(()=>showPage("dashboard"),500);
    }
  },55);
}

function buildDashboard(){
  const priority=document.querySelector(".priority.active")?.dataset.priority || "CRITICAL";
  const emergency=document.getElementById("emergencyType").value;
  const destination=document.getElementById("destination").value;
  document.getElementById("missionSummary").textContent =
    `${priority} ${emergency} → ${destination}`;
  renderRouteCards();
  fillCompare();
  selectedRoute=null; criterion=null;
  document.getElementById("selectBtn").disabled=true;
  document.getElementById("selectBtn").classList.add("disabled-btn");
  document.getElementById("criterionText").textContent="Choose a criterion to inspect the data.";
  document.querySelectorAll(".criteria button").forEach(b=>b.classList.remove("active"));
  document.getElementById("insightTitle").textContent="No route selected";
  document.getElementById("insightText").textContent="Select a route card or click a route on the map. Review the evidence before making your decision.";
  document.getElementById("insightMetrics").innerHTML=`<div><b>—</b><span>TIME</span></div><div><b>—</b><span>DISTANCE</span></div><div><b>—</b><span>RISK</span></div>`;
}

function renderRouteCards(){
  const box=document.getElementById("routeCards");
  box.innerHTML=routes.map(r=>`
    <div class="route-card ${selectedRoute===r.id?"selected":""}" id="card-${r.id}" onclick="selectRoute('${r.id}')">
      <div class="route-head">
        <div class="route-id" style="color:${r.color}">${r.id}</div>
        <div class="route-tag ${r.risk.toLowerCase()}">${r.risk.toUpperCase()} RISK</div>
      </div>
      <div class="route-metrics">
        <div class="metric"><b>${r.time} min</b><span>ETA</span></div>
        <div class="metric"><b>${r.distance} km</b><span>DISTANCE</span></div>
        <div class="metric"><b>${r.traffic}</b><span>TRAFFIC</span></div>
        <div class="metric"><b>${r.obstacles}</b><span>OBSTACLES</span></div>
      </div>
      <div class="route-bar"><i style="width:${Math.max(25,100-r.time*8)}%;background:${r.color}"></i></div>
    </div>`).join("");
}

function selectRoute(id){
  selectedRoute=id;
  const r=routes.find(x=>x.id===id);
  renderRouteCards();
  document.querySelectorAll(".criteria button").forEach(b=>b.classList.remove("active"));
  updateInsight(r);
  if(map) focusRoute(id);
  const btn=document.getElementById("selectBtn");
  btn.disabled=false; btn.classList.remove("disabled-btn");
}

function updateInsight(r){
  document.getElementById("insightTitle").textContent=`${r.id} — Route Conditions`;
  document.getElementById("insightText").textContent=r.note;
  document.getElementById("insightMetrics").innerHTML=`
    <div><b>${r.time}m</b><span>TIME</span></div>
    <div><b>${r.distance}km</b><span>DISTANCE</span></div>
    <div><b>${r.risk}</b><span>RISK</span></div>`;
}

function setCriterion(type){
  criterion=type;
  const labels={fastest:"Fastest = minimum estimated travel time.",shortest:"Shortest = minimum route distance.",safest:"Safest = lowest reported route risk."};
  document.getElementById("criterionText").textContent=labels[type];
  document.querySelectorAll(".criteria button").forEach(b=>b.classList.remove("active"));
  document.getElementById(type+"Btn").classList.add("active");
  highlightCriterion(type);
  toast("Criterion applied for comparison — you still choose the route.");
}

function highlightCriterion(type){
  document.querySelectorAll(".route-card").forEach(c=>c.classList.remove("best-fastest","best-shortest","best-safest"));
  const best = type==="fastest"
    ? routes.reduce((a,b)=>a.time<b.time?a:b)
    : type==="shortest"
    ? routes.reduce((a,b)=>a.distance<b.distance?a:b)
    : routes.filter(r=>r.risk==="Low").sort((a,b)=>a.time-b.time)[0];
  document.getElementById("card-"+best.id)?.classList.add("best-"+type);
  if(map) drawMap();
}

function initMap(){
  if(map){ map.invalidateSize(); return; }
  map=L.map("map",{zoomControl:true,attributionControl:true}).setView([17.385,78.486],12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
  drawMap();
}

function drawMap(){
  if(!map) return;
  routeLayers.forEach(l=>map.removeLayer(l));
  routeLayers=[];
  const origin=[17.385,78.486], end=[17.425,78.505];
  const paths=[
    [origin,[17.372,78.465],[17.394,78.448],[17.412,78.475],end],
    [origin,[17.397,78.492],[17.409,78.507],[17.418,78.513],end],
    [origin,[17.362,78.502],[17.382,78.520],[17.407,78.532],end],
    [origin,[17.401,78.472],[17.417,78.485],[17.433,78.494],end]
  ];
  paths.forEach((coords,i)=>{
    const r=routes[i];
    const active=selectedRoute===r.id;
    const line=L.polyline(coords,{color:r.color,weight:active?8:5,opacity:active?1:.72,dashArray:active?null:"8 7"});
    line.addTo(map);
    line.on("click",()=>selectRoute(r.id));
    routeLayers.push(line);
    const mid=coords[Math.floor(coords.length/2)];
    const marker=L.circleMarker(mid,{radius:active?10:7,color:r.color,fillColor:r.color,fillOpacity:.95,weight:2}).addTo(map);
    marker.bindTooltip(`<b>${r.id}</b> · ${r.time} min · ${r.distance} km`,{permanent:active,direction:"top"});
    marker.on("click",()=>selectRoute(r.id));
    routeLayers.push(marker);
  });
  L.circleMarker(origin,{radius:8,color:"#47d9ff",fillColor:"#47d9ff",fillOpacity:1}).addTo(map).bindTooltip("ORIGIN");
  L.circleMarker(end,{radius:9,color:"#ff3340",fillColor:"#ff3340",fillOpacity:1}).addTo(map).bindTooltip("EMERGENCY");
}

function focusRoute(id){
  const index=routes.findIndex(r=>r.id===id);
  if(map) map.setZoom(13,{animate:true});
  drawMap();
}

function openCompare(){
  fillCompare();
  document.getElementById("compareModal").classList.add("show");
}
function closeCompare(){document.getElementById("compareModal").classList.remove("show")}

function fillCompare(){
  const metrics=[
    ["DISTANCE",...routes.map(r=>r.distance+" km")],
    ["EST. TIME",...routes.map(r=>r.time+" min")],
    ["TRAFFIC",...routes.map(r=>r.traffic)],
    ["RISK",...routes.map(r=>r.risk)],
    ["OBSTACLES",...routes.map(r=>r.obstacles)],
    ["ROAD",...routes.map(r=>r.road)]
  ];
  document.getElementById("compareBody").innerHTML=metrics.map(row=>`<tr>${row.map((v,i)=>`<td>${v}</td>`).join("")}</tr>`).join("");
}

function openDecision(){
  if(!selectedRoute) return;
  const r=routes.find(x=>x.id===selectedRoute);
  document.getElementById("decisionRoute").textContent=`ROUTE ${r.id}`;
  document.getElementById("decisionSummary").innerHTML=`
    <div><b>${r.time} min</b><span>EST. TIME</span></div>
    <div><b>${r.distance} km</b><span>DISTANCE</span></div>
    <div><b>${r.risk}</b><span>RISK</span></div>`;
  document.getElementById("decisionModal").classList.add("show");
}
function closeDecision(){document.getElementById("decisionModal").classList.remove("show")}

function confirmDecision(){
  const r=routes.find(x=>x.id===selectedRoute);
  closeDecision();
  document.getElementById("confirmedRoute").textContent=r.id;
  document.getElementById("confirmedText").textContent=`Decision recorded for ${r.id}. The responder reviewed the route evidence and made the final call.`;
  document.getElementById("confirmedStats").innerHTML=`
    <div><b>${r.time} min</b><span>EST. TIME</span></div>
    <div><b>${r.distance} km</b><span>DISTANCE</span></div>
    <div><b>${r.risk}</b><span>RISK</span></div>`;
  showPage("success");
}

function resetMission(){
  selectedRoute=null; criterion=null;
  if(map){map.remove();map=null;routeLayers=[]}
  showPage("home");
}

window.addEventListener("resize",()=>map?.invalidateSize());
