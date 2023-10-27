import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  hrefLink,
  repoLink,
}: {
  title: string;
  description: string;
  hrefLink: string;
  repoLink: string;
}) => {
  return (
    <div className="rounded-lg p-2 w-full h-26 flex flex-col gap-2 bg-slate-100 dark:bg-slate-800">
      <Link
        href={hrefLink}
        target="_blank"
        className="flex items-center w-full gap-2"
      >
        {title}
      </Link>
      <p>{description}</p>
      <Link href={repoLink} target="_blank">
        Repo
      </Link>
    </div>
  );
};

export default ProjectCard;
