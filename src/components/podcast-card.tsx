import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openBrowser } from "@/commands";
import { Podcast } from "@/lib/xiaoyuzhou";
import { getPodcastId, getPodcastUrl } from "@/lib/xiaoyuzhou/utils";
import { useMemo } from "react";
import { usePodcastStore } from "@/stores/use-podcast-store";
import dayjs from "dayjs";
import { Badge } from "./ui/badge";
import { ClockIcon } from "@radix-ui/react-icons";

interface Props {
  props: Podcast;
}

export function PodcastCard({ props }: Props) {
  const url = useMemo(() => getPodcastUrl(props.pid), [props.pid]);
  const { subscribe, unsubscribe } = usePodcastStore((state) => state);
  return (
    <Card className="rounded-md overflow-hidden">
      <img
        src={props.image.picUrl}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="m-0 py-2">
        <Badge variant="secondary">
          <ClockIcon strokeWidth={4} className="w-[16px] mr-1" />{" "}
          {dayjs(props.latestEpisodePubDate).format("YYYY年MM月DD日")}
        </Badge>
      </CardContent>
      <CardFooter className="grid grid-cols-3 p-0 border-t">
        <Button
          size="sm"
          variant="ghost"
          className="rounded-none"
          onClick={() => openBrowser(url)}
        >
          打开
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="rounded-none border-l"
          onClick={() => subscribe(url)}
        >
          刷新
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="rounded-none border-l"
          onClick={() => unsubscribe(getPodcastId(url))}
        >
          取消
        </Button>
      </CardFooter>
    </Card>
  );
}
