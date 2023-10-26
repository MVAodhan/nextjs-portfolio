import Link from "next/link";
import React from "react";

interface Article {
  href?: any;
  title?: string;
  date?: string;
}

const Article = ({ href, title, date }: Article) => {
  return (
    <Link
      href={href}
      className="flex items-center w-full gap-2"
      target="_blank"
    >
      <div className="border rounded-lg p-2 w-full h-26 flex flex-col gap-2">
        <h3>{title}</h3>
        <p>Publish date: {date}</p>
      </div>
    </Link>
  );
};

export default Article;
