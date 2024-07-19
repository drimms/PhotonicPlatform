"use client";
import React, { FormEventHandler, useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import AddButtonCourse from "../ModalForm/AddButtonCourse";

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

export default function CoursePageAdmin({ courseData }: any) {
    const [modalShow, setModalShow] = React.useState(false);
    const [load, setLoad] = useState(false);
    const [course, setCourse] = useState([]);
    
    useEffect(() => {
        setCourse(courseData);
        setLoad(true);
    }, [courseData]);

    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <h1 className="mb-4 text-3xl text-muted font-weight-bold">
                                Дисциплины
                            </h1>
                            
                            <Button onClick={() => setModalShow(true)}>Добавить</Button>
                        </div>
                        
                    </div>
                    {!load && <h3 className="mb-4 text-3xl text-muted font-weight-bold text-center">Загрузка данных...</h3>}
                    <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Дисциплина</th>
                                    <th>Описание</th>
                                    <th></th>
                                    </tr>
                                </thead>
                        {load && course.map((p: IState) => (
                            <tbody>
                                
                            <tr>
                             
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.descrition}</td>
                                <td>
                                <Button variant="inline-primary" href={`/adminPageLabs/${p.id}`}>
                                        <FaEye
                                            size={20}
                                            style={{
                                                paddingBottom: "3px",
                                                marginRight: "5px",
                                            }}
                                        />
                                    </Button>
                                    <Button variant="inline-primary">
                                        <FaRegEdit
                                            size={20}
                                            style={{
                                                paddingBottom: "3px",
                                                marginRight: "5px",
                                            }}
                                        />
                                    </Button>
                                    <Button variant="inline-primary">
                                        <FaRegTrashAlt
                                            size={20}
                                            style={{
                                                paddingBottom: "3px",
                                                marginRight: "5px",
                                            }}
                                        />
                                    </Button>
                                </td>
                            </tr>
                            
                                </tbody>
                        ))}
                        </Table>
                </Card>
            </div>
            <>
                    <AddButtonCourse
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        
                    />
                </>
        </>
    );
};