"use client"

import { SignUp } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

// Separate client component to handle client-side rendering
function SignUpContent() {
    const [isSubmitting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Return null on server-side
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Toaster position="top-center" />
            {isSubmitting && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-md">
                        Processing your registration...
                    </div>
                </div>
            )}
            <SignUp
                forceRedirectUrl="/tenant"
                appearance={{
                    elements: {
                        formButtonPrimary:
                            "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
                    },
                }}
            />
        </div>
    );
}

// Main page component
export default function Page() {
    return <SignUpContent />;
}
