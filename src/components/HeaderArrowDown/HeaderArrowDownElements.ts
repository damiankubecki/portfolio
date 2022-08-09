import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  animation: move 2s linear infinite;
  cursor: pointer;

  @keyframes move {
    0% {
      transform: translate(-50%, 0);
    }
    90% {
      transform: translate(-50%, 15px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;

export { Wrapper };