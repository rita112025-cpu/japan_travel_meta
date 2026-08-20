/* =====================================================================
   data.js — 沖繩自駕慢遊（未來行程用範本）
   ---------------------------------------------------------------------
   ⚠️ 這是一份「可重複使用」的範本，日期、航班、飯店、租車資訊均為範例，
      出發前請替換成你自己的實際訂位資料。
   ---------------------------------------------------------------------
   ✅ 內容來源：
      - 每日行程骨架、車輛/證件重點：整理自作者先前沖繩自駕行程整理稿
      - 景點・美食清單（regions / food）：整理自 Google MyMaps 匯入表
        okinawa_google_maps_import_v9_mymaps_fixed_chinese_name.csv
        （地址／MAPCODE 為當時查詢結果，僅供參考）
      - 日文會話：整理自作者先前製作的旅遊會話手冊
      - 座標一律改用「地址文字」導航（Google Maps 文字搜尋），
        MAPCODE 供日本租車導航機輸入用，不能直接餵給 Google Maps 網址。
      - 出發前請務必用 Google Maps 逐一核對地址與 MAPCODE，
        原始資料本身已標註多處「不同來源座標有落差」的項目。
   ===================================================================== */

const TRIP = {
  /* ---------- 1. 基本資訊（範例，請替換） ---------- */
  city: '沖繩',
  cityEn: 'OKINAWA',
  subtitle: '南國自駕慢遊',
  startDate: '2026-12-01',   // ⚠️ 範例出發日，請改成你實際的未來行程日期
  travelMode: 'driving',

  /* ---------- 2. 航班（範例，請替換為實際訂位） ---------- */
  transport: [
    {
      dir: 'OUTBOUND', dirZh: '去程', carrier: '長榮航空（範例）', code: 'BR186',
      fromCode: 'TPE', fromName: '桃園機場T2', fromTime: '16:25',
      toCode: 'OKA', toName: '那霸機場', toTime: '18:55',
      dayIndex: 0, tags: ['範例航班', '請替換'],
      note: '訂位代號請查航空公司 App／email；此為範例時刻，非實際訂位'
    },
    {
      dir: 'RETURN', dirZh: '回程', carrier: '長榮航空（範例）', code: 'BR113',
      fromCode: 'OKA', fromName: '那霸機場', fromTime: '10:15',
      toCode: 'TPE', toName: '桃園機場T2', toTime: '10:55',
      dayIndex: 4, tags: ['範例航班', '請替換'],
      note: '行動電源不可託運，請放隨身包'
    }
  ],

  /* ---------- 3. 租車（範例，沖繩自駕必備） ---------- */
  carRental: {
    company: 'SKY Rent-A-Car（範例，可替換其他租車公司）',
    pickup: { location: '那霸空港營業所', dayIndex: 1, time: '09:00' },
    dropoff: { location: '那霸空港營業所', dayIndex: 3, time: '19:00' },
    carClass: '5人座（範例車型，依實際訂車為準）',
    docs: ['護照', '台灣駕照正本', '日文譯本（監理站／監理所申請）', '信用卡', '租車憑證'],
    notes: [
      '日文譯本沒帶＝可能拿不到車，出發前務必先申請',
      '取車前拍攝車身現況影片存證，還車前加滿油並保留收據',
      '費用通常不含：燃油費、ETC、停車費、景點門票、超時費用',
      '車上請勿留 ETC 卡或個人物品；還車前確認導航語言與里程數'
    ]
  },

  /* ---------- 4. 住宿（範例，請替換為實際訂房） ---------- */
  stays: [
    {
      name: 'Hotel Gran View Garden Okinawa（範例，請替換為實際訂房）',
      area: '豐見城／那霸周邊',
      checkIn: 0, checkOut: 4,
      addr: 'Hotel Gran View Garden Okinawa, Okinawa, Japan',
      mapcode: '232 543 670*38',
      note: '⚠️ 座標為地址推估，訂房後請務必核對；電話請於訂房確認信查詢'
    }
  ],

  /* ---------- 5. 每日行程（5 天自駕範本） ---------- */
  days: [
    {
      theme: '抵達沖繩・輕鬆入住',
      themeEn: 'ARRIVAL & SETTLE IN',
      stops: [
        { time: '18:55', name: '那霸機場入境', en: 'Naha Airport Arrival',
          addr: 'Naha Airport, Okinawa, Japan', mapcode: '33 123 189*60',
          note: '領行李、確認網卡或漫遊；還沒取車，搭計程車或飯店接駁前往住宿', tag: '交通' },
        { time: '20:00', name: 'Check-in：Hotel Gran View Garden Okinawa', en: 'Hotel Check-in',
          addr: 'Hotel Gran View Garden Okinawa, Okinawa, Japan', mapcode: '232 543 670*38',
          note: '⚠️ 座標為地址推估，訂房後請核對；此為範例飯店，請於 data.js 換成實際訂房', tag: '住宿' },
        { time: '21:00', name: '飯店周邊晚餐：iias Okinawa Toyosaki', en: 'Dinner near Hotel',
          addr: 'iias Okinawa Toyosaki, Tomigusuku, Okinawa, Japan',
          note: '商場美食街；第一天不排遠，先熟悉飯店周邊與超商位置', tag: '吃' }
      ]
    },
    {
      theme: '取車・北部美麗海一日',
      themeEn: 'CAR PICKUP & NORTH DAY',
      stops: [
        { time: '09:00', name: 'SKY租車 那霸空港營業所 取車', en: 'Rental Car Pickup',
          addr: 'SKY Rent A Car Naha Airport, 1-23-8 Gushi, Naha, Okinawa', mapcode: '33 033 327*52',
          note: '必帶：護照、台灣駕照正本、日文譯本、信用卡、租車憑證；取車前拍車身現況影片', tag: '交通' },
        { time: '11:00', name: '古宇利大橋', en: 'Kouri Bridge',
          addr: 'Kouri Bridge, Okinawa, Japan', mapcode: '485 662 133*22',
          note: '跨海大橋，橋頭有停車場可拍照', tag: '景點' },
        { time: '11:30', name: '心形岩・古宇利島', en: 'Heart Rock, Kouri Island',
          addr: 'Heart Rock Kouri Island, Okinawa, Japan', mapcode: '485 751 209*77',
          note: '⚠️ 不同來源座標略有落差，抵達後以現場步道指標為準', tag: '景點' },
        { time: '12:30', name: '午餐：古宇利蝦飯 Kouri Shrimp', en: 'Lunch: Kouri Shrimp',
          addr: 'Kouri Shrimp, 314 Kouri, Nakijin, Okinawa, Japan', mapcode: '485 692 203*74',
          note: '古宇利島排隊名店；週二公休，出發前確認營業', tag: '吃' },
        { time: '14:30', name: '沖繩美麗海水族館', en: 'Churaumi Aquarium',
          addr: 'Okinawa Churaumi Aquarium, Okinawa, Japan', mapcode: '553 075 737*32',
          note: '建議預留 2 小時以上；黑潮之海大水槽必看', tag: '景點' },
        { time: '18:00', name: '返回飯店・晚餐自理', en: 'Return to Hotel',
          addr: 'Hotel Gran View Garden Okinawa, Okinawa, Japan', mapcode: '232 543 670*38',
          note: '北部回南部車程約 1.5–2 小時，晚餐不要訂太早', tag: '交通' }
      ]
    },
    {
      theme: '中部海景・美國村',
      themeEn: 'CENTRAL COAST & AMERICAN VILLAGE',
      stops: [
        { time: '09:30', name: '萬座毛', en: 'Cape Manzamo',
          addr: 'Cape Manzamo, Okinawa, Japan', mapcode: '206 312 097*04',
          note: '⚠️ 不同來源座標落差明顯，出發前務必用手機 Google Maps 核對', tag: '景點' },
        { time: '11:00', name: '殘波岬燈塔', en: 'Cape Zanpa Lighthouse',
          addr: 'Cape Zanpa Lighthouse, Okinawa, Japan', mapcode: '1005 685 377*58',
          note: '燈塔可登頂遠眺東海', tag: '景點' },
        { time: '11:30', name: '殘波大獅子', en: 'Zanpa Big Lion',
          addr: 'Zanpa Big Lion, Okinawa, Japan', mapcode: '',
          note: '與殘波岬燈塔同園區，步行可達，可共用上方 MAPCODE', tag: '景點' },
        { time: '13:00', name: '午餐：Kijimuna 塔可飯', en: 'Lunch: Taco Rice Kijimuna',
          addr: 'Taco Rice Cafe Kijimuna Depot Island, Chatan, Okinawa, Japan', mapcode: '33 525 383*28',
          note: '推薦塔可飯、塔可蛋包飯', tag: '吃' },
        { time: '14:00', name: '美國村', en: 'Mihama American Village',
          addr: 'Mihama American Village, Okinawa, Japan', mapcode: '33 525 449*16',
          note: '商圈景點，摩天輪、海景步道', tag: '景點' },
        { time: '14:30', name: 'Depot Island', en: 'Depot Island',
          addr: 'Depot Island, Chatan, Okinawa, Japan', mapcode: '',
          note: '緊鄰美國村，步行可達，可共用美國村 MAPCODE', tag: '購物' },
        { time: '18:00', name: '美國村周邊晚餐', en: 'Dinner near American Village',
          addr: 'Mihama American Village, Okinawa, Japan',
          note: '可選北谷殿內、蒸氣海鮮、Calif Kitchen（詳見美食分頁）', tag: '吃' }
      ]
    },
    {
      theme: '南部景點・還車',
      themeEn: 'SOUTH & CAR RETURN',
      stops: [
        { time: '09:00', name: '沖繩世界（玉泉洞）', en: 'Okinawa World / Gyokusendo',
          addr: 'Okinawa World Gyokusendo Cave, Okinawa, Japan', mapcode: '232 495 330*28',
          note: '鐘乳石洞＋琉球村落體驗', tag: '景點' },
        { time: '11:30', name: '午餐：糸滿魚市場', en: 'Lunch: Itoman Fish Center',
          addr: 'Itoman Fish Center Okinawa Japan', mapcode: '232 484 137*05',
          note: '生魚片、海鮮丼，無需預約', tag: '吃' },
        { time: '13:30', name: 'DMM Kariyushi 水族館', en: 'DMM Kariyushi Aquarium',
          addr: 'DMM Kariyushi Aquarium, Okinawa, Japan', mapcode: '232 543 400*25',
          note: '室內水族館，雨天備案佳', tag: '景點' },
        { time: '15:30', name: 'Ashibinaa Outlet', en: 'Okinawa Outlet Mall Ashibinaa',
          addr: 'Okinawa Outlet Mall Ashibinaa, Okinawa, Japan', mapcode: '232 544 544*82',
          note: '⚠️ 不同來源座標有差異，導航到範圍後依現場指標進入', tag: '購物' },
        { time: '17:30', name: '瀨長島 Umikaji Terrace', en: 'Senagajima Umikaji Terrace',
          addr: 'Senagajima Umikaji Terrace, Okinawa, Japan', mapcode: '33 002 602*06',
          note: '看夕陽、下午茶可選幸福鬆餅', tag: '景點' },
        { time: '19:00', name: 'SKY租車 那霸空港營業所 還車', en: 'Rental Car Return',
          addr: 'SKY Rent A Car Naha Airport, 1-23-8 Gushi, Naha, Okinawa', mapcode: '33 033 327*52',
          note: '18:20 前加滿油並保留收據；還車前確認車上無隨身物品', tag: '交通' }
      ]
    },
    {
      theme: '退房・賦歸',
      themeEn: 'CHECK-OUT & DEPARTURE',
      stops: [
        { time: '09:00', name: '退房：Hotel Gran View Garden Okinawa', en: 'Hotel Check-out',
          addr: 'Hotel Gran View Garden Okinawa, Okinawa, Japan', mapcode: '232 543 670*38',
          note: '確認退房時間；可請飯店協助寄放行李', tag: '住宿' },
        { time: '09:30', name: '早餐：豬肉蛋飯糰', en: 'Breakfast: Pork Tamago Onigiri',
          addr: 'Pork Tamago Onigiri Makishi Market, Naha, Okinawa, Japan', mapcode: '33 157 323*00',
          note: '推薦炸蝦豬肉蛋飯糰；那霸機場亦有分店', tag: '吃' },
        { time: '10:15', name: '前往那霸機場', en: 'To Naha Airport',
          addr: 'Naha Airport, Okinawa, Japan', mapcode: '33 123 189*60',
          note: '國際線報到建議提前 2 小時；已還車，改搭計程車或機場接駁', tag: '交通' }
      ]
    }
  ],

  /* ---------- 6. 景點總覽（依地區，供自由替換每日行程用） ---------- */
  regions: [
    { name:'北部', items:[
      { name:'📍古宇利島', addr:'Kouri Island, Okinawa, Japan', mapcode:'', note:'全島無單一代表點，建議以古宇利大橋為進島參考點。' },
      { name:'🎢 JUNGLIA', addr:'JUNGLIA Okinawa, Nakijin, Okinawa, Japan', mapcode:'', note:'2025 年新開園，出發前請再次確認正式開放與營業資訊。' },
      { name:'🏯 今歸仁城跡', addr:'Nakijin Castle Ruins, Okinawa, Japan', mapcode:'553 081 414*17', note:'世界遺產城跡，可遠眺海景。' },
      { name:'🌳 崎本部公園', addr:'Sakimotobu Ryokuchi Park, Motobu, Okinawa, Japan', mapcode:'', note:'本部町臨海小公園。' },
      { name:'🌊 瀨底島', addr:'Sesoko Island, Okinawa, Japan', mapcode:'206 822 294*66', note:'鄰近美麗海水族館的離島，沙灘清澈。' },
      { name:'🏖 備瀨崎', addr:'Bisezaki Beach, Motobu, Okinawa, Japan', mapcode:'553 105 655*56', note:'福木林道步行可達海灘，適合散步。' },
      { name:'🍍 名護鳳梨園', addr:'Nago Pineapple Park, 1195 Biimata, Nago, Okinawa', mapcode:'206 716 437*41', note:'鳳梨主題樂園，親子友善。' },
      { name:'🍍 水果樂園', addr:'Okinawa Fruits Land, 1220-71 Biimata, Nago, Okinawa', mapcode:'206 716 584*13', note:'熱帶水果園區與昆蟲館。' },
      { name:'🌳 名護自然動植物園', addr:'Neo Park Okinawa, Nago, Okinawa, Japan', mapcode:'206 689 726*88', note:'近距離動物體驗園區。' },
      { name:'🍺 Orion啤酒廠', addr:'Orion Happy Park, Nago, Okinawa, Japan', mapcode:'206 598 837*51', note:'啤酒工廠見學＋試飲。' },
      { name:'🌊 部瀨名海中公園', addr:'Busena Marine Park, Nago, Okinawa, Japan', mapcode:'206 442 251*55', note:'海中展望塔，不下水也能看珊瑚魚群。' },
      { name:'🦖 恐龍公園', addr:'DINO Dinosaur Park Yanbaru Subtropical Forest, Nago, Okinawa, Japan', mapcode:'206 775 882*21', note:'叢林中的恐龍主題步道，親子景點。' }
    ] },
    { name:'中部', items:[
      { name:'🏯 座喜味城跡', addr:'Zakimi Castle Ruins, Yomitan, Okinawa, Japan', mapcode:'33 854 398*22', note:'世界遺產城跡，讀谷村地標。' },
      { name:'🌳 北谷海洋公園', addr:'Chatan Park / Araha Park, Chatan, Okinawa, Japan', mapcode:'33 496 188*53', note:'海濱公園，日落景色佳。' },
      { name:'🌳 安良波公園', addr:'Araha Park, Chatan, Okinawa, Japan', mapcode:'33 496 188*53', note:'與北谷海洋公園同區。' },
      { name:'🏖 美浜海岸', addr:'Mihama Beach, Chatan, Okinawa, Japan', mapcode:'33 525 175*48', note:'即 Sunset Beach 日落海灘，鄰近美國村。' },
      { name:'🌳 縣民之森', addr:'Okinawa Prefectural Citizens Forest, Onna, Okinawa, Japan', mapcode:'', note:'恩納村森林公園，適合避暑健行。' },
      { name:'🌊 青之洞窟', addr:'Blue Cave, Onna, Okinawa, Japan', mapcode:'206 062 686*55', note:'浮潛熱點，需報名體驗行程。' },
      { name:'📍琉球村', addr:'Ryukyu Mura, Okinawa, Japan', mapcode:'206 033 096*46', note:'傳統古民家與表演的文化主題園區。' },
      { name:'📍港川外人住宅', addr:'Minatogawa Stateside Town, Urasoe, Okinawa, Japan', mapcode:'33 340 029*22', note:'美式老宅改建的咖啡雜貨街區。' },
      { name:'🌳 浦添大公園', addr:'Urasoe Dai Park, Okinawa, Japan', mapcode:'33 282 500*52', note:'大型市民公園，有展望台。' },
      { name:'🛍 PARCO CITY', addr:'San-A Urasoe West Coast PARCO CITY, Okinawa, Japan', mapcode:'33 308 868*74', note:'沖繩最大購物中心之一。' },
      { name:'🌳 Bios之丘', addr:'Bios Hill, Uruma, Okinawa, Japan', mapcode:'206 005 115*00', note:'亞熱帶植物園＋遊船。' },
      { name:'🌊 海中道路', addr:'Kaichu Road, Uruma, Okinawa, Japan', mapcode:'499 576 282*33', note:'跨海道路，沿途海景公路。' },
      { name:'🏯 勝連城跡', addr:'Katsuren Castle Ruins, Uruma, Okinawa, Japan', mapcode:'499 570 171*28', note:'⚠️ 不同來源座標有落差，建議出發前核對。' },
      { name:'🐟 泡瀨漁港', addr:'Awase Fishing Port, Okinawa City, Okinawa, Japan', mapcode:'', note:'在地漁港，可看漁船作業。' },
      { name:'🌿 東南植物樂園', addr:'Southeast Botanical Gardens, Okinawa, Japan', mapcode:'33 742 510*33', note:'夜間點燈活動常辦。' },
      { name:'🎢 兒童王國', addr:'Okinawa Zoo & Museum, Okinawa City, Okinawa, Japan', mapcode:'33 561 712*52', note:'動物園＋小型遊樂設施。' },
      { name:'🛍 AEON Rycom', addr:'AEON MALL Okinawa Rycom, Kitanakagusuku, Okinawa, Japan', mapcode:'33 530 231*88', note:'大型商場，雨天備案首選。' },
      { name:'🌳 中城公園', addr:'Nakagusuku Park, Okinawa, Japan', mapcode:'33 440 100*25', note:'世界遺產中城城跡周邊公園。' }
    ] },
    { name:'南部', items:[
      { name:'🌳 奧武山公園', addr:'Onoyama Park, Naha, Okinawa, Japan', mapcode:'33 096 846*77', note:'那霸市區大公園，鄰近單軌電車站。' },
      { name:'🏖 波上宮海灘', addr:'Naminoue Beach, Naha, Okinawa, Japan', mapcode:'33 155 840*25', note:'市區內少見的海灘與神社景觀。' },
      { name:'🛍 國際通', addr:'Kokusai Dori, Naha, Okinawa, Japan', mapcode:'33 157 312*03', note:'那霸最熱鬧商店街，伴手禮首選。' },
      { name:'🐟 泊港漁市場', addr:'Tomari Iyumachi Fish Market, Naha, Okinawa, Japan', mapcode:'33 216 085*14', note:'在地人採買海鮮的市場。' },
      { name:'📍金城町石疊道', addr:'Kinjo Stone Road, Naha, Okinawa, Japan', mapcode:'33 161 390*60', note:'琉球王朝時期石板古道。' },
      { name:'🌿 識名園', addr:'Shikinaen Royal Garden, Naha, Okinawa, Japan', mapcode:'33 131 090*26', note:'世界遺產琉球王家庭園。' },
      { name:'🐟 牧志市場', addr:'Makishi Public Market, Naha, Okinawa, Japan', mapcode:'33 157 264*63', note:'那霸公設市場，可代客料理海鮮。' },
      { name:'🏯 首里城', addr:'Shurijo Castle, Naha, Okinawa, Japan', mapcode:'33 161 526*71', note:'琉球王國象徵，那霸必訪史跡。' },
      { name:'🌊 奧武島', addr:'Ou Island, Nanjo, Okinawa, Japan', mapcode:'232 467 328*53', note:'南部小離島，天婦羅名店聚集。' },
      { name:'📍齋場御嶽', addr:'Sefa-utaki, Nanjo, Okinawa, Japan', mapcode:'33 024 253*22', note:'世界遺產琉球聖地。' },
      { name:'🌳 知念岬公園', addr:'Cape Chinen Park, Nanjo, Okinawa, Japan', mapcode:'232 594 560*74', note:'270 度海景展望公園。' },
      { name:'🌳 和平祈念公園', addr:'Okinawa Peace Memorial Park, Itoman, Okinawa, Japan', mapcode:'232 342 061*03', note:'沖繩戰役紀念公園，臨海腹地大。' },
      { name:'📍琉球玻璃村', addr:'Ryukyu Glass Village, Itoman, Okinawa, Japan', mapcode:'232 336 224*71', note:'玻璃工藝體驗與展售。' },
      { name:'🛍 道之驛糸滿', addr:'Roadside Station Itoman, Okinawa, Japan', mapcode:'232 484 107*03', note:'公路休息站，可買在地農產。' },
      { name:'🌊 瀨長島', addr:'Senaga Island, Tomigusuku, Okinawa, Japan', mapcode:'33 002 602*06', note:'與 Umikaji Terrace 同區域，機場旁小島。' },
      { name:'📍舊海軍壕', addr:'Former Japanese Navy Underground Headquarters, Tomigusuku, Okinawa, Japan', mapcode:'33 036 823*65', note:'二戰海軍地下指揮部遺跡。' }
    ] }
  ],

  /* ---------- 7. 美食清單（依地區） ---------- */
  food: [
    { region:'南部・那霸', items:[
      { name:'🍙 豬肉蛋飯糰', addr:'Pork Tamago Onigiri Makishi Market, Naha, Okinawa, Japan', mapcode:'33 157 323*00', note:'推薦：炸蝦豬肉蛋飯糰。營業：每日 07:00–19:00。另有美國村、那霸機場、本部町分店。' },
      { name:'🥩 燒肉王久茂地', addr:'Yakiniku King Naha Kumoji, Okinawa, Japan', mapcode:'33 157 752*68', note:'沖繩燒肉王；和牛吃到飽。營業：平日 17:00–00:00、週末 11:00–00:00。' },
      { name:'🥩 牛皇', addr:'Naha, Kumoji, 2 Chome−13−14 ヨーロピアンビル 牛皇, Okinawa, Japan', mapcode:'', note:'高檔和牛燒肉。營業：週三至週一 17:00–01:00。' },
      { name:'🥩 本部牧場那霸', addr:'Motobu Farm Naha, Okinawa, Japan', mapcode:'', note:'本部牛牧場直營。營業：11:30–15:00、17:00–22:00。' },
      { name:'🥩 本部牧場國際通', addr:'Motobu Farm Kokusai Street, Naha, Okinawa, Japan', mapcode:'', note:'本部牛燒肉；國際通分店。營業：每日 17:00–22:30。' },
      { name:'🥩 琉球之牛', addr:'Ryukyu no Ushi Kokusai Street, Naha, Okinawa, Japan', mapcode:'33 157 448*25', note:'琉球和牛人氣名店。營業：每日 17:00–22:30。' },
      { name:'🍺 目利銀次', addr:'Mekiki Ginji Shintoshin, 1 Chome-9-19 Ameku, Naha, Okinawa, Japan', mapcode:'33 218 131*58', note:'平價居酒屋。營業：平日 17:00–23:00、假日 17:00–00:00；週三公休。' },
      { name:'🍜 暖暮拉麵', addr:'Danbo Ramen Makishi, Naha, Okinawa, Japan', mapcode:'33 157 621*52', note:'台灣旅客常去的豚骨拉麵。營業：平日 11:00–02:00、假日 10:00–02:00。' },
      { name:'🍜 琉家拉麵', addr:'Ryukya Ramen, 1 Chome-6-8 Matsuo, Naha, Okinawa, Japan', mapcode:'', note:'國際通巷內拉麵。營業：週四至週二 11:30–22:30；週三公休。' },
      { name:'🍜 Mahoroba拌麵', addr:'Mazemen Mahoroba, Naha, Makishi, 1 Chome−3−34 シティーパル K, Okinawa, Japan', mapcode:'', note:'台灣乾拌麵風格。營業：每日 11:30–21:00。' },
      { name:'🍚 Marutama味噌', addr:'Marutama, Naha, Izumizaki, 2 Chome−4-3, Okinawa, Japan', mapcode:'', note:'早餐味噌湯定食。營業：週一至週六 07:30–14:30、17:00–20:30；週日公休。' },
      { name:'🐟 魚屋食堂', addr:'3 Chome-5-1 Takara, Naha, Okinawa, Japan', mapcode:'', note:'平價海鮮丼與定食。營業：每日 11:00–20:00。' },
      { name:'🥞 幸福鬆餅', addr:'A Happy Pancake Senagajima Umikaji Terrace, Tomigusuku, Okinawa, Japan', mapcode:'33 002 602*03', note:'舒芙蕾鬆餅與海景。營業：每日 11:00–21:00；建議預約。' },
      { name:'☕ 浜邊茶屋', addr:'Hamabe no Chaya, Nanjo, Tamagusuku, Okinawa, Japan', mapcode:'232 469 490*71', note:'海邊木屋咖啡廳，可搭新原沙灘。營業：平日 10:00–17:00、五六日 08:00–17:00。' },
      { name:'🍜 屋宜家', addr:'Yagiya, 1172 Oton, Yaese, Shimajiri District, Okinawa, Japan', mapcode:'232 433 739*74', note:'紅瓦老宅沖繩麵。營業：週三至週一 11:00–15:15；週二公休。' },
      { name:'☕ 薑黃花', addr:'Cafe Curcuma, Chinen-1190 Chinen, Nanjo, Okinawa, Japan', mapcode:'', note:'高地海景泰式/南洋料理。營業：平日 10:00–17:00、週末 10:00–18:00；週三公休。' }
    ] },
    { region:'中部・美國村港川', items:[
      { name:'🍰 Houki Boshi', addr:'Houki Boshi, 2 Chome-16-2 Minatogawa, Urasoe, Okinawa, Japan', mapcode:'', note:'沖繩黑糖可麗露。營業：每日 11:30–18:00。' },
      { name:'🍰 oHacorte', addr:'oHacorte Minatogawa, 2 Chome-17-1 Minatogawa, Urasoe, Okinawa, Japan', mapcode:'33 341 002*22', note:'水果塔與下午茶。營業：每日 11:30–19:00。' },
      { name:'🍜 いしぐふー', addr:'Ishigufu Minatogawa, Urasoe, Minatogawa, 2 Chome−13−6, Okinawa, Japan', mapcode:'33 341 094*27', note:'雞湯沖繩麵。營業：週三至週五 10:00–15:00、週末 10:00–16:00。' },
      { name:'🍜 Apollo拉麵', addr:'Ryukyu Ramen Apollo, Okinawa, Urasoe, Minatogawa, 1 Chome−5−11, Japan', mapcode:'', note:'推薦口味：琥珀。營業：週五至週一 11:30–14:45；週四公休。' },
      { name:'🥞 Hanon鬆餅', addr:'Seaside Cafe Hanon, Chatan, Mihama, Okinawa, Japan', mapcode:'', note:'美國村海景鬆餅。營業：平日 09:00–17:00、週末 08:30–19:00。' },
      { name:'🌮 Kijimuna塔可飯', addr:'Taco Rice Cafe Kijimuna Depot Island, Chatan, Okinawa, Japan', mapcode:'33 525 383*28', note:'推薦：塔可飯、塔可蛋包飯。營業：每日 11:00–22:00。' },
      { name:'🍺 北谷殿內', addr:'Chatan Dunchi, Chatan, Mihama, Okinawa, Japan', mapcode:'', note:'靠海居酒屋，可能收座位費。營業：每日 17:00–23:00。' },
      { name:'☕ Calif Kitchen', addr:'The Calif Kitchen Okinawa, Chatan, Mihama, Okinawa, Japan', mapcode:'', note:'美國村海景早餐/甜點/餐廳。營業：每日 08:00–22:00。' },
      { name:'🦐 蒸氣海鮮', addr:'Chatan Steam Seafood, Nakagami District, Chatan, Mihama, 51-2, Okinawa, Japan', mapcode:'33 525 860*30', note:'蒸氣海鮮料理。營業：週六至週四 11:00–23:00；週五 11:00–15:00、17:00–23:00。' }
    ] },
    { region:'北部・恩納名護本部古宇利', items:[
      { name:'🐟 元祖海葡萄', addr:'元祖 海ぶどう 万座毛店, 沖縄県国頭郡恩納村字恩納2767 万座毛周辺活性化施設 2F', mapcode:'', note:'已搬至萬座毛遊客中心二樓。營業：平日 11:00–18:00、週末 11:00–15:00。' },
      { name:'🥞 Paanilani鬆餅', addr:'Hawaiian Pancakes House Paanilani, 698 Serakaki, Onna, Okinawa, Japan', mapcode:'206 314 567*55', note:'恩納村美式鬆餅。營業：每日 07:00–17:00。' },
      { name:'🍱 名護Yukino', addr:'Yukino, 450-8 Miyazato, Nago, Okinawa, Japan', mapcode:'', note:'日式家庭料理，推薦炸蝦定食。營業：週四至週二 17:00–21:30；週三公休。' },
      { name:'🍖 百年古家大家', addr:'Ufuya, 90 Nakayama, Nago, Okinawa', mapcode:'206 745 056*82', note:'阿古豬料理景觀餐廳。營業：每日 11:00–15:30、18:00–20:00。' },
      { name:'🍔 Captain Kangaroo', addr:'Captain Kangaroo, 930-1 Sakimotobu, Motobu, Okinawa', mapcode:'', note:'人氣美式漢堡。營業：每日 11:00–17:00。' },
      { name:'🐟 海邦丸本店', addr:'海人料理 海邦丸, Hanasaki Marche, Motobu, Okinawa', mapcode:'', note:'海鮮定食/海鮮丼。營業：每日 11:00–15:00、17:30–21:00。' },
      { name:'🐟 海邦丸二館', addr:'海人料理 海邦丸 2号店, 沖縄県国頭郡本部町山川1046-2', mapcode:'', note:'水族館周邊海鮮餐廳。營業：週五至週二 11:30–15:00、17:30–20:30。' },
      { name:'🍜 岸本食堂本店', addr:'Kishimoto Shokudo Main Store, Motobu, Okinawa, Japan', mapcode:'206 857 712*58', note:'1905 年老店沖繩麵。營業：11:00–17:00；週三公休。' },
      { name:'🍜 岸本八重岳', addr:'Kishimoto Shokudo Yaedake, Motobu, Okinawa, Japan', mapcode:'206 859 346*30', note:'岸本食堂分店。營業：每日 11:00–17:00。' },
      { name:'🍤 古宇利蝦飯', addr:'Kouri Shrimp, 314 Kouri, Nakijin, Okinawa, Japan', mapcode:'485 692 203*74', note:'古宇利島排隊蝦蝦飯。營業：週三至週一 11:00–18:00；週二公休。' },
      { name:'🐟 錦屋', addr:'Shokujidokoro Nishikiya, Kouri, Nakijin, Okinawa, Japan', mapcode:'', note:'古宇利島海膽料理。營業：每日 10:30–20:00。' }
    ] },
    { region:'全沖繩', items:[
      { name:'🍦 Blue Seal牧港', addr:'Blue Seal Makiminato Main Branch, 5-5-6 Makiminato, Urasoe, Okinawa', mapcode:'', note:'全沖繩多分店；建議用 Google Maps 找最近分店。' }
    ] }
  ],

  /* ---------- 8. 常用日文（可發音） ---------- */
  phrases: [
    { category: '基本會話', items: [
      { zh: '你好', ja: 'こんにちは', romaji: 'Konnichiwa' },
      { zh: '謝謝', ja: 'ありがとうございます', romaji: 'Arigatou gozaimasu' },
      { zh: '不好意思／請問', ja: 'すみません', romaji: 'Sumimasen' },
      { zh: '我不懂日文', ja: '日本語がわかりません', romaji: 'Nihongo ga wakarimasen' },
      { zh: '可以說英文嗎？', ja: '英語を話せますか？', romaji: 'Eigo o hanasemasu ka?' }
    ]},
    { category: '餐廳常用', items: [
      { zh: '我要這個', ja: 'これをお願いします', romaji: 'Kore o onegaishimasu' },
      { zh: '有中文菜單嗎？', ja: '中国語のメニューはありますか？', romaji: 'Chuugokugo no menyuu wa arimasu ka?' },
      { zh: '結帳', ja: 'お会計お願いします', romaji: 'Okaikei onegaishimasu' },
      { zh: '好吃', ja: 'おいしいです', romaji: 'Oishii desu' }
    ]},
    { category: '購物常用', items: [
      { zh: '多少錢？', ja: 'いくらですか？', romaji: 'Ikura desu ka?' },
      { zh: '可以刷卡嗎？', ja: 'クレジットカードは使えますか？', romaji: 'Kurejitto kaado wa tsukaemasu ka?' },
      { zh: '可以退稅嗎？', ja: '免税できますか？', romaji: 'Menzei dekimasu ka?' }
    ]},
    { category: '交通常用', items: [
      { zh: '○○站在哪裡？', ja: '○○駅はどこですか？', romaji: '○○ eki wa doko desu ka?' },
      { zh: '這班車有到嗎？', ja: 'この電車は行きますか？', romaji: 'Kono densha wa ikimasu ka?' },
      { zh: '請幫我叫計程車', ja: 'タクシーを呼んでください', romaji: 'Takushii o yonde kudasai' },
      { zh: '我有大行李，請給我大一點的計程車', ja: '大きいスーツケースがあります。大きめのタクシーをお願いします。', romaji: 'Ōkii sūtsukēsu ga arimasu. Ōkime no takushī o onegaishimasu.' }
    ]},
    { category: '租車常用', items: [
      { zh: '我要取車', ja: 'レンタカーを借りたいです', romaji: 'Rentakaa o karitai desu' },
      { zh: '我要還車', ja: '車を返却したいです', romaji: 'Kuruma o henkyaku shitai desu' },
      { zh: '因為天氣，請問可以縮短或取消預約嗎？', ja: '天気のため、予約を短縮またはキャンセルできますか。', romaji: 'Tenki no tame, yoyaku o tanshuku matawa kyanseru dekimasu ka?' },
      { zh: '請問今天適合開車出門嗎？', ja: '今日は運転しても大丈夫ですか。', romaji: 'Kyou wa unten shitemo daijoubu desu ka?' }
    ]},
    { category: '飯店常用', items: [
      { zh: '我要辦理入住', ja: 'チェックインをお願いします', romaji: 'Chekku in o onegaishimasu' },
      { zh: '我要退房', ja: 'チェックアウトをお願いします', romaji: 'Chekku auto o onegaishimasu' },
      { zh: '有 Wi-Fi 嗎？', ja: 'Wi-Fiはありますか？', romaji: 'Wai fai wa arimasu ka?' },
      { zh: '我想延住一晚', ja: 'もう一泊延長したいです', romaji: 'Mou ippaku enchou shitai desu' }
    ]},
    { category: '緊急備用', items: [
      { zh: '請幫幫我', ja: '助けてください', romaji: 'Tasukete kudasai' },
      { zh: '我迷路了', ja: '道に迷いました', romaji: 'Michi ni mayoimashita' },
      { zh: '請叫警察', ja: '警察を呼んでください', romaji: 'Keisatsu o yonde kudasai' },
      { zh: '因天候航班取消了', ja: '天候のため、フライトが欠航になりました。', romaji: 'Tenkou no tame, furaito ga kekkou ni narimashita.' }
    ]}
  ],

  /* ---------- 9. 天候備案（通用原則，非特定日期） ---------- */
  weatherPlan: {
    rule: '出發前 3 天起，每天早晚查一次颱風／大雨預報。若行程中有任何一天被列為警戒等級，直接把那天改列為「飯店防颱日」：不開車、不去北部、不去海邊、不排不可取消的餐廳或活動。',
    keep: ['飯店周邊', '那霸市區', 'iias Okinawa Toyosaki／AEON Rycom 等大型商場', '國際通商店街（室內店家為主）'],
    cut: ['北部長途景點（美麗海、古宇利島等）', '海邊活動、離島跳島', '長途開車路段', '不可取消的訂位'],
    principles: [
      '警戒日不移動：只在飯店內或飯店明確允許的安全範圍內活動',
      '前一天不跑遠：租車後只跑鄰近景點與商場，及早完成物資採買',
      '租車風險優先：天氣轉差時優先詢問是否可縮短或取消租車，不把車停在海邊、樹下、地下易淹區',
      '回程優先處理：天氣影響期間，先確認航班狀態、飯店延住、機場交通，再考慮排景點',
      '每天兩次查公告：早上與晚上查颱風路徑、機場、航空公司、飯店通知'
    ],
    checksPerDay: ['日本氣象廳颱風／大雨警報', '航空公司航班狀態公告', '機場即時航班', '飯店櫃檯公告', '租車公司是否可改期或取消']
  },

  /* ---------- 10. 行前準備（勾選狀態存在瀏覽器 localStorage） ---------- */
  checklist: [
    { group: '證件與票券', items: ['護照', '台灣駕照正本＋日文譯本', '機票／訂房／租車確認信（App 或 email）', '信用卡／現金'] },
    { group: '電子與通訊', items: ['行動電源（隨身，不可託運）', '充電線', '日本網卡或漫遊', '手機支架（租車用）'] },
    { group: '天氣與衣物', items: ['雨傘／輕便雨衣', '防曬', '好走的鞋', '換洗衣物', '常備藥'] },
    { group: '租車檢查', items: ['取車前拍攝車身現況影片', '確認油表與導航語言', '還車前加滿油並保留收據', 'ETC／個人物品不留車上'] },
    { group: '出發前確認', items: ['核對本檔案所有範例座標與地址（Google Maps）', '確認最新天氣／颱風預報', '確認飯店與租車公司的公休或更改政策', '離線地圖已下載'] }
  ]
};
