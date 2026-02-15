
import React, { useState, useEffect } from 'react';
import { Category } from './types';
import { PROJECTS, TABS } from './constants';
import Header from './components/Header';
import Catalog from './components/Catalog';
import ProjectGrid from './components/ProjectGrid';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.HOME);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('site_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '711') {
      setIsAuthenticated(true);
      localStorage.setItem('site_auth', 'true');
      setLoginError(false);
    } else {
      setLoginError(true);
      setPasswordInput('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F4F4]">
        <div className="bg-white p-12 rounded-2xl shadow-xl w-96 text-center animate-in fade-in zoom-in duration-500">
          <div className="mb-8">
            <h1 className="font-sans-heavy font-black text-3xl mb-2 tracking-widest">HONG LIANG</h1>
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">Design Portfolio</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setLoginError(false);
                }}
                className={`w-full border-b-2 p-3 text-center text-xl tracking-widest focus:outline-none transition-colors bg-transparent
                  ${loginError ? 'border-red-500 text-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="PASSWORD"
                autoFocus
              />
              {loginError && (
                <p className="text-red-500 text-xs mt-2 absolute w-full left-0 animate-pulse">
                  密码错误 / Incorrect Password
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-bold tracking-widest text-sm mt-8"
            >
              ENTER
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderHomeFolders = () => (
    <div className="relative w-full h-[650px] px-12 mt-4">
      {/* 文件夹底层容器：采用图片中的错落布局 */}
      <div className="absolute inset-0 flex items-end pb-10">
        {TABS.map((tab, idx) => {
          // 基于第一张图的布局配置
          const configs = [
            { id: Category.POSTER, pos: 'left-[2%] z-50 w-[38%]', h: 'h-[420px]', rot: 'rotate-[-1deg]', labelPos: 'left-8 bottom-12' },
            { id: Category.PACKAGE, pos: 'left-[6%] z-10 w-[30%]', h: 'h-[460px]', rot: 'rotate-[-2deg]', labelPos: 'left-8 bottom-12' },
            { id: Category.LONG_IMAGE, pos: 'left-[22%] z-40 w-[42%]', h: 'h-[400px]', rot: 'rotate-[0.5deg]', labelPos: 'right-10 bottom-16' },
            { id: Category.ILLUSTRATION, pos: 'left-[42%] z-20 w-[35%]', h: 'h-[480px]', rot: 'rotate-[1deg]', labelPos: 'left-8 bottom-12' },
            { id: Category.MATERIAL, pos: 'right-[2%] z-30 w-[48%]', h: 'h-[430px]', rot: 'rotate-[-0.5deg]', labelPos: 'right-12 bottom-10' },
          ];
          
          const conf = configs.find(c => c.id === tab.id) || configs[0];
          
          return (
            <div 
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`absolute transition-all duration-500 hover:scale-[1.02] hover:z-[60] cursor-pointer bottom-0 ${conf.pos} ${conf.rot}`}
            >
              {/* Folder Tab (Handle) */}
              <div className={`folder-tab h-16 w-48 ${tab.color} ${tab.textColor} px-6 pt-3 flex items-start shadow-[-10px_-5px_30px_rgba(0,0,0,0.1)]`}>
                <span className="text-sm font-bold opacity-60 tracking-tighter">{tab.enLabel}</span>
              </div>
              {/* Folder Body */}
              <div className={`w-full ${conf.h} ${tab.color} -mt-10 shadow-[20px_0_60px_rgba(0,0,0,0.15)] p-10 flex flex-col justify-end relative overflow-hidden`}>
                 {/* 装饰性底层大字 (根据图1) */}
                 {conf.labelPos && (
                    <span className={`absolute ${conf.labelPos} text-5xl font-serif-heavy opacity-20 pointer-events-none whitespace-nowrap`}>
                      {tab.label === '物料设计' ? '线下物料设计' : tab.label}
                    </span>
                 )}
                 {/* 细节线条 */}
                 <div className="h-[2px] w-16 bg-current opacity-10 mb-4"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen max-w-[1600px] mx-auto flex flex-col pb-20 overflow-x-hidden">
      <nav className="flex justify-between px-12 py-8 relative z-[200]">
        <button onClick={() => setActiveCategory(Category.HOME)} className="hover:opacity-60 transition-opacity flex items-baseline gap-2">
          <span className="font-sans-heavy font-black text-2xl [-webkit-text-stroke:0.8px]">洪靓</span>
          <span className="font-sans-heavy font-bold text-xl tracking-widest">HONG LIANG</span>
        </button>
        <div className="space-x-12 text-sm font-black uppercase tracking-tighter">
          <button onClick={() => setActiveCategory(Category.CATALOG)} className="hover:text-gray-400">目录</button>
          <button onClick={() => setActiveCategory(Category.HOME)} className="hover:text-gray-400">首页</button>
        </div>
      </nav>

      <main className="flex-1 w-full relative">
        <Header category={activeCategory} onHomeClick={() => setActiveCategory(Category.HOME)} />

        {activeCategory === Category.HOME && renderHomeFolders()}
        
        {activeCategory === Category.CATALOG && <Catalog onSelect={setActiveCategory} />}

        {activeCategory !== Category.HOME && activeCategory !== Category.CATALOG && (
          <div className="px-12 mb-20 mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
             {/* 详情页顶部的分类快捷切换 */}
             <div className="flex gap-1 h-[100px] mb-20">
                {TABS.map((tab) => (
                  <div 
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`flex-1 transition-all duration-300 cursor-pointer h-full relative group
                      ${activeCategory === tab.id ? 'flex-[1.5] z-10 scale-105' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}
                    `}
                  >
                    <div className={`folder-tab h-8 w-24 ${tab.color} ${tab.textColor} px-3 py-1 text-[8px] font-bold`}>{tab.enLabel}</div>
                    <div className={`w-full h-full ${tab.color} -mt-6 p-4 border-t border-black/5 flex items-center shadow-lg`}>
                       <span className="text-xl font-serif-heavy truncate">{tab.label}</span>
                    </div>
                  </div>
                ))}
             </div>
             <ProjectGrid 
               category={activeCategory} 
               items={PROJECTS.filter(p => p.category === activeCategory)} 
             />
          </div>
        )}
      </main>

      <footer className="px-12 pt-12 pb-12 flex justify-between items-end opacity-40 select-none pointer-events-none">
        <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#B5B4B0]">HONG LIANG DESIGN 2026</div>
        <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B5B4B0]">DESIGN PORTFOLIO</div>
      </footer>
    </div>
  );
};

export default App;
