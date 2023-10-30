/* eslint-disable react-hooks/exhaustive-deps */
import { getCurrentDateFormattedToCreateEPGConfigurationObject } from './helpers';
import { Channel, Program, useEpg } from "planby";
import { theme } from "./helpers/theme";
import { useCallback, useEffect, useState } from 'react';
import { formatChannels, formatEpgData } from './helpers/common';
import { useGetChannelsQuery } from './store/apis';

export function useApp() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [epg, setEpg] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: channelsData, isLoading: isChannelsLoading } = useGetChannelsQuery({},{refetchOnMountOrArgChange: false});

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channels,
    epg: epg,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: getCurrentDateFormattedToCreateEPGConfigurationObject(),
    endDate: getCurrentDateFormattedToCreateEPGConfigurationObject(true),
    isBaseTimeFormat: true,
    theme,
  });

  const handleFetchResources = useCallback(async () => {
    setIsLoading(true);
    if (!isChannelsLoading) {
      setChannels(formatChannels(channelsData.response.channels) as unknown as Channel[]);
      setEpg(formatEpgData(channelsData.response.channels) as Program[]);
      setIsLoading(false);
    }
  }, [isChannelsLoading]);

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}