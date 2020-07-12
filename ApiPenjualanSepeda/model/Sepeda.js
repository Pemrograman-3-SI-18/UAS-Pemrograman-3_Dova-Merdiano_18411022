const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    kodeSepeda:{
        type: String
    },
    typeSepeda:{
        type: String
    },
    merk:{
        type: String
    },
    stok:{
        type: String
    },
    hargaSepeda:{
        type: String
    },
    gambar:{
        type: String
    }

});

module.exports = mongoose.model('sepeda',userSchema)
