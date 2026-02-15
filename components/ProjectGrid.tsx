
import React, { useState, useRef } from 'react';
import { Category, PortfolioItem, ImageItem } from '../types';

interface ProjectGridProps {
  category: Category;
  items: PortfolioItem[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ category, items }) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setShowBackToTop(scrollContainerRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-12 select-none">
        <div className="relative w-80 h-80 mb-8">
           {/* 空画架 SVG */}
           <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl animate-float-slow">
             {/* 后腿 */}
             <line x1="115" y1="40" x2="145" y2="170" stroke="#A09F9C" strokeWidth="4" strokeLinecap="round" />
             {/* 画板本体 */}
             <rect x="50" y="40" width="100" height="120" rx="2" fill="#FDFBF4" stroke="#653018" strokeWidth="4" />
             <rect x="60" y="50" width="80" height="100" rx="1" fill="#F4F4F4" stroke="#E5E5E5" strokeWidth="2" strokeDasharray="4 4" />
             {/* 托架 */}
             <line x1="40" y1="150" x2="160" y2="150" stroke="#653018" strokeWidth="6" strokeLinecap="round" />
             {/* 顶部夹子 */}
             <rect x="90" y="35" width="20" height="10" fill="#B0B298" stroke="#653018" strokeWidth="2" />
             {/* 腿 */}
             <line x1="70" y1="160" x2="60" y2="190" stroke="#653018" strokeWidth="4" strokeLinecap="round" />
             <line x1="130" y1="160" x2="140" y2="190" stroke="#653018" strokeWidth="4" strokeLinecap="round" />
           </svg>
           
           {/* 装饰元素 */}
           <div className="absolute top-20 -right-8 animate-float-reverse">
             <div className="w-16 h-16 bg-[#F9D874] rounded-full opacity-60 mix-blend-multiply blur-sm"></div>
           </div>
           <div className="absolute bottom-20 -left-6 animate-float">
             <div className="w-12 h-12 bg-[#E17DB0] rounded-full opacity-60 mix-blend-multiply blur-sm"></div>
           </div>
           
           {/* 漂浮的问号 */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-6xl font-black text-gray-200 animate-pulse">
             ?
           </div>
        </div>
        
        <div className="text-center relative z-10">
          <h3 className="font-serif-heavy text-2xl text-gray-400 tracking-widest mb-2">COMING SOON</h3>
          <p className="font-title text-lg text-gray-300 tracking-widest">作品正在整理中...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-24 px-4 sm:px-8 pb-32">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col bg-[#FDFBF4] pt-6 px-8 pb-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex flex-col">
                <span className="font-serif-heavy text-black text-lg leading-tight tracking-tight">
                  {item.enTitle.split(' ')[0]}<br/>
                  {item.enTitle.split(' ').slice(1).join(' ') || 'DESIGN'}
                </span>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 font-light tracking-widest text-lg">
                #2026
              </div>

              <div className="text-right">
                <span className="font-serif-heavy text-lg text-black tracking-tight">Design Portfolio</span>
              </div>
            </div>

            {/* Dynamic Grid Layout Based on Category */}
            <div className={`grid gap-x-8 gap-y-12 ${
              category === Category.LONG_IMAGE 
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-16' // 文创设计：更宽松的间距
                : category === Category.POSTER
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
            }`}>
              {item.images.map((img, idx) => (
                <div 
                  key={`${item.id}-${idx}`}
                  className={`relative group cursor-pointer ${
                    category === Category.ILLUSTRATION
                      ? idx >= 18
                        ? 'md:col-span-3 sm:col-span-2 aspect-[21/9]' // Last 3 items full width
                        : 'aspect-[3/4]' // Others vertical
                      : category === Category.LONG_IMAGE
                        ? 'aspect-square' // 文创设计使用正方形比例，更整齐
                        : category === Category.PACKAGE
                          ? 'aspect-[4/3]' // 包装设计
                          : 'aspect-[3/4]' // 海报设计
                  }`}
                  onClick={() => setSelectedImage({ ...img, projectId: item.id })}
                >
                  <img 
                    src={img.url} 
                    alt={`${img.title} ${idx}`} 
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      category === Category.PACKAGE || category === Category.LONG_IMAGE ? 'object-cover' : 'object-contain'
                    }`}
                    loading="lazy"
                  />
                  {/* Hover Overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-opacity duration-300">
                      查看详情
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-[#FDFBF4] w-full max-w-[90vw] h-[90vh] rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full transition-colors shadow-sm group"
            >
              <svg className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Info Section (Fixed) */}
            <div className="w-full md:w-[360px] flex-shrink-0 pl-14 pr-10 pt-14 pb-10 flex flex-col bg-[#FDFBF4] border-r border-gray-100 overflow-y-auto">
              <div className="mb-8">
                <span className="font-sans-heavy text-xs text-[#E17DB0] tracking-widest uppercase mb-3 block">
                  Project Detail
                </span>
                <h3 className="font-sans-heavy text-3xl text-black mb-6 leading-tight">
                  {selectedImage.title}
                </h3>
                <div className="w-12 h-1 bg-black mb-8"></div>
                <p className="font-['Noto_Sans_SC'] font-normal text-gray-600 text-sm leading-relaxed tracking-wide mb-8 text-justify">
                  {selectedImage.desc}
                </p>
                
                {/* Additional Metadata Placeholder */}
                {/* <div className="space-y-4 text-sm font-['Noto_Sans_SC'] font-light text-gray-500">
                  <div className="flex gap-4">
                    <span className="font-bold text-gray-900 w-16">Client</span>
                    <span>Ayuan Studio</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-gray-900 w-16">Year</span>
                    <span>2024</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-gray-900 w-16">Role</span>
                    <span>Visual Design</span>
                  </div>
                </div> */}
              </div>
              
              <div className="mt-auto pt-8 border-t border-gray-200">
                 <span className="font-sans-heavy text-xs text-gray-300 tracking-[0.2em] block text-left">
                   HONG LIANG DESIGN PORTFOLIO
                 </span>
              </div>
            </div>

            {/* Right: Image Scroll Section */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex-1 bg-[#F4F4F4] overflow-y-auto custom-scrollbar relative"
            >
              <div className="flex flex-col gap-4 p-4 md:p-12 min-h-full items-center">
                 {/* Main Image */}
                 <div className="w-full max-w-5xl bg-white p-4 shadow-sm">
                   <img 
                     src={selectedImage.url} 
                     alt={selectedImage.title}
                     className="w-full h-auto object-contain"
                   />
                 </div>
                 
                 {/* Detail Images */}
                 {selectedImage.detailImages && selectedImage.detailImages.map((img, idx) => (
                   <div key={idx} className="w-full max-w-5xl bg-white p-4 shadow-sm animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                     <img 
                       src={img} 
                       alt={`${selectedImage.title} detail ${idx + 1}`}
                       className="w-full h-auto object-contain"
                     />
                   </div>
                 ))}
                 
                 {/* End Mark */}
                 <div className="py-12 flex justify-center items-center opacity-30">
                    <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                 </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className={`absolute bottom-8 right-8 z-30 p-3 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group ${
                showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
              }`}
              title="回到顶部"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
