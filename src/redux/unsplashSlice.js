import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myUnsplashSlice = createApi({
  reducerPath: 'unsplash',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
    // prepareHeaders: (headers, api) => {
    //   headers.set('client_id', `9tSb3ALXYO6Va-6WbKlq3Ox7oXjwofHL-Q5yPZ9X5uc`);
    //   return headers;
    // },
  }),
  tagTypes: ['Images', 'Image'],
  endpoints: builder => ({
    getImgs: builder.query({
      query: ({ searchQuery, page, per_page }) =>
        `/search/photos/?client_id=9tSb3ALXYO6Va-6WbKlq3Ox7oXjwofHL-Q5yPZ9X5uc&query=${searchQuery}&page=${page}&per_page=${per_page}`,
      providesTags: ['Images'],
    }),
    getRandomImgs: builder.query({
      query: ({ searchQuery, page, per_page }) =>
        `/search/photos/?client_id=9tSb3ALXYO6Va-6WbKlq3Ox7oXjwofHL-Q5yPZ9X5uc&query=${searchQuery}&page=${page}&per_page=${per_page}`,
      providesTags: ['Images'],
    }),
    getImgById: builder.query({
      query: id => `/photos/${id}`,
      providesTags: ['Image'],
    }),
  }),
});

export const { useGetImgsQuery, useGetImgByIdQuery } = myUnsplashSlice;
