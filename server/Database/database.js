import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connection = async (username, password) => {
    const URL=`mongodb://Gunjan:Mongo*123@ac-6ph4enm-shard-00-00.cnlwvhh.mongodb.net:27017,ac-6ph4enm-shard-00-01.cnlwvhh.mongodb.net:27017,ac-6ph4enm-shard-00-02.cnlwvhh.mongodb.net:27017/?ssl=true&replicaSet=atlas-jfnujh-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database Connected');
    }
    catch (error) {
        console.log('Error while connecting with the database', error)
    }
}
export default connection;
