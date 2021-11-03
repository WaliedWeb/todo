import React from 'react';
import Button from './components/Button/Button';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <div>
      <Title>Hier steht H1 Text</Title>
      <Button>
        <div>Hello</div>
      </Button>
    </div>
  );
}

export default App;
