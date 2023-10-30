/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse, add, format } from 'date-fns';

const today = new Date();
const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');

export const getFormattedDateToBaseURL = (isEndHour = false) => isEndHour ? `${year}${month}${day}235959` : `${year}${month}${day}000000`

export const getCurrentDateFormattedToCreateEPGConfigurationObject = (isEndDate = false) => isEndDate ? `${year}-${month}-${day}T24:00:00`: `${year}-${month}-${day}T00:00:00`

export const formatChannels = (channels: any) => {
  return channels?.map((channel:any) => ({
    uuid: channel.id,
    type: 'channel',
    title: channel.name,
    country: 'Mexico',
    provider: channel.number,
    logo: channel.image,
    year: 2002
  }));
};

export const mergeChannelsInfo = (channelsArray:any) => {
  const arrayOfArrays = channelsArray.map((arr:any) => arr.channels);
  return [].concat(...arrayOfArrays)
};

export const formatEpgData = (channels:any) => {
  const cleanedData = channels.map((channel:any) => ({
    channels: channel.events.map((event:any) => ({
        id: event.id,
        description: event.description,
        title: event.name,
        since: convertDateFormatToFormatApiResponse(event.date_begin),
        till: convertDateFormatToFormatApiResponse(event.date_end),
        channelUuid: event.channel_id,
      }))
  }));

  return mergeChannelsInfo(cleanedData)
};

export const convertDateFormatToFormatApiResponse = (inputDate: string) => {
  const parsedDate = parse(inputDate, 'yyyy/MM/dd HH:mm:ss', new Date());
  const modifiedDate = add(parsedDate, { hours: 3, minutes: 50 });
  return format(modifiedDate, 'yyyy-MM-dd\'T\'HH:mm:ss');
};

