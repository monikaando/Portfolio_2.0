import styled from "styled-components";
import { images } from "assets/common/links";
const { background } = images;

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 0 4rem;
`;
export const StyledContent = styled.div``;
