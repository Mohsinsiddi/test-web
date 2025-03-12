'use-client'
import io, { Socket } from 'socket.io-client'
// MAin Dev URl
const baseURL = process?.env?.NEXT_PUBLIC_SOCKET_URL;
// Ng rock URL
// const baseURL = 'https://e3a5-150-129-206-7.ngrok-free.app';
let socket: Socket | undefined = undefined
const initiatesocket = (callback: any) => {
  const token = localStorage.getItem('accessToken')
  socket = io(`${baseURL}/`, {
    // path: "/connect-socket",
    // token: token,
    extraHeaders: {
      token: token!
    },
    rejectUnauthorized: false
  }).on('connect', () => {
    callback()
  })
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
