import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
export default function page() {
  return (
    <div className="container">
      <Button>click me </Button>
      <ModeToggle />
    </div>
  );
}
