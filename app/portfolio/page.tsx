import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-16">
      <Card className="w-4/4 p-12">
        <CardHeader>
          <CardTitle>What can i build for you?</CardTitle>
          <CardDescription>
            I mainly use NextJS, TypeScript, Tailwind and Prisma for my work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>
                Fullstack app using authentification and interactions with a
                database
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <button className="btn btn-primary">Example</button>
            </div>
          </Card>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>
                Beautiful and simple app to showcase your project
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Work on your project</CardTitle>
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
