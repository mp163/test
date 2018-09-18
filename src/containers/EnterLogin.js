import { connect } from 'react-redux';
import actions from '../actions';
import Login from '../Login';


const mapStateToProps = (state) => {
    return {...state}
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onLogIn: (text)=>{
        dispatch(actions.enter(text));
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Login);