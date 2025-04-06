import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Sprout,
  CreditCard,
  ShoppingCart,
  BanknoteIcon as Bank,
  Users,
  Store,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Sprout className="h-6 w-6 text-[#4CAF50]" />
            <span className="text-xl font-bold text-[#5D4037]">KrishiSetu</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-[#212121] hover:text-[#4CAF50] transition-colors">
              Features
            </Link>
            <Link href="#roles" className="text-[#212121] hover:text-[#4CAF50] transition-colors">
              For Who
            </Link>
            <Link href="#testimonials" className="text-[#212121] hover:text-[#4CAF50] transition-colors">
              Success Stories
            </Link>
            <Link href="#" className="text-[#212121] hover:text-[#4CAF50] transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
            >
              Login
            </Button>
            <Button className="bg-[#4CAF50] text-white hover:bg-[#3d9140]">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#5D4037]">
                    Empowering Indian Farmers with Credit and Commerce
                  </h1>
                  <p className="max-w-[600px] text-[#757575] md:text-xl">
                    Sell directly. Access credit. Buy essential supplies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#4CAF50] text-white hover:bg-[#3d9140]">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
                  >
                    Login
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="https://tse1.mm.bing.net/th?id=OIP.P8gXgt4cS_N3hJrppXWvWwHaE7&pid=Api"
                  width={500}
                  height={500}
                  alt="Farmer using smartphone"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F9A825] px-3 py-1 text-sm text-white">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#5D4037]">
                  Everything You Need to Grow
                </h2>
                <p className="max-w-[900px] text-[#757575] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KrishiSetu provides a complete ecosystem for farmers, vendors, and banks to connect and thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#4CAF50]/10 p-3">
                  <Sprout className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold text-[#5D4037]">Direct Selling</h3>
                <p className="text-center text-[#757575]">Sell your crops directly to buyers without middlemen</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#F9A825]/10 p-3">
                  <CreditCard className="h-6 w-6 text-[#F9A825]" />
                </div>
                <h3 className="text-xl font-bold text-[#5D4037]">Credit Scoring</h3>
                <p className="text-center text-[#757575]">Build your credit profile based on your farming activities</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#0077B6]/10 p-3">
                  <ShoppingCart className="h-6 w-6 text-[#0077B6]" />
                </div>
                <h3 className="text-xl font-bold text-[#5D4037]">Vendor Marketplace</h3>
                <p className="text-center text-[#757575]">Access quality agricultural supplies at competitive prices</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#81C784]/10 p-3">
                  <Bank className="h-6 w-6 text-[#81C784]" />
                </div>
                <h3 className="text-xl font-bold text-[#5D4037]">Loan Access</h3>
                <p className="text-center text-[#757575]">Get quick access to loans and financial services</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section id="roles" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0077B6] px-3 py-1 text-sm text-white">For Everyone</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#5D4037]">
                  Who Benefits from KrishiSetu?
                </h2>
                <p className="max-w-[900px] text-[#757575] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects key stakeholders in the agricultural ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#4CAF50]/10 p-4">
                  <Users className="h-8 w-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-2xl font-bold text-[#5D4037]">Farmers</h3>
                <p className="text-center text-[#757575]">
                  Sell crops directly, access credit, and purchase quality supplies
                </p>
                <Button
                  variant="outline"
                  className="mt-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#F9A825]/10 p-4">
                  <Store className="h-8 w-8 text-[#F9A825]" />
                </div>
                <h3 className="text-2xl font-bold text-[#5D4037]">Vendors</h3>
                <p className="text-center text-[#757575]">Connect with farmers directly and expand your market reach</p>
                <Button
                  variant="outline"
                  className="mt-2 border-[#F9A825] text-[#F9A825] hover:bg-[#F9A825] hover:text-white"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-8 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-[#0077B6]/10 p-4">
                  <Bank className="h-8 w-8 text-[#0077B6]" />
                </div>
                <h3 className="text-2xl font-bold text-[#5D4037]">Banks</h3>
                <p className="text-center text-[#757575]">
                  Access verified farmer data and offer targeted financial services
                </p>
                <Button
                  variant="outline"
                  className="mt-2 border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-[#F9A825]/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#81C784] px-3 py-1 text-sm text-white">Success Stories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#5D4037]">
                  Hear from Our Farmers
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-[#4CAF50]/10 p-2">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Farmer portrait"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#5D4037]">Rajesh Kumar</h3>
                    <p className="text-[#757575]">Wheat Farmer, Punjab</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-[#F9A825]" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[#212121] italic">
                  "KrishiSetu has transformed how I sell my crops. I now get 20% better prices by selling directly to
                  buyers, and I've accessed affordable loans to expand my farm. The platform is easy to use even for
                  someone like me who isn't tech-savvy."
                </blockquote>
                <p className="mt-4 text-[#4CAF50] font-medium">Increased income by 35% in the first year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 bg-[#5D4037]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join thousands of Indian farmers growing with KrishiSetu
                </h2>
                <p className="mx-auto max-w-[700px] text-[#E0E0E0] md:text-xl/relaxed">
                  Start your journey towards financial independence and agricultural success today.
                </p>
              </div>
              <Button className="mt-4 bg-[#F9A825] text-white hover:bg-[#e69c22]">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sprout className="h-6 w-6 text-[#4CAF50]" />
                <span className="text-xl font-bold text-[#5D4037]">KrishiSetu</span>
              </div>
              <p className="text-sm text-[#757575]">
                Connecting farmers, vendors, and banks for a prosperous agricultural ecosystem.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-[#5D4037]">Quick Links</h3>
              <ul className="space-y-2 text-sm text-[#757575]">
                <li>
                  <Link href="#" className="hover:text-[#4CAF50] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-[#4CAF50] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-[#4CAF50] transition-colors">
                    For Who
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-[#4CAF50] transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-[#5D4037]">Legal</h3>
              <ul className="space-y-2 text-sm text-[#757575]">
                <li>
                  <Link href="#" className="hover:text-[#4CAF50] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#4CAF50] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#4CAF50] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-[#5D4037]">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#757575] hover:text-[#4CAF50] transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#757575] hover:text-[#4CAF50] transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#757575] hover:text-[#4CAF50] transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-[#757575] hover:text-[#4CAF50] transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#757575]">
                  Contact us at:
                  <a href="mailto:info@krishisetu.com" className="text-[#0077B6] hover:underline ml-1">
                    info@krishisetu.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-xs text-[#757575]">
              &copy; {new Date().getFullYear()} KrishiSetu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

