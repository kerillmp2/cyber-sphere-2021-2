import React from "react";
import Header from "../components/Header";
import Group from "../components/Group";
import CardDeck from "react-bootstrap/CardGroup"
import {Col, Row} from "react-bootstrap";
import Footer from "../components/Footer";

import math from "../img/groups/math.jpg";
import cyber from "../img/groups/cyber.jpg";
import kote from "../img/groups/kote.jpg"
import world from "../img/groups/world.jpg"
import cookie from "../img/groups/cookie.jpg"
import atlant from "../img/groups/atlant.jpg"
import cosmos from "../img/groups/cosmos.jpg"
import fun from "../img/groups/fun.jpg"

export default class SubsPage extends React.Component {
    render() {
        let cardDeck = (<CardDeck>
            <Group name="SimpleMath" description="Математика простым языком!" image={math}/>
            <Group name="КиберСфера" description="Турнир по компьютерной грамотности" image={cyber}/>
            <Group name="Уютные коты" description="Картинки с котиками и не только!" image={kote}/>
            <Group name="The World" description="Самые свежие мировые новости" image={world}/>
            <Group name='Атлантида' description="Теории и обсуждения затерянной цивилизации" image={atlant}/>
            <Group name='Космические знания' description="Интересные рассуждения о космосе" image={cosmos}/>
            <Group name='Fun facts' description="Весёлые факты обо всём на свете" image={fun}/>
            <Group name='"Печенье с шоколадом"' description="Фанатам музыкальной группы сюда!" image={cookie}/>
        </CardDeck>);

        return (
            <div className="bg-peach">
                <Header class={this.props.class}/>
                <Row className="justify-content-md-center mt-3 ml-5 mr-5">
                    <Col md="auto">
                        {cardDeck}
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}