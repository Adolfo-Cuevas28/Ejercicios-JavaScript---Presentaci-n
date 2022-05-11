try { 
    monthName = NombreMes(12); // La función podría lanzar una excepción
    console.log(monthName);
}
catch (excepcion) {
    monthName = 'unknown';

    miExcepcionUsuario = new ExceptionUsuario(excepcion); // Pasar el objeto exception 
    console.error(miExcepcionUsuario);
}
finally {
    console.log("Cerrando sesión..."); // Cerrar sesión y regresar al index
}

function NombreMes(mo) {
    mo = mo - 1; // Ajusta para arreglo
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
                  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    if (months[mo]) {
        return months[mo];
    } 
    if (mo>=12) {
        throw "Numero de mes no válido"; // Aquí se usa la palabra clave throw
    } else if (mo==-1) {
        throw "No hay número de mes 0"; 
    } else {
        throw "El número no debe ser negativo"; 
    }
}

function ExceptionUsuario(mensaje) {
    this.mensaje = mensaje;
    this.nombre = "ExceptionUsuario";
 }

 