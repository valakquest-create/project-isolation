"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils";
import { countInfoPosition } from "../utils";
import { InfoBlock } from "./info-block";

export const CharacteristicsItem = ({
  title,
  content,
  info,
  className,
}: {
  title: string;
  content: React.ReactNode;
  info?: React.ReactNode;
  className?: string;
}) => {
  const [isShown, setIsShown] = useState(false);
  const [body, setBody] = useState<HTMLElement | null>(null);
  const infoTrigger = useRef<HTMLElement>(null);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      const target = e.target;

      if (target && target !== infoTrigger.current) {
        setIsShown(false);
      }
    };

    window.addEventListener("click", callback);

    return () => {
      window.removeEventListener("click", callback);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsShown(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setBody(document.body);
  }, []);

  const handleMouseOver = () => {
    setIsShown(true);
  };

  const handleMouseOut = () => {
    setIsShown(false);
  };

  const handleClick = () => {
    setIsShown(true);
  };

  return (
    <li className="characteristics__item">
      <div className="characteristics__title">
        <div className="characteristics__title-text">{title}</div>
        {info && body && (
          <>
            <span
              className="characteristics__info"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
              ref={infoTrigger}
            ></span>
            {createPortal(
              <InfoBlock
                isShown={isShown}
                position={countInfoPosition(infoTrigger.current)}
              >
                {info}
              </InfoBlock>,
              body,
            )}
          </>
        )}
      </div>
      <div className={cn("characteristics__content", className)}>{content}</div>
    </li>
  );
};
