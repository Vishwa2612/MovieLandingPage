import AvatarImages from "../Images/avatar.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarImageSrc = () => {
  return (
    <Avatar>
      <AvatarImage src={AvatarImages} alt="Avatar Image" />
      <AvatarFallback>VI</AvatarFallback>
    </Avatar>
  );
};

export default AvatarImageSrc;
