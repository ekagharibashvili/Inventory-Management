import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

interface Item {
  id: number;
  name: string;
  location: string;
  price: number;
}

const TableComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch items from the backend
    fetch('http://localhost:8080/api/inventory')
      .then(res => res.json())
      .then(data => setItems(data.slice(0, 100)));
  }, []);

  const handleDelete = (id: number) => {
    // Send delete request to the backend
    fetch(`http://localhost:8080/api/inventory/${id}`, {
      method: 'DELETE'
    }).then(() => {
      // Remove the item from the stat
      setItems(items.filter(item => item.id !== id));
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item name</th>
          <th>Item location</th>
          <th>Price (GEL)</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.price}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
