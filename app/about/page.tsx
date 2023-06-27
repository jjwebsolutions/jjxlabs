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
    <main className="flex  flex-col items-center mt-10  p-3 sm:pr-52 sm:pl-52 pt-5">
      <CardHeader>
        <CardTitle>Fullstack web dev based in Paris</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="w-4/4 mt-5">
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
                applications. Whether it's a simple website or a complex app, I
                am thrilled to bring your vision to life.
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
      </CardContent>
    </main>
  );
}
