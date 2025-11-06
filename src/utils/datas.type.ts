import React from "react";

export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: MetadataProps;
    }
}

export interface MetadataProps {
    banner: {
        url: string;
    },
    heading: string,
    cta_button: {
        title: string;
        url: string;
    },
    about: {
        description: string;
        banner: {
            url: string;
        }
    },
    services: ServiceProps[];
    contact: ContactProps;
}

export interface ServiceProps {
    image: {
        url: string;
    },
    description: string;
}

export interface ContactProps {
    email: string;
    phone: string;
    address: string;
    time: string;
}

export interface EmployeeContactProps {
    buttonTile: string;
    buttonUrl: string;
    icon: React.ReactNode;
}

export interface SubmenuProps {
    objects: ItemSubmenuProps[];
}

export interface ItemSubmenuProps {
    slug: string;
    title: string;
}

export interface PostProps {
    objects: ObjectPost[];
}

export interface ObjectPost {
    slug: string;
    title: string;
    metadata: {
        banner: {
            url: string;
        };
        button: {
            title: string;
            url: string;
        },
        description: DescriptionProps;
    };
}

export interface DescriptionProps {
    title: string;
    text: string;
    banner: {
        url: string;
    };
    button_active: boolean;
    button_title: string;
    button_url: string;
}
