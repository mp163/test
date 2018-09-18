import users from './data/users'

const initialState={
    users,
    tasks: [],
    prevTasks: [],
    ifEnter: false,
    filterStatus: "0",
    filterPrioritet: "0",
    user: {},
    loaded: false,
    sortUp: {id: 0, title: 0, date: 0, status: 0, prioritet: 0}
}

let prevState;
let newState;
export function reducer(state=initialState, action){
    
    switch (action.type){
        case "GET_TASKS_FROM_FILE":
            return {...state, loaded: true, tasks: action.data.filter((task)=>{
                return task.who==state.user.uid})}

        case "ENTER":
            return {...state, ifEnter: true, 
                user: state.users.filter((user)=>{
                    return user.uid==action.text
                })[0]
            }

        case "SORT_BY_ID":
            newState=state.tasks.slice().sort((a, b)=>{
                return b['id']-a['id']});
            return {...state, tasks: newState};

        case "FILTER_BY_STATUS":
            return {...state, filterStatus: action.status};

        case "FILTER_BY_PRIORITET":
            return {...state, filterPrioritet: action.prioritet};

        case "SORTING":
            let sortUpArray=state.sortUp;
           
            for (let item in sortUpArray) {
                if (item==action.sort){
                    switch (sortUpArray[item]) {
                    case 0:
                        sortUpArray[item]=-1;
                        break;
                    case 1:
                        sortUpArray[item]=-1;
                        break;
                    case -1:
                        sortUpArray[item]=1;
                        break;
                    }
                } else sortUpArray[item]=0;
            };

            newState=state.tasks.slice().sort((a, b)=>{
                return (state.sortUp[action.sort]==-1) ? a[action.sort]-b[action.sort] : b[action.sort]-a[action.sort]
                });
           
            return {...state, tasks: newState, sortUp: sortUpArray};

        case "GET_TASK_DETAIL":
            let taskDetails;
            prevState=state.tasks;
            state.prevTasks=state.tasks;
            
            state.tasks.map((task)=>{
                if (task.id==action.task) taskDetails=task;
            });
            return {...state, tasks: state.tasks, taskDetail: taskDetails, filterPrioritet: "0", filterStatus: "0"};

        case "SAVE_CHANGES":
            let newTask;
            if (state.taskDetail.id==action.changes.id) {
                if (action.changes.status==undefined) newTask={...state.taskDetail, prioritet: action.changes.prioritet}
                    else newTask={...state.taskDetail, status: action.changes.status}
            }

            return {...state, taskDetail: newTask};

        case "RETURN_TO_LIST":
            
            newState=prevState.filter((task)=>{
                return task.who==state.user.uid})

            newState=newState.filter((task)=>{
                return task.id!==state.taskDetail.id
            })
            newState.push(state.taskDetail);
                       
            return {...state, tasks: newState};
        
        default:
            return {...state};
    }
}

export default reducer;