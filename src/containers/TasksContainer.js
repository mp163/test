import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import actions from '../actions'
import { store } from '../index'
import TasksList from '../TasksList'

const filteredTasks=(tasks, status, prioritet)=>{
    if ((status=='0')&&(prioritet=='0')) {
      return tasks;
    } else {
      if (status=='0') {
        return tasks.filter((task)=>{return task.prioritet==prioritet});
      } else {
        if (prioritet=='0') {
          return tasks.filter((task)=>{return task.status==status});
          } else {
            return tasks.filter((task)=>{return task.status==status}).filter((fstask)=>{return fstask.prioritet==prioritet});
          }
        }
    }

}

const mapStateToProps = (state) => {
    return {user: state.user, 
    tasks: filteredTasks(state.tasks, state.filterStatus, state.filterPrioritet), 
    ifEnter: state.ifEnter, 
    filterStatus: state.filterStatus,
    filterPrioritet: state.filterPrioritet,
    sortColumn: state.sortColumn,
    sortUp: state.sortUp,
    loaded: state.loaded,
    prevTasks: state.prevTasks
  };
     
  }
  const mapDispatchToProps = {
      onBtnClick: actions.enter,
      sortId: actions.sortByID,
      filterByStatus: actions.filterByStatus,
      filterByPrioritet: actions.filterByPrioritet,
      sorting: actions.sorting,
      detailTask: actions.getTaskDetail,
      getTasks: actions.getTasks
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksList));