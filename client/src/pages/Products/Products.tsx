import { useState, useEffect } from 'react';
import { Table, Button, Container, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';

interface Item {
  id: number;
  name: string;
  location: string;
  price: number;
}

const ProductsPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const params = new URLSearchParams(location.search);

  let currentPage = Number(params.get('page')) || 1;

  useEffect(() => {
    // Fetch items from the backend
    let url = 'http://localhost:8080/api/inventory';
    if (selectedLocation && selectedLocation !== 'all') {
      url += `?location=${selectedLocation}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data.slice(0, 2000)));
  }, [location, selectedLocation]);

  const handleDelete = (id: number) => {
    // Send delete request to the backend
    fetch(`http://localhost:8080/api/inventory/${id}`, {
      method: 'DELETE'
    }).then(() => {
      // Remove the item from the stat
      setItems(items.filter(item => item.id !== id));
    });
  };

  useEffect(() => {
    navigate({ pathname: '/', search: '?page=1' });
  }, [navigate]);

  const updateURL = (name: any, value: any) => {
    const params = new URLSearchParams(location.search);
    params.set(name, value);
    const newURL = `?${params.toString()}`;
    navigate({ pathname: location.pathname, search: newURL });
  };

  const handlePagination = (e: any) => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
    updateURL('page', currentPage + +e.target.value);
  };

  const handleSelect = (e: any) => {
    setSelectedLocation(e.target.value);
    updateURL('location', e.target.value);
  };

  const filterItems = (items: Item[]) => {
    const firstIndex = 0 + 20 * (currentPage - 1);
    let lastIndex;
    if (firstIndex + 19 <= items.length - 1) {
      lastIndex = firstIndex + 19;
    } else {
      lastIndex = items.length - 1;
    }
    return items.slice(firstIndex, lastIndex + 1);
  };

  return (
    <Container>
      <h1 className="mb-3">Items</h1>
      <Form.Select value={selectedLocation} onChange={handleSelect} className="mb-3">
        <option value="all">All</option>
        <option value="Main Office">Main Office</option>
        <option value="Cavea Gallery">Cavea Gallery</option>
        <option value="Cavea Tbilisi Mall">Cavea Tbilisi Mall</option>
        <option value="Cavea East Point">Cavea East Point</option>
        <option value="Cavea City Mall">Cavea City Mall</option>
      </Form.Select>
      <Button onClick={() => navigate('/add')} className="mb-3">
        ADD ITEM
      </Button>
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
          {filterItems(items).map((item: Item) => (
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
      <Pagination currentPage={currentPage} totalPages={items.length/20} handlePagination={handlePagination}/>
    </Container>
    
  );
};

export default ProductsPage;
