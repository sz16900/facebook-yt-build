import React from 'react';

function HeaderIcon({ Icon }: { Icon: any }) {
  console.log(Icon);
  return (
    <div>
      <Icon className="h-5" />
    </div>
  );
}

export default HeaderIcon;
