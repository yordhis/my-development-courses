/** DECLARACIÓN DE VARIABLES GLOBALES */
let c = console.log, 
pedido = [],
costoTotalDelPedido = 0,
usuario = {
    nombre: "Yordhis Osuna",
    edad: 28,
    deuda:0
},
ventasRealizadas = [],
montoTotalDeVentas = 0

/**
 * @method  
 * MOSTRAMOS EL MENÚ DEL RESTAURANTE DE FORMA AMIGABLE 
 * @return menu
 */
const mostrarMenu = () =>{
    c("CÓDIGO - PRODUCTO - COSTO")
    productos.forEach(producto => c(`${producto.codigo} | ${producto.nombre} | ${producto.costo} USD`) );
    return "Menú de Avila Foot"
}

/**
 * 
 * @param {*} cod 
 * Esta función se encarga de buscar el producto y agregarlo a la variable pedido 
 * @var pedido
 * @returns string
 */
const agregarProductoAlPedido = cod =>{
    if(!(typeof cod === "string")) return "Ingrese un codigo valido!!"
    let productoSolicitado = productos.find(producto => producto.codigo === cod.toUpperCase())
    if(!productoSolicitado) return "Producto no existe" 
    pedido.push(productoSolicitado)
    c(pedido)
    return "Se agrego el producto a su pedido"
}

/**
 * Esta función realiza la sumatoria de todos los productos que estan en el pedido
 * y retorna el costo total a pagar
 * @returns number 
 */
const calcularCosto = () =>{
    pedido.forEach(ped => {
            costoTotalDelPedido += ped.costo
    })
    c(`El costo total de su pedido es: ${costoTotalDelPedido} dolares.`)
   return costoTotalDelPedido
}

/**
 * Esta función realiza la sumatoria de todas las ventas realizadas y
 * retorna el monto total vendido y la cantidad de ventas realizadas
 * @returns number
 */
const calcularMontoTotalDeLasVentas = () =>{
    ventasRealizadas.forEach(ven => {
        montoTotalDeVentas += ven.total
    })
    c(`El monto total de todas las ventas es: ${montoTotalDeVentas} dolares.`)
    c(`Cantidad de ventas realizadas ${ventasRealizadas.length}`)
   return montoTotalDeVentas
}

/**
 * Esta función se encarga de finalizar el pedido del cliente y 
 * asigna la deuda al usuario y retorna un mensaje con el monto a pagar
 * @returns string
 */
const finalizarPedido = () =>{
    usuario.deuda = calcularCosto()
    pedido = []
    costoTotalDelPedido = 0
    return `Pedido finalizado y debe pagar ${usuario.deuda} dolares.`
}

/**
 * Esta función procesa el pago del cliente
 * @param {*} montoEntregado number
 * @returns log
 */
const cobrarDeuda = montoEntregado =>{
    switch (typeof montoEntregado) {
        case 'number':
            switch (true) {
                case montoEntregado === usuario.deuda:
                        ventasRealizadas.push({cliente: usuario.nombre, total: usuario.deuda})
                        usuario.deuda = 0
                        console.clear()
                        c(`Pedido cancelado correctamente, gracias por su compra!`)
                    break;
                case montoEntregado > usuario.deuda:
                    ventasRealizadas.push({cliente: usuario.nombre, total: usuario.deuda})
                    console.clear()
                    c(`Pedido cancelado correctamente, gracias por su compra! y tienes un vuelto de: ${montoEntregado - usuario.deuda} dolares`)
                    usuario.deuda = 0
                    break;
                default:
                        c(`Saldo insuficiente, por favor complete su pago`) 
                    break;
            }
            break;
        default:
            c("Entregue un monto valido!!")
            break;
    }
}