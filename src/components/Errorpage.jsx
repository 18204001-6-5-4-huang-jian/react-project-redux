import React from 'react'
import img from '../images/404.png'
export default class Errorpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="404-container">
              <img src={img} alt="" />
            </div>
        )
    }
}
