import { createSlice } from "@reduxjs/toolkit";
import data from "../../../../server/data";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList:{data:data},
        productList2:{data:data},
        product: {},
        progress: 0
    },
    reducers: {
        getProducts(name) {
            return name;
        },
        setProducts: (state,action) => {
            state.productList = action.payload
        }
    },
});

export const { getProducts, setProducts} = productSlice.actions;

export default productSlice.reducer;