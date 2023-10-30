import {Button, Card, Modal} from 'react-bootstrap';
import { useState, useMemo } from 'react';
import { EPG } from './components';
import { useAppSelector } from './hooks/reduxHooks';

export const App = () => {

  const { description, title, since, till } = useAppSelector(state => state.channel);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const startHour = useMemo(() => since.slice(-8), [since]);
  const finishHour = useMemo(()=> till.slice(-8), [till])


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open EPG
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <Card>
            <Card.Body>
              <Card.Title> {title} </Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <footer className="blockquote-footer">
                {startHour} hours to {finishHour} hours
              </footer>
            </Card.Body>
          </Card>

          <EPG />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}
