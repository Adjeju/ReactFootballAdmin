import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const matchesApi = createApi({
  reducerPath: "matchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev1-api.twelve.football/admin",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllMatches: builder.query({
      query: () => "/matches",
    }),
    getMatchById: builder.query({
      query: (id) => `/matches/${id}`,
    }),
  }),
});

export const { useGetAllMatchesQuery, useGetMatchByIdQuery } = matchesApi;
