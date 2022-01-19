const { Schema, model } = require('mongoose');

const roleSchema = Schema({
    role: {
        type: String,
        required: [true, 'El rol es ogligatorio'] 
    }
})

module.exports = model('role', roleSchema);