import {useContract} from "../useContract";
declare let window: any;

export function useContractMethods (){
    const { contract } = useContract();

    async function sendMedia(media: string){
        try {
            const { ethereum } = window;

            if (ethereum) {
                contract?.sendMedia(media)
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        sendMedia
    }
}
