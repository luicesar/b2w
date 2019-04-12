import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Logo = styled.img`
  margin-top: -30px;
  animation: App-logo-spin infinite 20s linear;
  height: 30vmin;
  pointer-events: none;
`;

export const Box = styled.div`
  width: 400px;
  height: 200px;
  border: 1.5px solid black;
  &p {
    padding-left: 1em;
  }
`;

export const Section = styled.section`
  max-width: 400px;
  margin: 0 auto;
  border: none;

  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 1.5px solid black;
  }

  .item {
    margin: 15px;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    font-size: 1em;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  display: flex;
  height: 55px;
  padding: 0 20px;
  margin-left: 10px;
  background: #63f5b0;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;

  &:hover {
    background: #52d89f;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
