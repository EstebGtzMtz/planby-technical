/* eslint-disable @typescript-eslint/no-explicit-any */
import { Epg, Layout } from "planby";
import { useApp } from "../useApp";
import { Timeline } from "./Timeline";
import { Program } from './ProgramItem';
import { ChannelItem } from "./ChanelItem";
import { ChannelItemProps } from "../interfaces";
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentChannelImage } from "../store/Channels";

export const EPG = () => {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();
  const {currentNote: {channelUuid}} = useAppSelector(state => state.channel);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(channelUuid !== null){
      const {channels} = {...getLayoutProps()}
      const [currentChannel] = channels.filter(el => el.uuid === channelUuid);
      dispatch(setCurrentChannelImage(currentChannel?.logo))
    }
  }, [channelUuid, dispatch, getLayoutProps]);


  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <Epg isLoading={isLoading} {...getEpgProps()}>
        <Layout
          {...getLayoutProps()}
          renderTimeline={(props: any) => <Timeline {...props} />}
          renderProgram={({ program, ...rest }: any) => (
            <Program key={program.data.id} program={program} {...rest}  />
          )}
          renderChannel={({ channel }: ChannelItemProps) => (
            <ChannelItem key={channel.uuid} channel={channel}/>
          )}
        />
      </Epg>
    </div>
  )
}
