import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies/: companyname/categories/: categoryname/products?top=n&minPri ce=p&maxPrice=q';

export const fetchTopProducts = async (company, category, topN, minPrice = 0, maxPrice = 100000) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${company}/categories/${category}/products/top-${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
