
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const notifications = [
  {
    title: "feature 1",
    description: "description 1",
  },
  {
    title: "feature 2",
    description: "description 2",
  },

]
type CardProps = React.ComponentProps<typeof Card>


export default function ProjectCard({ className, ...props }:CardProps) {
  return (
    <Card className={cn("w-[250px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Project</CardTitle>
        <CardDescription>Sub heading</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4  items-start pb-4 last:mb-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
