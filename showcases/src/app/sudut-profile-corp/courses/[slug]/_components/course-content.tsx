/* eslint-disable @next/next/no-img-element */
import { Play } from "lucide-react";

interface CourseContentProps {
  contents: string[];
}
export function CourseContent({ contents }: CourseContentProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Deskripsi Kelas</h2>

      <div className="space-y-4 text-gray-700 mb-8">
        {contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
        <p>Ini adalah video pembukaan kelas yang bisa kalian tonton gratis.</p>
      </div>

      {/* Video Player */}
      <div className="relative bg-gray-900 rounded-lg overflow-hidden">
        <div className="aspect-video relative">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Video preview"
            className="w-full h-full object-cover"
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 rounded-full p-4 transition-colors">
              <Play className="w-8 h-8 text-white fill-current" />
            </button>
          </div>

          {/* Video controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-4 text-white">
              <Play className="w-4 h-4" />
              <div className="flex-1 bg-gray-600 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
              </div>
              <span className="text-sm">45:01</span>
              <div className="flex gap-2">
                <button className="w-4 h-4 bg-white rounded-full"></button>
                <button className="w-4 h-4 bg-gray-400 rounded-full"></button>
                <button className="w-4 h-4 bg-gray-400 rounded-full"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
