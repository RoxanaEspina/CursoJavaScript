//Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
const ordenesLechugaPalta = () => {
    return sandwichOrders.filter(function(sandwichOrder) {        
        return sandwichOrder.ingredients.includes('lechuga') && sandwichOrder.ingredients.includes('palta') 
    })
}


//Función que me permita encontrar una orden a través del id y que me devuelva un string con el siguiente formato de ejemplo: 
//La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette). En caso de no encontrar nada a través del id, 
//el mensaje, a modo de ejemplo, deberá ser: No se encontró la orden con id (800)
const findOrdenById = orderId => {
    let msj = `No se encontró la orden con id ${orderId}`;
    let obj = sandwichOrders.find(element => element.id === orderId);
    let ingredientes = '';

    if(obj !== undefined){

        const {
            id,
            ordered,
            ingredients
        } = obj;

        ingredients.map((ingrediente,idx,array) =>{
            ingredientes = ingredientes + ( idx === 0 
                                            ? 
                                                ingrediente 
                                            : 
                                            (   idx === array.length-1 
                                                ? 
                                                    ` y ${ingrediente}` 
                                                :  
                                                    `, ${ingrediente}`
                                            )
                                        );
        })


        msj = `La orden fue realizada el ${ordered}, la orden llevó ${ingredientes}.`;

    }  

    return msj;
}

//Función que me permita encontrar una orden a través del id y que me indique si la orden 
//incluye pepinillos entre sus ingredients, debería devolver un true|false como respuesta.
const findOrdenByIdPepinillo = orderId => {
    let obj = sandwichOrders.find(element => element.id === orderId);
   
    return obj.ingredients.includes('pepinillos');
}

//Función que me permita encontrar todas las orden que se hicieron en un día en específico, 
//es decir, si yo coloco 20-10-2020, la función me debería devolver: Se encontraron N ordenes
// para la fecha 20-10-2020.
const findOrdersByDate = orderDate => {

    let ordersN = 0;

    sandwichOrders.forEach(element => {
        if(element.ordered === orderDate)
            ordersN = ordersN + 1;
    });

   return `Se encontraron ${ordersN} ordenes para la fecha ${orderDate}`;
}

//Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina not burger y 
//de ingredients cebolla caramelizada
const ordersDateByProteinIngredients = () => {
    let dateArray = [];
    let orderArray =  sandwichOrders.filter((element,idx) => element.protein === 'not burger' 
                                                                && element.ingredients.includes('cebolla caramelizada')
                                                                && sandwichOrders.indexOf(element) === idx);

   orderArray.map((value,idx) => {

        const {
            ordered
        } = value;

        dateArray.push(ordered);

   })

   return [...new Set(dateArray)];
}


//Función que me devuelva un objeto, con la cantidad correspondiente de ordenes por cada bread
//Deben usar .reduce()
//La lista de ingredientes es la siguiente:
const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]

const orderByReduce = () => sandwichOrders.reduce((valorAnterior, valorActual) =>{
        const { bread } = valorActual;
        
        if(breads.includes(bread))
            if(valorAnterior[bread] === undefined)
                valorAnterior[bread] = 1
            else
                valorAnterior[bread] = valorAnterior[bread] + 1  

        return valorAnterior;

    }, {}
)