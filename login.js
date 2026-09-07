const usuarioCorreto = "admin";
const senhaCorreta = "123456";

const formulario = document.getElementById("form-login");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        window.location.href = "cadastro.html";

    } else {

        alert("Usuário ou senha incorretos!");

    }

});