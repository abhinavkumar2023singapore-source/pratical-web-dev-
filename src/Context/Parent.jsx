import Child from "./Child";
import UserContext from "./UserContext";

function Parent() {
  const message = "Context API Is Loading";

  return (
    <UserContext.Provider value={message}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Context API </h1>

        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default Parent;