//app.jsx is the parent because all the compontns will be here only
//app.jsx----------->card.jsx
//app.jsx------------>product.jsx
//parent to child flow of data
//lifting the stateup child to parent then parent to child communication between siblings
//in console event.taget .value for the text vlaues

import Card from './Card';
import Product from './Product';
import MainHeader from './MainHeader';
import './App.css';
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';


function App() {
  //STATE TO MANAGE SEARCH QUERY
  const [searchquery,setsearchquery]=useState("")
return(
  
  <>


  <MainHeader setsearchquery={setsearchquery}/>
  
  
  
  <Routes>
    
    <Route path='/about'  element={<About/>} />
    <Route path='/product'  element={<Product searchquery={searchquery}/>} />
    <Route path='/signin'  element={<Signin/>} />
    <Route path='/signup'  element={<Signup/>} />
    {/* <Route path='/'  element={<Home/>} /> */}
    <Route path='/'  element={<Product searchquery={searchquery}/>} />
    
    


  </Routes>
  
  </>
)
}

export default App;


