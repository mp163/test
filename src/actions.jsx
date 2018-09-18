export function getTasks(text) {
    return (dispatch) => {
        fetch('/data/data.json')
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(getTasksFromFile(data));
        
        }).catch(function(error){console.log(error)});
    }
}

export function enter(text){
    return { type: 'ENTER', text}
}

export function filterByStatus(status){
    return {type: "FILTER_BY_STATUS", status}
}

export function filterByPrioritet(prioritet){
    return {type: "FILTER_BY_PRIORITET", prioritet}
}

export function sorting(sort){
    return {type: "SORTING", sort}
}

export function getTaskDetail(task){
    return {type: "GET_TASK_DETAIL", task}
}

export function saveChanges(changes){
    return {type: "SAVE_CHANGES", changes}
}

export function returnToList(text){
    return {type: "RETURN_TO_LIST", text}
}

export function getTasksFromFile (data){
    return {type: "GET_TASKS_FROM_FILE", data}
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