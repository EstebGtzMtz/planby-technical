import { parse, add, format } from 'date-fns';
import { FormattedEventInterface, RawChannelInterface, RawShowsInterface } from '../interfaces/interfaces';

const today = new Date();
const year = today.getFullYear().toString();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');

export const getFormattedDateToBaseURL = (isEndHour = false) => isEndHour ? `${year}${month}${day}235959` : `${year}${month}${day}000000`

export const getCurrentDateFormattedToCreateEPGConfigurationObject = (isEndDate = false) => isEndDate ? `${year}-${month}-${day}T24:00:00`: `${year}-${month}-${day}T00:00:00`

export const formatChannels = (channels: RawChannelInterface[]) => {
  return channels?.map((channel:RawChannelInterface) => ({
    uuid: channel.id,
    type: 'channel',
    title: channel.name,
    provider: channel.number,
    logo: channel.image,
  }));
};


export const formatEpgData = (channels: RawChannelInterface[]) => {
  return channels.reduce((acc, channel) => {
    return acc.concat(
      channel.events.map((event: RawShowsInterface) => ({
        id: event.id,
        description: event.description,
        title: event.name,
        since: convertDateFormatToFormatApiResponse(event.date_begin),
        till: convertDateFormatToFormatApiResponse(event.date_end),
        channelUuid: event.channel_id,
        duration: event.duration
      }))
    );
  }, [] as FormattedEventInterface[]); // Asegura que el acumulador sea un arreglo vacío al inicio

};

export const convertDateFormatToFormatApiResponse = (inputDate: string) => {
  const parsedDate = parse(inputDate, 'yyyy/MM/dd HH:mm:ss', new Date());
  const modifiedDate = add(parsedDate, { hours: 3, minutes: 50 });
  return format(modifiedDate, 'yyyy-MM-dd\'T\'HH:mm:ss');
};

