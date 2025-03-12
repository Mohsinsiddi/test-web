import { NextResponse, NextRequest } from 'next/server'

const guestroutes = ['/login', '/register', '/', '/user-selection']

const hybridroutes = ['/onboarding']

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get('accessToken')

  if (hybridroutes.filter(el => path.includes(el)).length > 0) {
    return callnext(request)
  }

  if (!guestroutes.includes(path) && !token?.value?.length) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (guestroutes.includes(path) && token?.value?.length) {
    return NextResponse.redirect(new URL('/app/dashboard', request.url))
  }
  const url = new URL(request.url)
  const origin = url.origin
  const pathname = url.pathname
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)
  requestHeaders.set('x-origin', origin)
  requestHeaders.set('x-pathname', pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

const callnext = (request: NextRequest) => {
  const url = new URL(request.url)
  const origin = url.origin
  const pathname = url.pathname
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)
  requestHeaders.set('x-origin', origin)
  requestHeaders.set('x-pathname', pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/sso',
    '/onboarding',
    '/user-selection',
    '/app/hubs',
    '/app/hubs/:id',
    '/app/hubs/:id/sub-hubs',
    '/app/hubs/:id/sub-hubs/:id',
    '/app/add-new-driver',
    '/app/add-new-vehicle',
    '/app/carrier/:id',
    '/app/dashboard',
    '/app/driver-details/:id',
    '/app/drivers',
    '/app/edit-profile',
    '/app/master',
    '/app/message',
    '/app/notificatios',
    '/app/onboarding',
    '/app/order-history/:id',
    '/app/payment-confirmation',
    '/app/profile',
    '/app/purchase-order',
    '/app/reviews',
    '/app/rfq',
    '/app/rfq-details/:id',
    '/app/send-quote',
    '/app/track-order',
    '/app/transactions',
    '/app/vehicle-details/:id',
    '/app/vehicles',
    '/app/verify-details/:id'
  ]
}
