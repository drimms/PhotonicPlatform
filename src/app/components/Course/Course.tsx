"use client";
import { Badge, Card, CardBody, Carousel, Container, Image, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';
import TestForm from "./TestForm";
import { useStore } from "@/app/store/StoreProvider";
import LabPageDesc from "../Description/LabPageDesc";
import { useParams } from "next/navigation";

interface IContent {
    path: string
}

export default function Course({pdf, questinon}: any, any) {
    const [load, setLoad] = useState(false);
    const [content, setContent] = useState<IContent>([]);
    const title = useParams();
    const { labStore } = useStore();

    useEffect(() => {
        labStore.setTheory(pdf);
        labStore.setQuest(questinon);
        // if (pdf) {
        //     
        //     setContent(pdf)
        // } else if (questinon) {
        //     
        //     console.log(questinon, '---')
        //     setContent(questinon)
        // };
        setLoad(true);
    }, [pdf, questinon]);
console.log(labStore.theory)
    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="d-flex justify-content flex-wrap">
                                <div className="col-sm-2 col-md-2">
                                    <ListGroup as="ul">
                                        <ListGroup.Item disabled>Меню</ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                            <div >
                                                <SiKnowledgebase size={20} style={{marginRight: '5px'}} />
                                                Теория
                                            </div>
                                            <Badge bg="primary" pill>
                                                {load && labStore.theory.length}                                
                                            </Badge>
                                        </ListGroup.Item>
                                        {load && labStore.theory.map((p, i) => (
                                                <ListGroup.Item key={i} as="li" onClick={() => {
                                                    setContent(pdf[i])
                                                }} >{p.name}</ListGroup.Item>
                                            ))}
                                        <ListGroup.Item 
                                            className="d-flex justify-content-between align-items-start list-group-item"
                                            onClick={() => setContent(questinon)}>
                                            <div>
                                                <MdOutlineWork size={20} style={{marginRight: '5px'}} />
                                                Практика
                                            </div>
                                            <Badge bg="primary" pill>
                                                {load && labStore.question.length}                                
                                            </Badge>
                                        </ListGroup.Item>
                                        {load && labStore.question.map((p) => (
                                                <ListGroup.Item as="li" onClick={() => setContent(pdf)} >
                                                    {p.name}
                                                </ListGroup.Item>
                                            ))}
                                    </ListGroup>
                                   
                                </div>
                                {content.length == 0 && (
                                    <div className="col-9 mh-100 " style={{height: '70vh', marginLeft: '30px'}}>
                                        <LabPageDesc title={decodeURI(title.id)}/>
                                    </div>
                                )}
                                {content && (
                                    <div className="col-8 mh-100 " style={{height: '70vh', marginLeft: '10px'}}>
                                        {pdf && content === content && <embed 
                                                        src={`${content.path}`}
                                                        width='120%'
                                                        height='100%'  
                                                        
                                                        >
                                                        </embed>}
                                        {questinon && content === questinon && <TestForm test={questinon}/>}
                                    </div>
                                )
                            }
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
