// src/components/Alert.jsx

import clsx from "clsx";
import css from "./Alert.module.css";

export default function Alert({ variant, outlined, elevated, children }) {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
}
