import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev1-api.twelve.football/admin/players",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPLayers: builder.query({
      query: () => "",
    }),
    getPlayerById: builder.query({
      query: (id) => `/${id}`,
    }),
    postPlayerImage: builder.mutation({
      query: ({ id, body }) => {
        console.log(id, body);
        return {
          url: `/${id}/image`,
          method: "POST",
          body,
        };
      },
    }),
    deletePlayerImage: builder.mutation({
      query: (id) => ({
        url: `/${id}/image`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPLayersQuery,
  useGetPlayerByIdQuery,
  usePostPlayerImageMutation,
  useDeletePlayerImageMutation,
} = playersApi;
