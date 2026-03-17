"use client";
import { useState, useEffect } from "react";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/i18n/config";

import "../../css/euclid-circular-a-font.css";
import "../../css/style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ModalProvider } from "../../context/QuickViewModalContext";
import { CartModalProvider } from "../../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function LocaleLayout({ children, params }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [locale, setLocale] = useState<Locale>("en");
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);

  useEffect(() => {
    async function loadLocale() {
      const resolvedParams = await params;
      const currentLocale = resolvedParams.locale as Locale;

      // Validate that the incoming `locale` parameter is valid
      if (!routing.locales.includes(currentLocale)) {
        notFound();
      }

      // Load messages for the locale
      const localeMessages = (await import(`../../../messages/${currentLocale}.json`)).default;

      setLocale(currentLocale);
      setMessages(localeMessages);
      setTimeout(() => setLoading(false), 1000);
    }

    loadLocale();
  }, [params]);

  if (!messages) {
    return (
      <html lang={locale} suppressHydrationWarning={true}>
        <body>
          <PreLoader />
        </body>
      </html>
    );
  }

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <Header />
                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            <Footer />
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
}
