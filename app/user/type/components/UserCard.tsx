import Image from "next/image";
import Link from "next/link";

type UserCardProps = {
  userType: string;
  imageSrc: string;
  description: string;
  role: string;
};

const UserCard: React.FC<UserCardProps> = ({
  userType,
  imageSrc,
  description,
  role,
}) => {
  return (
    <Link
      href={{
        pathname: "/user/details",
        query: { role: role },
      }}
    >
      <div className="cursor-pointer w-[90%] mx-auto rounded-lg border border-gray-300 p-4 transition hover:border-secondary hover:bg-secondary/10 hover:shadow">
        <div className="flex flex-col items-center">
          <div className="relative h-[200px] w-[200px] md:h-[300px] md:w-[300px] overflow-hidden rounded-full">
            <Image
              src={imageSrc}
              alt={userType}
              loading="eager"
              priority
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-3 text-2xl font-semibold">{userType}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
