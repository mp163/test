import React from 'react'
import TableRows from './TableRows'
import styles from './css/tasklist.css'
import {UPDATE_INTERVAL} from './data/options'

class TasksList extends React.Component {
    constructor(props){
        super(props);
        this.sortBy=this.sortBy.bind(this);
        this.filterByStatus=this.filterByStatus.bind(this);
        this.filterByPrioritet=this.filterByPrioritet.bind(this);
        this.onClickTH=this.onClickTH.bind(this);
    }

    componentDidMount(){
        if ((!this.props.loaded)&&(this.props.ifEnter)){
            setInterval(()=>{this.props.getTasks(); console.log("111")}, UPDATE_INTERVAL*60000);
            
            this.props.getTasks();}
        
        if (!this.props.ifEnter) this.props.history.push('/');
        
    }

    sortBy(e){
        this.props.detailTask(e.target.parentNode.id);
        this.props.history.push(`/list/${e.target.parentNode.id}`);
    }
    filterByStatus(e){
        this.props.filterByStatus(e.target.value);
    }
    filterByPrioritet(e){
        this.props.filterByPrioritet(e.target.value);
    }

    onClickTH(e){
        this.props.sorting(e.target.getAttribute('data-name'));
    }

    render(){
        if (this.props.ifEnter)
            return (
                <div id='tasklist'>
                    <h1>Вы вошли как {this.props.user.name} {this.props.user.surename}</h1>
                    <span>Фильтровать задачи по </span>
                    <span>статусу: </span>
                    <select onChange={this.filterByStatus}>статусу:
                        <option key="0" value="0">Все</option>
                        <option key="1" value="1">Открытые</option>
                        <option key="2" value="2">В работе</option>
                        <option key="3" value="3">Отложенные</option>
                        <option key="4" value="4">Закрытые</option>
                    </select>
                    
                    <span> приоритету: </span>
                    <select onChange={this.filterByPrioritet}>
                        <option key="0" value="0">Все</option>
                        <option key="1" value="1">Высокий</option>
                        <option key="2" value="2">Обычный</option>
                        <option key="3" value="3">Низкий</option>
                    </select>
                    <table>
                        <caption>Список задач</caption>
                        <thead>
                        <tr>
                            <th data-name='id' onClick={this.onClickTH}>ID
                            <i className={(this.props.sortUp.id===1) ? "fa fa-sort-down" : ((this.props.sortUp.id===0) ? "fa fa-sort" : "fa fa-sort-up")} aria-hidden="true"></i>
                            </th>
                            <th data-name='title'>Задание</th>
                            <th data-name='date'>Дата</th>
                            <th data-name='status' onClick={this.onClickTH}>Статус
                            <i className={(this.props.sortUp.status===1) ? "fa fa-sort-down" : ((this.props.sortUp.status===0) ? "fa fa-sort" : "fa fa-sort-up")} aria-hidden="true"></i>
                            </th>
                            <th data-name='prioritet' onClick={this.onClickTH}>Приоритет
                            <i onClick={this.onClickTH} className={(this.props.sortUp.prioritet===1) ? "fa fa-sort-down" : ((this.props.sortUp.prioritet===0) ? "fa fa-sort" : "fa fa-sort-up")} aria-hidden="true"></i>
                            </th>
                        </tr> 
                        </thead> 
                        <tbody onClick={this.sortBy}>

                            {this.props.tasks.map((task)=>{return <TableRows task={task} key={task.id} />})}
                           
                        </tbody>
                    </table>
                    
                </div>
            )
            return <h1>Error</h1>
    }
}

export default TasksList;