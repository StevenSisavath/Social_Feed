import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <div>
            {props.parentPosts.map((post) => {
                return (
                    <Post posts = {post}/>
                );
            })}
        </div>
     );
}
 
export default PostList;