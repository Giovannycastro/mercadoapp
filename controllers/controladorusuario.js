let url="http://localhost:8080/storeapi/v1/usuario"




let peticion={
    method:"GET",
    headers:{}
}
fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100")
        
        

        let nombreCliente=document.createElement("h6")
        nombreCliente.classList.add("tex-center")
        nombreCliente.textContent=usuario.nombres

        let cedula=document.createElement("h6")
        cedula.classList.add("tex-center")
        cedula.textContent=usuario.cedula

        let correo=document.createElement("h6")
        correo.classList.add("tex-center")
        correo.textContent=usuario.correo



        tarjeta.appendChild(nombreCliente)
        tarjeta.appendChild(cedula)
        tarjeta.appendChild(correo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})