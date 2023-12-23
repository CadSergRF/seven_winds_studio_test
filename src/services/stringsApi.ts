import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TreeResponse } from '../types/api.types';
// import type { Pokemon } from './types'

const baseUrl = import.meta.env.VITE_SWS_BASE_URL;
const eId = import.meta.env.VITE_eID;

export const stringsApi = createApi({
  reducerPath: 'stringsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl + eId + '/row' }),
  endpoints: (builder) => ({
    getTreeRows: builder.query<TreeResponse, void>({
      query: () => `/list`,
    }),
  }),
});

export const { useGetTreeRowsQuery } = stringsApi;
