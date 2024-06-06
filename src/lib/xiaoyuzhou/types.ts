// 定义播客的接口
export interface Podcast {
  type: "PODCAST";
  pid: string;
  title: string;
  author: string;
  brief: string;
  description: string;
  subscriptionCount: number;
  image: {
    picUrl: string;
    largePicUrl: string;
    middlePicUrl: string;
    smallPicUrl: string;
    thumbnailUrl: string;
  };
  color: {
    original: string;
    light: string;
    dark: string;
  };
  topicLabels: string[];
  syncMode: string;
  episodes: Episode[];
  episodeCount: number;
  latestEpisodePubDate: string; // ISO 8601 datetime format
  subscriptionStatus: "ON" | "OFF";
  subscriptionPush: boolean;
  subscriptionPushPriority: "HIGH" | "NORMAL";
  subscriptionStar: boolean;
  status: "NORMAL" | "SUSPENDED";
  permissions: {
    name:
      | "SHARE"
      | "COMMENT"
      | "VOICE_COMMENT"
      | "COMMENT_PAGE"
      | "CLAP"
      | "PICK"
      | "VOTE";
    status: "PERMITTED" | "DENIED";
  }[];
  payType: "FREE" | "PAY_EPISODE_PODCAST";
  payEpisodeCount: number;
  podcasters: PodCaster[];
  readTrackInfo: any; 
  hasPopularEpisodes: boolean;
  contacts: any[]; 
  wechatShare: {
    style: "LINK_CARD";
  };
  labels: any[]; 
  sponsors: any[]; 
  isCustomized: boolean;
  ipLoc: string;
  transcript: {
    mediaId: string;
  };
}

// 定义单集播客的接口
export interface Episode {
  type: "EPISODE";
  eid: string;
  pid: string;
  title: string;
  shownotes: string;
  image: {
    picUrl: string;
    largePicUrl: string;
    middlePicUrl: string;
    smallPicUrl: string;
    thumbnailUrl: string;
  };
  enclosure: {
    url: string;
  };
  isPrivateMedia: boolean;
  mediaKey: string;
  media: {
    id: string;
    size: number;
    mimeType: string;
    source: {
      mode: "PUBLIC";
      url: string;
    };
  };
  clapCount: number;
  commentCount: number;
  playCount: number;
  favoriteCount: number;
  pubDate: string; // ISO 8601 datetime format
  status: "NORMAL";
  duration: number;
}

export interface PodCaster{
  type: "USER";
  uid: string;
  avatar: {
    picture: {
      picUrl: string;
      largePicUrl: string;
      middlePicUrl: string;
      smallPicUrl: string;
      thumbnailUrl: string;
      format: string;
      width: number;
      height: number;
    };
  };
  nickname: string;
  isNicknameSet: boolean;
  bio: string;
  gender: "MALE" | "FEMALE" | "THIRD";
  isCancelled: boolean;
  readTrackInfo: any; 
  ipLoc: string;
}

// 定义页面属性的类型
export type PodcastPageProps = {
  props: {
    pageProps: {
      podcast: Podcast;
      brand: any; 
    }
    __N_SSG: boolean;
  }
  page: string;
  query: {
    id: string;
  };
  buildId: string;
  assetPrefix: string;
  isFallback: boolean;
  gsp: boolean;
  customServer: boolean;
  scriptLoader: any[];
};
