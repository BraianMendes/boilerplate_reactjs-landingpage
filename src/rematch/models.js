const checkLangBrowser = navigator.language;
let langBrowser = '';

if (checkLangBrowser && checkLangBrowser === 'pt-BR'){
  langBrowser = checkLangBrowser;
} else {
  langBrowser = 'en-US'
}

// languague model
export const language = {
    state: langBrowser,
    reducers: {
      setLanguage( state, payload) {
        return payload
      }
    }
  };

  export const contactSent = {
    state: false,
    reducers: {
      setContactSent( state, payload ){
        return payload
      }
    }
}

export const start = {
  state: true,
  reducers: {
    setStart( state, payload ){
      return payload
    }
  }
}

export const contactLoading = {
  state: false,
  reducers: {
    setContactLoading( state, payload ){
      return payload
    }
  }
}