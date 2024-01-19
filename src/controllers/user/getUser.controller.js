const userModel = require('../../models/user.model');

async function getUser(userId) {
    const user = await userModel.findOne({ userId: userId });

    if (!user) {
        return {
            message: 'USER_NOT_FOUND'
        }
    } else {
        return {
            id: user.userId,
            docId: user.docId,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            isActive: user.isActive
        }
    }
}

module.exports = getUser;