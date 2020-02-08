export class Cliente {


    constructor(

        public clieId: number,
        public activo: string,
        public direccion: string,
        public email: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public telefono: string,
        public usuCreador: string,
        public usuModificador: string,
        public tdocId: number


    ) {

    }


}
