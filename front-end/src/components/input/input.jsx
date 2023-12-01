import { forwardRef } from "react";
import styles from "./style.module.scss"

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className= {styles.inputBox}>
      <label className="title textLabel">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className="">{error.message}</p> : null}
    </div>
  );
});