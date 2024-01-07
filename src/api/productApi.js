import axios from "axios";

export const productApi = async (setLoading, setError) => {
  try {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://fakestoreapiserver.reactbd.com/products",
    };

    const data = await axios.request(options);
    return data?.data;
  } catch (error) {
    console.log(error.message);
    setError(true);
  } finally {
    setLoading(false);
  }
};
