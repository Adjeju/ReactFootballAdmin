import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev1-api.twelve.football/admin",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPLayers: builder.query({
      query: () => "/players",
    }),
    getPlayerById: builder.query({
      query: (id) => `/players/${id}`,
    }),
  }),
});

export const { useGetAllPLayersQuery, useGetPlayerByIdQuery } = playersApi;
