import { takeLatest, put, fork, call} from "redux-saga/effects";
import { fetchProducts } from "./api";
import { getProducts, setProducts } from "./feature/productSlice";

function* onLoadProductsAsync( {payload} ) {
    try {
        const productName = payload;
        const response = yield call(fetchProducts, productName);
        if(response.status === 200) {
            yield put(setProducts({ ...response.data}));
        }
    } catch (error) {
        console.log(error.message);
    }
}


function* onLoadProducts() {
    yield takeLatest(getProducts.type, onLoadProductsAsync);
}



export const productSagas = [fork(onLoadProducts)];