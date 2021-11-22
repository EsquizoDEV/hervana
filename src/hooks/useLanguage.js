import { useContext } from 'react'
import LangContext from '../contexts/LanguageProvider'

const useLanguage = () => useContext(LangContext);

export default useLanguage;
    