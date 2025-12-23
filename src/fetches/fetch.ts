import type { NewsResponse } from "@/types/interface";

type DataProps = {
  type: "top-headlines" | "everything";
  search?: string;
  category?: string;
};

const myApiKey = "da6350670d0b443382d1a4a492dc5581";
export async function getDataNews({
  type,
  search,
  category,
}: DataProps): Promise<NewsResponse> {
  let url = "";
  if (type === "top-headlines") {
    url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${myApiKey}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${myApiKey}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log("Error while getting data news", error);
    throw error;
  }
}
