// Tuneshuffle app constants

const constants = {
    APP_TITLE: 'Tuneshuffle',
    APP_SUBTITLE: 'Web-based localised music player. Start a server locally, ask your friends to join in, share and stream music together!',
    PORT: 8000,
    DB: {
        DATA_DIR: './data',
        COLLECTIONS: {
            USER: '/users'
        }
    },
    API: {
    	USER: '/user'
    }
};

module.exports = constants;