import cn from "classnames";
import s from "./gallery.module.scss";

export const Gallery = ({ children, type = 1, mb = false, cln = "" }) => (
  <section
    className={cn(
      s.gallery,
      s[`type_${type}`],
      mb ? s.mb : "",
      s[`class_${cln}`]
    )}
  >
    {children}
  </section>
);
