function handleData() {
    console.log(animales)
}

alert("Este es un algoritmo que te permite añadir o quitar animales que estan disponibles para ver en un zoologico")

let animales  = ['elefante', 'tucan', 'jirafa']

console.log(`Actualmente en el zoologico se encuentran disponibles para ver los siguientes animales : ${animales}`)



function agregarQuitar() {
    let respuestaUsuarioRaw = prompt(`Que desea hacer, agregar o quitar animales?`)
    let respuestaUsuarioMinus = null
    console.log(respuestaUsuarioRaw)
    if (respuestaUsuarioRaw !== null) {
        respuestaUsuarioMinus = respuestaUsuarioRaw.toLowerCase()
    }
    console.log(respuestaUsuarioRaw)

    switch (respuestaUsuarioMinus) {
        case "agregar":
            let response = prompt("Que animal desea agregar?")
            let agregarUsuario = response.toLowerCase()

            if (animales.indexOf(agregarUsuario) >= 0) {
                alert("el animal ya existe")
                agregarQuitar()
            } else {
                animales.push(agregarUsuario)
                alert("agregado")
                let otroAnimal = prompt("queres agregar un nuevo animal?")
                let nuevoCaso = otroAnimal.toLowerCase()
                if (nuevoCaso === "si") {
                    agregarQuitar()
                } else {
                    alert("gracias por su aporte")
                }
        }
            break;
    
        case "quitar":
            let quitarRaw = prompt('Que animal desea quitar?')     
            let quitarUsuario = quitarRaw.toLowerCase()
            console.log("La respuesta del usuario es " + quitarUsuario)
            if (animales.indexOf(quitarUsuario) <= -1) {
                alert('Ese animal no existe, pruebe con otro')
                agregarQuitar()
            } else if (animales.indexOf(quitarUsuario) >= 0){
                let indexAnimal = animales.indexOf(quitarUsuario)
                animales.splice(indexAnimal,1)
                alert("Borrado con exito")
                let otroAnimal = prompt("queres agregar un nuevo animal?")
                let nuevoCaso = otroAnimal.toLowerCase()
                if (nuevoCaso === "si") {
                agregarQuitar()
            } else if (nuevoCaso === "no") {
                alert("gracias por su aporte")
            } else {
                alert("ingrese una opción correcta")
            }
            }
            
        case null:
            break
        default:
            alert('respuesta incorrecta, escriba "agregar" o "quitar"')
            agregarQuitar()
    }

}

agregarQuitar()

console.log(animales)


