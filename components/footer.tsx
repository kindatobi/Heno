"use client";
import Link from "next/link";

import { HenoWordmark } from "./heno-wordmark";

export default function Footer() {
  return (
    <div className=" bg-[#F5F6F4] pt-20 ">
      <div className="my-x-cont py-4">
        <div className="hidden md:flex justify-between uppercase text-[14px] tracking-[0.08em] font-bcd-diatype">
          <div>
            <p>12:05:15PM</p>
            <p>WELCOME TO HENO</p>
            <p>LAGOS, NIGERIA UTC+1</p>
          </div>
          <div>
            <p className="pb-2.5">Will you subscribe to our newsletter?</p>
            <div className="w-full flex gap-2 items-center">
              <input
                type="text"
                placeholder="Your email"
                className="flex-1  outline-none"
              />
              <span className="uppercase">submit</span>
            </div>
            <span className="block w-full bg-black h-px"></span>
          </div>
          <div>
            <p className="hover:underline cursor-pointer">Blog</p>
            <p className="hover:underline cursor-pointer">Editorials</p>
          </div>
        </div>
        <div className=" md:hidden block uppercase text-[14px] tracking-[0.08em] space-y-10  font-bcd-diatype">
          <div className="flex justify-between">
            <div>
              <p>12:05:15PM</p>
              <p>WELCOME TO HENO</p>
              <p>LAGOS, NIGERIA </p>
            </div>
            <div>
              <p>Blog</p>
              <p>Editorials</p>
            </div>
          </div>
          <div>
            <p className="pb-2.5">Will you subscribe to our newsletter?</p>
            <div className="w-full flex gap-2 items-center">
              <input
                type="text"
                placeholder="Your email"
                className="flex-1  outline-none"
              />
              <span className="uppercase">submit</span>
            </div>
            <span className="block w-full bg-black h-px"></span>
          </div>
        </div>
        <div className="py-3 w-full overflow-hidden">
          <HenoWordmark className="w-full h-auto text-black" />
        </div>

        <div className="hidden font-bcd-diatype  uppercase  md:flex md:justify-between">
          <p className="text-[12px] tracking-[0.08em]  md:text-[14px]">
            2025 heno 419 grift ave lekki lagos
          </p>
          <div className="flex justify-center gap-2 text-[12px] tracking-[0.08em]  md:text-[14px]">
            <Link href="/privacy" className="hover:underline cursor-pointer">
              privacy policy
            </Link>
            /
            <Link
              href="refund-and-return-policy"
              className="hover:underline cursor-pointer"
            >
              refunds and returns
            </Link>
          </div>
          <Link
            className="text-[12px]  md:text-[14px] tracking-[0.08em] cursor-pointer underline"
            href="/about"
          >
            <p>about</p>
          </Link>
        </div>
        {/* mobile */}
        <div className="md:hidden font-bcd-diatype  uppercase ">
          <div className="flex justify-between">
            <p className="text-[14px] ">2025 heno lagos, NG</p>
            <div className="flex justify-center gap-2 text-[14px] ">
              <span>privacy </span>/<span>refunds </span>
            </div>
          </div>

          <Link
            className="text-[14px]  cursor-pointer underline"
            href={"/about"}
          >
            <p>about</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
