import React from 'react'
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
// 引入action
import { setPageTitle,setInfoList } from '../redux/actions.js'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    // console.log(this.props)
    let { setPageTitle,setInfoList } = this.props;
    // 触发setPageTitle 
    setPageTitle('Huang Jian')
    let array = [
       { name:'jhuang'}
    ]
    setInfoList(array)
  }

  render () {
    // 从props中解构store
    let { pageTitle, infoList } = this.props;
    // console.log(this.props)
    const lis = infoList.map((item,index) => {
      return   <li key={index}>{item.name}</li>
   })
    // 使用store
    return (
      <div>
        <h1>{pageTitle}</h1>
        {
            infoList.length > 0 &&
                <ul>
                    {
                       lis
                    }
                </ul>
        }
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
    setInfoList(data){
      dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)