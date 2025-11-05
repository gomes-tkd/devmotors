import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";
import { EmployeeContactProps } from "@/utils/home.type";

export default function EmployeeContact({ buttonUrl, buttonTile, icon }: EmployeeContactProps) {
    return (
        <Link target={"_blank"} href={buttonUrl} className={styles.link}>
            {icon}
            {buttonTile}
        </Link>
    );
}
