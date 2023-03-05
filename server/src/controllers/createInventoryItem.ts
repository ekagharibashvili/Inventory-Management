import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

const createInventoryItem = async (req: Request, res: Response) => {
    const mandatoryFields = ['name', 'price', 'location'];
    const missingFields = mandatoryFields.filter((field) => !req.body[field]);
  
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `The following fields are missing: ${missingFields.join(', ')}`,
      });
    }
    try {
      const inventory = await Inventory.create(req.body);
      return res.status(201).json(inventory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'An internal server error occurred while creating the inventory.',
      });
    }
};


export default createInventoryItem;