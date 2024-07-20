import "./myButton.css";

type ButtonProps = {
  children: string;
  type: "submit" | "button";
  click?: () => void;
};

function MyButton({ children, type, click }: ButtonProps) {
  return (
    <>
      <button type={type} onClick={click}>
        {children}
      </button>
    </>
  );
}

export default MyButton;
