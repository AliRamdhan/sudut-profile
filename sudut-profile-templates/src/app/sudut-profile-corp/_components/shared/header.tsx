"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  CircleDot,
  Sun,
  Moon,
  BookA,
  GraduationCap,
  Users,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}
const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <ToggleGroupItem value="home">
                <TransitionLink href="/sudut-profile-corp">
                  <CircleDot size={16} className="inline-block mr-1.5" /> Home
                </TransitionLink>
              </ToggleGroupItem>

              <ToggleGroupItem value="activities">
                <TransitionLink href="/sudut-profile-corp/activities">
                  <Activity size={16} className="inline-block mr-1.5" />{" "}
                  Activities
                </TransitionLink>
              </ToggleGroupItem>

              <ToggleGroupItem value="talents">
                <TransitionLink href="/sudut-profile-corp/talents">
                  <Users size={16} className="inline-block mr-1.5" /> Talents
                </TransitionLink>
              </ToggleGroupItem>

              <ToggleGroupItem value="blogs">
                <TransitionLink href="/sudut-profile-corp/blogs">
                  <BookA size={16} className="inline-block mr-1.5" /> Blogs
                </TransitionLink>
              </ToggleGroupItem>

              <ToggleGroupItem
                value="courses"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === "courses"
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                asChild
              >
                <TransitionLink href="/sudut-profile-corp/courses">
                  <GraduationCap size={16} className="inline-block mr-1.5" />{" "}
                  Courses
                </TransitionLink>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <TransitionLink
                href="/sudut-profile-corp"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Home
              </TransitionLink>

              <TransitionLink
                href="/sudut-profile-corp/activities"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Activity size={16} className="inline-block mr-1.5" />{" "}
                Activities
              </TransitionLink>

              <TransitionLink
                href="/sudut-profile-corp/talents"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users size={16} className="inline-block mr-1.5" /> Talents
              </TransitionLink>

              <TransitionLink
                href="/sudut-profile-corp/blogs"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookA size={16} className="inline-block mr-1.5" /> Blogs
              </TransitionLink>

              <TransitionLink
                href="/sudut-profile-corp/courses"
                onClick={() => setMobileMenuOpen(false)}
              >
                <GraduationCap size={16} className="inline-block mr-1.5" />{" "}
                Courses
              </TransitionLink>

              {/* Theme toggle for mobile */}
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
          <Button variant={"outline"} className="px-6 py-2 rounded-full">
            LOGIN
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
