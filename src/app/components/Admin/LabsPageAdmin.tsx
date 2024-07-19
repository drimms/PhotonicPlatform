"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Table, Spinner } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import AddButton from "../ModalForm/AddButtonLab";
import AddButtonLab from "../ModalForm/AddButtonLab";
import { useStore } from "@/app/store/StoreProvider";

interface IState {
    id: number,
    name: string,
    course: string,
    createdAt: any,
    updatedAt: any
}

interface IProps {
[key: string]: IState
}

export default function LabsPageAdmin({ courseData, params }: any, string) {
    const [load, setLoad] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [labs, setLabs] = useState([]);
    
    const { modalStore } = useStore();
    
    useEffect(() => {
        setLabs(courseData);
        setLoad(true);
    }, [courseData]);

    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <h1 className="mb-4 text-3xl text-muted font-weight-bold">
                                Лабораторные работы
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
                                    <th></th>
                                    
                                    </tr>
                                </thead>
                        {load && labs.map((p: IState) => (
                            <tbody>        
                            <tr key={p.id}>      
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>
                                <Button variant="inline-primary" href={`/adminPageLabs/${params}/${p.id}`}>
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
                                    <Button variant="inline-primary" onClick={() => modalStore.setDelete(true)}>
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
                    <AddButtonLab
                        course={}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
        </>
    );
};