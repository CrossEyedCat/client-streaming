import React, {useContext} from "react";
import { Card } from "../../components/Card";
import { CardWrapper } from "../../components/CardWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider";
import { Txt } from "../../components/Txt";
import "./style.css";
import {Form} from "../../components/Form";
import {GlobalStateContext} from "../../states/GlobalStateContext";
import {Box} from "../../components/Box";
import {FormLogIn} from "../../components/FormLogIn";
import {FormRecover} from "../../components/FormRecover";
import {SearchHeader} from "../../components/SearchHeader";
import ChannelList from "../../components/ChannelList/ChannelList";

export const Home = () => {
    const { isLoggedIn, toggleLoginState, isLogIn, isRec, isSearche} = useContext(GlobalStateContext);
    const user = localStorage.getItem("user");
    return (
        <div className="screen">
            <div className="div-3">
                {!isSearche && <Header className="header-instance" />}
                {isSearche && <SearchHeader className="header-instance" />}
                {!isSearche &&  !user &&<div>
                <div className="element-hero">
                    <div className="frame-4">
                        <div className="txt-wrapper">
                            <div className="txt-3">
                                <div className="text-wrapper-10">
                                    Загляните внутрь операционной, где бы вы ни находились
                                </div>
                            </div>
                        </div>

                        <div className="flexcontainer-wrapper">
                            <div className="flexcontainer">
                                  <span className="span">
                                    Сегодня медицине стал доступен новый уровень взаимодействия
                                    благодаря live-трансляциям «живой хирургии». Операции
                                    проводятся в прямом эфире, позволяя медицинским специалистам
                                    и участникам задавать вопросы в режиме видеоконференции.{" "}
                                  </span>

                                  <span className="span">
                                    Такой подход не только повышает квалификацию врачей,
                                    но и включает получение онлайн данных от прикроватных
                                    медицинских устройств, что обеспечивает круглосуточный
                                    мониторинг пациентов.&nbsp;&nbsp;
                                  </span>

                                  <span className="span">
                                    Отправляйте прямую трансляцию из операционной на любой ПК,
                                    смартфон или планшет без необходимости использования
                                    дополнительного оборудования. Интеллектуальная цифровая
                                    платформа визуализации MOST STREAM помогает вам общаться
                                    без задержек во время операций.
                                  </span>
                            </div>
                        </div>
                    </div>

                    <div className="overlap-group">
                        <div className="frame-5">
                            <div className="head-3">
                                <p className="text-wrapper-11">
                                    Трансляция операций в формате «живой хирургии»
                                </p>
                            </div>

                            <img
                                className="img-2"
                                alt="Img"
                                src="https://c.animaapp.com/KIcIFpDL/img/img-1.png"
                            />
                        </div>

                        <div className="frame-6">
                            <Txt className="txt-instance" />
                            <Txt
                                className="txt-instance"
                                text="Используйте потоковую передачу в реальном времени для проведения медицинского обучения, совместной работы и консультаций."
                            />
                            <div className="btn-2" onClick={toggleLoginState}>
                                <div className="text-wrapper-12" >Войти</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="element-popular">
                    <div className="text-wrapper-13">Популярные операции</div>

                    <div className="frame-71">
                        <div className="frame-8">
                            <Card className="card-instance" frameClassName="design-component-instance-node"/>
                            <Card
                                className="card-instance"
                                frameClassName="design-component-instance-node"
                                image="https://c.animaapp.com/KIcIFpDL/img/image-2@2x.png"
                                text="100"
                                text1="Давайте разбираться: солнечных дней всё меньше"
                            />
                            <Card
                                className="card-3"
                                frameClassName="design-component-instance-node"
                                headClassName="card-2"
                                image="https://c.animaapp.com/KIcIFpDL/img/image-3@2x.png"
                                text="1200"
                                text1="Все чаще появляется информация о том, что семантический разбор внешних противодействий определил дальнейшее развитие"
                            />
                        </div>

                        <div className="frame-9">
                            <Card
                                className="card-instance"
                                frameClassName="design-component-instance-node"
                                image="https://c.animaapp.com/KIcIFpDL/img/image-4@2x.png"
                                text="1200"
                                text1="Спикеры палаты госдумы негодуют"
                            />
                            <Card
                                frameClassName="design-component-instance-node"
                                image="https://c.animaapp.com/KIcIFpDL/img/image-5@2x.png"
                                text="1200"
                                text1="Давайте разбираться: солнечных дней всё меньше"
                            />
                            <Card
                                frameClassName="design-component-instance-node"
                                image="https://c.animaapp.com/KIcIFpDL/img/image-6@2x.png"
                                text="1200"
                                text1="Граница обучения кадров расставила все точки над i"
                            />
                        </div>
                    </div>
                </div>

                <div className="element-pluses">
                    <div className="text-wrapper-13">Преимущества сервиса</div>

                    <div className="frame-71">
                        <CardWrapper className="card-4"
                                     headClassName="card-5"
                                     text = "Лучшее обучение для большего количества студентов"
                        logo = "https://c.animaapp.com/KIcIFpDL/img/logo-4.svg"
                        text1 = "Обучайте хирургическим приёмам, не заходя в операционную. Прямые трансляции операций позволяют вам показывать все, что видит хирург, от эндоскопических каналов до показателей жизнедеятельности и изображений из историй болезни пациентов"/>
                        <CardWrapper
                            className="card-4"
                            headClassName="card-5"
                            logo="https://c.animaapp.com/KIcIFpDL/img/logo-5.svg"
                            text="Удалённый прокторинг без задержек"
                            text1="Создайте программу прокторинга, разработанную для подключённого здравоохранения. Убедитесь, что наблюдающие врачи не ограничены своим физическим местоположением, и помогите им контролировать операции из любой точки мира"
                        />
                        <CardWrapper
                            className="card-4"
                            headClassName="card-5"
                            logo="https://c.animaapp.com/KIcIFpDL/img/logo-6.svg"
                            text="Безопасная передача данных"
                            text1="Покажите коллегам-учёным, что происходит в операционной в режиме реального времени. Благодаря протоколам безопасности больницы вы можете легко подключить свою операционную к любому месту с подключением к Интернету"
                        />
                    </div>
                </div>

                <div className="element-cases">
                    <div className="text-wrapper-13">Кейсы</div>

                    <div className="frame-10">
                        <div className="frame-11">
                            <DivWrapper
                                className="card-6"
                                text="Организация трансляции видеосигнала из шоу-рума компании, который находится в Санкт-Петербурге, на ПК в Москве"
                            />
                            <DivWrapper text="Эксперты утверждают, что сложившаяся структура организации расставила все точки над i" />
                        </div>

                        <Slider className="slider-instance" />
                    </div>
                </div>
                </div>}
                {(isSearche || user)  && <div className="frame-7000">
                    <ChannelList/>
                    </div>}
                <Footer className="footer-instance" />

            </div>
            {isLoggedIn && <Box />}
            {isLogIn && <Box />}
            {isRec&& <Box />}
            {isLoggedIn && <Form className="regist" />}
            {isLogIn && <FormLogIn  />}
            {isRec && <FormRecover/>}

        </div>
    );
};
