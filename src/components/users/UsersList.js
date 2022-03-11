import React from "react";

import styles from "./UsersList.module.css";
import Card from "../ui/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((x) => {
          return (
            <li key={x.id}>
              {x.username} ({x.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
