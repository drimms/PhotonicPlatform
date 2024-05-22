"use client";
import { Button, Card, CardBody, Carousel, Container, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

interface IState {
        id: number,
        title: string,
        descrition: string,
        createdAt: any,
        updatedAt: any
}

interface IProps {
    [key: string]: IState
}

export default function LabsPage({ labsData } : IProps) {
    const [load, setLoad] = useState(false);
    const [labs, setLabs] = useState([]);
    
    useEffect(() => {
        setLabs(labsData);
        setLoad(true);
    }, [labsData]);

    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="d-flex justify-content flex-wrap">
                                {load &&
                                    labs.map((p: IState) => (                                        
                                        <Link key={p.id} href={`/labsPage/${p.id}`}>
                                            <Card
                                                style={{ width: "13rem" }}
                                                className="m-3"
                                            >
                                                <Image
                                                    width="100%"
                                                    className="shadow rounded"
                                                    src="iconlabs.png"
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        {p.title}
                                                    </Card.Title>
                                                    <Card.Text>
                                                    
                                                        {p.descrition}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
