(() => {
	'use strict'

	// CARGAR INFORMACION TRAS LOGIN

	ingresar.addEventListener("click", function(){
		var usuario = document.getElementById("floatingInput").value.toLowerCase();
		var contrasena = document.getElementById("floatingPassword").value.toLowerCase();

		if (usuario == "42427517" && contrasena == "42427517") {
			event.preventDefault()
			window.location.href = "../html/42427517T.html"
		}
		else if (usuario == "123" && contrasena == "123") {
			window.alert("Esto es un prueba.")
		}
		else {
			var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
				keyboard: false
			})
			myModal.show()
		}
	})
})()
