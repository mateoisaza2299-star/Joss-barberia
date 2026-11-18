# Joss Peluquería

Beta de la página pública. El nombre, el contacto, los servicios y los profesionales se editan en el objeto `CONFIG` al inicio de `js/config.js`.

La reserva no usa servidor: el modal pide servicio, profesional, día, hora y datos, guarda la cita en `localStorage` y abre WhatsApp con el resumen. Las horas ocupadas son las ya guardadas ese día. El guardado está aislado en `agendaLocal` dentro de `js/reservas.js`.

Las fotos de la página están en `img/`.
