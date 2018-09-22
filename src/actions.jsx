export const getTasks =(text)=> {
    return (dispatch) => {
        fetch('/data/data.json')
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(getTasksFromFile(data));
        }).catch((error)=>console.log(error));
    }
}

export const enter=(text)=>{
    return {type: 'ENTER', text}
}

export const filterByStatus=(status)=>{
    return {type: 'FILTER_BY_STATUS', status}
}

export const filterByPrioritet=(prioritet)=>{
    return {type: 'FILTER_BY_PRIORITET', prioritet}
}

export const sorting=(sort)=>{
    return {type: 'SORTING', sort}
}

export const getTaskDetail=(task)=>{
    return {type: 'GET_TASK_DETAIL', task}
}

export const saveChanges=(changes)=>{
    return {type: 'SAVE_CHANGES', changes}
}

export const returnToList=(text)=>{
    return {type: 'RETURN_TO_LIST', text}
}

export const getTasksFromFile=(data)=>{
    return {type: 'GET_TASKS_FROM_FILE', data}
}

export default {
    enter, 
    getTasks, 
    filterByStatus, 
    filterByPrioritet, 
    sorting, 
    getTaskDetail, 
    saveChanges, 
    returnToList, 
}