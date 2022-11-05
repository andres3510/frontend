import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

const baseURL = "http://localhost:5000";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`${baseURL}/api/product/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, [slug]);
  return (
    loading? <div>loading...</div>
    : error? <div>{error}</div>
    : 
    <div>
      {product.name}
    </div>
  )
}
export default ProductScreen;