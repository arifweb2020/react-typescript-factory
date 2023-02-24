import React from "react";

type propsType = {
  name: string;
  id: number;
  condition: boolean;
  conditioncheck: "sports" | "movies" | "riding";
};

function ChildA({ name, id, condition, conditioncheck }: propsType) {
  return (
    <div>
      <h1>Normal data type test</h1>
      <p>
        {name} - {id} - {condition ? "true" : "false"} - {conditioncheck}
      </p>
    </div>
  );
}

export default ChildA;
