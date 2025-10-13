import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

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
    return (
        <div
            className={cn(
                // ważne: relative + overflow-hidden, żeby obraz nie wychodził poza kafelek
                "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:shadow-none bg-gradient-to-r from-[#e6e6e6] to-white",
                className,
            )}
        >
            {/* Warstwa tła z głównym obrazem */}
            {img && (
                <div className="pointer-events-none absolute inset-0 z-0">
                    <img
                        src={img}
                        alt="tile-background"
                        loading="lazy"
                        decoding="async"
                        className={cn(
                            // UWAGA: bez przecinków między klasami
                            "h-full w-full object-cover object-center select-none",
                            imgClassName,
                        )}
                    />
                </div>
            )}

            {/* Dodatkowa grafika (np. dekor or symbol), trzymana nad tłem, ale pod treścią */}
            {spareImg && (
                <div
                    className={cn(
                        "pointer-events-none absolute right-0 bottom-0 z-[1]",
                        id === 5 && "w-full opacity-80",
                    )}
                >
                    <img
                        src={spareImg}
                        alt="tile-decoration"
                        loading="lazy"
                        decoding="async"
                        className="object-contain"
                    />
                </div>
            )}

            {/* Specjalne tło animowane dla id === 6 */}
            {id === 6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute inset-0 z-[1]" />
                </BackgroundGradientAnimation>
            )}

            {/* Delikatny overlay poprawiający czytelność tekstu na jasnych obrazach */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/5 to-transparent" />

            {/* Treść kafelka nad obrazami */}
            <div
                className={cn(
                    titleClassName,
                    "relative z-10 group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                    id === 6 && "flex justify-center",
                )}
            >
                <div className="font-sans text-xs font-normal text-neutral-700 dark:text-neutral-300">
                    {description}
                </div>
                <div className="mt-2 mb-2 font-sans font-bold text-neutral-800 dark:text-neutral-200">
                    {title}
                </div>
            </div>
        </div>
    );
};