import { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { getDataForFilter } from "../utils/getDataForFilter";
import { filterItems } from "../utils/filterFunctions";
import { useSelector } from "react-redux";
const FilterSection = ({ loading, setFilteredData }) => {
  const [genderCat, setGenderCat] = useState([]);
  const [ratings, setRatings] = useState([]);
  const products = useSelector((state) => state.product.value);
  let obj = {};

  let filterObj = {};
  if (loading === false) {
    let forFilterData = getDataForFilter(products);
    obj = forFilterData;
  }
  console.log(obj);
  const handleCategory = (items, e) => {
    if (e.target.checked === false) {
      setGenderCat(genderCat.filter((gender) => gender !== items));
    } else {
      setGenderCat((prev) => [...prev, items]);
    }
  };
  const handleRatings = (items, e) => {
    if (e.target.checked === false) {
      setRatings(ratings.filter((rating) => rating !== items));
    } else {
      setRatings((prev) => [...prev, items]);
    }
  };
  const checkingFilterObj = () => {
    if (genderCat.length > 0) {
      console.log("This condtion is working");
    }
    if (ratings.length > 0) {
      filterObj["rating"] = true;
    }
  };
  console.log("filterObj", filterObj);
  useEffect(() => {
    checkingFilterObj();
  }, [filterObj]);
  useEffect(() => {
    filterItems(genderCat, setFilteredData, products);
  }, [genderCat, ratings]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {obj?.categories?.map((items, index) => (
        <FormControlLabel
          value={items}
          control={<Checkbox />}
          label={items}
          key={index}
          onChange={(e) => handleCategory(items, e)}
        />
      ))}
      {obj?.ratings?.map((items, index) => (
        <FormControlLabel
          value={items}
          control={<Checkbox />}
          label={items}
          key={index}
          onChange={(e) => handleRatings(items, e)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
