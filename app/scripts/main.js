/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import { Provider } from "react-redux";
import store from './redux/store';
import {BrowserRouter , Route, Routes,Switch} from 'react-router-dom';
import Search from './components/search';
import ProductList from "./components/productList"
import Product from './pages/Product';
// import Home from './pages/Home';

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu />
                <Home />
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route path='/products?search=:term' element={<Product />}/>
                </Routes>
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
