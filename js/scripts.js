// alert('ola jailson')

const key = "4af5137cd44956cf09e95ea7866cbede";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " ºC"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = dados.main.humidity + " % Humidade"

    // console.log(dados);
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((res) => res.json());

    
  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".container-input").value;

  buscarCidade(cidade);
}
