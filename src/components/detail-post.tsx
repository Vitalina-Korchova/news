import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Calendar,
  User,
  Building,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import type { NewsItem } from "@/types/interface";
import { formatTime } from "@/lib/functions";

export default function DetailPost({
  article,
  onBack,
}: {
  article: NewsItem;
  onBack: () => void;
}) {
  return (
    <div className="mt-24 p-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 cursor-pointer flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="px-8">
                {" "}
                <img
                  src={article.urlToImage}
                  className="h-72 w-full object-cover rounded-lg "
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{article.title}</CardTitle>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </CardHeader>

              <CardContent className="text-sm leading-relaxed">
                {article.content}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 lg:sticky lg:top-24 h-fit">
            <Card>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {article.source.name}
                </div>

                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatTime(article.publishedAt)}
                </div>

                <a href={article.url} target="_blank">
                  <Button size="sm" className="w-full gap-2 cursor-pointer">
                    Read full article
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
