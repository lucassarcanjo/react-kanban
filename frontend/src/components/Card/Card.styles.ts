import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div<{ isDragging?: boolean }>`
  background-color: #fff;
  border-radius: 4px;
  padding: 16px 12px;
  position: relative;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);

  ${({ isDragging }) =>
    isDragging &&
    css`
      box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
        rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    `}
`;

export const Title = styled.h3`
  overflow-wrap: anywhere;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Description = styled.div`
  overflow-wrap: anywhere;
`;

export const Editor = styled.textarea`
  width: 100%;
  background-color: #fff;

  ::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-top: 8px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
