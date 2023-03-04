import { Sequelize, DataTypes } from 'sequelize';
import pool from '../database';

const sequelize = new Sequelize({
    dialect: 'postgres',
    dialectModule: require('pg'),
    pool: pool,
});

const Inventory = sequelize.define('Inventory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.ENUM({
            values: [
                'მთავარი ოფისი',
                'კავეა გალერია',
                'კავეა თბილისი მოლი',
                'კავეა ისთ ფოინთი',
                'კავეა სითი მოლი'
            ],

        }),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
});

export default Inventory;

