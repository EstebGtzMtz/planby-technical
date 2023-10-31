import { Channel } from "planby"

  export interface RawChannelInterface {
    id: string
    image: string
    name: string
    number: string
    events: RawShowsInterface[]
  }

  export interface RawShowsInterface{
    id: string
    name: string
    channel_id: string
    date_begin: string
    date_end: string
    description: string
    duration: string
  }

  export interface FormattedEventInterface {
    id: string;
    description: string;
    title: string;
    since: string;
    till: string;
    channelUuid: string;
  }

  export interface ChannelItemProps {
    channel: Channel;
  }