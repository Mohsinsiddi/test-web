'use client'
import io, { Socket } from 'socket.io-client'
// MAin Dev URl
const baseURL = process?.env?.NEXT_PUBLIC_SOCKET_URL;
// Ng rock URL
// const baseURL = 'https://e3a5-150-129-206-7.ngrok-free.app';
let socket: Socket | undefined = undefined
const initiatesocket = (callback: () => void): Socket | undefined => {
  const token = localStorage.getItem('accessToken')
  // Don't proceed if token is missing
  if (!token) {
    console.error('Authentication token is missing')
    return
  }
  socket = io(`${baseURL}/`, {
    // path: "/connect-socket",
    // token: token,
    extraHeaders: {
      token: token
    },
    // Security risk: Disabled SSL verification
    // Uncomment only for development with self-signed certificates
    // rejectUnauthorized: false
  }).on('connect', () => {
    callback()
  })
  return socket;
}
const SOCKET_EVENTS = {
  SUCCESSFULLY_SUBSCRIBE: 'successfullySubscribe', //emit
  SUCCESSFULLY_SUBSCRIBE_TO_SUMMARIZE: 'successfullySubscribeToSummarize', //emit
  SUCCESSFULLY_SUBSCIBE_TO_LOCATION_UPDATE:
    'successfullySubscribeToLocationUpdate', //emit
  UPDATED_LOCATION: 'UpdatedLocations',
  LIVE_TRACKER_DATA: 'liveTrackerData',
  LAST_UPDATED_CALLED: 'lastUpdateCalled',
  RECORDED_UPDATED: 'RecordUpdated',
  ERROR: 'Error'
}

export { SOCKET_EVENTS, socket, initiatesocket }
