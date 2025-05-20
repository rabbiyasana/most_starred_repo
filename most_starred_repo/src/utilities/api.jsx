import axios from 'axios';
import { GITHUB_API_URL } from '../constants/constants.jsx';

export const fetchRepos = async (page = 1) => {
  const date = new Date();
  date.setDate(date.getDate() - 10);
  const formattedDate = date.toISOString().split('T')[0];

  const response = await axios.get(`${GITHUB_API_URL}?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`);
  return response.data.items;
};