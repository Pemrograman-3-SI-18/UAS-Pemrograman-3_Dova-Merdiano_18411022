const sepeda = require('../model/Sepeda.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataSepeda = (data, gambar) =>
    new Promise(async (resolve, reject) =>{

        const sepedaBaru = new sepeda({
            kodeSepeda: data.kodeSepeda,
            typeSepeda: data.typeSepeda,
            merk: data.merk,
            stok: data.stok,
            hargaSepeda: data.hargaSepeda,
            gambar: gambar
        })

        await sepeda.findOne({kodeSepeda: data.kodeSepeda})
            .then (sepeda => {
                if (sepeda){
                    reject (response.commonErrorMsg("Kode Sepeda Sudah Digunakan"))
                } else {
                    sepedaBaru.save()
                        .then(r => {
                            resolve(response.commonSuccesMsg('Berhasil Menginput Data'))
                        }).catch(err => {
                            reject (response.commonErrorMsg('Mohon Maaf Gagal Input Data'))
                    })
                }
            }).catch(err => {
                reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.lihatDataSepeda = () =>
    new Promise(async (resolve, reject) => {
        await sepeda.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.lihatDetailDataSepeda = (kodeSepeda) =>
    new Promise(async (resolve, reject) => {
        await sepeda.findOne({kodeSepeda: kodeSepeda})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.updateSepeda = (id, data, gambar) =>
    new Promise(async (resolve, reject) =>{
        await sepeda.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodeSepeda: data.kodeSepeda,
                    typeSepeda: data.typeSepeda,
                    merk: data.merk,
                    stok: data.stok,
                    hargaSepeda: data.hargaSepeda,
                    gambar: gambar
                }
            }
        ) .then(sepeda => {
            resolve(response.commonSuccesMsg('Berhasil Mengubah Data'))
        }) .catch(err => {
            reject (response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.hapusSepeda = (_id) =>
    new  Promise(async (resolve, reject) => {
        await sepeda.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonSuccesMsg('berhasil Menghapus Data'))
            }) .catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalhan Pada Server Kami'))
            })
    })
