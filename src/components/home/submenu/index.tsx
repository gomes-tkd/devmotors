"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Submenu() {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [isOpen]);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <section className={styles.submenu}>
            <button className={styles.submenuIcon} onClick={() => toggleMenu()}>
                <Menu size={32} color={"#121212"} />
                Serviços
            </button>

            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
                {isOpen && (
                    <button className={styles.closeButton} onClick={() => toggleMenu()}>
                        <X size={52} color={"#121212"} />
                    </button>
                )}
                <li>
                    <Link href={"/post1"}>Página 1</Link>
                </li>
                <li>
                    <Link href={"/post2"}>Página 2</Link>
                </li>
            </ul>
        </section>
    );
}
