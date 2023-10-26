"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Nav from "./my-components/Nav";
import ProjectCard from "./my-components/ProjectCard";
import { useEffect, useState } from "react";
import Article from "./my-components/Article";

const tabTitles = [
  { value: "projects", title: "Projects" },
  { value: "articles", title: "Articles" },
];

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/get-involved", title: "Get Involved" },
  { href: "/policy", title: "Policy" },
  { href: "/library", title: "Library" },
  { href: "/events", title: "Events" },
];

export default function Home() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const res = await fetch(
      "https://dev.to/api/articles?username=suiteasdesign"
    );

    const data = await res.json();

    setArticles(data);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main className="flex flex-col h-screen w-screen overflow-x-hidden">
      <Nav />
      <section className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-4xl font-bold mt-10 text-center">
          Aodhan Hamilton
        </h1>
        <p className="flex flex-col items-center m-2">
          Fullstack Web Developer
        </p>
        <Tabs
          defaultValue={tabTitles[0].value}
          className="w-4/6 flex flex-col mt-10 mb-2"
        >
          <TabsList>
            {tabTitles.map((tab) => (
              <TabsTrigger key={`${tab.value}`} value={`${tab.value}`}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex flex-col w-full h-[400px] gap-y-2 overflow-y-scroll scrollbar">
            <TabsContent value="projects" className="flex flex-col gap-y-4">
              <ProjectCard
                hrefLink={"https://schedulewithjason.netlify.app"}
                title={"Schedule with Jason"}
                description={
                  "Internal utility tool to help with scheduling of episodes for Learn with Jason"
                }
                repoLink={"https://github.com/MVAodhan/schedule-with-jason-3"}
              />
              <ProjectCard
                hrefLink={"https://backgroundremove.netlify.app/"}
                title={"Bg Remove"}
                description={"A simple bg-remover AI (Supabase instane paused)"}
                repoLink={"https://github.com/MVAodhan/bg-remover"}
              />
              <ProjectCard
                hrefLink={"https://generate-pw.netlify.app/"}
                title={"Password Generator"}
                description={
                  "A simple Password Generator utility that doesn't store any passwords"
                }
                repoLink={"https://github.com/MVAodhan/password-generator"}
              />
            </TabsContent>
            <TabsContent value="articles" className="flex flex-col gap-y-4">
              {articles.length > 1 &&
                articles.map((article) => (
                  <Article
                    key={article.url}
                    title={article.title}
                    date={article.readable_publish_date}
                    href={article.url}
                  />
                ))}
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </main>
  );
}

/**
 * {articles.length > 1 && articles.map((article) => (<Article title={article.title} date={article.readable_publish_date} href={article.url} />)}
 */
