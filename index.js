if(window.location.pathname === '/') {
    alert("Bienvenido") 

    const routesButton=document.getElementById("bikes-routes")
    routesButton.addEventListener("click",function () {
        alert("Te vamos a redireccionar a una ruta")
    })
}


console.log(window.location.pathname)

if(window.location.pathname === "/subpage.html") {
    const hour=document.getElementById("hour")
    const localHour= new Date() 
    console.log(localHour)
    hour.innerHTML=localHour
    
    
    const addButton=document.getElementById("add")
    const counter=document.getElementById("counter")
    addButton.addEventListener("click",function () {
        counter.innerHTML=Number(counter.innerHTML)+1
    })  
}