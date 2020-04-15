const Sequelize = require('sequelize');


const User = require('../models/User');
const Address = require('../models/Address');
const configDatabase = require('../config/database');

const models = [User, Address];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(configDatabase);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }

}

module.exports = new Database();