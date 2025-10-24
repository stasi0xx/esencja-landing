import React from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";
import {socialMedia} from "@/data";

const Footer = () => {
    return (
        <footer className={'relative w-full pt-20 pb-10'} id={'contact'}>
            <div className={'flex flex-col items-center'}>
                <h1>
                    <TextGenerateEffect numberOf={5} className={'text-center text-[40px] md:text-3xl lg:text-4xl'} words={`Gotowy wejść na nowy poziom swojej prezencji w internecie?`} />
                </h1>
                <p className={'text-black-100 md:mt-10 my-5 text-center'}>Odezwij się do nas już DZIŚ i dowiedzmy się jak możemy Ci pomóc</p>
                <a href={'mailto:stanislaw.korycki.w@gmail.com'}>
                    <MagicButton title={"Porozmawiajmy"} icon={<FaLocationArrow/>} position={'right'} />
                </a>
            </div>
            <div className={'flex mt-16 md:flex-row flex-col justify-between items-center'}>
                <p className={'md:text-base  text-sm md:font-normal font-light'}>Copyright © 2025 Esencja | Agencja Marketingowa</p>
                <div className={'flex items-center md:gap-3 gap-6'}>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className={'w-10 h-10 mt-4 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-white-100 rounded-lg border border-gray-400'}>
                            <img src={profile.img} alt={profile.img} height={20} width={20} className={'invert'}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer
