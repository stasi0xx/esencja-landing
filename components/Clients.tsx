import React from 'react'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {companies, testimonials} from "@/data";

const Clients = () => {
    return (
        <div className={'py-20 z-50 relative'} id={'testimonials'}>
            <h1 className={'font-bold text-4xl md:text-5xl text-center '}>
                <TextGenerateEffect numberOf={2} className={'text-center text-[40px] md:text-3xl lg:text-4xl'} words={`Dobre słowa od naszych klientów`} />
            </h1>
            <div className={'flex flex-col items-center max-lg:mt-10 mt-5'}>

                    <InfiniteMovingCards items={testimonials} direction={'right'} speed={'slow'} pauseOnHover={false}/>

                <div className={'flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'}>
                    {companies.map(({id, name, img, nameImg} ) => (
                        <div key={id} className={'flex max-w-32 md:max-w-60 gap-2'}>
                            <img src={img} alt={name} className={'md:w-10 w-5'}/>
                            <img src={nameImg} alt={name} className={'md:w-24 w-20'}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Clients
