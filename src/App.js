import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
//引入组件
import Login from './components/Login'
import Home from './components/Home'
import Detail from './components/Detail'
import Hierarchy from './components/Hierarchy'
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux'
import store from './redux/index.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider  store = {store}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/hierarchy" component={Hierarchy} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
