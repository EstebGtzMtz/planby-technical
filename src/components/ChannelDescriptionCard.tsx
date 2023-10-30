import { useMemo } from 'react';
import { Card } from 'react-bootstrap'
import { useAppSelector } from '../hooks/reduxHooks';
import './styles.css'

export const ChannelDescriptionCard = () => {

  const { currentNote: { title, description, since, till} } = useAppSelector(state => state.channel);


  const startHour = useMemo(() => since.slice(-8), [since]);
  const finishHour = useMemo(()=> till.slice(-8), [till]);

  return (
    <Card className='card-container'>
      <Card.Body>
        <Card.Title>
          {
            title ? title : 'Welcome to our Claro Video EPG'
          }
        </Card.Title>
        {
          description &&
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                {description}
                {' '}
              </p>
              <footer className="blockquote-footer">
                {startHour} hours to {finishHour} hours
              </footer>
            </blockquote>
        }
      </Card.Body>
    </Card>
  )
}
