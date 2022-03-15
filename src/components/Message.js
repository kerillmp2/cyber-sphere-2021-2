import React from "react";


export default class Message extends React.Component{
    render() {
        if(this.props.me) {
            return (
                <div style={{borderRadius: "10px", border:"0.5px solid black"}} className="shadow-sm w-50 float-right m-2 bg-peach">
                    <p className="m-2 text-secondary">{this.props.date}</p>
                    <p className="m-2">{this.props.text}</p>
                </div>
            );
        } else{
            return (
                <div style={{borderRadius: "10px", border:"0.5px solid black"}} className="w-50 shadow-sm float-left m-2 bg-peach">
                    <p className="m-2 text-secondary">{this.props.date}</p>
                    <p className="m-2">{this.props.text}</p>
                </div>
            );
        }
    }
}