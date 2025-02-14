
import { Card } from "@/components/ui/card"
// ... existing code ...
import { EmailOctopusForm } from "@/components/forms/EmailOctopusForm"

export default function Simple() {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          //  backgroundColor: '#fef2e7',
          backgroundColor: '#160042',
        }}
        // style={{ 
        //   backgroundImage: `url(./assets/images/duotone.png)`,
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'repeat',
        //   backgroundSize: '1000px'
        // }}
      >
        <div className="container mx-auto px-4"
          style={{
            maxWidth: 1000
          }}
        >
          <Card className="mx-auto overflow-hidden border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left side with form */}
              <div className="p-6 pt-8">
                <img src="./assets/images/color.png" alt="Logo" 
                  className="h-10 w-auto mb-4 mx-auto block lg:hidden" 
                />

                <h2 className="text-sera text-2xl font-bold mb-4 text-center">Join the Waitlist for the World’s First AI-Ombudsman</h2>
                <p className="text-muted-foreground mb-3 text-center">
                Designed for CHROs and senior leaders committed to fostering trust, security, and accountability, our AI-Ombudsman empowers employees to report misconduct safely—without fear of retaliation. Unlike traditional systems, it provides organizations with a structured, ethical approach to addressing concerns while ensuring privacy and compliance.
                </p>
                <p className="text-sera mb-1 font-semibold text-center">
                Be the first to explore how AI can transform workplace accountability.
                </p>
                <EmailOctopusForm />
              </div>
              {/* Right side with image */}
              <div className="relative h-full min-h-[300px] hidden lg:block bg-black">
                <img 
                  src="./assets/images/sider.png" 
                  alt="Workplace illustration" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}