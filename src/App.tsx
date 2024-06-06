import "./global.css";
import podcastSvg from "./assets/podcast.svg";
import { usePodcastStore } from "./stores/use-podcast-store";
import { SubscribeButton } from "./components/subscribe-button";
import { Badge } from "./components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PodcastCard } from "./components/podcast-card";
import { NoDataCard } from "./components/no-data-card";

function App() {
  const count = usePodcastStore((state) => state.count());
  const podcasts = usePodcastStore((state) => state.podcasts);

  return (
    <div className="h-screen flex flex-col justify-between items-start w-screen">
      <div className="flex justify-between items-center border-b w-full">
        <div className="flex items-center">
          <img src={podcastSvg} className="w-[32px] m-2" />
          <span className="font-bold">小宇宙桌面版</span>
        </div>
        <div className="mr-2">
          <SubscribeButton />
        </div>
      </div>
      <div className="flex-grow p-2 flex flex-col gap-2 w-full">
        <div>
          <Badge variant="secondary">全部({count})</Badge>
        </div>
        <ScrollArea className="w-full">
          <div className="grid grid-cols-3 gap-2 w-full">
            {Object.values(podcasts).map((podcast) => (
              <PodcastCard
                key={podcast.props.pageProps.podcast.pid}
                props={podcast.props.pageProps.podcast}
              />
            ))}
            {Object.values(podcasts).length === 0 && ( <NoDataCard />) }
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;
