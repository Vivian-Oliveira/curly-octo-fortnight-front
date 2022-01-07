export interface MediaShareContract {
  sendMedia: (media: string) => void;
  getAllMedias: () => any;
  getTotalMedias: () => number;
  thankMedia: (mediaId: number, options: any) => void;
}
