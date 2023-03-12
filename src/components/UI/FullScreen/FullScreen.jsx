import style from "./FullScreen.module.css";

const FullScreen = ({ children }) => {
  return <div className={style.bg}>{children}</div>;
};

export default FullScreen;
