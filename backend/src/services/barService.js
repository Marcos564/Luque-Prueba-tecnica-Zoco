import { readData, writeData } from "../db/db.js";
import { createBar } from "../models/barModel.js";

const normalize = (str) => str.toLowerCase().trim();

export const addBars = (bars) => {
  const existing = readData();

  let added = 0;

  bars.forEach((bar) => {
    const exists = existing.some(
      (b) => normalize(b.nombre) === normalize(bar.nombre)
    );

    if (!exists) {
      existing.push(createBar(bar));
      added++;
    }
  });

  writeData(existing);

  return { total: bars.length, added };
};

export const getBars = () => readData();

export const deleteBar = (id) => {
  const data = readData().filter((b) => b.id != id);
  writeData(data);
};