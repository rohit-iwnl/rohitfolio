import Link from 'next/link';

interface LayoutToggleProps {
  currentLayout: 'grid' | 'list';
}

export default function LayoutToggle({ currentLayout }: LayoutToggleProps) {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <span className="text-sm text-gray-700 font-medium">View:</span>
      <div className="flex bg-gray-900 rounded-lg p-1 shadow-lg border border-gray-800">
        <Link
          href="/blog"
          className={`flex items-center px-3 lg:px-4 py-2 lg:py-2.5 rounded-md text-xs lg:text-sm font-semibold transition-all duration-200 ${
            currentLayout === 'grid'
              ? 'bg-white text-gray-900 shadow-md transform scale-105'
              : 'text-gray-300 hover:text-white hover:bg-gray-800'
          }`}
        >
          <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="hidden lg:inline">Cards</span>
          <span className="lg:hidden">Grid</span>
        </Link>
        <Link
          href="/blog?view=list"
          className={`flex items-center px-3 lg:px-4 py-2 lg:py-2.5 rounded-md text-xs lg:text-sm font-semibold transition-all duration-200 ${
            currentLayout === 'list'
              ? 'bg-white text-gray-900 shadow-md transform scale-105'
              : 'text-gray-300 hover:text-white hover:bg-gray-800'
          }`}
        >
          <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          List
        </Link>
      </div>
    </div>
  );
} 