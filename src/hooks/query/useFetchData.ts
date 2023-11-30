import axios from 'axios';
import { useQuery } from 'react-query';

const BASE_URL = 'https://fe-task-api.mainstack.io';

const getUserDetails = async () => {
  const res = await axios.get(`${BASE_URL}/user`);
  return res.data;
};

const getUserWallet = async () => {
  const res = await axios.get(`${BASE_URL}/wallet`);
  return res.data;
};

const getUserTransactions = async () => {
  const res = await axios.get(`${BASE_URL}/transactions`);
  return res.data;
};

const useGetUserDetails = () => useQuery('user-details', getUserDetails);
const useGetUserWallet = () => useQuery('user-wallet', getUserWallet);
const useGetUserTransactions = () => useQuery('user-transactions', getUserTransactions);

export { useGetUserDetails, useGetUserWallet, useGetUserTransactions };
