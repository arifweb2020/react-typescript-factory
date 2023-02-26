import React, { useEffect, useState } from "react";
import "./App.css";
import ChildA from "./component/ChildA";
import ChildB from "./component/ChildB";
import ChildC from "./component/ChildC";
import ChildD from "./component/ChildD";
import Common from "./component/Common";
import Generics from "./component/Generics";
import State from "./component/State";
import UseStateTs from "./component/UseStateTs";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const res1 = await res.json();
      setData(res1);
    })();
  }, []);

  const list = [
    {
      school: "DCS",
      address: "MG Road Bangalore - 560029",
    },
  ];

  const alpha = ["A", "B", "C"];

  const tech = {
    course: "JAVA",
    pin: 12345,
  };

  interface propsType {
    name: string;
    username: string;
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "purple" }}>
        Welcome to React - Typescript
      </h1>
      <div>
        <h1>API CALL</h1>
        {data?.slice(0, 4)?.map((ele: propsType) => {
          return (
            <>
              <p>
                {ele.name}- {ele.username}
              </p>
            </>
          );
        })}
      </div>
      <div style={{ marginTop: "30px" }}>
        <UseStateTs/>
        <Generics
        items={["A","B","C"]}
        onClick={(item)=>console.log(item)}
        />
        <Generics
        items={[1,2,3]}
        onClick={(item)=>console.log(item)}
        />
         {/* <Generics

        items={[
          {
            id:1,
            first:"arif",
            last:"hussain"
          },
          {
            id:2,
            first:"virat",
            last:"kohli"
          }
        ]}

        onClick={(item)=>console.log(item)}
        /> */}
        <State/>
        <Common name="possible"/>
        <Common flag={true}/>
        <ChildA
          name="string checksss"
          id={23}
          condition={true}
          conditioncheck="sports"
          style={{color:'red'}}
        >
          <p>ChildA children props</p>
          </ChildA>
        <ChildB college={list} test="Array Check" name={alpha} apiData={data}/>
        <ChildC course={tech} heading="Object Test" />
        <ChildD />
      </div>
    </div>
  );
}

export default App;

// way to write
// interface ModalProps {
//   data: IMovie;
//   onClose: () => void;
// }

// const Modal = ({ data, onClose }: ModalProps) => {
//   console.log(data);
//   return <ModalContainer>{data.title}</ModalContainer>;
// };

// how to show api data in component using react typescript
