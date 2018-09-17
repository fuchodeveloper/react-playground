import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';

const Blog = props => {
  const sidebar = (
    <ul>
      {
        props.posts.map(post => 
          <li key={post.id}>{post.title}</li>
        )
      }
    </ul>
  );

  const content = props.posts.map(post => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

const posts = [
  {id: 1, title: 'hello world', content: 'learning react'},
  {id: 2, title: 'inspiration', content: 'be better than yesterday'}
]

ReactDOM.render(
  <Blog posts={posts}/>,
  // <Game />,
  document.getElementById('root')
);
