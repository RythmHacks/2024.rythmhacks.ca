import "./Landing.scss";
import Navbar from "../components/Navbar/Navbar";

const Landing = () => {
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
                    <h2 className="font-light text-4xl mt-6">JUNE, WATERLOO</h2>
                </div>
            </section>
        </main>
    );
};

export default Landing;
