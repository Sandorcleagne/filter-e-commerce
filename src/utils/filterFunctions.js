export const filterItems = (genderCat, setFilteredData, data) => {
  if (genderCat.length > 0) {
    let temp = data?.filter((items) => genderCat.includes(items?.category));
    setFilteredData(temp);
  } else {
    setFilteredData([...data]);
  }
};
