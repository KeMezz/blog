import React from "react";
import { FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";
import { Link } from "gatsby";

interface PostPreviewProps {
  emoji: string;
  title: string;
  excerpt: string;
  date: string;
  slug: number;
}

const PostPreview = ({
  emoji,
  title,
  excerpt,
  date,
  slug,
}: PostPreviewProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <article className="bg-white dark:bg-zinc-900 p-4 lg:p-6 rounded-lg flex flex-col gap-3 h-full lg:hover:shadow-lg lg:hover:-translate-y-1 lg:transition-all">
        <h2 className="font-semibold lg:text-lg">
          {emoji} {title}
        </h2>
        <p className="text-xs leading-5 lg:text-sm lg:leading-6">{excerpt}</p>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-auto">
          <FaRegCalendar />
          <p className="text-xs">{date}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostPreview;
