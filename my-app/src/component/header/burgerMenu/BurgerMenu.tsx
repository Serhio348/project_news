import styled from "@emotion/styled";
import React, { useState } from "react";
import LeftNav from "./LeftNav";

type StyleBurgerType = {
  onClick: () => void;
}

const StyledBurger: any = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 360px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }: any) => open ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }: any) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }: any) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }: any) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }: any) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState<any>(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} />
    </>
  )
}

export default BurgerMenu;