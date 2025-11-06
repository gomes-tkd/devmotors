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
import { Metadata} from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    try {
        const { slug } = await params;
        const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
            return {
                title: "DevMotors - Sua oficina especializada.",
                description: "Sua oficina especializada mais perto de ti. SITE FICTÍCIO " +
                    "- Projeto desenvolvido para fins educacionais.",
            }
        });

        return {
            title: `DevMotors - ${objects[0].title}`,
            description: `SITE FICTÍCIO Projeto desenvolvido para fins educacionais: 
                ${objects[0].metadata.description.text}`,
            keywords: ["oficina", "oficina carros", "carros", "manutenção carros", "reparação carros", "troca de óleo", "troca", "óleo", "manutenção", "prevenção", "manutenção preventiva", "preventiva", "alinhamento", "balanceamento", "freios", "suspensão", "motor", "transmissão", "elétrica", "diagnóstico", "inspeção veicular"],
            authors: [{ name: "José Gomes", url: "https://www.linkedin.com/in/jose-bolivar-gomes/" }],
            creator: "José Gomes - Fullstack Developer",
            openGraph: {
                title: "DevMotors - Sua oficina especializada.",
                images: [objects[0].metadata.banner.url],
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }
    } catch (err: unknown) {
        return {
            title: "DevMotors - Sua oficina especializada.",
            description: "Sua oficina especializada mais perto de ti. SITE FICTÍCIO " +
                "- Projeto desenvolvido para fins educacionais.",
        }
    }
}

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
