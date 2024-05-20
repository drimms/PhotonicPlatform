"use client";
import { Card, CardBody, Carousel, Container, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Course({ title }) {
    const [load, setLoad] = useState(false);
    const [labs, setLabs] = useState([]);

    useEffect(() => {
        setLabs([
            { id: "1", title: "Первый" },
            { id: "2", title: "Второй" },
            { id: "3", title: "Третий" },
            { id: "4", title: "Четвертый" },
            { id: "5", title: "Пятый" },
            { id: "6", title: "Шестой" },
            { id: "7", title: "Седьмой" },
            { id: "8", title: "Восбмой" },
            { id: "8", title: "Восбмой" },
        ]);
        setLoad(true);
    }, []);

    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <div className="flex justify-content flex-wrap">
                                <h1 className="mb-4 text-3xl text-muted font-weight-bold">
                                    BLock 1
                                </h1>
                                <div>
                                    {load && labs.map((p) => 
                                    <Link key={p.id} href={`/labsPage/{${p.title}/{${p.id}`}>                                    
                                    <p className="text-base !leading-relaxed text-muted md:text-lg">
                                        {p.title}
                                    </p>
                                    </Link>
                                    )   }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
