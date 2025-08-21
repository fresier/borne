import clsx from "clsx";
import Image from "next/image";

interface props {
  email?: string;

  alt?: string;
  size?: "--2" | "--3" | "--4";
  border?: number;
  bordercolor?: string;
  className?: string;
}

export const Avatar = ({
  size,
  email,

  alt = "avatar",
  border = 0,
  bordercolor = "primary",
  className,
}: props) => {
  let classSize = size ? "navatar" + size : "navatar";
  let src = "https://mafac.ulb.be/api/avatar?email=" + email?.replace(/^_/, "");
  console.log("Avatar src:", src);
  return (
    <>
      <div
        className={clsx(classSize, className)}
        style={{ position: "relative" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={clsx(
            "navatar",
            "object-fit-cover",
            "rounded-full",
            "border-" + border,
            "border-" + bordercolor
          )}
          sizes=" (max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
        />
      </div>
    </>
  );
};
