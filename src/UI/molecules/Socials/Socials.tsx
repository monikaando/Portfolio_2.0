import { StyledSocials } from "./Socials.sc";
import { ReactComponent as GithubIcon } from "assets/icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "assets/icons/linkedinIcon.svg";
import { ReactComponent as EmailIcon } from "assets/icons/emailIcon.svg";

import { links } from "assets/common/links";
const { github, linkedin, email } = links;

const Socials = () => {
  return (
    <StyledSocials>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
      <a href={email} target="_blank" rel="noopener noreferrer">
        <EmailIcon />
      </a>
    </StyledSocials>
  );
};
export default Socials;
