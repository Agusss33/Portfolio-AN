document.addEventListener("DOMContentLoaded", function () {
  const registroForm = document.getElementById("registroForm");
  const mensaje = document.getElementById("mensaje");

  registroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreUsuario").value;
    const email = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const usuario = {
      nombre: nombre,
      email: email,
      contrasena: contrasena,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensaje.innerHTML = "Registro exitoso. Puedes iniciar sesión ahora.";

    registroForm.reset();
  });
});
