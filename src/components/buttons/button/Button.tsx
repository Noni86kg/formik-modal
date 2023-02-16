import "./Button.scss";
import { Props } from "./Type";

const Button = ({
  title,
  handleOnClick,
  className,
  theme = "info",
  name,
  type = "button",
}: Props) => {
  const classNameProps = `button button--${theme} ${className}`;
  return (
    <button
      type={type}
      name={name}
      className={classNameProps}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
};

export default Button;
