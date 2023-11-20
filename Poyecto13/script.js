let progreso = document.querySelector(".progreso"); //declarar variable para ubicar documento en el html//
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avance = 0;
//guardar funcion de intervalo//

let tiempo =setInterval(() => {
    avance += 1;
    progreso.style.width = `${avance}%`

    if (avance === 100) {
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent =`${avance}%`

},  75);
