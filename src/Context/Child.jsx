import { useContext } from "react";
import UserContext from "./UserContext";

function Child() {
  const data = useContext(UserContext);

  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
}

export default Child;