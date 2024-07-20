import "./myButton.css";

type ButtonProps = {
  children: string;
  type: "submit" | "button";
  theme: "ok" | "cancel";
  click?: () => void;
};

function MyButton({ children, type, click, theme }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={click}
        style={
          theme === "ok"
            ? { backgroundColor: "blue", color: "white" }
            : { backgroundColor: "red", color: "black" }
        }
      >
        {children}
      </button>
    </>
  );
}

export default MyButton;
