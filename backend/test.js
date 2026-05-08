import { getBarsInTucuman } from "./src/api/NO-VAgooglePlaces.js";

const run = async () => {
  const data = await getBarsInTucuman();
  console.log(data.slice(0, 3));
};

run();