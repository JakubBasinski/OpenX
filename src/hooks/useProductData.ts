import { useQuery } from 'react-query';
import axiosInstance from '../utils/axios.utils';

const fetchProductData = () => {
  return axiosInstance.get('products');
};

export const useProductData = (onSuccess, onError) => {
  return useQuery('products', fetchProductData, { onSuccess, onError });
};
