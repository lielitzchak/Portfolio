import { useState } from "react";

const TestPageComponents = () => {
  const [Text, setText] = useState("test component home");

  return <div>{Text}</div>;
};

export default TestPageComponents;
