// import ThemeToggle from '@/components/toggle/theme-toggle';
import { cn } from '@/lib/utils';
import   MobileSidebar   from '@/components/layout/mobile-sidebar';
import  { AvatarProfile } from '@/components/toggle/avatar'
 
export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full px-6">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
        <MobileSidebar/>
        </div>
        <div className="flex items-center gap-4">
          <AvatarProfile/>
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
