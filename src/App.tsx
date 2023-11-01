import {Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { ChannelDescriptionCard, EPG } from './components';
import './App.css';

export const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open EPG
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body style={{backgroundColor: '#1a202c'}}>
          <ChannelDescriptionCard />
          <EPG />
        </Modal.Body>
      </Modal>
      </>
  );
}
