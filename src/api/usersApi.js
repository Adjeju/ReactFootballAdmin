import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev1-api.twelve.football/admin/users",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "",
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    addUser: builder.mutation({
      query: (body) => {
        return {
          url: ``,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery, useAddUserMutation } =
  usersApi;
