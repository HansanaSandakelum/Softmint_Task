import React from "react";
import proImg from "../images/profileImg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const posts = [
  {
    id: 1,
    user: {
      name: "John Doe",

    },
    time: "2 hrs",
    content:
      "This is a sample post content. It may include text, images, videos, etc.",
  },
];

export default function ProfilePage() {
  return (
    <div>
      <div className="container mt-4">
        <div>
          {posts.map((post) => (
            <div key={post.id} className="bg-zinc-800 p-4 shadow-md mt-2 text-gray-300 rounded-lg">
              <div className="flex items-center mb-2">
                <img
                  src={proImg}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-4">
                  <div className="font-bold">{post.user.name}</div>
                  <div className="text-sm text-gray-500">{post.time}</div>
                </div>
              </div>
              <div>
                  <div className="mb-2">{post.content}</div>
                  <div className="bg-slate-300 w-full h-[600px]"/>
              </div>

              
              <div className="flex justify-between text-gray-500 px-20 p-4">
                <button className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faThumbsUp} /> Like
                </button>
                <button className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faComment} /> Comment
                </button>
                <button className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faShare} /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
