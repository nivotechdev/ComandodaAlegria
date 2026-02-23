import { cn } from '@/lib/utils';

const LogoText = ({ className }: { className?: string }) => {
  return (
    <div className={cn("font-headline font-bold tracking-wider text-outline-white", className)}>
        <span className="text-logo-blue">COMANDO</span>
        <div className="relative inline-block ml-2">
            <span className="absolute font-script -rotate-12 text-logo-orange" style={{fontSize: '0.8em', top: '-0.7em', left: '-0.2em'}}>da</span>
            <span className="font-script text-logo-pink">
                Alegri<span className="text-logo-green">a</span>
            </span>
        </div>
    </div>
  );
};

export default LogoText;
