import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Sidebar from "./containers/Sidebar";
import SidebarProvider from "./contexts/sidebar";
import en from "./translations/en";
import Users from "./containers/Users";
import User from "./containers/User";
import UsersProvider from "./contexts/users";
import NewUser from "./containers/NewUser";

// Create a client
const queryClient = new QueryClient();

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
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <UsersProvider>
          <Sidebar />
          <Main>
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/client" element={<></>} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/new" element={<NewUser />} />
              <Route path="/users/:userEmail" element={<User />} />
              <Route path="/settings" element={<></>} />
            </Routes>
          </Main>
        </UsersProvider>
      </SidebarProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
