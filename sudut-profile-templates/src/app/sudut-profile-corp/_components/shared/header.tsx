"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  CircleDot,
  Sun,
  Moon,
  DownloadCloudIcon,
  BookA,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}
const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4 bg-white/30 backdrop-blur-md">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <p className="text-xl font-bold">SUDUTPROFILE</p>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup
              type="single"
              value={activePage}
              onValueChange={(value) => value && setActivePage(value)}
            >
              <ToggleGroupItem
                value="home"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === "home"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={handleNavClick("home")}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Home
              </ToggleGroupItem>
              <ToggleGroupItem
                value="download"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === "download"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={handleNavClick("download")}
              >
                <DownloadCloudIcon size={16} className="inline-block mr-1.5" />{" "}
                Digital Download
              </ToggleGroupItem>
              <ToggleGroupItem
                value="blog"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === "blog"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={handleNavClick("blog")}
              >
                <BookA size={16} className="inline-block mr-1.5" /> Blog
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === "home"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavClick("home")}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Home
              </a>
              <a
                href="#download"
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === "download"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavClick("download")}
              >
                <DownloadCloudIcon size={16} className="inline-block mr-1.5" />{" "}
                Digital Download
              </a>
              <a
                href="#blog"
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === "blog"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={handleNavClick("blog")}
              >
                <BookA size={16} className="inline-block mr-1.5" /> Blog
              </a>

              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon
                    size={16}
                    className={`${
                      isDarkMode ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <Switch
                    checked={!isDarkMode}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun
                    size={16}
                    className={`${
                      !isDarkMode ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon
              size={18}
              className={`${
                isDarkMode ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <Switch
              checked={!isDarkMode}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary"
            />
            <Sun
              size={18}
              className={`${
                !isDarkMode ? "text-primary" : "text-muted-foreground"
              }`}
            />
          </div>
          <Button variant={'outline'} className="px-6 py-2 rounded-full">
            LOGIN
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
