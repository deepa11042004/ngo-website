import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/lib/data";

type StoryCardProps = {
  story: Story;
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-56">
        <Image src={story.image} alt={`${story.name} from ${story.location}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">{story.location}</p>
        <h3 className="text-xl font-semibold text-slate-900">{story.name}'s Journey</h3>
        <p className="text-sm leading-6 text-slate-600">{story.snippet}</p>
        <Link href={story.href} className="inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">
          Read Full Story
        </Link>
      </div>
    </article>
  );
}
