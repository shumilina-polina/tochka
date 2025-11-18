import classNames from "classnames";
import s from "./author.module.scss";

const Author = ({ footer = false, children }) => {
  return (
    <div
      className={classNames(s.wr, footer && s.wr_footer)}
    >
      {children}
    </div>
  );
};

export default Author;
