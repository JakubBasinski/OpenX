import { useQuery } from 'react-query';
import axiosInstance from '../utils/axios.utils';

const fetchUserData = () => {
  return axiosInstance.get('users');
};

export const useUserData = (onSuccess, onError) => {
  return useQuery('users', fetchUserData, { onSuccess, onError });
};
