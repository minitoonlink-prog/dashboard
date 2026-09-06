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

const data = productos.map(p => ({
  ...p,
  precio_mostrar: p.tipo_venta === "PESO" ? (p.precio_por_kilo ?? 0) : (p.precio ?? 0)
}));

const ventasRecientes = [
  { id: 2001, cliente: "María González", productoId: 1, cantidad: 0.8, estado: "Entregado", fecha: "2026-09-09" },
  { id: 2002, cliente: "Carlos Pérez", productoId: 20, cantidad: 0.5, estado: "En camino", fecha: "2026-09-09" },
  { id: 2003, cliente: "Laura Rojas", productoId: 15, cantidad: 0.4, estado: "Pendiente", fecha: "2026-09-08" },
  { id: 2004, cliente: "José Méndez", productoId: 4, cantidad: 1.1, estado: "Entregado", fecha: "2026-09-07" },
  { id: 2005, cliente: "Diana León", productoId: 31, cantidad: 0.9, estado: "Entregado", fecha: "2026-09-06" },
  { id: 2006, cliente: "Andrés Ruiz", productoId: 9, cantidad: 0.6, estado: "Pendiente", fecha: "2026-09-05" }
].map(v => {
  const producto = data.find(p => p.id === v.productoId);
  const precioUnitario = Number(producto?.precio_mostrar) || 0;
  return {
    ...v,
    producto: producto?.nombre ?? "Producto",
    total: precioUnitario * (Number(v.cantidad) || 0)
  };
});

let ventasChartInstance = null;
let productosChartInstance = null;

function formatearMoneda(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(valor);
}

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function renderKPIs() {
  const dateFilter = document.getElementById('dateFilter');
  const fechaSeleccionada = dateFilter?.value || '';

  const ventasDelDia = fechaSeleccionada
    ? ventasRecientes.filter(v => v.fecha === fechaSeleccionada)
    : ventasRecientes;

  const ventasTotales = ventasDelDia.reduce((acc, v) => acc + (Number(v.total) || 0), 0);
  const pendientes = ventasDelDia.filter(v => ["pendiente", "en camino"].includes(v.estado.toLowerCase())).length;
  const stockBajo = data.filter(p => (Number(p.stock) || 0) < 10).length;
  const entregados = fechaSeleccionada
    ? ventasRecientes.filter(v => v.fecha === fechaSeleccionada && v.estado.toLowerCase() === "entregado").length
    : ventasRecientes.filter(v => v.estado.toLowerCase() === "entregado").length;

  setText('#kpiVentas', formatearMoneda(ventasTotales));
  setText('#kpiPendientes', pendientes.toString());
  setText('#kpiStock', stockBajo.toString());
  setText('#kpiEntregados', entregados.toString());
}

function renderGraficoVentas() {
  const canvas = document.getElementById('ventasChart');
  if (!canvas) return;
  if (ventasChartInstance) {
    ventasChartInstance.destroy();
    ventasChartInstance = null;
  }

  const dateFilter = document.getElementById('dateFilter');
  const baseDate = dateFilter?.value ? new Date(`${dateFilter.value}T00:00:00`) : new Date();
  const dias = [...Array(7)].map((_, i) => {
    const fecha = new Date(baseDate);
    fecha.setDate(baseDate.getDate() - (6 - i));
    const yyyy = fecha.getFullYear();
    const mm = String(fecha.getMonth() + 1).padStart(2, '0');
    const dd = String(fecha.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  });

  const ventasPorDia = dias.map(fecha =>
    ventasRecientes
      .filter(v => v.fecha === fecha)
      .reduce((acc, v) => acc + (Number(v.total) || 0), 0)
  );

  ventasChartInstance = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: dias.map(fecha =>
        new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CO', { weekday: 'short' })
      ),
      datasets: [{
        label: 'Ventas',
        data: ventasPorDia,
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#4f46e5',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f172a',
          padding: 12,
          callbacks: {
            label: (ctx) => formatearMoneda(ctx.parsed.y)
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#e2e8f0' },
          ticks: { color: '#64748b' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#64748b' }
        }
      }
    }
  });
}

function renderGraficoProductos() {
  const canvas = document.getElementById('productosChart');
  if (!canvas) return;
  if (productosChartInstance) {
    productosChartInstance.destroy();
    productosChartInstance = null;
  }

  const dateFilter = document.getElementById('dateFilter');
  const fechaSeleccionada = dateFilter?.value || '';
  const ventasFiltradas = fechaSeleccionada
    ? ventasRecientes.filter(v => v.fecha === fechaSeleccionada)
    : ventasRecientes;

  const resumen = ventasFiltradas.reduce((acc, venta) => {
    if (!acc[venta.producto]) acc[venta.producto] = 0;
    acc[venta.producto] += Number(venta.cantidad) || 0;
    return acc;
  }, {});

  const topVendidos = Object.entries(resumen)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  productosChartInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: topVendidos.map(([nombre]) => nombre),
      datasets: [{
        label: 'Kg vendidos',
        data: topVendidos.map(([, cantidad]) => Number(cantidad.toFixed(2))),
        backgroundColor: ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'],
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f172a',
          padding: 12,
          callbacks: {
            label: (ctx) => `${ctx.parsed.x} kg`
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: '#e2e8f0' },
          ticks: { color: '#64748b' }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#0f172a', font: { size: 12, weight: '500' } }
        }
      }
    }
  });
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

function renderTablaProductos() {
  setText('.table-section__title', 'Productos');
  const tbody = document.getElementById('productosBody');
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">No hay productos registrados</td></tr>';
    return;
  }

  tbody.innerHTML = data.map(producto => `
    <tr>
      <td><strong>#${producto.id}</strong></td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>${formatearStock(producto)}</td>
      <td>${formatearPrecioBase(producto)}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const dateFilter = document.getElementById('dateFilter');
  const ultimaFecha = ventasRecientes
    .map(v => v.fecha)
    .sort()
    .pop();

  if (dateFilter && ultimaFecha) {
    dateFilter.value = ultimaFecha;
  }

  renderKPIs();
  renderGraficoVentas();
  renderGraficoProductos();
  renderTablaProductos();

  if (dateFilter) {
    dateFilter.addEventListener('change', () => {
      renderKPIs();
      renderGraficoVentas();
      renderGraficoProductos();
    });
  }
});
