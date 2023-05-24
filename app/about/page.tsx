import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <main className="flex  flex-col items-center  p-16">
      <Card className="min-w-full p-12">
        <CardHeader>
          <CardTitle>Fullstack web developer based in Paris</CardTitle>
          <CardDescription>
            Passionate about new tech i always look for the latest innovations
            to make my work the fastest yet the most efficient. From a simple
            website to a complex app i will be happy to build it for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>
                I mainly use NextJS, TypeScript, Tailwind and Prisma for my work
              </CardTitle>
              <CardDescription>..</CardDescription>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>Card Content</p>
              </CardContent>
              <button className="btn btn-primary p-5">Example</button>
            </div>
          </Card>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>..</CardDescription>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>Card Content</p>
              </CardContent>
              <button className="btn btn-primary p-5">Example</button>
            </div>
          </Card>

          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Web3</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}
