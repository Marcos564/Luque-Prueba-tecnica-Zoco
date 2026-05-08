import express from "express";
import cors from "cors";
import barRoutes from "./src/routes/barRoutes.js";
import fs from "fs";  
import { readData, writeData } from "./src/db/db.js";
import { writeLog } from "./src/services/logService.js";
import axios from "axios";

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());

app.use("/bares", barRoutes);

app.get("/", (req, res) => {
  res.send("backend corriendo");
});

//------- metodo para llamar al webhook de n8n----------------
app.post("/run-scraping", async (req, res) => {

  try {

    const response = await axios.post(
      "https://testep-n8n.cmelbb.easypanel.host/webhook/scrape_bars_tucuman"
    );

    res.json({
      success: true,
      data: response.data
    });

  } catch (error){

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Error ejecutando workflow"
    });
  }
});

//------ metodo para guardar los logs------------
app.post("/logs", (req, res) => {
  const log = req.body;

  //se guarda en logs.json
  writeLog(log);

  res.json({ ok: true });
});



// ----- metodo para editar bares --------
app.put("/bares/:id", (req, res) => {

  const id = req.params.id;
  const updatedBar = req.body;

  const bares  = readData();

  const index = bares.findIndex(
    (bar) => String(bar.id) === String(id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Bar no encontrado"
    });
  }

  bares[index] = updatedBar;


  writeData(bares);

  res.json({
    message: "Bar actualizado",
    data: updatedBar
  });
});


app.listen(3000, () => {
  console.log("Server corriendo on http://localhost:3000");
});