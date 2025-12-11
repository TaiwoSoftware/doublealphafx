import { Button } from "@radix-ui/themes";

interface CustomButtonProps {
  buttonInnerText: string;
  handleClick: () => void;
}
const CustomButton = ({buttonInnerText,handleClick}:CustomButtonProps) => {
  return (
    <Button size={"3"} onClick={handleClick} variant="classic" className="customButton">
      {buttonInnerText}
    </Button>
  );
};

export default CustomButton;
