import client from './contentfulClient';

export const updateProduct = async (id: string, fields: { title?: string; description?: string; imageUrl?: string }) => {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID|| '');
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT|| 'master');
    const product = await environment.getEntry(id);

    // Update fields
    if (fields.title) product.fields.title = { 'en-US': fields.title };
    if (fields.description) product.fields.description = { 'en-US': fields.description };
    if (fields.imageUrl) product.fields.imageUrl = { 'en-US': fields.imageUrl };

    const updatedProduct = await product.update();
    await updatedProduct.publish();
    
    return updatedProduct;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID|| '');
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT|| 'master');
    const product = await environment.getEntry(id);

    await product.unpublish();
    await product.delete();
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};