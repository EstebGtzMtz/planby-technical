import { parse, add, format } from 'date-fns';

export const getFormattedDateToBaseURL = (isEndHour = false) => {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  return isEndHour ? year + month + day + '235959' : year + month + day + '000000';
}

export const formatChannels = (channels) => {
  return channels?.map(channel => ({
    uuid: channel.id,
    type: 'channel',
    title: channel.name,
    country: 'Mexico',
    provider: channel.number,
    logo: channel.image,
    year: 2002
  }));
};

export const cleanEpgData = (channels) => {
  return channels.map(channel => ({
    channels: channel.events.map(event => ({
        id: event.id,
        description: event.description,
        title: event.name,
        since: convertDateFormatToCleanApiResponse(event.date_begin),
        till: convertDateFormatToCleanApiResponse(event.date_end),
        channelUuid: event.channel_id,
      }))
  }));
}

export const convertDateFormatToCleanApiResponse = (inputDate: string) => {
  const parsedDate = parse(inputDate, 'yyyy/MM/dd HH:mm:ss', new Date());
  const modifiedDate = add(parsedDate, {
    hours: 3,
    minutes: 50,
  });
  const formattedDate = format(modifiedDate, 'yyyy-MM-dd\'T\'HH:mm:ss');
  return formattedDate;
}

export const getCurrentDateFormattedToCreateEPGConfigurationObject = (isEndDate = false) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return isEndDate ? `${year}-${month}-${day}T24:00:00`: `${year}-${month}-${day}T00:00:00`
}



export const mergeChannelsInfo = (channelsArray) => {
  const arrayOfArrays = channelsArray.map(arr => arr.channels);
  return [].concat(...arrayOfArrays)
}