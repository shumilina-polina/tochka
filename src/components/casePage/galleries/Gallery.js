import cn from "classnames";
import s from "./gallery.module.scss";

export const Gallery = ({ children, type = 1 }) => (
  <section className={cn(s.gallery, s[`type_${type}`])}>{children}</section>
);
