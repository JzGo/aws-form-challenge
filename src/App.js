import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MessageForm from './MessageForm'

function App() {

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xs">
        <h1>Messenger App</h1>
        <p>Send a message to the creator!</p>
        <MessageForm/>
      </Container>
    </div>
  );
}

export default App;
