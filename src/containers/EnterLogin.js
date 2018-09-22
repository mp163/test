import { connect } from 'react-redux'
import actions from '../actions'
import Login from '../Login'


const mapStateToProps = (state) => {
    return {...state}
  }

 const mapDispatchToProps = {
    onLogIn: actions.enter
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);