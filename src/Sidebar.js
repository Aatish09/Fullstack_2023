import React, { useState } from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Sidebar() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDislikeClick = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div className='sidebar'>
      <SidebarRow selected icon={HomeIcon} title="Home" />
      <SidebarRow icon={WhatshotIcon} title="Trending" />
      <SidebarRow icon={SubscriptionsIcon} title="Subscriptions" />
      <hr/>
      <SidebarRow icon={VideoLibraryIcon} title="Subscriptions" />
      <SidebarRow icon={HistoryIcon} title="History" />
      <SidebarRow icon={OndemandVideoIcon} title="Your Video" />
      <SidebarRow icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow
        icon={ThumbUpAltIcon}
        title={`Liked Video (${likes + (likes === 1 ? ' like' : ' likes')})`}
        onClick={handleLikeClick}
      />
      <SidebarRow
        icon={ThumbDownIcon}
        title={`Disliked Video`}
        onClick={handleDislikeClick}
      />
      <SidebarRow icon={ExpandMoreIcon} title="Show more" />
      <hr/>
    </div>
  );
}

export default Sidebar;
