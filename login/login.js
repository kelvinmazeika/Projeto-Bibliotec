const campoSenha = document.getElementById("password");
const btnSenha = document.querySelector("#mostrar-senha");

console.log(campoSenha.type);
console.log(btnSenha);

btnSenha.addEventListener("click", function() {
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
})