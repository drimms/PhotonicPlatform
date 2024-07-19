"use client";
import { Card, CardBody, Carousel, Container, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

interface IState {
    id: number,
    name: string,
    course: string,
    createdAt: any,
    updatedAt: any
};

interface IProps {
    [key: string]: IState
}

export default function Course({ labs, params }: IProps, string) {
    const [load, setLoad] = useState(false);
    const [lab, setLabs] = useState([]);

    useEffect(() => {
        setLabs(labs);
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
                                    Лабораторые работы
                                </h1>
                                <div>
                                    {load && lab.map((p: IState) => 
                                    <Link key={p.id} href={`/labsPage/${params}/${p.name}`}>                                    
                                    <p className="text-base !leading-relaxed text-muted md:text-lg">
                                        {p.name}
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
