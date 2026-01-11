import Link from "next/link";
import { HenoWordmark } from "./heno-wordmark";

export default function Footer() {
  return (
    <div className=" bg-[#F5F6F4] pt-20 ">
      <div className="my-x-cont py-4">
        <div className="flex justify-between uppercase text-[14px]  md:text-[16px] font-mono">
          <div>
            <p>12:05:15PM</p>
            <p>WELCOME TO HENO</p>
            <p>LAGOS, NIGERIA UTC+1</p>
          </div>
          <div>Will you subscribe to our newsletter?</div>
          <div>
            <p>Blog</p>
            <p>Editorials</p>
          </div>
        </div>
        <div className="py-3 w-full overflow-hidden">
          <HenoWordmark className="w-full h-auto text-black" />
        </div>

        <div className="hidden font-mono  uppercase  md:flex md:justify-between">
          <p className="text-[12px]  md:text-[16px]">2025 heno</p>
          <div className="flex justify-center gap-2 text-[12px]  md:text-[16px]">
            <span>privacy policy</span>/<span>refunds and returns</span>
          </div>
          <Link
            className="text-[12px]  md:text-[16px] cursor-pointer underline"
            href={"/about"}
          >
            <p>about</p>
          </Link>
        </div>
        {/* mobile */}
        <div className="md:hidden font-mono  uppercase ">
          <div className="flex justify-between">
            <p className="text-[14px] ">2025 heno</p>
            <div className="flex justify-center gap-2 text-[14px] ">
              <span>privacy </span>/<span>refunds </span>
            </div>
          </div>

          <Link
            className="text-[14px]  md:text-[16px] cursor-pointer underline"
            href={"/about"}
          >
            <p>about</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
