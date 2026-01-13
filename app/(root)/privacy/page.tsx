import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-0 bg-[#F5F6F4] text-[#191919]">
      {/* Mobile Layout — untouched */}
      <div className="md:hidden">
        <div className="my-x-cont">
          <h1 className="text-6xl font-neue-haas font-medium mb-7 leading-none">
            Privacy policy
          </h1>

          <div className="space-y-9 text-[16px] font-neue-haas leading-[1.1em] font-normal">
            <p>
              Heno is committed to protecting your privacy and maintaining the
              security of any personal information received from you. We
              strictly adhere to the requirements of the data protection
              legislation in Nigeria.
            </p>

            <p>
              The purpose of this statement is to explain to you what personal
              information we collect and how we may use it. When you order, we
              need to know your name, address, and email address.
            </p>

            <p>
              We may use your contact details to keep you updated about
              promotions or offers that we think will be of interest to you.
            </p>

            <p>
              In order to maintain the accuracy of our database, you can check,
              update or remove your personal details by contacting us by email.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Hero Image */}
        <div className="h-screen relative">
          <Image
            src="/about-image1.webp"
            alt="Privacy policy"
            fill
            priority
            className="object-cover"
          />
          <h1 className="absolute bottom-0 left-0 right-0 px-8 mb-6 text-[80px] font-neue-haas font-normal leading-none text-[#F5F6F4]">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <div className="my-x-cont">
          <div className="space-y-4 mt-20 text-[16px] font-neue-haas leading-[1.2em] font-normal">
            <div className="space-y-6 max-w-[60%] mx-auto">
              <h2 className="text-[40px]">Your Privacy Matters</h2>
              <p className="tracking-wide">
                Heno is committed to protecting your privacy and maintaining the
                security of any personal information received from you. We
                strictly adhere to the requirements of data protection
                legislation in Nigeria. The purpose of this statement is to
                explain what personal information we collect and how it may be
                used. When you place an order, we collect essential details such
                as your name, address, and email address to process and fulfil
                your request.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                We may occasionally use your contact information to notify you
                about promotions or updates we believe may be relevant to you.
                Your information is handled with strict security procedures to
                prevent unauthorized access. We do not store your payment or
                financial details on our platform. You may review, update, or
                request removal of your personal data by contacting us directly.
                If you have any questions regarding privacy, please reach out
                via email.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                In addition to the information you provide directly, we may
                collect certain technical data automatically when you interact
                with our website. This includes your IP address, browser type,
                device information, and pages visited. This data is used solely
                to improve website functionality, enhance user experience, and
                ensure the security and performance of our services. Such
                information does not personally identify you and is analyzed in
                aggregated form. Heno may use trusted third-party service
                providers to support essential business operations such as order
                fulfillment, website hosting, analytics, and email
                communication. These service providers are granted access only
                to the information necessary to perform their functions and are
                contractually obligated to protect your data and use it strictly
                for authorized purposes. We do not sell, rent, or trade your
                personal information to third parties.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                We retain personal information only for as long as necessary to
                fulfill the purposes for which it was collected, including
                legal, accounting, or reporting requirements. Once your
                information is no longer required, it is securely deleted or
                anonymized. We continually review our data retention practices
                to ensure compliance with applicable laws and best practices.
                Our website may contain links to external websites operated by
                third parties. Please note that we are not responsible for the
                privacy practices or content of those websites. We encourage you
                to review the privacy policies of any external sites before
                providing personal information. Heno reserves the right to
                update or modify this privacy policy at any time to reflect
                changes in our practices, technology, or legal requirements. Any
                updates will be posted on this page, and continued use of our
                website constitutes acceptance of the revised policy. For
                further information or concerns regarding how your data is
                handled, please contact us using the details provided on our
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
