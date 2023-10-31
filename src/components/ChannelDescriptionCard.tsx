import { useMemo } from 'react';
import { Card } from 'react-bootstrap'
import { useAppSelector } from '../hooks/reduxHooks';
import './styles.css'

export const ChannelDescriptionCard = () => {

  const { currentNote: { title, description, since, till, duration} } = useAppSelector(state => state.channel);


  const shortName = useMemo(()=> description.length > 400 ? `${description.substring(0,400)}...` : description, [description])

  return (
    <Card>
      <Card.Header> { title } </Card.Header>
      <Card.Body className='description-body'>
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
