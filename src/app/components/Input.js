import { PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffiverr-res.cloudinary.com%2Ft_profile_original%2Cq_auto%2Cf_auto%2Fattachments%2Fprofile%2Fphoto%2Fcfa032fe1915b1f62c32b4397232c550-1642570351123%2F23f0f574-7271-4058-a973-30bf8b20eacd.jpg&w=128&q=75"
        alt="user avatar"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotoIcon className="h-10 w-10 hover p-2 text-sky-500 hover:bg-sky-100" />
            <FaceSmileIcon className="h-10 w-10 hover p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
