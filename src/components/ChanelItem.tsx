import { ChannelBox, ChannelLogo } from "planby";
import { ChannelItemProps } from "../interfaces";

export const ChannelItem = ({ channel }: ChannelItemProps) => {
  const { position, logo, number } = channel;

  return (
    <ChannelBox {...position} style={{display: 'flex', flexDirection:'column'}}>
      <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 100, maxWidth: 100 }}
      />
      <h3 style={{color: 'white'}}>{number}</h3>
    </ChannelBox>
  );
};
