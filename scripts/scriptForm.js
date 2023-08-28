document.addEventListener("DOMContentLoaded", function () {
  const registroForm = document.getElementById("registroForm");
  const mensaje = document.getElementById("mensaje");

  registroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreUsuario").value;
    const email = document.getElementById("correo").value;
    const number = document.getElementById("number").value;

    const usuario = {
      nombre: nombre,
      email: email,
      numero: number,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensaje.innerHTML = "CONTACTO GUARDADO";

    registroForm.reset();
  });
});
