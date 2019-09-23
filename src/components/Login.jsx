import React from 'react';
import { message } from 'antd'
import md5 from 'md5'
// import  '../less/login.less'
import '../css/login.css'
import { userLogin } from '../request/api.js'
import classNames from 'classnames'
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
// 引入action
import { setPageTitle, setInfoList } from '../store/actions.js'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    componentDidMount() {
        window.addEventListener('keyup', this.enterKey)
        let { setPageTitle, setInfoList } = this.props;
        // 触发setPageTitle
        setPageTitle('Welcome')
        console.log(this.props)
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
            email:this.state.email,
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
        // 从props中解构store
         let { pageTitle, infoList } = this.props;
        return (
            <div className="login-background" >
                <div className="login-container" >
                        <div className={classNames({
                            'class-one': true,
                            'class-two': true,
                            'login-title': true
                        })} > 
                        </div>
                     <h4>{pageTitle}</h4>
                    <div className="inputs">
                    <input type="text" value={this.state.email} name="email" placeholder="账 号" autoComplete="off" onChange={this.handleInputChange}/>
                    <input type="password" value={this.state.password} name="password" placeholder="密 码" autoComplete="off" onChange={this.handleInputChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    return {
      pageTitle: state.pageTitle,
      infoList: state.infoList
    }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      setPageTitle (data) {
          // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
          dispatch(setPageTitle(data))
          // 执行setPageTitle会返回一个函数
          // 这正是redux-thunk的所用之处:异步action
          // 上行代码相当于
          /*dispatch((dispatch, getState) => {
              dispatch({ type: 'SET_PAGE_TITLE', data: data })
          )*/
      },
      setInfoList (data) {
          dispatch(setInfoList(data))
      }
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Login)