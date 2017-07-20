// Welcome component container

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome.jsx';
import { getAdmin } from '../actions/userActions';

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		getAdmin
	}, dispatch);
};

export default connect(() => {}, matchDispatchToProps)(Welcome);