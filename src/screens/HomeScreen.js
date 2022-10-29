import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
//import data from "../data";

function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/products');
            setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Lista de productos</h1>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.slug}>
                        <Link to={`/product/${product.slug}`}>
                            <img src={product.image} alt={product.name}/>
                        </Link>
                        <div className="product-info">
                            <a href={`/product/${product.slug}`}>
                                <p>{product.name}</p>
                            </a>
                            <p>{product.price}</p>
                            <button>Agregar al carro</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )}
export default HomeScreen;