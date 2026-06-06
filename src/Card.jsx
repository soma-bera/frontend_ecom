//import React from 'react'//on typing rfce react functional component

// function Card(props) {// parameter called prop where the object will be passed we have touse curly braces
//   return (
//     <div style={{border:"1px red solid",width:"100px",padding: "100px 60px 100px 60px",margin:"10px",borderRadius:"10px",
//     backgroundColor:"lightgrey", borderColor:"black"}}>
//      <img style={{height:"150px",width:"150px"}} src={props.image} alt=" "/>
//      <h2 style={{fontSize:"15px"}}>{props.title}</h2>
//      <h3 style={{fontSize:"15px",color:"darkblue"}}>price:{props.price}</h3>
     
//     </div>
//   )
// }

// export default Card
/*title={e.title}
              image={e.image}
              price={e.price}*/

//we wil ceate server and the data will be put to the database we will not keep the product in the frontend
//instead we will keep it in database 
//and we will fect the data using api calls

function Card(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "150px",
        height:"270px",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "lightgrey",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",   // horizontal center
        textAlign: "center"     // text center
      }}
    >
      <img
        style={{ height: "150px", width: "150px" }}
        src={props.image}
        alt=""
      />

      <h2 style={{ fontSize: "15px" }}>{props.title}</h2>

      <h3 style={{ fontSize: "15px", color: "darkblue" }}>
        Price: {props.price}
      </h3>
    </div>
  );
}
export default Card