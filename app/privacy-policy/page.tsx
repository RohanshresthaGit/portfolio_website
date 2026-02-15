"use client";

import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen from-black via-indigo-900 to-purple-900 text-gray-200 pt-[80px] md:pt-[100px] p-6 md:p-20">
      {/* 
        pt-[80px] -> mobile padding top to push content below navbar
        md:pt-[100px] -> desktop padding top
        Adjust these values to match your navbar height
      */}

      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-400 mb-6">Last updated: February 15, 2026</p>

      <p className="mb-4">
        This Privacy Policy describes how I collect, use, and protect information when you use my apps or website. 
        By using my apps, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information I Collect</h2>
      <ul className="list-disc list-inside text-gray-400 mb-4">
        <li>Personal information such as name, email, or phone (if you provide it)</li>
        <li>Usage data like app interactions, clicks, or time spent on screens</li>
        <li>Device information including IP address, device type, and operating system</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How I Use Your Data</h2>
      <ul className="list-disc list-inside text-gray-400 mb-4">
        <li>To provide and improve app features and user experience</li>
        <li>To contact you for updates, promotions, or support (with consent)</li>
        <li>To analyze usage trends and improve app performance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Sharing</h2>
      <p className="text-gray-400 mb-4">
        I do not sell or trade your personal data. Your data may be shared with service providers only to help run the app, maintain servers, or analyze usage.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="text-gray-400 mb-4">
        You can request deletion of your personal data or withdraw consent at any time by contacting me at <a href="mailto:shrestharohan495@gmail.com" className="text-purple-400 hover:underline">shrestharohan495@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Me</h2>
      <p className="text-gray-400 mb-4">
        If you have questions about this Privacy Policy or my apps, please contact me at <a href="mailto:shrestharohan495@gmail.com" className="text-purple-400 hover:underline">shrestharohan495@gmail.com</a>.
      </p>

      <Link href="/" className="text-purple-400 hover:underline mt-6 inline-block">
        ← Back to Home
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
