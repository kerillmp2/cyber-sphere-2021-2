import React from "react";
import Header from "../components/Header";
import Image from "react-bootstrap/cjs/Image";
import {Row, Col} from "react-bootstrap";
import Post from "../components/Post";
import Footer from "../components/Footer";

import avatarImage from "../img/avatar.jpg"
import post_1 from "../img/posts/post_1.jpg"
import post_2 from "../img/posts/post_2.jpg"
import post_run from "../img/posts/run.jpg"
import post_book from "../img/posts/book.jpeg"
import post_school from "../img/posts/school.jpg"
import post_book_2 from "../img/posts/book.jpg"
import post_plane from "../img/posts/plane.jpg"
import post_cake from "../img/posts/cake.jpg"
import post_popcorn from "../img/posts/popcorn.jpg"
import post_tulen from "../img/posts/tulen.jpg"
import post_cookie from "../img/posts/cookie.jpg"
import post_square from "../img/posts/black_square.jpg"
import post_algebra from "../img/posts/algebra.jpg"
import post_summer from "../img/posts/summer.jpg"

export default class ProfilePage extends React.Component {
    render() {

        let posts = (<div>
            <Post date="30/11/2021" innerText='Моя сестра в эту субботу участвует в олимпиаде по'
                  secondRow='кибербезопасности! Пожелаем ей удачи!'/>

            <Post date="01/11/2021" innerText='Нас опять перевели на дистанционку...'
                  secondRow='#КовидУходи' image={post_1}/>

            <Post date="18/10/2021" innerText='А какой сегодня завтрак у вас?'
                  secondRow='#ЗОЖ' image={post_2}/>

            <Post date="13/10/2021" innerText='Минутка интересных фактов! Пару слов можно записать'
                  secondRow='множеством разных способов:'
                  thirdRow='РазДва, раз-два, раз_два, РАЗДВА, РаЗдВа, раздва...'
                  fouthRow='Если придумаете новый способ - пишите в комментарии!'/>

            <Post date="04/10/2021" innerText='Хоть уже и прохладно, я продолжаю бегать по утрам!'
                  secondRow='#ЗОЖ' image={post_run}/>

            <Post date="26/09/2021" innerText='Все важные фразы должны быть тихими,'
                  secondRow='Все фото с родными всегда не резкие'
                  thirdRow='Самые странные люди всегда великие,'
                  fouthRow='А причины для счастья всегда не веские'
                  fifthRow='(С) Ок Мельникова'
                  image={post_book}/>

            <Post date="01/09/2021" innerText='Если честно, за лето я уже немного соскучилась'
                  secondRow='по школе. Встретимся на уроках!'
                   image={post_school}/>

            <Post date="31/08/2021" innerText='Ставьте лайк, если тоже прочитали весь список'
                  secondRow='литературы на лето!'
                  thirdRow='Мне больше всего понравилась пьеса "Ревизор"'
                  fouthRow='Николая Васильевича Гоголя.'
                  image={post_book_2}/>

            <Post date="16/08/2021" innerText='После отдыха возвращаюсь в родной Ижевск!'
                  secondRow='Готова со всеми встретиться и поделиться'
                  thirdRow='впечатлениями о поездке)'/>

            <Post date="4/08/2021" innerText='Друзья, меня несколько дней не будет,'
                  secondRow='улетаю с семьей в Европу!'
                  thirdRow='Не теряйте'
                  image={post_plane}/>

            <Post date="15/07/2021" innerText='С днём рождения меня!'
                  secondRow='Спасибо всем огромное за поздравления!'
                  image={post_cake}/>

            <Post date="11/07/2021" innerText='Так давно не была в кино... Сходили с братом на'
                  secondRow='фильм "Далёкие миры Атлантиды", и нам обоим'
                  thirdRow='очень понравилось!'
                  fouthRow='Кстати, какой ваш любимый вкус попкорна?'
                  fifthRow='Мой определённо сырный)'
                  image={post_popcorn}/>

            <Post date="22/06/2021" innerText='Я прошла тест "Какой вы житель океана?"'
                  secondRow='И знаете что? Я тюлень!'
                  thirdRow='Меня так в детстве называла мама! Совпадение?'
                  image={post_tulen}/>

            <Post date="20/06/2021" innerText='Зачем пытаться понять искусство?'
                  secondRow='Вы же не пытаетесь понять, о чем поет птица.'
                  thirdRow='(С) Пабло Пикассо'
                  image={post_square}/>

            <Post date="14/06/2021" innerText='У всех же есть любимое число?'
                  secondRow='Моё, например, 16'
                  thirdRow='Даже не знаю почему'/>

            <Post date="06/06/2021" innerText='Обязательно послушайте новый альбом группы'
                  secondRow='"Печенье с шоколадом"!'
                  thirdRow='Я их преданный фанат)'
                  image={post_cookie}/>

            <Post date="01/06/2021" innerText='Лето? Каникулы? Море?'
                  secondRow='Да! Да! И ещё раз да!'
                  image={post_summer}/>

            <Post date="26/05/2021" innerText='Не думала, что под конец учебного года'
                  secondRow='мне понравится алгебра!'
                  image={post_algebra}/>
        </div>);

        return (
            <div className="bg-peach">
                <Header class={this.props.class}/>
                <div className="shadow pr-4 pl-4 pb-2">
                        <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image className="ml-2 mt-4" height="300px" src={avatarImage} rounded/>
                            <div style={{fontSize: 20}} className="font-weight-bold m-2 text-center">Дарья Горная</div>
                        </Col>
                    </Row>
                </div>
                <Row className="justify-content-md-center mt-4">
                    <Col md="auto">
                        <h2 className="text-center mb-3">Последние записи Дарьи:</h2>
                        {posts}
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}