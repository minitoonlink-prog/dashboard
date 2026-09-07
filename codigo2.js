const productos = [
  { id: 1, nombre: "Pierna", categoria: "Charcuteria", stock: 21.93, tipo_venta: "PESO", precio_por_kilo: 29000, precio_al_mayor: 24000 },
  { id: 2, nombre: "Ahumado (Jamón)", categoria: "Charcuteria", stock: 15.00, tipo_venta: "PESO", precio_por_kilo: 31000, precio_al_mayor: 28000 },
  { id: 3, nombre: "Pavo", categoria: "Charcuteria", stock: 5.00, tipo_venta: "PESO", precio_por_kilo: 29000, precio_al_mayor: 24000 },
  { id: 4, nombre: "Espalda", categoria: "Charcuteria", stock: 41.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 21000 },
  { id: 5, nombre: "Fiambre", categoria: "Charcuteria", stock: 9.85, tipo_venta: "PESO", precio_por_kilo: 24000, precio_al_mayor: 20000 },
  { id: 6, nombre: "Ajo", categoria: "Charcuteria", stock: 25.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 7, nombre: "Picante", categoria: "Charcuteria", stock: 3.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 8, nombre: "Ahumado (Chorizo)", categoria: "Charcuteria", stock: 25.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 9, nombre: "Queso", categoria: "Charcuteria", stock: 21.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 10, nombre: "Argentino", categoria: "Charcuteria", stock: 25.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 11, nombre: "Jamón (Chorizo)", categoria: "Charcuteria", stock: 13.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 12, nombre: "chorizo(Pollo)", categoria: "Charcuteria", stock: 22.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 13, nombre: "Parrillero", categoria: "Charcuteria", stock: 56.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 24000 },
  { id: 14, nombre: "Chuleta", categoria: "Charcuteria", stock: 53.00, tipo_venta: "PESO", precio_por_kilo: 26000, precio_al_mayor: 23000 },
  { id: 15, nombre: "Tocineta", categoria: "Charcuteria", stock: 7.00, tipo_venta: "PESO", precio_por_kilo: 50000, precio_al_mayor: 40000 },
  { id: 16, nombre: "Huesito", categoria: "Charcuteria", stock: 10.00, tipo_venta: "PESO", precio_por_kilo: 10000, precio_al_mayor: null },
  { id: 17, nombre: "Costilla", categoria: "Charcuteria", stock: 14.00, tipo_venta: "PESO", precio_por_kilo: 25000, precio_al_mayor: null },
  { id: 18, nombre: "Lomo", categoria: "Charcuteria", stock: 15.00, tipo_venta: "PESO", precio_por_kilo: 45000, precio_al_mayor: 40000 },
  { id: 19, nombre: "Selva Negra (Tender)", categoria: "Charcuteria", stock: 14.00, tipo_venta: "PESO", precio_por_kilo: 45000, precio_al_mayor: 40000 },
  { id: 20, nombre: "Mozarela", categoria: "Quesos", stock: 10.00, tipo_venta: "PESO", precio_por_kilo: 22000, precio_al_mayor: 47000 },
  { id: 21, nombre: "Mozarela Amarillo", categoria: "Quesos", stock: 11.00, tipo_venta: "PESO", precio_por_kilo: 24000, precio_al_mayor: 48500 },
  { id: 22, nombre: "Cheddar Amarillo", categoria: "Quesos", stock: 10.00, tipo_venta: "PESO", precio_por_kilo: 27000, precio_al_mayor: null },
  { id: 23, nombre: "Pardito (Amarillo)", categoria: "Quesos", stock: 3.00, tipo_venta: "PESO", precio_por_kilo: 38000, precio_al_mayor: null },
  { id: 24, nombre: "Gouda (Amarillo)", categoria: "Quesos", stock: 14.00, tipo_venta: "PESO", precio_por_kilo: 42000, precio_al_mayor: null },
  { id: 25, nombre: "Americano / Muster", categoria: "Quesos", stock: 30.00, tipo_venta: "PESO", precio_por_kilo: 45000, precio_al_mayor: null },
  { id: 26, nombre: "Edam", categoria: "Quesos", stock: 14.00, tipo_venta: "PESO", precio_por_kilo: 47000, precio_al_mayor: null },
  { id: 27, nombre: "Tipo Paisa", categoria: "Quesos", stock: 15.00, tipo_venta: "PESO", precio_por_kilo: 25000, precio_al_mayor: null },
  { id: 28, nombre: "Merideño", categoria: "Quesos", stock: 12.00, tipo_venta: "PESO", precio_por_kilo: 22000, precio_al_mayor: null },
  { id: 29, nombre: "Merideño Duro", categoria: "Quesos", stock: 17.00, tipo_venta: "PESO", precio_por_kilo: 23000, precio_al_mayor: null },
  { id: 30, nombre: "Muslos y alas", categoria: "Pollo", stock: 15.00, tipo_venta: "PESO", precio_por_kilo: 14300, precio_al_mayor: null },
  { id: 31, nombre: "Pechuga", categoria: "Pollo", stock: 25.00, tipo_venta: "PESO", precio_por_kilo: 16300, precio_al_mayor: null }
];

const data = productos.map((p) => ({
  ...p,
  precio_mostrar: p.tipo_venta === "PESO" ? (p.precio_por_kilo ?? 0) : (p.precio ?? 0)
}));

const ventasRecientes = [
  { id: 2001, cliente: "María González", productoId: 1, cantidad: 0.8, estado: "Pendiente", fecha: "2026-09-09" },
  { id: 2002, cliente: "Carlos Pérez", productoId: 20, cantidad: 0.5, estado: "En camino", fecha: "2026-09-09" },
  { id: 2003, cliente: "Laura Rojas", productoId: 15, cantidad: 0.4, estado: "Pendiente", fecha: "2026-09-08" },
  { id: 2004, cliente: "José Méndez", productoId: 4, cantidad: 1.1, estado: "Entregado", fecha: "2026-09-07" },
  { id: 2005, cliente: "Diana León", productoId: 31, cantidad: 0.9, estado: "Entregado", fecha: "2026-09-06" },
  { id: 2006, cliente: "Andrés Ruiz", productoId: 9, cantidad: 0.6, estado: "Pendiente", fecha: "2026-09-05" }
].map((venta) => {
  const producto = data.find((item) => item.id === venta.productoId);
  const precioUnitario = Number(producto?.precio_mostrar) || 0;

  return {
    ...venta,
    catalogoProductoId: producto?.id ?? venta.productoId ?? null,
    producto: producto?.nombre ?? "Producto",
    categoria: producto?.categoria ?? "Sin categoría",
    total: precioUnitario * (Number(venta.cantidad) || 0)
  };
});

const chartPalette = {
  grid: "rgba(148, 163, 184, 0.12)",
  text: "#94a3b8",
  title: "#f8fafc",
  purple: "#a855f7",
  purpleSoft: "rgba(168, 85, 247, 0.18)",
  cyan: "#22d3ee",
  cyanSoft: "rgba(34, 211, 238, 0.18)"
};

let ventasChartInstance = null;
let productosChartInstance = null;

function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function normalizarFecha(fecha) {
  return String(fecha ?? "").slice(0, 10);
}

function obtenerFechaSeleccionada() {
  const dateFilter = document.getElementById("dateFilter");
  return normalizarFecha(dateFilter?.value);
}

function obtenerVentasFiltradas() {
  const fechaSeleccionada = obtenerFechaSeleccionada();
  return fechaSeleccionada
    ? ventasRecientes.filter((venta) => normalizarFecha(venta.fecha) === fechaSeleccionada)
    : ventasRecientes;
}

function obtenerEstadoStock(stock) {
  if (stock <= 5) return { label: "Crítico", className: "critical" };
  if (stock <= 10) return { label: "Bajo", className: "warning" };
  return { label: "Óptimo", className: "ok" };
}

function renderKPIs() {
  const ventasFiltradas = obtenerVentasFiltradas();
  const fechaSeleccionada = obtenerFechaSeleccionada();
  const ventasTotales = ventasFiltradas.reduce((acc, venta) => acc + (Number(venta.total) || 0), 0);
  const pendientes = ventasFiltradas.filter((venta) => ["pendiente", "en camino"].includes(venta.estado.toLowerCase())).length;
  const stockBajo = data.filter((producto) => (Number(producto.stock) || 0) < 10).length;
  const entregados = ventasFiltradas.filter((venta) => venta.estado.toLowerCase() === "entregado").length;
  const ticketPromedio = ventasFiltradas.length ? ventasTotales / ventasFiltradas.length : 0;

  setText("#kpiVentas", formatearMoneda(ventasTotales));
  setText("#kpiPendientes", pendientes.toString());
  setText("#kpiStock", stockBajo.toString());
  setText("#kpiEntregados", entregados.toString());
  setText("#summaryIngreso", formatearMoneda(ventasTotales));
  setText("#summaryTicket", formatearMoneda(ticketPromedio));
  setText("#summaryFecha", fechaSeleccionada || "Últimos 7 días");
}

function obtenerSerieSemanal() {
  const fechaSeleccionada = obtenerFechaSeleccionada();
  const baseDate = fechaSeleccionada ? new Date(`${fechaSeleccionada}T00:00:00`) : new Date("2026-09-09T00:00:00");
  const dias = [...Array(7)].map((_, index) => {
    const fecha = new Date(baseDate);
    fecha.setDate(baseDate.getDate() - (6 - index));
    const yyyy = fecha.getFullYear();
    const mm = String(fecha.getMonth() + 1).padStart(2, "0");
    const dd = String(fecha.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  return {
    dias,
    ingresos: dias.map((fecha) => ventasRecientes
      .filter((venta) => normalizarFecha(venta.fecha) === fecha)
      .reduce((acc, venta) => acc + (Number(venta.total) || 0), 0)),
    pedidos: dias.map((fecha) => ventasRecientes
      .filter((venta) => normalizarFecha(venta.fecha) === fecha).length)
  };
}

function buildGradient(context, area, colorStart, colorEnd) {
  const gradient = context.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

function renderGraficoVentas() {
  const canvas = document.getElementById("ventasChart");
  if (!canvas) return;

  if (ventasChartInstance) {
    ventasChartInstance.destroy();
    ventasChartInstance = null;
  }

  const { dias, ingresos, pedidos } = obtenerSerieSemanal();
  const ctx = canvas.getContext("2d");

  ventasChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: dias.map((fecha) => new Date(`${fecha}T00:00:00`).toLocaleDateString("es-CO", { day: "2-digit", month: "short" })),
      datasets: [
        {
          label: "Ingresos",
          data: ingresos,
          borderColor: chartPalette.purple,
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 6,
          tension: 0.38,
          fill: true,
          backgroundColor: (context) => {
            const chart = context.chart;
            const { chartArea } = chart;
            if (!chartArea) return chartPalette.purpleSoft;
            return buildGradient(chart.ctx, chartArea, "rgba(168, 85, 247, 0.02)", "rgba(168, 85, 247, 0.28)");
          }
        },
        {
          label: "Pedidos",
          data: pedidos,
          borderColor: chartPalette.cyan,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.32,
          fill: false,
          yAxisID: "yPedidos"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "index" },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0b1120",
          titleColor: chartPalette.title,
          bodyColor: chartPalette.title,
          borderColor: "rgba(148, 163, 184, 0.16)",
          borderWidth: 1,
          padding: 14,
          callbacks: {
            label: (context) => context.dataset.label === "Ingresos"
              ? `${context.dataset.label}: ${formatearMoneda(context.parsed.y)}`
              : `${context.dataset.label}: ${context.parsed.y}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: chartPalette.grid },
          ticks: {
            color: chartPalette.text,
            callback: (value) => formatearMoneda(value).replace(",00", "")
          }
        },
        yPedidos: {
          beginAtZero: true,
          position: "right",
          grid: { display: false },
          ticks: {
            color: chartPalette.text,
            stepSize: 1
          }
        },
        x: {
          grid: { display: false },
          ticks: { color: chartPalette.text }
        }
      }
    }
  });
}

function renderGraficoProductos() {
  const canvas = document.getElementById("productosChart");
  if (!canvas) return;

  if (productosChartInstance) {
    productosChartInstance.destroy();
    productosChartInstance = null;
  }

  const ventasFiltradas = obtenerVentasFiltradas();
  const resumen = ventasFiltradas.reduce((acc, venta) => {
    if (!acc[venta.producto]) acc[venta.producto] = 0;
    acc[venta.producto] += Number(venta.cantidad) || 0;
    return acc;
  }, {});

  const topVendidos = Object.entries(resumen)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const labels = topVendidos.length ? topVendidos.map(([nombre]) => nombre) : ["Sin ventas"];
  const values = topVendidos.length ? topVendidos.map(([, cantidad]) => Number(cantidad.toFixed(2))) : [0];
  const ctx = canvas.getContext("2d");

  productosChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        data: values,
        borderRadius: 10,
        borderSkipped: false,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { chartArea } = chart;
          if (!chartArea) return chartPalette.purple;
          return buildGradient(chart.ctx, chartArea, "rgba(34, 211, 238, 0.95)", "rgba(168, 85, 247, 0.95)");
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0b1120",
          titleColor: chartPalette.title,
          bodyColor: chartPalette.title,
          callbacks: {
            label: (context) => `${context.parsed.x} kg vendidos`
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: chartPalette.grid },
          ticks: { color: chartPalette.text }
        },
        y: {
          grid: { display: false },
          ticks: { color: chartPalette.title, font: { weight: "600" } }
        }
      }
    }
  });
}

function renderResumenEjecutivo() {
  const ventasFiltradas = obtenerVentasFiltradas();
  const resumenProductos = ventasFiltradas.reduce((acc, venta) => {
    if (!acc[venta.producto]) acc[venta.producto] = 0;
    acc[venta.producto] += Number(venta.total) || 0;
    return acc;
  }, {});

  const resumenCategorias = ventasFiltradas.reduce((acc, venta) => {
    if (!acc[venta.categoria]) acc[venta.categoria] = 0;
    acc[venta.categoria] += Number(venta.total) || 0;
    return acc;
  }, {});

  const topProducto = Object.entries(resumenProductos).sort((a, b) => b[1] - a[1])[0];
  const topCategoria = Object.entries(resumenCategorias).sort((a, b) => b[1] - a[1])[0];

  setText("#summaryTopProducto", topProducto ? topProducto[0] : "Sin ventas");
  setText("#summaryTopCategoria", topCategoria ? `Categoría líder: ${topCategoria[0]}` : "Sin movimiento en el periodo");
}

function renderActividad() {
  const container = document.getElementById("activityList");
  if (!container) return;

  const ventasFiltradas = obtenerVentasFiltradas().slice().sort((a, b) => normalizarFecha(b.fecha).localeCompare(normalizarFecha(a.fecha)));

  if (!ventasFiltradas.length) {
    container.innerHTML = '<div class="activity-item"><div><strong>Sin actividad</strong><span>No hay ventas para la fecha seleccionada.</span></div></div>';
    return;
  }

  container.innerHTML = ventasFiltradas.map((venta) => `
    <article class="activity-item">
      <div>
        <strong>${venta.cliente}</strong>
        <span>${venta.producto} · ${venta.estado}</span>
      </div>
      <div class="activity-item__amount">
        <strong>${formatearMoneda(venta.total)}</strong>
        <span>${normalizarFecha(venta.fecha)}</span>
      </div>
    </article>
  `).join("");
}

function formatearStock(producto) {
  const stock = Number(producto.stock) || 0;
  return producto.tipo_venta === "PESO" ? `${stock.toFixed(2)} kg` : `${stock} und`;
}

function formatearPrecioBase(producto) {
  const precio = producto.tipo_venta === "PESO"
    ? Number(producto.precio_por_kilo) || 0
    : Number(producto.precio) || 0;

  return producto.tipo_venta === "PESO"
    ? `${formatearMoneda(precio)} / kg`
    : `${formatearMoneda(precio)} / und`;
}

function formatearPrecioMayorista(producto) {
  if (!producto.precio_al_mayor) return "No definido";
  return `${formatearMoneda(producto.precio_al_mayor)} / kg`;
}

function renderTablaProductos() {
  const tbody = document.getElementById("productosBody");
  if (!tbody) return;

  const fechaSeleccionada = obtenerFechaSeleccionada();
  const productosVendidos = new Set(
    ventasRecientes
      .filter((venta) => normalizarFecha(venta.fecha) === fechaSeleccionada)
      .map((venta) => venta.catalogoProductoId)
  );

  const productosFiltrados = fechaSeleccionada
    ? data.filter((producto) => productosVendidos.has(producto.id))
    : data;

  if (!productosFiltrados.length) {
    tbody.innerHTML = `<tr><td colspan="7">${fechaSeleccionada ? "No hay productos para la fecha seleccionada" : "No hay productos registrados"}</td></tr>`;
    return;
  }

  tbody.innerHTML = productosFiltrados.map((producto) => {
    const estado = obtenerEstadoStock(Number(producto.stock) || 0);
    return `
      <tr>
        <td><strong>#${producto.id}</strong></td>
        <td><strong>${producto.nombre}</strong></td>
        <td>${producto.categoria}</td>
        <td>${formatearStock(producto)}</td>
        <td>${formatearPrecioBase(producto)}</td>
        <td>${formatearPrecioMayorista(producto)}</td>
        <td><span class="status-pill status-pill--${estado.className}">${estado.label}</span></td>
      </tr>
    `;
  }).join("");
}

function renderDashboard() {
  renderKPIs();
  renderResumenEjecutivo();
  renderGraficoVentas();
  renderGraficoProductos();
  renderActividad();
  renderTablaProductos();
}

document.addEventListener("DOMContentLoaded", () => {
  const dateFilter = document.getElementById("dateFilter");
  const ultimaFecha = ventasRecientes
    .map((venta) => normalizarFecha(venta.fecha))
    .sort()
    .pop();

  if (dateFilter && ultimaFecha) {
    dateFilter.value = ultimaFecha;
  }

  renderDashboard();

  if (dateFilter) {
    dateFilter.addEventListener("change", renderDashboard);
  }
});
