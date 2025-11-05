import React from "react";
import styles from "./styles.module.scss";
import {HomeProps, ServiceProps} from "@/utils/home.type";
import Image from "next/image";

export default function Services({ object }: HomeProps) {
    return (
        <>
            <h2 className={styles.servicesTitle}>Conheças nossos serviços</h2>
            <section id={"servicos"} className={styles.services}>
                {object.metadata.services.map((service: ServiceProps, index: number) => (
                    <article key={index} className={styles.service}>
                        <div className={styles.innerService}>
                            <Image
                                className={styles.imageService}
                                src={service.image.url}
                                alt={service.description}
                                quality={100}
                                fill={true}
                            />
                        </div>
                        <p>{service.description}</p>
                    </article>
                ))}
            </section>
        </>
    );
}
