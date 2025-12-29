import { Route, Routes, useLocation } from "react-router-dom";

import Error from "./pages/404";
import Index from "./pages/Index";
import Footer from "components/Footer/Footer";
import CasePage from "pages/CasePage";
import AllCasesPage from "pages/AllCasesPage";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  // Google Analytics
  useEffect(() => {
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-GZJCMDZKLE";
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-GZJCMDZKLE");
    }
  }, []);

  // Яндекс метрика
  useEffect(() => {
    if (!window.ym) {
      window.ym =
        window.ym ||
        function () {
          (window.ym.a = window.ym.a || []).push(arguments);
        };
      window.ym.l = new Date();

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://mc.yandex.ru/metrika/tag.js?id=106057763";
      document.head.appendChild(script);

      window.ym(106057763, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true,
      });
    }
  }, []);

  // PageView для всех аналитик
  useEffect(() => {
    // Google Analytics pageView
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
      });
    }

    // Mailru pageView
    window._tmr = window._tmr || [];
    window._tmr.push({
      id: "3704580",
      type: "pageView",
      start: new Date().getTime(),
    });

    if (!document.getElementById("tmr-code")) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.id = "tmr-code";
      script.src = "https://top-fwz1.mail.ru/js/code.js";
      document.head.appendChild(script);
    }

    // Yandex.Metrica pageView
    if (window.ym) {
      window.ym(106057763, "hit", window.location.pathname);
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/cases" element={<AllCasesPage />} />
        <Route path="/cases/:caseSlug" element={<CasePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
