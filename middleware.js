import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
// import { analytics } from "@utils/analytics";

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // Jeśli użytkownik NIE jest zalogowany i próbuje wejść na /management/* → przekierowanie na logowanie
  if (!token && pathname.startsWith("/management") && pathname !== "/management") {
    return NextResponse.redirect(new URL("/management", request.url));
  }

  // Jeśli użytkownik JEST zalogowany, ale nie ma przypisanej roli → blokujemy
  if (token && !token.role) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Ścieżka dostępna zarówno dla "user", jak i "admin"
  if (pathname === "/management/panel/galeria") {
    return NextResponse.next();
  }

  // Jeśli użytkownik NIE jest adminem i próbuje wejść na inne strony w /management/panel/*
  if (pathname.startsWith("/management/panel/") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //Analytics
  // if (request.nextUrl.pathname === '/') {
  //   // track analytics event
  //   try {
  //     await analytics.track("pageview", {
  //       page: '/',
  //       country: request.geo?.country
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const body = JSON.stringify({
  //   namespace: 'pageview',
  //   event: {
  //     page: pathname,
  //     country: request.geo?.country || 'unknown'  // Przekazuje 'unknown', jeśli kraj jest niezidentyfikowany
  //   }
  // });


  // try {
  //   // Wywołaj endpoint API z danymi o ruchu
  //   await fetch(`${request.nextUrl.origin}/api/analytics/track`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: body,
  //   });
  // } catch (error) {
  //   console.error('Błąd podczas śledzenia ruchu:', error);
  // }




  // Jeśli użytkownik jest zalogowany lub ścieżka nie jest chroniona, kontynuujemy przetwarzanie
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Definiujemy, dla jakich ścieżek middleware powinien być uruchamiany
export const config = {
  matcher: ['/management/:path*'], // Middleware uruchamia się dla każdej ścieżki zaczynającej się na /management dodać '/'
};
