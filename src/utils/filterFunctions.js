export const filterItems = (genderCat, setFilteredData, data, ratings) => {
  if (genderCat.length > 0) {
    if (ratings.length > 0) {
      let temp = data?.filter((items) => genderCat.includes(items?.category));
      let temp2 = temp.filter((items) => ratings.includes(items?.rating));
      setFilteredData(temp2);
    } else {
      let temp = data?.filter((items) => genderCat.includes(items?.category));
      setFilteredData(temp);
    }
  } else if (ratings?.length > 0) {
    if (genderCat.length > 0) {
      let temp = data?.filter((items) => ratings.includes(items?.rating));
      let temp2 = temp?.filter((items) => genderCat.includes(items?.category));
      setFilteredData(temp2);
    } else {
      let temp = data?.filter((items) => ratings.includes(items?.rating));
      setFilteredData(temp);
    }
  } else {
    setFilteredData([...data]);
  }
};
