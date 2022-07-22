import styled, { keyframes } from 'styled-components';

import devImage from '../../assets/computer-programming.jpg';

const cursorAnimation = keyframes`
  0% {
    border-right: 2px solid var(--text-primary);
  }
  49% {
    border-right: 2px solid var(--text-primary);
  }
  50% {
    border-right: 2px solid transparent;
  }
  100% {
    border-right: 2px solid transparent;
  }
`;

const textAnimate = keyframes`
  0% {
    width: 0;
  }
  2.49% {
    width: 0;
  }
  2.5% {
    width: 2rem;
  }
  4.99% {
    width: 2rem;
  }
  5% {
    width: 3.2rem;
  }
  7.49% {
    width: 3.2rem;
  }
  7.5% {
    width: 4.5rem;
  }
  23.69% {
    width: 4.5rem;
  }
  23.7% {
    width: 3.2rem;
  }
  25.19% {
    width: 3.2rem;
  }
  25.2% {
    width: 2rem;
  }
  26.69% {
    width: 2rem;
  }
  26.7% {
    width: 0rem;
  }
  26.99% {
    width: 0rem;
  }
  27% {
    width: 1.6rem;
  }
  29.49% {
    width: 1.6rem;
  }
  29.5% {
    width: 2.8rem;
  }
  31.99% {
    width: 2.8rem;
  }
  32% {
    width: 3.8rem;
  }
  34.49% {
    width: 3.8rem;
  }
  34.5% {
    width: 5rem;
  }
  36.99% {
    width: 5rem;
  }
  37% {
    width: 6.2rem;
  }
  39.49% {
    width: 6.2rem;
  }
  39.5% {
    width: 7.5rem;
  }
  41.99% {
    width: 7.5rem;
  }
  42% {
    width: 8.8rem;
  }
  58.29% {
    width: 8.8rem;
  }
  58.3% {
    width: 7.5rem;
  }
  59.79% {
    width: 7.5rem;
  }
  59.8% {
    width: 6.2rem;
  }
  61.29% {
    width: 6.2rem;
  }
  61.3% {
    width: 5rem;
  }
  62.79% {
    width: 5rem;
  }
  62.8% {
    width: 3.8rem;
  }
  64.29% {
    width: 3.8rem;
  }
  64.3% {
    width: 2.8rem;
  }
  65.79% {
    width: 2.8rem;
  }
  65.8% {
    width: 1.6rem;
  }
  67.29% {
    width: 1.6rem;
  }
  67.3% {
    width: 0rem;
  }
  67.49% {
    width: 0rem;
  }
  67.5% {
    width: 2.2rem;
  }
  69.99% {
    width: 2.2rem;
  }
  70% {
    width: 3.5rem;
  }
  72.49% {
    width: 3.5rem;
  }
  72.5% {
    width: 4.8rem;
  }
  74.99% {
    width: 4.8rem;
  }
  75% {
    width: 5.4rem;
  }
  77.49% {
    width: 5.4rem;
  }
  77.5% {
    width: 6rem;
  }
  79.99% {
    width: 6rem;
  }
  80% {
    width: 7.2rem;
  }
  90.99% {
    width: 7.2rem;
  }
  91% {
    width: 6rem;
  }
  92.49% {
    width: 6rem;
  }
  92.5% {
    width: 5.4rem;
  }
  93.99% {
    width: 5.4rem;
  }
  94% {
    width: 4.8rem;
  }
  95.49% {
    width: 4.8rem;
  }
  95.5% {
    width: 3.5rem;
  }
  96.99% {
    width: 3.5rem;
  }
  97% {
    width: 2.2rem;
  }
  98.49% {
    width: 2.2rem;
  }
  98.5% {
    width: 0rem;
  }
  100% {
    width: 0rem;
  }
`;

const textAnimateSmallScreen = keyframes`
  0% {
    width: 0;
  }
  2.49% {
    width: 0;
  }
  2.5% {
    width: 1.6rem;
  }
  4.99% {
    width: 1.6rem;
  }
  5% {
    width: 2.6rem;
  }
  7.49% {
    width: 2.6rem;
  }
  7.5% {
    width: 3.7rem;
  }
  22.99% {
    width: 3.7rem;
  }
  23% {
    width: 2.6rem;
  }
  23.99% {
    width: 2.6rem;
  }
  24% {
    width: 1.6rem;
  }
  24.99% {
    width: 1.6rem;
  }
  25% {
    width: 0rem;
  }
  26.99% {
    width: 0rem;
  }
  27% {
    width: 1.3rem;
  }
  29.49% {
    width: 1.3rem;
  }
  29.5% {
    width: 2.3rem;
  }
  31.99% {
    width: 2.3rem;
  }
  32% {
    width: 3.1rem;
  }
  34.49% {
    width: 3.1rem;
  }
  34.5% {
    width: 4.1rem;
  }
  36.99% {
    width: 4.1rem;
  }
  37% {
    width: 5rem;
  }
  39.49% {
    width: 5rem;
  }
  39.5% {
    width: 6.1rem;
  }
  41.99% {
    width: 6.1rem;
  }
  42% {
    width: 7.1rem;
  }
  58.29% {
    width: 7.1rem;
  }
  58.3% {
    width: 6.1rem;
  }
  59.79% {
    width: 6.1rem;
  }
  59.8% {
    width: 5rem;
  }
  61.29% {
    width: 5rem;
  }
  61.3% {
    width: 4.1rem;
  }
  62.79% {
    width: 4.1rem;
  }
  62.8% {
    width: 3.1rem;
  }
  64.29% {
    width: 3.1rem;
  }
  64.3% {
    width: 2.3rem;
  }
  65.79% {
    width: 2.3rem;
  }
  65.8% {
    width: 1.3rem;
  }
  67.29% {
    width: 1.3rem;
  }
  67.3% {
    width: 0rem;
  }
  67.49% {
    width: 0rem;
  }
  67.5% {
    width: 1.8rem;
  }
  69.99% {
    width: 1.8rem;
  }
  70% {
    width: 2.9rem;
  }
  72.49% {
    width: 2.9rem;
  }
  72.5% {
    width: 3.9rem;
  }
  74.99% {
    width: 3.9rem;
  }
  75% {
    width: 4.3rem;
  }
  77.49% {
    width: 4.3rem;
  }
  77.5% {
    width: 4.8rem;
  }
  79.99% {
    width: 4.8rem;
  }
  80% {
    width: 5.8rem;
  }
  90.99% {
    width: 5.8rem;
  }
  91% {
    width: 4.8rem;
  }
  92.49% {
    width: 4.8rem;
  }
  92.5% {
    width: 4.3rem;
  }
  93.99% {
    width: 4.3rem;
  }
  94% {
    width: 3.9rem;
  }
  95.49% {
    width: 3.9rem;
  }
  95.5% {
    width: 2.9rem;
  }
  96.99% {
    width: 2.9rem;
  }
  97% {
    width: 1.8rem;
  }
  98.49% {
    width: 1.8rem;
  }
  98.5% {
    width: 0rem;
  }
  100% {
    width: 0rem;
  }
`;

const textRotate = keyframes`
  0% {
    transform: translateY(0);
  }
  26.7% {
    transform: translateY(0);
  }
  26.99% {
    transform: translateY(-2.6rem);
  }
  67.3% {
    transform: translateY(-2.6rem);
  }
  67.49% {
    transform: translateY(-5.4rem);
  }
  100% {
    transform: translateY(-5.4rem);
  }
`;

const textRotateSmallScreen = keyframes`
  0% {
    transform: translateY(0);
  }
  26.7% {
    transform: translateY(0);
  }
  26.99% {
    transform: translateY(-2.2rem);
  }
  67.3% {
    transform: translateY(-2.2rem);
  }
  67.49% {
    transform: translateY(-4.4rem);
  }
  100% {
    transform: translateY(-4.4rem);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  padding: 80px;

  h1 {
    font-size: 5.5rem;
    font-weight: 400;
    font-family: 'Water Brush', cursive;
    margin-bottom: -10px;
  }

  > div {
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
  }

  @media only screen and (max-width: 1250px) {
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;

    padding: 0;
    min-width: 340px;

    transform: translate(-50%, -50%);

    h1 {
      font-size: 4rem;
    }

    > div {
      width: 100%;
      text-align: left;
      font-size: 1.6rem;
    }
  }
`;

export const ImageContent = styled.section`
  background: var(--background-secondary) url(${devImage}) no-repeat center;
  background-size: cover;
  width: 50%;
  height: 100vh;

  @media only screen and (max-width: 1250px) {
    width: 100%;
    filter: brightness(10%);
    z-index: -1;
  }
`;

export const TextAnimation = styled.section`
  margin-left: 8px;
  padding-right: 2px;
  height: 40px;
  overflow: hidden;
  color: var(--primary);
  animation: ${cursorAnimation} 0.4s infinite, ${textAnimate} 9s infinite;
  width: 7.2rem;

  div {
    padding-left: 2px;
    animation: ${textRotate} 9s infinite;
  }

  @media only screen and (max-width: 1250px) {
    height: 32px;
    width: 5.8rem;
    animation: ${cursorAnimation} 0.4s infinite,
      ${textAnimateSmallScreen} 9s infinite;

    div {
      animation: ${textRotateSmallScreen} 9s infinite;
    }
  }
`;
