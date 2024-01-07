import { useEffect, useState } from "react";
import "./App.css";
import { productApi } from "./api/productApi";
import Products from "./components/Products";
import FilterSection from "./components/FilterSection";
import { useDispatch, useSelector } from "react-redux";
import { product } from "./features/productData/productDataSlice";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const products = useSelector((state) => state.product.value);
  const [filteredData, setFilteredData] = useState(products);
  const dispatch = useDispatch();
  const callProductApi = async () => {
    const Apidata = await productApi(setLoading, setError);
    dispatch(product(Apidata));
    setFilteredData(Apidata);
  };
  useEffect(() => {
    callProductApi();
  }, []);

  if (loading) {
    return <p>loading....</p>;
  }
  if (error) {
    return <p>Their is some technical error</p>;
  } else {
    return (
      <>
        <FilterSection
          loading={loading}
          data={products}
          setFilteredData={setFilteredData}
        />
        <Products filteredData={filteredData} />
      </>
    );
  }
}

export default App;
