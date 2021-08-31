

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

const buscar=document.getElementById('InpBuscar');
const tbody=document.getElementById('tbody');
buscar.addEventListener('keyup',function(){
  
  fetch("http://localhost:3000/gestion-empleado/consulta/"+buscar.value)
  .then(response => response.json())
  .then(json => {
    tbody.innerHTML=""
    
    console.log(json)
    var band=false;
    for(var i=0;i<json.length;i++){
      band=true;
      const tr=document.createElement("tr");
      const td=document.createElement("td");
      td.className="acciones"
      const a1=document.createElement("a");
      a1.title="Editar Empleado";
      a1.href="http://localhost:3000/gestion-empleado/"+json[i]._id
      const i1=document.createElement("i");
      i1.className="bx bx-edit";
      const a2=document.createElement("a");
      a2.title="Solicitud Vacaciones";
      a2.href="http://localhost:3000/solicitud_vacaciones/"+json[i].idSolicitud
      const i2=document.createElement("i");
      i2.className="bx bxs-file-doc";
      a1.appendChild(i1)
      td.appendChild(a1)
      a2.appendChild(i2)
      td.appendChild(a2)
      tr.appendChild(td)
      var td2=document.createElement("td");
      td2.textContent=json[i].nombres
      tr.appendChild(td2)
      var td3=document.createElement("td");
      td3.textContent=json[i].apellidos
      tr.appendChild(td3)
      var td4=document.createElement("td");
      td4.textContent=json[i].cedula
      tr.appendChild(td4)
      var td5=document.createElement("td");
      td5.textContent=json[i].correo
      tr.appendChild(td5)
      var td6=document.createElement("td");
      td6.textContent=json[i].proceso
      tr.appendChild(td6)
      var td7=document.createElement("td");
      td7.textContent=json[i].subproceso
      tr.appendChild(td7)
      var td8=document.createElement("td");
      td8.textContent=json[i].puesto
      tr.appendChild(td8)
      var td9=document.createElement("td");
      td9.textContent=json[i].lugarTrabajo
      tr.appendChild(td9)
      var td10=document.createElement("td");
      td10.textContent=json[i].remuneracionM
      tr.appendChild(td10)
      var td11=document.createElement("td"); 
      td11.style="text-align: center;";
      var i3=document.createElement("i"); 
      if(json[i].estado=='1'){
        i3.className="cGreen bx bx-checkbox-checked";
        i3.title="Empleado Activo";
      }else{
        i3.className="cRed bx bx-x-circle";
        i3.title="Empleado Inactivo";
      }
      
      td11.appendChild(i3);
      tr.appendChild(td11)
      tbody.appendChild(tr)
      
    }
    if(!band){
      const trr=document.createElement("tr");
      const tdd=document.createElement("td");
      tdd.textContent="Empleado no existe...";
      tdd.colSpan="11"
      trr.appendChild(tdd);
      tbody.appendChild(trr)
    }
    
    
    
  })
})


