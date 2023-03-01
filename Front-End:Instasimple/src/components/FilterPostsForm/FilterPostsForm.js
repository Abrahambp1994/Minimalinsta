import "./FilterPostsForm.css";

export const FilterPostsForm = ({ setSearchResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    console.log(query);
    setSearchResults(query);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-posts-form">
      <input
        name="search"
        type="search"
        id="search"
        className="form-control"
        placeholder="Search a post by description..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
