import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon
} from "@heroicons/react/outline"
import Image from "next/image"
import logo from "../public/assets/twitter-logo.png"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col fixed">
        <div>
          <Image scr={logo} width={34} height={34}/>
        </div>
        <nav>
            <SidebarLink Icon={HomeIcon} text={"Home"} />
            <SidebarLink Icon={HashtagIcon} text={"Explore"} />
            <SidebarLink Icon={BellIcon} text={"Notifications"} />
            <SidebarLink Icon={InboxIcon} text={"Messages"} />
            <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
            <SidebarLink Icon={UserIcon} text={"Profile"} />
            <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        </nav>
        <div>User</div>
    </div>
  )
}

function SidebarLink({text, Icon}){
  return(
    <li className="flex items-center text-xl mb-6 space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline ">{text}</span>
    </li>
  )
}