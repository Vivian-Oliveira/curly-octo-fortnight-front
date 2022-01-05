import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../../utils/MediaShare.json";
import { Contract } from "web3-eth-contract";
import {MediaShareContract} from "../../types/MediaShareContract";

declare let window: any;

export function useContract() {
  const [contract, setContract] = useState<MediaShareContract | null>(null);
  const contractAddress = "0x2D9F95DBA5e3Ddd529F56CbE72836D51Fc8AB289";
  const contractABI = abi.abi;

  async function fetchContract() {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract: any = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setContract(wavePortalContract);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContract();
  }, []);

  return {
    contract,
    fetchContract,
  };
}
