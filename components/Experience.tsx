import React from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {workExperience} from "@/data";
import {Button} from "@/components/ui/moving-border";
import Image from "next/image";

const Experience = () => {
    return (
        <div className={'py-20 z-50 relative'}>
            <h1 className={'font-bold text-4xl md:text-5xl text-center '}>
                <TextGenerateEffect numberOf={0} className={'text-center text-[40px] md:text-3xl lg:text-4xl'} words={`Nasze doświadczenie`} />
            </h1>
            <div className={'w-full mt-12 grid md:grid-cols-2 grid-cols-1 gap-10'}>

                {workExperience.map((card) => (
                    <Button key={card.id} borderRadius={'1.75rem'} className={'flex-1 text-black border-black bg-custom-gradient'} duration={Math.floor(Math.random()*10000)+10000}>
                        <div className={'flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'}>
                            <img src={card.thumbnail} alt={card.thumbnail} className={' lg:w-32 md:w-20 w-16'}/>
                            <div className={'lg:ms-5 '}>
                                <h1 className={'text-start text-xl md:text-2xl font-bold'}>
                                    {card.title}
                                </h1>
                                <p className={'text-start text-black-100 mt-3 font-semibold'}>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}

            </div>
        </div>
                )
}
export default Experience
