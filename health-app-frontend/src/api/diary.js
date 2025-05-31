// src/api/diary.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/diaries';

export const getDiaryEntries = async (userId) => {
  const response = await axios.get(`${BASE_URL}/${userId}`);
  return response.data;
};

export const addDiaryEntry = async (userId, entryData) => {
  const response = await axios.post(`${BASE_URL}/${userId}`, entryData);
  return response.data;
};
