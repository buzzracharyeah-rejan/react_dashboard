import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(
  '🚀 ~ file: index.js:5 ~ import.meta.env.REACT_APP_BASE_URL:',
  import.meta.env.REACT_APP_BASE_URL
);

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  reducerPath: 'adminApi',
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      provideTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery } = api;
