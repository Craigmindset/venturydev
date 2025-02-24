import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Company</h3>
            <Link className="text-sm hover:underline" href="/about">
              About Us
            </Link>
            <Link className="text-sm hover:underline" href="/services">
              Services
            </Link>
            <Link className="text-sm hover:underline" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Services</h3>
            <Link className="text-sm hover:underline" href="#services">
              Web Development
            </Link>
            <Link className="text-sm hover:underline" href="#services">
              Mobile Apps
            </Link>
            <Link className="text-sm hover:underline" href="#services">
              UI/UX Design
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Connect</h3>
            <Link className="text-sm hover:underline" href="https://x.com/DonDD2024?t=A1TkLmLOZyPquCIpGD_1Gw&s=08">
              Twitter
            </Link>
            <Link className="text-sm hover:underline" href="#">
              LinkedIn
            </Link>
            <Link className="text-sm hover:underline" href="#">
              GitHub
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Legal</h3>
            <Link className="text-sm hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Ventury Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

