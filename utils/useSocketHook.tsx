import { useEffect } from 'react'
import { initiatesocket, socket } from './socket'

export const useSocketHook = () => {
  useEffect(() => {
    if (!socket) {
      initiatesocket(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])
  return null
}
