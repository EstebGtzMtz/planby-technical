import { useMemo } from 'react';
import { Card } from 'react-bootstrap'
import { useAppSelector } from '../hooks/reduxHooks';
import './styles.css'

export const ChannelDescriptionCard = () => {

  const { currentNote: { title, description, since, till, duration} } = useAppSelector(state => state.channel);


  const startHour = useMemo(() => since.slice(-8), [since]);
  const finishHour = useMemo(()=> till.slice(-8), [till]);

  return (
    <Card>
      <Card.Header> { title } </Card.Header>
      <Card.Body className='description-body'>
        <Card.Text>
          { description }
        </Card.Text>
        <div>
          { since && <footer className="blockquote-footer"> Horario: {startHour} horas a {finishHour} horas </footer> }
          { duration && <footer className="blockquote-footer"> Duracion: {duration} </footer> }
        </div>
      </Card.Body>
    </Card>
  )
}
