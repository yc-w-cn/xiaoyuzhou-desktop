import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { usePodcastStore } from "@/stores/use-podcast-store";
import { DEFAULT_PODCAST_URL } from "@/lib/xiaoyuzhou/constants";
import { Input } from "@/components/ui/input";

export function SubscribeButton() {
  const subscribe = usePodcastStore((state) => state.subscribe);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          订阅
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>订阅新的博客</DialogTitle>
          <DialogDescription className="py-2">
            <Input className="w-[450px] text-xs" value={DEFAULT_PODCAST_URL} />
          </DialogDescription>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                variant="default"
                size="sm"
                onClick={() => subscribe(DEFAULT_PODCAST_URL)}
              >
                订阅
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
