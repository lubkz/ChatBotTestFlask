function minhaFuncao() {
    alert("Você clicou!")

}

let id = 1
let somMon = document.getElementById("montando")
function iniciarPagina() {
  btnInt = document.getElementById("00");
  btnInt.remove();
  somMon.volume = 0.2;
  somMon.play();


  setTimeout(RitmoLoop, 800);

}

function fadeOutAudio(audio, velocidade = 0.05, intervalo = 200) {
  const fade = setInterval(() => {
    if (audio.volume > velocidade) {
      audio.volume -= velocidade;

    } else {
      audio.volume = 0;
      audio.pause();
      clearInterval(fade)

    }
  }, intervalo)

}

function RitmoLoop() {

  let intervalo = setInterval(() =>{
    const elemento = document.querySelector(`[data-index="${id}"]`);
    const nextElemento = document.querySelector(`[data-index="${id + 1}"]`);
    if (elemento) {
      elemento.classList.remove('escondido');
      id = id + 1

      if (id % 6 === 1) {
        clearInterval(intervalo)
        setTimeout(RitmoLoop, 1200)
      }
    } 
    if (!nextElemento) {
      fadeOutAudio(somMon);

    }

  }, 550)

}

function ativarCorrupcao() {
    const elementos = document.querySelectorAll("h1, h2, p, a"); // você pode adicionar outros se quiser
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:<>,.?/";
    let intervalos = [];

    let glitchCriado = false;

    const textosOriginais = new Map();

    let somGlit = document.getElementById("glitchSound")
    somGlit.volume = 0.2;
    let somTrn = document.getElementById("alghSound")
    somTrn.volume = 0.3;

    somGlit.play();
    somTrn.play();

    document.body.style.backgroundColor = "#000000"
    
    elementos.forEach(el => {
      const textoOriginal = el.innerText;
      textosOriginais.set(el, textoOriginal)
      let i = 0;
  
      const intervalo = setInterval(() => {
        let spreadBtn = document.querySelector('button[onclick="ativarCorrupcao()"]');
        spreadBtn.disabled = true;

        let textoCorrompido = "";
        for (let j = 0; j < textoOriginal.length; j++) {
          if (textoOriginal[j] === " ") {
            textoCorrompido += " ";
          } else {
            textoCorrompido += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
          }
        }
        el.innerText = textoCorrompido;
        i++;
        

        // Para após algumas "corrupções"
        if (i > 65) {
          clearInterval(intervalo);

          if (!glitchCriado) {
            glitchCriado = true
          
            let voice = document.createElement("p");
            voice.style.position = "fixed";
            voice.style.bottom = "20px";
            voice.style.left = "50%";
            voice.style.transform = "translateX(-50%)"
            voice.style.color ="rgb(255, 0, 0)"

            voice.textContent = "__Null _intent";
            document.body.appendChild(voice);

            setTimeout(() => {
              console.log(voice.innerText = "__Behind _good _Int--t-s")

              setTimeout(() => {
                let btn = document.createElement("button")
                btn.textContent = "Not yours"
                btn.style.position = "fixed";
                btn.style.bottom = "50px";
                btn.style.right = "50px"
                document.body.appendChild(btn)

                btn.onclick = () => {
                  let rect = btn.getBoundingClientRect();
                  let olho = mostrarOlho();
                  spreadBtn.disabled = false;

                  voice.remove();

                  document.body.style.color = "black"

                  somGlit.play();

                  document.getElementById("botaoSpread").classList.add("escondido")
                  document.getElementById("botaoChatBot").classList.add("escondido") 
                  document.getElementById("navBarInicio").classList.add("escondido")
                  

                  olho.style.width = btn.offsetWidth + "px"
                    // Aplica as mesmas dimensões e posição ao olho
                  olho.style.position = "fixed"; // importante!
                  olho.style.top = rect.top + "px";
                  olho.style.left = rect.left + "px";
                  olho.style.width = rect.width + "px";

                  btn.replaceWith(olho);

                  setTimeout(() => {
                    document.body.style.backgroundColor = "#f5f5f5";

                    somGlit.play();

                    textosOriginais.forEach((texto, elemento) => {
                      elemento.innerText = texto;

                    })

                    document.body.style.color = "#333"

                    document.getElementById("botaoSpread").classList.remove("escondido")
                    document.getElementById("botaoChatBot").classList.remove("escondido") 
                    document.getElementById("navBarInicio").classList.remove("escondido")

                  }, 3000)
                }
              }, 2000);
            }, 5000)
          }
        }
        }, 100);

      intervalos.push(intervalo);
    });
  }
  
function mostrarOlho () {
  let img = document.createElement("img");
  img.src="static/gifs/olho.gif";
  img.style.position = "fixed";
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.zIndex = "9999";
  document.body.appendChild(img);

  setTimeout (() => {
    img.remove();
  }, 3000);

  return img;
}