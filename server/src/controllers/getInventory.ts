import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

const getInventory = async (req: Request, res: Response) => {
    try {
        const selectedLocation = req.query.location;

        if (!selectedLocation) {
            const inventoryItems = await Inventory.findAll();
            return res.json(inventoryItems);
        }

        const inventoryItems = await Inventory.findAll({
            where: {
                location: selectedLocation
            }
        });

        return res.json(inventoryItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


export default getInventory;