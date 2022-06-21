import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev1-api.twelve.football/auth",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login/username",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
