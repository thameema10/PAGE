export default function Home({ posts, onViewPost, goNewPost, goLanding }) {
  return (
    <div>
      <h1>All Blog Posts</h1>
      <button onClick={goLanding}>Back to Landing</button>
      <button onClick={goNewPost}>New Post</button>
      {posts.length === 0 ? (
        <p>No posts yet. Start by creating one!</p>
      ) : (
        posts.slice().reverse().map(post => (
          <div key={post.id} style={{border: '1px solid #ccc', margin: 10, padding: 10}}>
            <h2>{post.title}</h2>
            <button onClick={() => onViewPost(post)}>View Details</button>
          </div>
        ))
      )}
    </div>
  );
}
