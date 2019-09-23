import React from 'react'
import { Popover,DatePicker , message, Row, Col } from 'antd'
import classNames from 'classnames'
import Child from '../container/Child.jsx'
import '../css/home.css'
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'Huang Jian',
			status: 'Left'
		}
	}
	componentDidMount() {
		// console.log(this.props)
		if(this.props.location.search){
			message.info('登录成功');
			console.log(this.props.location.search);
			var obj = {};
			//获取url的参数部分
			var params = this.props.location.search.substr(1);
			//[^&=]+ 表示不含&或=的连续字符，加上()就是提取对应字符串
			params.replace(/([^&=]+)=([^&=]*)/gi,function(rs,$1,$2){
			//decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
				obj[$1] =  decodeURIComponent($2);
			});
			console.log(obj);
		}
	}
	componentWillUnmount() {

	}
	clickFromchild = (receiveParams) => {
		console.log(receiveParams);
	}
	selectBtn = (status) => {
		this.setState({
			status: status,
		})
	}
	onChange = (date, dateString) => {
		console.log(date);
		console.log(dateString);
	}
	render() {
		const content = (
			<div>
				<p>17600719115</p>
				<p>jhuang@abcft.com</p>
			</div>
		)
		return (
			<div className='home-container'>
				<div className='home-header'>
					<div className='home-header-toggle'>
						<div className={classNames('home-header-toggle-btn', { active: this.state.status === 'Left' })} onClick={() => { this.selectBtn('Left') }}>Left</div>
						<div className={classNames('home-header-toggle-btn', { active: this.state.status === 'Right' })} onClick={() => { this.selectBtn('Right') }}>Right</div>
					</div>
					<div className='home-header-popver'>
						<Popover content={content} title="用户详情信息如下 :" trigger='hover'>
							<div className='home-header-popver-headimg'></div>
							<div className='home-header-popver-email'>jhuang@abcft.com</div>
						</Popover>
					</div>
				</div>
				<Row gutter={20} align="middle" type="flex" justify="center">
					<Col span={8} xs={12} md={12} lg={8} xl={8} className='home-container-list'>
						<div className='home-container-list-div' onClick={() => { this.props.history.push('hierarchy') }}>Left</div>
					</Col>
					<Col span={8} xs={12} md={12} lg={8} xl={8} className='home-container-list'>
						<div className='home-container-list-div' onClick={() => { this.props.history.push(`/detail/${555}`) }}>Center</div>
					</Col>
					<Col span={8} xs={12} md={12} lg={8} xl={8} className='home-container-list'>
						<div className='home-container-list-div' onClick={() => { this.props.history.push('/dashboard') }}>Right</div>
					</Col>
				</Row>
				<Row gutter={20} align="middle" type="flex" justify="center" style={{marginTop:'20px'}}>
				 <DatePicker onChange={this.onChange} />
				</Row>
				<Child text={this.state.text} sendParent={(params) => { this.clickFromchild(params) }} />
			</div>
		)
	}

}
export default Home