export const getDataForFilter = (data) => {
  let categories = [...new Set(data.map((item) => item?.category))];
  let ratings = [...new Set(data.map((item) => item?.rating))];
  let maxPrice = Math.max(...data.map((item) => item?.price));
  let minPrice = Math.min(...data.map((item) => item?.price));
  return {
    categories: categories,
    ratings: ratings,
    maxPrice: maxPrice,
    minPrice: minPrice,
  };
};
