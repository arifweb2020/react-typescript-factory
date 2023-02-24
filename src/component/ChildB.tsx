import React from "react";

type propsType = {
  test: string;
  //   name:Array<any>, it means u can give nay data types in array
  name: Array<string>;
  apiData: {
    name: string;
    username: string;
  }[];
  college: {
    school: string;
    address: string;
  }[];
};

function ChildB(props: propsType) {
  return (
    <div>
      <h1>{props.test}</h1>
      <p>
        {props.college[0].school} - {props.college[0].address}
      </p>
      <p>{props.name[0]}</p>
      {props.apiData?.slice(0, 4)?.map((ele) => {
        return (
          <>
            <p>
              {ele.name}- {ele.username}
            </p>
          </>
        );
      })}
    </div>
  );
}

export default ChildB;
