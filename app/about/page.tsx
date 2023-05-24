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
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>
                  If you need specific tech i can always adapt if it makes sense
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>Send me an email at .. </p>
              </CardContent>
            </div>
          </Card>

          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Web3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you are coming from web3 and want to build a project i will
                be happy to talk about it with you
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}
