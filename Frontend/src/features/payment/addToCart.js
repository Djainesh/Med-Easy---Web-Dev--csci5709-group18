/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {toggle: true}
}

export const addToCartSlice = createSlice({
    name: 'addToCartToggle',
    initialState,
    reducers: {
    toggle: (state,action) => {

        state.value = action.payload;
        
    },
    
},
})


export const {toggle} = addToCartSlice.actions;

export default addToCartSlice.reducer;