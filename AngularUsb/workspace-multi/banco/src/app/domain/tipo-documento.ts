export class TipoDocumento {

    constructor(

        public tdocId: number,
        public activo: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public nombre: string,
        public usuCreador: string,
        public usuModificador: string
        
    ) {

    }

}
