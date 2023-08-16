import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IIConButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IIConButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
          className
        )}
      >
        {icon}
      </button>
    </>
  );
};

export default IconButton;
