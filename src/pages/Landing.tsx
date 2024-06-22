import "./Landing.scss";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";

const Landing = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        setStatus(typeof localStorage.getItem("email") === "string" ? "success" : "");
        setEmail(localStorage.getItem("email") ?? "");
    }, []);

    return (
        <main>
            <Navbar />

            <section className="splash flex justify-center items-center h-dvh text-center">
                <div className="bg absolute size-full" />
                <div className="z-10">
                    <h1 className="text-gray-400 text-8xl font-semibold">
                        Experience the{" "}
                        <div className="pb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2B7FA3] from-22% to-[#C95FFB]">
                            magic of tech
                        </div>
                    </h1>
                    <h2 className="font-light text-4xl mt-6">SEPTEMBER, WATERLOO</h2>
                    <form
                        className="mt-8"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setStatus("loading");
                            const res = await fetch("https://dash.rythmhacks.ca/api/prereg", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email }),
                            });
                            if (res.ok) {
                                localStorage.setItem("email", email);
                                setStatus("success");
                            } else {
                                setStatus("error");
                            }
                        }}
                    >
                        <input
                            className={`p-4 w-72 border-[1px] border-[#ffffff1f] rounded-2xl backdrop-blur-md bg-[#202020]/30 focus:outline-none`}
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        <input
                            className={`mx-4 bg-gradient-to-bl from-[#2B7FA3] to-[#C95FFB] p-4 rounded-2xl border-[1px] border-[#ffffffaf] cursor-pointer font-semibold`}
                            type="submit"
                            value={
                                status === "success"
                                    ? "Preregistered!"
                                    : status === "loading"
                                    ? "..."
                                    : status === "error"
                                    ? "Error!"
                                    : "Preregister"
                            }
                            // sorry
                        />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Landing;
