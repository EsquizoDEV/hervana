import React, { Component } from 'react';
const texts_es = require('../translations/es.json')
const LangContext = React.createContext({
        language: 'es',
        texts: {},
        translations: {},
        changeLanguage: () => {},
        getText: () => {},
});


export class LanguageProvider extends Component {

    state = {
        language: 'es',
        texts: texts_es,
        translations: {
            "es": texts_es
        },
    }
    
    getText = (url, section, id) => {
        return this.state.texts[url][section][id];
    }

    changeLanguage = (e) => {
        let language = e.target.checked ? 'es' : 'en';
        if (this.state.translations[language] == undefined) {
            let { translations } = this.state;
            
            translations[language] = require(`../translations/${language}.json`);
            
            this.setState({
                ...this.state,
                texts: translations[language],
                translations: translations
            });
        } 
        this.setState({ 
            ...this.state,
            language: e.target.checked ? 'es' : 'en',
            texts: this.state.translations[language],
        });
    }

    render() {
        return (
            <LangContext.Provider
                value={{
                    language: this.state.language,
                    changeLanguage: this.changeLanguage,
                    texts: this.state.texts,
                    getText: this.getText,
                    translations: this.state.translations
                }}
            >
                {this.props.children}
            </LangContext.Provider>
        );
    }
}

export default LangContext;