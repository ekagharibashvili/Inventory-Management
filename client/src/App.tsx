import React from 'react';
import { Container } from 'react-bootstrap';
import TableComponent from './Table';

const App: React.FC = () => {
  return (
    <Container>
      <h1>Items</h1>
      <TableComponent />
    </Container>
  );
};

export default App;

