import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';

import {
  ChatBubbleBottomCenterIcon,
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt=""
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>
      {/* middle */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon active={false} Icon={FlagIcon} />
          <HeaderIcon active={false} Icon={PlayIcon} />
          <HeaderIcon active={false} Icon={ShoppingCartIcon} />
          <HeaderIcon active={false} Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          // trust that it will never be null
          src={session?.user?.image!}
          width="40"
          height="40"
          alt=""
        />

        <p className="whitespace-nowrap text-semibold pr-3">
          {session?.user?.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleBottomCenterIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
}

export default Header;
