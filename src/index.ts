import { CelestialBody } from './CelestialBody'
import { Planet } from './Planet';

const valami: CelestialBody[] = [];

document.getElementById('gomb')!.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('hibakdiv')!.innerHTML = "";

    let bolygonev: string = (document.getElementById('bolygonevinput') as HTMLInputElement).value.toString().trim();
    let bolygokor: number = (document.getElementById('bolygokorinput') as HTMLInputElement).valueAsNumber;
    let bolygomeret = (document.getElementById('bolygomeretinput') as HTMLInputElement).valueAsNumber;
    let bolygoviz = (document.getElementById('bolygovizinput') as HTMLInputElement).valueAsNumber;

    const nevpattern: RegExp = /^[ a-zA-Z]{2,}$/;
    const nevhelyes: boolean = nevpattern.test(bolygonev);
    const korhelyes: boolean = bolygokor > 0;
    const merethelyes: boolean = bolygomeret >= 1500;
    const vizhelyes: boolean = bolygoviz >= 0 && bolygoviz <= 100;

    let hibakdiv = "A ";
    if (nevhelyes && korhelyes && merethelyes && vizhelyes){
        valami.push(new Planet(bolygonev, bolygokor, bolygomeret, bolygoviz));
        document.getElementById('osszszam')!.textContent = `A felvett bolygók száma: ${valami.length}`
        document.getElementById('osszkor')!.textContent = `A bolygók átlagos életkora: 
        ${valami.reduce((sum, item) => sum + item.age, 0) / valami.length}`
    } else {
        if (!nevhelyes){
            hibakdiv += "név, "
        }
        if (!korhelyes) {hibakdiv += "életkor, "}
        if (!merethelyes) {hibakdiv += "átmérő, "}
        if (!vizhelyes) {hibakdiv += "vízfelület"}

        hibakdiv += " mező(k) hibásan lettek kitöltve!"
        let p = document.createElement('p');
        p.style.color = "red";
        p.textContent = hibakdiv;
        document.getElementById('hibakdiv')!.appendChild(p);
    }
    

})