// App component container

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import { getAdmin, getAllUsers } from '../actions/userActions';

const mapStateToProps = state => {
		return {
			allUsers: state.users.allUsers,
			admin: state.users.admin
		};
    },
    matchDispatchToProps = dispatch => {
        return bindActionCreators({
            getAdmin,
            getAllUsers
        }, dispatch);
    };

export default connect(mapStateToProps, matchDispatchToProps)(App);