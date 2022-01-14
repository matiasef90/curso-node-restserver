const express = require("express");
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userRoute = '/api/usuarios';
        //   Midleware
        this.middleware();
        //  Rutas de la aplicacion
        this.routes();
    }

    middleware() {
        // Cors
        this.app.use(cors());
        // Permitir recibir json en las req
        this.app.use(express.json());
        // Servir documentos static
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userRoute, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log( 'La aplicacion esta corriento en el puerto ', this.port);
        })
    }
}

module.exports = Server;