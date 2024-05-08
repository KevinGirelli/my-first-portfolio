import { Email } from "../icons/email"
import { GitHubExtended } from "../icons/githubExtended"
import { LinkedInExtend } from "../icons/linkedinExtended"
import "./social.scss"

export function Social(){
  return(
    <div className="social-medias">
      <h3>Social Medias</h3>
      <div className="social-btn">
        <a href="https://www.linkedin.com/in/kevingirelli/">
          <LinkedInExtend/>
        </a>
        <a href="https://github.com/KevinGirelli">
          <GitHubExtended/>
        </a>
      </div>
      <a className="btn-primary" href="mailto:kevingirelli.gg@gmail.com">
        <Email/>
      </a>
    </div>
  )
}
