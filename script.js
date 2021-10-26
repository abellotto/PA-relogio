let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');


function updateClock() {
    let now = new Date();
    let hour = ("00" + now.getHours()).slice(-2);
    let minute = ("00" + now.getMinutes()).slice(-2);
    let second = ("00" + now.getSeconds()).slice(-2);

    digitalElement.innerHTML = `${hour}:${minute}:${second}`;

    let sDeg = ((360 / 60) * second) -90 //-90 é para ajustar o ponto zero
    let mDeg = ((360 / 60) * minute) -90
    let hDeg = ((360 / 12) * hour) + ((30/60) * minute) -90; //(30/60) * minute) => calculo para o ponteiros das horas andar 0.5 graus por minuto para completar os 30graus entre uma hora e outra.

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    
}



setInterval(updateClock, 1000);
updateClock();



// function fixedZero(time) {
//     return time < 10 ? `0${time}` : time;
// }