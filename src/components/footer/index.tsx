import React from "react";
import styles from "./styles.module.scss";
import { HomeProps } from "@/utils/home.type";
import { Mail, Map, Phone, Clock } from "lucide-react";
import EmployeeContact from "@/components/employee-contact";

export default function Footer({ object }: HomeProps) {
    return (
        <footer id={"contatos"} className={styles.footer}>
            <section className={styles.section}>
                <h2 className={styles.title}>Contatos</h2>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <Mail size={28} color={"#fff"} />
                        <div>
                            <strong>Email</strong>
                            <p>{object.metadata.contact.email}</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Phone size={28} color={"#fff"} />
                        <div>
                            <strong>Telefone</strong>
                            <p>{object.metadata.contact.phone}</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Map size={28} color={"#fff"} />
                        <div>
                            <strong>Endereço</strong>
                            <p>{object.metadata.contact.address}</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Clock size={28} color={"#fff"} />
                        <div>
                            <strong>Horário</strong>
                            <p>{object.metadata.contact.time}</p>
                        </div>
                    </div>
                </div>
            </section>
            <EmployeeContact
                buttonTile={object.metadata.cta_button.title}
                buttonUrl={object.metadata.cta_button.url}
                icon={<Phone size={24} color={"#fff"} />}
            />
            <p className={styles.copyText}>
                Todos direitos reservados {object.title} @{`${new Date().getFullYear()}`}
            </p>
        </footer>
    )
}
