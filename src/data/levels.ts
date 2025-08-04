import { Level } from '../types/game';

export const levels: Level[] = [
  {
    id: 1,
    title: "Home Keys F & J",
    focus: "f & j",
    description: "Master the foundation keys - F and J are your anchor points",
    practiceText: "fff jjj fjf jfj ffj jjf fjjf jffj fjfj jfjf fjjf jffj fjfj jfjf fjjf jffj fjfj jfjf fjjf jffj fjfj jfjf fjjf jffj fjfj jfjf ffff jjjj",
    keyboardHighlight: ['f', 'j'],
    difficulty: 'beginner',
    category: 'home'
  },
  {
    id: 2,
    title: "Adding D & K",
    focus: "d & k",
    description: "Expand your reach with D and K keys",
    practiceText: "ddd kkk dkd kdk ddk kkd dkkd kddk dkdk kdkd dkkd kddk dkdk kdkd dkkd kddk dkdk kdkd fjdk jfkd fjkd jfdk fjdkjfdk fjkdjfdk fjdk",
    keyboardHighlight: ['d', 'k', 'f', 'j'],
    difficulty: 'beginner',
    category: 'home'
  },
  {
    id: 3,
    title: "Adding S & L",
    focus: "s & l",
    description: "Continue building your home row foundation",
    practiceText: "sss lll sls lsl ssl lls slls lssl slsl lsls slls lssl slsl lsls fjsl jfls fjls jfsl fjsljfsl fjlsjfsl fjsl jfls fjdksl jfklsd",
    keyboardHighlight: ['s', 'l', 'd', 'k', 'f', 'j'],
    difficulty: 'beginner',
    category: 'home'
  },
  {
    id: 4,
    title: "Adding A & Semicolon",
    focus: "a & ;",
    description: "Complete the core home row keys",
    practiceText: "aaa ;;; a;a ;a; aa; ;;a a;;a ;aa; a;a; ;a;a a;;a ;aa; a;a; fjdksl; ;lskdjf a;slkdjf; ;fjdksl a;fjdksl; ;lskdjfa a;sldk;",
    keyboardHighlight: ['a', ';', 's', 'l', 'd', 'k', 'f', 'j'],
    difficulty: 'beginner',
    category: 'home'
  },
  {
    id: 5,
    title: "Adding G & H",
    focus: "g & h",
    description: "Master the inner home row keys",
    practiceText: "ggg hhh ghg hgh ggh hhg ghhg hggh ghgh hghg ghhg hggh ghgh hghg fjdksla; hgjfkdl; ghfjdksl; hgfjdksl; ghfjdksl hgfjdksl",
    keyboardHighlight: ['g', 'h', 'a', ';', 's', 'l', 'd', 'k', 'f', 'j'],
    difficulty: 'beginner',
    category: 'home'
  },
  {
    id: 6,
    title: "Complete Home Row",
    focus: "All Home Row",
    description: "Practice all home row keys together with real words",
    practiceText: "ask; jags; flags; dish; flash; glass; slash; glad; half; mask; fads; gals; jazz; halls; lass; saga; salad; dash; hash; lash",
    keyboardHighlight: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    difficulty: 'intermediate',
    category: 'home'
  },
  {
    id: 7,
    title: "Upper Row R & U",
    focus: "r & u",
    description: "Reach up to R and U keys",
    practiceText: "rrr uuu rur uru rru uur ruru urur ruru urur rush; surf; rush; guru; sugar; rural;aurus; jurur; furur; gururu; rururu",
    keyboardHighlight: ['r', 'u'],
    difficulty: 'intermediate',
    category: 'upper'
  },
  {
    id: 8,
    title: "Upper Row E & I",
    focus: "e & i",
    description: "Add E and I to your upper row skills",
    practiceText: "eee iii eie iei eei iie eiei ieie eiei ieie elder; ideas; siege; fields; higher; desire;eries;fried; belief; relief",
    keyboardHighlight: ['e', 'i', 'r', 'u'],
    difficulty: 'intermediate',
    category: 'upper'
  },
  {
    id: 9,
    title: "Upper Row W & O",
    focus: "w & o",
    description: "Expand your upper row reach",
    practiceText: "www ooo wow owo wwo oow wowo owow wowo owow whose; words; works; hours; forward; toward; power; lower; shower; flowers",
    keyboardHighlight: ['w', 'o', 'e', 'i', 'r', 'u'],
    difficulty: 'intermediate',
    category: 'upper'
  },
  {
    id: 10,
    title: "Upper Row Q & P",
    focus: "q & p",
    description: "Master the outer upper row keys",
    practiceText: "qqq ppp qpq pqp qqp ppq qpqp pqpq qpqp pqpq quest; quote; quick; pride; proof; paper; phrase; people; perhaps; quality",
    keyboardHighlight: ['q', 'p', 'w', 'o', 'e', 'i', 'r', 'u'],
    difficulty: 'intermediate',
    category: 'upper'
  },
  {
    id: 11,
    title: "Upper Row T & Y",
    focus: "t & y",
    description: "Complete your upper row training",
    practiceText: "ttt yyy tyt yty tty yyt tyty ytyt tyty ytyt taught; types; those; years; style; story; trying; pretty; thirty; yesterday",
    keyboardHighlight: ['t', 'y', 'q', 'p', 'w', 'o', 'e', 'i', 'r', 'u'],
    difficulty: 'intermediate',
    category: 'upper'
  },
  {
    id: 12,
    title: "Complete Upper Row",
    focus: "All Upper Row",
    description: "Practice all upper row keys with challenging words",
    practiceText: "quarter; require; picture; prepare; operate; pottery; territory; priority; property; properly; authority; majority; security",
    keyboardHighlight: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    difficulty: 'intermediate',
    category: 'upper'
  },
  {
    id: 13,
    title: "Lower Row V & N",
    focus: "v & n",
    description: "Begin your lower row journey",
    practiceText: "vvv nnn vnv nvn vvn nnv vnvn nvnv vnvn nvnv given; never; seven; living; driven; having; loving; moving; saving; evening",
    keyboardHighlight: ['v', 'n'],
    difficulty: 'intermediate',
    category: 'lower'
  },
  {
    id: 14,
    title: "Lower Row C & M",
    focus: "c & m",
    description: "Add C and M to your lower row skills",
    practiceText: "ccc mmm cmc mcm ccm mmc cmcm mcmc cmcm mcmc common; become; income; welcome; machine; medicine; company; campaign; customer",
    keyboardHighlight: ['c', 'm', 'v', 'n'],
    difficulty: 'intermediate',
    category: 'lower'
  },
  {
    id: 15,
    title: "Lower Row X & Comma",
    focus: "x & ,",
    description: "Practice X and comma keys",
    practiceText: "xxx ,,, x,x ,x, xx, ,,x x,x, ,x,x x,x, ,x,x oxygen, complex, exactly, examine, express, extreme, mixture, texture, luxury",
    keyboardHighlight: ['x', ',', 'c', 'm', 'v', 'n'],
    difficulty: 'intermediate',
    category: 'lower'
  },
  {
    id: 16,
    title: "Lower Row Z & Period",
    focus: "z & .",
    description: "Master Z and period keys",
    practiceText: "zzz ... z.z .z. zz. ..z z.z. .z.z z.z. .z.z amazing. frozen. realize. organize. prizes. citizen. Brazil. horizon.",
    keyboardHighlight: ['z', '.', 'x', ',', 'c', 'm', 'v', 'n'],
    difficulty: 'intermediate',
    category: 'lower'
  },
  {
    id: 17,
    title: "Lower Row B",
    focus: "b",
    description: "Add the B key to complete lower row basics",
    practiceText: "bbb bbb bbbb bbbb number; members; remember; birthday; probably; combine; cabbage; garbage;emble; mobile; suburb; public; global",
    keyboardHighlight: ['b', 'z', '.', 'x', ',', 'c', 'm', 'v', 'n'],
    difficulty: 'intermediate',
    category: 'lower'
  },
  {
    id: 18,
    title: "Complete Lower Row",
    focus: "All Lower Row",
    description: "Master all lower row keys with complex words",
    practiceText: "zombie, excellent, complex, bamboo, maximize, recognize, organize, civilize, memorize, exercize, customize, minimize.",
    keyboardHighlight: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
    difficulty: 'advanced',
    category: 'lower'
  },
  {
    id: 19,
    title: "Home + Upper Rows",
    focus: "Combined Practice",
    description: "Combine home and upper row skills",
    practiceText: "require quality; forward progress; popular support; regular education; prepare yourself; computer software; weather reports",
    keyboardHighlight: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    difficulty: 'advanced',
    category: 'mixed'
  },
  {
    id: 20,
    title: "Home + Lower Rows",
    focus: "Combined Practice",
    description: "Combine home and lower row skills",
    practiceText: "amazing flags; mobile games; global demands; simple machines; double checking; cable connections; vegetables; gambling",
    keyboardHighlight: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
    difficulty: 'advanced',
    category: 'mixed'
  },
  {
    id: 21,
    title: "All Letter Keys",
    focus: "Complete Alphabet",
    description: "Practice all letter keys together",
    practiceText: "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. Amazing quality workmanship.",
    keyboardHighlight: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
    difficulty: 'advanced',
    category: 'mixed'
  },
  {
    id: 22,
    title: "Numbers and Symbols",
    focus: "1-0 and Symbols",
    description: "Learn number row and basic symbols",
    practiceText: "Phone: 123-456-7890. Email: user@example.com. Price: $19.99 (20% off!). Date: 01/15/2024. Time: 3:45 PM. Code: #AB123.",
    keyboardHighlight: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '@', '#', '$', '%', '(', ')'],
    difficulty: 'advanced',
    category: 'numbers'
  },
  {
    id: 23,
    title: "Capital Letters",
    focus: "Shift Key Practice",
    description: "Master capitalization with shift keys",
    practiceText: "Hello World! My Name Is Mukhtar. Please Visit Our Website At Example.Com. Thank You For Your Time And Consideration.",
    keyboardHighlight: ['shift'],
    difficulty: 'advanced',
    category: 'symbols'
  },
  {
    id: 24,
    title: "Complete Sentences",
    focus: "Real Text Practice",
    description: "Type complete sentences with proper punctuation",
    practiceText: "Learning to type properly takes time and practice. Focus on accuracy first, then build up your speed gradually.",
    keyboardHighlight: [],
    difficulty: 'advanced',
    category: 'sentences'
  },
  {
    id: 25,
    title: "Paragraph Typing",
    focus: "Long Form Text",
    description: "Practice typing longer passages",
    practiceText: "The art of typing efficiently is a valuable skill in today's digital world. Whether you're writing emails, documents, or code, good typing habits will serve you well throughout your career. Remember to maintain proper posture and take breaks.",
    keyboardHighlight: [],
    difficulty: 'expert',
    category: 'sentences'
  },
  {
    id: 26,
    title: "Speed Challenge",
    focus: "Timed Practice",
    description: "Focus on typing speed while maintaining accuracy",
    practiceText: "Speed and accuracy go hand in hand when it comes to effective typing. Challenge yourself to type faster while maintaining your precision. Consistent practice is the key to improvement.",
    keyboardHighlight: [],
    difficulty: 'expert',
    category: 'sentences'
  },
  {
    id: 27,
    title: "Accuracy Test",
    focus: "Precision Focus",
    description: "Prioritize accuracy over speed in this challenging test",
    practiceText: "Accuracy is more important than speed when learning to type. It's better to type slowly and correctly than quickly with many mistakes. Focus on hitting the right keys every time.",
    keyboardHighlight: [],
    difficulty: 'expert',
    category: 'sentences'
  },
  {
    id: 28,
    title: "Random Characters",
    focus: "Unusual Patterns",
    description: "Challenge yourself with random letter combinations",
    practiceText: "qjxz vbkm fjdl skgh tyui werq asdf ghjk zxcv bnml poiu ytew qazx swed cfvg tbhy njmu kiol plmn okij uhyb tgvf cxsw qazx",
    keyboardHighlight: [],
    difficulty: 'expert',
    category: 'mixed'
  },
  {
    id: 29,
    title: "Professional Text",
    focus: "Real World Content",
    description: "Practice with business and professional writing",
    practiceText: "Dear valued customer, we appreciate your business and continued loyalty. Please find attached the quarterly report detailing our progress and future initiatives. Thank you for your time.",
    keyboardHighlight: [],
    difficulty: 'expert',
    category: 'sentences'
  },
  {
    id: 30,
    title: "Final Challenge",
    focus: "Ultimate Test",
    description: "The ultimate typing challenge combining all skills",
    practiceText: "Congratulations on reaching the final level! You've mastered all aspects of touch typing. Continue practicing to maintain and improve your skills. Remember: accuracy, speed, and consistency are the hallmarks of excellent typing.",
    keyboardHighlight: [],
    difficulty: 'expert',
    category: 'sentences'
  }
];