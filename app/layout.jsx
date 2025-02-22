import Provider from "@/components/Provider";
import Nav from "@/components/Nav";

import "@/styles/global.css";


export const metadata = {
  title: "Vprompt",
  description: "Discover & Share Prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
