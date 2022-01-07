import { useContract } from "../useContract";
import { ethers } from "ethers";

declare let window: any;

export function useContractMethods() {
  const { contract } = useContract();

  async function sendMedia(media: string) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        await contract?.sendMedia(media);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function thankMedia(mediaId: number) {
    const amount = ethers.utils.parseEther("0.01");
    try {
      const { ethereum } = window;

      if (ethereum) {
        await contract?.thankMedia(mediaId, { value: amount });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    sendMedia,
    thankMedia,
  };
}
