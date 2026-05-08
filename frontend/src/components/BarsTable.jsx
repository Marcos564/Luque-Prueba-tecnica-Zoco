import { useEffect, useState } from "react";
import axios from "axios";
import EditBarModal from "./EditBarModal";

export default function BarsTable() {
  const [bars, setBars] = useState([]);

  //estados para el boton "editar"
  const [selectedBar, setSelectedBar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchBars = async () => {
    try {
      const res = await axios.get("http://localhost:3000/bares");  
      setBars(res.data);
    } catch (error) {
      console.error("Error cargando los bares:", error);
    }
  };

  useEffect(() => {
    fetchBars();
  }, []);

  const handleEdit = (bar) => {
    console.log("Editar bar:", bar);
    setSelectedBar(bar);
    setIsModalOpen(true);
  };

  const closeModal = () => {
   setIsModalOpen(false);
    setSelectedBar(null);
  };

  const handleChange = (e) => {
  setSelectedBar({
    ...selectedBar,
    [e.target.name]: e.target.value
  });
  };

  const handleSave = async (updatedBar) => {
   try {
     await axios.put(
      `http://localhost:3000/bares/${updatedBar.id}`,
       updatedBar
     );

    
    await fetchBars(); //recargar tabla
    closeModal();  // cerrar modal

    } catch (error) {
    console.error("Error actualizando el bar:", error);
  }
  };

  /*-----funcion para desactivar el bar---------*/
  const handleDeactivate = async (bar) => {

  try {
    const updatedBar = {
      ...bar,
      activo: false
    };

    await axios.put(
      `http://localhost:3000/bares/${bar.id}`,
      updatedBar
    );

    fetchBars();

  } catch (error) {
    console.error("Error desactivando bar:", error);
  }
  };




  return (
    <div>
      <h2>Bares scrapeados</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Categoría</th>
            <th>Fuente</th>
            <th>Descripcion</th>
            <th>Fecha Obtencion</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {bars.filter((bar) => bar.activo).map((bar) => (
            <tr key={bar.id}>
              <td>{bar.nombre}</td>
              <td>{bar.ubicacion}</td>
              <td>{bar.categoria}</td>
              <td>{bar.fuente}</td>
              <td>{bar.descripcion}</td>
              <td>{bar.fechaObtencion}</td>
              <td>
                <button className="btn_editar" onClick={() => handleEdit(bar)}>
                 Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <EditBarModal
          bar={selectedBar}
          onClose={closeModal}
          onSave={handleSave}
          handleDeactivate={handleDeactivate}
        />
      )}  

    </div>
  );
}