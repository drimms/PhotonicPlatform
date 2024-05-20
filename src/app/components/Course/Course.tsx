"use client";
import { Card, CardBody, Carousel, Container, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';

export default function Course() {
    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="d-flex justify-content flex-wrap">
                                <div className="col-sm-2 col-md-2">
                                    <div className="row row-cols-5 row-cols-lg-2 mb-3 p-0">
                                        <div className="col-1">
                                            <SiKnowledgebase size={30} />
                                        </div>
                                        <div className="col-3 m-0 align-middle">
                                            <h5 className="mb-4 text-3xl text-muted font-weight-bold">
                                                Теория
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row row-cols-5 row-cols-lg-2 mb-3 p-0">
                                        <div className="col-1">
                                            <MdOutlineWork size={30} />
                                        </div>
                                        <div className="col-3 m-0">
                                            <h5 className="mb-4 text-3xl text-muted font-weight-bold">
                                                Практика
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row row-cols-5 row-cols-lg-2 mb-3 p-0">
                                        <div className="col-1">
                                            <SiTestcafe size={30} />
                                        </div>
                                        <div className="col-3 m-0">
                                            <h5 className="mb-4 text-3xl text-muted font-weight-bold">
                                                Тесты
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8 mh-100" style={{height: '70vh'}}>
                                    <embed 
                                    src={'/DCI.pdf'} 
                                    width='120%'
                                    height='100%'  
                                    
                                    >
                                    </embed>
                                    {/* <p className="text-base !leading-relaxed text-muted md:text-lg">
                                        Давно выяснено, что при оценке дизайна и
                                        композиции читаемый текст мешает
                                        сосредоточиться. Lorem Ipsum используют
                                        потому, что тот обеспечивает более или
                                        менее стандартное заполнение шаблона, а
                                        также реальное распределение букв и
                                        пробелов в абзацах, которое не
                                        получается при простой дубликации "Здесь
                                        ваш текст.. Здесь ваш текст.. Здесь ваш
                                        текст.." Многие программы электронной
                                        вёрстки и редакторы HTML используют
                                        Lorem Ipsum в качестве текста по
                                        умолчанию, так что поиск по ключевым
                                        словам "lorem ipsum" сразу показывает,
                                        как много веб-страниц всё ещё дожидаются
                                        своего настоящего рождения.
                                    </p>

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
                            </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
