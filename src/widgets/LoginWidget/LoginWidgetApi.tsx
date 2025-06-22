import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegistrationFormType } from './LoginWidget.types';

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api', // Adjust the base URL as needed
    }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (payload: RegistrationFormType) => ({
                url: '/register',
                method: 'POST',
                body: payload
            })
        })
    })
})

export const { useCreateUserMutation } = loginApi;
