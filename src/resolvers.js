const User = require('./models/User')
const Address = require('./models/Address')

module.exports = {
    hello: () => 'Hello pessoal',
    users: async function () {
        const users = await User.findAll({
            include: [
                {
                    model: Address,
                    as: 'address',
                    attributes: ['street', 'number']
                }
            ]
        })
        return users
    },

    userById: async function (args) {
        const { id } = args
        const user = await User.findOne({
            where: { id },
            include: [
                {
                    model: Address,
                    as: 'address',
                    attributes: ['street', 'number']
                }
            ]
        })
        return user
    },

    addUser: async function ({ input }) {

        const { name, address: { street, number } } = input


        try {
            const user = await User.create({ name })

            const newAddress = await Address.create({
                street,
                number,
                user_id: user.id
            })

            user.address = newAddress
            return user
        } catch (error) {
            console.log(error)
        }


    }
}