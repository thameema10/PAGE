import { useState } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';

function App() {
  const [page, setPage] = useState('landing');
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts') || '[]'));
  const [currentPost, setCurrentPost] = useState(null);

  function addPost(title, content) {
    const newPosts = [...posts, { id: Date.now(), title, content }];
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
    setPage('home');
  }

  function viewPost(post) {
    setCurrentPost(post);
    setPage('postDetail');
  }

  return (
    <div className="app-root">
      <div className="app-container">
        {page === 'landing' && <Landing goHome={() => setPage('home')} />}
        {page === 'home' && (
          <Home posts={posts} onViewPost={viewPost} goNewPost={() => setPage('newPost')} goLanding={() => setPage('landing')} />
        )}
        {page === 'postDetail' && currentPost && (
          <PostDetail post={currentPost} goHome={() => setPage('home')} />
        )}
        {page === 'newPost' && <NewPost addPost={addPost} goHome={() => setPage('home')} />}
      </div>
    </div>
  );
}

export default App;
