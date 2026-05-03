import { NavLink } from 'react-router-dom';
import { LayoutGrid, Palette, Type, Paintbrush, Box, Layers, Play, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Cover & Intro', href: '/brand', icon: LayoutGrid },
  { name: 'Core Identity', href: '/brand/identity', icon: Box },
  { name: 'The Blueprint Palette', href: '/brand/colors', icon: Palette },
  { name: 'Precision & Clarity', href: '/brand/typography', icon: Type },
  { name: 'Visual Metaphors', href: '/brand/metaphors', icon: Paintbrush },
  { name: 'UI Components', href: '/brand/components', icon: Layers },
  { name: 'Motion & Animation', href: '/brand/motion', icon: Play },
  { name: 'Spacing & Layout', href: '/brand/spacing', icon: Settings },
];

export function Sidebar({ isOpen, setIsOpen, onExport }) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-deep-slate/80 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-[280px] flex flex-col bg-surface-panel border-r border-border-tech transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
      <div className="flex h-20 shrink-0 items-center px-6 border-b border-border-tech">
        <div className="flex items-center gap-3">
          {/* Sync Frame Logo */}
          <div className="relative h-8 w-10 flex items-center justify-center">
            {/* Brackets */}
            <div className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-y-2 border-mint-precision"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-y-2 border-mint-precision"></div>
            {/* Anchor Point & Timeline */}
            <div className="absolute w-full h-[1px] bg-border-tech left-0 top-1/2 -translate-y-1/2"></div>
            <div className="w-2 h-2 bg-mint-precision rotate-45 z-10"></div>
          </div>
          <div>
            <h1 className="font-display font-bold text-text-primary leading-none text-xl">PromptVideo</h1>
            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mt-1 block">Brand System v2.0</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                isActive
                  ? 'bg-steel-blue/40 text-text-primary border-l-2 border-mint-precision'
                  : 'text-text-secondary hover:bg-white/5 hover:text-text-primary border-l-2 border-transparent'
              )
            }
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-border-tech flex flex-col gap-3">
        <button 
          onClick={onExport}
          className="w-full rounded bg-mint-precision px-4 py-2 text-sm font-bold text-deep-slate uppercase tracking-wider hover:bg-opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white"
        >
          Export PDF
        </button>
        <NavLink 
          to="/"
          className="w-full rounded border border-border-tech bg-transparent px-4 py-2 text-sm font-bold text-text-primary text-center uppercase tracking-wider hover:bg-white/5 transition-colors focus:outline-none"
        >
          Exit to Website
        </NavLink>
      </div>
    </aside>
    </>
  );
}
