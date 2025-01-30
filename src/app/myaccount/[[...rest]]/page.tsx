"use client";

import React, { useState } from "react";
import { SignedIn, SignedOut, SignIn, SignUp, UserButton } from "@clerk/nextjs";

export default function MyAccountPage() {
  // Toggle between "sign-in" and "sign-up" modes
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-4">
      {/* If the user is already signed in, display account info */}
      <SignedIn>
        <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4">My Account</h1>
          <p className="mb-6">You are signed in!</p>
          {/* The UserButton opens a profile menu with "Sign out" inside */}
          <div className="inline-block">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </SignedIn>

      {/* If the user is signed out, show Sign In / Sign Up forms */}
      <SignedOut>
        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
          {/* Toggle buttons */}
          <div className="flex space-x-2 mb-4 justify-center">
            <button
              onClick={() => setMode("sign-in")}
              className={`px-4 py-2 rounded ${
                mode === "sign-in"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("sign-up")}
              className={`px-4 py-2 rounded ${
                mode === "sign-up"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Conditionally render the SignIn or SignUp component */}
          {mode === "sign-in" ? (
            <SignIn
              path="/myaccount"
              routing="path"
              signUpUrl="/myaccount" // If user clicks “Sign up” link in the Clerk form
              afterSignInUrl="/myaccount" // Where to go upon success
              appearance={{
                layout: {
                  // Places social buttons at bottom of the form
                  socialButtonsPlacement: "bottom",
                },
                elements: {
                  // Optional styling overrides
                  card: "shadow-none border-none",
                },
              }}
            />
          ) : (
            <SignUp
              path="/myaccount"
              routing="path"
              signInUrl="/myaccount" // If user clicks “Sign in” link in the Clerk form
              afterSignUpUrl="/myaccount" // Where to go upon success
              appearance={{
                layout: {
                  socialButtonsPlacement: "bottom",
                },
                elements: {
                  card: "shadow-none border-none",
                },
              }}
            />
          )}
        </div>
      </SignedOut>
    </div>
  );
}


// // app/myaccount/page.tsx
// "use client";

// import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
// import React from "react";

// export default function MyAccountPage() {
//   return (
//     <div className="min-h-screen p-6">
//       <h1 className="text-2xl font-bold">My Account</h1>

//       {/* If user is signed out, show a sign in button */}
//       <SignedOut>
//         <div className="mt-6">
//           <SignInButton mode="redirect">
//             <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
//               Sign In
//             </button>
//           </SignInButton>
//         </div>
//       </SignedOut>

//       {/* If user is signed in, show a user button (profile & sign out) */}
//       <SignedIn>
//         <div className="mt-6">
//           <p>You are logged in!</p>
//           <UserButton afterSignOutUrl="/" />
//         </div>
//       </SignedIn>
//     </div>
//   );
// }



// // // app/myaccount/page.tsx
// // "use client";

// // import React from "react";
// // import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// // // import any additional components like:
// // import AccountBanner from "../components/AccountBanner";
// // import FeaturesSection from "../components/FeaturesSection";

// // export default function MyAccount() {
// //   return (
// //     <>
// //       <AccountBanner />

// //       {/* SignedOut => show "Sign In" or "Sign Up" buttons */}
// //       <SignedOut>
// //         <div className="flex flex-col items-center space-y-4 mt-8">
// //           <p>Please sign in or sign up to access your account.</p>
// //           <SignInButton mode="modal">
// //             <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
// //               Sign In
// //             </button>
// //           </SignInButton>
// //           {/* If you want a sign-up button, you can also do: */}
// //           {/* 
// //           <SignUpButton mode="modal">
// //             <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
// //               Sign Up
// //             </button>
// //           </SignUpButton>
// //           */}
// //         </div>
// //       </SignedOut>

// //       {/* SignedIn => show user info, or a <UserButton> (which has sign-out inside) */}
// //       <SignedIn>
// //         <div className="flex flex-col items-center space-y-4 mt-8">
// //           <h2>Welcome to your account!</h2>
// //           {/* The UserButton includes a user profile dropdown and sign out */}
// //           <UserButton afterSignOutUrl="/" />
// //         </div>
// //       </SignedIn>

// //       <FeaturesSection />
// //     </>
// //   );
// // }


// // // import React from 'react'
// // // import AccountBanner from '../components/AccountBanner'

// // // import FeaturesSection from '../components/FeaturesSection'
// // // import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

// // // const Myaccount = () => {
// // //   return (
// // //     <>
   
// // //     <AccountBanner />
// // //     {/* Icons and Authentication
// // //     <div className="hidden md:flex space-x-6 text-xl relative">
// // //            Authentication Buttons 
// // //             <SignedOut>
// // //               <SignInButton mode="modal">
// // //                 <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
// // //                   Sign In
// // //                 </button>
// // //               </SignInButton>
// // //             </SignedOut>
// // //             <SignedIn>
// // //               <UserButton afterSignOutUrl="/" />
// // //             </SignedIn>
// // //           */}
   
// // //     <FeaturesSection />
  



// // //     </>
// // //   )
// // // }

// // // export default Myaccount