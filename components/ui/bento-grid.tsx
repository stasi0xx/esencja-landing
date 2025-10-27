'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {Globe} from "@/components/ui/globe";
import {GlobeDemo} from "@/components/ui/GridGlobe";
import Lottie from "react-lottie";
import {useState} from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "@/components/ui/MagicButton";
import {IoCopyOutline} from "react-icons/io5";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[6rem] md:grid-cols-5",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  id,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('stanislaw.korycki.w@gmail.com');
        setCopied(true);
    }

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/

                background: "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(235, 235, 235, 1) 79%, rgba(230, 230, 230, 1) 97%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                    } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //   width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation
                        gradientBackgroundStart = "rgb(70, 70, 70)"
                    gradientBackgroundEnd = "rgb(245, 245, 245)"

                    // ciemniejsze, wyraźniejsze „plamy”
                    firstColor = "60, 60, 60"
                    secondColor = "110, 110, 110"
                    thirdColor = "210, 210, 210"
                    fourthColor = "30, 30, 30"
                    fifthColor = "160, 160, 160"
                    pointerColor = "230, 230, 230"

                    blendingValue="multiply"


                    >
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-dark-100 z-10">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`font-sans text-lg lg:text-xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                {id===2 && <GlobeDemo />}
                {id===3 && (
                    <div className={'flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-2 opacity-50'}>
                        <div className={'flex flex-col gap-3 lg:gap-3'}>
                            {['Reklamy', 'Strony WWW', 'Druk'].map((item) => (
                                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#A8A8A8] text-white">
                                    {item}
                                </span>
                            ))}
                            <span className="py-4 px-3 rounded-lg text-center bg-[#A8A8a8]"/>
                        </div>
                        <div className={'flex flex-col gap-3 lg:gap-3'}>
                            <span className="py-4 px-3 rounded-lg text-center bg-[#A8A8a8]"/>
                            {['Projekty graficzne', 'Imprezy firmowe', 'Budowa Marki'].map((item) => (
                                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#A8A8A8] text-white">
                                    {item}
                                </span>
                            ))}

                        </div>
                    </div>
                )}
                    {id===4 && (
                        <div className={className}>
                            <DottedGlowBackground
                                className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
                                opacity={1}
                                gap={10}
                                radius={1.6}
                                colorLightVar="--color-neutral-500"
                                glowColorLightVar="--color-neutral-600"
                                colorDarkVar="--color-neutral-500"
                                glowColorDarkVar="--color-sky-800"
                                backgroundOpacity={0}
                                speedMin={0.3}
                                speedMax={1.6}
                                speedScale={1}
                            />
                        </div>

                    )}
                    {id === 6 && (
                        <div className={"mt-5 relative"}>
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {preserveAspectRatio: 'xMidYMid slice',}
                                }} />
                            </div>
                            <MagicButton
                                title={copied ? 'Skopiowano!' : 'Skopiuj email!'}
                                icon={<IoCopyOutline/>}
                                position={'left'}
                                otherClasses={'!bg-[#A8A8A8] text-white'}
                                handleClick={handleCopy}
                            />
                        </div>
                    )}

                </div>
            </div>
        </div>

    );
};