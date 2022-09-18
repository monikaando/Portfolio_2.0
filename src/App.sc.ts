import styled from "styled-components";
import { images } from "./assets/common/links";
const { background } = images;

export const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  height: auto;
  padding: 0 7rem;
`;
export const StyledContent = styled.div``;
