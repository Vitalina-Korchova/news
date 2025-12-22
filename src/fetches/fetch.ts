type DataProps = {
  type: "top-headlines" | "everything";
  search?: string;
  category?: string;
};
export async function getDataNews({ type, search, category }: DataProps) {
  let url = "";
  if (type === "top-headlines") {
    url = `https://newsapi.org/v2/top-headlines?category=${category}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${search}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error while getting data news", error);
    return [];
  }
}
