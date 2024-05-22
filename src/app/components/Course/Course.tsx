"use client";
import { Card, CardBody, Carousel, Container, Image, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';
import TestForm from "./TestForm";

export default function Course({pdf, questinon}: any, any) {
    const [load, setLoad] = useState(false);
    const [content, setContent] = useState<string | null>(null);

    // useEffect(() => {
    //     if (pdf) {
    //         setContent(pdf)
    //     } else if (questinon) {
    //         setContent(questinon)
    //     };
    //     setLoad(true);
    // }, [pdf, questinon]);

    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="d-flex justify-content flex-wrap">
                                <div className="col-sm-2 col-md-2">
                                    <ListGroup>
                                        <ListGroup.Item disabled>Меню</ListGroup.Item>
                                        <ListGroup.Item onClick={() => setContent(pdf)}>
                                            <SiKnowledgebase size={20} style={{marginRight: '5px'}} />
                                            Теория
                                        </ListGroup.Item>
                                        <ListGroup.Item onClick={() => setContent(questinon)}>
                                            <MdOutlineWork size={20} style={{marginRight: '5px'}} />
                                            Практика
                                        </ListGroup.Item>
                                        
                                    </ListGroup>
                                   
                                </div>
                                {content && (
                                    <div className="col-8 mh-100 " style={{height: '70vh', marginLeft: '10px'}}>
                                        {pdf && content === pdf && <embed 
                                                        src={'/DCI.pdf'} 
                                                        width='120%'
                                                        height='100%'  
                                                        
                                                        >
                                                        </embed>}
                                        {questinon && content === questinon && <TestForm test={questinon}/>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
