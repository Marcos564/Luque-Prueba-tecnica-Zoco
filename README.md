#  Sistema de Automatización de Bares en Tucumán

## 🎥 Link demo (3 min)
https://www.loom.com/share/95e3d37841dd46b1a58a4be6f3bcc14c
---

## 📌 Descripción del proyecto
Sistema que automatiza la obtención, procesamiento y gestión de bares en Tucumán mediante scraping/APIs, n8n e IA, con un backend propio y frontend de administración.


---

## 🚀 Funcionalidades principales

- Obtención automática de datos desde n8n (scraping / Apify )
- Procesamiento y limpieza de datos con IA
- Detección básica de duplicados
- CRUD completo de bares
- Sistema de logs de automatización
- Frontend administrativo para gestión de datos
- Notificaciones de error por Gmail.

---

## 🧱 Arquitectura del sistema

Explicación de componentes:

- **Frontend (React):**
  Interfaz para visualizar y gestionar bares

- **Backend (Node.js + Express):**
  API REST, lógica de negocio, persistencia en JSON

- **n8n (VPS):**
  Orquestación de scraping y automatización

- **IA:**
  Procesamiento de datos (limpieza, generación de descripciones)

- **Persistencia:**
  Archivos JSON (`bares.json`, `logs.json`) como base de datos simple

---

## 🔄 Flujo del sistema

1. Usuario ejecuta “Scrapear” desde frontend
2. n8n obtiene datos externos
3. Se procesan (IA + limpieza + validación)
4. Se registra log en `logs.json`
5. Backend recibe los datos ya procesados.
6. Se guardan en `bares.json`
7. El usuario puede editar manualmente datos de los bares.
8. Frontend actualiza la vista y se guardan los cambios en `bares.json`

---

## ⚙️ Cómo ejecutar el proyecto

### WebApp
```bash
cd backend
npm install
cd ../frontend
npm install
npm run dev 
```

### Automatización con n8n
El sistema requiere un flujo de n8n para la obtención de datos.
- Se utiliza ngrok para exponer el backend local:
```bash
ngrok http 3000
```

- Se debe configurar el webhook de n8n con la url generada con ngrok.

---

## ⚠️ Consideraciones importantes
- Es necesario tener Node.js instalado
- El sistema utiliza archivos JSON como persistencia.
- n8n corre externamente (VPS).
- ngrok es requerido solo para desarrollo local

---

## Criterio Técnico
### ¿Como evitas duplicados?
En este caso, al utilizar una única fuente de datos, la probabilidad de duplicados es baja. Sin embargo, para un escenario con múltiples fuentes, implementaría un proceso de normalización de datos utilizando IA para estandarizar campos como nombre y dirección de los bares.

Una vez normalizados, utilizaría combinaciones de campos clave (por ejemplo nombre + dirección) para verificar si un registro ya existe antes de guardarlo en el sistema.

### ¿Cómo escalarías este sistema?
Para escalar el sistema, reemplazaría la persistencia en archivos JSON por una base de datos SQL con tablas separadas para bares y logs.

Además, integraría múltiples fuentes de datos mediante distintos scrapers o APIs, centralizando toda la información en un único flujo automatizado.

Utilizaría IA para normalizar y estandarizar datos como nombres y direcciones, mientras que la detección de duplicados se realizaría mediante validaciones en backend y reglas de persistencia en la base de datos.

### ¿Qué problemas puede tener este flujo?
Uno de los principales problemas del flujo actual es la dependencia de ngrok para exponer el backend local. Si ngrok no está ejecutándose o la URL pública cambia, n8n no puede enviar los datos al sistema local ni registrar correctamente los logs.

Además, al depender de servicios externos, pueden ocurrir fallos de disponibilidad. También existen riesgos de inconsistencias en la información obtenida si las fuentes no mantienen formatos uniformes.

Sin embargo, el sistema cuenta con registro de errores y notificaciones por email para detectar fallos durante la automatización.

### ¿Cómo mejorarías la calidad de los datos?
- Aplicando validación estricta de esquema antes de guardar
- Usando IA para normalizar nombres, direcciones y categorías
- Enriquecimiento de datos con APIs externas.


