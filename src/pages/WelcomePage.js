import React from "react";
import {useForm} from "react-hook-form";
import "../styles/welcomePage.css"
import Footer from "../components/Footer";

export default function WelcomePage(props) {

    const {register, handleSubmit, errors} = useForm();

    const registerSubmit = (values) => {
        let now = Date.now().toString()
        localStorage.setItem("name", values.name);
        localStorage.setItem("class", values.class);
        localStorage.setItem("start", now);
        console.log(values);
        props.onEnter(values.name, values.class, now);
    }

    return (
        <div className="h-100 bg-peach">
            <div className="bg-peach p-4">
                <div className="bg-peach p-4 text-center">
                    <h2 className="mt-4">Добро пожаловать на дистанционный тур!</h2>
                </div>
                <form className="my-form" onSubmit={handleSubmit(registerSubmit)}>
                    <div>
                        <label>Название команды:</label>
                        <input name="name" ref={register({required: true, maxLength: 128})}/>
                        <div className="error">
                            {errors.name && errors.name.type === "required" && (<p>Введите название команды!</p>)}
                            {errors.name && errors.name.type === "maxLength" && (
                                <p>Название команды не должно превышать 128 символов!</p>)}
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="mr-3">Класс:</label>
                        <select name="class" ref={register({required: true})}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <div className="error">
                            {errors.class && errors.class.type === "required" && (<p>Выберите класс!</p>)}
                        </div>

                        <div>
                            <button type="submit" className="bg-purple w-100">НАЧАТЬ</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}