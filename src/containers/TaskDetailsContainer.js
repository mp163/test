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

const mapDispatchToProps = {
      saveChanges: actions.saveChanges,
      returnToList: actions.returnToList
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskDetails));