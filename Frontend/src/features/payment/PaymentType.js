/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */



import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Credit/Debit Card',
}


export const paymentMethodSlice = createSlice({
    name: 'paymentMethodType',
    initialState,
    reducers: {
    paymentType: (state,action) => {

        state.value = action.payload;
        console.log(state.value);
        
    },
    
},
})

export const {paymentType} = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;