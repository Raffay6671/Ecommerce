import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const { filteredProducts } = location.state || { filteredProducts: [] }; // Get filtered products or default to an empty array

  return (
    <div>
      <h1>Search Results</h1>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Search;
