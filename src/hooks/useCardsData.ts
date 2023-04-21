import { useQuery } from 'react-query';
import axiosInstance from '../utils/axios.utils';

const fetchCartData = () => {
  return axiosInstance.get('carts/?startdate=2000-01-01&enddate=2023-04-07');
};

export const useCartData = (onSuccess, onError) => {
  return useQuery('carts', fetchCartData, { onSuccess, onError });
};
