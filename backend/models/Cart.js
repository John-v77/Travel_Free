const {Schema, model} = require('mongoose')
const cart = model ('cart', new Schema({
    name: String,
    price: Number,
    qty:Number,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
}))