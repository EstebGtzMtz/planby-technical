import { Channel, ChannelBox, ChannelLogo } from "planby";

interface ChannelItemProps {
  channel: Channel;
}

export const ChannelItem = ({ channel }: ChannelItemProps) => {
  const { position, logo } = channel;
  return (
    <ChannelBox {...position}>
      <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 52, maxWidth: 52 }}
      />
    </ChannelBox>
  );
};
