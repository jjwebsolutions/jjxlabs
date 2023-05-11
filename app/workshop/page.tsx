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
    <main className="flex  flex-col items-center  p-16">
      <Card className="min-w-full p-12">
        <CardHeader>
          <CardTitle>What can i build for you?</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Fullstack app</CardTitle>
              <CardDescription>
                Using authentification and interactions with a database
              </CardDescription>
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
              <CardTitle>Simple app</CardTitle>
              <CardDescription>
                Beautiful app to showcase your project
              </CardDescription>
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
