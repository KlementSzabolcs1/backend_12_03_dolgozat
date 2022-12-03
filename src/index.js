"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bolygo = require("./Planet");
const valami = [];
document.getElementById('gomb').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('hibakdiv').innerHTML = "";
    let bolygonev = document.getElementById('bolygonevinput').value.toString().trim();
    let bolygokor = document.getElementById('bolygokorinput').valueAsNumber;
    let bolygomeret = document.getElementById('bolygomeretinput').valueAsNumber;
    let bolygoviz = document.getElementById('bolygovizinput').valueAsNumber;
    const nevpattern = /^[ a-zA-Z]{2,}$/;
    const nevhelyes = nevpattern.test(bolygonev);
    const korhelyes = bolygokor > 0;
    const merethelyes = bolygomeret >= 1500;
    const vizhelyes = bolygoviz >= 0 && bolygoviz <= 100;
    console.log(nameOK);
    console.log(korhelyes);
    console.log(merethelyes);
    console.log(vizhelyes);
    let hibakdiv = "A ";
    if (nevhelyes && korhelyes && merethelyes && vizhelyes) {
        valami.push(new Planet_1.Planet(bolygonev, bolygokor, bolygomeret, planetWaterContent));
        document.getElementById('osszszam').textContent = `A felvett bolygók száma: ${valami.length}`;
        document.getElementById('osszkor').textContent = `A bolygók átlagos életkora: 
        ${valami.reduce((sum, item) => sum + item.age, 0) / valami.length}`;
    }
    else {
        if (!nevhelyes) {
            hibakdiv += "név, ";
        }
        if (!korhelyes) {
            hibakdiv += "életkor, ";
        }
        if (!merethelyes) {
            hibakdiv += "átmérő, ";
        }
        if (!vizhelyes) {
            hibakdiv += "vízfelület";
        }
        hibakdiv += " mező(k) hibásan lettek kitöltve!";
        let p = document.createElement('p');
        p.style.color = "red";
        p.textContent = hibakdiv;
        document.getElementById('hibakdiv').appendChild(p);
    }
});