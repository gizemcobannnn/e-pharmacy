import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    favorite:[],
    page:1,
    user:""
}
const  medicineSlice = createSlice({
    name:"medicine",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase((state,action)=>{})
        .addCase((state,action)=>{})
        .addCase((state,action)=>{})
    }
})

export const {} = medicineSlice.action;
export default medicineSlice.reducer;