import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  const [currentUsersList, setCurrentUsersList] = useState([]);

  const addEnteredUserHandler = (username, age) => {
    setCurrentUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: `u${Math.floor(Math.random() * 100)}`,
          username: username,
          age: age,
        },
      ];
    });
  };
  return (
    <div>
      <AddUser addEnteredUser={addEnteredUserHandler} />
      <UsersList users={currentUsersList} />
    </div>
  );
}

export default App;
