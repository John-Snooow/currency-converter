//obitendo os elementos do foemulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//manipulando o input amount para recerber somente números. 
amount.addEventListener("input", ()=>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Catando o evento de submit (enviar) do formulário.
form.onsubmit = (event) =>{
    event.preventDefault()// eveita que a pagina tenha o carregamente padrão 
    console.log(currency.value)
}
