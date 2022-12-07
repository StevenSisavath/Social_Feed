

const Post = (props) => {
    return (
        <div>
            <div>Name{props.posts.name}</div>
            <div>Text{props.posts.text}</div>
            <button>Like{props.posts.like}</button>
            <button>Dislike{props.posts.dislike}</button>
        </div>
     );
}
 
export default Post;