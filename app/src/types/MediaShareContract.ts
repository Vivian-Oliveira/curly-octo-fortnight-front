export interface MediaShareContract {
    sendMedia: (media: string) => void;
    getAllMedias: () => void;
    getTotalMedias: () => number;
}
