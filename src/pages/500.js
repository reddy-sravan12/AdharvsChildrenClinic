import Head from "next/head";
import Link from "next/link";
// import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <Head>
        <title>500 - Server Error</title>
        <meta name="description" content="An unexpected error occurred" />
      </Head>

      <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="bg-destructive/10 p-6 text-center">
          <div className="flex justify-center mb-4">
            {/* <AlertTriangle
              className="w-16 h-16 text-destructive"
              strokeWidth={1.5}
            /> */}
          </div>
          <h1 className="text-3xl font-bold text-destructive mb-2">
            500 - Server Error
          </h1>
          <p className="text-muted-foreground">
            Oops! Something went wrong on our end.
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              We're experiencing a temporary technical issue. Our team has been
              automatically notified.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center 
              px-4 py-2 border border-transparent 
              text-sm font-medium rounded-md 
              text-white bg-primary hover:bg-primary/90 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              {/* <Home className="mr-2 h-4 w-4" /> */}
              Go Home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="flex-1 inline-flex items-center justify-center 
              px-4 py-2 border border-gray-300 
              text-sm font-medium rounded-md 
              text-gray-700 bg-white hover:bg-gray-50 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              {/* <RefreshCw className="mr-2 h-4 w-4" /> */}
              Retry
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>If the problem persists, please contact support at</p>
        <a
          href="mailto:support@yourcompany.com"
          className="text-primary hover:underline">
          support@yourcompany.com
        </a>
      </div>
    </div>
  );
}
