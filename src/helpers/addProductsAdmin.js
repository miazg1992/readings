import downloadVitaminsByProductName from './downloadProductVitamins';

export const addProductsAdmin = () => {
  console.log('Admin dodaje do bazy');
  downloadVitaminsByProductName('pumpkin');
};
