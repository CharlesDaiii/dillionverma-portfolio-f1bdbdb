import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Dr. Sarah Chen",
    username: "@schen_cmu",
    body: "Ruiyang improved our system performance by 30%. His problem-solving skills and dedication to quality work are remarkable.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Mike Rodriguez",
    username: "@mike_jdtech",
    body: "Working with Ruiyang at JD.com was a pleasure. He's a solid engineer with great attention to detail and delivers quality results.",
    img: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Emily Watson",
    username: "@emily_appstore",
    body: "Just downloaded EatMeFirst and I'm blown away! The app is exactly what I needed. Clean, intuitive, and truly useful.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Prof. David Kim",
    username: "@dkim_uiuc",
    body: "Had Ruiyang in my course at UIUC. His understanding of complex systems was impressive. Not surprised to see him thriving at CMU.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Alex Thompson",
    username: "@alex_dev",
    body: "Collaborated with Ruiyang on an AI project. His work was sophisticated and well-designed. Great communicator too.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Jessica Liu",
    username: "@jess_startup",
    body: "Ruiyang's transition from engineer to entrepreneur is inspiring. His EatMeFirst app shows real product sense and solves genuine problems.",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "Tom Mitchell",
    username: "@tom_xr",
    body: "Met Ruiyang at a conference. His work is cutting-edge and he explained complex concepts clearly. Definitely someone to watch.",
    img: "https://avatar.vercel.sh/tom",
  },
  {
    name: "Rachel Green",
    username: "@rachel_pm",
    body: "Managed Ruiyang during his internship. He delivered projects ahead of schedule with excellent quality. Reliable and professional.",
    img: "https://avatar.vercel.sh/rachel",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}