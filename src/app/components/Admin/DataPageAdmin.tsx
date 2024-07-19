"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

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

export default function DataPageAdmin({ courseData, questData }: any, any) {
    const [load, setLoad] = useState(false);
    const [labs, setLabs] = useState([]);
    const [quest, setQuests] = useState([]);

    useEffect(() => {
        setLabs(courseData);
        setQuests(questData);
        setLoad(true);
    }, [courseData]);
    //let totalTest = quest.filter(lab => labs.idlabs === course.lab && lab.QuestionsCourseId ===3).length
    let total = quest.filter(lab => lab.id ===1)
    
    return (
        <>
            <div className="container">
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-between">
                        <div className="p-2 flex-grow-1 bd-highlight">
                            <h1 className="mb-4 text-3xl text-muted font-weight-bold">
                                Материалы лабораторной работы
                            </h1>
                          
                        </div>
                        
                    </div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                            <h4 className="mb-2 text-3xl text-muted font-weight-bold">
                                Теоретический материал
                            </h4>
                            <Form.Group style={{ width: '50%' }} className="mt-4">
                                <Form.Control type="file"></Form.Control>  
                            </Form.Group>
                    </div>
                    {!load && <h3 className="mb-4 text-3xl text-muted font-weight-bold text-center">Загрузка данных...</h3>}
                    <Table striped bordered hover>           
                        {load && labs.map((p: IState) => (
                            <tbody>        
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>
                                <Button variant="inline-primary">
                                        <FaRegTrashAlt
                                            size={20}
                                            style={{
                                                paddingBottom: "3px",
                                               
                                            }}
                                        />
                                    </Button>
                                </td>
                            </tr>
                            
                                </tbody>
                        ))}
                    </Table>
                    
                    <div className="p-2 flex-grow-1 bd-highlight">
                            <h4 className="mb-2 text-3xl text-muted font-weight-bold">
                                Тесты
                            </h4>
                            <Form.Group style={{ width: '50%' }} className="mt-4">
                                <Form.Control type="file"></Form.Control>  
                            </Form.Group>
                        </div>
                    <Table striped bordered hover>           
                        {load && total.map((p: any) => (
                            <tbody>        
                            <tr key={p.id}>
                                <td>{p.titleAnswer}</td>
                                <td>{p.name}</td>
                                <td></td>
                            </tr>
                            
                                </tbody>
                        ))}
                    </Table>

                </Card>
            </div>
        </>
    );
};