import { cn } from '@/lib/utils';

const LogoText = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center -space-y-2 leading-tight drop-shadow-[0_3px_2px_rgba(0,0,0,0.2)]',
        className
      )}
    >
      <span
        className="font-headline text-logo-blue text-outline-white font-extrabold"
        style={{ letterSpacing: '0.04em' }}
      >
        COMANDO
      </span>
      <div className="relative">
        <span
          className="font-script absolute italic text-logo-orange"
          style={{
            fontSize: '0.5em',
            top: '0.2em',
            left: '-1.2em',
            textShadow: '-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF',
            zIndex: 1,
          }}
        >
          da
        </span>
        <span
          className="font-script font-bold text-outline-white"
          style={{ letterSpacing: '-0.05em' }}
        >
          <span className="text-logo-pink">Alegr</span>
          <span className="text-logo-green">ia</span>
        </span>
      </div>
    </div>
  );
};

export default LogoText;
