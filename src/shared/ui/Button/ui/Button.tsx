import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
