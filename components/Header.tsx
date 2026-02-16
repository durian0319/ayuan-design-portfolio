
import React from 'react';
import { Category } from '../types';

interface HeaderProps {
  category: Category;
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ category, onHomeClick }) => {
  if (category === Category.HOME) {
    // 第一行：个人
    const row1Chars = [
      { 
        c: '个', 
        style: 'rotate-[-6deg] translate-y-1', 
        decors: [
          { color: 'bg-[#402018]', w: 'w-5', h: 'h-5', pos: 'top-0 -left-4 rounded-full opacity-60 animate-float' }, // 圆点装饰
          { color: 'bg-[#F9D874]', w: 'w-3', h: 'h-3', pos: 'bottom-8 -right-2 rotate-45 animate-float-reverse' }, // 菱形
          { color: 'border-2 border-[#3262B5]', w: 'w-4', h: 'h-4', pos: 'top-10 -left-6 rounded-full animate-float-slow' } // 空心圆
        ] 
      },
      { 
        c: '人', 
        style: 'rotate-[4deg] ml-6', // 增加间距
        decors: [
           { color: 'bg-[#E17DB0]', w: 'w-6', h: 'h-2', pos: '-top-2 right-0 rotate-12 rounded-full animate-float-slow' }, // 线条装饰
           { color: 'bg-[#7C3621]', w: 'w-2', h: 'h-2', pos: 'bottom-4 -right-3 rounded-full animate-float' } // 小点
        ] 
      },
    ];

    // 第二行：作品集
    const row2Chars = [
      { 
        c: '作', 
        style: 'rotate-[-3deg]', 
        decors: [
          { color: 'bg-[#F9D874]', w: 'w-6', h: 'h-6', pos: 'top-4 -left-4 rounded-tr-xl animate-float' }, // 不规则圆角
          { color: 'bg-[#3262B5]', w: 'w-2', h: 'h-2', pos: 'bottom-4 right-2 rounded-full animate-float-reverse' },
          { color: 'bg-[#E17DB0]', w: 'w-3', h: 'h-3', pos: '-top-2 left-4 rotate-12 rounded-sm animate-float-slow' } // 小方块
        ] 
      },
      { 
        c: '品', 
        style: 'rotate-[5deg] translate-y-2 ml-4', // 增加间距，去除负margin
        decors: [
          { color: 'bg-[#E17DB0]', w: 'w-8', h: 'h-8', pos: '-bottom-2 -right-4 rounded-full opacity-40 z-[-1] animate-float-slow' }, // 大圆背景
          { color: 'border-2 border-[#402018]', w: 'w-3', h: 'h-3', pos: 'top-2 right-0 rotate-45 animate-float' }, // 空心方块
          { color: 'bg-[#3262B5]', w: 'w-2', h: 'h-6', pos: 'top-0 -left-2 rotate-[-15deg] rounded-full opacity-60 animate-float-reverse' } // 竖条
        ] 
      },
      { 
        c: '集', 
        style: 'rotate-[-4deg] ml-4', // 增加间距，去除负margin
        decors: [
           { color: 'bg-[#3262B5]', w: 'w-4', h: 'h-4', pos: 'top-0 -left-2 rounded-bl-lg animate-float-reverse' },
           { color: 'bg-[#E17DB0]', w: 'w-3', h: 'h-8', pos: 'bottom-2 -right-4 rotate-12 rounded-full opacity-70 animate-float-slow' }, // 长条
           { color: 'border-2 border-[#F9D874]', w: 'w-5', h: 'h-5', pos: '-top-4 right-2 rounded-full animate-float' } // 大空心圆
        ] 
      }
    ];

    return (
      <div className="flex justify-between items-start w-full px-12 pt-16 mb-24 relative z-[100]">
        <div className="flex flex-col cursor-pointer select-none" onClick={onHomeClick}>
          {/* 第一行：个人 */}
          <div className="flex items-end pl-4 mb-[-20px]">
             {row1Chars.map((item, i) => (
              <div key={i} className={`relative font-title text-[9.5rem] leading-none tracking-tighter ${item.style}`}>
                {item.decors.map((d, di) => (
                  <div key={di} className={`absolute ${d.color} ${d.w} ${d.h} ${d.pos} z-0 pointer-events-none`}></div>
                ))}
                <span className="relative z-10">{item.c}</span>
              </div>
            ))}
          </div>
          
          {/* 第二行：作品集 */}
          <div className="flex items-start">
            {row2Chars.map((item, i) => (
              <div key={i} className={`relative font-title text-[9.5rem] leading-none tracking-tighter ${item.style}`}>
                {item.decors.map((d, di) => (
                  <div key={di} className={`absolute ${d.color} ${d.w} ${d.h} ${d.pos} z-0 pointer-events-none`}></div>
                ))}
                <span className="relative z-10">{item.c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-right font-black uppercase tracking-tight leading-[0.9]">
          <div className="flex items-center justify-end text-5xl">
            <span>洪 靓</span>
            <div className="flex flex-col items-start ml-2 text-2xl">
               <span>#20</span>
               <span className="-mt-1 ml-4">26</span>
            </div>
          </div>
          <div className="flex items-center justify-end text-4xl mt-1">
             <span className="text-gray-400 mr-2 text-3xl">2024.04-2026.01</span>
             <span>#DESIGN</span>
          </div>
          <div className="flex items-center justify-end text-5xl mt-1 gap-2">
             <span>PORTFOLIO.</span>
             <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
               <path d="M5 5L35 35M35 35V10M35 35H10" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </div>
      </div>
    );
  }

  if (category !== Category.HOME && category !== Category.CATALOG) {
    // 针对分类详情页的 Header (如 Cultural Design)
    const label = category === '文创设计' ? 'Cultural' : 
                  category === '海报设计' ? 'Poster' :
                  category === '包装设计' ? 'Package' :
                  category === '插画设计' ? 'Illustration' :
                  category === '线下物料设计' ? 'Material' : category;

    return (
      <div className="px-6 md:px-12 pt-8 md:pt-16 mb-8 md:mb-16 flex flex-col md:flex-row md:items-end gap-2 md:gap-8 relative z-50">
        <div className="flex flex-col md:block">
          <h1 className="text-5xl md:text-7xl font-serif-heavy leading-none break-words">
            {label}
          </h1>
          <h1 className="text-5xl md:text-7xl font-serif-heavy leading-none mt-2 md:mt-0">
            Design
          </h1>
        </div>
        
        {/* Mobile: #2026 & Portfolio aligned right, stacked vertically */}
        <div className="flex flex-col items-end md:flex-row md:items-center gap-1 md:gap-4 mt-4 md:mt-0 md:mb-2 ml-auto md:ml-0">
          <span className="text-xl md:text-3xl font-bold tracking-tight">#2026</span>
          <span className="text-2xl md:text-5xl font-serif-heavy tracking-tight">Portfolio</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`px-12 pt-16 ${category === Category.CATALOG ? 'mb-8' : 'mb-16'} flex items-end gap-2 relative z-50`}>
      <h1 className={`text-7xl ${category === Category.CATALOG ? 'font-sans-heavy tracking-tighter' : 'font-serif-heavy'} leading-none`}>
        {category === Category.CATALOG ? '目录' : category}
      </h1>
      <span className="text-5xl font-normal uppercase tracking-tight text-black ml-1 leading-none mb-1">
        {category === Category.CATALOG ? 'CONTENT' : ''}
      </span>
    </div>
  );
};

export default Header;
