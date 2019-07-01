import React from 'react';
import { message } from 'antd'
import md5 from 'md5'
// import  '../less/login.less'
import '../css/login.css'
import { userLogin } from '../request/api.js'
import { observer, inject } from 'mobx-react'
import classNames from 'classnames'
@inject('listStore')
@observer
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Welcome',
            email:'',
            password:''
        }
    }
    componentDidMount() {
        window.addEventListener('keyup', this.enterKey)
        const { listStore } = this.props;
        // console.log(listStore.lang);
        listStore.changeLang('en');
        console.log(listStore.lang);
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.enterKey)
    }
    enterKey = (e) => {
        if (e.keyCode === 13) {
            this.candleLogin();
        }
    }
    candleLogin = async () => {
        const res = await userLogin({
            email: 'jhuang@abcft.com',
            password: md5(123456)
        })
        if (!res) {
            message.info('请求失败')
        } else if (res.data.success) {
            this.props.history.push({
                pathname: '/home',
                search:'?name=jhuang&age=18'
            });
        } else if (!res.data.success) {
            message.info(`对不起,${res.data.message}`);
        }

    }
    handleInputChange = (e) =>{
        const target = e.target;
        this.setState({
            [target.name]:target.value
        })
    }
    render() {
        const { name } = this.state;
        const { listStore } = this.props;
        return (
            <div className="login-background" >
                <div className="login-container" >
                    <div className={classNames({
                        'class-one': true,
                        'class-two': true,
                        'login-title': true
                    })} > 
                    {listStore.lang === 'zh_CN' ? '欢迎' : name}
                     </div>
                    <div className="inputs">
                    <input type="text" value={this.state.email} name="email" placeholder="账 号" autoComplete="off" onChange={this.handleInputChange}/>
                    <input type="password" value={this.state.password} name="password" placeholder="密 码" autoComplete="off" onChange={this.handleInputChange}/>
                    </div>
                </div>
            </div>
        )
    }
}