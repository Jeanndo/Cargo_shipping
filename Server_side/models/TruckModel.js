import mongoose from 'mongoose';

const truckSchema = mongoose.Schema({

driver:String,
licensePlate:String,
product:String,
quantity:String,
Location:String,
Cargo_ID:Number,
destination:String,
name:String,
userId:String,
createdAt:{
    type:Date,
    default:new Date()
}

});


const CargoTransport = mongoose.model('CargoTransport',truckSchema);

export default CargoTransport;