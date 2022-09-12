import styled from 'styled-components'
import { images } from 'assets/common/images'
const { background } = images

export const StyledApp = styled.div`
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  height:100vh;
`
