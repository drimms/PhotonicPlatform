import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store/StoreProvider";
import { writeCourse, IWriteCourse } from "@/app/lib/componentReq";
import type { NextApiRequest, NextApiResponse } from 'next'

const AddButtonCourse = (props: any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        props.onHide();
    };

    const route = useRouter();

    const { adminStore } = useStore();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adminStore.setAdmin(true);
        const formData = new FormData(event.currentTarget);
        const course = formData.get('course') as string;
        const description = formData.get('description') as string;
        try {
            await writeCourse({course: course, description: description});
        }
        catch {

        }
        handleClose();
        route.push("/adminPage");
    };
    

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            onHide={handleClose}
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Header>Добавить дисциплину</Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Название</Form.Label>
                        <Form.Control autoFocus type="text" name="course" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Описание дисциплины</Form.Label>
                        <Form.Control type="text" name="description" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" variant="danger">
                        Добавить
                    </Button>
                    <Button onClick={handleClose}>Закрыть</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddButtonCourse;
