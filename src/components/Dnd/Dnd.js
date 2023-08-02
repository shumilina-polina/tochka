import { useEffect, useRef } from "react";
import s from "./dnd.module.scss";
import classNames from "classnames";

export const Dnd = ({ i }) => {
  const dnd = useRef(null);

  useEffect(() => {
    var ball = dnd.current;
    var wr = document.getElementById("wr");
    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset,
      };
    }

    ball.onmousedown = function (e) {
      var coords = getCoords(ball);
      var shiftX = e.pageX - coords.left;
      var shiftY = e.pageY - coords.top;

      ball.style.position = "absolute";
      document.body.appendChild(ball);
      moveAt(e);

      ball.style.zIndex = 1000; // над другими элементами

      function moveAt(e) {
        ball.style.left = e.pageX - shiftX + "px";
        if (wr && e.pageY < wr.getBoundingClientRect().height) {
          ball.style.top = e.pageY - shiftY + "px";
        }
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      ball.onmouseup = function () {
        document.onmousemove = null;
        ball.onmouseup = null;
      };
    };

    ball.ondragstart = function () {
      return false;
    };
  }, []);

  // const handleMouseDown = (e) => {
  //   const coords = getCoords(dnd.current);
  //   console.log("e.pageX: ", e.pageX);
  //   var shiftX = e.pageX - coords.left;
  //   var shiftY = e.pageY - coords.top;

  //   // e.target.style.position = "absolute";
  //   // document.body.appendChild(e.target);
  //   moveAt(e);

  //   dnd.current.style.zIndex = 1000; // над другими элементами

  //   function moveAt(e) {
  //     dnd.current.style.left = e.pageX - shiftX + "px";
  //     dnd.current.style.top = e.pageY - shiftY + "px";
  //   }

  //   document.onmousemove = function (e) {
  //     moveAt(e);
  //   };

  //   dnd.current.onmouseup = function () {
  //     document.onmousemove = null;
  //     dnd.current.onmouseup = null;
  //   };
  // };

  return (
    <div
      className={classNames(s.dnd_element, "drag_" + i)}
      // onMouseDown={handleMouseDown}
      ref={dnd}
    >
      <img src={require(`assets/collaj/image_${i}.png`)} alt="Tochka" />
    </div>
  );
};
