import React from 'react';
// import styled from 'styled-components';
import { useSelector } from "react-redux";
import { I18nProvider} from '../../locales';
// import translate from '../../locales/translate';


const Footer = () => {
  const language = useSelector(state => state.language);

  return (
    <I18nProvider locale={language}>
    </I18nProvider>
  );
}

export default Footer;