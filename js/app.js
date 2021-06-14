//Aqui va todo el codigo
const body = document.querySelector("body")

// const cerrarMP = document.getElementById("cerrarMP")
const modalPublicacion = document.getElementById("modalPublicaciones")

const agregarP = document.getElementById("btnRenta")
const modalP = document.getElementById("modalP")
const formP = document.querySelector(".modalP form")

const agregarA = document.getElementById("btnAviso")
const modalA = document.getElementById("modalA")
const formA = document.querySelector("#modalA form")

const modalPub = document.getElementById("modalPublicacion")

//aqui toy
$('#cardsContainer').on('click', '.card-container', function (e) {
   if (e.currentTarget.childNodes[1].attributes.class.nodeValue === "card aviso")
      fetch("http://localhost:8080/v1/avisos/" + e.currentTarget.dataset.id, { method: 'GET', mode: 'cors' }).then(respuesta => {
         return respuesta.json()
      }).then(data => {
         modalPub.classList.toggle("visible")
         body.classList.toggle("quita-scrooll")

         modalPub.innerHTML =
            `<div class="modal modalP">
            <div class="info">
               <h3 id="info-title">${data.titulo}</h3>
   
               <div class="imagen">
                  <img src="./img/01.jpg" alt="">
               </div>
   
               <label for="descripcionPublicacion">Descripcion</label>
               <p id="descripcionPublicacion">${data.descripcion}</p>
   

                  <label>Direccion</label>
                  <p id="direccionPublicacion">${data.direccion}</p>
            </div>
            <div class="comentarios">
               <a id="cerrarMP" href="#">x</a>
               <h3>Comentarios</h3>
   
               <form>
                  <textarea id="comentario" rows="10"></textarea>
                  <input class="boton" type="submit" value="Comentar">
               </form>
   
               <div>
               </div>
            </div>
         </div>`

         comentarios = data.comentarios.split('--')
         document.querySelector(".comentarios div").innerHTML = ``

         for (var i = 0; i < comentarios.length; i++) {
            document.querySelector(".comentarios div").innerHTML += `
            <p>${comentarios[i]}</p>`
            console.log(comentarios[i])
         }

         document.getElementById("cerrarMP").addEventListener("click", (e) => {
            e.preventDefault()

            modalPub.classList.toggle("visible")
            body.classList.toggle("quita-scrooll")
         })

         console.log(data)
      })
   else {
      console.log(e.currentTarget.dataset.id)
      fetch("http://localhost:8080/v1/publicaciones/" + e.currentTarget.dataset.id, { method: 'GET', mode: 'cors' }).then(respuesta => {
         return respuesta.json()
      }).then(data => {

         console.log(data)
         modalPub.classList.toggle("visible")
         body.classList.toggle("quita-scrooll")
         modalPub.innerHTML =
            `<div class="modal modalP">
            <div class="info">
               <h3 id="info-title">${data.titulo}</h3>
   
               <div class="imagen">
                  <img src="./img/01.jpg" alt="">
               </div>
   
               <label for="descripcionPublicacion">Descripcion</label>
               <p id="descripcionPublicacion">${data.descripcion}</p>
   
               <div class="first-six-col">
                  <label>Direccion</label>
                  <p id="direccionPublicacion">${data.direccion}</p>
               </div>
   
               <div class="second-six-col">
                  <label>Precio</label>
                  <p id="precioPublicacion">${data.precio}</p>
               </div>
   
               <div class="first-six-col">
                  <label>Servicios</label>
                  <p id="serviciosPublicacion">${data.servicios}</p>
               </div>
   
               <div class="second-six-col">
                  <label>Horario Entrada/Salida</label>
                  <p id="horarioPublicacion">${data.horaEtntrada}</p>
               </div>
   
               <div class="first-six-col">
                  <label>Telefono</label>
                  <p id="telefonoPublicacion">${data.numeroTelefono}</p>
               </div>
   
               <div class="second-six-col">
                  <label>Deposito</label>
                  <p id="depositoPublicacion">${data.deposito}</p>
               </div>
   
               <div class="first-six-col">
                  <label>Url Mapa Google</label>
                  <p id="mapaPublicacion">${data.urlUbicacion}</p>
               </div>
   
               <div class="second-six-col">
                  <label for="generoP">Restricción de genero</label>
                  <p id="GeneroPublicacion">${data.restriccionGenero}</p>
               </div>
   
               <div class="first-four-col">
                  <label for="avalP">Se requiere aval</label>
                  <input type="checkbox" id="avalP" disabled>
               </div>
   
               <div class="second-four-col">
                  <label for="mascotasP">Se permiten mascotas</label>
                  <input type="checkbox" id="mascotasP" disabled>
               </div>
   
               <div class="third-four-col">
                  <label for="mueblesP">Amueblado</label>
                  <input type="checkbox" id="mueblesP" disabled>
               </div>
            </div>
   
            <div class="comentarios">
               <a id="cerrarMP" href="#">x</a>
               <h3>Comentarios</h3>
   
               <form>
                  <textarea id="comentario" rows="10"></textarea>
                  <input class="boton" type="submit" value="Comentar">
               </form>
   
               <div>
               </div>
            </div>
         </div>`

         if (data.amueblado === true) {
            document.getElementById("mueblesP").checked = true
         }

         if (data.mascotas === true) {
            document.getElementById("mascotasP").checked = true
         }

         if (data.aval === true) {
            document.getElementById("avalP").checked = true
         }

         comentarios = data.comentarios.split('--')
         document.querySelector(".comentarios div").innerHTML = ``

         for (var i = 0; i < comentarios.length; i++) {
            document.querySelector(".comentarios div").innerHTML += `
            <p>${comentarios[i]}</p>`
            console.log(comentarios[i])
         }

         // console.log(document.getElementById("cerrarMP"))

         document.getElementById("cerrarMP").addEventListener("click", (e) => {
            e.preventDefault()

            modalPub.classList.toggle("visible")
            body.classList.toggle("quita-scrooll")
         })

         // console.log(data)
      })
   }

});






agregarP.addEventListener("click", (e) => {
   e.preventDefault()
   modalP.classList.toggle("visible")
   body.classList.toggle("quita-scrooll")
})

formP.addEventListener("submit", (e) => {
   e.preventDefault()

   if (e.submitter.tagName === "BUTTON") {
      modalP.classList.toggle("visible")
      body.classList.toggle("quita-scrooll")
   } else {
      const tituloP = document.getElementById("tituloP").value
      const precioP = document.getElementById("precioP").value
      const serviciosP = document.getElementById("serviciosP").value
      const horarioP = document.getElementById("horarioP").value
      const telefonoP = document.getElementById("telefonoP").value
      const depositoP = document.getElementById("depositoP").value
      const direccionP = document.getElementById("direccionP").value
      const mapaP = document.getElementById("mapaP").value
      const avalP = document.getElementById("avalP").checked
      const mascotasP = document.getElementById("mascotasP").checked
      const mueblesP = document.getElementById("mueblesP").checked
      const generoP = document.getElementById("generoP").value
      const descripcionP = document.getElementById("descripcionP").value

      if (tituloP !== "" && precioP !== "" && serviciosP !== "" && horarioP !== "" && telefonoP !== "" && depositoP !== "" && direccionP
         !== "" && mapaP !== "" && descripcionP !== "") {
         const objeto = {}

         objeto.titulo = tituloP
         objeto.descripcion = descripcionP
         objeto.numeroTelefono = telefonoP
         objeto.avalP = avalP
         objeto.precio = precioP
         objeto.deposito = depositoP
         objeto.mascotasP = mascotasP
         objeto.servicios = serviciosP
         objeto.direccion = direccionP
         objeto.amueblado = mueblesP
         objeto.horaEtntrada = horarioP
         objeto.urlUbicacion = mapaP
         objeto.restriccionGenero = generoP
         objeto.comentarios = ""

         fetch("http://localhost:8080/v1/publicaciones", { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(objeto) }).then(respuesta => {
            return respuesta.json()
         }).then(data => {
            console.log(data)
            formP.reset()
            modalP.classList.toggle("visible")
            body.classList.toggle("quita-scrooll")
            inicio()
         })
      }
   }
})

agregarA.addEventListener("click", (e) => {
   e.preventDefault()
   modalA.classList.toggle("visible")
   body.classList.toggle("quita-scrooll")
})

formA.addEventListener("submit", (e) => {
   e.preventDefault()

   if (e.submitter.tagName === "BUTTON") {
      modalA.classList.toggle("visible")
      body.classList.toggle("quita-scrooll")
   } else {
      const tituloA = document.getElementById("tituloA")
      const direccionA = document.getElementById("direccionA")
      const descripcionA = document.getElementById("descripcionA")

      if (tituloA.value !== "" && direccionA.value !== "" && descripcionA.value !== "") {
         const objeto = {}

         objeto.titulo = tituloA.value
         objeto.descripcion = descripcionA.value
         objeto.direccion = direccionA.value
         objeto.comentarios = ""

         fetch("http://localhost:8080/v1/avisos", { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(objeto) }).then(respuesta => {
            return respuesta.json()
         }).then(data => {
            console.log(data)
            formA.reset()
            modalA.classList.toggle("visible")
            body.classList.toggle("quita-scrooll")
            inicio()
         })
      }
   }
})

























const inicio = () => {
   const objeto = {}
   let i = 0
   let tam = 0

   fetch("http://localhost:8080/v1/avisos", { method: 'GET', mode: 'cors' }).then(respuesta => {
      return respuesta.json()
   }).then(data => {
      const contenedorTarjetas = document.getElementById("cardsContainer")
      let clase = null;
      console.log(data)

      if (i == 0) {
         contenedorTarjetas.innerHTML = ""
      }

      for (i = 0; i < data.length; i++) {
         console.log(i + "Aviso")
         switch ((tam % 3) + 1) {
            case 1: clase = "first-three-col"
               break
            case 2: clase = "second-three-col"
               break
            case 3: clase = "third-three-col"
               break
         }
         contenedorTarjetas.innerHTML += `<div class="card-container ${clase}" data-id="${data[i].idAviso}">
           <div class="card aviso">
              <img id="cardImg" src="./img/01.jpg" alt="Es un gato, en una caja">
              <div class="texto">
                 <h4 id="cardTitle">${data[i].titulo}</h4>
                 <p id="cardDescription" class="descripcion">${data[i].direccion}</p>
              </div>
           </div>
        </div>`
         tam++
      }
   })

   fetch("http://localhost:8080/v1/publicaciones", { method: 'GET', mode: 'cors' }).then(respuesta => {
      return respuesta.json()
   }).then(data => {
      const contenedorTarjetas = document.getElementById("cardsContainer")
      let clase = null;
      console.log(data)

      if (i == 0) {
         contenedorTarjetas.innerHTML = ""
      }

      for (i = 0; i < data.length; i++) {
         console.log(i + "Publicacion")
         switch ((tam % 3) + 1) {
            case 1: clase = "first-three-col"
               break
            case 2: clase = "second-three-col"
               break
            case 3: clase = "third-three-col"
               break
         }
         contenedorTarjetas.innerHTML += `<div class="card-container ${clase}" data-id="${data[i].idPublicacion}">
           <div class="card">
              <img id="cardImg" src="./img/01.jpg" alt="Es un gato, en una caja">
              <div class="texto">
                 <h4 id="cardTitle">${data[i].titulo}</h4>
                 <p id="cardDescription" class="descripcion">${data[i].descripcion}</p>
                 <p id="cardPrecio" class="precio">${data[i].precio}</p>
              </div>
           </div>
        </div>`
         tam++
      }
   })
}

inicio()