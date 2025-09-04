import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import theme from "@/theme";
import NProgressProviders from "@/lib/nprogress.wrapper";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import Copyright from "@/components/copyright/Copyright";
import StoreProvider from "@/components/StoreProvider";
import { ToastProvider } from "@/utils/toast";
import ChatButton from "@/components/chatButton/ChatButton";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <InitColorSchemeScript attribute="class" />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <NProgressProviders>
                <ToastProvider>
                  <Header />

                  {props.children}

                  <Footer />

                  <Copyright />

                  <ChatButton />
                </ToastProvider>
              </NProgressProviders>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
