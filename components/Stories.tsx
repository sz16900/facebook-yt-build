import React from 'react';
import StoryCard from './StoryCard';

function Stories() {
  const stories = [
    {
      name: 'Sonny Sangha',
      src: 'https://links.papareact.com/zof',
      profile: 'https://links.papareact.com/l4v',
    },
    {
      name: 'Sonny Sangha',
      src: 'https://links.papareact.com/zof',
      profile: 'https://links.papareact.com/l4v',
    },
    {
      name: 'Sonny Sangha',
      src: 'https://links.papareact.com/zof',
      profile: 'https://links.papareact.com/l4v',
    },
  ];
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
