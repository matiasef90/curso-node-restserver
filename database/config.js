const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de Datos online');
        
    } catch (error) {
        throw new Error('No se pudo conectar con la base de datos');
        console.log(error);
    }
}

module.exports = {
    dbConection,
}