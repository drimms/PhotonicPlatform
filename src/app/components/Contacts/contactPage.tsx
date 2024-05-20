import { Card, CardBody, Carousel, Container, Image } from "react-bootstrap";
import { IoMailSharp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded ">
                    <div className="d-flex justify-content-end mx-3 px-3 mt-5">
                        <div>
                            <p className="text-base !leading-relaxed text-muted md:text-lg">
                                Давно выяснено, что при оценке дизайна и
                                композиции читаемый текст мешает
                                сосредоточиться. Lorem Ipsum используют потому,
                                что тот обеспечивает более или менее стандартное
                                заполнение шаблона, а также реальное
                                распределение букв и пробелов в абзацах, которое
                                не получается при простой дубликации "Здесь ваш
                                текст.. Здесь ваш текст.. Здесь ваш текст.."
                                Многие программы электронной вёрстки и редакторы
                                HTML используют Lorem Ipsum в качестве текста по
                                умолчанию, так что поиск по ключевым словам
                                "lorem ipsum" сразу показывает, как много
                                веб-страниц всё ещё дожидаются своего настоящего
                                рождения. Давно выяснено, что при оценке дизайна
                                и композиции читаемый текст мешает
                                сосредоточиться. Lorem Ipsum используют потому,
                                что тот обеспечивает более или менее стандартное
                                заполнение шаблона, а также реальное
                                распределение букв и пробелов в абзацах, которое
                                не получается при простой дубликации "Здесь ваш
                                текст.. Здесь ваш текст.. Здесь ваш текст.."
                                Многие программы электронной вёрстки и редакторы
                                HTML используют Lorem Ipsum в качестве текста по
                                умолчанию, так что поиск по ключевым словам
                                "lorem ipsum" сразу показывает, как много
                                веб-страниц всё ещё дожидаются своего настоящего
                                рождения.
                            </p>
                        </div>
                        <div className="ml-auto mr-auto col-lg-7 col-xl-6">
                            <div className="row justify-content-end">
                                <div className="col-md-3">
                                    <Image
                                        width="100%"
                                        className="shadow rounded"
                                        src="contact.jpg"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <h4 className="mb-2 text-3xl text-muted font-weight-bold">
                                        USER
                                    </h4>
                                    <h6 className="text-muted font-bold mb-3 leading-5">
                                        Full-stack developer
                                    </h6>

                                    <div>
                                    <p className="text-base !leading-relaxed text-muted md:text-lg mb-1">
                                        <FaTelegram /> umbbertoz
                                    </p>
                                    <p className="text-base !leading-relaxed text-muted md:text-lg">
                                        <IoMailSharp /> user@mail.ru
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
