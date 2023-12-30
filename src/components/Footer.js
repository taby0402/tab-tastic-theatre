// Includes the footer section with contact information, social media links, etc.
// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  /* Other footer styles */
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Footer content styles */
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  /* Social links styles */
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                {/* Footer content */}
                <SocialLinks>
                    {/* Social links */}
                </SocialLinks>
            </FooterContent>
        </FooterWrapper>
    );
}

export default Footer;
