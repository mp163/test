import React from 'react';

const statusName=(status)=>{
        switch (status) {
            case '1':
                return 'Открыта';
                break;
        
            case '2':
                return 'В работе'
                break;
            
            case '3':
                return 'Отложена'
                break;

            case '4':
                return 'Закрыта'
                break;
                
            default:
                return 'Открыта'
                break;
        }
    }

const prioritetName=(prioritet)=>{
        switch (prioritet) {
            case '1':
                return 'Высокий'
                break;
        
            case '2':
                return 'Обычный'
                break;
            
            case '3':
                return 'Низкий'
                break;
            
            default:
                return 'Обычный'
                break;
        }
    }

class TableRows extends React.Component {
    constructor (props) {
        super(props)
    }

    render (){
        return (<tr id={this.props.task.id} >
            <td>{this.props.task.id}</td>
            <td>{this.props.task.title}</td>
            <td>{this.props.task.date}</td>
            <td>{statusName(this.props.task.status)}</td>
            <td>{prioritetName(this.props.task.prioritet)}</td>
        </tr>)
    }
}

export default TableRows;
export {statusName, prioritetName};