import React from 'react'
import { Button } from 'antd'
class Hierachy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Hierachy',
            list: [
                { name: 'jhuang' },
                { name: 'xiaoming' }
            ],
            num:2
        }
    }
    componentDidMount() {
        //console.log(this.props.match.url);
    }
    render() {
        const listTab = this.state.list.map((item, index) => {
            return <Button key={index} type="primary" style={{ margin: '10px' }}>{item.name}</Button>
        })

        return (
            <div className='hierachy-container'>
                <div style={{ fontSize: '22px', color: 'red' }}>{this.state.text}</div>
                {/* {this.state.text === 'Hierachy' && listTab} */}
                {/* {listTab} */}
                {this.state.num === 1?listTab:this.state.num === 2?
                <Button  type="primary" style={{ margin: '10px' }}>hhh</Button>:
                <Button  type="primary" style={{ margin: '10px' }}>huang</Button>}
            </div >
        )
    }
}
export default Hierachy