import axios from 'axios';

const apiDatabricks = axios.create({
  baseURL: process.env.DATABRICKS_HOST,
  headers: {
    Authorization: `Bearer ${process.env.DATABRICKS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default apiDatabricks;
