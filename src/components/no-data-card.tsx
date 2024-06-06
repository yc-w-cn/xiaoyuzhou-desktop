import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function NoDataCard() {
  return (
    <Card className="rounded-md h-[180px] overflow-hidden flex justify-center items-center">
      <CardHeader>
        <CardTitle>暂无订阅</CardTitle>
      </CardHeader>
    </Card>
  );
}
