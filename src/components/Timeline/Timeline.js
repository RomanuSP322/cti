import React, { useEffect, useState } from "react";
import "./Timeline.css";

// Learning how to use useLayoutEffect
// https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
// https://reactjs.org/docs/hooks-reference.html#uselayouteffect
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = React.useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    // add for reflow or reposition on resize or scroll
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, deps);
};

// Event Item
const EventItem = (props) => {
  const timeItem = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  const checkElement = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  React.useEffect(() => {
    setIsVisible(checkElement(timeItem.current));
  }, []);

  useScrollPosition(({ currPos }) => {
    setIsVisible(checkElement(timeItem.current));
  });
  const { date, content, role, company, location, image } = props;
  return (
    <li ref={timeItem} className={isVisible ? "inView" : null}>
      <div className="event">
        <span className="description">
          <time className="event__year">{date}</time>
          <p className="description_content">{content}</p>
        </span>
        <img src={image} alt="img" className="event__image" draggable="false" />
      </div>
    </li>
  );
};

// Timeline
const Timeline = ({ events }) => {
  const scrollArea = React.useRef();

  const makeTimeline = (events) => {
    const evlist = events.map((item, idx) => {
      return (
        <EventItem
          date={item.date}
          content={item.content}
          role={item.role}
          company={item.company}
          location={item.location}
          key={idx}
          image={item.image}
        />
      );
    });
    return <ul>{evlist}</ul>;
  };

  return (
    <div className="timeline__wrapper" ref={scrollArea}>
      <section className="timeline__header">
        <div className="timeline__container">
          <h3 className="timeline__title">?????????????? ????????????????</h3>
          <p className="timeline__subtitle">
            ?????????? ???????????????????????? ???????????????????????? ?????? ?????????????? ?? 1992 ???????? ??????????????
            ???????????????????????? ??? ?????????????????????? ??????????, ?????????????????? ?? ?????????????? ????????????????????
            ?????????????????????? ???????????????????????????????? ????????????????????
          </p>
        </div>
      </section>

      <section className="timeline">
        <ul>{makeTimeline(events)}</ul>
      </section>
    </div>
  );
};

export default Timeline;
