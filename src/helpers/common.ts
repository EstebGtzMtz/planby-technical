import { parse, add, format } from 'date-fns';

const baseURL = 'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=20231027000000&date_to=20231027235959&quantity=20'

  export const fetchClaroVideoChannels = async () => {
    const res = await fetch(baseURL);
    const {response: {channels}} = await res.json();

    const channelsData = formatChannels(channels);
    const unformattedEpgData = formatEpgData(channels);

    const EPGData = mergeChannelsInfo(unformattedEpgData);

    return { channelsData, EPGData };
  }

  const formatChannels = (channels) => {
    return channels.map(channel => ({
      uuid: channel.id,
      type: 'channel',
      title: channel.name,
      country: 'Mexico',
      provider: channel.number,
      logo: channel.image,
      year: 2002
    }));
  };

  const formatEpgData = (channels) => {
    return channels.map(channel => ({
      channels: channel.events.map(event => ({
          id: event.id,
          description: event.description,
          title: event.name,
          isYesterday:true,
          since: convertDateFormat(event.date_begin),
          till: convertDateFormat(event.date_end),
          channelUuid: event.channel_id,
          country:'Ghana',
          Year:'2021–',
          Rated:"TV-14",
          Released:"29 Dec 2021",
          Runtime:"N/A",
          Genre:"Action, Adventure, Sci-Fi",
          Director:"N/A",
          Writer:"Jon Favreau",
          Actors:"Temuera Morrison, Ming-Na Wen, Matt Berry",
          Language:"English",
          Country:"United States",
          Awards:"N/A",
          Metascore:"N/A",
          imdbRating:"8.0",
          imdbVotes:"20,147",
          imdbID:"tt13668894",
          Type:"series",
          totalSeasons:"1",
          Response:"True",
          Ratings:[
            {
              Source:"Internet Movie Database",
              Value:"8.0/10"
            }
          ],
          rating:3
        }))
    }));
  }

  export const convertDateFormat = (inputDate: string) => {
    const parsedDate = parse(inputDate, 'yyyy/MM/dd HH:mm:ss', new Date());
    const modifiedDate = add(parsedDate, {
      hours: 3,
      minutes: 50,
    });
    const formattedDate = format(modifiedDate, 'yyyy-MM-dd\'T\'HH:mm:ss');
    return formattedDate;
  }

  export const getCurrentDateFormatted = (isEndDate = false) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return isEndDate ? `${year}-${month}-${day}T24:00:00`: `${year}-${month}-${day}T00:00:00`
  }

  const mergeChannelsInfo = (channelsArray) => {
    const arrayOfArrays = channelsArray.map(arr => arr.channels);
    return [].concat(...arrayOfArrays)
  }