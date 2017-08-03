// Tuneshuffle datastore module

const constants = require('./constants'),
    uuid = require('uuid'),
    DataStore = require('nedb'),
    users = new DataStore({
        filename: `${constants.DB.DATA_DIR}/${constants.DB.COLLECTIONS.USER}`,
        autoload: true
    }),
    getAdmin = () => {
        return new Promise((resolve, reject) => {
            users.find({ admin: true }, (err, doc) => {
                if (!err) {
                    return resolve(doc);
                }
                return reject(err);
            });
        });
    },
    setAdmin = name => {
        const doc = { name, id: uuid.v4(), admin: true };

        return new Promise((resolve, reject) => {
            users.insert(doc, (err, doc) => {
                if (!err) {
                    return resolve(doc);
                }
                return reject(err);
            });
        });
    };

module.exports = {
    user: {
        getAdmin: getAdmin
    }
};