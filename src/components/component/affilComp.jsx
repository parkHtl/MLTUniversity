import Link from "next/link";
import FadeInComponent from "@/components/inhouse/fadeInComponent";

export function AffilComp() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
            <div className="px-4 md:px-6 w-full max-w-7xl">
                <FadeInComponent>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Affiliated Companies
                            </h2>
                            {/* Uncomment if needed */}
                            {/*<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">*/}
                            {/*    {`Our sister companies are dedicated to providing exceptional educational opportunities. Whether you're pursuing a medical career or seeking higher education pathways, our brands offer tailored solutions to help you achieve your goals and connect with leading institutions worldwide.`}*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </FadeInComponent>
                <div className="mx-auto grid gap-6 px-64 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
                    <FadeInComponent>
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800 h">
                            <div className="grid gap-2 text-center">
                                <img
                                    alt="Data Science Certification"
                                    className="rounded-lg object-cover w-full h-auto aspect-[4/3]"
                                    src="/images/aic.png"
                                />
                                <h3 className="text-xl font-semibold">AIC Campus</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {`IMC - AIC Education Consortium, offers a range of higher education solutions, including diverse programs and direct placements for leading universities.`}
                                </p>
                            </div>
                        </div>
                    </FadeInComponent>
                    <FadeInComponent>
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                            <div className="grid gap-2 text-center">
                                <img
                                    alt="Digital Marketing Masterclass"
                                    className="rounded-lg object-cover w-full h-auto aspect-[4/3]"
                                    src="/images/imc.png"
                                />
                                <h3 className="text-xl font-semibold">IMC</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {`IMC offers diverse pathways for aspiring medical students to achieve their dreams, partnering with recognized universities worldwide and providing tailored education solutions.`}
                                </p>
                            </div>
                        </div>
                    </FadeInComponent>
                </div>
            </div>
        </section>
    );
}

function ArrowRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
