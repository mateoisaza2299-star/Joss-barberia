const NUMERO_WHATSAPP = "570000000000";

function telefonoVisible(numero) {
  const local = numero.startsWith("57") && numero.length === 12 ? numero.slice(2) : numero;
  return local.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

// Datos editables de la peluquería. El resto de la página lee este objeto.
export const CONFIG = {
  nombre: "Joss Peluquería",
  whatsapp: NUMERO_WHATSAPP,
  instagram: "joss.ejemplo",
  direccion: "Calle 78 # 30",
  horario: {
    texto: "Martes a sábado · 9:00 a. m. a 7:00 p. m.",
    dias: [2, 3, 4, 5, 6],
    abre: "09:00",
    cierra: "19:00"
  },
  servicios: [
    { id: "corte-dama", nombre: "Corte dama", descripcion: "Corte, forma y acabado pensados para tu cabello.", duracion: 45, precio: 45000 },
    { id: "corte-caballero", nombre: "Corte caballero", descripcion: "Corte preciso, con el largo y el estilo que prefieras.", duracion: 30, precio: 28000 },
    { id: "color", nombre: "Color", descripcion: "Color uniforme, brillo y cobertura a tu medida.", duracion: 120, precio: 150000 },
    { id: "mechas", nombre: "Mechas", descripcion: "Luces y dimensión con una aplicación cuidada.", duracion: 150, precio: 180000 },
    { id: "peinado", nombre: "Peinado", descripcion: "Peinado de ocasión o de día, con forma y fijación.", duracion: 45, precio: 55000 },
    { id: "tratamiento-capilar", nombre: "Tratamiento capilar", descripcion: "Hidratación y reparación para un cabello más sano.", duracion: 60, precio: 70000 }
  ],
  profesionales: [
    { id: "profesional-1", nombre: "Profesional 1", rol: "Estilista" },
    { id: "profesional-2", nombre: "Profesional 2", rol: "Colorista" }
  ]
};

const serviciosPublicos = CONFIG.servicios.map((item, indice) => ({
  id: item.id,
  nombre: item.nombre,
  descripcion: item.descripcion,
  duracion_min: item.duracion,
  precio: item.precio,
  orden: indice + 1,
  activo: true
}));

export const negocio = {
  nombre: CONFIG.nombre,
  nombreCorto: "Joss",
  ciudad: "",
  eslogan: "Joss Peluquería",
  enPreparacion: false,
  indexable: false,
  whatsapp: CONFIG.whatsapp,
  telefono: telefonoVisible(CONFIG.whatsapp),
  direccion: CONFIG.direccion,
  direccionCorta: CONFIG.direccion,
  instagram: CONFIG.instagram,
  horario: CONFIG.horario,
  mapaConsulta: CONFIG.direccion,
  unaSede: true,
  mostrarWhatsappContacto: true,
  mensajeWhatsApp: "Hola, quiero información sobre Joss Peluquería.",
  mensajeProductos: "Hola, quiero preguntar por los servicios de Joss Peluquería.",
  sitio: "",
  email: "",
  mapsUrl: "",
  mapaEmbed: "",
  zona: "",
  horasAntesDeCerrar: 1,
  bloqueMinutos: 60,
  redes: { resenas: "" },
  precios: Object.fromEntries(CONFIG.servicios.map((item) => [item.nombre, item.precio])),
  minutos: Object.fromEntries(CONFIG.servicios.map((item) => [item.nombre, item.duracion])),
  politicaReserva: "Para cambiar la cita, avísanos por WhatsApp.",
  avisoDatos: "Guardamos tu nombre, celular, servicio y fecha en este navegador para armar la reserva y enviarla por WhatsApp.",
  privacidad: [
    "Tratamos tu nombre y celular para enviarte el resumen de la cita por WhatsApp. La reserva queda guardada en este navegador."
  ],
  mensajeReserva: "",
  nosotros: {
    etiqueta: "Nosotros · Joss",
    titulo: "Color, corte y cuidado en un mismo lugar",
    intro: "En Joss Peluquería el tiempo se toma con calma: escuchamos cómo quieres verte y trabajamos el cabello con técnica, color y cuidado.",
    edadesTitulo: "Lo que hacemos",
    edades: ["Corte", "Color", "Mechas", "Cuidado"],
    historias: [
      {
        titulo: "La entrada",
        texto: "Mármol, luz y un recibidor para empezar la visita con calma.",
        alt: "Entrada de Joss Peluquería, con piso de mármol negro y el salón al fondo."
      },
      {
        titulo: "El salón",
        texto: "Espejos, estaciones y una luz pareja para ver el color con claridad.",
        alt: "Interior de Joss Peluquería con sillas negras y espejos de arco."
      },
      {
        titulo: "La recepción",
        texto: "Un mostrador para recibirte y organizar el turno con calma.",
        alt: "Recepción de Joss Peluquería, con mostrador negro y detalle dorado."
      }
    ],
    valoresTitulo: "Lo que nos mueve",
    valores: [
      { titulo: "Presentación impecable", texto: "Te recibimos como queremos que salgas." },
      { titulo: "Técnica y color", texto: "Corte, mechas y color con pulso y cuidado." },
      { titulo: "Compromiso", texto: "Tu tiempo importa y lo cumplimos." },
      { titulo: "Actitud de servicio", texto: "Atención premium, con trato cercano." }
    ],
    cita: "El cabello también se cuida: color, forma y un acabado que se nota.",
    firma: "Joss Peluquería",
    cierreTitulo: "Tu turno está listo",
    cierreReserva: "Reserva tu cita",
    cierreLlegar: "Cómo llegar",
    cifras: []
  },
  servicios: serviciosPublicos,
  preguntas: [
    { pregunta: "¿Cómo agendo mi cita?", respuesta: "Desde esta página. Al confirmar, se abre WhatsApp con el resumen de tu reserva." },
    { pregunta: "¿Qué servicios tienen?", respuesta: "Corte, color, mechas, peinado y tratamiento capilar." },
    { pregunta: "¿Dónde están?", respuesta: "" },
    { pregunta: "¿Cuál es el horario?", respuesta: "" }
  ],
  textos: {
    heroEtiqueta: "Joss Peluquería",
    heroAntes: "Color, estilo y ",
    heroPalabra: "CUIDADO",
    heroDespues: "",
    heroLead: "Una peluquería para cortar, colorear y cuidar tu cabello.",
    agenda: "Reserva tu cita",
    verServicios: "Ver servicios",
    datoAgenda: "Reserva en línea",
    datoEdades: "Damas y caballeros",
    confianzaEdades: "Color y estilo",
    confianzaCortes: "Corte, color y cuidado",
    confianzaProductos: "Mechas y tratamientos",
    serviciosTitulo: "Menú de servicios",
    consultar: "",
    serviciosNota: "",
    productos: "Cuidado en casa para alargar el color y el brillo",
    preguntaProductos: "Pregunta por WhatsApp",
    pista: "Busca el letrero de Joss.",
    llegar: "Cómo llegar",
    llamar: "Llamar",
    reservasTitulo: "Reserva tu cita en línea",
    reservasNota: "",
    faqTitulo: "Preguntas frecuentes"
  }
};

export function urlSitio(pagina) {
  const base = String(negocio.sitio || "").replace(/\/+$/, "");
  if (!pagina || pagina === "index" || pagina === "index.html") return base + "/";
  return base + "/" + String(pagina).replace(/^\//, "");
}

export function consultaMapa() {
  return String(negocio.mapaConsulta || "").trim() || [negocio.nombre, direccionLinea()].filter(Boolean).join(", ");
}

export function enlaceMapa() {
  const guardado = String(negocio.mapsUrl || "").trim();
  if (guardado) return guardado;
  const consulta = consultaMapa();
  if (!consulta) return "";
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(consulta);
}

export function enlaceDirecciones() {
  return enlaceMapa();
}

export function enlaceEmbed() {
  const guardado = String(negocio.mapaEmbed || "").trim();
  if (guardado) return guardado;
  const consulta = consultaMapa();
  if (!consulta) return "";
  return "https://www.google.com/maps?q=" + encodeURIComponent(consulta) + "&output=embed";
}

export function enlaceTelefono() {
  const wa = String(negocio.whatsapp || "").replace(/\D/g, "");
  if (wa) return "tel:+" + wa;
  let tel = String(negocio.telefono || "").replace(/\D/g, "");
  if (!tel) return "";
  if (tel.length === 10) tel = "57" + tel;
  return "tel:+" + tel;
}

export function formatPrecio(valor) {
  if (valor == null || valor === "") return "";
  const n = Number(valor);
  if (!Number.isFinite(n)) return "";
  if (n < 1000) return "$" + n + "k";
  return "$" + new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(n);
}

export function formatoPrecio(valor) {
  return formatPrecio(valor);
}

export function formatDuracion(minutos) {
  const n = Math.round(Number(minutos));
  if (!Number.isFinite(n) || n <= 0) return "";
  const horas = Math.floor(n / 60);
  const resto = n % 60;
  if (horas && resto) return horas + " h " + resto + " min";
  if (horas) return horas + " h";
  return resto + " min";
}

export function esServicioVip(servicio) {
  if (!servicio) return false;
  if (servicio.destacado === true || servicio.vip === true || servicio.es_vip === true) return true;
  return String(servicio.nombre || "").trim().toLowerCase() === "servicio vip";
}

export function esAdicional(servicio) {
  const nombre = String(servicio && servicio.nombre || "").trim().toLowerCase();
  const categoria = String(servicio && servicio.categoria || "").trim().toLowerCase();
  return nombre === "depilada de nariz" || categoria === "adicionales" || categoria === "adicional";
}

export function ordenarServicios(lista) {
  const rango = (item) => (esServicioVip(item) ? 0 : esAdicional(item) ? 2 : 1);
  return (lista || []).slice().sort((a, b) => rango(a) - rango(b) || (Number(a.orden) || 0) - (Number(b.orden) || 0) || String(a.nombre || "").localeCompare(String(b.nombre || ""), "es"));
}

export function rangoPrecio() {
  const valores = Object.values(negocio.precios).map(Number).filter((n) => n > 0);
  if (!valores.length) return "";
  const min = Math.min(...valores);
  const max = Math.max(...valores);
  if (min === max) return formatoPrecio(min);
  return formatoPrecio(min) + "–" + formatoPrecio(max);
}

export function direccionLinea() {
  const d = negocio.direccion;
  if (!d) return "";
  if (typeof d === "string") return d.trim();
  return [d.calle, d.barrio, d.ciudad, d.region].filter(Boolean).join(", ");
}

export function urlInstagram() {
  const raw = String(negocio.instagram || "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  return "https://www.instagram.com/" + raw.replace(/^@/, "").replace(/\/+$/, "") + "/";
}

export function handleInstagram() {
  const raw = String(negocio.instagram || "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return "@" + raw.replace(/\/+$/, "").split("/").pop();
  return "@" + raw.replace(/^@/, "");
}

export function reservasEnLinea() {
  return Array.isArray(CONFIG.servicios) && CONFIG.servicios.length > 0;
}

export function enlaceWhatsapp(texto) {
  const numero = String(negocio.whatsapp || "").replace(/\D/g, "");
  if (!numero) return "";
  const mensaje = texto || negocio.mensajeWhatsApp || "Hola, quiero información sobre Joss Peluquería.";
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export function diaSemana(iso) {
  const [year, month, day] = String(iso || "").split("-").map(Number);
  if (!year || !month || !day) return -1;
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function tituloPublico() {
  return negocio.nombre;
}

export function descripcionPublica() {
  return negocio.nombre + ". Peluquería de color, estilo y cuidado capilar.";
}

export function textoHorarioPublico() {
  const horario = negocio.horario;
  if (horario && typeof horario === "object" && horario.texto) return String(horario.texto);
  if (typeof horario === "string") return horario.trim();
  return "";
}

export function callePublica() {
  const completa = String(negocio.direccion || "").trim();
  const ciudad = String(negocio.ciudad || "").trim();
  const colas = ciudad ? [", " + ciudad + ", Colombia", ", " + ciudad] : [];
  const cola = colas.find((item) => completa.endsWith(item));
  return cola ? completa.slice(0, -cola.length) : completa;
}

export function partesBogota(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date || new Date());
  const pick = (type) => parts.find((item) => item.type === type).value;
  const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  let hora = Number(pick("hour"));
  if (hora === 24) hora = 0;
  return {
    iso: pick("year") + "-" + pick("month") + "-" + pick("day"),
    dia: map[pick("weekday").slice(0, 3)] ?? 0,
    minutos: hora * 60 + Number(pick("minute"))
  };
}

function reglasHorario() {
  const horario = negocio.horario;
  if (Array.isArray(horario)) return horario;
  if (!horario || typeof horario !== "object" || !horario.abre || !horario.cierra) return [];
  const dias = (Array.isArray(horario.dias) ? horario.dias : []).map((dia) => {
    const numero = Number(dia);
    return numero === 7 ? 0 : numero;
  });
  return [{ dias, abre: horario.abre, cierra: horario.cierra }];
}

export function reglaDelDia(dia) {
  return reglasHorario().find((item) => Array.isArray(item.dias) && item.dias.includes(dia)) || null;
}

function reglaDe(dia) {
  return reglaDelDia(dia);
}

function minutosReloj(hhmm) {
  const [hora, minuto] = String(hhmm || "0:0").split(":").map(Number);
  return hora * 60 + minuto;
}

export function horaCorta(hhmm) {
  const [hora, minuto] = String(hhmm || "00:00").split(":");
  return String(Number(hora)) + ":" + minuto;
}

export function hora12(hhmm) {
  const hour = Number(String(hhmm || "00:00").slice(0, 2));
  const suffix = hour < 12 ? "am" : "pm";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return hour12 + ":00 " + suffix;
}

export function horasDelDia(iso) {
  const regla = reglaDe(diaSemana(iso));
  if (!regla || regla.cerrado || !regla.abre || !regla.cierra) return [];
  const abre = Number(String(regla.abre).slice(0, 2));
  const cierra = Number(String(regla.cierra).slice(0, 2));
  const last = cierra - Number(negocio.horasAntesDeCerrar || 0);
  const slots = [];
  for (let hour = abre; hour <= last; hour += 1) slots.push(String(hour).padStart(2, "0") + ":00");
  return slots;
}

export function horarioPublicado() {
  return reglasHorario().some((item) => !item.cerrado && item.abre && item.cierra);
}

export function textoHorario(regla) {
  if (regla && regla.cerrado) return "Cerrado";
  if (!regla || !regla.abre || !regla.cierra) return "";
  return hora12(regla.abre) + " – " + hora12(regla.cierra);
}

export function estadoApertura(date) {
  if (!horarioPublicado()) return { abierto: false, texto: "Por confirmar", pendiente: true };
  const ahora = partesBogota(date);
  const hoy = reglaDe(ahora.dia);
  if (hoy && !hoy.cerrado && hoy.abre && hoy.cierra) {
    const abre = minutosReloj(hoy.abre);
    const cierra = minutosReloj(hoy.cierra);
    if (ahora.minutos >= abre && ahora.minutos < cierra) return { abierto: true, texto: "Abierto ahora" };
  }
  const nombres = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  for (let salto = 0; salto < 8; salto += 1) {
    const dia = (ahora.dia + salto) % 7;
    const regla = reglaDe(dia);
    if (!regla || regla.cerrado || !regla.abre) continue;
    if (salto === 0 && ahora.minutos >= minutosReloj(regla.abre)) continue;
    const hora = horaCorta(regla.abre);
    if (salto === 0) return { abierto: false, texto: "Cerrado, abrimos hoy a las " + hora };
    if (salto === 1) return { abierto: false, texto: "Cerrado, abrimos mañana a las " + hora };
    return { abierto: false, texto: "Cerrado, abrimos el " + nombres[dia] + " a las " + hora };
  }
  return { abierto: false, texto: "Cerrado ahora" };
}

export function celularColombia(valor) {
  let digits = String(valor || "").replace(/\D/g, "");
  if ((digits.startsWith("57") && digits.length === 12) || (digits.startsWith("057") && digits.length === 13)) {
    digits = digits.slice(-10);
  }
  if (digits.length === 10 && digits.startsWith("3")) {
    return { ok: true, digitos: digits };
  }
  if (!digits) return { ok: false, mensaje: "Escribe tu celular." };
  return { ok: false, mensaje: "El celular debe tener 10 dígitos y empezar por 3. Ejemplo: 300 123 4567." };
}

export function avisoDuracion(nombre) {
  const minutos = Number(negocio.minutos[nombre]);
  if (!Number.isFinite(minutos) || minutos <= 0) return "";
  const base = "Duración estimada: " + minutos + " min.";
  if (minutos > Number(negocio.bloqueMinutos || 60)) {
    return base + " El bloque de una hora puede quedarse corto. Si necesitas más tiempo, escríbelo en la nota.";
  }
  return base;
}

export function minutosDe(nombre) {
  const minutos = Number(negocio.minutos[nombre]);
  return Number.isFinite(minutos) && minutos > 0 ? minutos : 60;
}
