import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductList from "./ProductList";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const history = useHistory();
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setSearchProducts([]);
      history.push(`/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="container">
      <h2>Search Products</h2>
      <form onSubmit={handleSearchSubmit}>
        <input type="text"placeholder="Enter search term..." value={searchTerm} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      {searchProducts.length === 0 ? (
        <div className="container" style={{ minHeight: "70vh" }}>
          <div className="fw-5 text-danger py-5">
            <h3>No Products found.</h3>
          </div>
        </div>
      ) : (
        <main>
          <div className="search-content bg-whitesmoke">
            <div className="container">
              <div className="py-5">
                <div className="title-md">
                  <h3>Search results:</h3>
                </div>
                <br />
                <ProductList products={searchProducts} />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default SearchPage;
