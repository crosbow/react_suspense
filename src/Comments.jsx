// import use from "./hooks/use";
import { use } from "react";
import { fetchData } from "./utils/data";

const Comments = ({ postId }) => {
  const comments = use(
    fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  );

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
};
export default Comments;
