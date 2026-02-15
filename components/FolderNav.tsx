
import React from 'react';
import { Category, TabConfig } from '../types';
import { TABS } from '../constants';

interface FolderNavProps {
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

const FolderNav: React.FC<FolderNavProps> = ({ activeCategory, onSelect }) => {
  return (
    <div className="relative flex flex-wrap items-end px-4 sm:px-8 mt-12 gap-1 overflow-x-auto pb-0 no-scrollbar">
      {TABS.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={`relative transition-all duration-300 transform origin-bottom px-4 pt-2 pb-1 text-xs sm:text-sm font-bold flex flex-col items-center justify-end min-w-[80px] sm:min-w-[120px] 
              ${isActive ? 'z-30 scale-110 -mb-[1px]' : 'z-10 opacity-70 hover:opacity-100'}`}
          >
            {/* The little handle label above the tab */}
            <span className={`text-[10px] uppercase mb-1 tracking-tight ${tab.textColor}`}>
              {tab.enLabel}
            </span>
            {/* The Tab Shape */}
            <div className={`w-full h-8 sm:h-10 ${tab.color} rounded-t-xl flex items-center justify-center shadow-sm`}>
              <span className={`whitespace-nowrap ${tab.textColor} hidden sm:block`}>
                {tab.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default FolderNav;
