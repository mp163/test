import users from './data/users'

const initialState={
    users,
    tasks: [],
    prevTasks: [],
    ifEnter: false,
    filterStatus: '0',
    filterPrioritet: '0',
    user: {},
    loaded: false
}

const reducer=(state=initialState, action)=>{
    switch (action.type){
        case 'GET_TASKS_FROM_FILE':
            return {...state, loaded: true, tasks: action.data.filter((task)=>task.who==state.user.uid)}

        case 'ENTER':
            return {...state, ifEnter: true, 
                user: state.users.filter((user)=>user.uid==action.text)[0]
            }

        case 'FILTER_BY_STATUS':
            return {...state, filterStatus: action.status};

        case 'FILTER_BY_PRIORITET':
            return {...state, filterPrioritet: action.prioritet};

        case 'SORTING':
            return {...state, 
                tasks: state.tasks.slice().sort((a, b)=>(action.sort.flag==-1) ? a[action.sort.name]-b[action.sort.name] : b[action.sort.name]-a[action.sort.name])
                };

        case 'GET_TASK_DETAIL':
            state.prevTasks=state.tasks;
            return {...state, 
                tasks: state.tasks, 
                taskDetail: state.tasks.filter((task)=>task.id==action.task)[0], 
                filterPrioritet: '0', 
                filterStatus: '0'};

        case 'SAVE_CHANGES':
            let newTask;
            if (state.taskDetail.id==action.changes.id) {
                if (action.changes.status==undefined) newTask={...state.taskDetail, prioritet: action.changes.prioritet}
                    else newTask={...state.taskDetail, status: action.changes.status}
            }

            return {...state, taskDetail: newTask};

        case 'RETURN_TO_LIST':
            return {...state, tasks: state.prevTasks
                                    .filter((task)=>task.who==state.user.uid)
                                    .filter((task)=>task.id!==state.taskDetail.id)
                                    .concat(state.taskDetail)};
        
        default:
            return {...state};
    }
}

export default reducer;