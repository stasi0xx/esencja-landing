import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {gridItems} from "@/data";

const Grid = () => {
    return (
        <section id={'about'}>
            <BentoGrid>
                {gridItems.map(({id, title, description, className, imgClassName, img, titleClassName, spareImg}) => (
                    <BentoGridItem id={id} key={id} title={title} description={description} className={className} img={img} imgClassName={`w-full h-full object-cover ${imgClassName}`} titleClassName={titleClassName} spareImg={spareImg}/>
                ))}
            </BentoGrid>
        </section>
    )
}
export default Grid
