
import Product from './Product';
import MainHeader from './MainHeader';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';

function App() {

    const [searchquery, setsearchquery] = useState("");

    return (
        <>
            <MainHeader setsearchquery={setsearchquery} />

            <Routes>

                <Route path='/about' element={<About />} />

                <Route
                    path='/product'
                    element={<Product searchquery={searchquery} />}
                />

                <Route path='/signin' element={<Signin />} />

                <Route path='/signup' element={<Signup />} />

                <Route path='/' element={<Home />} />

            </Routes>
        </>
    );
}

export default App;
