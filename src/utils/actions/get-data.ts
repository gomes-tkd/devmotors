import {HomeProps, SubmenuProps} from "@/utils/datas.type";

export async function getData(): Promise<HomeProps> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/objects/690a1118fb7423bbdde49e59?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
            { next: { revalidate: 120 } }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json() as Promise<HomeProps>;
    }  catch (err: unknown) {
        const errMessage = err instanceof Error ? err.message : String(err);
        throw new Error("Failed to fetch data. Error: " + errMessage);
    }
}

export async function getSubmenu(): Promise<SubmenuProps> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
            { next: { revalidate: 120 } }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json() as Promise<SubmenuProps>;
    }  catch (err: unknown) {
        const errMessage = err instanceof Error ? err.message : String(err);
        throw new Error("Failed to fetch data. Error: " + errMessage);
    }
}

export async function getItemBySlug(itemSlug: string) {
    try {
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;
        const queryParams = new URLSearchParams({
            query: JSON.stringify({ slug: itemSlug }),
            props: 'slug,title,metadata',
            read_key: process.env.READ_KEY as string || '',
        });

        const url = `${baseUrl}?${queryParams.toString()}`;
        const response = await fetch(url, { next: { revalidate: 120 } });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }  catch (err: unknown) {
        const errMessage = err instanceof Error ? err.message : String(err);
        throw new Error("Failed to fetch data. Error: " + errMessage);
    }
}
