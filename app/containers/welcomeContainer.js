// Welcome component container

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome.jsx';
import { setAdmin } from '../actions/userActions';

const mapStateToProps = state => {
		console.log(state.users.admin);
		return {
			admin: state.users.admin
		};
    },
    matchDispatchToProps = dispatch => {
        return bindActionCreators({
            setAdmin
        }, dispatch);
    };

export default connect(mapStateToProps, matchDispatchToProps)(Welcome);