"use client"
import { Button } from "@/components/Button";
import { useSidebarContext } from "@/contexts/SidebarContext";

import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function PageHeader() {
  const [isFullWidth, setIsFullWidth] = useState(false)
  const { toggle } = useSidebarContext()

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`gap-4 items-center flex-shrink-0 ${isFullWidth ? 'hidden': 'flex'}`}>
        <Button onClick={toggle} variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <Image width={38} height={38} src='/logo.png' alt="logo"/>

        </a>
      </div>

      <form className={`gap-4 justify-center flex-grow ${isFullWidth ? 'flex': 'hidden md:flex'}`}>
        <div className="flex flex-grow max-w-[600px]">
          {isFullWidth &&
            <Button onClick={() => setIsFullWidth(false)} type="button" variant="ghost" size="icon" className="flex-shrink-0 bg-secondary-shadow mr-3">
              <ArrowLeft className="text-secondary"/>
            </Button> 
          }

          <input type="search" placeholder="search" className="rounded-l-full border border-secondary-shadow shadow-inner shadow-secondary-dark py-1 px-4 w-full text-lg bg-black text-secondary focus:border-blue-500 outline-none"/>

          <Button className="py-2 px-4 rounded-r-full border border-secondary-shadow bg-secondary-shadow border-l-0 flex-shrink-0">
            <Search className="text-secondary"/>
          </Button>
        </div>

        <Button variant="ghost" size="icon" type="button" className="flex-shrink-0 bg-secondary-shadow">
          <Mic />
        </Button>
      </form>

      <div className={`flex flex-shrink-0 md:gap-2 ${isFullWidth ? 'hidden': 'flex'}`}>
        
        <Button onClick={() => setIsFullWidth(true)} variant="ghost" size="icon" className="md:hidden">
          <Search />
        </Button>

        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>

        <Button variant="ghost" size="icon">
          <User />
        </Button>

      </div>

    </div>    
  )
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <Image width={38} height={38} src='/logo.png' alt="logo"/>
      </a>
    </div>
  )
}
