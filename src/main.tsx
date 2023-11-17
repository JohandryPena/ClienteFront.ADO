import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SessionProvider } from "./context/sessionContext.tsx";
import { UserProvider } from "./context/userContext.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SessionProvider>
    <UserProvider>
      <App />
      <Toaster richColors position="top-right" />
    </UserProvider>
  </SessionProvider>
);
