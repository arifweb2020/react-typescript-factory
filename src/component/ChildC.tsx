import React from "react";

type propsType = {
  heading: string;
  course: {
    course: string;
    pin: number;
  };
};

function ChildC(props: propsType) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <p>
        {props.course.course} - {props.course.pin}
      </p>
    </div>
  );
}

export default ChildC;
