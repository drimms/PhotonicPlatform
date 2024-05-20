"use client";
import Link from "next/link";
import { Card, CardBody, Carousel, Container } from "react-bootstrap";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default function IntroPage() {
    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <h1 className="mb-4 text-3xl text-muted font-weight-bold">
                                BLock 1
                            </h1>
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
                                рождения.
                            </p>
                            
                        </div>
                        
                    </div>
                </Card>
            </div>
        </>
    );
}
