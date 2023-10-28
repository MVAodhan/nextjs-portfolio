import Link from "next/link";

interface Article {
  href?: any;
  title?: string;
  date?: string;
}

const Article = ({ href, title, date }: Article) => {
  return (
    <div className="rounded-lg p-2 w-full h-26 flex flex-col gap-2 bg-slate-100 dark:bg-slate-800">
      <Link
        href={href}
        className="flex items-center w-full gap-2 bg-slate-100 dark:bg-slate-800"
        target="_blank"
      >
        <div className="rounded-lg p-2 w-full h-26 flex flex-col gap-2">
          <h3>{title}</h3>
          <p>Publish date: {date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Article;
