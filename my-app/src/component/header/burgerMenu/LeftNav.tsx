import React from 'react';
import styled from "@emotion/styled";

const Ul: any = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 40px;
  }
  @media (max-width: 360px) {
    flex-flow: column nowrap;
    font-size:2.5rem;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }: any) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    left: 0;
    height: 100%;
    width: 100ch;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav: React.FC<any> = ({ open }: any) => {
    return (
        <Ul open={open}>
            <li>News</li>
            <li>Blogs</li>
            <li>Registration</li>
            <li>Sign In</li>
            <li>Sign Up</li>
        </Ul>
    )
}

export default LeftNav