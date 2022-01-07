import {useContract} from "../useContract";
import {useCallback, useEffect, useState} from "react";
import {Media} from "../../types/Media";
import { useWallet } from "../useWallet";
declare let window: any;

export function useMedias (){
    const { contract } = useContract();
    const { account } = useWallet();
    const [medias, setMedias] = useState([]);

    const getAllMedias = useCallback(async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const contractMedias = await contract?.getAllMedias()
                const mediasCleaned = contractMedias.map((media: Media )=> {
                    return {
                        id: Number(media.id),
                        sender: media.sender,
                        timestamp: new Date(media.timestamp * 1000),
                        media: media.media,
                    };
                });
                setMedias(mediasCleaned);
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error)
        }
    }, [contract]);

    useEffect(() => {
        getAllMedias();
    }, [contract, getAllMedias])

    return {
        medias,
        getAllMedias
    }
}
