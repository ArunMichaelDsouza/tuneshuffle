// Tuneshuffle datastore module

const constants = require('./constants'),
    uuid = require('uuid'),
    DataStore = require('nedb'),
    users = new DataStore({
        filename: `${constants.DB.DATA_DIR}/${constants.DB.COLLECTIONS.USER}`,
        autoload: true
    }),
    tracks = new DataStore({
        filename: `${constants.DB.DATA_DIR}/${constants.DB.COLLECTIONS.TRACK}`,
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
    },
    getAllUsers = () => {
        return new Promise((resolve, reject) => {
            users.find({ admin: false }, (err, doc) => {
                if (!err) {
                    return resolve(doc);
                }
                return reject(err);
            });
        });
    },
    getAllTracks = () => {
        return new Promise((resolve, reject) => {
            tracks.find({}, (err, doc) => {
                if (!err) {
                    return resolve(doc);
                }
                return reject(err);
            });
        });
    };

module.exports = {
    user: { getAdmin, setAdmin, getAllUsers },
    track: { getAllTracks }
};