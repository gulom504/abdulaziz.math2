const topics = [
  {title:`Natural sonlar`,description:`Sanashda ishlatiladigan musbat butun sonlar.`,formula:`N = {1, 2, 3, ...}`,example:`7 + 5 = 12`,remember:`Natural sonlar sanashdan boshlanadi.`},
  {title:`Butun sonlar`,description:`Musbat sonlar, manfiy sonlar va 0 dan tashkil topadi.`,formula:`Z = {...,-2,-1,0,1,2,...}`,example:`-5 + 8 = 3`,remember:`Manfiy sonlar ham butun son.`},
  {title:`Ratsional sonlar`,description:`Kasr ko‘rinishida yozish mumkin bo‘lgan sonlar.`,formula:`x = a/b, b ≠ 0`,example:`3/4 = 0.75`,remember:`a/b ko‘rinishida yozish mumkin.`},
  {title:`Irratsional sonlar`,description:`Oddiy kasr ko‘rinishida aniq ifodalab bo‘lmaydigan sonlar.`,formula:`√2, √3, π`,example:`√2 ≈ 1.414`,remember:`O‘nli yozuvi cheksiz va davrsiz.`},
  {title:`Haqiqiy sonlar`,description:`Ratsional va irratsional sonlarning umumiy to‘plami.`,formula:`R = Q ∪ I`,example:`2, 0.5, √2 — haqiqiy sonlar.`,remember:`Sonlar o‘qidagi barcha sonlar haqiqiy.`},
  {title:`Juft va toq sonlar`,description:`2 ga bo‘linadigan son juft, bo‘linmaydigan son toq.`,formula:`Juft: 2n; Toq: 2n+1`,example:`18 — juft, 19 — toq.`,remember:`Oxirgi raqam 0,2,4,6,8 bo‘lsa juft.`},
  {title:`Tub sonlar`,description:`Faqat 1 ga va o‘ziga bo‘linadigan 1 dan katta sonlar.`,formula:`p > 1`,example:`2, 3, 5, 7, 11`,remember:`2 — yagona juft tub son.`},
  {title:`Bo‘linish belgilari`,description:`Sonning ayrim sonlarga qoldiqsiz bo‘linishini aniqlash qoidalari.`,formula:`10 ga bo‘linish: oxiri 0`,example:`250 soni 10 ga bo‘linadi.`,remember:`2, 5, 10 uchun oxirgi raqamga qaraladi.`},
  {title:`EKUB`,description:`Ikki sonning eng katta umumiy bo‘luvchisi.`,formula:`EKUB(a,b)`,example:`EKUB(12,18)=6`,remember:`Umumiy bo‘luvchilarning eng kattasi.`},
  {title:`EKUK`,description:`Ikki sonning eng kichik umumiy karralisi.`,formula:`EKUK(a,b)`,example:`EKUK(4,6)=12`,remember:`Umumiy karralilarning eng kichigi.`},
  {title:`Oddiy kasrlar`,description:`Surat va maxrajdan tashkil topgan son.`,formula:`a/b, b ≠ 0`,example:`3/5 da 3 — surat, 5 — maxraj.`,remember:`Yuqorida surat, pastda maxraj.`},
  {title:`Kasrni qisqartirish`,description:`Surat va maxrajni bir xil songa bo‘lish.`,formula:`ac/bc = a/b`,example:`6/8 = 3/4`,remember:`Ikkalasini ham bir xil songa bo‘l.`},
  {title:`Kasrlarni qo‘shish`,description:`Bir xil maxrajli kasrlarni qo‘shish.`,formula:`a/c + b/c = (a+b)/c`,example:`2/7+3/7=5/7`,remember:`Maxraj umumiy qoladi.`},
  {title:`Kasrlarni ayirish`,description:`Bir xil maxrajli kasrlarni ayirish.`,formula:`a/c-b/c=(a-b)/c`,example:`6/9-2/9=4/9`,remember:`Maxraj umumiy qoladi.`},
  {title:`Kasrlarni ko‘paytirish`,description:`Suratlar o‘zaro, maxrajlar o‘zaro ko‘paytiriladi.`,formula:`a/b × c/d = ac/bd`,example:`2/3×4/5=8/15`,remember:`To‘g‘ridan-to‘g‘ri ko‘paytir.`},
  {title:`Kasrlarni bo‘lish`,description:`Ikkinchi kasr teskari qilinib ko‘paytiriladi.`,formula:`a/b ÷ c/d = ad/bc`,example:`2/3÷4/5=5/6`,remember:`Bo‘lishda ikkinchi kasr ag‘dariladi.`},
  {title:`O‘nli kasrlar`,description:`O‘nlik, yuzlik, minglik kabi maxrajli kasrlar.`,formula:`0.25 = 25/100`,example:`0.5+0.25=0.75`,remember:`Verguldan keyingi raqamlar kasr qismini bildiradi.`},
  {title:`Foiz`,description:`Sonning yuzdan bir qismi.`,formula:`p% = p/100`,example:`20%=0.2`,remember:`Foiz 100 ga bog‘liq.`},
  {title:`Sonning foizini topish`,description:`Sonning berilgan foizini hisoblash.`,formula:`A×p/100`,example:`300 ning 20%i = 60`,remember:`Son × foiz ÷ 100.`},
  {title:`Foiz bo‘yicha sonni topish`,description:`Qism va foizdan butun sonni topish.`,formula:`A = B×100/p`,example:`20%i 40 bo‘lsa, son 200`,remember:`Qism ×100 ÷ foiz.`},
  {title:`Nisbat`,description:`Ikki sonning bir-biriga nisbati.`,formula:`a:b = a/b`,example:`8:4=2`,remember:`Nisbatni kasr sifatida ham yozish mumkin.`},
  {title:`Proporsiya`,description:`Ikki nisbatning tengligi.`,formula:`a/b=c/d → ad=bc`,example:`2/3=4/6`,remember:`Chekka hadlar ko‘paytmasi o‘rta hadlarga teng.`},
  {title:`Algebraik ifodalar`,description:`Sonlar, harflar va amallardan tuzilgan ifodalar.`,formula:`2x+5`,example:`x=3 → 11`,remember:`Harf o‘zgaruvchini bildiradi.`},
  {title:`Birhad`,description:`Son va o‘zgaruvchilarning ko‘paytmasidan iborat ifoda.`,formula:`5x²y`,example:`3x va -2a² — birhad.`,remember:`Birhad bitta had.`},
  {title:`Ko‘phad`,description:`Bir nechta birhadlarning yig‘indisi yoki ayirmasi.`,formula:`ax²+bx+c`,example:`x²+3x+2`,remember:`Ko‘phad bir nechta hadlardan iborat.`},
  {title:`Daraja`,description:`Sonni o‘ziga bir necha marta ko‘paytirish.`,formula:`aⁿ=a×a×...×a`,example:`2³=8`,remember:`Ko‘rsatkich ko‘paytiruvchilar sonini bildiradi.`},
  {title:`Darajalarni ko‘paytirish`,description:`Bir xil asosli darajalar ko‘paytirilganda ko‘rsatkichlar qo‘shiladi.`,formula:`aᵐ×aⁿ=aᵐ⁺ⁿ`,example:`2²×2³=2⁵=32`,remember:`Ko‘paytirishda darajalar qo‘shiladi.`},
  {title:`Darajalarni bo‘lish`,description:`Bir xil asosli darajalar bo‘linganda ko‘rsatkichlar ayiriladi.`,formula:`aᵐ/aⁿ=aᵐ⁻ⁿ`,example:`2⁵/2²=2³=8`,remember:`Bo‘lishda darajalar ayiriladi.`},
  {title:`Darajaning darajasi`,description:`Daraja yana darajaga ko‘tarilganda ko‘rsatkichlar ko‘paytiriladi.`,formula:`(aᵐ)ⁿ=aᵐⁿ`,example:`(2²)³=2⁶`,remember:`Ko‘rsatkichlarni ko‘paytir.`},
  {title:`Nol daraja`,description:`Noldan farqli sonning nol darajasi 1.`,formula:`a⁰=1, a≠0`,example:`7⁰=1`,remember:`Nol daraja → 1.`},
  {title:`Kvadrat ildiz`,description:`Kvadrati berilgan songa teng bo‘lgan son.`,formula:`√a²=|a|`,example:`√49=7`,remember:`7×7=49.`},
  {title:`Ildizni ko‘paytirish`,description:`Ildizli ifodalarni ko‘paytirish qoidasi.`,formula:`√a×√b=√ab`,example:`√2×√8=4`,remember:`Ildiz ostidagi sonlar ko‘payadi.`},
  {title:`Ildizni bo‘lish`,description:`Ildizli ifodalarni bo‘lish qoidasi.`,formula:`√a/√b=√(a/b)`,example:`√18/√2=3`,remember:`Ildiz ostidagi sonlar bo‘linadi.`},
  {title:`Ko‘paytuvchilarga ajratish`,description:`Ifodani ko‘paytuvchilar ko‘rinishida yozish.`,formula:`ab+ac=a(b+c)`,example:`3x+6=3(x+2)`,remember:`Umumiy ko‘paytuvchini qavs tashqarisiga chiqar.`},
  {title:`Umumiy ko‘paytuvchi`,description:`Bir nechta hadlarda bir xil qatnashgan ko‘paytuvchi.`,formula:`ab+ac=a(b+c)`,example:`5x+10=5(x+2)`,remember:`Umumiy ko‘paytuvchini top.`},
  {title:`Qisqa ko‘paytirish formulalari`,description:`Ko‘phadlarni tez ko‘paytirishga yordam beradi.`,formula:`(a+b)²=a²+2ab+b²`,example:`(x+2)²=x²+4x+4`,remember:`Birinchi kvadrat + ikki karra ko‘paytma + ikkinchi kvadrat.`},
  {title:`Ayirma kvadrati`,description:`Ikki son ayirmasining kvadrati.`,formula:`(a-b)²=a²-2ab+b²`,example:`(x-3)²=x²-6x+9`,remember:`O‘rtadagi had manfiy.`},
  {title:`Kvadratlar ayirmasi`,description:`Ikki kvadrat ayirmasini ajratish.`,formula:`a²-b²=(a-b)(a+b)`,example:`x²-9=(x-3)(x+3)`,remember:`Ayirma × yig‘indi.`},
  {title:`Kublar yig‘indisi`,description:`Ikki kub yig‘indisini ko‘paytuvchilarga ajratish.`,formula:`a³+b³=(a+b)(a²-ab+b²)`,example:`x³+8=(x+2)(x²-2x+4)`,remember:`Yig‘indi oldida +, o‘rtada −.`},
  {title:`Kublar ayirmasi`,description:`Ikki kub ayirmasini ko‘paytuvchilarga ajratish.`,formula:`a³-b³=(a-b)(a²+ab+b²)`,example:`x³-8=(x-2)(x²+2x+4)`,remember:`Ayirma oldida −, o‘rtada +.`},
  {title:`Chiziqli tenglama`,description:`Noma’lumning birinchi darajasi qatnashgan tenglama.`,formula:`ax+b=0 → x=-b/a`,example:`2x+6=0 → x=-3`,remember:`Noma’lumni yolg‘iz qoldir.`},
  {title:`Kvadrat tenglama`,description:`Noma’lumning ikkinchi darajasi qatnashgan tenglama.`,formula:`ax²+bx+c=0`,example:`x²-5x+6=0`,remember:`a ≠ 0 bo‘lishi kerak.`},
  {title:`Diskriminant`,description:`Kvadrat tenglama ildizlari sonini aniqlashga yordam beradi.`,formula:`D=b²-4ac`,example:`D=0 → bitta qo‘sh ildiz`,remember:`D>0 — 2; D=0 — 1; D<0 — haqiqiy ildiz yo‘q.`},
  {title:`Kvadrat tenglama ildizlari`,description:`Diskriminant orqali ildizlarni topish.`,formula:`x=(-b±√D)/(2a)`,example:`x²-5x+6=0 → x=2,3`,remember:`−b ± √D, bo‘lingan 2a.`},
  {title:`Viyet teoremasi`,description:`Ildizlar va koeffitsiyentlar orasidagi bog‘lanish.`,formula:`x₁+x₂=-b/a; x₁x₂=c/a`,example:`x²-5x+6 → 2+3=5`,remember:`Yig‘indi −b/a, ko‘paytma c/a.`},
  {title:`Tenglamalar sistemasi`,description:`Bir nechta tenglamani bir vaqtda qanoatlantiruvchi yechimlar.`,formula:`x+y=7; x-y=1`,example:`x=4, y=3`,remember:`Yechim barcha tenglamalarga mos.`},
  {title:`Tengsizlik`,description:`Katta-kichiklik munosabatini ifodalovchi yozuv.`,formula:`x>3, x<5`,example:`x+2>5 → x>3`,remember:`Manfiy songa ko‘paytirganda belgi teskarilanadi.`},
  {title:`Modul`,description:`Sonning 0 dan bo‘lgan masofasi.`,formula:`|x|≥0`,example:`|-5|=5`,remember:`Modul manfiy bo‘lmaydi.`},
  {title:`Modulli tenglama`,description:`Modul qatnashgan tenglamalarni yechish.`,formula:`|x|=a → x=±a`,example:`|x|=7 → x=±7`,remember:`Musbat a uchun qarama-qarshi ikki yechim.`},
  {title:`Kasr-ratsional tenglama`,description:`Noma’lum maxrajda qatnashadigan tenglama.`,formula:`P(x)/Q(x)=0 → P(x)=0, Q(x)≠0`,example:`(x-2)/(x+1)=0 → x=2`,remember:`Maxraj 0 bo‘lmaydi.`},
  {title:`Funksiya`,description:`Har bir x ga yagona y qiymatni mos qo‘yuvchi bog‘lanish.`,formula:`y=f(x)`,example:`f(x)=2x+1 → f(3)=7`,remember:`x — argument, y — qiymat.`},
  {title:`Chiziqli funksiya`,description:`Grafigi to‘g‘ri chiziq bo‘lgan funksiya.`,formula:`y=kx+b`,example:`y=2x+3`,remember:`k — qiyalik, b — kesishish.`},
  {title:`Kvadrat funksiya`,description:`Ikkinchi darajali funksiya.`,formula:`y=ax²+bx+c`,example:`y=x²-4x+3`,remember:`Grafigi parabola.`},
  {title:`Teskari proporsional funksiya`,description:`x va y ko‘paytmasi o‘zgarmas bo‘lgan bog‘lanish.`,formula:`y=k/x`,example:`y=12/x`,remember:`x oshsa, y kamayadi.`},
  {title:`Funksiya aniqlanish sohasi`,description:`Funksiya mavjud bo‘ladigan x qiymatlar to‘plami.`,formula:`D(f)`,example:`1/x uchun x≠0`,remember:`Maxrajni 0 qiladigan qiymat chiqariladi.`},
  {title:`Funksiya qiymatlar sohasi`,description:`Funksiya qabul qiladigan barcha y qiymatlar.`,formula:`E(f)`,example:`y=x² uchun y≥0`,remember:`Natijalar qaysi oraliqda ekanini tekshir.`},
  {title:`Juft funksiya`,description:`Grafiki y o‘qiga nisbatan simmetrik funksiya.`,formula:`f(-x)=f(x)`,example:`f(x)=x²`,remember:`−x qo‘ysang ham natija o‘zgarmaydi.`},
  {title:`Toq funksiya`,description:`Grafiki koordinatalar boshiga nisbatan simmetrik funksiya.`,formula:`f(-x)=-f(x)`,example:`f(x)=x³`,remember:`−x natijani ham − qiladi.`},
  {title:`O‘suvchi funksiya`,description:`x oshganda f(x) ham oshadi.`,formula:`x₁<x₂ → f(x₁)<f(x₂)`,example:`f(x)=x`,remember:`Grafik chapdan o‘ngga yuqorilaydi.`},
  {title:`Kamayuvchi funksiya`,description:`x oshganda f(x) kamayadi.`,formula:`x₁<x₂ → f(x₁)>f(x₂)`,example:`f(x)=-x`,remember:`Grafik chapdan o‘ngga pastlaydi.`},
  {title:`Nuqta`,description:`Geometriyadagi eng sodda tushuncha.`,formula:`A(x,y)`,example:`A(3,5)`,remember:`Nuqtaning o‘lchami yo‘q.`},
  {title:`To‘g‘ri chiziq`,description:`Ikki tomonga cheksiz davom etuvchi chiziq.`,formula:`y=kx+b`,example:`y=2x+1`,remember:`Ikki tomonga cheksiz davom etadi.`},
  {title:`Kesma`,description:`Ikki nuqta orasidagi chiziq qismi.`,formula:`AB`,example:`A va B orasidagi qism — AB`,remember:`Kesmaning ikkita uchi bor.`},
  {title:`Nur`,description:`Bir nuqtadan boshlanib bir tomonga cheksiz davom etadi.`,formula:`→AB`,example:`A dan B tomonga nur`,remember:`Bitta boshlang‘ich nuqta bor.`},
  {title:`Burchak`,description:`Bir nuqtadan chiqqan ikki nurdan hosil bo‘ladi.`,formula:`∠A`,example:`90° — to‘g‘ri burchak`,remember:`Burchak gradus bilan o‘lchanadi.`},
  {title:`Parallel chiziqlar`,description:`Bir tekislikda kesishmaydigan chiziqlar.`,formula:`a ∥ b`,example:`a va b parallel`,remember:`Parallel chiziqlar kesishmaydi.`},
  {title:`Perpendikulyar chiziqlar`,description:`90° burchak ostida kesishadigan chiziqlar.`,formula:`a ⟂ b`,example:`Koordinata o‘qlari perpendikulyar`,remember:`Perpendikulyar → 90°.`},
  {title:`Uchburchak`,description:`Uchta tomon va uchta burchakdan tashkil topgan figura.`,formula:`A+B+C=180°`,example:`60°+60°+60°=180°`,remember:`Burchaklar yig‘indisi 180°.`},
  {title:`Uchburchak yuzi`,description:`Asos va balandlik orqali topiladi.`,formula:`S=ah/2`,example:`a=10,h=6 → S=30`,remember:`Asos × balandlik ÷ 2.`},
  {title:`Pifagor teoremasi`,description:`To‘g‘ri burchakli uchburchak tomonlari orasidagi bog‘lanish.`,formula:`c²=a²+b²`,example:`3²+4²=5²`,remember:`Gipotenuza kvadrati katetlar kvadratlari yig‘indisi.`},
  {title:`To‘rtburchak`,description:`To‘rtta tomonli geometrik figura.`,formula:`A+B+C+D=360°`,example:`To‘rtburchak burchaklari yig‘indisi 360°`,remember:`To‘rtburchak → 360°.`},
  {title:`Kvadrat`,description:`Barcha tomonlari teng va burchaklari 90°.`,formula:`S=a²; P=4a`,example:`a=5 → S=25`,remember:`4 tomoni teng.`},
  {title:`To‘g‘ri to‘rtburchak`,description:`Barcha burchaklari 90° bo‘lgan to‘rtburchak.`,formula:`S=ab; P=2(a+b)`,example:`a=6,b=4 → S=24`,remember:`Yuza — uzunlik × kenglik.`},
  {title:`Parallelogramm`,description:`Qarama-qarshi tomonlari parallel bo‘lgan to‘rtburchak.`,formula:`S=ah`,example:`a=8,h=5 → S=40`,remember:`Asos × balandlik.`},
  {title:`Romb`,description:`Barcha tomonlari teng parallelogramm.`,formula:`S=d₁d₂/2`,example:`d₁=6,d₂=8 → S=24`,remember:`Diagonallar ko‘paytmasining yarmi.`},
  {title:`Trapetsiya`,description:`Bir juft qarama-qarshi tomoni parallel to‘rtburchak.`,formula:`S=(a+b)h/2`,example:`a=4,b=8,h=5 → S=30`,remember:`Parallel tomonlar yig‘indisi × h ÷ 2.`},
  {title:`Aylana`,description:`Markazdan bir xil masofadagi nuqtalar to‘plami.`,formula:`r = radius`,example:`Markazdan chegaragacha 5 sm → r=5`,remember:`Radius markazdan chegaragacha.`},
  {title:`Aylana uzunligi`,description:`Aylananing chegarasi uzunligi.`,formula:`C=2πr`,example:`r=5 → C=10π`,remember:`Uzunlikda r bir marta qatnashadi.`},
  {title:`Doira yuzi`,description:`Aylana ichidagi tekislik sohasi.`,formula:`S=πr²`,example:`r=3 → S=9π`,remember:`Yuzada radius kvadratga ko‘tariladi.`},
  {title:`Markaziy va ichki burchak`,description:`Aylana bilan bog‘liq burchaklarning asosiy xossalari.`,formula:`Ichki burchak = yoyning yarmi`,example:`Yoy 80° → burchak 40°`,remember:`Ichki burchak yoyning yarmini oladi.`},
  {title:`Kub`,description:`Barcha yoqlari kvadrat bo‘lgan fazoviy jism.`,formula:`V=a³; S=6a²`,example:`a=3 → V=27`,remember:`Barcha qirralar teng.`},
  {title:`To‘g‘ri parallelepiped`,description:`Olti to‘g‘ri to‘rtburchakdan tashkil topgan jism.`,formula:`V=abc`,example:`2×3×4=24`,remember:`Uzunlik × kenglik × balandlik.`},
  {title:`Prizma`,description:`Ikki teng va parallel asosga ega fazoviy jism.`,formula:`V=Sₐh`,example:`Sₐ=10,h=4 → V=40`,remember:`Asos yuzi × balandlik.`},
  {title:`Piramida`,description:`Asosi ko‘pburchak, yon yoqlari uchburchaklardan iborat jism.`,formula:`V=Sₐh/3`,example:`Sₐ=12,h=6 → V=24`,remember:`Prizma hajmining uchdan biri.`},
  {title:`Silindr`,description:`Ikki teng doiraviy asosga ega jism.`,formula:`V=πr²h`,example:`r=2,h=5 → V=20π`,remember:`Doira yuzi × balandlik.`},
  {title:`Konus`,description:`Doiraviy asos va bitta uchga ega jism.`,formula:`V=πr²h/3`,example:`r=3,h=4 → V=12π`,remember:`Silindr hajmining uchdan biri.`},
  {title:`Shar`,description:`Markazdan bir xil masofadagi nuqtalar bilan chegaralangan jism.`,formula:`V=4πr³/3`,example:`r=3 → V=36π`,remember:`Radius uchinchi darajada.`},
  {title:`Sfera yuzi`,description:`Sharning tashqi sirt yuzasi.`,formula:`S=4πr²`,example:`r=2 → S=16π`,remember:`4πr².`},
  {title:`Hajm birliklari`,description:`Fazoviy jismlarning hajmini o‘lchash birliklari.`,formula:`1 dm³ = 1 litr`,example:`1000 cm³ = 1 dm³`,remember:`Hajm birliklari kub darajada.`},
  {title:`Sirt yuzi`,description:`Fazoviy jismning barcha tashqi yuzalari yig‘indisi.`,formula:`S=S₁+S₂+...`,example:`Kub: S=6a²`,remember:`Barcha tashqi yoqlarni qo‘sh.`},
  {title:`Ketma-ketlik`,description:`Ma’lum qonuniyat asosida joylashgan sonlar.`,formula:`a₁,a₂,a₃,...`,example:`2,4,6,8,...`,remember:`Har bir hadning o‘z o‘rni bor.`},
  {title:`Arifmetik progressiya`,description:`Qo‘shni hadlari ayirmasi o‘zgarmas ketma-ketlik.`,formula:`aₙ=a₁+(n-1)d`,example:`2,5,8,11 → d=3`,remember:`Har safar bir xil son qo‘shiladi.`},
  {title:`Geometrik progressiya`,description:`Qo‘shni hadlari nisbati o‘zgarmas ketma-ketlik.`,formula:`aₙ=a₁qⁿ⁻¹`,example:`2,6,18,54 → q=3`,remember:`Har safar bir xil songa ko‘paytiriladi.`},
  {title:`Faktorial`,description:`1 dan n gacha natural sonlar ko‘paytmasi.`,formula:`n!=1×2×...×n`,example:`5!=120`,remember:`Natural sonlar ketma-ket ko‘payadi.`},
  {title:`Kombinatorika`,description:`Tanlash va joylashtirish usullarini o‘rganadi.`,formula:`C(n,k)=n!/[k!(n-k)!]`,example:`C(5,2)=10`,remember:`Tartib muhim bo‘lmasa kombinatsiya.`},
  {title:`Ehtimollik`,description:`Tasodifiy hodisaning yuz berish imkoniyati.`,formula:`P(A)=m/n`,example:`Tanga uchun gerb: 1/2`,remember:`Qulay holatlar ÷ barcha holatlar.`},
  {title:`O‘rtacha arifmetik`,description:`Sonlar yig‘indisini ularning soniga bo‘lish.`,formula:`x̄=(x₁+...+xₙ)/n`,example:`4,6,8 → x̄=6`,remember:`Hammasini qo‘shib, soniga bo‘l.`},
  {title:`Mediana`,description:`Tartiblangan ma’lumotlarning o‘rtasidagi qiymat.`,formula:`Mediana = markaziy qiymat`,example:`2,4,7,9,12 → 7`,remember:`Avval sonlarni tartibla.`},
  {title:`Sinus va kosinus`,description:`To‘g‘ri burchakli uchburchakda burchak va tomonlar nisbatlari.`,formula:`sinα=a/c; cosα=b/c`,example:`3-4-5 uchburchakda sinα=3/5`,remember:`Sinus — qarshi/gipotenuza; kosinus — yondosh/gipotenuza.`},
  {title:`Tangens`,description:`Burchakning qarshi va yondosh katetlari nisbati.`,formula:`tgα=a/b`,example:`a=3,b=4 → tgα=3/4`,remember:`Tangens = qarshi katet ÷ yondosh katet.`}
];

const container = document.getElementById("topicsContainer");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const resultCount = document.getElementById("resultCount");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const topButton = document.getElementById("topButton");

function safe(text) {
  return String(text).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}

function render(list) {
  container.innerHTML = "";
  resultCount.textContent = list.length;

  if (!list.length) {
    container.innerHTML = `<div class="no-results"><h2>😕 Mavzu topilmadi</h2><p>Boshqa so‘z bilan qidirib ko‘ring.</p></div>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((topic) => {
    const index = topics.indexOf(topic);
    const card = document.createElement("article");
    card.className = "topic-card";
    card.innerHTML = `
      <div class="topic-number">${String(index + 1).padStart(2,"0")}</div>
      <h3>${safe(topic.title)}</h3>
      <p>${safe(topic.description)}</p>
    `;
    card.addEventListener("click", () => openTopic(topic, index));
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function openTopic(topic,index) {
  modalBody.innerHTML = `
    <div class="topic-number">MAVZU ${String(index + 1).padStart(2,"0")}</div>
    <h2>${safe(topic.title)}</h2>
    <h3>📚 Tushuncha</h3>
    <p>${safe(topic.description)}</p>
    <h3>🧮 Formula</h3>
    <div class="formula">${safe(topic.formula)}</div>
    <h3>💡 Misol</h3>
    <div class="example">${safe(topic.example)}</div>
    <h3>🧠 Eslab qoling</h3>
    <p>${safe(topic.remember)}</p>
  `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function hideModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}

function search() {
  const q = searchInput.value.trim().toLocaleLowerCase("uz-UZ");
  const filtered = !q ? topics : topics.filter(t =>
    [t.title,t.description,t.formula,t.example,t.remember]
      .join(" ").toLocaleLowerCase("uz-UZ").includes(q)
  );
  render(filtered);
}

searchInput.addEventListener("input", search);
clearBtn.addEventListener("click", () => {
  searchInput.value="";
  search();
  searchInput.focus();
});
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", e => { if(e.target === modal) hideModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") hideModal(); });

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 450 ? "flex" : "none";
});
topButton.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

render(topics);
console.log("Math Master: " + topics.length + " ta mavzu yuklandi.");
