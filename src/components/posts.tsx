import { getDataNews } from "@/fetches/fetch";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import type { NewsItem } from "@/types/interface";
import { formatTime } from "@/lib/functions";

interface PostsProps {
  search: string;
  category: string;
  setSelectedNew: (article: NewsItem) => void;
}

export default function Posts({
  search,
  category,
  setSelectedNew,
}: PostsProps) {
  const [posts, setPosts] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data =
          category !== ""
            ? await getDataNews({
                type: "top-headlines",
                category,
              })
            : await getDataNews({
                type: "everything",
                search: search || "ukraine",
              });

        setPosts(data.articles);
      } catch (e) {
        console.error(e);
        setError("Error while getting data news");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [search, category]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="px-8 mt-24 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
      {posts.map((post, index) => (
        <Card
          key={index}
          onClick={() => setSelectedNew(post)}
          className="
            p-4 my-5 cursor-pointer
            transition-transform duration-300 ease-out
            hover:scale-[1.03]
            hover:shadow-xl
          "
        >
          {post.urlToImage && (
            <img
              src={post.urlToImage}
              alt={post.title}
              className="h-28 w-full object-cover rounded-md mb-2"
            />
          )}

          <span className="text-sm font-bold line-clamp-2">{post.title}</span>

          <span className="text-xs line-clamp-3">{post.description}</span>

          <span className="text-xs mt-auto text-gray-500">
            {formatTime(post.publishedAt)} | {post.source.name}
          </span>
        </Card>
      ))}
    </div>
  );
}
