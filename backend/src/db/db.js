import fs from "fs";

const FILE = "./data/bares.json";

/** 
export const readData = () => {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
};
*/

export const readData = () => {
  if (!fs.existsSync(FILE)) return [];

  return JSON.parse(
    fs.readFileSync(FILE, "utf-8")
  );
};


export const writeData = (data) => {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};