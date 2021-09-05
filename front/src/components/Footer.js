import { Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Made with ❤️
        <Link href="https://madatbay.com" target="_blank">
          {" "}
          by Madat Bay
        </Link>
      </p>
      <div className="link-group">
        <Link href="https://github.com/madatbay">
          <GitHubIcon />
        </Link>
        <Link href="https://madatbay.com">
          <LanguageIcon />
        </Link>
        <Link href="https://twitter.com/madatbay">
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
}
