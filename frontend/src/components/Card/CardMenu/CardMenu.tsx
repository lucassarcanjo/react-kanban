import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { MoreHorizontal } from "react-feather";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./CardMenu.styles";

export interface CardMenuProps {
  showButton: boolean;
  onEdit?: React.MouseEventHandler<HTMLDivElement>;
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
}

export const CardMenu: React.FC<CardMenuProps> = ({
  showButton,
  onEdit,
  onRemove,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={(value) => setOpen(value)}>
      <DropdownMenuTrigger visibility={showButton || open}>
        <MoreHorizontal />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={onEdit}>Editar</DropdownMenuItem>
        <DropdownMenuItem onClick={onRemove}>Excluir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};
