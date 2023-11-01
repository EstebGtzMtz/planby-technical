import { ChannelLogo } from 'planby';
import { useMemo } from 'react';
import { Card } from 'react-bootstrap'
import { useAppSelector } from '../hooks/reduxHooks';
import './styles.css'

export const ChannelDescriptionCard = () => {

  const { currentNote: { title, description, since, till, duration, channelImage} } = useAppSelector(state => state.channel);


  const shortName = useMemo(()=> description.length > 400 ? `${description.substring(0,400)}...` : description, [description])

  return (
    <Card
      style={{backgroundColor:'#171923'}}
      text='white'
    >
      <Card.Header>
        <h3>{ title }</h3>
      </Card.Header>
      <Card.Body className='description-body'>
        {
          channelImage &&
          <ChannelLogo
            src={channelImage}
            alt="Logo"
            style={{ maxHeight: 100, maxWidth: 150 }}
          />
        }
        <Card.Text>
          { shortName }
        </Card.Text>
        <div>
          { since && <footer className="blockquote-footer"> Horario: {since}  a {till} </footer> }
          { duration && <footer className="blockquote-footer"> Duracion: {duration} </footer> }
        </div>
      </Card.Body>
    </Card>
  )
}
