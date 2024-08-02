"use client";

import Login from "@/components/login";
import { cookies } from "next/headers";
import { useState } from "react";

export default function LoginPage() {
  return <main>
    <h1>Login</h1>
    <Login />
  </main>
}
