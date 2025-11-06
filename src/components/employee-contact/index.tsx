import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";
import { EmployeeContactProps } from "@/utils/datas.type";

const whatsappNumber = process.env.WHATSSAPP_PHONE_NUMBER;
const defaultMessage = process.env.DEFAULT_MESSAGE;
const encodedMessage = encodeURIComponent(defaultMessage || "");

export const buttonUrlEmployeeContact = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

export function EmployeeContact({ buttonTile, icon }: EmployeeContactProps) {

    return (
        <Link target={"_blank"} href={buttonUrlEmployeeContact} className={styles.link}>
            {icon}
            {buttonTile}
        </Link>
    );
}

