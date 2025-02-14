import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Shield, MessageSquare, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

  export default function Home() {

  return (
    <>
    {/* Hero Section */}
    <div 
      className="w-full"
      style={{ 
        backgroundImage: `url(./assets/images/duotone.png)`, // Add background image
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'repeat',
        backgroundSize: '1000px'
      }}
    >
      <div className="mx-auto max-w-screen-xl">
        <section className="mx-auto container px-4 py-40 text-white">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl leading-loose	font-bold mb-6 text-white/50">
              Your voice <span className="font-script text-7xl text-white">Protected.</span><br />
              Your workplace <span className="font-script text-7xl text-white">Improved.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 text-white">
              Sera is the world's first A.I. Ombudsman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
              <Button asChild variant="outline" size="lg">
                <Link to="/employees">
                  For Employees
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/employers">
                  For Employers
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
    <div>
      <div className="min-h-screen mx-auto max-w-screen-xl">
      {/* Features Section */}
      <section className="mx-auto container px-4 py-20 bg-muted/50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Submit Reports",
              description: "Easily submit your concerns through our secure platform.",
              icon: <MessageSquare className="h-6 w-6" />,
            },
            {
              title: "Stay Protected",
              description: "Your identity remains completely confidential unless you choose otherwise.",
              icon: <Shield className="h-6 w-6" />,
            },
            {
              title: "Get Resolution",
              description: "Track your report's progress while maintaining privacy.",
              icon: <CheckCircle className="h-6 w-6" />,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>For Employees</CardTitle>
                <CardDescription>
                  Need to report a workplace issue?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Speak up safely and confidentially. Your identity remains protected unless you choose otherwise.
                </p>
                <Button asChild>
                  <Link to="/employees">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>For Employers</CardTitle>
                <CardDescription>
                  Want to build a safer workplace?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Create a more transparent, ethical workplace culture while reducing liability and improving retention.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/employers">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
    </>
  )
}
