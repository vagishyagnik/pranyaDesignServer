import mongoose from "mongoose"
const url = "mongodb+srv://GCWarriors:warpkiparosr@69@cluster0.eoojf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const db = async()=>{
    await mongoose.connect(url, {
        useNewUrlParser: true
    });
    console.log('Db Connected')
}

module.exports = db