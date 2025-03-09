import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Card className="max-w-md p-6 text-center shadow-lg">
        <CardContent>
          <h1 className="text-3xl font-bold mb-4">Welcome to TipJar 💰</h1>
          <p className="text-gray-600 mb-6">
            A simple platform where creators can receive tips from supporters.
          </p>
          <div className="space-y-3">
            <Link href="/profile">
              <Button className="w-full">Go to Profile</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full">
                View Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
