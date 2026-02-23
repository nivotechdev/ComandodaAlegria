import { cn } from "@/lib/utils";

const Blob = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
    >
        <path d="M422.5,389Q380,528,250,470Q120,412,88,293.5Q56,175,178.5,108Q301,41,400.5,170.5Q500,300,422.5,389Z" fill="currentColor"></path>
    </svg>
);
export default Blob;
