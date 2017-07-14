// Tuneshuffle datastore module

const constants = require('./constants'),
    DataStore = require('nedb'),
    users = new DataStore({
        filename: `${constants.DB.DATA_DIR}/${constants.DB.COLLECTIONS.USER}`,
        autoload: true
    });

users.insert({ id: 1 }, function(err, newDoc) {
    console.log(newDoc);
});

