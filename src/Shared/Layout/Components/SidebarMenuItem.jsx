" use client";
import Link from "next/link";

export default function SidebarMenuItem({
  isNested,
  show,
  link,
  i,
  title,
  Icon,
  isLast = false,
}) {
  return (
    <>
      {show && (
        <div className={`flex items-center w-full justify-start`}>
          <Link
            // data-tip={!isNavOpen ? title : ""}
            key={i}
            href={link}
            className={` w-full transition-all font-semibold duration-200 flex items-center gap-3 justify-start py-3 px-5 text-primary`}
          >
            {!isNested ? (
              <span className={`inline-block `}>
                <Icon className={`Icon text-2xl`} />
              </span>
            ) : (
              ""
            )}

            <span
              className={` text-sm duration-300  border-base-100 break-words text-left`}
            >
              {title}
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
