const nameButton  = document.querySelector("#name")
const lastNamesButton = document.querySelector("#lastname")
const hobbitButton = document.querySelector("#hobbit")
const ageButton = document.querySelector("#age")
const carreraButton = document.querySelector("#carrera")

nameButton.addEventListener("click", () => {
    alert("Nombres: Leonardo Ivan Anthony");
})
lastNamesButton.addEventListener("click", () => {
    alert("Apellidos: Choquehuanca Salas");
})
hobbitButton.addEventListener("click", () => {
    alert("Hobbit: Respirar");
})
ageButton.addEventListener("click", () => {
    alert("Edad: 15");
})
carreraButton.addEventListener("click", () => {
    alert("Carrera: Ingenieria de Software con Inteligencia Artificial");
})