import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Main from "./containers/Main";
import Sidebar from "./containers/Sidebar";
import SidebarProvider from "./contexts/sidebar";
import en from "./translations/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App: React.FC = () => (
  <SidebarProvider>
    <Sidebar />
    <Main />
  </SidebarProvider>
);

export default App;
