import React from "react";
import Footer from "../components/Footer";

export default class EndPage extends React.Component{
    render() {
        return(
            <div className="h-100 bg-peach">
                <div className="bg-peach p-4 text-center">
                   <h2 className="mt-4">Ваше время подошло к концу!</h2>
                    <h3 className="mt-3">Спасибо за участие!</h3>
                </div>
                <Footer />
            </div>
        );
    }
}