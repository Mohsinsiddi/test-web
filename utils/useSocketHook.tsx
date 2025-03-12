import { useEffect } from 'react'
import { initiatesocket, socket } from './socket'

export const useSocketHook = () => {
  useEffect(() => {
    try {
         if (!socket) {
           initiatesocket(() => {
             console.log('Socket initialized successfully');
           })
         }
       } catch (error) {
         console.error('Failed to initialize socket:', error);
         // Consider adding proper error reporting or retry mechanism
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])
  return null
}
