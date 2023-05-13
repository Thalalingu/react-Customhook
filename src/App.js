import React from "react";
import "./style.css";
import useOnline from './useOnline'
export default function App() {

  const isonline = useOnline()
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {isonline ? <p>Start editing to see some magic happen :)</p> : null}
    </div>
  );
}
