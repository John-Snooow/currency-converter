//cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


//obitendo os elementos do foemulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
        try{
            //ixibindo a cotação da moeda selecionada.
            description.textContent = `${sympol} 1 = ${price}`

            //calcula o total.
            let total = amount * price
            
            //verifica se o resultado não é um número
            if(isNaN(total)){
                return alert("Por favor, digite um valor correspondente para converter")
            }

            //formata o valor total // troca o ponto por virgula ultilizando a função formatCurrencyBRL
            total = formatCurrencyBRL(total).replace("R$", "")
            //Exibe o resultado total
            result.textContent = `${total} Reais` 

            //Aplica a classe que exibe o footer para mostrar o resultado
            footer.classList.add("show-result")


        }catch(error){
            //Remove a classe do footer ocultando ele.
            footer.classList.remove("show-result")
            
            console.error(error)
            alert('Não foi possivel converter. Tente novamente mais tarde')
        }
    }

    //formata a moeda em real brasileiro
    function formatCurrencyBRL(value){
        //Converte para número para atualizar o toLocalString para formatar no padrão BRL  (R$ 00,00).
        return Number(value).toLocaleString("pt-BR", {
            style: "currency", 
            currency: "BRL",
        })
    }   