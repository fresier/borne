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
  console.log("Avatar email:", email);
  let classSize = size ? "navatar" + size : "navatar";
  let src =
    process.env.NEXT_PUBLIC_MAFAC_URL +
    "/api/avatar?token=" +
    encodeURIComponent(process.env.NEXT_PUBLIC_JWT_SECRET as string) +
    "&email=" +
    email?.replace(/^_/, "");
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
