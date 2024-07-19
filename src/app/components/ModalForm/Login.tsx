import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store/StoreProvider";

const Login = (props: any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        props.onHide();
    };

    const route = useRouter();

    const { adminStore } = useStore();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adminStore.setAdmin(true);
        handleClose();
        route.push("/adminPage");
    };

    return (
        <Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            onHide={handleClose}
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control autoFocus type="text" name="username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="text" name="password" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" variant="danger">
                        Войти
                    </Button>
                    <Button onClick={handleClose}>Закрыть</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default Login;
