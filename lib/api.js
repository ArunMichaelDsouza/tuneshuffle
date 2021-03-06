// Tuneshuffle api module

const API = require('./constants').API,
    DB = require('./dataStore'),
    apiResponse = (success, message, data) => Object.assign({}, { success, message, data });

module.exports = app => {

    // User api endpoints
    app.route(`${API.USER}/admin`)
        .get((req, res) => {
            return DB.user.getAdmin().then(user => {
                if (!user.length) {
                    return res.status(200).send(apiResponse(0, 'No admin found.', null));
                }
                return res.status(200).send(apiResponse(1, 'Admin found successfully.', user[0]));
            }).catch(err => {
                return res.status(500).send(apiResponse(0, 'Some error occurred.', null));
            });
        })
        .post((req, res) => {
            const { name } = req.body;

            return DB.user.setAdmin(name).then(data => {
                return res.status(200).send(apiResponse(1, 'Admin created successfully.', data));
            }).catch(err => {
                return res.status(500).send(apiResponse(0, 'Some error occurred.', null));
            });
        });
    app.route(`${API.USER}/:id`)
        .get((req, res) => {
            const { params } = req;
            
            if(params.id === 'all') {
                return DB.user.getAllUsers().then(data => {
                    return res.status(200).send(apiResponse(1, 'All users fetched successfully.', data));  
                }).catch(err => {
                    return res.status(500).send(apiResponse(0, 'Some error occurred.', null));
                });
            }
        });

    // Tracks api endpoints
    app.route(`${API.TRACK}/:id`)
        .get((req, res) => {
            const { params } = req;
            
            if(params.id === 'all') {
                return DB.track.getAllTracks().then(data => {
                    return res.status(200).send(apiResponse(1, 'All tracks fetched successfully.', data));  
                }).catch(err => {
                    return res.status(500).send(apiResponse(0, 'Some error occurred.', null));
                });
            }
        });
};