import React from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
class Children extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            value: 1
        }
    }
    componentDidMount() {
        //console.log(this.props.text);
    }
    componentWillReceiveProps(nextProps){
        //componentWillReceiveProps方法中第一个参数代表即将传入的新的Props
        console.log(nextProps)

    }
    onChange = (e) => {
        console.log('value:', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <div style={{ fontSize: '20px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer',marginBottom:'10px' }} onClick={()=>{this.props.sendParent(this.state.text)}}>{this.state.text}</div>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
                {this.state.value === 2 && <div style={{marginTop:'20px'}}>B</div>}
            </div>

        )
    }
}
export default Children