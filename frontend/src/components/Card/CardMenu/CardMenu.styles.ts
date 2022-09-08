import styled from "@emotion/styled";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface MenuTriggerProps {
  visibility: boolean;
}

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {
  shouldForwardProp(propName) {
    return propName !== "visibility";
  },
})<MenuTriggerProps>`
  position: absolute;
  top: 4px;
  right: 10px;
  cursor: pointer;
  display: flex;
  visibility: ${({ visibility }) => (visibility ? "visible" : "hidden")};
  align-items: center;
  padding: 2px;
  justify-content: center;
  border-radius: 50%;
  color: #949494;

  &:hover {
    background-color: #efefef;
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  background-color: #fff;
  padding: 8px 0;
  border-radius: 4px;
  z-index: 100;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  padding: 4px 16px;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #efefef;
  }
`;

export const MenuIconContainer = styled.div`
  margin-right: 4px;

  svg {
    display: block;
    margin: 3px 0;
  }
`;
