"use client";

import Link from "next/link";
import styles from "./error.module.scss";
import RedirectTimer from "@/utils/actions/redirect-time";

export default function Error() {
    return (
        <div className={styles.error}>
            <h1>Essa página não existe!</h1>
            <Link href={"/"}>Voltar para página Home</Link>
            <RedirectTimer />
        </div>
    );
}
