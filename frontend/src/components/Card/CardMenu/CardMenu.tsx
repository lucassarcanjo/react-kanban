import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { MoreHorizontal, Trash2 } from "react-feather";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  MenuIconContainer,
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
  const [confirmRemove, setConfirmRemove] = useState(false);

  const checkRemove = () => {
    if (!confirmRemove) return;

    setConfirmRemove(false);
  };

  const handleRemove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    checkRemove();
    onRemove?.(e);
  };

  const confirmRemoveCard = (e: Event) => {
    e.preventDefault();
    setConfirmRemove(true);
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={(value) => setOpen(value)}>
      <DropdownMenuTrigger visibility={showButton || open}>
        <MoreHorizontal />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" onCloseAutoFocus={checkRemove}>
        <DropdownMenuItem onClick={onEdit}>Editar</DropdownMenuItem>
        {!confirmRemove && (
          <DropdownMenuItem onSelect={confirmRemoveCard}>
            Excluir
          </DropdownMenuItem>
        )}
        {confirmRemove && (
          <DropdownMenuItem onClick={handleRemove}>
            <MenuIconContainer>
              <Trash2 width={16} height={16} />
            </MenuIconContainer>
            Clique novamente para excluir
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};
