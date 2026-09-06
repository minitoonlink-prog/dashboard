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
  const totalProductos = data.length;
  const stockTotal = data.reduce((acc, p) => acc + (Number(p.stock) || 0), 0);
  const categoriasActivas = new Set(data.map(p => p.categoria)).size;
  const precioPromedio = totalProductos > 0
    ? data.reduce((acc, p) => acc + (Number(p.precio_mostrar) || 0), 0) / totalProductos
    : 0;

  setText('.kpi--ventas .kpi__label', 'Total productos');
  setText('.kpi--pendientes .kpi__label', 'Stock total');
  setText('.kpi--stock .kpi__label', 'Categorías activas');
  setText('.kpi--entregados .kpi__label', 'Precio promedio');

  setText('#kpiVentas', totalProductos.toString());
  setText('#kpiPendientes', stockTotal.toFixed(2));
  setText('#kpiStock', categoriasActivas.toString());
  setText('#kpiEntregados', formatearMoneda(precioPromedio));
}

function renderGraficoVentas() {
  const canvas = document.getElementById('ventasChart');
  if (!canvas) return;

  const topStock = [...data]
    .sort((a, b) => (Number(b.stock) || 0) - (Number(a.stock) || 0))
    .slice(0, 7);

  new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: topStock.map(p => p.nombre),
      datasets: [{
        label: 'Stock',
        data: topStock.map(p => Number(p.stock) || 0),
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
            label: (ctx) => `${ctx.parsed.y.toFixed(2)} kg`
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

  const topPrecio = [...data]
    .sort((a, b) => (Number(b.precio_mostrar) || 0) - (Number(a.precio_mostrar) || 0))
    .slice(0, 5);

  new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: topPrecio.map(p => p.nombre),
      datasets: [{
        label: 'Precio',
        data: topPrecio.map(p => Number(p.precio_mostrar) || 0),
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
            label: (ctx) => formatearMoneda(ctx.parsed.x)
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

function renderTablaProductos() {
  setText('.table-section__title', 'Productos');

  const headerRow = document.querySelector('.table thead tr');
  if (headerRow) {
    headerRow.innerHTML = `
      <th>ID</th>
      <th>Nombre</th>
      <th>Categoría</th>
      <th>Stock</th>
      <th>Tipo venta</th>
      <th>Precio</th>
      <th>Precio mayor</th>
    `;
  }

  const tbody = document.getElementById('pedidosBody');
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7">No hay productos registrados</td></tr>';
    return;
  }

  tbody.innerHTML = data.map(p => `
    <tr>
      <td><strong>${p.id}</strong></td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>${Number(p.stock).toFixed(2)}</td>
      <td>${p.tipo_venta}</td>
      <td>${formatearMoneda(p.precio_mostrar)}</td>
      <td>${p.precio_al_mayor == null ? '—' : formatearMoneda(p.precio_al_mayor)}</td>
    </tr>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderKPIs();
  renderGraficoVentas();
  renderGraficoProductos();
  renderTablaProductos();

  const dateFilter = document.getElementById('dateFilter');
  if (dateFilter) {
    dateFilter.addEventListener('change', () => {
      renderKPIs();
      renderTablaProductos();
    });
  }
});
