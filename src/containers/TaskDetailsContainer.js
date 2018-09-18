import { connect } from 'react-redux'
import actions from '../actions'
import TaskDetails from '../TaskDetails'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {user: state.user, 
      tasks: state.tasks,
      ifEnter: state.ifEnter,
      taskDetail: state.taskDetail
  };
     
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      saveChanges: (changes)=>{
        dispatch(actions.saveChanges(changes));
      },
      returnToList: (text)=>{
        dispatch(actions.returnToList(text));
      }
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskDetails));