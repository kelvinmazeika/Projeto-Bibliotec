const menu = document.getElementById("menu");

const navMenu = document.querySelector(".navegacao");

menu.addEventListener("click", function(){
    navMenu.className = navMenu.className == "navegacao" ? "navegacao ativo" : "navegacao"
})