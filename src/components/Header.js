import React from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";

export default class Header extends React.Component {
    render() {

        return (<div className="bg-purple font-weight-bold">
            <Navbar variant="dark">
                <Navbar.Brand className="ml-3 p-2" href="/profile">КиберСфера</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="p-2" href="/profile">Моя страница</Nav.Link>
                    <Nav.Link className="p-2" href="/messages">Сообщения</Nav.Link>
                    <Nav.Link className="p-2" href="/subs">Группы</Nav.Link>
                    <Nav.Link className="p-2 ml-3" href="/answers">Отправить ответ</Nav.Link>
                </Nav>
            </Navbar>
        </div>)
    }
}