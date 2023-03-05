import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

const deleteInventoryItem = async (req: Request, res: Response) => {
    const inventoryID = req.params.inventoryID;

    try {
        const inventory = await Inventory.findByPk(inventoryID);
        if (!inventory) {
            return res.status(404).json({
                message: `Inventory with ID ${inventoryID} not found.`,
            });
        }

        await inventory.destroy();
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'An internal server error occurred while deleting the inventory.',
        });
    }
};


export default deleteInventoryItem;