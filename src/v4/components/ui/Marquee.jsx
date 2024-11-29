import { cn } from "../../utils/cn";
import { tools } from "../../../components/store/data";


function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className,
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                            "[animation-direction:reverse]": reverse,
                        })}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}



const firstRow = tools.slice(0, tools.length / 2);
const secondRow = tools.slice(tools.length / 2);

const ReviewCard = ({

    name,
    icon

}) => {
    return (
        <figure
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl p-4",
                // light styles
                " bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2 font-Aeonik">
                <span className="text-neutral-600 text-2xl">{icon}</span>
                <div className="flex flex-col">
                    <figcaption className="text-xl dark:text-white text-neutral-600 font-semibold">
                        {name}
                    </figcaption>

                </div>
            </div>
        </figure>
    );
};

export function MarqueePreview() {
    return (
        <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:200s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:200s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-transparent"></div>
        </div>
    );
}
