import React, { useState } from "react";

type propsType = {
  name: string;
  id: number;
  condition: boolean;
  conditioncheck: "sports" | "movies" | "riding";
  children: React.ReactNode;
  style: React.CSSProperties;
};

function ChildA({
  name,
  id,
  condition,
  conditioncheck,
  children,
  style,
}: propsType) {
  const [stud, setName] = useState("");
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Normal data type test</h1>
      <p style={style}>
        {name} - {id} - {condition ? "true" : "false"} - {conditioncheck}
      </p>
      {stud}
      <input type="text" value={stud} onChange={handleText} />
      {children}
    </div>
  );
}

export default ChildA;
