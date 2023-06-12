import Listitems from "./Listitems";

const PostList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Listitems key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default PostList;
