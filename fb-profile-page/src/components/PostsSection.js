import React from "react";
import ProfilePage from "./ProfilePage";

export default function PostsSection() {
  return (
    <div className="w-2/3">
      <div className="bg-zinc-800 p-4 shadow-md mt-2 text-gray-300 rounded-lg">
        <h3 className="font-bold text-lg">Featured</h3>
        <div className="mt-2">
          <div className="bg-zinc-800 p-2 rounded">
            <h4>Softmint Software Solutions</h4>
            <p>
              Your Success is our Asset. Our customers are the backbone of our
              business...
            </p>
          </div>
        </div>
      </div>
      <ProfilePage />
    </div>
  );
}
