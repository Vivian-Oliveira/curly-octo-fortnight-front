export interface MediaShareContract {
    sendMedia: (media: string) => void;
    getAllMedias: () => any;
    getTotalMedias: () => number;
}
