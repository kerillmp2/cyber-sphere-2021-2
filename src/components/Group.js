import React from "react";
import Card from "react-bootstrap/cjs/Card";

//Img size: 600x400

export default class Group extends React.Component {
    render() {
        return (
            <div className="m-2 mb-3">
                <Card style={{width: '19vw'}} className="shadow-lg">
                    <Card.Img variant="top" src={this.props.image}/>
                    <Card.Body className="bg-post">
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}