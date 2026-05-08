import axios from "axios";
import "../App.css"

function ScrapearButton() {

  const handleScraping = async () => {
    try {

      const response = await axios.post(
        "http://localhost:3000/run-scraping"  //3000 porque es back
      );

      console.log("Respuesta:", response.data);

      alert("Scraping ejecutado (puede tardar unos segundos en cargar la informacion");

    } catch (error) {

      console.error(error);

      alert("Error al ejecutar scraping de n8n");
    }
  };

  return (
    <button className='btn_scrapear' onClick={handleScraping}>
      Scrapear datos
    </button>
  );
}

export default ScrapearButton;