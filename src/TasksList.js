import React from 'react'
import TableRows from './TableRows'
import styles from './css/tasklist.css'
import {UPDATE_INTERVAL} from './data/options'

class TasksList extends React.Component {
    constructor(props){
        super(props);

    }

    componentWillMount(){
        this.setState({
            sortUp: {id: 0, status: 0, prioritet: 0}
        });
    }

    componentDidMount(){
        if ((!this.props.loaded)&&(this.props.ifEnter)){
            setInterval(()=>this.props.getTasks(), UPDATE_INTERVAL*60000);
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
        let sortUpArray=this.state.sortUp;
           
        for (let item in sortUpArray) {
            if (item==e.target.getAttribute('data-name')){
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
        this.setState({sortUp: sortUpArray});

        this.props.sorting({name: e.target.getAttribute('data-name'), flag: this.state.sortUp[e.target.getAttribute('data-name')]});
    }

    render(){
        if (this.props.ifEnter)
            return (
                <div className='tasklist'>
                    <h1>Вы вошли как {this.props.user.name} {this.props.user.surename}</h1>
                    <span>Фильтровать задачи по </span>
                    <span>статусу: </span>
                    <select onChange={(e)=>this.filterByStatus(e)}>
                        <option key='0' value='0'>Все</option>
                        <option key='1' value='1'>Открытые</option>
                        <option key='2' value='2'>В работе</option>
                        <option key='3' value='3'>Отложенные</option>
                        <option key='4' value='4'>Закрытые</option>
                    </select>
                    
                    <span> по приоритету: </span>
                    <select onChange={(e)=>this.filterByPrioritet(e)}>
                        <option key='0' value='0'>Все</option>
                        <option key='1' value='1'>Высокий</option>
                        <option key='2' value='2'>Обычный</option>
                        <option key='3' value='3'>Низкий</option>
                    </select>
                    <table>
                        <caption>Список задач</caption>
                        <thead>
                        <tr>
                            <th data-name='id' onClick={(e)=>this.onClickTH(e)}>ID
                            <i className={(this.state.sortUp.id===1) ? 'fa fa-sort-down' : ((this.state.sortUp.id===0) ? 'fa fa-sort' : 'fa fa-sort-up')} aria-hidden='true'></i>
                            </th>
                            <th data-name='title'>Задание</th>
                            <th data-name='date'>Дата</th>
                            <th data-name='status' onClick={(e)=>this.onClickTH(e)}>Статус
                            <i className={(this.state.sortUp.status===1) ? 'fa fa-sort-down' : ((this.state.sortUp.status===0) ? 'fa fa-sort' : 'fa fa-sort-up')} aria-hidden='true'></i>
                            </th>
                            <th data-name='prioritet' onClick={(e)=>this.onClickTH(e)}>Приоритет
                            <i onClick={(e)=>this.onClickTH(e)} className={(this.state.sortUp.prioritet===1) ? 'fa fa-sort-down' : ((this.state.sortUp.prioritet===0) ? 'fa fa-sort' : 'fa fa-sort-up')} aria-hidden='true'></i>
                            </th>
                        </tr> 
                        </thead> 
                        <tbody onClick={(e)=>this.sortBy(e)}>
                            {this.props.tasks.map((task)=>{return <TableRows task={task} key={task.id} />})}
                        </tbody>
                    </table>
                </div>
            )
            return <h1>Error</h1>
    }
}

export default TasksList;