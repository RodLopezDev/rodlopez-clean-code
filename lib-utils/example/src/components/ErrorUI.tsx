import { FC } from "react";
import BaseBox from "./BaseBox";

interface Props {
  message: string;
}

const ErrorUI: FC<Props> = ({ message }) => {
  return (
    <BaseBox>
      <div
        style={{
          backgroundColor: "rgba(250,56,62,.15)",
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          color: "#4b1113",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>ERROR</div>
          <div>Detail: {message}</div>
        </div>
      </div>
    </BaseBox>
  );
};

export default ErrorUI;
