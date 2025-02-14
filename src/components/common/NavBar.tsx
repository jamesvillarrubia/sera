import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'For Employees', href: '/employees' },
  { name: 'For Employers', href: '/employers' },
  { name: 'FAQ', href: '/faq' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50) // Change background after scrolling 50px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-200 ${
      isScrolled ? 'bg-sera-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-display text-2xl text-white">
              <img alt="Logo" className="h-8 w-auto" 
                src='./assets/images/logo-white.png'
                // src={`${isScrolled ? './assets/images/logo-color.png' : './assets/images/logo-white.png'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <NavigationMenu className="h-16">
              <NavigationMenuList className="gap-6">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className={`${
                        location.pathname === item.href
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Button asChild variant="secondary" className="ml-4">
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <X className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="sm:hidden bg-black/50 backdrop-blur-sm"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="secondary" className="w-full mt-4">
            <Link
              to="/report"
              onClick={() => setIsOpen(false)}
            >
              Report an Issue
            </Link>
          </Button>
        </div>
      </motion.div>
    </nav>
  )
}

export default NavBar