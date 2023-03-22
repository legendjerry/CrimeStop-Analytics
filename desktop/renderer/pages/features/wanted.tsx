import React, {useState} from 'react'
import SideBar from '../../components/sideBar'
function wanted() {
    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
      <div className="flex">
        <SideBar
          onSidebarHide={() => {
            onSetShowSidebar(true);
          }}
          showSidebar={showSidebar}
        />
      </div>
    )
}

export default wanted
