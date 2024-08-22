"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

type Props = {
  SignUpTab: React.ReactNode;
  SignInTab: React.ReactNode;
};

const TabSwitcher = (props: Props) => {
  return (
    <Tabs defaultValue="signin" className="max-w-[500px]">
      <TabsList>
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">{props.SignInTab}</TabsContent>
      <TabsContent value="signup">{props.SignUpTab}</TabsContent>
    </Tabs>
  );
};

export default TabSwitcher;
