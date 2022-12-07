import React, { useState } from 'react';

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [like, setLike] = useState();
    const [dislike, setDislike] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            text: text,
            like: like,
            dislike: dislike,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type = 'text' value={name} onChange={(event) => setName(event.target.value)}/>
            <br></br>
            <label>Post</label>
            <input type = 'text' value={text} onChange={(event) => setText(event.target.value)}/>
            <button type = 'submit'>Send</button>
        </form>
     );
}
 
export default CreatePostForm;