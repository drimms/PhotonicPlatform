"use client";
import { Button, Card, CardBody, Carousel, Container, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";


export default function LabsPage() {
    const [load, setLoad] = useState(false);
    const [labs, setLabs] = useState([]);

    useEffect(() => {
        setLabs([
            { id: "1", title: "Первый лист" },
            { id: "2", title: "Второй лист" },
            { id: "3", title: "Третий лист" },
            { id: "4", title: "Четвертый лист" },
            { id: "5", title: "Пятый  лист" },
            { id: "6", title: "Шестой лист" },
            { id: "7", title: "Седьмой лист" },
            { id: "8", title: "Восбмой лист" },
            { id: "9", title: "Восбмой лист" },
        ]);
        setLoad(true);
    }, []);

    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="d-flex justify-content flex-wrap">
                                {load &&
                                    labs.map((p) => (                                        
                                        <Link key={p.id} href={`/labsPage/{${p.title}`}>
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
                                                    
                                                        {p.title}
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
