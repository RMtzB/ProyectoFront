    // const objeto = {}
    // let i=0
    // let tam=0

    // fetch("http://localhost:8080/v1/avisos", { method: 'GET', mode: 'cors' }).then(respuesta => {
    //     return respuesta.json()
    // }).then(data => {
    //     const contenedorTarjetas = document.getElementById("cardsContainer")
    //     let clase = null;
    //     console.log(data)

    //     if(i == 0) {
    //         contenedorTarjetas.innerHTML=""
    //     }

    //     for ( i=0 ; i < data.length; i++) {
    //         console.log(i+"Aviso")
    //         switch ((tam % 3) + 1) {
    //             case 1: clase = "first-three-col"
    //                 break
    //             case 2: clase = "second-three-col"
    //                 break
    //             case 3: clase = "third-three-col"
    //                 break
    //         }
    //         contenedorTarjetas.innerHTML += `<div class="card-container ${clase}" data-id="${data[i].idAviso}">
    //         <div class="card aviso">
    //            <img id="cardImg" src="./img/01.jpg" alt="Es un gato, en una caja">
    //            <div class="texto">
    //               <h4 id="cardTitle">${data[i].titulo}</h4>
    //               <p id="cardDescription" class="descripcion">${data[i].direccion}</p>
    //            </div>
    //         </div>
    //      </div>`
    //      tam++
    //     } 
    // })

    // fetch("http://localhost:8080/v1/publicaciones", { method: 'GET', mode: 'cors' }).then(respuesta => {
    //     return respuesta.json()
    // }).then(data => {
    //     const contenedorTarjetas = document.getElementById("cardsContainer")
    //     let clase = null;
    //     console.log(data)

    //     if(i == 0) {
    //         contenedorTarjetas.innerHTML=""
    //     }

    //     for ( i=0 ; i < data.length; i++) {
    //         console.log(i+"Publicacion")
    //         switch ((tam % 3) + 1) {
    //             case 1: clase = "first-three-col"
    //                 break
    //             case 2: clase = "second-three-col"
    //                 break
    //             case 3: clase = "third-three-col"
    //                 break
    //         }
    //         contenedorTarjetas.innerHTML += `<div class="card-container ${clase}" data-id="${data[i].idPublicacion}">
    //         <div class="card">
    //            <img id="cardImg" src="./img/01.jpg" alt="Es un gato, en una caja">
    //            <div class="texto">
    //               <h4 id="cardTitle">${data[i].titulo}</h4>
    //               <p id="cardDescription" class="descripcion">${data[i].descripcion}</p>
    //               <p id="cardPrecio" class="precio">${data[i].precio}</p>
    //            </div>
    //         </div>
    //      </div>`
    //      tam++
    //     }        
    // })
