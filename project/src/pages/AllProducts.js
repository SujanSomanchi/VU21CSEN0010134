import React, { useState, useEffect } from 'react';
import { fetchTopProducts } from '../services/apiService';
import ProductCard from '../components/ProductCard';
import { Grid, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: companies[0],
    category: categories[0],
    topN: 10,
    minPrice: 0,
    maxPrice: 10000
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const data = await fetchTopProducts(filters.company, filters.category, filters.topN, filters.minPrice, filters.maxPrice);
    setProducts(data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <h1>All Products</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Company</InputLabel>
            <Select name="company" value={filters.company} onChange={handleInputChange}>
              {companies.map((company) => (
                <MenuItem key={company} value={company}>{company}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select name="category" value={filters.category} onChange={handleInputChange}>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Top N"
            name="topN"
            type="number"
            value={filters.topN}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Min Price"
            name="minPrice"
            type="number"
            value={filters.minPrice}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Max Price"
            name="maxPrice"
            type="number"
            value={filters.maxPrice}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={fetchProducts}>
        Apply Filters
      </Button>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProducts;
