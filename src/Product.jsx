//import React from 'react'
import Card from "./Card";
import { useState,useEffect } from "react";
function Product({searchquery}) {//rfce

    //fetch the [product] from fakestoreapi
    const [products,setproducts] = useState([])
    // async function fetchproducts()
    // {
    //     let data=await fetch('https://fakestoreapi.com/products')
    //     let finaldata=await data.json();
    //     setproducts(finaldata)
    //     return;
    // }
    // fetchproducts();


    //---------------
    useEffect(() => {
    
      //fetch('https://fakestoreapi.com/products')
      fetch('https://backend-ecom-4w08.onrender.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));
    }, [])

  //   useEffect(()=>{
  //   fetch('http://localhost:3000/products',{
  //     method:"POST",
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify({
  //       id:25,
  //       title:"shoe",
  //       price:1000,
  //       image:"https://m.media-amazon.com/images/I/51pGeCb6ZtL._AC_UY1100_.jpg"
  //     })

  //   })
  // },[])
    
    //--------------

    //filter out products based on serch query
    let filterproducts=products.filter((p)=>{
      return p.title.toLowerCase().includes(searchquery.toLowerCase());
    })
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {
        filterproducts.map((e)=>{
        return <Card image={e.image} title={e.title} price={e.price}/>

    })
}
</div>
</>
  )
}

export default Product

//react---whenever the value is changed ui will update and it will run from the first line it will so to 
//infinite loop
//to handle this we will use hook called effecthook--useeffect