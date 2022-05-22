/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */



const dotenv = require('dotenv').config();
// dotenv.config('../configs/setup.env');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req,res) => {
    const domainUrl = 'https://medeasy-group18.herokuapp.com';
    const {line_items, customer_email, delivery} = req.body;
    if(!line_items || !customer_email){
        res.status(400).send({
            "message": "Missing required paramters",
            "success": false,
        });
    }
    let shippingRate;
    if(delivery===5){
        shippingRate = 'shr_1KiDXWLF0IW9HE4HJykByOmc';
    }else if(delivery===10){
        shippingRate = 'shr_1KiDbnLF0IW9HE4HD6THfizE';
    }else if(delivery===15){
        shippingRate = 'shr_1KiDbKLF0IW9HE4HdOgOvhnO';
    }else if(delivery===20){
        shippingRate = 'shr_1KiDarLF0IW9HE4HaZfMpgtS';
    }

    let sessionVar;

    try{
        sessionVar = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            customer_email,
            success_url: `${domainUrl}/Checkout/OrderPlaced`,
            cancel_url: `${domainUrl}/Checkout/Payment`,
            shipping_options: [
                {
                    shipping_rate: shippingRate,
                },
            ],
        })
        res.status(200).send({sessionUrl: sessionVar.url,});
    }catch(e){
        console.log(e);
        res.status(400).send({
            "message": "Error occured while processing",
            "success": false,
        });
    }

}


module.exports = {createCheckoutSession};