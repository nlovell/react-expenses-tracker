import React, { ReactChild, ReactChildren, VFC } from "react";
import "./Card.css";

interface ICardContent {
  children: ReactChild | ReactChild[] | ReactChildren[];
  className?: string;
}

/**
 * Styling container to generate a Card element
 *
 * @param ICardContent - card content with child elements and optional classNames
 * @returns JSX for a div wrapped in card formatting, and any other classNames passed in
 */
const Card: VFC<ICardContent> = ({ children, className = "" }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
