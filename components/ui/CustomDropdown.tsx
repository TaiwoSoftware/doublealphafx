import { DropdownMenu } from "radix-ui";
import List from "../List";
import { ReactNode } from "react";

interface CustomDropdownProps {
  forwardedList: string;
  Children: ReactNode;
}

const CustomDropdown = ({ forwardedList, Children }: CustomDropdownProps) => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <List listItem={forwardedList} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <div>
            <DropdownMenu.Content sideOffset={5}>
              {Children}
            </DropdownMenu.Content>
          </div>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default CustomDropdown;
