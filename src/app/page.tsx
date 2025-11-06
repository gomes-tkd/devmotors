import React from "react";
import Submenu from "@/components/home/submenu";
import { getData, getSubmenu } from "@/utils/actions/get-data";
import {HomeProps, ItemSubmenuProps} from "@/utils/datas.type";
import Hero from "@/components/hero";
import { Phone } from "lucide-react";
import Services from "@/components/services";
import Container from "@/components/container/container";
import About from "@/components/about";
import Footer from "@/components/footer";

export default async function Home() {
    const { object }: HomeProps = await getData();
    const submenu = await getSubmenu();

    return (
        <main>
            {submenu.objects.length > 0 && <Submenu submenuItems={submenu} />}
            <Hero
                heading={object.metadata.heading}
                buttonTile={object.metadata.cta_button.title}
                buttonUrl={object.metadata.cta_button.url}
                bannerUrl={object.metadata.banner.url}
                icon={<Phone size={24} color={"#fff"} />}
            />
            <Container>
                <About object={object} />
                <Services object={object} />
            </Container>
        </main>
    );
}
