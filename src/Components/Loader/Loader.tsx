import React, { ReactElement } from "react";
import "./Loader.css";
import LoaderX from "react-loader-spinner";

export default function Loader(): ReactElement {
  return (
    <div className="loader_container">
      <LoaderX
        type="Grid"
        color="#FF8B37"
        height={70}
        width={70}
      />
    </div>
  );
}
