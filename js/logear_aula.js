(() => {
	'use strict'

	// CARGAR INFORMACION TRAS LOGIN

	ingresar.addEventListener("click", function(){
		var usuario = document.getElementById("floatingInput").value.toLowerCase();
		var contrasena = document.getElementById("floatingPassword").value.toLowerCase();
		//window.location.href("https://ipiba.github.io/")
		//window.location.replace("https://ipiba.github.io/")
		//window.location.assign("https://ipiba.github.io/")
		//window.alert("Hola")

		if (usuario == "42427517" && contrasena == "42427517") {
			//window.alert("Bienvenido")
			event.preventDefault()
			window.location.href = "../html/aula_user.html"
			//window.location.replace("../html/42427517.html")
			//window.location.assign("../html/42427517.html")
			//window.open("../html/42427517.html")
			
		}
		else if (usuario == "123" && contrasena == "123") {
			window.alert("Esto es un prueba.")
		}
		else {
			//window.alert("Datos Incorrectos.")
			var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
				keyboard: false
			})
			myModal.show()
		}
	})
})()
