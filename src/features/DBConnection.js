import SimpleRouter from "./SimpleRouter";
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';
import React from "react";

export default function DBConnection(props) {
    async function createAnswer(command, cl, answer, time, correct) {
        let timeTotal = new Date().toString();
        if (command === null || cl === null || answer === null || time === null || correct === null) {
            return
        }
        await DataStore.save(new Todo({
            "command": command,
            "cl": cl,
            "answer": answer,
            "time": time.toString(),
            "timeTotal": timeTotal,
            "correct": correct
        }))
    }

    const handleSend = (command, cl, answer, time, correct) => {
        createAnswer(command, cl, answer, time, correct).then(r => {
            console.log("Answer " + answer + " sent")
            console.log(correct)
        });
    }

    return (
        <div>
            <SimpleRouter onSendAnswer={handleSend}/>
        </div>
    );
}