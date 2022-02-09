import "./Card.css";

import { ReactChild, ReactChildren, VFC } from "react";

interface ICardContent {
  children: ReactChild | ReactChild[] | ReactChildren[];
  className?: string;
}

const Card: VFC<ICardContent> = ({ children, className = "" }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
