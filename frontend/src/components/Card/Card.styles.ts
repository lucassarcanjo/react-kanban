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
  white-space: pre-wrap;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  ${({ primary }) =>
    primary &&
    css`
      background-color: #f5f5f5;
    `}

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ReadMoreButton = styled.button`
  color: #0079bf;
  background-color: transparent;
  text-align: right;
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 8px;
`;
