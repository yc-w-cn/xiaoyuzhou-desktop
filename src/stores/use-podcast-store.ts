import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { getPodcastPageProps, PodcastPageProps } from "@/lib/xiaoyuzhou";
import { Draft, produce } from "immer";
import { getPodcastId } from "@/lib/xiaoyuzhou/utils";

interface PodcastState {
  podcasts: Record<string, PodcastPageProps>;
  subscribe: (url: string | null) => void;
  unsubscribe: (pid: string | null) => void;
  count: () => number;
}

export const usePodcastStore = create<PodcastState>()(
  devtools(
    persist(
      (set, get) => ({
        podcasts: {},
        subscribe: async (url: string | null) => {
          if (!url) {
            console.log("url not found");
            return;
          }
          const pid = getPodcastId(url);
          if (!pid) {
            console.log("pid not found");
            return;
          }
          const props = await getPodcastPageProps(url);
          set(
            produce((state: Draft<PodcastState>) => {
              state.podcasts[pid] = props;
            })
          );
        },
        unsubscribe: (pid: string | null) => {
          if (!pid) {
            console.log("pid not found");
            return;
          }
          set(
            produce((draft: Draft<PodcastState>) => {
              delete draft.podcasts[pid];
            })
          );
        },
        count: () => Object.keys(get().podcasts).length,
      }),
      {
        name: "podcasts-storage",
      }
    )
  )
);
