import React from "react";
import FooterWrapper from "../Footer/FooterWrapper";
import FooterTitle from "../Footer/FooterTitle";
import FooterRow from "../Footer/FooterRow";
import FooterColumn from "../Footer/FooterColumn";
import FooterLink from "../Footer/FooterLink";

function FooterCompound() {
  return (
    <FooterWrapper>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink href="https://help.netflix.com/en/">FAQ</FooterLink>
          <FooterLink>Privacy</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Help Center</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Cookie Preferences</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Account</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
          <FooterLink>NIPPONFLIX Originals</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Media Center</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}

export default FooterCompound;
