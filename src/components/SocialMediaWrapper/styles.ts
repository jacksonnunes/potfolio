import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  left: 0;
  bottom: 0;

  padding: 5px 55px;

  div {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 50%;
    padding: 15px;
    margin: 10px;

    cursor: pointer;

    svg {
      font-size: 2.2rem;
      color: var(--text-primary);
      transition: 0.4s linear;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: 0.2s linear;
    }

    &:hover:before {
      border-radius: 50%;
      border-left: 6px solid;
      border-right: 6px solid;
      transform: skewX(16deg);
      color: var(--text-primary);
    }

    &:hover:after {
      border-radius: 50%;
      border-top: 6px solid;
      border-bottom: 6px solid;
      transform: skewY(-16deg);
      color: var(--text-primary);
    }
  }

  @media only screen and (max-width: 1250px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 700px) {
  }
`;
