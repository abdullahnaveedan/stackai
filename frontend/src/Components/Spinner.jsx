import React from "react";
import { Oval, ThreeDots } from "react-loader-spinner";

export function Spinner() {
  return (
    <div>
      <Oval
        visible={true}
        height="20"
        width="20"
        color="#ffffff "
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export function Chatspinner() {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#cb8a99"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
