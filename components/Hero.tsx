import React from 'react'
import {Spotlight} from "@/components/ui/spotlight";
import {cn} from "@/lib/utils";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";

const Hero = () => {
    return (
        <div className={'pb-20 pt-36'}>
            <div className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                <Spotlight className={'-top-40 -left-10 md:-left-32 md:-top-20 h-screen'} fill={'black'}/>
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vh]" fill={'black'} />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vh]" fill={'#adb5bd'} />
            </div>
            <div className={'flex justify-center relative my-20 z-10'}>
                <div className={'max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'}>
                    <h2 className={'uppercase tracking-widest text-xs text-center text-black-100 max-w-80'}>
                        WYDAJESZ NA REKLAMĘ, ALE NIE ZARABIENIASZ?
                    </h2>
                    <TextGenerateEffect numberOf={6} className={'text-center text-[40px] md:text-5xl lg:text-6xl'} words={`Bądź w centrum uwagi przez cały rok. Zbuduj nieśmiertelną markę.`} />
                    <p className={'text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl mt-2.5'}>Esencja | Kreator Reklam</p>

                    <a href={'#about'}>
                        <MagicButton title={'Zacznij już dziś'} icon={<FaLocationArrow/>} position={'right'} />
                    </a>
                </div>
            </div>


        </div>
    )
}
export default Hero
