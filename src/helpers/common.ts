import { channels } from './channels';
import { epg } from "./epg";

const baseURL = 'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=20231027000000&date_to=20231027235959&quantity=5'

export const fetchClaroVideoChannels = async () => {
  const res = await fetch(baseURL);
  const {response: {channels}} = await res.json();
  console.log(channels)

  const channelsData = channels.map(channel => ({
    uuid: channel.id,
    type: 'channel',
    title: channel.name,
    country: 'Mexico',
    logo: channel.image,
    provider: channel.number,
    year: 2002
  }))

  const epgData = channels.map(channel => ({
    channels: channel.events.map(event => ({
        id: event.id,
        description: event.description,
        title: event.name,
        channelUuid: event.channel_id,
        isYesterday:true,
        since:"2023-10-17T23:50:00",
        till:"2023-10-18T00:55:00",
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

  console.log(epgData, 'data epg')
  console.log(channelsData, 'channels Data')

  return { channelsData, epgData };
}

// {
//   "id":"6f3caa7f-5b11-4edb-998e-80d4baa03373",
//   "description":"Bounty hunter Boba Fett & mercenary Fennec Shand navigate the underworld when they return to Tatooine to claim Jabba the Hutt's old turf.",
//   "title":"The Book of Boba Fett",
//   "isYesterday":true,
//   "since":"2022-10-17T23:50:00",
//   "till":"2022-10-18T00:55:00",
//   "channelUuid":"16fdfefe-e466-4090-bc1a-57c43937f826",
//   "image":"https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
//   "country":"Ghana",
//   "Year":"2021–",
//   "Rated":"TV-14",
//   "Released":"29 Dec 2021",
//   "Runtime":"N/A",
//   "Genre":"Action, Adventure, Sci-Fi",
//   "Director":"N/A",
//   "Writer":"Jon Favreau",
//   "Actors":"Temuera Morrison, Ming-Na Wen, Matt Berry",
//   "Language":"English",
//   "Country":"United States",
//   "Awards":"N/A",
//   "Metascore":"N/A",
//   "imdbRating":"8.0",
//   "imdbVotes":"20,147",
//   "imdbID":"tt13668894",
//   "Type":"series",
//   "totalSeasons":"1",
//   "Response":"True",
//   "Ratings":[
//      {
//         "Source":"Internet Movie Database",
//         "Value":"8.0/10"
//      }
//   ],
//   "rating":3
// },

export const fetchChannels = async () =>
  new Promise((res) => setTimeout(() => res(channels), 400));

export const fetchEpg = async () =>
  new Promise((res) => setTimeout(() => res(epg), 500));
