import React from "react";
import { useState } from "react";

interface studentList {
  student: string;
}
function State() {
  const [name, setName] = useState<studentList>({
    student: "arif",
  });
  return (
    <div>
      <h1>How to use useState</h1>
      <p>{name.student}</p>
    </div>
  );
}

export default State;
