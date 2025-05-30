"use client";

import {Popover, PopoverTrigger, PopoverContent, Button as PopoverButton} from "@heroui/react";
import { FaHome, FaLinkedin } from "react-icons/fa";

import {
      Navbar as HeroUINavbar,
      NavbarContent,
      NavbarMenu,
      NavbarMenuToggle,
      NavbarBrand,
      NavbarItem,
      NavbarMenuItem,
    } from "@heroui/navbar";
    import { Button } from "@heroui/button";
    import { Kbd } from "@heroui/kbd";
    import { Link } from "@heroui/link";
    import { Input } from "@heroui/input";
    import { link as linkStyles } from "@heroui/theme";
    import NextLink from "next/link";
    import clsx from "clsx";
    
    import { siteConfig } from "@/config/site";
    import { ThemeSwitch } from "@/components/theme-switch";
    import {
      TwitterIcon,
      GithubIcon,
      DiscordIcon,
      HeartFilledIcon,
      SearchIcon,
      Logo,
      LinkedInIcon
    } from "@/components/icons";
    
    export const Navbar = () => {
      const searchInput = (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      );

      function copyDiscord() {
        navigator.clipboard.writeText(siteConfig.links.discord);
      }
    
      return (

        // for future reference: if you change one navbar, you have to change the other one to match!
        // maybe implement smth to update both later on -- turn into parts?

        <HeroUINavbar maxWidth="xl" position="sticky" className="opacity-50">
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink className="flex justify-start items-center gap-1" href="/">
                {/* <Logo /> */}
                {/* <p className="font-bold text-inherit">ACME</p> */}
                {/* home icon */}
                {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" /> */}
                <FaHome className="text-default-700 size-5" />
              </NextLink>
            </NavbarBrand>

            {/* pages */}
            {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul> */}

          </NavbarContent>
    
          <NavbarContent
            className="hidden sm:flex basis-1/5 sm:basis-full"
            justify="end"
          >
            <NavbarItem className="hidden sm:flex gap-2">
              {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                <TwitterIcon className="text-default-500" />
              </Link> */}

                <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
                    {/* <LinkedInIcon className="text-default-500" /> */}
                    <FaLinkedin className="text-default-500 size-5" />
                </Link>
                
                <Link isExternal aria-label="Discord">
              <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger onClick={copyDiscord}>
                    {/* <PopoverButton> */}
                        <DiscordIcon className="text-default-500 cursor-pointer" />
                    {/* </PopoverButton> */}
                </PopoverTrigger>
                <PopoverContent>
                    
                <div>
                    {/* <div className="text-small font-bold text-center">Discord username copied!</div> */}
                    <div className="text-tiny text-center">Copied "@ahyjie" to clipboard!</div>
                </div>
                </PopoverContent>
              </Popover>
              </Link>
              {/* <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                <DiscordIcon className="text-default-500" />
              </Link> */}
              <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                <GithubIcon className="text-default-500" />
              </Link>
              {/* <ThemeSwitch /> */}
            </NavbarItem>
            {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
            {/* <NavbarItem className="hidden md:flex">
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-default-600 bg-default-100"
                href={siteConfig.links.sponsor}
                startContent={<HeartFilledIcon className="text-danger" />}
                variant="flat"
              >
                Sponsor
              </Button>
            </NavbarItem> */}
          </NavbarContent>

          {/* THE PROBLEM */}
    
          {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
            <NavbarMenuToggle />
          </NavbarContent> */}

          {/* begin navbar that shows on smaller screens!! */}

          <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          
  
                <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
                    <FaLinkedin className="text-default-500 size-5" />
                </Link>
                
                <Link isExternal aria-label="Discord">
              <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger onClick={copyDiscord}>
                    {/* <PopoverButton> */}
                        <DiscordIcon className="text-default-500 cursor-pointer" />
                    {/* </PopoverButton> */}
                </PopoverTrigger>
                <PopoverContent>
                    
                <div>
                    {/* <div className="text-small font-bold text-center">Discord username copied!</div> */}
                    <div className="text-tiny text-center">Copied "@ahyjie" to clipboard!</div>
                </div>
                </PopoverContent>
              </Popover>
              </Link>
              {/* <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                <DiscordIcon className="text-default-500" />
              </Link> */}
              <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                <GithubIcon className="text-default-500" />
              </Link>
              {/* <ThemeSwitch /> */}
            </NavbarContent>

    
          <NavbarMenu>
            {searchInput}
            <div className="mx-4 mt-2 flex flex-col gap-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={
                      index === 2
                        ? "primary"
                        : index === siteConfig.navMenuItems.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    href="#"
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        </HeroUINavbar>
      );
    };