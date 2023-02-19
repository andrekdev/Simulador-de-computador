const move = function (element) {
  const elements = document.querySelectorAll(".element");
  let maxZIndex = 0;
  elements.forEach((element) => {
    element.addEventListener("mousedown", () => {
      maxZIndex = Math.max(maxZIndex, parseInt(element.style.zIndex) || 0);

      element.style.position = "absolute";
      element.style.zIndex = maxZIndex + 1;

      document.onmousemove = (e) => {
        const x = e.pageX;
        const y = e.pageY;

        element.style.left = x - 50 + "px";
        element.style.top = y - 50 + "px";
      };
    });
  });

  document.onmouseup = function (e) {
    document.onmousemove = null;
  };
};

const data = new Date();

const dia = String(data.getDate()).padStart(2, "0");
const mes = String(data.getMonth() + 1).padStart(2, "0");
const ano = data.getFullYear();

const dataAtual = `${dia}/${mes}/${ano}`;

console.log(dataAtual);

document.querySelector(".hora-sobre").innerHTML = dataAtual;

const botaoJogo = document.querySelector(".doomGame");
const telaJogo = document.querySelector(".modal");
const telaDesligarPC = document.querySelector(".modal2");
//---------------------------------------
botaoJogo.addEventListener("dblclick", function () {
  let telaJogoC = `  <div class="modal-content  animate__animated animate__backInDown">
    <span class="close">&times;</span>
    <div class="game">
      <iframe
        src="//funhtml5games.com?embed=mariofps"
        style="width: 610px; height: 480px; border: none"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>`;

  telaJogo.innerHTML = telaJogoC;

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    telaJogo.innerHTML = " ";
  });
});

//---------------------
const botaoGoogle = document.querySelector(".google");

botaoGoogle.addEventListener("dblclick", function () {
  let telaGoogleC = `<div class="modal-content animate__animated animate__backInDown">
  <span class="close">&times;</span>
  <div class="google"> 
  <iframe src="https://www.google.com/webhp?igu=1" style="width: 610px; height: 480px; border: none"
  frameborder="0"
  scrolling="no"></iframe>
</div>
</div>`;

  telaJogo.innerHTML = telaGoogleC;

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    telaJogo.innerHTML = " ";
  });
});

//--------------------------------

const botaoCalculadora = document.querySelector(".calculadora");

botaoCalculadora.addEventListener("dblclick", function () {
  let telaCalculadoraC = `<div class="modal-content  animate__animated animate__backInDown">
  <span class="close">&times;</span>
  <div class="fundo">
  <h1>Calculadora</h1>
  <p class="resultado"></p>
  <table>
    <tr>
      <td><button onclick="clean()">C</button></td>
      <td><button onclick="back()"><</button></td>
      <td><button onclick="insert('/')">/</button></td>
      <td><button onclick="insert('*')">X</button></td>
    </tr>
    <tr>
      <td><button onclick="insert(7)">7</button></td>
      <td><button onclick="insert(8)">8</button></td>
      <td><button onclick="insert(9)">9</button></td>
      <td><button onclick="insert('-')">-</button></td>
    </tr>
    <tr>
      <td><button onclick="insert(4)">4</button></td>
      <td><button onclick="insert(5)">5</button></td>
      <td><button onclick="insert(6)">6</button></td>
      <td><button onclick="insert('+')" >+</button></td>
    </tr>
    <tr>
      <td><button onclick="insert(3)">3</button></td>
      <td><button onclick="insert(2)">2</button></td>
      <td><button onclick="insert(1)">1</button></td>
      <td rowspan="2"><button onclick="calcular()" >=</button></td>
    </tr>
    <tr>
      <td colspan="2"><button onclick="insert(0)">0</button></td>
      <td><button onclick="insert('.')">.</button></td>
   
    </tr>
    
  </table>
</div>
</div>`;

  telaJogo.innerHTML = telaCalculadoraC;

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    telaJogo.innerHTML = " ";
  });
});

//---------------------------------
const botaoPasta = document.querySelector(".pasta");

botaoPasta.addEventListener("dblclick", function () {
  let telaPastaC = `<div class="modal-content animate__animated animate__backInDown">
  <span class="close">&times;</span>
  <h1> Pasta </h1>
  <div class="arquivos-da-pasta">
  <div class="diretorio-da-pasta"
  <br><br><br><br>
  <h1> Desktop <i class="fa fa-play" style="font-size:38px;"></i> <h1>
  </div>
  <div class="arquivos"> 
  <i class="fa fa-file" style="font-size:48px; color: #ffff;"><p style="font-size: 20px;">Arquivo</p></i>
  <i class="fa fa-file" style="font-size:48px; color: #ffff;"><p style="font-size: 20px;">Arquivo</p></i>
  <i class="fa fa-file" style="font-size:48px; color: #ffff;"><p style="font-size: 20px;">Arquivo</p></i>
  <i class="fa fa-file" style="font-size:48px; color: #ffff;"><p style="font-size: 20px;">Arquivo</p></i>
  </div>
 
</div>`;

  telaJogo.innerHTML = telaPastaC;

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    telaJogo.innerHTML = " ";
  });
});

const botaoDesligar = document.querySelector(".element2-logo");
botaoDesligar.addEventListener("click", function () {
  let telaDesligarC = `
  <div class="modal-content2 animate__animated animate__zoomInUp">
  <span class="close">&times;</span>
  <i class="fa fa-power-off" style="font-size:48px; "></i>
  <br>
  <a href="index.html" style="border-bottom:1px solid black ;">Desligar</a>
  <br>
  <a href="https://github.com/andrekdev">Criador</a>

</div>
`;

  telaDesligarPC.innerHTML = telaDesligarC;

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    telaDesligarPC.innerHTML = " ";
  });
});

function insert(num) {
  var numero = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = numero + num;
}

function clean() {
  document.querySelector(".resultado").innerHTML = "";
}

function back() {
  var resultado = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  var resultado = document.querySelector(".resultado").innerHTML;

  if (resultado) {
    document.querySelector(".resultado").innerHTML = eval(resultado);
  }
}
