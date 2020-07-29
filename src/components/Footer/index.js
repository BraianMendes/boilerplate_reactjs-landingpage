import React from 'react';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { I18nProvider} from '../../locales';
import translate from '../../locales/translate';

// Images
// import Logo from '../images/logos/logo_beebuzz_branco.png'

const FooterContainer = styled(Grid)`
  background-color: #212121;
  padding-top: 12px;
  padding-bottom: 16px;
  & * {
    color: white;
  }
  @media screen and (max-width: 960px){
    padding-top: 32px;
  }
`

// const FooterItem = styled(Typography)`
//   opacity: 0.7;
//   font-weight: 700 !important;
//   &:hover {
//     text-decoration: underline;
//     cursor: pointer;
//   }
//   margin-bottom: 8px !important;
// `

// const SocialLinks = styled(Grid)`
//   & svg:hover {
//     cursor: pointer;
//   }
// `

// const FooterColumn = styled(Grid)`
//   @media screen and (max-width: 960px) {
//    margin-bottom: 24px !important;  
//   }
// `

const Line = styled(Grid)`
  border-bottom: 5px dotted #e0e0e0;
  border-width: 6px;
  opacity: 0.4;
  margin: 16px !important;
`

const LoginFooter = styled(Grid)`
  /* border-bottom: 0.5px solid rgba(224, 224, 224, 0.4); */
  padding: 24px 0;
  text-align: right;
  @media screen and (max-width: 960px) {
    text-align: center; 
  }
`

const LoginButton = styled(Button)`
  min-width: 150px !important;
  height: 50px;
  border-radius: 50px !important;
  margin-right: 16px !important;
  font-weight: 700 !important;
  text-transform: none !important;
`

const RegisterButton = styled(LoginButton)`
  background-color: var(--secondary) !important;
  &:hover {
    background-color: var(--lightsecondary) !important;
  }
`

const CopyRight = styled(Typography)`
  font-weight: 700 !important;
  opacity: 0.5 !important;

  & a{
    color: white;
    text-decoration: none;
  }

  & a:hover{
    color: gray;
  }
`

const FooterLogo = styled(Grid)`
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`

// const SocialLinksContainer = styled(Grid)`
//   justify-content: right;
//   @media screen and (max-width: 960px) {
//    justify-content: center; 
//   }
// `

// const TermsContainer = styled(Grid)`
//   @media screen and (max-width: 960px) {
//     text-align: center;
//     margin-bottom: 24px !important;
//   }
// `

const Footer = () => {
  const language = useSelector(state => state.language);

  return (
    <I18nProvider locale={language}>
      <FooterContainer container>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: 28 }}>
              <Grid container alignItems="center">
                
                <FooterLogo item xs={12} md={4}>
                  {/* <img src={Logo} alt="BeeBuzz" height="40px" /> */}
                </FooterLogo>
                <LoginFooter item xs={12} md={8}>
                  <LoginButton>
                    Login
                  </LoginButton>
                  <RegisterButton className="secondary animated">
                    {translate('footer.signBtn')}
                  </RegisterButton>
                </LoginFooter>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} style={{ padding: 16 }}>
              <Grid container>
                {/* <TermsContainer item xs={12} md={4}>
                  <FooterItem variant="body1" style={{ fontWeight: 700 }}>
                    {translate('footer.useTermsBtn')}
                  </FooterItem>
                  <FooterItem variant="body1" style={{ fontWeight: 700 }}>
                    {translate('footer.privTermsBtn')}
                  </FooterItem>
                </TermsContainer> */}
                
                {/* <Grid item xs={12} md={8}>
                  <Grid container>
                    <Grid item xs={12} md={8}>
                      <Grid container>
                        {columns.map(col => (
                          <FooterColumn item xs={12} md={3} style={{ textAlign: 'center' }}> */}
                            {/* {col.items.map(item => (
                              <FooterItem variant="body1">
                                {item.text}
                              </FooterItem>
                            ))} */}
                          {/* </FooterColumn>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}> */}
                      {/* <SocialLinksContainer container spacing={1}>
                        <SocialLinks item style={{ textAlign: 'center' }}>
                          <Instagram style={{ width: 30, height: 30 }} onClick={() => { handleSocial('instagram') }} />
                        </SocialLinks>
                        <SocialLinks item style={{ textAlign: 'center' }}>
                          <Facebook style={{ width: 30, height: 30 }} onClick={() => { handleSocial('facebook') }} />
                        </SocialLinks>
                        <SocialLinks item style={{ textAlign: 'center' }}>
                          <Pinterest style={{ width: 30, height: 30 }} onClick={() => { handleSocial('pinterest') }} />
                        </SocialLinks>
                        <SocialLinks item style={{ textAlign: 'center' }}>
                          <Twitter style={{ width: 30, height: 30 }} onClick={() => { handleSocial('twitter') }} />
                        </SocialLinks>
                      </SocialLinksContainer> */}
                      
                    {/* </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
            {/* </Grid> */}
            <Line item xs={12} />
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <CopyRight variant="caption">
                {translate('footer.rights')}<a href="https://impactinggroup.com">Impacting Group</a>
              </CopyRight>
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
    </I18nProvider>
  );
}

export default Footer;