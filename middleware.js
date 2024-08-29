import { NextResponse, NextRequest } from "next/server";
import { analytics } from "@utils/analytics";

// Definiujemy ścieżki, które mają być chronione

const protectedPaths = ['/management'];

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  // Sprawdzamy, czy ścieżka jest chroniona i czy użytkownik nie jest zalogowany
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    // Sprawdzenie, czy użytkownik próbuje uzyskać dostęp do strony logowania
    if (pathname === '/management') {
      // Pozwalamy na dostęp do strony logowania
      return NextResponse.next();
    }

    if (pathname === '/management/rejestracja') {
      return NextResponse.next();
    }

    // Sprawdzenie, czy użytkownik jest zalogowany. W tym przypadku sprawdzamy ciasteczko `next-auth.session-token`
    const token = request.cookies.get('next-auth.session-token');

    if (!token) {
      // Jeśli użytkownik nie jest zalogowany, przekierowujemy na stronę logowania
      const loginUrl = new URL('/management', request.url);
      return NextResponse.redirect(loginUrl);
    }
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
