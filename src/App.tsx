import { Epg, Layout } from "planby";
import { ChannelItem } from "./components/ChanelItem";
import { Program } from "./components/ProgramItem";
import { Timeline } from "./components/Timeline";
import { useApp } from "./useApp";

export const App = () => {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div style={{ height: "80vh", width: "99vw" }}>
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
  );
}
