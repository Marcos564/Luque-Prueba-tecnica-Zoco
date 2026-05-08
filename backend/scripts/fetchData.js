import { addBars } from "../src/services/barService.js";


const data = [
  { nombre: "Bar Irlanda", ubicacion: "Tucumán", fuente: "mock" },
  { nombre: "Irlanda Bar", ubicacion: "Tucumán", fuente: "mock" },
  { nombre: "Antares", ubicacion: "Tucumán", fuente: "mock" }
];

const result = addBars(data);

console.log("[INFO] Resultado:", result);