const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init(
            {
                street: Sequelize.STRING,
                number: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );


        return this;
    }

    static associate(models) {
        
        this.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'user_id',
        });
    }

}

module.exports = Address;