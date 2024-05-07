import Image from "next/image";

import "./header.scss"; 

export function Header(){
  return (
    <div className="header">
            <div>
              <h1>Hello, I'm Kévin! 👋</h1>
              <h2>Full Stack Developer</h2>
            </div>
            <Image
              src="/profile.svg"
              alt="Profile"
              width={325}
              height={325}
              priority
            />
          </div>
  )
}