import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "../glitch.css";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Fullstack web developer based in Paris</CardTitle>
          <CardDescription>
            Passionate about new tech i always look for the latest innovations
            to make my work the fastest yet the most efficient. From a simple
            website to a complex app i will be happy to build it for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card className="w-3/4">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>Contact me</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <section>
        <h1>The Effect</h1>

        <div className="hero-container">
          <div className="environment"></div>
          <h2 className="hero glitch layers" data-text="jjxlabs">
            <span>jjxlabs</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
