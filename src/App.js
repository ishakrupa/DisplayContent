import { useEffect, useState } from "react";
import Form from "./Form";
import PostList from "./PostList";

export default function App() {
  const Api_url = "https://jsonplaceholder.typicode.com/";
  const [resType, setResType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(resType, Api_url, `${Api_url}${resType}`);
    const list = async () => {
      try {
        const response = await fetch(`${Api_url}${resType}`);
        // console.log(response, "ur res");
        const data = await response.json();
        // console.log(data, "ur data");
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    list();
  }, [resType]);

  return (
    <div className="App">
      <h1>Display Content</h1>
      <Form resType={resType} setResType={setResType} />
      <PostList items={items} />
    </div>
  );
}
