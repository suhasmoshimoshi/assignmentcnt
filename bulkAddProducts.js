require('dotenv').config();
const contentful = require('contentful-management');

// Pure function to create a product object
const createProduct = (id) => ({
  title: `Product ${id}`,
  description: `Description for Product ${id}`,
  imageUrl: `https://via.placeholder.com/150?text=Product+${id}`
});



// Pure function to create an array of products
const createProducts = (count) => Array.from({ length: count }, (_, i) => createProduct(i + 1));

// Function to create a Contentful entry from a product object (returns a Promise)
const createContentfulEntry = (environment, product) => {
  return environment.createEntry('product', {
    fields: {
      title: { 'en-US': product.title },
      description: { 'en-US': product.description },
      imageUrl: { 'en-US': product.imageUrl },
    }
  }).then(entry => entry.publish());
};

// Initialize the Contentful Management client
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
});

// Function to handle the process of adding products
const addProducts = async (products) => {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);

    const promises = products.map(product => createContentfulEntry(environment, product));
    await Promise.all(promises);

    console.log(`${products.length} products successfully created and published.`);
  } catch (error) {
    console.error('Error creating products:', error);
  }
};

// Generate 20 products and add them to Contentful
const products = createProducts(20);
addProducts(products);
