import { cn } from "@/lib/utils";

const PageHeading = ({
  title,
  description,
  className,
  id,
}: {
  title: string;
  description: string;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "text-center w-full mt-10 mb-8 md:mb-16 font-geistSans",
        className
      )}
    >
      <h2 className="text-3xl text-accent-foreground font-bold capitalize font-rubik">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-primary lowercase font-workSans font-[500]">
        {description}
      </p>
    </div>
  );
};

export default PageHeading;

export const FormPageHeading = ({
  title,
  description,
  className,
  id,
}: {
  title: string;
  description: string;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "text-center w-full my-6 md:mb-10 font-geistSans",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl text-white font-bold capitalize font-rubik mb-2">
        {title}
      </h2>
      <p className="text-sm md:text-xl text-white lowercase font-workSans font-[500]">
        {description}
      </p>
    </div>
  );
};
