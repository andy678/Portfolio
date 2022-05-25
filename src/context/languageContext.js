import React from "react"

export const languageEN = true

localStorage.setItem("language", languageEN)

export const LanguageContext = React.createContext(languageEN)