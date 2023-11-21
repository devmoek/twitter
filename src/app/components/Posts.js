import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  TrashIcon,
  HeartIcon,
  ShareIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Posts({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.userImg}
        alt="user image"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h3 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h3>
            <span className="text-sm sm:text-[15px] text-gray-500">
              @{post.username} ·
            </span>
            <small className="text-sm sm:text-[15px] text-gray-500 hover:underline">
              {post.timestamp}
            </small>
          </div>
          <EllipsisHorizontalIcon className="h-6 w-10 hover text-sky-500 hover:bg-sky-100" />
        </div>
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
        <img className="rounded-2xl mr-2" src={post.img} alt="post image" />
        <div className="flex justify-between text-gray-500 p-2">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-10 hover text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-6 w-10 hover text-sky-500 hover:text-red-600 hover:bg-sky-100"  />
          <HeartIcon className="h-6 w-10 hover text-sky-500 hover:bg-sky-100"  />
          <ShareIcon className="h-6 w-10 hover text-sky-500 hover:bg-sky-100"  />
          <ChartBarIcon className="h-6 w-10 hover text-sky-500 hover:bg-sky-100"  />
        </div>
      </div>
    </div>
  );
}
