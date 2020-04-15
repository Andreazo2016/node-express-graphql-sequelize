const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );


        return this;
    }

    static associate(models) {
        
        this.hasOne(models.Address, {
            as: 'address',
            foreignKey:'user_id'
        });
    }
}

module.exports = User;