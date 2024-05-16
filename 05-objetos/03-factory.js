
function crearUsuario(name, mail){
    return{
        email: mail,
        name: name,
        activo: true,
        recuperarClave: function (){
            console.log('recuperando clave...')
        }
    }
}

let user1 = crearUsuario('Julian', 'juli@gmail.com');

let user2 = crearUsuario('Carlos', 'carlos@quiros.com');

console.log(user1, user2);