import { CelestialBody } from "./CelestialBody";

export class Planet implements CelestialBody{
    constructor(
        public name: string, 
        public age: number, 
        public size: number, 
        public waterContent: number){}
}