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
