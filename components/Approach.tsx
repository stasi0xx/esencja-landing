"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Dodane: helper do wykrywania urządzenia dotykowego
const useIsTouchDevice = () => {
    const [isTouch, setIsTouch] = React.useState(false);
    React.useEffect(() => {
        const mq = window.matchMedia("(hover: none), (pointer: coarse)");
        const update = () => setIsTouch(mq.matches);
        update();
        if (mq.addEventListener) {
            mq.addEventListener("change", update);
            return () => mq.removeEventListener("change", update);
        } else {
            // starsze przeglądarki
            // @ts-ignore
            mq.addListener(update);
            // @ts-ignore
            return () => mq.removeListener(update);
        }
    }, []);
    return isTouch;
};

const Approach = () => {
    return (
        <section className={"w-full py-20"}>
            <h1 className={"font-bold text-4xl md:text-5xl text-center "}>
                <TextGenerateEffect
                    numberOf={0}
                    className={"text-center text-[40px] md:text-3xl lg:text-4xl"}
                    words={`Jak Pracujemy`}
                />
            </h1>

            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
                <Card
                    title="Planowanie & Strategia"
                    icon={<AceternityIcon order={"Etap Pierwszy"} />}
                    description={
                        "Zaczynamy od zagłębienia się w szczegóły projektu, aby lepiej zrozumieć Twoje potrzeby. Następnie przygotowujemy PLAN DZIAŁANIA"
                    }
                >
                    <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
                </Card>
                <Card
                    title="Realizacja & Aktualizacja Postępów"
                    icon={<AceternityIcon order={"Etap Drugi"} />}
                    description={
                        "Gdy już ustalimy plan działania, zabieramy się do pracy. Jednocześnie regularnie konsultując postępy ustalnego wspólnie planu"
                    }
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card
                    title="Efekt Końcowy"
                    icon={<AceternityIcon order={"Etap Trzeci"} />}
                    description={"Na końec dbamy o to aby założony przez nas plan przebiegł pomyślnie"}
                >
                    <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
                </Card>
            </div>
        </section>
    );
};

const Card = ({
                  title,
                  icon,
                  children,
                  description,
              }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description?: string;
}) => {
    const isTouch = useIsTouchDevice();
    const [hovered, setHovered] = React.useState(false); // desktop
    const [active, setActive] = React.useState(false); // mobile toggle
    const isActive = isTouch ? active : hovered;

    return (
        <div
            role={isTouch ? "button" : undefined}
            tabIndex={isTouch ? 0 : -1}
            onMouseEnter={() => !isTouch && setHovered(true)}
            onMouseLeave={() => !isTouch && setHovered(false)}
            onClick={() => isTouch && setActive((v) => !v)}
            onKeyDown={(e) => {
                if (!isTouch) return;
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive((v) => !v);
                }
            }}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] h-[20rem] rounded-2xl cursor-pointer"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pointer-events-none h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div
                    className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 w-full mx-auto flex items-center justify-center ${
                        isActive ? "opacity-0 -translate-y-4" : "opacity-100"
                    }`}
                >
                    {icon}
                </div>

                <h2
                    className={`text-3xl text-center relative z-10 mt-4 font-bold transition duration-200 ${
                        isActive ? "opacity-100 -translate-y-2 text-white" : "opacity-0 text-black"
                    }`}
                >
                    {title}
                </h2>

                <h2
                    className={`text-sm text-center relative z-10 mt-4 font-bold transition duration-200 ${
                        isActive ? "opacity-100 -translate-y-2 text-white" : "opacity-0 text-black"
                    }`}
                    style={{ color: isActive ? undefined : "#e4ecff" }}
                >
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-medium text-white backdrop-blur-3xl">
          {order}
        </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Approach;