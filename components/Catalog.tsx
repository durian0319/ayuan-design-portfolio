
import React from 'react';
import { Category } from '../types';

interface CatalogProps {
  onSelect: (category: Category) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onSelect }) => {
  const items = [
    { 
      id: Category.POSTER, 
      num: '1', 
      label: '海报设计', 
      color: '#653018', // Brown
      pos: 'top-[45%] left-[8%]', 
      w: 'w-[260px]', 
      h: 'h-[100px]',
      textPos: 'left-[20%] top-[40%]',
      numPos: '-top-6 -left-2',
      path: "M10,35 Q60,15 130,25 T250,35 L240,75 Q160,95 80,85 T10,65 Z" 
    },
    { 
      id: Category.PACKAGE, 
      num: '2', 
      label: '包装设计', 
      color: '#7C8060', // Olive
      pos: 'top-[18%] left-[25%]', 
      w: 'w-[240px]', 
      h: 'h-[120px]',
      textPos: 'left-[25%] top-[65%]',
      numPos: '-top-4 -left-4',
      // Sunglasses shape
      path: "M20,40 h70 v40 q-5,15 -35,15 q-30,0 -35,-15 Z M110,40 h70 v40 q-5,15 -35,15 q-30,0 -35,-15 Z M90,50 q10,-15 20,0 M20,40 L0,30 M180,40 L220,20" 
    },
    { 
      id: Category.LONG_IMAGE, 
      num: '3', 
      label: '文创设计', 
      color: '#F9D856', // Yellow
      pos: 'top-[58%] left-[38%]', 
      w: 'w-[280px]', 
      h: 'h-[140px]',
      textPos: 'left-[35%] top-[45%]',
      numPos: '-top-2 -left-2',
      path: "M20,30 Q90,10 160,20 T270,30 L260,110 Q180,130 90,120 T10,90 Z" 
    },
    { 
      id: Category.ILLUSTRATION, 
      num: '4', 
      label: '插画设计', 
      color: '#D44C9A', // Pink
      pos: 'top-[20%] right-[25%]', 
      w: 'w-[180px]', 
      h: 'h-[160px]',
      textPos: 'left-[15%] top-[45%]',
      numPos: '-top-0 -left-6',
      // Blob with a tail line
      path: "M40,30 Q80,10 120,40 T130,110 Q80,140 40,100 T30,30 Z M40,30 Q30,10 10,10" 
    },
    { 
      id: Category.MATERIAL, 
      num: '5', 
      label: '线下物料设计', 
      color: '#1E4CB0', // Blue
      pos: 'top-[42%] right-[5%]', 
      w: 'w-[300px]', 
      h: 'h-[200px]',
      textPos: 'left-[35%] top-[55%]',
      numPos: 'top-10 -left-6',
      path: "M30,20 L280,30 L270,170 L40,160 Q10,90 30,20 Z" 
    },
  ];

  return (
    <div className="relative h-[650px] w-full px-12 pt-10">
      {items.map((item, idx) => {
        // 分配不同的浮动动画给各个部分，制造分离感
        const anims = ['animate-float', 'animate-float-reverse', 'animate-float-slow'];
        const svgAnim = anims[idx % 3];
        const numAnim = anims[(idx + 1) % 3];
        const textAnim = anims[(idx + 2) % 3];
        
        return (
          <div
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`absolute ${item.pos} ${item.w} ${item.h} cursor-pointer group hover:scale-105 transition-transform duration-300`}
          >
            {/* SVG Shape */}
            <div className={`w-full h-full ${svgAnim}`}>
              <svg viewBox={`0 0 ${item.w.match(/\d+/)?.[0] || 300} ${item.h.match(/\d+/)?.[0] || 200}`} className="w-full h-full drop-shadow-lg">
                 {item.id === Category.PACKAGE || item.id === Category.ILLUSTRATION ? (
                   <path d={item.path} fill={item.color} stroke={item.color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                 ) : (
                   <path d={item.path} fill={item.color} />
                 )}
              </svg>
            </div>
  
            {/* Number */}
            <div className={`absolute ${item.numPos} z-20 ${numAnim}`}>
              <span 
                className="font-title font-black text-6xl text-black drop-shadow-md transform -rotate-12"
                style={{ 
                  WebkitTextStroke: '2px white',
                  paintOrder: 'stroke fill'
                }}
              >
                {item.num}
              </span>
            </div>
  
            {/* Label Text */}
            <div className={`absolute ${item.textPos} z-10 pointer-events-none ${textAnim}`}>
              <span 
                className="font-sans-heavy text-5xl tracking-tighter text-white"
                style={{ 
                  WebkitTextStroke: '1.5px black',
                  paintOrder: 'stroke fill'
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
