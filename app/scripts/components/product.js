import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import Search from './search';

const ProductSearch = () => {
    const params = useParams();
    return (
        <div>
    ProductSearch {params.term}
    </div>
    )
};

 // Export out the React Component
 export default ProductSearch;

