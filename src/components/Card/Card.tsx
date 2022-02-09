import { ReactChild, ReactChildren, VFC } from "react";
import "./Card.css";

interface ICardContent {
  children: ReactChild | ReactChild[] | ReactChildren[];
  className?: string;
}

const Card: VFC<ICardContent> = ({ children, className = "" }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
