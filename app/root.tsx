import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Box, Button, Container } from "@mui/material";
import Navbar from "~/components/Navbar";

// LINKS

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// INDEX.html

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className="min-h-screen
       bg-[#05365e]"
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// APP

export default function App() {
  return (
    <>
      <Navbar />
      <Container
        disableGutters
        maxWidth={false}
        className="bg-[#05365e] h-[100vh] w-full"
      >
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}

// ERROR BOUNDARY

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
      <Container sx={{ minWidth: "450px" }}>
        <main className="pt-16 p-4 container mx-auto">
          <h1 className=" justify-self-center text-6xl text-emerald-500">
            {message}
          </h1>
          <p className="justify-self-center text-6xl text-white">{details}</p>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}

          <Box sx={{ justifySelf: "center" }}>
            <NavLink to="/">
              <Button variant="contained" sx={{ m: 6, p: 6, fontSize: 50 }}>
                Back To Home
              </Button>
            </NavLink>
          </Box>
        </main>
      </Container>
    </>
  );
}
