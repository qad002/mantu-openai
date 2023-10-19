import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons, loadTheme } from "@fluentui/react";

import "./index.css";

import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage";
import Chat from "./pages/chat/Chat";
import { AppStateProvider } from "./state/AppProvider";

// Initialize Fluent UI icons
initializeIcons();

// Customize Fluent UI theme
loadTheme({
    palette: {
        themeDarker:'#742a7d',
        themeDark:'#83418b',
        themeDarkAlt:'#a96fb0',
        themePrimary:'#8e5594',
        themeSecondary:'#bc7bc5',
        themeTertiary:'#c7aacb',
        themeLight:'#f4c7e7',
        themeLighter:'#f9deef',
        themeLighterAlt:'#fceff9'
    },
});

export default function App() {
    return (
        <AppStateProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Chat />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </AppStateProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);





