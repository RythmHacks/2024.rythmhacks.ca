import { FunctionComponent, useState } from "react";

interface Data {
    image: string;
    name: string;
    about: string;
}

const data: Data[] = [
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "le fang",
        about: "skibidi dom dom dom yes yes",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "jef",
        about: "has 4 fs",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
    {
        image: "https://cdn.discordapp.com/avatars/690577156006477875/3f21631d80456637ae20cc75d33f5a09.webp?size=80",
        name: "ALLAN JOE",
        about: "ALLAN JOE",
    },
];

const Team: FunctionComponent = () => {
    const [index, setIndex] = useState(0);

    return (
        <section id="team">
            <h2 className="text-center text-3xl">Meet the Team!</h2>
            <div className="grid grid-cols-[2fr,1fr] mt-4 p-16">
                <div className="relative">
                    <div className="flex flex-row flex-wrap gap-4 gap-y-32 mb-28">
                        {data.map((x, i) =>
                            i < (data.length + 1) / 2 ? (
                                <img
                                    className={`size-24 bg-slate-400 rounded-full col-span-2 cursor-pointer ${
                                        i == index ? "border-accent border-4" : ""
                                    }`}
                                    onClick={() => setIndex(i)}
                                    src={x.image}
                                />
                            ) : null
                        )}
                    </div>
                    <div className="flex flex-row flex-wrap absolute top-28 left-[3.5rem] gap-4 gap-y-32">
                        {data.map((x, i) =>
                            i >= (data.length + 1) / 2 ? (
                                <img
                                    className={`size-24 bg-slate-400 rounded-full col-span-2 cursor-pointer ${
                                        i == index ? "border-accent border-4" : ""
                                    }`}
                                    onClick={() => setIndex(i)}
                                    src={x.image}
                                />
                            ) : null
                        )}
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-8">
                    <img
                        className="size-32 bg-slate-400 rounded-full border-accent border-8"
                        src={data[index].image}
                    />
                    <div>
                        {data[index].name}
                        <br />
                        {data[index].about}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
