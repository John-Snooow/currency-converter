//cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


//obitendo os elementos do foemulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//manipulando o input amount para recerber somente números. 
amount.addEventListener("input", ()=>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) =>{
    event.preventDefault()// eveita que a pagina tenha o carregamente padrão 
    
    switch (currency.value){ // para ver qual é a moeda Selecionada.
        case "USD":
            covertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            covertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            covertCurrency(amount.value, GBP, "£")
            break;
    }
}

//Função para converter a moeda.
    function covertCurrency(amount, price, sympol){
        console.log(amount, price,sympol)
    }
