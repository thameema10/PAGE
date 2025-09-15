export default function Landing({ goHome }) {
  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <button onClick={goHome}>Go to Home Page</button>
    </div>
  );
}
