import { useEffect, useState } from "react";
import EmojiData from "../../_utils/emoji.json";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleCopy = (emoji) => {
    navigator.clipboard.writeText(emoji);
  };

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search emoji here :D"
        onChange={(evt) => setSearch(evt.target.value)}
        value={search}
      />
      <div className="card">
        {data.length === 0 ? (
          <h2>No Results Found</h2>
        ) : (
          data.map((emoji, index) => {
            if (index < 100) {
              return (
                <div key={emoji.title} onClick={() => handleCopy(emoji.symbol)}>
                  <h2 className="symbol">{emoji.symbol}</h2>
                  <h2>{emoji.title}</h2>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default Searchbar;
