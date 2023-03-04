import { Sequelize, DataTypes } from 'sequelize';


const sequelize = new Sequelize({
    database: 'inventory',
    username: 'postgres',
    password: 'mypas123',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Inventory = sequelize.define('Inventory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.ENUM({
            values: [
                'Main Office',
                'Cavea Gallery',
                'Cavea Tbilisi Mall',
                'Cavea East Point',
                'Cavea City Mall'
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

