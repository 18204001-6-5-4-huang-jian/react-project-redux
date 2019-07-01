import React from 'react'
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
export default class Dashboard extends React.Component {
   constructor(props){
      super(props)
      this.state = {
        checkedList:[],
        indeterminate: true,
        checkAll: false,
        plainOptions:['huangjian','xiaoming','xiaomei','haha']
      }
   }
   componentDidMount(){

   }
   onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < this.state.plainOptions.length),
      checkAll: checkedList.length === this.state.plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? this.state.plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
   render(){
       return(
           <div className="dashboard-container">
              <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={this.state.plainOptions} value={this.state.checkedList} onChange={this.onChange} />
           </div>
       )
   }
}
