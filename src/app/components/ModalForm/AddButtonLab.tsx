import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store/StoreProvider";
import { writeLab } from "@/app/lib/componentReq";

const AddButtonLab = (props: any) => {
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
        const course = props.course;
        const name = formData.get('name') as string;
        try {
            await writeLab({name: name, course: course});
        }
        catch (e){
            return e
        }
        handleClose();
        route.push(`/adminPage/${course}`);
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
                <Modal.Header>Добавить</Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Название</Form.Label>
                        <Form.Control autoFocus type="text" name="name" />
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

export default AddButtonLab;
