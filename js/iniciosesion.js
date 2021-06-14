window.onload = () => {
   const miStorage = window.localStorage
   const form = document.getElementById("formularioInicio")
   const inputUsuario = document.getElementById("usuario")
   const inputPass = document.getElementById("password")
   const sesion = miStorage.getItem("miSesion")
   const aside = document.querySelector("aside")
   let usuario = null
   const contenedorTarjetas = document.getElementById("cardsContainer")
   const btnMis = document.getElementById("btnMis")
   const agregarP = document.getElementById("btnRenta")

   if (sesion !== null) {
      usuario = JSON.parse(sesion)
      aside.remove()

      contenedorTarjetas.classList.toggle("contenedorTarjetas")

      agregarP.classList.toggle("invisible")
      btnMis.classList.toggle("invisible")
   } else {
      form.addEventListener("submit", (e) => {
         e.preventDefault()

         if (inputUsuario.value !== "" && inputPass.value !== "") {
            const objeto = {}

            objeto.contra = inputPass.value
            objeto.nombre = inputUsuario.value

            console.log(objeto)

            fetch("http://localhost:8080/v1/usuarios", { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(objeto) }).then(respuesta => {
               return respuesta.json()
            }).then(data => {
               // console.log(data)

               miStorage.setItem("miSesion", JSON.stringify(data))
               console.log(data)
               usuario = JSON.parse(data)
               
               agregarP.classList.toggle("invisible")
               btnMis.classList.toggle("invisible")

               aside.remove()

               contenedorTarjetas.classList.toggle("contenedorTarjetas")
            })
         }
      })
   }
}