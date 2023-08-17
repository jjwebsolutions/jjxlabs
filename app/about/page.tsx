import "../glitch.css";

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
    <main className="flex  flex-col items-center mt-10   p-3 xl:pr-96 xl:pl-96 pt-5">
      <CardHeader>
        <CardTitle className="text-xl lg:text-3xl text-center">
          Fullstack web developer based in Paris
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="w-4/4 mt-5 card1">
          <CardHeader>
            <CardTitle>
              I mainly use NextJS, TypeScript, Tailwind and SQL database for my
              work
            </CardTitle>
          </CardHeader>
          <div className="flex justify-between">
            <CardContent className="pt-6">
              <p>
                I always pursue the latest innovations in web development. My
                work is to create beautiful, fast, and highly secure
                applications. Whether it is a simple website or a complex app, I
                am thrilled to bring your vision to life.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="w-4/4 mt-5 card2">
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
      </CardContent>
    </main>
  );
}
