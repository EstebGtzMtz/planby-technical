import { ChannelBox, ChannelLogo } from "planby";
import { ChannelItemProps } from "../interfaces";

export const ChannelItem = ({ channel }: ChannelItemProps) => {
  const { position, logo } = channel;
  return (
    <ChannelBox {...position}>
      <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 100, maxWidth: 100 }}
      />
    </ChannelBox>
  );
};
