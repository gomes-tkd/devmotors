"use client";
import React from 'react';
import styles from "./style.module.scss";
import Link from "next/link";

export default function Header() {
    const [top, setTop] = React.useState(true);

    function scrollHandler() {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [top]);

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLogo}>
                        <Link href={"/"}>
                            Dev Motors
                        </Link>
                    </div>

                    <nav className={styles.nav}>
                        <Link href="/">Home</Link>
                        <Link href="/#sobre">Sobre</Link>
                        <Link href="/#servicos">Serviços</Link>
                        <Link href="/#contatos">Contatos</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
