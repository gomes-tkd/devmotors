import styles from "./styles.module.scss";
import Image from "next/image";
import React from "react";
import { HomeProps } from "@/utils/home.type";

export default function About({ object }: HomeProps) {
    return (
        <section id={"sobre"} className={styles.containerAbout}>
            <article className={styles.innerAbout}>
                <h1 className={styles.title}>Sobre</h1>
                <p className={styles.description}>{object.metadata.about.description}</p>
            </article>
            <div className={styles.bannerAbout}>
                <Image
                    className={styles.imageAbout}
                    src={object.metadata.about.banner.url}
                    alt={"Imagem ilustrativa sobre a empresa."}
                    quality={100}
                    fill={true}
                />
            </div>
        </section>
    );
}
