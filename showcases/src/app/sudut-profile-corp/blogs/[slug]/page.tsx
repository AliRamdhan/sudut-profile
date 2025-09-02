/* eslint-disable @next/next/no-img-element */
import {
  Calendar,
  Clock,
  Share2,
  Heart,
  MessageCircle,
  Send,
  ThumbsUp,
  Reply,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

// Mock data - in a real app, this would come from your CMS or database
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getBlogPost = (slug: string) => {
  return {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
    content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and frameworks emerging regularly. As we move through 2024, several key trends are reshaping how we build and interact with web applications.</p>
      
      <h2 class="font-bold py-1">1. Server-Side Rendering Renaissance</h2>
      <p>The shift back to server-side rendering has gained significant momentum. Frameworks like Next.js, Nuxt.js, and SvelteKit are leading this charge, offering improved performance and SEO benefits while maintaining the developer experience we've come to expect from modern frameworks.</p>
      
      <h2 class="font-bold py-1">2. Edge Computing Integration</h2>
      <p>Edge computing is no longer a futuristic concept—it's here and transforming how we deploy applications. By processing data closer to users, we're seeing dramatic improvements in latency and user experience.</p>
      
      <h2 class="font-bold py-1">3. AI-Powered Development Tools</h2>
      <p>Artificial intelligence is revolutionizing the development process. From code completion to automated testing, AI tools are becoming indispensable parts of the modern developer's toolkit.</p>
      
      <h2 class="font-bold py-1">4. WebAssembly Adoption</h2>
      <p>WebAssembly (WASM) is enabling high-performance applications in the browser. We're seeing more complex applications, including games and productivity tools, running at near-native speeds in web browsers.</p>
      
      <p>The future of web development is bright, with these technologies working together to create faster, more efficient, and more capable web applications than ever before.</p>
    `,
    author: {
      name: "Sudut Corp",
      avatar: "/images/shared/avatar.jpg",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Trends", "JavaScript"],
    likes: 142,
    comments: 23,
    coverImage: "/images/sudut-profile-suruh/benefit-partner.jpg",
  };
};

const getComments = () => {
  return [
    {
      id: 1,
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AC",
      },
      content:
        "Great article! I'm particularly excited about the WebAssembly developments. We've been experimenting with it at our company and the performance gains are incredible.",
      publishedAt: "2024-03-16T10:30:00Z",
      likes: 12,
      replies: [
        {
          id: 2,
          author: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "SJ",
          },
          content:
            "Thanks Alex! I'd love to hear more about your WebAssembly experiments. What kind of use cases are you exploring?",
          publishedAt: "2024-03-16T14:20:00Z",
          likes: 5,
        },
      ],
    },
    {
      id: 3,
      author: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MR",
      },
      content:
        "The section on AI-powered development tools really resonates with me. I've been using GitHub Copilot for the past few months and it's completely changed my workflow.",
      publishedAt: "2024-03-16T16:45:00Z",
      likes: 8,
      replies: [],
    },
    {
      id: 4,
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DK",
      },
      content:
        "Edge computing is definitely a game changer. We've seen 40% improvement in our app's response times after moving to edge functions. The future is distributed!",
      publishedAt: "2024-03-17T09:15:00Z",
      likes: 15,
      replies: [],
    },
  ];
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = getBlogPost(params.slug);
  const comments = getComments();

  return (
    <div className="min-h-screen bg-background mt-8">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{post.author.name}</span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="mb-8">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-[520px] object-cover object-center rounded-lg"
              width={1024}
              height={1440}
            />
            <div className="w-full flex justify-center items-center mt-2">
            <p className="text-base max-w-2xl text-center italic text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus, rem deserunt architecto quisquam corrupti fugit perferendis doloribus impedit soluta quam quas, suscipit, iusto voluptatum? Mollitia tempore adipisci provident aperiam.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-3">
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Actions */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      About {post.author.name}
                    </h3>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                Comments ({comments.length})
              </h2>

              {/* Comment Form */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>YU</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <Textarea
                        placeholder="Share your thoughts on this article..."
                        className="min-h-[100px] resize-none"
                      />
                      <div className="flex justify-end">
                        <Button className="gap-2">
                          <Send className="h-4 w-4" />
                          Post Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={comment.author.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback>
                              {comment.author.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">
                                {comment.author.name}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {new Date(
                                  comment.publishedAt
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {comment.content}
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 h-8 px-2"
                              >
                                <ThumbsUp className="h-3 w-3" />
                                {comment.likes}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 h-8 px-2"
                              >
                                <Reply className="h-3 w-3" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-12 space-y-4">
                        {comment.replies.map((reply) => (
                          <Card key={reply.id} className="bg-muted/30">
                            <CardContent className="p-4">
                              <div className="flex gap-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage
                                    src={
                                      reply.author.avatar || "/placeholder.svg"
                                    }
                                  />
                                  <AvatarFallback className="text-xs">
                                    {reply.author.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-sm">
                                      {reply.author.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {new Date(
                                        reply.publishedAt
                                      ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                      })}
                                    </span>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {reply.content}
                                  </p>
                                  <div className="flex items-center gap-3 pt-1">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="gap-1 h-7 px-2 text-xs"
                                    >
                                      <ThumbsUp className="h-3 w-3" />
                                      {reply.likes}
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="gap-1 h-7 px-2 text-xs"
                                    >
                                      <Reply className="h-3 w-3" />
                                      Reply
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#server-side-rendering"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Server-Side Rendering Renaissance
                    </a>
                    <a
                      href="#edge-computing"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Edge Computing Integration
                    </a>
                    <a
                      href="#ai-tools"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      AI-Powered Development Tools
                    </a>
                    <a
                      href="#webassembly"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      WebAssembly Adoption
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Related Posts</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-1">
                        <Link
                          href="/blog/react-best-practices"
                          className="hover:text-primary transition-colors"
                        >
                          React Best Practices for 2024
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        3 min read
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-1">
                        <Link
                          href="/blog/typescript-tips"
                          className="hover:text-primary transition-colors"
                        >
                          Advanced TypeScript Tips
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        7 min read
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-1">
                        <Link
                          href="/blog/performance-optimization"
                          className="hover:text-primary transition-colors"
                        >
                          Web Performance Optimization
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        6 min read
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Page;
