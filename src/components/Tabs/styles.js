import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  padding: 0 84px;
  background-color: ${Colors.blue};

  h1 {
    color: ${Colors.white};
    font-size: 24px;
    font-weight: bold;
    line-height: 42px;
    margin-bottom: 48px;
    padding-top: 86px;
    text-align: center;
    font-family: 'FuturaPT Bold', sans-serif;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    margin: 0 auto 50px auto;
    ${props =>
      props.open &&
      css`
        margin: 0 auto 50px -100px;
        width: 85vw;
        padding: 0 0px;
      `}
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${Colors.white};
  border: 1px solid ${Colors.primary};
  border-radius: 25px;
  padding: 10px 15px;
  margin-right: 20px;

  span {
    font-family: 'FuturaPT Regular', sans-serif;
    font-size: 14px;
  }

  ${props =>
    props.isActive &&
    css`
      color: ${Colors.white};
      background: ${Colors.primary};
      span {
        font-family: 'FuturaPT Bold', sans-serif;
        font-size: 16px;
        position: relative;
      }
    `}
`;
