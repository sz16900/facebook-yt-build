import Image from 'next/image';
import React from 'react';

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
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} width={500} height={500} alt="" />
        </div>
      )}
    </div>
  );
}

export default Post;
