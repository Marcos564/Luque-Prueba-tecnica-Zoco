export const createBar = (data) => ({
  id: data.place_id,
  nombre: data.nombre,
  ubicacion: data.ubicacion,
  telefono: data.telefono || "no proporcionado",
  categoria: data.categoria || "otro",
  fuente: data.fuente || "manual",
  descripcion: data.descripcion,
  fechaObtencion: data.fechaObtencion ||new Date().toISOString(),
  activo: true
});