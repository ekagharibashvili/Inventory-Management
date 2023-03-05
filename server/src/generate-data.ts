import * as faker from 'faker';
import  Inventory  from './models/inventory';

// Define a function to generate random inventory data
function generateRandomInventory(): any {
  const name = faker.commerce.productName();
  const location = faker.random.arrayElement([
    'Main Office',
    'Cavea Gallery',
    'Cavea Tbilisi Mall',
    'Cavea East Point',
    'Cavea City Mall',
  ]);
  const price = Math.round(faker.commerce.price() * 100);
  return { name, location, price };
}

// Define a function to insert multiple inventory records
async function insertInventories(count: number): Promise<void> {
  for (let i = 0; i < count; i++) {
    const inventory = generateRandomInventory();
    await Inventory.create(inventory);
  }
}


insertInventories(200000);
