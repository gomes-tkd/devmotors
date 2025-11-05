import React from 'react';
import styles from "./styles.module.scss";
import Image from "next/image";
import EmployeeContact from "@/components/employee-contact";

interface HeroProps {
    heading: string;
    buttonUrl: string;
    buttonTile: string;
    bannerUrl: string;
    icon: React.ReactNode;
}

export default function Hero({ heading, bannerUrl, buttonUrl, buttonTile, icon }: HeroProps) {
    return (
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>
                <EmployeeContact buttonUrl={buttonUrl} buttonTile={buttonTile} icon={icon} />
            </div>
            <div className={styles.contentBanner}>
                <Image
                    className={styles.banner}
                    src={bannerUrl}
                    alt={heading}
                    priority={true}
                    quality={100}
                    fill={true}
                />
            </div>
        </main>
    );
}
