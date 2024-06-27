import { useParams } from "react-router-dom";
import Form from "../components/Form";

const NewTask = () => {
  const { id } = useParams();
  return (
    <>
      {id ? (
        <Form formTitle={"Update Task"} />
      ) : (
        <Form formTitle={"Add New Task"} />
      )}
    </>
  );
};

export default NewTask;
