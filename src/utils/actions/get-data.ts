import { HomeProps } from "@/utils/home.type";

export async function getData(): Promise<HomeProps> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/objects/690a1118fb7423bbdde49e59?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
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
