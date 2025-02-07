"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export interface Activity {
    name: string
    shortDescription: string
    longDescription: string
    imageUrl: string
    contents: {
      title: string
      description: string
    }[]
  }

interface ActivitySectionProps {
  activity: Activity
  index: number
  isFocused: boolean
}

export default function ActivitySection({ activity, index, isFocused }: ActivitySectionProps) {
  return (
    <Card className={`md:mt-32 transition-all duration-300 ${isFocused ? "scale-105" : ""}`}>
      <CardHeader>
        <CardTitle className="md:text-3xl">{activity.name}</CardTitle>
        <CardDescription className="md:text-xl">{activity.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Image
              src={activity.imageUrl || "/placeholder.svg"}
              alt={activity.name}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">{activity.longDescription}</p>
            {activity.contents.map((content, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                <p>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

