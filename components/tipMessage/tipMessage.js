import { useEffect, useState } from "react";
import cls from "classnames";
import s from "./tipMessage.module.css";

const tipMessage = ({ message }) => {
  const { text, type } = message;

  if (!text) return null;

  return (
    <div className={cls(s.message, type === "error" && s.error)}>{text}</div>
  );
};

export default tipMessage;
