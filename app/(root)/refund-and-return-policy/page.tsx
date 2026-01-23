import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Refunds and Returns",
};

export default function RefundAndReturnPolicyPage() {
  return (
    <div className="pt-16 md:pt-0 bg-[#F5F6F4] text-[#191919]">
      <div className="md:hidden">
        <div className="my-x-cont">
          <h1 className="text-6xl font-neue-haas font-medium mb-7 leading-none">
            Refunds & Returns
          </h1>

          <div className="space-y-9 text-[16px] font-neue-haas tracking-wide leading-[1.1em] font-normal">
            <p>
              All sales made through Heno are final. We do not offer refunds,
              returns, or exchanges once an order has been confirmed and
              processed. Customers are advised to review all product details
              carefully before completing a purchase.
            </p>

            <p>
              If you receive an incorrect or defective item, please contact us
              via email within 48 hours of delivery. Requests must include your
              order number and clear supporting images. Approved cases may be
              eligible for a replacement at our discretion.
            </p>

            <p>
              Items purchased during sales or promotional periods are final and
              cannot be returned or exchanged. We do not accept responsibility
              for products purchased from third-party retailers or unauthorized
              sellers.
            </p>

            <p>
              Customers are responsible for all customs duties, import taxes,
              and additional charges on international shipments. Refused or
              undeliverable packages may incur return shipping costs which will
              be billed accordingly.
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
            alt="Refunds and Returns"
            fill
            priority
            className="object-cover"
          />
          <h1 className="absolute bottom-0 left-0 right-0 px-8 mb-6 text-[80px] font-neue-haas font-normal leading-none text-[#F5F6F4]">
            Refunds & Returns
          </h1>
        </div>

        <div className="my-x-cont">
          <div className="space-y-4 mt-20 text-[16px] font-neue-haas leading-[1.2em] font-normal">
            <div className="space-y-6 max-w-[60%] mx-auto">
              <h2 className="text-[40px]">Refund & Return Policy</h2>
              <p className="tracking-wide">
                All sales made through Heno are final. Once an order is placed
                and processed, it cannot be refunded, returned, or exchanged.
                Each item is produced and packaged with care, and customers are
                encouraged to review sizing and product information carefully
                before purchase.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                In the event that you receive an incorrect or defective item,
                please contact us within 48 hours of delivery. Claims must
                include your order number, a clear description of the issue, and
                supporting images. Approved cases may be eligible for a
                replacement at our discretion. Refunds will not be issued.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                Items purchased on sale or during promotional periods are final
                and are not eligible for returns or exchanges. Heno does not
                accept responsibility for items purchased from third-party
                retailers or unauthorized sellers.
              </p>
            </div>

            <div className="space-y-6 max-w-[60%] mx-auto">
              <p className="tracking-wide">
                Customers are responsible for all customs duties, import taxes,
                brokerage fees, and additional charges on international
                shipments. If a package is refused or returned due to unpaid
                fees, all associated shipping costs will be billed accordingly.
                Heno creates art through fashion, experiences, and imagery —
                Lagos based, delivered globally. This policy may be updated at
                any time without prior notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
