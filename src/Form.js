import Button from "./Button";

export default function Form({ resType, setResType }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Button buttonText="users" resType={resType} setResType={setResType} />

        <Button buttonText="posts" resType={resType} setResType={setResType} />

        <Button
          buttonText="comments"
          resType={resType}
          setResType={setResType}
        />
      </form>
    </>
  );
}
