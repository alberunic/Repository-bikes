if(window.location.pathname === '/') {
    alert("Bienvenido") 

    const routesButton=document.getElementById("bikes-routes")
    routesButton.addEventListener("click",function () {
        alert("Te vamos a redireccionar a una ruta")
    })
}


const hour=document.getElementById("hour")
const localHour= new Date() 
console.log(localHour)
hour.innerHTML=localHour