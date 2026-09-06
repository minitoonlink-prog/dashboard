/* ============================================================
   DASHBOARD ADMIN - MI TIENDA LOCAL
   ------------------------------------------------------------
   Este archivo contiene:
   1. Datos de ejemplo (placeholder)
   2. Renderizado de KPIs
   3. Gráficos con Chart.js
   4. Renderizado de tabla de pedidos

   🔌 TODO: Reemplazar las funciones get*() por llamadas fetch()
   a tu API real cuando tengas el backend listo.
   ============================================================ */

// ============================================================
// 1. DATOS DE EJEMPLO (placeholder)
// ============================================================
// 🔌 TODO: Reemplazar por fetch('/api/dashboard/kpis')
function getKPIs() {
    return {
        ventasDia: 1245000,
        pedidosPendientes: 8,
        stockBajo: 5,
        entregadosHoy: 23
    };
}

// 🔌 TODO: Reemplazar por fetch('/api/dashboard/ventas-7dias')
function getVentas7Dias() {
    return {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        data: [850000, 1200000, 980000, 1450000, 1680000, 2100000, 1245000]
    };
}

// 🔌 TODO: Reemplazar por fetch('/api/dashboard/top-productos')
function getTopProductos() {
    return {
        labels: ['Pizza Margarita', 'Hamburguesa Clásica', 'Ensalada César', 'Gaseosa 1.5L', 'Papas Fritas'],
        data: [42, 38, 27, 25, 22]
    };
}

// 🔌 TODO: Reemplazar por fetch('/api/pedidos/recientes?limit=8')
function getPedidosRecientes() {
    return [
        { id: '#1024', cliente: 'María González', producto: 'Pizza Margarita x2', total: 54000, estado: 'entregado' },
        { id: '#1025', cliente: 'Carlos Pérez', producto: 'Hamburguesa Clásica', total: 28000, estado: 'camino' },
        { id: '#1026', cliente: 'Ana Martínez', producto: 'Ensalada César + Gaseosa', total: 32000, estado: 'pendiente' },
        { id: '#1027', cliente: 'Luis Rodríguez', producto: 'Combo Familiar', total: 89000, estado: 'camino' },
        { id: '#1028', cliente: 'Sofía Ramírez', producto: 'Papas Fritas x3', total: 21000, estado: 'entregado' },
        { id: '#1029', cliente: 'Diego Torres', producto: 'Pizza Pepperoni', total: 35000, estado: 'cancelado' },
        { id: '#1030', cliente: 'Valeria López', producto: 'Hamburguesa Doble', total: 42000, estado: 'pendiente' },
        { id: '#1031', cliente: 'Andrés Castro', producto: 'Ensalada + Pizza', total: 61000, estado: 'entregado' }
    ];
}

// ============================================================
// 2. UTILIDADES
// ============================================================
function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(valor);
}

// ============================================================
// 3. RENDERIZAR KPIs
// ============================================================
function renderKPIs() {
    const kpis = getKPIs();
    document.getElementById('kpiVentas').textContent = formatearMoneda(kpis.ventasDia);
    document.getElementById('kpiPendientes').textContent = kpis.pedidosPendientes;
    document.getElementById('kpiStock').textContent = kpis.stockBajo;
    document.getElementById('kpiEntregados').textContent = kpis.entregadosHoy;
}

// ============================================================
// 4. GRÁFICO DE LÍNEA: VENTAS 7 DÍAS
// ============================================================
function renderGraficoVentas() {
    const ctx = document.getElementById('ventasChart').getContext('2d');
    const datos = getVentas7Dias();

    // 🔌 TODO: Los datos vendrán de getVentas7Dias() que llamará a tu API
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos.labels,
            datasets: [{
                label: 'Ventas',
                data: datos.data,
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.4,
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
                    titleFont: { size: 13, weight: '600' },
                    bodyFont: { size: 12 },
                    callbacks: {
                        label: (ctx) => formatearMoneda(ctx.parsed.y)
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#e2e8f0' },
                    ticks: {
                        color: '#64748b',
                        callback: (v) => '$' + (v / 1000) + 'k'
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#64748b' }
                }
            }
        }
    });
}

// ============================================================
// 5. GRÁFICO DE BARRAS: TOP 5 PRODUCTOS
// ============================================================
function renderGraficoProductos() {
    const ctx = document.getElementById('productosChart').getContext('2d');
    const datos = getTopProductos();

    // 🔌 TODO: Los datos vendrán de getTopProductos() que llamará a tu API
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.labels,
            datasets: [{
                label: 'Unidades vendidas',
                data: datos.data,
                backgroundColor: [
                    '#4f46e5',
                    '#6366f1',
                    '#818cf8',
                    '#a5b4fc',
                    '#c7d2fe'
                ],
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y', // Barras horizontales (mejor para nombres largos)
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0f172a',
                    padding: 12,
                    callbacks: {
                        label: (ctx) => `${ctx.parsed.x} unidades`
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
                    ticks: {
                        color: '#0f172a',
                        font: { size: 12, weight: '500' }
                    }
                }
            }
        }
    });
}

// ============================================================
// 6. TABLA DE PEDIDOS RECIENTES
// ============================================================
function renderTablaPedidos() {
    const pedidos = getPedidosRecientes();
    const tbody = document.getElementById('pedidosBody');

    // 🔌 TODO: Los datos vendrán de getPedidosRecientes() que llamará a tu API
    tbody.innerHTML = pedidos.map(p => `
        <tr>
            <td><strong>${p.id}</strong></td>
            <td>${p.cliente}</td>
            <td>${p.producto}</td>
            <td>${formatearMoneda(p.total)}</td>
            <td><span class="badge badge--${p.estado}">${formatearEstado(p.estado)}</span></td>
        </tr>
    `).join('');
}

function formatearEstado(estado) {
    const mapa = {
        pendiente: 'Pendiente',
        camino: 'En camino',
        entregado: 'Entregado',
        cancelado: 'Cancelado'
    };
    return mapa[estado] || estado;
}

// ============================================================
// 7. INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderKPIs();
    renderGraficoVentas();
    renderGraficoProductos();
    renderTablaPedidos();

    // 🔌 TODO: Conectar el filtro de fecha a tu API
    document.getElementById('dateFilter').addEventListener('change', (e) => {
        console.log('Filtrar por fecha:', e.target.value);
        // Aquí llamarías a tu API con la fecha seleccionada
        // y re-renderizarías los KPIs, gráficos y tabla
    });
});