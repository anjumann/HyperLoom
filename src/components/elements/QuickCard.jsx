
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

import { ArrowRightIcon } from "@radix-ui/react-icons"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },

]


export default function QuickCard({ className, ...props }) {
  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Features</CardTitle>
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
      <CardFooter>
        <Button className="w-full group">
        Go to xyz <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300 " /> 
        </Button>
      </CardFooter>
    </Card>
  )
}
