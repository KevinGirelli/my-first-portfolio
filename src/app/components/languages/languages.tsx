import Image from "next/image";

import "./languages.scss";

export function Languages() {
  return (
    <div className="infos">
      <h3>Languages</h3>
      <div className="languages-info">
        <span>
          <Image
              src="/brazil.svg"
              alt="Brazil"
              width={24}
              height={24}
              priority
            />
            PT-BR Native Speaker</span>
        <span>
          <Image
              src="/eua.svg"
              alt="Profile"
              width={24}
              height={24}
              priority
            />
            EN - Intermediate</span>
      </div>
    </div>
  );
}
