import React, {useState, useEffect} from "react";
import { TextField } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import useStyles from '../styles';
import { getProducts } from "../redux/feature/productSlice";
import { fetchProducts } from "../redux/api";
import { useDebounce } from "use-debounce";
import ProductList from "./productList";
import Home from "../pages/Home";
import {Link} from "react-router-dom";


const Search = () => {
    const [show,setShow] = useState(true);
    const [product, setProduct] = useState("");
    const [debouncedValue] = useDebounce(product,600);
    const classes = useStyles();
    const {productList: {Error: error}} = useSelector((state) => ({...state.product}))
    console.log(error);
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(getProducts(product));
        if(debouncedValue) setProduct(debouncedValue);
        
    },[debouncedValue]);

    
    
    return (
        <>
            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                <TextField type="text" fullWidth value={product} sx={{ m:1,width: "55ch"}} onChange={(e) => setProduct(e.target.value)} />
                {product && (
                    <div>
                    <button type="button" onClick={()=>setProduct("")}>Clear</button>
                    {
                show?<ProductList />:<Home />
                
            }
            <Link to={`/search=${product}`}>Show All Results</Link>
                    </div>
                    
                    
                    )}:{(<h1></h1>)}
                    {error && <p className={classes.error}>{error}</p>}
            </form>
            
        </>
    )
};

export default Search;


