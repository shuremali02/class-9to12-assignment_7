"use client";
import React, { useState } from "react";
import Button2 from "./Button 2";
import { FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[70px] px-2 md:px-4 flex justify-between w-full items-center top-0 sticky z-30 bg-teal-700">
      {/* Logo/Heading */}
      <div>
        <Link href={"/"}>
          <h1 className="md:text-4xl text-2xl font-serif font-bold text-white">
            Data Fetching
          </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="md:flex gap-4 hidden">
        <Button2 button="Server" href="/Server-side" />
        <Button2 button="Client" href="/Client-side" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label="toggle menu"
          className="text-white"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">
          {/* Cross Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="close menu"
            className="absolute top-4 right-4 text-gray-700"
          >
            <FiX size={28} />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 mt-8">
            <Button2 button="Server" href="/Server-side" />
            <Button2 button="Client" href="/Client-side" />
          </div>
        </div>
      )}
    </div>
  );
}
