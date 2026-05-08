import fs from "fs";

const FILE = "./data/logs.json";

export const writeLog = (log) => {
  const data = fs.existsSync(FILE)
    ? JSON.parse(fs.readFileSync(FILE))
    : [];

  data.push(log);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};