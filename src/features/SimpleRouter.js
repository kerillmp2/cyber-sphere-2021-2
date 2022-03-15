import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../components/Header";
import ProfilePage from "../pages/ProfilePage";
import MessagesPage from "../pages/MessagesPage";
import SubsPage from "../pages/SubsPage";
import WelcomePage from "../pages/WelcomePage";
import Footer from "../components/Footer";
import AnswerPage from "../pages/AnswerPage";
import EndPage from "../pages/EndPage";

export default class SimpleRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("name"),
            class: localStorage.getItem("class"),
            start: localStorage.getItem("start"),
            end: true,
            isTimeOK: true,
        }
    }

    handleUpdate = (name, c, st) => {
        this.setState({
            name: name,
            class: c,
            start: st
        })
    }

    handleSendAnswer = (answer, correct) => {
        let command = localStorage.getItem("name");
        let cl = localStorage.getItem("class");
        let start = localStorage.getItem("start");

        let isTimeOK = this.checkTime(parseInt(start));

        this.setState({
            isTimeOK: isTimeOK
        })

        if (isTimeOK) {
            this.handleSend(command, cl, answer, Date.now() - parseInt(start), correct);
        }
    }

    handleSend = (command, cl, ans, start, correct) => {
        this.props.onSendAnswer(command, cl, ans, start, correct);
    }

    checkTime = (start) => {
        let now = Date.now()
        return now - start <= 1000 * 60 * 60;
    }

    render() {

        if (this.state.isTimeOK === false) {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <EndPage/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            )
        }

        if (localStorage.getItem("name") === null ||
            localStorage.getItem("class") === null ||
            localStorage.getItem("start") === null) {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<WelcomePage onEnter={this.handleUpdate}/>}/>
                    </Routes>
                </BrowserRouter>
            )
        }

        let msg = <Route path="/messages" element={<MessagesPage class={this.state.class}/>}/>

        return (
            <BrowserRouter>
                <div className="h-100">
                    <Routes>
                        <Route path="/subs" element={<SubsPage class={this.state.class}/>}/>

                        {msg}

                        <Route path="/profile" element={<ProfilePage class={this.state.class}/>}/>

                        <Route path="/answers" element={<AnswerPage class={this.state.class}
                                                                    onSendAnswer={this.handleSendAnswer}/>}/>


                        <Route path="/" element={<div className="bg-peach h-100">
                            <Header class={this.state.class}/>
                            <Footer/>
                        </div>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}