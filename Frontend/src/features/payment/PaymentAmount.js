/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {itemCost: 0, shippingCost: 0, totalBeforeTax: 0, tax: 0, totalAmount: 0,}
}

export const orderSummaryCostSlice = createSlice({
    name: 'orderSummaryCost',
    initialState,
    reducers: {
    orderCost: (state,action) => {

        state.value = action.payload;
        console.log(state.value);
        
    },
    
},
})


export const {orderCost} = orderSummaryCostSlice.actions;

export default orderSummaryCostSlice.reducer;