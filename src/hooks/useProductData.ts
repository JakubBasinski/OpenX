import { useMutation } from 'react-query';
import { useQuery } from 'react-query';
import axiosInstance from '../utils/axios.utils';

const fetchProductData = () => {
  return axiosInstance.get('users');
};

export const useProducData = (onSuccess, onError) => {
  return useQuery('product', fetchProductData, { onSuccess, onError });
};
