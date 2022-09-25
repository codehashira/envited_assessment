import React from "react";
import "./Button.css";
import { css } from "@emotion/css";
function BaseButton(props) {
  const { minWidth, fontSize, title, onClick } = props;
  return (
    <button
      className={css`
        min-width: ${minWidth}px;
        font-size: ${fontSize}px;
      `}
      style={{
        padding: "16px 21px",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "10px",
        background: "-webkit-linear-gradient(left, #8456ec, #e87bf8)",
        fontWeight: "700",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}

function ButtonMobile({ title, onClick }) {
  return (
    <BaseButton minWidth={180} fontSize={16} title={title} onClick={onClick} />
  );
}

function ButtonDesktop({ title, onClick }) {
  return (
    <BaseButton minWidth={320} fontSize={20} title={title} onClick={onClick} />
  );
}

export { ButtonMobile, ButtonDesktop };
