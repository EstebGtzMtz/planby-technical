import { fetchChannels, fetchClaroVideoChannels, fetchEpg } from './helpers';
import { Channel, Program, useEpg } from "planby";
import { theme } from "./helpers/theme";
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useApp() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [epg, setEpg] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const channelsData = useMemo(() => channels, [channels]);
  const epgData = useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: "2023-10-27T00:00:00",
    endDate: "2023-10-27T24:00:00",
    isBaseTimeFormat: true,
    theme,
  });

  const handleFetchResources = useCallback(async () => {
    setIsLoading(true);
    const { channelsData, epgData } = await fetchClaroVideoChannels();
    const epg = await fetchEpg();
    const channels = await fetchChannels();
    setEpg(epg as Program[]);
    setChannels(channelsData as Channel[]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
