import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainProvider } from "./providers/main-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="Квесты в реальности" />
      </head>
      <body>
        <MainProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </MainProvider>
      </body>
    </html>
  );
}
