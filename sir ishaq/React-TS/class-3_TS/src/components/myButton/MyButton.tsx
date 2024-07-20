import "./myButton.css";

type ButtonProps = {
  children: string;
  type: "submit" | "button";
  theme?: "ok" | "cancel";
  onClick?: () => void;
};

function MyButton({ children, type, onClick, theme }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
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
