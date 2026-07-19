import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="text-center max-w-lg">
                <div className="mb-8">
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.6em] mb-4 block">
                        Error 404
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black text-text-primary tracking-tighter leading-[0.85] mb-6">
                        Page Not Found
                    </h1>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <Button variant="primary" className="gap-2">
                            <Home className="w-4 h-4" /> Back to Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="w-4 h-4" /> Contact Support
                        </Button>
                    </Link>
                </div>
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-xs text-text-muted">
                        Looking for something specific? Try our{" "}
                        <Link href="/products" className="text-accent hover:text-accent-hover font-bold">
                            Products
                        </Link>
                        ,{" "}
                        <Link href="/courses" className="text-accent hover:text-accent-hover font-bold">
                            Courses
                        </Link>
                        , or{" "}
                        <Link href="/services" className="text-accent hover:text-accent-hover font-bold">
                            Services
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}