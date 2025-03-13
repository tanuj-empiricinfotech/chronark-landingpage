import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-semibold">Chronark</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Product
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Use Cases
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Docs
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Integrations
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Create, inspect, and apply synthetic surveillance broadly.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-gray-600">
                Start with a working technique. You won't need without hurting your pocket.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-base">Get Started</Button>
                <Button variant="outline" className="px-8 py-6 text-base">
                  See how it works
                </Button>
              </div>

              <div className="mt-16 relative w-full max-w-4xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-orange-500/10 rounded-full"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -left-32 top-0">
                        <img
                          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                          width={60}
                          height={60}
                          alt="Nodejs icon"
                          className="rounded-xl"
                        />
                        {/* {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute h-px w-32 bg-orange-500/30 origin-left rotate-[20deg]"
                            style={{ transform: `rotate(${i * 10}deg)` }}
                          ></div>
                        ))} */}
                      </div>
                      <div className="absolute -right-32 top-0">
                        <img
                          src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
                          width={60}
                          height={60}
                          alt="Vue js icon"
                          className="rounded-xl"
                        />
                        {/* {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute h-px w-32 bg-orange-500/30 origin-right rotate-[20deg]"
                            style={{ transform: `rotate(${i * -10}deg)` }}
                          ></div>
                        ))} */}
                      </div>
                      <div className="relative">
                        <img
                          src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
                          width={80}
                          height={80}
                          alt="Next js icon"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <img
                src="https://www.vectorlogo.zone/logos/google/google-tile.svg"
                width={100}
                height={30}
                alt="Patreon"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg"
                width={100}
                height={30}
                alt="GitHub"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg"
                width={100}
                height={30}
                alt="Montecarlo"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
                width={100}
                height={30}
                alt="Coinbase"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg"
                width={100}
                height={30}
                alt="Griffin"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tesla/tesla-icon.svg"
                width={100}
                height={30}
                alt="HubSpot"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/sap/sap-icon.svg"
                width={100}
                height={30}
                alt="Plaid"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <div className="inline-block rounded-full bg-orange-100 p-1 mb-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Share anything you're working on.</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get feedback from teammates on anything: designs, product specs, or code. Just drop a link or upload a
                  file, and we'll handle the rest. It's like code review for everything.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Button variant="outline" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Install
                  </Button>
                  <Link href="#" className="text-sm font-medium text-orange-500 hover:underline">
                    See how it works
                  </Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-gray-900 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400">main.js</div>
                  </div>
                  <pre className="text-sm font-mono">
                    <code lang="javascript" className="text-green-400">
                      {`// Example code snippet
function processData(data) {
  const result = data.map(item => {
    return {
      id: item.id,
      value: item.value * 2,
      status: item.value > 10 ? 'high' : 'low'
    };
  });
  
  return result.filter(item => item.status !== 'low');
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gray-100 rounded-xl p-4 shadow-lg">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=32&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
                      <div className="text-sm font-medium">Alex Williams</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300"><img src="https://xsgames.co/randomusers/avatar.php?g=female" /></div>
                      <div className="text-sm font-medium">Sarah Johnson</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300"><img src="https://xsgames.co/randomusers/avatar.php?g=male" /></div>
                      <div className="text-sm font-medium">Michael Brown</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300"><img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=32&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
                      <div className="text-sm font-medium">Jessica Davis</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block rounded-full bg-orange-100 p-1 mb-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Better feedback at the right time.</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Chronark has made it so seamless to integrate feedback into every step of our product development
                  process. It's changed the way we think about collaboration.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link href="#" className="text-sm font-medium text-orange-500 hover:underline">
                    See how it works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orange Feedback Section */}
        <section className="py-20 bg-orange-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Better feedback at the right time.</h2>
            </div>

            <div className="max-w-3xl mx-auto mb-12 bg-gray-900 rounded-xl p-4 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="font-medium">Chronark</div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Start a chat</Button>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    <div className="h-6 w-6 rounded-full overflow-hidden bg-blue-500 border-2 border-gray-800"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=24&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
                    <div className="h-6 w-6 rounded-full overflow-hidden bg-green-500 border-2 border-gray-800"><img src="https://xsgames.co/randomusers/avatar.php?g=male" /></div>
                    <div className="h-6 w-6 rounded-full overflow-hidden bg-purple-500 border-2 border-gray-800"><img src="https://xsgames.co/randomusers/avatar.php?g=female" /></div>
                  </div>
                  <div className="text-sm text-gray-300">3 people are tracking for feedback this</div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-orange-600 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Mentions</h3>
                <p className="text-orange-100">Mention anyone in your team to get their attention and feedback.</p>
              </div>
              <div className="bg-orange-600 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Files</h3>
                <p className="text-orange-100">
                  Share documents, images, and files directly in the conversation thread.
                </p>
              </div>
              <div className="bg-orange-600 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Threaded comments</h3>
                <p className="text-orange-100">
                  Keep discussions organized with threaded comments on specific parts of your work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Archive of progress</h2>
              <div className="mt-4 flex justify-center gap-8 text-sm text-gray-600">
                <div>Organize, filter, and archive</div>
                <div>Automatic notifications of your work</div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium">Overview</div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    View all
                  </Button>
                </div>
                <div className="bg-white rounded-xl border p-4 shadow-sm">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Total</div>
                    <div className="text-2xl font-bold">5,203</div>
                  </div>
                  <div className="h-32 w-full">
                    <svg viewBox="0 0 100 30" className="h-full w-full">
                      <path
                        d="M0,15 Q10,10 20,15 T40,20 T60,15 T80,25 T100,15"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium">Activity</div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    View all
                  </Button>
                </div>
                <div className="bg-white rounded-xl border p-4 shadow-sm">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">This month</div>
                    <div className="text-2xl font-bold">3,729</div>
                  </div>
                  <div className="h-32 w-full">
                    <svg viewBox="0 0 100 30" className="h-full w-full">
                      <path
                        d="M0,20 Q10,15 20,18 T40,10 T60,15 T80,5 T100,15"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500"><img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" /></div>
                  <div>
                    <div className="font-medium">Gabriel Weinberg</div>
                    <div className="text-sm text-gray-500">Product Designer, Figma</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Chronark has emerged as an essential tool for the team at Acme Design. It helps us coordinate
                  everything from design reviews to product planning, making our workflow significantly more efficient."
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-purple-500"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
                  <div>
                    <div className="font-medium">Ben Williams</div>
                    <div className="text-sm text-gray-500">Engineering Lead, Vercel</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Chronark has transformed how our distributed team collaborates on engineering projects. The real-time
                  feedback and integrated tooling has made our development process much more streamlined and effective."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loved By Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved By Designers At</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <img
                src="https://www.vectorlogo.zone/logos/google/google-tile.svg"
                width={100}
                height={30}
                alt="Patreon"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg"
                width={100}
                height={30}
                alt="GitHub"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg"
                width={100}
                height={30}
                alt="Montecarlo"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
                width={100}
                height={30}
                alt="Coinbase"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg"
                width={100}
                height={30}
                alt="Griffin"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tesla/tesla-icon.svg"
                width={100}
                height={30}
                alt="HubSpot"
                className="h-8 w-auto"
              />
              <img
                src="https://www.vectorlogo.zone/logos/sap/sap-icon.svg"
                width={100}
                height={30}
                alt="Plaid"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Keep Everyone Section */}
        <section className="py-20 bg-orange-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Keep every one in the loop</h2>
              <p className="mt-4 text-lg text-orange-100">
                No more siloed work. Keep everyone aligned with real-time updates.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-orange-500 hover:bg-orange-100">Get Started</Button>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold">Project</div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="h-12 w-12 rounded-lg bg-purple-500 mb-2"></div>
                      <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-700 rounded mb-1"></div>
                      <div className="h-2 w-3/4 bg-gray-700 rounded mb-2"></div>
                      <div className="bg-orange-500 text-white text-xs rounded px-2 py-1 w-16 text-center">Active</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-500 mb-2"></div>
                      <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-700 rounded mb-1"></div>
                      <div className="h-2 w-3/4 bg-gray-700 rounded mb-2"></div>
                      <div className="bg-orange-500 text-white text-xs rounded px-2 py-1 w-16 text-center">Active</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="h-12 w-12 rounded-lg bg-green-500 mb-2"></div>
                      <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-700 rounded mb-1"></div>
                      <div className="h-2 w-3/4 bg-gray-700 rounded mb-2"></div>
                      <div className="bg-orange-500 text-white text-xs rounded px-2 py-1 w-16 text-center">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Increase your team's visibility and alignment
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">Start for free. Perfect for all teams.</p>
              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-base">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </Link>
            </div>
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Chronark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

