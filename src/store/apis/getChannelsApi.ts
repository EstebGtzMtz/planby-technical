import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getFormattedDateToBaseURL } from '../../helpers';

const baseURL =
  `https://mfwkweb-api.clarovideo.net/services/epg`

export const channelsApi = createApi({
  reducerPath: 'channels',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => `/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=${getFormattedDateToBaseURL()}&date_to=${getFormattedDateToBaseURL(true)}&quantity=20`
    })
  })
});

export const { useGetChannelsQuery } = channelsApi;