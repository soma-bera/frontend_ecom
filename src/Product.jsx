
import Card from "./Card";
import { useState, useEffect } from "react";

function Product({ searchquery = "" }) {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        fetch('https://backend-ecom-4w08.onrender.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then(data => {
                console.log("Products received:", data);
                setproducts(data);
            })
            .catch(error => {
                console.log("Error fetching products:", error);
            });

    }, []);

    let filterproducts = products.filter((p) => {
        return p.title.toLowerCase().includes(searchquery.toLowerCase());
    });

    return (
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px"
            }}>

                {filterproducts.map((e) => (
                    <Card
                        key={e._id}
                        image={e.image}
                        title={e.title}
                        price={e.price}
                    />
                ))}

            </div>
        </>
    );
}

export default Product;
