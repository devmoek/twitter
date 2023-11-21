import { SparklesIcon } from "@heroicons/react/24/solid";
import Input from "./Input";
import Posts from "./Posts";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Michael Myers",
      username: "michaelmyers",
      userImg:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Ffiverr-res.cloudinary.com%2Ft_profile_original%2Cq_auto%2Cf_auto%2Fattachments%2Fprofile%2Fphoto%2Fcfa032fe1915b1f62c32b4397232c550-1642570351123%2F23f0f574-7271-4058-a973-30bf8b20eacd.jpg&w=128&q=75",
      img: "https://images.unsplash.com/photo-1700403985615-544cfbd74ace?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.",
      timestamp: "2h",
    },
    {
      id: "2",
      name: "Michael Myers",
      username: "michaelmyers",
      userImg:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Ffiverr-res.cloudinary.com%2Ft_profile_original%2Cq_auto%2Cf_auto%2Fattachments%2Fprofile%2Fphoto%2Fcfa032fe1915b1f62c32b4397232c550-1642570351123%2F23f0f574-7271-4058-a973-30bf8b20eacd.jpg&w=128&q=75",
      img: "https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.",
      timestamp: "2 days",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hover flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
