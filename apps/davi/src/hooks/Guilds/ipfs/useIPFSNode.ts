import { useEffect, useState } from 'react';
import * as IPFS from 'ipfs-core';
import CID from 'cids';

export default function useIPFSNode() {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ipfs, setIpfs] = useState<IPFS.IPFS>(null);

  useEffect(() => {
    async function start() {
      setIsReady(false);
      console.log({ ipfs });
      if (!ipfs) {
        console.log(window.ipfs);
        // Check existing ipfs instance
        if (window.ipfs) {
          setIpfs(window.ipfs);
          setIsReady(true);
        } else {
          // Create new ipfs instance
          try {
            console.log('create');
            const newNode = await IPFS.create();
            setIpfs(newNode);
            window.ipfs = newNode;
            console.debug('[useIPFSNode] Initialized IPFS instance.');
            setIsReady(true);
          } catch (e) {
            console.error('[useIPFSNode] Error initializing IPFS instance.', e);
            setHasError(true);
          }
        }
      }
    }

    start();
  }, []); //eslint-disable-line

  async function add(content: string) {
    console.log('add');
    console.log(window.ipfs);
    if (!isReady) return null;

    const { cid } = await window.ipfs.add(content);
    console.debug(`[useIPFSNode] Added content with CID ${cid.toString()}.`);
    return cid.toString();
  }

  async function pin(hash: string) {
    if (!isReady) return null;

    const cid = new CID(hash);
    console.debug('[useIPFSNode] Pinning IPFS CID', cid);
    return ipfs.pin.add(cid.toString());
  }

  return { ipfs, isReady, hasError, pin, add };
}
