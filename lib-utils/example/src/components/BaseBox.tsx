import { FC, PropsWithChildren } from "react";

const BaseBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        border: "1px solid #0A3069",
        marginBottom: "10px",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "16px",
        color: "#0A3069",
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default BaseBox;
