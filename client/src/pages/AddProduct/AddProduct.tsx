import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

interface InventoryItem {
  name: string;
  location: string;
  price: number;
}

const AddProductPage = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState<string>('Main Office');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inventoryItem: InventoryItem = {
      name,
      price,
      location,
    };

    try {
      await axios.post('http://localhost:8080/api/inventory', inventoryItem);
      setName('');
      setPrice(0);
      setLocation('Main Office');
      setErrorMessage('');
      alert('Inventory item created successfully!');
    } catch (error) {
      setErrorMessage('An internal server error occurred while creating the inventory.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Form className="submit-form" onSubmit={handleSubmit}>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={price} onChange={(event) => setPrice(parseFloat(event.target.value))} required />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control as="select" value={location} onChange={(event) => setLocation(event.target.value)} required>
            <option>Main Office</option>
            <option>Cavea Gallery</option>
            <option>Cavea Tbilisi Mall</option>
            <option>Cavea East Point</option>
            <option>Cavea City Mall</option>
          </Form.Control>
        </Form.Group>

        <Button type="submit">Create Inventory Item</Button>
      </Form>
    </div>
  );
};

export default AddProductPage;
