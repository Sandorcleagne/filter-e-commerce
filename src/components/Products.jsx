const Products = ({ filteredData }) => {
  return (
    <div>
      {filteredData.map((items) => (
        <span key={items?._id}>
          <p>
            {items?.category} {items?.rating}
          </p>
        </span>
      ))}
    </div>
  );
};

export default Products;
