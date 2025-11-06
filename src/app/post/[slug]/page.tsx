import React from 'react';
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/datas.type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Container from "@/components/container/container";
import Link from "next/link";
import { buttonUrlEmployeeContact } from "@/components/employee-contact";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { objects }: PostProps = await getItemBySlug(slug);
    return (
        <>
            <Hero
                heading={objects[0].title}
                buttonUrl={objects[0].metadata.button.url}
                buttonTile={objects[0].metadata.button.title}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={24} color={"#fff"} />}
            />
            <Container>
                <section className={styles.about}>
                    <article className={styles.innerAbout}>
                        <h1 className={styles.title}>
                            {objects[0].metadata.description.title}
                        </h1>
                        <p>
                            {objects[0].metadata.description.text}
                        </p>
                        {objects[0].metadata.description.button_active && (
                            <Link
                                href={buttonUrlEmployeeContact}
                                target={"_blank"}
                                className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </Link>
                        )}
                    </article>
                    <div className={styles.bannerAbout}>
                        <Image
                            className={styles.imageAbout}
                            src={objects[0].metadata.description.banner.url}
                            alt={objects[0].title}
                            fill={true}
                            quality={100}
                            priority={true}
                            sizes={"(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"}
                        />
                    </div>
                </section>
            </Container>
        </>
    );
}
