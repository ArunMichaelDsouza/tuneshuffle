// Tuneshuffle app constants

const PORT = 8000,
    constants = {
        APP_TITLE: 'Tuneshuffle',
        APP_SUBTITLE: 'Web-based localised music player. Start a server locally, ask your friends to join in, share and stream music together!',
        PORT,
        DB: {
            DATA_DIR: './data',
            COLLECTIONS: {
                USER: '/users'
            }
        },
        API: {
            ENDPOINT: `http://localhost:${PORT}`,
            USER: '/user'
        },
        ACTIONS: {
            INIT: 'INIT',
            USER: {
                GET_ADMIN: 'GET_ADMIN',
                SET_ADMIN: 'SET_ADMIN'
            }
        }
    };

module.exports = constants;