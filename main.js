const ul = document.querySelector('#ul-list');
const strong = document.querySelector('#s-cantidad');
let listaContactos = [];
/* 
El libro de contactos debe permitir al usuario realizar las siguientes acciones:
1. Agregar un nuevo contacto.
2. Buscar un contacto por nombre.
3. Mostrar todos los contactos existentes (En consola).
4. Actualizar la información de un contacto.
5. Eliminar un contacto. */

//FUNCION PARA AGREGAR UN CONTACTO
const agregar = () => {
    //pido los datos
    const nombre = prompt('Ingresa el nombre del contacto');
    const apellido = prompt('Ingrese el apellido del contacto');
    const tel = prompt('Ingrese el telefono');
    const mail = prompt('Ingrese el mail');
    //creo objeto
    const contacto = {
        nombre,
        apellido,
        tel,
        mail
    }
    //los agrego al array listaContactos
    listaContactos.push(contacto);
    renderizado()
    
}

//FUNCION PARA RENDERIZAR LOS CONTACTOS EN EL HTML
const renderizado = () => {
    //lo limpio
    ul.innerHTML = '';
    //recorro el array y renderizo
    listaContactos.forEach(contacto => {
        ul.innerHTML += `<li class="list-group-item">${contacto.nombre} ${contacto.apellido} | ${contacto.tel} | ${contacto.mail}</li>`;
    });

}

//FUNCION PARA BUSCAR UN CONTACTO POR NOMBRE
const buscar = () => {
    //pido datos
    const nombre = prompt('Ingrese el nombre que quiere buscar en los contactos');
    //recorro el array y busco el nombre
    const contacto = listaContactos.find(contacto => contacto.nombre === nombre);
    //lo renderizo
    if (contacto) {
        alert(`Contacto encontrado: ${contacto.nombre} ${contacto.apellido} | ${contacto.tel} | ${contacto.mail}`);
    } else {
        alert("Contacto no encontrado.");
    } 
}





//FUNCION PARA MOSTRAR TODOS LOS CONTACTOS AGREGADOS 
const mostrar = () => {
    console.log(listaContactos);
}


//FUNCION PARA ELIMINAR CONTACTO
const eliminar = () => {
    //pido datos
    const nombre = prompt('Ingrese el nombre del contacto que desea eliminar');
    //recorro el array y comparo si es distinto o no el nombre
    listaContactos = listaContactos.filter(contacto => contacto.nombre !== nombre);
    //muestro los datos
    renderizado();
    
}


//FUNCION PARA ACTUALIZAR INFO
const actualizar = () => {
    //pido datos
    const nombre = prompt('Ingrese el nombre del contacto que desea actualizar');
    //recorro y comparo
    const contacto = listaContactos.find(contacto => contacto.nombre === nombre);
    //pido el nombre nuevo y renderizo 
    if (contacto){
        const nuevoNombre = prompt("Ingrese el nuevo nombre:");
        contacto.nombre = nuevoNombre;
        renderizado();
    } else {
        alert("Contacto no encontrado.");
    }
}