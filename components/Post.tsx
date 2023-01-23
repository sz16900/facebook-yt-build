import Image from 'next/image';
import React from 'react';
import {
  ChatBubbleOvalLeftIcon,
  ShareIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';

function Post({ name, message, email, postImage, image, timestamp }: any) {
  return (
    <div className="flex flex-col">
      <div className="bg-white p-5 mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            alt=""
            width={40}
            height={40}
          />
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-400">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </p>
        </div>

        <p className="pt-4 ">{message}</p>
      </div>

      {/* ONLY OF THERE IS AN IMAGE */}
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white overflow-hidden">
          <Image src={postImage} width={500} height={500} alt="" />
        </div>
      )}
      {/* Footer of the Posst */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ChatBubbleOvalLeftIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
