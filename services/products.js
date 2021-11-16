import request from './request.js';

const baseURL = 'https://chat-ios-327009-default-rtdb.firebaseio.com';

const urlBuilder = (resource = 'products') => `${baseURL}/${resource}.json`;

export default {
  add: async (newProduct) => {
    try {
      const product = await request.post(urlBuilder(), newProduct);
      return product;
    } catch (err) {
      return err;
    }
  },
  getAll: async () => {
    try {
      const products = await request.get(urlBuilder());
      return Object.keys(products).map((key) => ({
        id: key,
        ...products[key],
      }));
    } catch (err) {
      return err;
    }
  },
  getOneById: async (id) => {
    try {
      const item = await request.get(urlBuilder(`products/${id}`));
      return { ...item, itemId: id };
    } catch (err) {
      return err;
    }
  },
  //   update: async (itemId, itemObj) => {
  //     try {
  //       const updatedItem = await request.patch(
  //         urlBuilder(`destinations/${itemId}`),
  //         itemObj
  //       );
  //       return updatedItem;
  //     } catch (err) {
  //       return err;
  //     }
  //   },
  delete: async (id) => {
    try {
      await request.delete(urlBuilder(`products/${id}`));
    } catch (err) {
      return err;
    }
  },
};
