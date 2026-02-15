import { Category, TabConfig, PortfolioItem } from './types';

/**
 * 如何更换为自己的图片 / How to use your own images:
 * 1. 将图片文件放入 public/images 文件夹中 (例如: my-design.jpg)
 *    Place your image file into the public/images folder (e.g., my-design.jpg)
 * 2. 修改下方的 url 字段，将其指向你的图片路径
 *    Update the url field below to point to your image path
 *    例如/Example: url: '/images/my-design.jpg'
 * 
 * 详情页图片替换 / How to replace detail images:
 * 1. 在对应项目的文件夹中放入 detail_01.jpg, detail_02.jpg 等
 *    Place detail_01.jpg, detail_02.jpg, etc. in the corresponding project folder
 *    例如/Example: public/images/poster/01/detail_01.jpg
 */

export const TABS: TabConfig[] = [
  {
    id: Category.POSTER,
    label: '海报设计',
    enLabel: 'Poster',
    color: 'bg-[#E17DB0]',
    textColor: 'text-[#9C326F]',
    activeColor: '#E17DB0'
  },
  {
    id: Category.PACKAGE,
    label: '包装设计',
    enLabel: 'Package',
    color: 'bg-[#7C3621]',
    textColor: 'text-white',
    activeColor: '#7C3621'
  },
  {
    id: Category.LONG_IMAGE,
    label: '文创设计',
    enLabel: 'Cultural',
    color: 'bg-[#B0B298]',
    textColor: 'text-[#5A5C46]',
    activeColor: '#B0B298'
  },
  {
    id: Category.ILLUSTRATION,
    label: '插画设计',
    enLabel: 'Illustration',
    color: 'bg-[#F9D874]',
    textColor: 'text-[#B48F22]',
    activeColor: '#F9D874'
  },
  {
    id: Category.MATERIAL,
    label: '线下物料设计',
    enLabel: 'MATERIAL',
    color: 'bg-[#3262B5]',
    textColor: 'text-white',
    activeColor: '#3262B5'
  }
];

export const PROJECTS: PortfolioItem[] = [
  {
    id: 'p1',
    category: Category.POSTER,
    title: '海报辑 2024',
    enTitle: 'Poster Collection',
    date: '2024',
    images: [
      {
        url: '/images/poster/01/poster.jpg',
        title: '径山抹茶',
        desc: '源自径山茶园，天然抹茶，超千目细研；香气清甜回甘，口感鲜爽顺滑，适合日常打泡与点心搭配。',
        detailImages: []
      },
      {
        url: '/images/poster/02/poster.jpg',
        title: '抹茶礼盒',
        desc: '径山抹茶礼盒，自饮送礼皆宜；圆罐配独立小杯，干净便携，冲调顺滑，茶香绵长，格调清新。',
        detailImages: []
      },
      {
        url: '/images/poster/03/poster.jpg',
        title: '观山盏',
        desc: '绿釉玻璃盖碗，通透观汤色；器形雅致手感稳妥。慢品径茶，静观山色，让泡饮更有意趣。',
        detailImages: []
      },
      {
        url: '/images/poster/10/poster.jpg',
        title: '观山盏·春季限定',
        desc: '以一盏清透映春色，见一叶沉浮悟山水。精选早春嫩芽，清香高扬、入口清甜，限季登场，邀你在半盏之间品四时之美。',
        detailImages: []
      },
      {
        url: '/images/poster/04/poster.jpg',
        title: '松间执',
        desc: '古意器形，层叠纹理如岁月痕；握持舒适，出水利落不烫手。松风入室，点亮你的茶席。',
        detailImages: []
      },
      {
        url: '/images/poster/11/poster.jpg',
        title: '松间执',
        desc: '松雾轻起，露润茶心。以通透执壶缓缓冲泡，展现芽形与清香；一口松风一口泉味，将山林的清冽与宁静握于掌心。',
        detailImages: []
      },
      {
        url: '/images/poster/05/poster.jpg',
        title: '宋时茶趣礼盒',
        desc: '取法雅宋点茶文化，集合多款茶具茶品；古韵雅致，品饮与陈设皆宜，非遗大师匠作更显品位。',
        detailImages: []
      },
      {
        url: '/images/poster/06/poster.jpg',
        title: '宋时茶趣·器',
        desc: '一盏风雅，千年宋趣。复刻宋代茶器之美，仿宋手执壶与银毫盏交相辉映，重现点茶仪式感，致敬非遗匠心。',
        detailImages: []
      },
      {
        url: '/images/poster/07/poster.jpg',
        title: '这礼是杭州',
        desc: '承宋韵匠心，致山水之礼。融合西湖龙井、径山茶与国窖1573，以杭州山水为函，传递城市文化名片。',
        detailImages: []
      },
      {
        url: '/images/poster/08/poster.jpg',
        title: '仪美尚消费品博览会',
        desc: '2024仪美尚消费品博览会主视觉设计。采用高饱和度色块与醒目排版，突显“懂中国、懂品牌、懂直播”的核心价值，展现全域增长服务商的专业形象。',
        detailImages: []
      },
      {
        url: '/images/poster/09/poster.jpg',
        title: '仪美尚博览会·白',
        desc: '2024仪美尚消费品博览会系列海报。极简白色基调，搭配高饱和度品牌色，清新时尚，诠释“懂中国、懂品牌”的展会理念。',
        detailImages: []
      }
    ]
  },
  {
    id: 'p2',
    category: Category.PACKAGE,
    title: '包装设计 2024',
    enTitle: 'Package Design',
    date: '2024',
    images: [
      {
        url: '/images/package/01/package.jpg',
        title: '径山龙泉·联名礼盒',
        desc: '集合口腔护理与茶粉胶囊的跨界礼盒，水墨山水映衬白青配色，诠释东方韵味与现代生活的完美融合。',
        detailImages: [
          '/images/package/01/detail_01.jpg',
          '/images/package/01/detail_02.jpg',
          '/images/package/01/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/02/package.jpg',
        title: '2025蛇年·迎灵福满',
        desc: '乙巳蛇年新春限定礼盒，红金配色尽显年味。融入蛇形线稿与传统元素，传递“福满格”的诚挚祝福。',
        detailImages: [
          '/images/package/02/detail_01.jpg',
          '/images/package/02/detail_02.jpg',
          '/images/package/02/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/03/package.jpg',
        title: '径山龙泉·抹茶瓶盖',
        desc: '甄选黄金产区超千目抹茶，搭配泡茶专用水。创新瓶盖设计锁住鲜活，随时随地还原中华抹茶之源的纯正口感。',
        detailImages: [
          '/images/package/03/detail_01.jpg',
          '/images/package/03/detail_02.jpg',
          '/images/package/03/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/04/package.jpg',
        title: '宋时茶趣·非遗礼盒',
        desc: '致敬非遗匠心，复刻宋代点茶风雅。集仿宋执壶与茶器于一函，以青绿古韵重现千年宋趣的仪式感。',
        detailImages: [
          '/images/package/04/detail_01.jpg',
          '/images/package/04/detail_02.jpg',
          '/images/package/04/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/05/package.jpg',
        title: '松间执·单品包装',
        desc: '极简青绿调，层叠壶形插画演绎“松间执”意境。松针云纹点缀，展现轻奢雅致的现代茶器美学。',
        detailImages: [
          '/images/package/05/detail_01.jpg',
          '/images/package/05/detail_02.jpg',
          '/images/package/05/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/06/package.jpg',
        title: '观山盏·茶器包装',
        desc: '青绿渐变映衬竹影清风，烫金书法题写“观山盏”。将盏中茶海的意境融入包装，以极简东方美学呈现茶器的通透与雅致。',
        detailImages: [
          '/images/package/06/detail_01.jpg',
          '/images/package/06/detail_02.jpg'
        ]
      },
      {
        url: '/images/package/07/package.jpg',
        title: '这礼是杭州·城市礼盒',
        desc: '承宋韵匠心，致山水之礼。融合西湖龙井与径山茶，以水墨山水描绘杭州风情，传递“Hangzhou Presents”的城市文化名片。',
        detailImages: [
          '/images/package/07/detail_01.jpg',
          '/images/package/07/detail_02.jpg',
          '/images/package/07/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/08/package.jpg',
        title: '西溪十景·龙珠礼盒',
        desc: '以水墨丹青绘西溪十景，烫金书法点缀其间。内藏龙珠好茶，将湿地风光与茶香完美封存，尽显江南文人的风雅情怀。',
        detailImages: [
          '/images/package/08/detail_01.jpg'
        ]
      },
      {
        url: '/images/package/09/package.jpg',
        title: '英雄酒·系列包装',
        desc: '采用Art Deco风格放射状线条，寓意光芒万丈。黑金、红金等四色演绎不同风味，瓶颈繁复纹饰与主标相呼应，彰显豪迈与尊贵。',
        detailImages: []
      },
      {
        url: '/images/package/10/package.jpg',
        title: '金刚刺酒·养生酒',
        desc: '极简米白肌理纸搭配活力橙底，传统草本纹样以线稿形式铺陈。书法题字与红色印章相映成趣，诠释江南千年传承的非凡雅味。',
        detailImages: [
          '/images/package/10/detail_01.jpg',
          '/images/package/10/detail_02.jpg',
          '/images/package/10/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/11/package.jpg',
        title: '抹茶瓶盖·单品',
        desc: '源自北纬30°黄金产茶地带，创新瓶盖设计锁鲜。深绿配色搭配中式纹样，突显“中华抹茶之源”的品牌自信。',
        detailImages: [
          '/images/package/11/detail_01.jpg'
        ]
      },
      {
        url: '/images/package/12/package.jpg',
        title: '海创未来·礼遇人才',
        desc: '以霓虹城市剪影为背景，融合深紫与金黄配色。立体字设计突显“礼遇人才”主题，展现现代活力与尊贵礼遇。',
        detailImages: [
          '/images/package/12/detail_01.jpg',
          '/images/package/12/detail_02.jpg'
        ]
      },
      {
        url: '/images/package/13/package.jpg',
        title: '径山禅茶·臻选',
        desc: '深邃墨绿底色衬托茶园摄影，金色中英文字体点缀其间。极简设计诠释“茶味醇厚、茶色清冽”的禅茶意境。',
        detailImages: [
          '/images/package/13/detail_01.jpg',
          '/images/package/13/detail_02.jpg'
        ]
      },
      {
        url: '/images/package/14/package.jpg',
        title: '槐树下议事·书籍装帧',
        desc: '红色布面精装，烫金书名搭配复古插画。金色书口设计增添厚重感，体现历史沉淀与文化传承的庄重气质。',
        detailImages: [
          '/images/package/14/detail_01.jpg',
          '/images/package/14/detail_02.jpg'
        ]
      },
      {
        url: '/images/package/15/package.jpg',
        title: '素趣×CHALAND·联名礼盒',
        desc: '米白底色搭配青绿山水插画，书法字体与现代排版结合。O\'ralpet与茶品牌的跨界合作，传递自然清新的生活美学。',
        detailImages: [
          '/images/package/15/detail_01.jpg'
        ]
      },
      {
        url: '/images/package/16/package.jpg',
        title: '抹茶瓶盖·礼盒版',
        desc: '圆形设计寓意圆满，双语环绕排版彰显国际化视野。中心“抹茶瓶盖”书法字体苍劲有力，与清新绿色背景相得益彰。',
        detailImages: [
          '/images/package/16/detail_01.jpg',
          '/images/package/16/detail_02.jpg'
        ]
      },
      {
        url: '/images/package/17/package.jpg',
        title: '陆羽水·泡茶专用',
        desc: '致敬茶圣陆羽，专为好茶而生。蓝青色调营造清冽泉水质感，书法大字与现代排版结合，突出“三秒喝出茶真味”的产品卖点。',
        detailImages: [
          '/images/package/17/detail_01.jpg',
          '/images/package/17/detail_02.jpg',
          '/images/package/17/detail_03.jpg'
        ]
      },
      {
        url: '/images/package/18/package.jpg',
        title: '径山月礼·禅意中秋',
        desc: '中秋限定礼盒，以“禅茶一味”为核心。清新绿色调搭配几何纹样，内含抹茶酥与抹茶瓶盖，传递“超千目抹茶”的细腻与茶韵。',
        detailImages: [
          '/images/package/18/detail_01.jpg'
        ]
      },
      {
        url: '/images/package/19/package.jpg',
        title: '禅茶一味·宋礼',
        desc: '展开式礼盒设计，内页呈现宋代点茶图卷。米色肌理纸还原古画质感，将“径山宋礼”的文化底蕴娓娓道来。',
        detailImages: [
          '/images/package/19/detail_01.jpg'
        ]
      }
    ]
  },
  {
    id: 'p3',
    category: Category.LONG_IMAGE,
    title: '文创设计 2024',
    enTitle: 'Cultural Design',
    date: '2024',
    images: [
      {
        url: '/images/cultural/01/cultural.jpg',
        title: '泰康30周年·冰箱贴',
        desc: 'Taikang 30th Anniversary Fridge Magnet',
        detailImages: [
          '/images/cultural/01/detail_01.jpg'
        ]
      },
      {
        url: '/images/cultural/02/cultural.jpg',
        title: '泰康30周年·金属书签',
        desc: 'Taikang 30th Anniversary Metal Bookmark',
        detailImages: [
          '/images/cultural/02/detail_01.jpg'
        ]
      },
      {
        url: '/images/cultural/03/cultural.jpg',
        title: '泰康30周年·擦手巾',
        desc: 'Taikang 30th Anniversary Hand Towel',
        detailImages: [
          '/images/cultural/03/detail_01.jpg'
        ]
      },
      {
        url: '/images/cultural/04/cultural.jpg',
        title: '泰康30周年·小马便签台',
        desc: 'Taikang 30th Anniversary Memo Pad',
        detailImages: [
          '/images/cultural/04/detail_01.jpg'
        ]
      },
      {
        url: '/images/cultural/05/cultural.jpg',
        title: '泰康30周年·手提袋',
        desc: 'Taikang 30th Anniversary Tote Bag',
        detailImages: [
          '/images/cultural/05/detail_01.jpg',
          '/images/cultural/05/detail_02.jpg'
        ]
      },
      {
        url: '/images/cultural/06/cultural.jpg',
        title: '径山龙泉·冰箱贴系列',
        desc: 'Dragon & Meeting Under Camphor Tree Magnets',
        detailImages: [
          '/images/cultural/06/detail_01.jpg',
          '/images/cultural/06/detail_02.jpg'
        ]
      },
      {
        url: '/images/cultural/07/cultural.jpg',
        title: '企业表情包设计',
        desc: 'Pagoda Brand & ZJ Cereals Group Emojis',
        detailImages: [
          '/images/cultural/07/detail_01.jpg'
        ]
      },
      {
        url: '/images/cultural/08/cultural.jpg',
        title: '塔牌·笔记本设计',
        desc: 'Pagoda Brand Notebook Design',
        detailImages: [
          '/images/cultural/08/detail_01.jpg',
          '/images/cultural/08/detail_02.jpg'
        ]
      },
      {
        url: '/images/cultural/09/cultural.jpg',
        title: '塔牌×太平年·冰箱贴',
        desc: 'Pagoda x Taipingnian Fridge Magnet',
        detailImages: []
      },
      {
        url: '/images/cultural/10/cultural.jpg',
        title: '塔牌×太平年·红包',
        desc: 'Pagoda x Taipingnian Red Envelopes',
        detailImages: [
          '/images/cultural/10/detail_01.jpg',
          '/images/cultural/10/detail_02.jpg'
        ]
      },
      {
        url: '/images/cultural/11/cultural.jpg',
        title: '塔牌×太平年·圆珠笔',
        desc: 'Pagoda x Taipingnian Ballpoint Pen',
        detailImages: [
          '/images/cultural/11/detail_01.jpg',
          '/images/cultural/11/detail_02.jpg'
        ]
      },
      {
        url: '/images/cultural/12/cultural.jpg',
        title: '京队乒乓球·钥匙扣',
        desc: 'Beijing Team Table Tennis Keychain',
        detailImages: []
      }
    ]
  },
  {
    id: 'p4',
    category: Category.ILLUSTRATION,
    title: '插画设计 2024',
    enTitle: 'Illustration Design',
    date: '2024',
    images: [
      // 12 Vertical Images (Portrait 4:3)
      {
        url: '/images/illustration/01/illustration.jpg',
        title: '除夕舞狮迎新',
        desc: '红灯高挂狮舞贺岁，爆竹声中万家团圆喜迎新年',
        detailImages: []
      },
      {
        url: '/images/illustration/02/illustration.jpg',
        title: '开工大吉',
        desc: '锣鼓喧天启新程，众志成城开门红再创佳绩连连',
        detailImages: []
      },
      {
        url: '/images/illustration/03/illustration.jpg',
        title: '小雪泉暖',
        desc: '雪落庭前汤意暖，小憩煮茶慰人心驱寒养身安宁',
        detailImages: []
      },
      {
        url: '/images/illustration/04/illustration.jpg',
        title: '重阳登高赏菊',
        desc: '秋高气爽登高望，黄菊正盛寄思亲祈康长寿平安',
        detailImages: []
      },
      {
        url: '/images/illustration/05/illustration.jpg',
        title: '霜降柿红',
        desc: '霜染枝头柿子红，甜润秋心满筐收人间好味相逢',
        detailImages: []
      },
      {
        url: '/images/illustration/06/illustration.jpg',
        title: '国庆盛世',
        desc: '万里长城展宏图，牡丹花开颂祖国繁荣昌盛共谱华章',
        detailImages: []
      },
      {
        url: '/images/illustration/07/illustration.jpg',
        title: '月满中秋',
        desc: '金月高悬照团圆，玉兔伴月品饼香中秋佳节共赏婵娟',
        detailImages: []
      },
      {
        url: '/images/illustration/08/illustration.jpg',
        title: '寒露棉白',
        desc: '寒露凝霜棉如雪，秋意渐浓云舒卷静候冬来岁月安好',
        detailImages: []
      },
      {
        url: '/images/illustration/09/illustration.jpg',
        title: '秋分金黄',
        desc: '金黄银杏染秋色，平分秋色日夜长落叶知秋满地金黄',
        detailImages: []
      },
      {
        url: '/images/illustration/10/illustration.jpg',
        title: '白露蒹葭',
        desc: '白露为霜蒹葭苍，白鹭翩飞水云间湿地秋色入画来',
        detailImages: []
      },
      {
        url: '/images/illustration/11/illustration.jpg',
        title: '小寒滑雪',
        desc: '小寒料峭雪纷飞，踏雪疾驰燃激情冰雪世界尽欢颜',
        detailImages: []
      },
      {
        url: '/images/illustration/12/illustration.jpg',
        title: '大暑冲浪',
        desc: '大暑炎炎热浪涌，乘风破浪逐清凉海天一色任我行',
        detailImages: []
      },
      // 9 Horizontal Images (Landscape 4:3)
      {
        url: '/images/illustration/13/illustration.jpg',
        title: '小暑垂钓',
        desc: '小暑温风至荷香，静坐池畔垂钓乐心静自然凉意生',
        detailImages: []
      },
      {
        url: '/images/illustration/14/illustration.jpg',
        title: '夏至荔红',
        desc: '夏至日长荔枝红，蝉鸣声声唤盛夏清甜一刻醉心田',
        detailImages: []
      },
      {
        url: '/images/illustration/15/illustration.jpg',
        title: '女神节快乐',
        desc: '繁花似锦映芳华，自信从容绽光芒致敬最美的她',
        detailImages: []
      },
      {
        url: '/images/illustration/16/illustration.jpg',
        title: '清明雨上',
        desc: '清明时节雨纷纷，牧童遥指杏花村山水之间寄哀思',
        detailImages: []
      },
      {
        url: '/images/illustration/17/illustration.jpg',
        title: '春分燕归',
        desc: '春分时节燕归来，百花争艳春意浓生机勃勃满人间',
        detailImages: []
      },
      {
        url: '/images/illustration/18/illustration.jpg',
        title: '龙抬头',
        desc: '二月二龙抬头，祥龙昂首纳瑞气风调雨顺兆丰年',
        detailImages: []
      },
      {
        url: '/images/illustration/19/illustration.jpg',
        title: '宋代点茶',
        desc: '茶园青翠点茶香，汉服雅韵承古意一盏清茗品时光',
        detailImages: []
      },
      {
        url: '/images/illustration/20/illustration.jpg',
        title: '万圣萌鬼',
        desc: '不给糖就捣蛋，变装派对狂欢夜奇趣搞怪乐翻天',
        detailImages: []
      },
      {
        url: '/images/illustration/21/illustration.jpg',
        title: '圣诞快乐',
        desc: '银装素裹雪花飘，圣诞树下礼物堆缤纷冬日送祝福',
        detailImages: []
      }
    ]
  },
  {
    id: 'p5',
    category: Category.MATERIAL,
    title: '线下物料设计 2024',
    enTitle: 'Material Design',
    date: '2024',
    images: [
      {
        url: '/images/material/01/material.jpg',
        title: '未来探索日·场地搭建',
        desc: 'New Center Future Exploration Day Venue Setup',
        detailImages: [
          '/images/material/01/detail_01.jpg',
          '/images/material/01/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/02/material.jpg',
        title: '未来探索日·餐车',
        desc: 'New Center Future Exploration Day Food Truck',
        detailImages: [
          '/images/material/02/detail_01.jpg',
          '/images/material/02/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/03/material.jpg',
        title: '未来探索日·周边',
        desc: 'Cup Sleeves, Keychains & Tote Bags',
        detailImages: [
          '/images/material/03/detail_01.jpg',
          '/images/material/03/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/04/material.jpg',
        title: '未来探索日·导视',
        desc: 'Wayfinding Signs & Photo Spots',
        detailImages: [
          '/images/material/04/detail_01.jpg'
        ]
      },
      {
        url: '/images/material/05/material.jpg',
        title: '未来探索日·物料',
        desc: 'Roll-up Banners, Vouchers & Wristbands',
        detailImages: [
          '/images/material/05/detail_01.jpg',
          '/images/material/05/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/06/material.jpg',
        title: '越位音乐节·周边',
        desc: 'Offside Music Festival Merch',
        detailImages: [
          '/images/material/06/detail_01.jpg',
          '/images/material/06/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/07/material.jpg',
        title: '超千目抹茶·摊位物料',
        desc: 'Matcha Ice Cream Stall Posters & Tickets',
        detailImages: [
          '/images/material/07/detail_01.jpg',
          '/images/material/07/detail_02.jpg',
          '/images/material/07/detail_03.jpg'
        ]
      },
      {
        url: '/images/material/08/material.jpg',
        title: '径山龙泉·双旦杯',
        desc: 'Christmas & New Year Special Cup',
        detailImages: [
          '/images/material/08/detail_01.jpg',
          '/images/material/08/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/09/material.jpg',
        title: '无忧之夜·摊位设计',
        desc: 'Jingbaiwei Matcha x Carefree Night Booth',
        detailImages: [
          '/images/material/09/detail_01.jpg',
          '/images/material/09/detail_02.jpg',
          '/images/material/09/detail_03.jpg'
        ]
      },
      {
        url: '/images/material/10/material.jpg',
        title: '我爱余杭·系列杯套',
        desc: 'I Love Yuhang Series Cup Sleeves',
        detailImages: [
          '/images/material/10/detail_01.jpg'
        ]
      },
      {
        url: '/images/material/11/material.jpg',
        title: '径山龙泉·奶茶杯',
        desc: 'Jingshan Longquan Milk Tea Cup',
        detailImages: [
          '/images/material/11/detail_01.jpg',
          '/images/material/11/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/12/material.jpg',
        title: '径山龙泉·冰淇淋杯',
        desc: 'Jingshan Longquan Ice Cream Cup',
        detailImages: [
          '/images/material/12/detail_01.jpg',
          '/images/material/12/detail_02.jpg'
        ]
      },
      {
        url: '/images/material/13/material.jpg',
        title: '新增物料设计 4',
        desc: 'New Material Design Description',
        detailImages: [
          '/images/material/13/detail_01.jpg'
        ]
      }
    ]
  }
];
