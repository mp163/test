import React from 'react';
import { statusName, prioritetName } from './TableRows'
import styles from './css/taskdetail.css'

class TaskDetails extends React.Component {
    constructor (props){
        super(props)
    }

    componentWillMount(){
        if (!this.props.ifEnter) this.props.history.push('/');
    }

    setSelectStatus (status){
        if (status===this.props.taskDetail.status) return true;
    }

    setSelectPrioritet (prioritet) {
        if (prioritet===this.props.taskDetail.prioritet) {
            return true;
        }
    }

    onChangeStatus (e){
        let changes={id: this.props.taskDetail.id}
        if (e.target.id==='selectStatus') changes.status=e.target.value
            else changes.prioritet=e.target.value
        this.props.saveChanges(changes);
    }

    onClickHandler (e){
        this.props.history.push('/list');
        this.props.returnToList();
    }

    render (){
        if (this.props.ifEnter)
        return (
            <div className='details'>
                <h1>{this.props.taskDetail.title}</h1>
                <h2>Описание: </h2><p>{this.props.taskDetail.discription}</p>
                <h2>Время выполнения:</h2><p>{this.props.taskDetail.timeToDo}</p>
                <h2>Запланированное время:</h2><p>{this.props.taskDetail.timePlan}</p>
                <h2>Статус выполнения задачи: </h2>
                    <select id='selectStatus' onChange={(e)=>this.onChangeStatus(e)}>
                        <option key='1' value='1' selected={this.setSelectStatus('1')}>Открытая</option>
                        <option key='2' value='2' selected={this.setSelectStatus('2')}>В работе</option>
                        <option key='3' value='3' selected={this.setSelectStatus('3')}>Отложенная</option>
                        <option key='4' value='4' selected={this.setSelectStatus('4')}>Закрытая</option>
                    </select>
                <h2>Дата:</h2><p>{this.props.taskDetail.date}</p>
                <h2>Приоритет выполнения задачи: </h2>
                    <select id='selectPrioritet' onChange={(e)=>this.onChangeStatus(e)}>
                        <option key='1' value='1' selected={this.setSelectPrioritet('1')}>Высокий</option>
                        <option key='2' value='2' selected={this.setSelectPrioritet('2')}>Обычный</option>
                        <option key='3' value='3' selected={this.setSelectPrioritet('3')}>Низкий</option>
                    </select><br/>
                <button onClick={(e)=>this.onClickHandler(e)}>Сохранить изменения и вернуться к списку задач</button>
            </div>
        )
        return <h1></h1>

    }
}

export default TaskDetails;