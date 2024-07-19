    "use client";
    import Link from "next/link";
    import React from "react";
    import {
        Button,
        Image,
    } from "react-bootstrap";
    import "react-bootstrap/dist/react-bootstrap";
    import { AiOutlineHome } from "react-icons/ai";
    import { ImLab } from "react-icons/im";
    import { IoMdLogIn } from "react-icons/io";
    import { MdOutlineContactless } from "react-icons/md";
    import { RiAdminLine } from "react-icons/ri";
    import "./../../globals.css";
    import "bootstrap/dist/css/bootstrap.min.css";
    import ThemeSwitch from "../ThemeSwitch";
    import Login from "../ModalForm/Login";
    import { useStore } from "@/app/store/StoreProvider";
    const Header = () => {
        const [modalShow, setModalShow] = React.useState(false);
        const { adminStore } = useStore();

        return (
            <>
                <div className="container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="flex w-full items-center justify-between mb-4 mt-4">
                            <div className="d-flex shadow-sm w-full items-center justify-content-between p-2 rounded border border-[.5px] border-body-color/50 bg-white px-6 py-4 ">
                                <div className="w-60 max-w-full px-4 xl:mr-12">
                                    <Image
                                        alt="logo"
                                        width={140}
                                        height={30}
                                        src="/next.svg"
                                    />
                                </div>

                                <div className="d-flex w-full items-center justify-between px-4">
                                    <div>
                                        <Link
                                            href={"/"}
                                            style={{
                                                paddingBottom: "3px",
                                                marginRight: "5px",
                                            }}
                                        >
                                            <Button variant="outline-primary">
                                                <AiOutlineHome
                                                    size={20}
                                                    style={{
                                                        paddingBottom: "3px",
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                Главная
                                            </Button>
                                        </Link>

                                        <Link
                                            href={"/labsPage"}
                                            style={{
                                                paddingBottom: "3px",
                                                marginRight: "5px",
                                            }}
                                        >
                                            <Button variant="outline-primary">
                                                <ImLab
                                                    size={20}
                                                    style={{
                                                        paddingBottom: "3px",
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                Лабораторные работы
                                            </Button>
                                        </Link>

                                        {adminStore.adminPage && <Link
                                            href={"/adminPage"}
                                            style={{
                                                paddingBottom: "3px",
                                                marginRight: "5px",
                                            }}
                                        >
                                            <Button variant="outline-primary">
                                                <RiAdminLine
                                                    size={20}
                                                    style={{
                                                        paddingBottom: "3px",
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                Управление
                                            </Button>
                                        </Link>}

                                        <Link href={"/contactPage"}>
                                            <Button variant="outline-primary">
                                                <MdOutlineContactless
                                                    size={20}
                                                    style={{
                                                        paddingBottom: "3px",
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                Контакты
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="d-flex items-center justify-end pr-16 lg:pr-0 px-20">
                                        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
                                            <IoMdLogIn
                                                size={20}
                                                style={{
                                                    paddingBottom: "3px",
                                                    marginRight: "5px",
                                                }}
                                            />
                                            Войти
                                        </Button>
                                    
                                    <div className="mt-2 px-2">
                                        <ThemeSwitch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute">
                <div className="opacity-50 absolute bottom-0 end-0 z-n1 position-absolute mt-5 overflow-hidden">
                    <Image
                        alt="logo"
                        width={400}
                        height={400}
                        src="/3d.png"
                        style={{ transform: `rotate({30}deg)` }}
                    />
                </div>
                <div className="opacity-70 top-0 right-2 absolute z-n1 position-absolute p-4">
                    <Image
                        alt="logo"
                        width={400}
                        height={400}
                        src="/3dd.png"
                        style={{ transform: `rotate({10}deg)` }}
                    />
                </div>
                </div>
                <>
                    <Login 
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            </>
        );
    };

    export default Header;
