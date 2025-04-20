import React from 'react';
import blog from '../data/blog'; // Changed from blogData to blog for default import
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />
      <div className="container">
        <About image={blog.image} about={blog.about} />
        <ArticleList posts={blog.posts} />
      </div>
    </div>
  );
}

export default App;