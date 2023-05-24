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
              <CardTitle>Wordpress/Shopify website</CardTitle>
              <CardDescription>
                Beautiful website accepting payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <Card className="mt-12 min-w-full p-12">
        <CardHeader>
          <CardTitle>Proof of work</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Tennis reservation app</CardTitle>
              <CardDescription>
                I used NextJS, TypeScript, Tailwind and Prisma to build this app
              </CardDescription>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>Card Content</p>
              </CardContent>
            </div>
          </Card>
          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Landing page</CardTitle>
              <CardDescription>Example of a landing page ...</CardDescription>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>Card Content</p>
              </CardContent>
            </div>
          </Card>

          <Card className="w-4/4 mt-5">
            <CardHeader>
              <CardTitle>Worpress website</CardTitle>
              <CardDescription>coming..</CardDescription>
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
