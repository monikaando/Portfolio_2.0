import { StyledSocials, StyledIcon } from "./Socials.sc";
import { links } from "assets/common/links";
const { github, linkedin, email } = links;
const Socials = () => {
  return (
    <StyledSocials>
      <StyledIcon href={github} target="_blank" rel="noopener noreferrer" />
      <StyledIcon href={linkedin} target="_blank" rel="noopener noreferrer" />
      <StyledIcon href={email} target="_blank" rel="noopener noreferrer" />
    </StyledSocials>
  );
};
export default Socials;
