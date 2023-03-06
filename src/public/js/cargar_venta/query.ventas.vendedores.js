
const select_vendedor = document.querySelector(".select-vendedor");
const select_fecha = document.querySelector(".select-fecha");
const btn_consulta = document.querySelector(".btn-consultar-ventas");
const tabla_ventas = document.querySelector(".tabla-ventascargadas tbody");


btn_consulta.addEventListener("click", async e => {
    // let vendedor = select_vendedor.options.item(select_vendedor.selectedIndex).innerText;
    // let fecha_de_venta = select_fecha.options.item(select_fecha.selectedIndex).innerText;
    // let location = tabla_ventas.contentWindow.location;
    // location.href = location.origin + location.pathname + "?VENDEDOR=" + vendedor + "&FECHA=" + fecha_de_venta;

});

btn_consulta.addEventListener("click", async e => {
    let vendedor = select_vendedor.options.item(select_vendedor.selectedIndex).innerText;
    let fecha_de_venta = select_fecha.options.item(select_fecha.selectedIndex).innerText;
    let query = {VENDEDOR : vendedor, FECHA : fecha_de_venta};

    const response = await fetch("/ventas_cargadas_vendedores", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    })
    const ventas = await response.json();

    setData(tabla_ventas,ventas);


});











