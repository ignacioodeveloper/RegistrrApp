export class Usuario {
    public nombreUsuario = '';
    public password = '';

    // metodo para validar el nombre de usuario
    public validarNombreUsuario(): string {
        if (this.nombreUsuario.trim() === '') {
            return 'Porfavor ingrese un Nombre de Usuario';
        }
        if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
            return 'El nombre de usuario debe tener entre 4 o 6 caracteres';
        }
        return '';
    }

    // metodo para validar password
    public validarPassword(): string {
        if (this.password.trim() === '') {
            return 'Ingrese la contraseña para continuar'
        }
        // validacion password
        for(let i = 0; i< this.password.length; i++) {
            if ('0123456789'.indexOf(this.password.charAt(i)) === -1 ) {
                return 'Ingrese una contraseña numerica';
            }
        }

        if (this.password.length > 4) {
            return 'La contraseña debe tener mas de 4 digitos';
        }

        return '';
    }
}
