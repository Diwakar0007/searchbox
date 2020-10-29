import React, { useState, useEffect } from "react";

const SearchBox = () => {
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=php"
  );
  const fetchNews = () => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
  );

  const showNews = () => news.map((n, i) => <p key={i}>{n.title}</p>);

  return (
    <div>
      {searchForm()}
      {showNews()}
    </div>
  );
};

export default SearchBox;
