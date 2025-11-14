import classNames from "classnames";
import s from "./author.module.scss";

const Author = ({ footer = false,link, children }) => {
  return link ? (
    <a href={link} target='_blank' className={classNames(s.wr, footer && s.wr_footer)}>{children}</a>
  ) : (
    <div className={classNames(s.wr, footer && s.wr_footer)}>{children}</div>
  );
};

export default Author;
