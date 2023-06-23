/*Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input.*/

function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage
  const products = [
    { name: "Product 1", category: "Category 1" },
    { name: "Product 2", category: "Category 2" },
    { name: "Product 3", category: "Category 1" },
    { name: "Product 4", category: "Category 3" },
    { name: "Product 5", category: "Category 2" }
  ];
  
  const filterByCategory = filterProductsByCategory(products);
  
  const filteredProducts = filterByCategory("Category 1");
  console.log(filteredProducts);
  