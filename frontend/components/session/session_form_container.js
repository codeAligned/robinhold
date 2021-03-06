import { connect } from 'react-redux';

import { login, signup, userInfo} from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    userInfo: userInfo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
