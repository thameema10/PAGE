export default function PostDetail({ post, goHome }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
}
