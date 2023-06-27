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
    <main className="flex  flex-col items-center mt-10  p-3 sm:p-16">
      <Card className="min-w-full sm:p-12">
        <CardHeader>
          <CardTitle>Fullstack web developer based in Paris</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>
                I mainly use NextJS, TypeScript, Tailwind and SQL database for
                my work
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>
                  Passionate about new tech i always look for the latest
                  innovations in web development to make my apps beautiful, fast
                  and the most secure possible. From a simple website to a
                  complex app i will be happy to build it for you.
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
                <p>Julien A.</p>
                <p> jj.websolutions@proton.me </p>
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
