function NewPost({ addPost, goHome }) {
  let title = "";
  let content = "";

  function handleSubmit(e) {
    e.preventDefault();
    if (title && content) {
      addPost(title, content);
    }
  }

  return (
    <div className="newpost-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit} className="newpost-form">
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => (title = e.target.value)}
        />
        <textarea
          placeholder="Enter Content"
          rows="5"
          onChange={(e) => (content = e.target.value)}
        />
        <button type="submit">Upload</button>
        <button type="button" onClick={goHome}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewPost;
