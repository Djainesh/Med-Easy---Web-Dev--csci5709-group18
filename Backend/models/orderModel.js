/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


const mongoose = require('mongoose');


const orderDetailsSchema = new mongoose.Schema({
    shippingInfo: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        streetAddress: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        zipCode: {type: String, required: true},
    },
    shippingMethod: {
        type: String, required: true, default: "Standard Shipping"
    },
    orderItems: 
        [
        {
        
        
        quantity:{type: Number, required: true},
        price_data: {
            currency: {type: String, required: true},
            unit_amount:{type: Number, required: true},
            product_data: {
                name: {type: String, required: true},
                description: {type: String, required: true},
                images: [{type: String, required: true}],
            },
        },
        tax_rates: [{type: String, required: true}],
    }
    ],
    orderStatus: {
        type: String, required: true, default: "Processing"
    },
    userEmail: {type: String, required: true},
    paymentInfo: {
        paymentId: {type: String, required: true},
        paymentMethod: {type: String, required: true},
        paymentStatus: {type: String, required: true},
    },
    itemsAmount: {type: Number, required: true, default:0},
    taxAmount: {type: Number, required: true,default:0},
    shippingAmount: {type: Number, required: true, default:0},
    paymentAmount: {type: Number, required: true, default:0},
    paidAt: {type: Date, required: true},
    deliveredAt: {type: Date}
},
{timestamps: true}
);


module.exports = mongoose.model("order_details",orderDetailsSchema);