import { useState } from "react";
import Header from "./components/header";
import Posts from "./components/posts";
import DetailPost from "./components/detail-post";
import type { NewsItem } from "./types/interface";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedNew, setSelectedNew] = useState<NewsItem | null>(null);
  return (
    <>
      <div>
        <Header
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
        {selectedNew ? (
          <DetailPost
            article={selectedNew}
            onBack={() => setSelectedNew(null)}
          />
        ) : (
          <Posts
            search={search}
            category={category}
            setSelectedNew={setSelectedNew}
          />
        )}
      </div>
    </>
  );
}

export default App;
