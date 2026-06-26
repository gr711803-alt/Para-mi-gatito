// ================================
// BOTONES
// ================================

const entrar = document.getElementById("entrar");
const contenido = document.getElementById("contenido");
const inicio = document.querySelector(".inicio");

const carta = document.getElementById("carta");
const modal = document.getElementById("cartaModal");
const cerrar = document.getElementById("cerrar");

// ================================
// ENTRAR
// ================================

entrar.addEventListener("click", ()=>{

    inicio.style.display="none";

    contenido.style.display="flex";

});

// ================================
// CARTA
// ================================

carta.addEventListener("click", ()=>{

    modal.style.display="flex";

});

cerrar.addEventListener("click", ()=>{

    modal.style.display="none";

});

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}

// ================================
// ESTRELLAS
// ================================

const stars=document.getElementById("stars");

for(let i=0;i<220;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}

// ================================
// CORAZONES
// ================================

const hearts=document.getElementById("hearts");

function crearCorazon(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*30)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(crearCorazon,350);

// ================================
// FRASES
// ================================

const frases=[

"Cada día contigo vale la pena ❤️",

"Eres mi lugar favorito 🌹",

"Siempre elegiría conocerte.",

"Tu sonrisa ilumina mi vida.",

"Mi felicidad tiene tu nombre.",

"Gracias por existir.",

"Mi mejor historia comenzó contigo.",

"Eres mi paz.",

"Te amo muchísimo.",

"Siempre tú. ❤️"

];

function fraseAleatoria(){

    const mensaje=frases[Math.floor(Math.random()*frases.length)];

    console.log(mensaje);

}

setInterval(fraseAleatoria,7000);

// ================================
// BRILLO BOTÓN
// ================================

setInterval(()=>{

    entrar.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:1800

    });

},2200);

// ================================
// CAMBIO DE TÍTULO
// ================================

const titulos=[

"Para Ti ❤️",

"Mi Persona Favorita ❤️",

"Siempre Tú ❤️",

"Te Amo ❤️"

];

let indice=0;

setInterval(()=>{

    document.title=titulos[indice];

    indice++;

    if(indice>=titulos.length){

        indice=0;

    }

},2500);

//==============================
// CONTADOR
//==============================

// CAMBIA ESTA FECHA ❤️

const fecha=new Date("2020-05-23 00:00:00");

function actualizarTiempo(){

let ahora=new Date();

let diferencia=ahora-fecha;

let dias=Math.floor(diferencia/(1000*60*60*24));

let horas=Math.floor((diferencia/(1000*60*60))%24);

let minutos=Math.floor((diferencia/(1000*60))%60);

let segundos=Math.floor((diferencia/1000)%60);

document.getElementById("tiempo").innerHTML=

dias+" días ❤️<br>"+

horas+" horas<br>"+

minutos+" minutos<br>"+

segundos+" segundos";

}

setInterval(actualizarTiempo,1000);


//==============================
// FRASES
//==============================

const lista=[

"Te elegiría una y mil veces ❤️",

"Eres mi persona favorita.",

"Mi felicidad tiene tu nombre.",

"Siempre tú.",

"Gracias por existir.",

"Contigo todo es mejor.",

"Mi hogar está donde estés tú.",

"Cada día me enamoro más.",

"Eres mi mejor casualidad.",

"Mi futuro también te pertenece."

];

const boton=document.getElementById("cambiar");

const frase=document.getElementById("frase");

boton.onclick=function(){

let numero=Math.floor(Math.random()*lista.length);

frase.innerHTML=lista[numero];

};


//==============================
// MUSICA
//==============================

const musica=document.getElementById("musica");

const musicaBtn=document.getElementById("musicaBtn");

let sonando=false;

musicaBtn.onclick=function(){

if(!sonando){

musica.play();

musicaBtn.innerHTML="⏸️";

sonando=true;

}

else{

musica.pause();

musicaBtn.innerHTML="🎵";

sonando=false;

}

}

//===========================
// SORPRESA FINAL
//===========================

const sorpresa=document.getElementById("sorpresaBtn");

const pantalla=document.getElementById("pantallaFinal");

sorpresa.onclick=function(){

pantalla.classList.add("activo");

};

//===========================
// PÉTALOS
//===========================

function petalo(){

const p=document.createElement("div");

p.className="petalo";

p.innerHTML="🌸";

p.style.left=Math.random()*100+"vw";

p.style.fontSize=(15+Math.random()*20)+"px";

p.style.animationDuration=(7+Math.random()*5)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},12000);

}

setInterval(petalo,450);

//===========================
// LLUVIA DE CORAZONES FINAL
//===========================

function megaHeart(){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.top="-30px";

h.style.fontSize=(20+Math.random()*40)+"px";

h.style.zIndex="99999";

h.style.transition="8s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.top="110vh";

},50);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(megaHeart,300);