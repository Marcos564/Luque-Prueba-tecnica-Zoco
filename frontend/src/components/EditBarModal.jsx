import { useState, useEffect } from "react";
import "../EditBarModal.css";


export default function EditBarModal({ bar, onClose, onSave, handleDeactivate }) {
  const [formData, setFormData] = useState(bar);

  useEffect(() => {
    setFormData(bar);
  }, [bar]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    


  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ background: "white", padding: 20 }}>
        <h3>Editar Bar</h3>

        {/* <p className="p_edit">Nombre del bar</p> --> */}
        <input
          name="nombre"
          className="input_edit"
          value={formData?.nombre || ""}
          onChange={handleChange}
        />

        <input
          name="ubicacion"
          className="input_edit"
          value={formData?.ubicacion || ""}
          onChange={handleChange}
        />

        
        <input
          name="categoria"
          className="input_edit"
          value={formData?.categoria || ""}
          onChange={handleChange}
        />

        <br /><br />

        

        <button className="btn_edit" onClick={() => onSave(formData)}>
          Guardar cambios
        </button>

        <button className="btn_edit" onClick={() => handleDeactivate(formData)}>
          Desactivar
        </button>

        <button className="btn_edit" onClick={onClose}>
          Cancelar
        </button>


      </div>
    </div>
  );
}