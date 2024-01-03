import React from 'react';
import './SidebarRow.css';

function SidebarRow({ icon: Icon, title, selected, onClick }) {
  const RenderedIcon = Icon;

  return (
    <div className={`SidebarRow ${selected ? 'selected' : ''}`} onClick={onClick}>
      {Icon && <RenderedIcon className='SidebarRow_icon' />} {/* Render icon if provided */}
      <h2 className='SidebarRow_title'>{title}</h2>
    </div>
  );
}

export default SidebarRow;
