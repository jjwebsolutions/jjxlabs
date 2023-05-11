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
          <CardTitle>Tech</CardTitle>
          <CardDescription>
            I mainly use NextJS, TypeScript, Tailwind and Prisma for my work
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
    </main>
  );
}
