import React from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {projects} from "@/data";
import {PinContainer} from "@/components/ui/3d-pin";
import {FaLocationArrow} from "react-icons/fa6";
import Image from "next/image";

const RecentProjects = () => {
    return (
        <div className={'py-20 z-50 relative'} id={'projects'}>
            <h1 className={'font-bold text-4xl md:text-5xl text-center '}>
                <TextGenerateEffect numberOf={3} className={'text-center text-[40px] md:text-3xl lg:text-4xl'} words={`Mały zbiór naszych kilku ostatnich projektów.`} />
            </h1>
            <div className={'flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'}>
                {projects.map(({id, title, des, img, iconLists, link}) => (

                    <div key={id} className={'sm:h-[41rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] '}>
                        <PinContainer title={title} href={link}>
                            <div className={'relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[35vh] lg:h-[40vh]'}>
                                <div className={'relative w-full h-full overflow-hidden lg:rounded-3xl'}>
                                    <img src="/bg.png" alt="bg-img"/>
                                </div>
                                <img src={img} alt={img} className={'z-100 absolute bottom-0'}/>
                            </div>
                            <h1 className={'font-bold text-base md:text-xl lg:text-2xl text-center line-clamp-1'}>
                                {title}
                            </h1>
                            <p className={'lg:text-xl font-normal font-light text-sm line-clamp-2'}>
                                {des}
                            </p>
                            <div className={'flex items-center justify-between mt-7 mb-3'}>
                                <div className={'flex items-center'}>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className={'border border-black/[0.2] rounded-full bg-white lg:w-10 lg:h-10 h-8 w-8 flex items-center justify-center'}
                                        style={{transform: `translateX(-${5 * index * 2}px)`}}
                                        >
                                            <img src={icon} alt={icon} className={'p-2'}/>
                                        </div>
                                    ))}
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <p className={'flex lg:text-xl md:text-xs text-sm'}>Sprawdź projekt</p>
                                    <FaLocationArrow className={'ms-3'} color={'black'} />
                                </div>
                            </div>
                        </PinContainer>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default RecentProjects
