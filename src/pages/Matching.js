import * as React from "react";
// import { useState } from "react";
import { useState } from "react";

const Matching = () => {
  const [level, setLevel] = useState("");
  const onChangeLevel = (e) => {
    setLevel(e.target.value);
  };
  const onClickMatch = () => {
    let url = "http://localhost:3000/editor" + "?level=" + level;
    window.open(url, "_blank");
  };
  return (
    <div>
      <h1>Matching</h1>
      <p>매칭하기</p>
      <input placeholder="level" onChange={onChangeLevel}></input>
      <button onClick={onClickMatch}>매칭 시작</button>
    </div>
  );
};

export default Matching;
