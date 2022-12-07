import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList';

function App() {

  const [posts, setPosts] = useState([{name:'as'}])

  function addNewPost(entry){
    let tempPosts = [...posts, entry];
    setPosts(tempPosts);
  }

  return (
    <div >
      <NavBar/>
      <CreatePostForm addNewPostProperty={addNewPost}/>
      
      <PostList parentPosts={posts}/>
    </div>
  );
}

export default App;
