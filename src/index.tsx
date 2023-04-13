import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";

import "./index.css";
import App from "./App";
import ptBR from "./ptBR";

const Application: React.FC = () => {
  return (
    <IntlProvider messages={ptBR} locale="pt-BR" defaultLocale="pt-BR">
      <App />;
    </IntlProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
