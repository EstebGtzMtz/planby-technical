import { Epg, Layout } from "planby";
import { useApp } from "../useApp";
import { Timeline } from "./Timeline";
import { Program } from './ProgramItem';
import { ChannelItem } from "./ChanelItem";

export const EPG = () => {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <Epg isLoading={isLoading} {...getEpgProps()}>
        <Layout
          {...getLayoutProps()}
          renderTimeline={(props) => <Timeline {...props} />}
          renderProgram={({ program, ...rest }) => (
            <Program key={program.data.id} program={program} {...rest} />
          )}
          renderChannel={({ channel }) => (
            <ChannelItem key={channel.uuid} channel={channel} />
          )}
        />
      </Epg>
    </div>
  )
}
