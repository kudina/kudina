// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Product", "Category", "SubCategory", "Ads"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
    }),
    addStaff: builder.mutation({
      query: (staff) => ({
        url: "/user/register",
        method: "POST",
        body: staff,
      }),
    }),
    addUserRole: builder.mutation({
      query: (title) => ({
        url: "/settings/create-user-role",
        method: "POST",
        body: title,
      }),
    }),
    getRole: builder.query({
      query: () => ({
        url: "/settings/get-all-user-roles",
      }),
    }),
    addBranch: builder.mutation({
      query: (branch) => ({
        url: "/settings/create-branch",
        method: "POST",
        body: branch,
      }),
    }),
    getBranch: builder.query({
      query: () => ({
        url: "/settings/get-all-branches",
      }),
    }),
    createCustomer: builder.mutation({
      query: (customer) => ({
        url: "/customers/create-customer",
        method: "POST",
        body: customer,
      }),
    }),
    createAccount: builder.mutation({
      query: (account) => ({
        url: "/customers/create-account",
        method: "POST",
        body: account,
      }),
    }),
    getCustomers: builder.query({
      query: () => ({
        url: "/customers/customer",
      }),
    }),
    getAllAccounts: builder.query({
      query: () => ({
        url: "/customers/get-all-accounts",
      }),
    }),
    getAccountsById: builder.mutation({
      query: (id) => ({
        url: "/customers/get-all-accounts-by-id",
        method: "POST",
        body: id,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useAddStaffMutation,
  useAddUserRoleMutation,
  useAddBranchMutation,
  useGetBranchQuery,
  useGetRoleQuery,
  useCreateCustomerMutation,
  useGetCustomersQuery,
  useGetAllAccountsQuery,
  useCreateAccountMutation,
  useGetAccountsByIdMutation,
} = apiSlice;
