import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

function Popup() { // uppercase rendering function
  const [showButton, setShowButton] = useState(true); // variable showButton = setShowButton function to state true
  const [showMessage, setShowMessage] = useState(false); // variable showMessage = setShowMessage function to state false
  
  return (
      
      
      <Container style={{ paddingTop: '2rem' }}>

      
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)} // onclick show message set show message to true
          size="lg"
          id="btn"
        >
          Display Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert" // CSS transition classes. (enter|active|exit|exit-active)
        className="box"
        unmountOnExit
        onEnter={() => setShowButton(false)} // set show message button to false when open box. 
        onExited={() => setShowButton(true)} // set show message button to true when close box.
        >         
        <Alert
          // variant=""
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            React alert message
          </Alert.Heading>
          <p>
            Transitionated in and out alert message.
          </p>
          <Button onClick={() => setShowMessage(false)}>
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

ReactDOM.render(
  <Popup />,
  document.getElementById('root')
);
