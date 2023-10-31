/* eslint-disable @typescript-eslint/no-explicit-any */
import { Epg, Layout } from "planby";
import { useApp } from "../useApp";
import { Timeline } from "./Timeline";
import { Program } from './ProgramItem';
import { ChannelItem } from "./ChanelItem";
import { ChannelItemProps } from "../interfaces";

export const EPG = () => {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div style={{ height: "59vh", width: "100%" }}>
      <Epg isLoading={isLoading} {...getEpgProps()}>
        <Layout
          {...getLayoutProps()}
          renderTimeline={(props: any) => <Timeline {...props} />}
          renderProgram={({ program, ...rest }: any) => (
            <Program key={program.data.id} program={program} {...rest} />
          )}
          renderChannel={({ channel }: ChannelItemProps) => (
            <ChannelItem key={channel.uuid} channel={channel} />
          )}
        />
      </Epg>
    </div>
  )
}
