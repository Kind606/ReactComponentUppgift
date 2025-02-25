import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import AboutPage from "./components/AboutPage";
import ForYouPage from "./components/ForYouPage";
import NotFoundPage from "./components/NotFoundPage";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ForYouPage />}></Route>
            <Route path="/" index element={<ForYouPage />}></Route>
            <Route path="/about" index element={<AboutPage />}></Route>
            <Route path="*" index element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </QueryClientProvider>
);
