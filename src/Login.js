import React from 'react'
import users from './data/users'
import styles from './css/login.css'


class Login extends React.Component{
    constructor(props){
        super(props);
    }
    logIn(){
        let enterUser=document.getElementById('log').value;
        let enterPassword=document.getElementById('pass').value;
        let uncorrectPassword=true;
        users.map((user)=>{
            if ((user.login==enterUser)&&(user.pass==enterPassword)){
                this.props.onLogIn(user.uid);
                this.props.history.push('/list');
                uncorrectPassword=false;
            }
        });
        if (uncorrectPassword) document.getElementsByTagName('span')[0].className='errorLogin';
    }

    render(){
        return(
            <div id='login'>
                <h1>Авторизуйтесь</h1>
                <label>Логин: </label><input type='text' id='log' /><br/>
                <label>Пароль: </label><input type='password' id='pass' /><br/>
                <span className='errorSpan'>Неверный логин или пароль</span>
                <button onClick={()=>this.logIn()}>Войти</button>
            </div>
        )
    }
}

export default Login;