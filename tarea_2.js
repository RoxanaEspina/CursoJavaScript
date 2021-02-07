//1.Crear un objeto
var objeto_mascota  = {
    mascotas : ['perros','gatos','canarios','pez','serpiente'],
    eliminarMascota : function (mascota){
        let indx = this.mascotas.indexOf(mascota);
        this.mascotas.splice(indx,1);
        return this.mascotas;       
    },
    eliminarUltimaMascota : function () {
        let indx = this.mascotas.length-1;
        this.mascotas.splice(indx,1);
        return this.mascotas;
    },
    agregarMascota : function(mascota) {
        this.mascotas.push(mascota);
        return this.mascotas;
    },
    contadorMascotas : function() {
        let contador = 0;
        this.mascotas.forEach(function(mascota,) {
            if( mascota.substr(mascota.length-2,2) === 'os' )
                contador += 1;
        });

        return `En el arreglo hay ${contador} mascotas que terminan con 'os'`;
    }     
}

//2. Dado el siguiente objetoS
const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}

const infoTrabajador1 = function(trabajador) {
    const {
        nombre,
        empresa : { datos },
        cargo,
        gustos,
        hijos,
    } = trabajador; 

    let nroHijos = hijos === null || hijos === 0 ? `no tiene hijos` : `tiene ${hijos} hijo(s)`;
    let gustosInfo = ``;

    gustos.forEach(function(gusto,indx,array){       
        if(indx === array.length-1)
            gustosInfo = gustosInfo + ` y ${gusto}`
        else    
            gustosInfo = gustosInfo + ` ${gusto}, `
    })

    return `El trabajador ${nombre} trabaja en ${datos.nombre} con cargo ${cargo} y le gusta${gustosInfo}, ${nroHijos}`
}


const infoTrabajador2 = function(trabajador) {
    const {
        nombre,
        empresa : { datos, 
                    ubicación : { comuna,
                                  puesto }, 
                    clientes },
        cargo,
        gustos,
        hijos,
    } = trabajador; 
   
    let clientesInfo = ``;

    clientes.forEach(function(cliente,indx,array){       
        if(indx === array.length-1)
            clientesInfo = clientesInfo + `y ${cliente}`
        else    
            clientesInfo = clientesInfo + `${cliente} `
    })

    return `El trabajador ${nombre} va a su trabajo en ${comuna}, es ${cargo}, en el puesto ${puesto}, trabaja con ${clientesInfo}`
}




