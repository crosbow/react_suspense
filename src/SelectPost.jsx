import { fetchPosts } from "./api/fetchPosts";

const resource = fetchPosts("https://jsonplaceholder.typicode.com/posts");

const SelectPost = ({ onChange }) => {
  const posts = resource.read();

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {posts.map((post) => (
        <option key={post.id} value={post.id}>
          {post.title}
        </option>
      ))}
    </select>
  );
};
export default SelectPost;
