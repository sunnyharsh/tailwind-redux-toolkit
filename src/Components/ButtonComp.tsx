// import { render } from "react-dom"

type ButtonCompProps = {
  onClickEvent: () => void;
  label: string;
  style?: React.CSSProperties;
};

const ButtonComp = ({ style, label, onClickEvent }: ButtonCompProps) => {
  return (
    <>
      <button style={style} onClick={onClickEvent}>
        {label}
      </button>
    </>
  );
};

export default ButtonComp;
