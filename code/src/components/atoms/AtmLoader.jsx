import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { LOADING_DURATIONS } from '../../contexts/LoadingContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const rotateHand = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  transition: background-color ${LOADING_DURATIONS.fadeOut}ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  /* If it's the initial loader (first page load) and not exiting, render fully opaque immediately to avoid a brief flash
     when the app finishes mounting; when exiting, still play the fadeOut animation. */
  ${props => props.$initial
    ? (props.$isExiting
      ? css`animation: ${fadeOut} ${LOADING_DURATIONS.fadeOut}ms ease-in-out;`
      : css`animation: none; opacity: 1;`)
    : css`animation: ${props.$isExiting ? fadeOut : fadeIn} ${props.$isExiting ? LOADING_DURATIONS.fadeOut : LOADING_DURATIONS.fadeIn}ms ease-in-out;`
  }
`;

const ClockContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const ClockCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  transition: background-color ${LOADING_DURATIONS.fadeOut}ms ease-in-out;
  border-radius: 50%;
  position: absolute;
`;

const CenterDot = styled.div`
  width: 3.5px;
  height: 3.5px;
  background-color: ${props => props.theme.colors.background};
  transition: background-color ${LOADING_DURATIONS.fadeOut}ms ease-in-out;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const ClockHand = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  transition: background-color ${LOADING_DURATIONS.fadeOut}ms ease-in-out;
  transform-origin: bottom center;
  left: 50%;
  bottom: 50%;
  border-radius: 10px;
`;

const SlowHand = styled(ClockHand)`
  width: 4px;
  height: 12px;
  margin-left: -2px;
  animation: ${rotateHand} 1.5s linear infinite;
`;

const FastHand = styled(ClockHand)`
  width: 4px;
  height: 12px;
  margin-left: -2px;
  animation: ${rotateHand} 0.6s linear infinite;
`;

const AtmLoader = ({ isExiting = false, $initial = false }) => {
  return (
    <LoaderOverlay $initial={$initial} $isExiting={isExiting}>
      <ClockContainer>
        <ClockCircle />
        <SlowHand />
        <FastHand />
        <CenterDot />
      </ClockContainer>
    </LoaderOverlay>
  );
};

export default AtmLoader;
