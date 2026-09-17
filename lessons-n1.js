window.LESSONS = Object.assign(window.LESSONS || {}, {

/* ═══════════ 第 1 周 · 发音 I ═══════════ */

w1d1: {
  title: "五个元音",
  goal: "学完能准确读出 a、e、i、o、u，并读出 8 个只用它们拼成的词。",
  recap: [],
  steps: [
    { explain: [
        { p: "西班牙语只有 **5 个元音**，每个永远只有一种读法，不像英语一个字母能读好几种音。这是它比英语好学得多的原因，也是今天唯一要做的事。" },
        { table: { head: ["元音", "读法", "口型"], rows: [["a", "啊", "嘴张大"], ["e", "诶（只发前半段，不滑向「衣」）", "嘴微开，嘴角向两边"], ["i", "衣", "嘴角拉开"], ["o", "哦", "嘴唇收圆，不滑动"], ["u", "乌", "嘴唇收圆并向前突"]] } },
        { tip: "最容易错的是 e 和 o：中文的「诶」「哦」会在结尾滑一下，西语的不滑，一个音干脆结束。" }
      ],
      check: [
        { q: "选择：西语的 e 应该读成", opts: ["「诶」的前半段，短促不滑", "像英语 e 那样滑向「衣」", "像「饿」"], a: "「诶」的前半段，短促不滑" },
        { q: "选择：西语的 u 读作", opts: ["乌", "淤", "优"], a: "乌" }
      ]
    },
    { explain: [
        { p: "辅音 **m、n、s、l、p、t** 和汉语拼音里的读法几乎一样，今天先借它们来拼元音。把每个辅音和 5 个元音各拼一遍：" },
        { table: { head: ["m", "n", "s", "l", "p", "t"], rows: [["ma", "na", "sa", "la", "pa", "ta"], ["me", "ne", "se", "le", "pe", "te"], ["mi", "ni", "si", "li", "pi", "ti"], ["mo", "no", "so", "lo", "po", "to"], ["mu", "nu", "su", "lu", "pu", "tu"]] } },
        { p: "注意 p 和 t：西语的 p、t **不送气**，读的时候没有那股喷出来的气，更接近汉语拼音的 b、d。pa 听起来像「巴」而不是「趴」。" }
      ],
      check: [
        { q: "选择：西语的 pa 听起来更像", opts: ["巴", "趴"], a: "巴" },
        { q: "mesa 这个词用到了哪两个元音？", a: "e 和 a" }
      ]
    },
    { explain: [
        { p: "今天的 8 个词全部只用上面这些音。**hola** 里的 h 永远不发音，直接读 o-la。词汇备注里大写的音节是重音，先照着读，重音规则明天讲。" }
      ],
      check: [
        { q: "hola 的 h 怎么读？", a: "不发音，直接读 o-la" },
        { q: "选择：mano（手）读作", opts: ["MA-no", "ma-NO"], a: "MA-no" }
      ]
    }
  ],
  examples: [
    ["Hola.", "你好。", "hola 一个词就是「你好」，h 不发音，读 O-la。任何时间都能用。"],
    ["Sí.", "是。", "sí（是）。上面的符号让它读得更响，也用来和 si（如果）区分。"],
    ["No.", "不。", "no（不）。读「诺」，o 不滑动。"],
    ["¿Sí o no?", "是还是不是？", "sí（是）+ o（还是）+ no（不）。问句前后各一个问号，句尾语调上扬。"],
    ["Hola, mamá.", "你好，妈妈。", "hola（你好）+ mamá（妈妈）。mamá 重音在最后一个 a，因为写了符号。"],
    ["Mesa, mano, mamá, papá.", "桌子、手、妈妈、爸爸。", "ME-sa · MA-no · ma-MÁ · pa-PÁ。前两个重音在前，后两个因为有符号重音在末尾。"]
  ],
  vocab: [
    ["hola", "你好", "[O-la]，h 不发音"],
    ["sí", "是", "[SÍ]"],
    ["no", "不", "[NO]"],
    ["o", "或者；还是", "[O]，一个元音就是一个词"],
    ["mamá", "妈妈", "[ma-MÁ]"],
    ["papá", "爸爸", "[pa-PÁ]"],
    ["mesa", "桌子", "[ME-sa]，冠词第 5 周学"],
    ["mano", "手", "[MA-no]"]
  ],
  exercises: [
    { q: "选择：a 的口型是", opts: ["嘴张大", "嘴唇收圆", "嘴角拉开"], a: "嘴张大" },
    { q: "选择：o 的读法", opts: ["哦，不滑动", "欧", "奥"], a: "哦，不滑动" },
    { q: "写出 mesa 里的两个元音", a: "e, a" },
    { q: "选择：hola 读作", opts: ["O-la", "HO-la", "o-LA"], a: "O-la" },
    { q: "翻译：是。", a: "Sí." },
    { q: "翻译：你好，爸爸。", a: "Hola, papá." }
  ],
  task: "点每个词的朗读按钮，跟读 5 遍；再把 8 个词连起来读一遍并录音，回听时注意 e 和 o 有没有滑动。"
},

w1d2: {
  title: "重音在哪个音节",
  goal: "学完看到任何一个词，都能判断重音落在哪个音节。",
  recap: [
    { q: "上一课：西语有几个元音？", a: "5 个：a e i o u" },
    { q: "上一课：hola 的 h 怎么读？", a: "不发音" },
    { q: "上一课：「妈妈」怎么说？", a: "mamá" }
  ],
  steps: [
    { explain: [
        { p: "每个西语词都有一个读得最响、最长的音节，叫**重音**。重音读错，母语者常常听不懂，所以它和元音一样重要。好消息是规则只有三条，今天一条一条来。" },
        { p: "**规则一**：词以**元音、n 或 s** 结尾，重音在**倒数第二个**音节。这是最常见的情况，昨天的 mesa、mano、hola 都是：ME-sa、MA-no、O-la。" },
        { table: { head: ["词", "结尾", "重音"], rows: [["mesa 桌子", "元音 a", "ME-sa"], ["semana 周", "元音 a", "se-MA-na"], ["lunes 星期一", "s", "LU-nes"], ["tomate 番茄", "元音 e", "to-MA-te"]] } }
      ],
      check: [
        { q: "选择：semana 的重音在", opts: ["se-MA-na", "SE-ma-na", "se-ma-NA"], a: "se-MA-na" },
        { q: "选择：lunes 以 s 结尾，重音在", opts: ["LU-nes", "lu-NES"], a: "LU-nes" }
      ]
    },
    { explain: [
        { p: "**规则二**：词以**其他辅音**结尾（不是 n、s），重音在**最后一个**音节。" },
        { table: { head: ["词", "结尾", "重音"], rows: [["papel 纸", "l", "pa-PEL"], ["hotel 旅馆", "l", "o-TEL"], ["animal 动物", "l", "a-ni-MAL"], ["hospital 医院", "l", "os-pi-TAL"]] } },
        { tip: "记法：n 和 s 是「软」结尾，走规则一；其他辅音是「硬」结尾，走规则二。" }
      ],
      check: [
        { q: "选择：hotel 的重音在", opts: ["o-TEL", "O-tel"], a: "o-TEL" },
        { q: "选择：animal 以 l 结尾，重音在", opts: ["最后一个音节 MAL", "倒数第二个 ni"], a: "最后一个音节 MAL" }
      ]
    },
    { explain: [
        { p: "**规则三**：如果词上写了**重音符号**（á é í ó ú），以符号为准。符号存在的意义就是标记那些不符合前两条的词。昨天的 mamá、papá 就是：按规则一本该读 MA-ma，但符号把重音拉到了末尾。" },
        { table: { head: ["词", "不加符号会读成", "实际读法"], rows: [["mamá", "MA-ma", "ma-MÁ"], ["café 咖啡", "CA-fe", "ca-FÉ"], ["teléfono 电话", "te-le-FO-no", "te-LÉ-fo-no"], ["sofá 沙发", "SO-fa", "so-FÁ"]] } }
      ],
      check: [
        { q: "选择：teléfono 的重音在", opts: ["LÉ", "FO", "NO"], a: "LÉ" },
        { q: "café 为什么要写符号？", a: "按规则一本该读 CA-fe，符号把重音改到末尾 ca-FÉ" }
      ]
    }
  ],
  examples: [
    ["mesa, semana, lunes", "桌子、周、星期一（规则一：重音在倒数第二音节）", "ME-sa · se-MA-na · LU-nes。三个词都以元音或 s 结尾。"],
    ["papel, hotel, animal", "纸、旅馆、动物（规则二：重音在末音节）", "pa-PEL · o-TEL · a-ni-MAL。都以 l 结尾，hotel 的 h 不发音。"],
    ["mamá, café, teléfono", "妈妈、咖啡、电话（规则三：看符号）", "ma-MÁ · ca-FÉ · te-LÉ-fo-no。符号在哪，重音就在哪。"],
    ["Hola, ¿sí o no?", "你好，是还是不是？", "hola（你好）+ sí（是）+ o（还是）+ no（不）。全是昨天的词。"],
    ["tomate, sofá, hospital", "番茄、沙发、医院", "to-MA-te（规则一）· so-FÁ（规则三）· os-pi-TAL（规则二，h 不发音）。"]
  ],
  vocab: [
    ["semana", "周", "[se-MA-na]"],
    ["lunes", "星期一", "[LU-nes]"],
    ["tomate", "番茄", "[to-MA-te]"],
    ["papel", "纸", "[pa-PEL]"],
    ["hotel", "旅馆", "[o-TEL]，h 不发音"],
    ["animal", "动物", "[a-ni-MAL]"],
    ["hospital", "医院", "[os-pi-TAL]"],
    ["café", "咖啡", "[ca-FÉ]"],
    ["teléfono", "电话", "[te-LÉ-fo-no]"],
    ["sofá", "沙发", "[so-FÁ]"]
  ],
  exercises: [
    { q: "标出重音：ventana（窗户）", a: "ven-TA-na（元音结尾，规则一）" },
    { q: "标出重音：papel", a: "pa-PEL（l 结尾，规则二）" },
    { q: "标出重音：sofá", a: "so-FÁ（有符号，规则三）" },
    { q: "选择：以 n 或 s 结尾的词，重音在", opts: ["倒数第二个音节", "最后一个音节"], a: "倒数第二个音节" },
    { q: "选择：hospital 的重音在", opts: ["TAL", "PI", "OS"], a: "TAL" },
    { q: "teléfono 如果不写符号，会读成什么？", a: "te-le-FO-no（规则一），所以要写符号" }
  ],
  task: "不看备注，把今天 10 个词逐个读出来并说出重音在第几个音节，录音后对照备注检查。"
},

w1d3: {
  title: "p t k 与不发音的 h",
  goal: "学完能读出 c、qu、b、v、d、g 开头的词，知道 p t k 不送气，h 永远不发音。",
  recap: [
    { q: "上一课：以元音、n、s 结尾的词重音在哪？", a: "倒数第二个音节" },
    { q: "上一课：hotel 的重音在哪？", a: "o-TEL，l 结尾走规则二" },
    { q: "上一课：「咖啡」怎么说？", a: "café" }
  ],
  steps: [
    { explain: [
        { p: "西语的 **p、t、k 三个音不送气**：读的时候嘴前没有那股气。中文的「趴、他、卡」是送气的，「巴、大、嘎」的清音版才接近西语。听 papá 的朗读，你会觉得像「巴巴」。" },
        { p: "**k 音有三种写法**：c 在 a、o、u 前（casa、cosa、Cuba），qu 在 e、i 前（queso、quiero），k 只用在外来词（kilo）。qu 里的 u **不发音**，queso 读 KE-so。" },
        { table: { head: ["写法", "读", "例词"], rows: [["c + a / o / u", "k", "casa 房子, boca 嘴"], ["qu + e / i", "k，u 不发音", "queso 奶酪"], ["p", "不送气的 p", "papá, papel"], ["t", "不送气的 t", "tomate, hotel"]] } }
      ],
      check: [
        { q: "选择：queso 里的 u", opts: ["不发音，读 KE-so", "发音，读 KUE-so"], a: "不发音，读 KE-so" },
        { q: "选择：西语的 t 更像中文的", opts: ["大（不送气）", "他（送气）"], a: "大（不送气）" }
      ]
    },
    { explain: [
        { p: "**b 和 v 读法完全相同**，都是 b：vino（酒）读 BI-no。西班牙人自己也分不出，拼写时会问「是 b 还是 v」。**d** 像汉语拼音的 d。**g 在 a、o、u 前**是硬 g，像「哥」：gato（猫）、gusto（愉快）。" },
        { p: "这三个音在**两个元音之间**会变软、变轻：bueno 里的 b 嘴唇不完全闭合，todo 里的 d 接近英语 the 的 th，lago 里的 g 舌根不闭紧。听起来像「含糊」，这是正常的，先知道有这回事，不用刻意模仿。" },
        { table: { head: ["写法", "读", "例词"], rows: [["b / v", "b", "boca 嘴, vino 酒, bueno 好"], ["d", "d", "día 天, dos 二"], ["g + a / o / u", "硬 g", "gato 猫, gusto 愉快"]] } }
      ],
      check: [
        { q: "选择：vino 的 v 读作", opts: ["b", "v（上齿咬下唇）", "w"], a: "b" },
        { q: "选择：gato 的 g 读作", opts: ["硬 g，像「哥」", "像 j", "不发音"], a: "硬 g，像「哥」" }
      ]
    },
    { explain: [
        { p: "**h 永远不发音**。hola、hotel、hospital 都直接从元音开始。唯一例外是 ch 组合（第 5 课讲），那是另一个字母。" }
      ],
      check: [
        { q: "hospital 读作", a: "os-pi-TAL，h 不发音" },
        { q: "选择：下面哪个词的 h 发音？", opts: ["都不发音", "hotel", "hola"], a: "都不发音" }
      ]
    }
  ],
  examples: [
    ["casa, queso, boca", "房子、奶酪、嘴（三个 k 音和 b 音）", "CA-sa（c + a 读 k）· KE-so（qu 读 k，u 不发音）· BO-ca（b）。"],
    ["vino, bueno, día", "酒、好的、天", "BI-no（v 读 b）· BUE-no（b 在两个元音间变软）· DÍ-a（有符号，重音在 í）。"],
    ["gato, gusto, dos", "猫、愉快、二", "GA-to（g + a 硬 g）· GUS-to · DOS。"],
    ["Hola, papá. ¿Sí o no?", "你好，爸爸。是还是不是？", "hola + papá + sí + o + no。全部是学过的词，注意 p 不送气。"],
    ["Café, tomate, queso.", "咖啡、番茄、奶酪。", "ca-FÉ · to-MA-te · KE-so。三个食物名，重音分别在末音节、倒数第二、倒数第二。"]
  ],
  vocab: [
    ["casa", "房子；家", "[CA-sa]，c + a 读 k"],
    ["boca", "嘴", "[BO-ca]"],
    ["queso", "奶酪", "[KE-so]，u 不发音"],
    ["vino", "酒；葡萄酒", "[BI-no]，v 读 b"],
    ["bueno/a", "好的", "[BUE-no]，-a 形式第 3 周讲"],
    ["día", "天；白天", "[DÍ-a]"],
    ["dos", "二", "[DOS]"],
    ["gato", "猫", "[GA-to]"],
    ["gusto", "愉快；喜好", "[GUS-to]"]
  ],
  exercises: [
    { q: "选择：casa 的 c 读作", opts: ["k", "s", "ch"], a: "k" },
    { q: "选择：queso 读作", opts: ["KE-so", "KUE-so", "KWE-so"], a: "KE-so" },
    { q: "b 和 v 的读法有区别吗？", a: "没有，都读 b" },
    { q: "选择：西语的 p 是", opts: ["不送气", "送气"], a: "不送气" },
    { q: "hola 和 hotel 的 h 怎么读？", a: "都不发音" },
    { q: "翻译：猫。", a: "gato" }
  ],
  task: "跟读 9 个新词各 5 遍，重点听 papá、tomate、casa 里 p、t、c 有没有送气；录一遍自己的，对比朗读。"
},

w1d4: {
  title: "r、rr、l、ll、ñ",
  goal: "学完能分清 pero 和 perro，会读 ll 和 ñ。",
  recap: [
    { q: "上一课：queso 里的 u 发音吗？", a: "不发音，读 KE-so" },
    { q: "上一课：v 读作什么？", a: "b，和 b 完全一样" },
    { q: "上一课：「猫」怎么说？", a: "gato" }
  ],
  steps: [
    { explain: [
        { p: "西语有两个 r。**单个 r 在词中间**是「单击」：舌尖在上颚轻弹一下，像快速说「的」时舌头的动作，pero（但是）、caro（贵）。**rr 和词首的 r** 是「颤音」：舌尖连续颤动几下，perro（狗）、rosa（玫瑰）。" },
        { table: { head: ["写法", "读法", "例词"], rows: [["r（词中间）", "单击一下", "pero 但是, caro 贵"], ["rr", "颤音", "perro 狗"], ["r（词首）", "颤音", "rosa 玫瑰"]] } },
        { tip: "颤音一时发不出来很正常，先用单击代替，每天练 1 分钟「tr-tr-tr」，大多数人两三周就出来了。pero 和 perro 意思完全不同，先把「听出区别」练好。" }
      ],
      check: [
        { q: "选择：哪个词里的 r 是颤音？", opts: ["perro", "pero", "caro"], a: "perro" },
        { q: "选择：rosa 的 r 在词首，读作", opts: ["颤音", "单击", "不发音"], a: "颤音" }
      ]
    },
    { explain: [
        { p: "**l** 和汉语拼音的 l 一样：lunes、papel。**ll** 是另一个字母，在绝大多数地区读得像中文「呀」里的 y：calle（街道）读 CA-ye。**y** 做辅音时读法相同：yo（我）读「哟」。" },
        { p: "**ñ** 是西语独有的字母，把「尼」和「呀」合成一个音：año（年）读 A-nyo，mañana（明天）读 ma-NYA-na。" },
        { table: { head: ["写法", "读法", "例词"], rows: [["l", "l", "lunes, papel"], ["ll / y", "呀", "calle 街道, yo 我"], ["ñ", "尼呀合一", "año 年, mañana 明天"]] } },
        { tip: "año（年）和 ano（肛门）只差一个 ñ。说「我 30 岁」时务必读出 ñ。" }
      ],
      check: [
        { q: "选择：calle 的 ll 读作", opts: ["呀", "勒", "拉"], a: "呀" },
        { q: "año 和 ano 的区别？", a: "año 是「年」，ano 是「肛门」，ñ 必须读出「尼呀」" }
      ]
    }
  ],
  examples: [
    ["pero, perro", "但是、狗", "PE-ro（单击 r）· PE-rro（颤音）。就差这一个音。"],
    ["caro, rosa", "贵的、玫瑰", "CA-ro（词中 r 单击）· RO-sa（词首 r 颤音）。"],
    ["calle, yo", "街道、我", "CA-ye（ll 读呀）· YO（y 读呀）。"],
    ["año, mañana", "年、明天", "A-nyo · ma-NYA-na。两个 ñ。"],
    ["Hola, mamá. ¿Sí o no?", "你好，妈妈。是还是不是？", "全是学过的词，练一遍连读。"]
  ],
  vocab: [
    ["pero", "但是", "[PE-ro]，单击 r"],
    ["perro", "狗", "[PE-rro]，颤音"],
    ["caro/a", "贵的", "[CA-ro]"],
    ["rosa", "玫瑰；粉色", "[RO-sa]，词首 r 颤音"],
    ["calle", "街道", "[CA-ye]"],
    ["yo", "我", "[YO]"],
    ["año", "年", "[A-nyo]"],
    ["mañana", "明天；早上", "[ma-NYA-na]"]
  ],
  exercises: [
    { q: "选择：pero 的 r 是", opts: ["单击", "颤音"], a: "单击" },
    { q: "选择：词首的 r（如 rosa）是", opts: ["颤音", "单击"], a: "颤音" },
    { q: "选择：ll 接近中文哪个音？", opts: ["呀", "了", "拉"], a: "呀" },
    { q: "mañana 读作", a: "ma-NYA-na" },
    { q: "翻译：狗。", a: "perro" },
    { q: "翻译：我。", a: "yo" }
  ],
  task: "对着朗读按钮跟读 pero / perro 各 10 遍，caro / rosa 各 10 遍；再把 8 个新词各读 3 遍并录音。"
},

w1d5: {
  title: "j、g、c、z、ch 与总复习",
  goal: "学完发音系统就完整了：任何一个西语词都能自己读出来。",
  recap: [
    { q: "上一课：pero 和 perro 哪个是颤音？", a: "perro" },
    { q: "上一课：ll 读作？", a: "呀" },
    { q: "上一课：「明天」怎么说？", a: "mañana" }
  ],
  steps: [
    { explain: [
        { p: "**j** 是喉部摩擦音，比中文的 h 更用力、更靠后，像清嗓子：jamón（火腿）、hijo（儿子）。**g 在 e、i 前**读法和 j 完全一样：gente（人们）读 JEN-te。想在 e、i 前保留硬 g 音就写 gu：guitarra（吉他），这里的 u 不发音。" },
        { table: { head: ["写法", "读法", "例词"], rows: [["j", "重的 h", "jamón 火腿, hijo 儿子"], ["g + e / i", "同 j", "gente 人们"], ["gu + e / i", "硬 g，u 不发音", "guitarra 吉他"], ["g + a / o / u", "硬 g（第 3 课）", "gato, gusto"]] } }
      ],
      check: [
        { q: "选择：gente 的 g 读作", opts: ["像 j", "硬 g", "不发音"], a: "像 j" },
        { q: "选择：guitarra 里的 u", opts: ["不发音", "发音"], a: "不发音" }
      ]
    },
    { explain: [
        { p: "**c 在 e、i 前**和 **z** 是同一个音：西班牙读 θ（像英语 think 的 th，舌尖轻轻咬在齿间），拉美读 s。cena（晚餐）、cine（电影院）、zapato（鞋）。两种读法都对，选一种坚持。**ch** 读「吃」：chico（男孩）、mucho（很多）。" },
        { table: { head: ["写法", "西班牙", "拉美", "例词"], rows: [["c + e / i", "θ", "s", "cena 晚餐, cine 电影院"], ["z", "θ", "s", "zapato 鞋"], ["ch", "吃", "吃", "chico 男孩, mucho 很多"]] } },
        { tip: "总结 c：在 a、o、u 前读 k（casa），在 e、i 前读 θ / s（cine）。总结 g：在 a、o、u 前硬 g（gato），在 e、i 前读 j（gente）。" }
      ],
      check: [
        { q: "选择：cine 的 c 读作", opts: ["θ 或 s", "k", "ch"], a: "θ 或 s" },
        { q: "选择：zapato 的 z 读作", opts: ["θ 或 s", "z（英语浊音）", "ts"], a: "θ 或 s" }
      ]
    },
    { explain: [
        { p: "这一周学完了全部发音。把容易混的几组放在一张表里，读的时候对照：" },
        { table: { head: ["容易混的", "规律"], rows: [["c", "a/o/u 前 k，e/i 前 θ/s"], ["g", "a/o/u 前硬 g，e/i 前同 j"], ["qu / gu", "e/i 前，u 不发音"], ["b / v", "完全相同，都是 b"], ["r / rr", "词中单 r 单击，rr 和词首 r 颤音"], ["ll / y", "呀"], ["h", "永远不发音"], ["j", "重的 h"]] } }
      ],
      check: [
        { q: "选择：casa 和 cine 的 c 读法", opts: ["不同：k 和 θ/s", "相同"], a: "不同：k 和 θ/s" },
        { q: "选择：gato 和 gente 的 g 读法", opts: ["不同：硬 g 和 j", "相同"], a: "不同：硬 g 和 j" }
      ]
    }
  ],
  examples: [
    ["jamón, hijo, gente", "火腿、儿子、人们", "ja-MÓN（j）· I-jo（h 不发音，j）· JEN-te（g + e 读 j）。"],
    ["cena, cine, zapato", "晚餐、电影院、鞋", "ΘE-na / SE-na · ΘI-ne / SI-ne · θa-PA-to / sa-PA-to。"],
    ["chico, mucho", "男孩、很多", "CHI-co（ch 读吃，c + o 读 k）· MU-cho。"],
    ["guitarra, gato, gente", "吉他、猫、人们", "gi-TA-rra（gu 硬 g）· GA-to（硬 g）· JEN-te（j 音）。三个 g，两种读法。"],
    ["Hola, chico. ¿Sí o no?", "你好，男孩。是还是不是？", "hola + chico（男孩）+ sí o no。"]
  ],
  vocab: [
    ["jamón", "火腿", "[ja-MÓN]"],
    ["hijo/a", "儿子 / 女儿", "[I-jo]，h 不发音"],
    ["gente", "人们", "[JEN-te]"],
    ["guitarra", "吉他", "[gi-TA-rra]，u 不发音"],
    ["cena", "晚餐", "[ΘE-na / SE-na]"],
    ["cine", "电影院", "[ΘI-ne / SI-ne]"],
    ["zapato", "鞋", "[θa-PA-to]"],
    ["chico/a", "男孩 / 女孩", "[CHI-co]"],
    ["mucho/a", "很多", "[MU-cho]"]
  ],
  exercises: [
    { q: "选择：jamón 的 j 读作", opts: ["重的 h", "英语 j", "y"], a: "重的 h" },
    { q: "选择：gente 和 gato 的 g", opts: ["读法不同", "读法相同"], a: "读法不同" },
    { q: "选择：cine 的 c", opts: ["θ 或 s", "k"], a: "θ 或 s" },
    { q: "选择：chico 的 ch 读作", opts: ["吃", "k", "sh"], a: "吃" },
    { q: "标出重音并说明读法：zapato", a: "θa-PA-to，z 读 θ 或 s，元音结尾重音在倒数第二音节" },
    { q: "翻译：很多。", a: "mucho" }
  ],
  task: "周六会读整张字母表。今天把这一周的 44 个词全部读一遍并录音，标出你自己觉得没把握的 5 个，周六重点练。"
},

/* ═══════════ 第 2 周 · 字母表、问候与数字 ═══════════ */

w2d1: {
  title: "字母表与拼名字",
  goal: "学完能用西语字母名拼出自己的名字，听懂别人拼的词。",
  recap: [
    { q: "上一课：gente 的 g 读作？", a: "像 j" },
    { q: "上一课：cine 的 c 读作？", a: "θ 或 s" },
    { q: "上一课：「很多」怎么说？", a: "mucho" }
  ],
  steps: [
    { explain: [
        { p: "上周学的是字母**在词里怎么读**，今天学字母**的名字**。名字用在拼写、报车牌、报邮箱的时候。西语字母表 27 个字母，比英语多一个 ñ。这张表的朗读按钮读的是字母名：" },
        { table: { head: ["字母", "名称", "字母", "名称", "字母", "名称"], rows: [["a", "a", "j", "jota", "r", "erre"], ["b", "be", "k", "ka", "s", "ese"], ["c", "ce", "l", "ele", "t", "te"], ["d", "de", "m", "eme", "u", "u"], ["e", "e", "n", "ene", "v", "uve"], ["f", "efe", "ñ", "eñe", "w", "uve doble"], ["g", "ge", "o", "o", "x", "equis"], ["h", "hache", "p", "pe", "y", "i griega"], ["i", "i", "q", "cu", "z", "zeta"]],
          hideSay: true, say: { a: "a", b: "be", c: "ce", d: "de", e: "e", f: "efe", g: "ge", h: "hache", i: "i", j: "jota", k: "ka", l: "ele", m: "eme", n: "ene", "ñ": "eñe", o: "o", p: "pe", q: "cu", r: "erre", s: "ese", t: "te", u: "u", v: "uve", w: "uve doble", x: "equis", y: "i griega", z: "zeta" } } },
        { tip: "b 和 v 读音相同，所以拼写时别人会问 ¿be o uve?（b 还是 v？）。y 也叫 ye。" }
      ],
      check: [
        { q: "选择：字母 j 的名字是", opts: ["jota", "je", "ji"], a: "jota" },
        { q: "选择：字母 h 的名字是", opts: ["hache", "ha", "eh"], a: "hache" }
      ]
    },
    { explain: [
        { p: "问「怎么拼」用固定句 **¿Cómo se escribe?**（cómo = 怎么，se escribe = 被写作；se 的用法第 4 周讲，现在整句记）。回答时逐个报字母名，重音符号说 **con acento**（带符号），ñ 说 eñe。" },
        { table: { head: ["问", "答"], rows: [["¿Cómo se escribe «Ana»?", "a, ene, a."], ["¿Cómo se escribe «José»?", "jota, o, ese, e con acento."], ["¿Cómo se escribe «Li»?", "ele, i."]] } }
      ],
      check: [
        { q: "用字母名拼出 mesa", a: "eme, e, ese, a" },
        { q: "用字母名拼出 año", a: "a, eñe, o" }
      ]
    }
  ],
  examples: [
    ["¿Cómo se escribe?", "怎么拼写？", "cómo（怎么）+ se escribe（被写作，固定句）。问别人一个词怎么写。"],
    ["¿Cómo se escribe «José»? — Jota, o, ese, e con acento.", "José 怎么拼？——j-o-s-é。", "逐个报字母名；带符号的 é 说 e con acento（e 带重音符号）。"],
    ["¿Cómo se escribe «hotel»? — Hache, o, te, e, ele.", "hotel 怎么拼？——h-o-t-e-l。", "hache 是 h 的名字，虽然 h 不发音，拼的时候要报出来。"],
    ["Mi nombre es Ana.", "我的名字是 Ana。", "mi（我的）+ nombre（名字）+ es（是）+ Ana。es 第 4 周细学，先整句记。"],
    ["¿Con be o con uve? — Con uve.", "用 b 还是 v？——用 v。", "con（用）+ be（b 的名字）+ o（还是）+ con uve（v 的名字）。"]
  ],
  vocab: [
    ["¿Cómo se escribe?", "怎么拼写？", "固定句，cómo = 怎么"],
    ["se escribe", "写作……", "回答拼写时用"],
    ["nombre", "名字", "[NOM-bre]"],
    ["mi", "我的", "[MI]"],
    ["es", "是（他 / 她 / 它）", "第 4 周系统学"],
    ["con", "用；和", "[CON]"],
    ["acento", "重音符号", "e con acento = é"]
  ],
  exercises: [
    { q: "用字母名拼出 casa", a: "ce, a, ese, a" },
    { q: "用字母名拼出 café", a: "ce, a, efe, e con acento" },
    { q: "选择：ñ 的名字是", opts: ["eñe", "ene", "enye"], a: "eñe" },
    { q: "选择：v 的名字是", opts: ["uve", "ve", "be"], a: "uve" },
    { q: "翻译：怎么拼写？", a: "¿Cómo se escribe?" },
    { q: "翻译：我的名字是 Li。", a: "Mi nombre es Li." }
  ],
  task: "用西语字母名拼出自己的名字和所在城市，录音；再听字母表连播两遍。"
},

w2d2: {
  title: "早上好、下午好、晚上好",
  goal: "学完能按时间段打招呼，并知道 buenos días 为什么是这两个词。",
  recap: [
    { q: "上一课：字母 h 的名字？", a: "hache" },
    { q: "上一课：「怎么拼写」怎么问？", a: "¿Cómo se escribe?" },
    { q: "上一课：「名字」怎么说？", a: "nombre" }
  ],
  steps: [
    { explain: [
        { p: "三句问候都是同一个结构：**bueno（好的）+ 时间段**。día（天）、tarde（下午）、noche（夜晚）。西语问候习惯说复数，所以名词加 -s：días、tardes、noches。" },
        { p: "bueno 也要跟着变。día 虽然以 a 结尾，却是**阳性**词，所以配 buenos；tarde 和 noche 是**阴性**，配 buenas。阴阳性第 5 周系统学，今天先记住这三句。" },
        { table: { head: ["时间", "说法", "构成"], rows: [["早上到中午", "Buenos días", "buenos（好的，阳性复数）+ días（天）"], ["下午到天黑", "Buenas tardes", "buenas（好的，阴性复数）+ tardes（下午）"], ["天黑以后", "Buenas noches", "buenas + noches（夜晚）。见面和道晚安都用它"]] } }
      ],
      check: [
        { q: "选择：buenos días 里的 días 意思是", opts: ["天", "早上", "好"], a: "天" },
        { q: "选择：下午三点见面说", opts: ["Buenas tardes", "Buenos días", "Buenas noches"], a: "Buenas tardes" }
      ]
    },
    { explain: [
        { p: "问候之后常接一句 **¿Qué tal?**（怎么样？），相当于「你好吗」。回答 **Bien**（好）或 **Muy bien**（很好），再加 **gracias**（谢谢）。称呼对方用 **señor**（先生）、**señora**（女士）。" },
        { table: { head: ["说话人", "内容"], rows: [["Ana", "Buenos días, señor. ¿Qué tal?"], ["señor", "Muy bien, gracias. ¿Y tú?"], ["Ana", "Bien, gracias."]] } },
        { tip: "¿Y tú? 是「你呢？」：y（和）+ tú（你）。tú 有符号，第 3 周细讲。" }
      ],
      check: [
        { q: "选择：¿Qué tal? 的意思是", opts: ["怎么样？", "你叫什么？", "几点了？"], a: "怎么样？" },
        { q: "填空：___ bien, gracias.（很好，谢谢）", a: "Muy" }
      ]
    }
  ],
  examples: [
    ["Buenos días.", "早上好。", "buenos（好的，阳性复数）+ días（天，复数）。día 是阳性所以用 buenos。"],
    ["Buenas tardes, señora.", "下午好，女士。", "buenas（好的，阴性复数）+ tardes（下午）+ señora（女士）。"],
    ["Buenas noches, mamá.", "晚安，妈妈。", "buenas + noches（夜晚）。睡前说就是晚安。"],
    ["Hola, ¿qué tal? — Muy bien, gracias.", "你好，怎么样？——很好，谢谢。", "qué tal（怎么样）；muy（很）+ bien（好）+ gracias（谢谢）。"],
    ["¿Y tú? — Bien.", "你呢？——好。", "y（和）+ tú（你）→ 你呢；bien（好）。"]
  ],
  vocab: [
    ["Buenos días", "早上好", "bueno + día，día 阳性"],
    ["Buenas tardes", "下午好", "tarde 阴性"],
    ["Buenas noches", "晚上好；晚安", "noche 阴性"],
    ["tarde", "下午", "[TAR-de]"],
    ["noche", "夜晚", "[NO-che]"],
    ["¿Qué tal?", "怎么样？", "见面第二句"],
    ["bien", "好（回答）", "[BIEN]"],
    ["muy", "很", "[MUY]"],
    ["gracias", "谢谢", "[GRA-cias]"],
    ["señor / señora", "先生 / 女士", "[se-NYOR]"],
    ["¿Y tú?", "你呢？", "y 和 + tú 你"]
  ],
  exercises: [
    { q: "选择：晚上九点见到朋友说", opts: ["Buenas noches", "Buenos días", "Buenas tardes"], a: "Buenas noches" },
    { q: "为什么是 buenos días 而不是 buenas días？", a: "día 是阳性名词，形容词用阳性 buenos" },
    { q: "选择：tardes 和 noches 前面用", opts: ["buenas", "buenos"], a: "buenas" },
    { q: "翻译：早上好，先生。", a: "Buenos días, señor." },
    { q: "翻译：很好，谢谢。你呢？", a: "Muy bien, gracias. ¿Y tú?" },
    { q: "翻译：怎么样？", a: "¿Qué tal?" }
  ],
  task: "把讲解里三行对话自己扮演两个角色录一遍；再对着镜子说三句不同时段的问候。"
},

w2d3: {
  title: "谢谢、请、对不起、再见",
  goal: "学完能完成一次最简单的礼貌交流：请、谢谢、不客气、再见。",
  recap: [
    { q: "上一课：día 是阳性还是阴性？", a: "阳性，所以是 buenos días" },
    { q: "上一课：「很好，谢谢」怎么说？", a: "Muy bien, gracias." },
    { q: "上一课：「你呢」怎么说？", a: "¿Y tú?" }
  ],
  steps: [
    { explain: [
        { p: "**por favor**（请）：por = 为了，favor = 帮忙，字面「为了帮忙」，放在请求的末尾。**gracias**（谢谢）昨天学了；回答用 **de nada**（不客气）：de = 的，nada = 没什么，字面「没什么的」。" },
        { p: "**perdón**（对不起）一个词管三件事：道歉、借过、打断别人说话。" },
        { table: { head: ["西语", "意思", "构成"], rows: [["por favor", "请", "por 为了 + favor 帮忙"], ["gracias", "谢谢", "「恩惠」的复数"], ["de nada", "不客气", "de 的 + nada 没什么"], ["perdón", "对不起；借过", "一个词"]] } }
      ],
      check: [
        { q: "选择：别人说 gracias，你回答", opts: ["De nada", "Por favor", "Perdón"], a: "De nada" },
        { q: "por favor 的字面意思是？", a: "为了帮忙（por 为了，favor 帮忙）" }
      ]
    },
    { explain: [
        { p: "告别：**adiós**（再见，来自 a Dios「交给上帝」）比较正式或长时间不见时用；日常更常说 **hasta luego**（回头见）：hasta = 直到，luego = 稍后。把 luego 换成 mañana 就是 **hasta mañana**（明天见）。" },
        { p: "初次认识说 **mucho gusto**（很高兴认识你）：mucho（很多）+ gusto（愉快）。对方回 **igualmente**（同样地）。" },
        { table: { head: ["西语", "意思", "构成"], rows: [["adiós", "再见", "a Dios"], ["hasta luego", "回头见", "hasta 直到 + luego 稍后"], ["hasta mañana", "明天见", "hasta 直到 + mañana 明天"], ["mucho gusto", "很高兴认识你", "mucho 很多 + gusto 愉快"], ["igualmente", "我也是", "「同样地」"]] } }
      ],
      check: [
        { q: "选择：hasta 的意思是", opts: ["直到", "再见", "谢谢"], a: "直到" },
        { q: "选择：别人说 mucho gusto，你回答", opts: ["Igualmente", "De nada", "Adiós"], a: "Igualmente" }
      ]
    }
  ],
  examples: [
    ["Café, por favor.", "请给我咖啡。", "café（咖啡）+ por favor（请）。最简单的点单：东西 + 请。"],
    ["Gracias. — De nada.", "谢谢。——不客气。", "gracias（谢谢）；de（的）+ nada（没什么）→ 不客气。"],
    ["Perdón, señor.", "对不起，先生。", "perdón（对不起）+ señor（先生）。"],
    ["Adiós, hasta mañana.", "再见，明天见。", "adiós（再见）+ hasta（直到）+ mañana（明天）。"],
    ["Mucho gusto. — Igualmente.", "很高兴认识你。——我也是。", "mucho（很多）+ gusto（愉快）；igualmente（同样地）。"],
    ["Hasta luego, papá.", "回头见，爸爸。", "hasta（直到）+ luego（稍后）+ papá。"]
  ],
  vocab: [
    ["por favor", "请", "por 为了 + favor 帮忙"],
    ["de nada", "不客气", "de 的 + nada 没什么"],
    ["perdón", "对不起；借过", "[per-DÓN]"],
    ["adiós", "再见", "[a-DIÓS]"],
    ["hasta luego", "回头见", "hasta 直到 + luego 稍后"],
    ["hasta mañana", "明天见", ""],
    ["mucho gusto", "很高兴认识你", "mucho 很多 + gusto 愉快"],
    ["igualmente", "我也是；同样", "[i-gual-MEN-te]"]
  ],
  exercises: [
    { q: "翻译：请。", a: "Por favor." },
    { q: "翻译：不客气。", a: "De nada." },
    { q: "选择：「明天见」是", opts: ["Hasta mañana", "Hasta luego", "Adiós"], a: "Hasta mañana" },
    { q: "hasta luego 逐词是什么意思？", a: "hasta 直到 + luego 稍后 → 回头见" },
    { q: "翻译：很高兴认识你。——我也是。", a: "Mucho gusto. — Igualmente." },
    { q: "翻译：对不起。", a: "Perdón." }
  ],
  task: "模拟一次完整的简短交流并录音：问候 → 请给我咖啡 → 谢谢 → 不客气 → 回头见。"
},

w2d4: {
  title: "数字 0 到 10",
  goal: "学完能数到 10，能说「两杯咖啡，请」。",
  recap: [
    { q: "上一课：「不客气」怎么说？", a: "De nada." },
    { q: "上一课：hasta 的意思？", a: "直到" },
    { q: "上一课：「很高兴认识你」？", a: "Mucho gusto." }
  ],
  steps: [
    { explain: [
        { p: "0 到 10 是 11 个必须背熟的词，之后所有数字都靠它们组合。今天只做一件事：读准、记住。" },
        { table: { head: ["数字", "西语", "读音", "数字", "西语", "读音"], rows: [["0", "cero", "ΘE-ro / SE-ro", "6", "seis", "SEIS"], ["1", "uno", "U-no", "7", "siete", "SIE-te"], ["2", "dos", "DOS", "8", "ocho", "O-cho"], ["3", "tres", "TRES", "9", "nueve", "NUE-be"], ["4", "cuatro", "CUA-tro", "10", "diez", "DIEΘ / DIES"], ["5", "cinco", "ΘIN-co / SIN-co", "", "", ""]] } },
        { tip: "cero、cinco、diez 里的 c 和 z 都在 e、i 前，读 θ 或 s。nueve 的 v 读 b。" }
      ],
      check: [
        { q: "选择：5 是", opts: ["cinco", "seis", "siete"], a: "cinco" },
        { q: "选择：nueve 是", opts: ["9", "6", "4"], a: "9" }
      ]
    },
    { explain: [
        { p: "数字直接放在名词前面：**dos cafés**（两杯咖啡）。名词后面的 -s 是复数，第 5 周系统学，今天只需要知道「数字 + 名词 + s」。**uno** 在阳性名词前缩成 **un**：un café（一杯咖啡）。" },
        { table: { head: ["说法", "意思"], rows: [["un café", "一杯咖啡"], ["dos cafés", "两杯咖啡"], ["tres cafés, por favor", "请来三杯咖啡"]] } }
      ],
      check: [
        { q: "填空：___ cafés, por favor.（两杯）", a: "Dos" },
        { q: "选择：「一杯咖啡」是", opts: ["un café", "uno café"], a: "un café" }
      ]
    }
  ],
  examples: [
    ["Cero, uno, dos, tres, cuatro.", "零、一、二、三、四。", "数数时用 uno；放在名词前才变 un。cero 的 c 在 e 前读 θ / s。"],
    ["Dos cafés, por favor.", "请来两杯咖啡。", "dos（二）+ cafés（咖啡，加 -s 表示复数）+ por favor（请）。"],
    ["Un café y un tomate.", "一杯咖啡和一个番茄。", "un（一，uno 在名词前缩短）+ café + y（和）+ un tomate。"],
    ["¿Cuántos? — Cinco.", "多少？——五。", "cuántos（多少，固定问法）；cinco（五）。"],
    ["Diez, nueve, ocho, siete, seis.", "十、九、八、七、六。", "倒着数一遍，练读音。"]
  ],
  vocab: [
    ["cero", "0", "[ΘE-ro / SE-ro]"],
    ["uno / un", "1", "名词前用 un"],
    ["dos", "2", ""],
    ["tres", "3", ""],
    ["cuatro", "4", "[CUA-tro]"],
    ["cinco", "5", "[ΘIN-co / SIN-co]"],
    ["seis", "6", ""],
    ["siete", "7", "[SIE-te]"],
    ["ocho", "8", "[O-cho]"],
    ["nueve", "9", "[NUE-be]"],
    ["diez", "10", "[DIEΘ / DIES]"],
    ["¿Cuántos?", "多少？", "固定问法，第 7 周细讲"],
    ["y", "和", "读 i"]
  ],
  exercises: [
    { q: "用西语写：7", a: "siete" },
    { q: "用西语写：4", a: "cuatro" },
    { q: "选择：ocho 是", opts: ["8", "7", "9"], a: "8" },
    { q: "翻译：请来三杯咖啡。", a: "Tres cafés, por favor." },
    { q: "翻译：一杯咖啡。", a: "Un café." },
    { q: "从 0 数到 10", a: "cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez" }
  ],
  task: "从 0 数到 10 再倒数回来，各录三遍，目标 10 秒内不卡壳；然后说出家里 5 样东西各有几个（用学过的词：dos mesas…）。"
},

w2d5: {
  title: "数字 11 到 20 与第二周复习",
  goal: "学完能数到 20，能问「多少钱」并听懂答案。",
  recap: [
    { q: "上一课：5 和 9 怎么说？", a: "cinco, nueve" },
    { q: "上一课：「两杯咖啡」？", a: "dos cafés" },
    { q: "上一课：uno 在名词前变成？", a: "un" }
  ],
  steps: [
    { explain: [
        { p: "11 到 15 是五个独立的词，16 到 19 是「diez + y + 个位」合写成一个词（dieciséis = diez y seis）。20 是 veinte。" },
        { table: { head: ["数字", "西语", "数字", "西语"], rows: [["11", "once", "16", "dieciséis"], ["12", "doce", "17", "diecisiete"], ["13", "trece", "18", "dieciocho"], ["14", "catorce", "19", "diecinueve"], ["15", "quince", "20", "veinte"]] } },
        { tip: "dieciséis 有重音符号，因为按规则一本该读 die-ci-SEIS 之前的音节，符号把它固定在 SÉIS。" }
      ],
      check: [
        { q: "选择：15 是", opts: ["quince", "catorce", "doce"], a: "quince" },
        { q: "选择：dieciocho 是", opts: ["18", "17", "19"], a: "18" }
      ]
    },
    { explain: [
        { p: "问价钱用固定句 **¿Cuánto es?**（多少钱？）：cuánto = 多少，es = 是。回答只说数字：Quince（十五）。钱的单位 euro（欧元）放数字后：quince euros。" },
        { table: { head: ["说话人", "内容"], rows: [["你", "Dos cafés, por favor."], ["服务员", "Cuatro euros."], ["你", "Gracias. Hasta luego."]] } }
      ],
      check: [
        { q: "翻译：多少钱？", a: "¿Cuánto es?" },
        { q: "填空：Doce ___.（十二欧元）", a: "euros" }
      ]
    },
    { explain: [
        { p: "第二周结束。你现在会：全部发音、字母表、四句问候、六句礼貌用语、0 到 20。周六把这两周的词表连读一遍，周日做周测。下周开始说「我是谁」。" }
      ],
      check: [
        { q: "选择：见面第二句「怎么样」是", opts: ["¿Qué tal?", "¿Cuánto es?", "¿Cómo se escribe?"], a: "¿Qué tal?" },
        { q: "翻译：请来一杯咖啡。谢谢。", a: "Un café, por favor. Gracias." }
      ]
    }
  ],
  examples: [
    ["once, doce, trece, catorce, quince.", "十一到十五。", "五个独立的词，都以元音或 e 结尾，重音在倒数第二音节。"],
    ["dieciséis, diecisiete, dieciocho, diecinueve, veinte.", "十六到二十。", "diez + y + 个位合写；veinte 单独一个词。"],
    ["¿Cuánto es? — Quince euros.", "多少钱？——十五欧元。", "cuánto（多少）+ es（是）；quince（15）+ euros（欧元，复数）。"],
    ["Tres cafés, por favor. — Seis euros.", "请来三杯咖啡。——六欧元。", "tres cafés（三杯咖啡）；seis（六）+ euros。"],
    ["Gracias, señora. Hasta mañana.", "谢谢，女士。明天见。", "gracias + señora + hasta mañana。"]
  ],
  vocab: [
    ["once", "11", "[ON-ce]"],
    ["doce", "12", ""],
    ["trece", "13", ""],
    ["catorce", "14", "[ca-TOR-ce]"],
    ["quince", "15", "[KIN-ce]，qu 读 k"],
    ["dieciséis", "16", "diez y seis 合写"],
    ["diecisiete", "17", ""],
    ["dieciocho", "18", ""],
    ["diecinueve", "19", ""],
    ["veinte", "20", "[BEIN-te]"],
    ["¿Cuánto es?", "多少钱？", "cuánto 多少 + es 是"],
    ["euro", "欧元", "复数 euros"]
  ],
  exercises: [
    { q: "用西语写：13", a: "trece" },
    { q: "用西语写：17", a: "diecisiete" },
    { q: "选择：veinte 是", opts: ["20", "12", "15"], a: "20" },
    { q: "翻译：多少钱？——十欧元。", a: "¿Cuánto es? — Diez euros." },
    { q: "翻译：早上好。请来两杯咖啡。", a: "Buenos días. Dos cafés, por favor." },
    { q: "从 11 数到 20", a: "once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte" }
  ],
  task: "模拟买咖啡：问候、点两杯、问多少钱、自己报一个 1–20 的价钱、道谢告别，录音。"
},

/* ═══════════ 第 3 周 · 我是谁 I ═══════════ */

w3d1: {
  title: "我是……：soy",
  goal: "学完能说「我是 Ana」和「我叫 Ana」，并知道 me llamo 是怎么来的。",
  recap: [
    { q: "上一课：15 怎么说？", a: "quince" },
    { q: "上一课：「多少钱」怎么问？", a: "¿Cuánto es?" },
    { q: "第 1 周：「我」怎么说？", a: "yo" }
  ],
  steps: [
    { explain: [
        { p: "西语的「是」叫 **ser**。它会随着「谁」改变形状：「我是」是 **soy**。所以「我是 Ana」就是 **Soy Ana**。" },
        { p: "你可能想问：那「我」（yo）去哪了？可以说 Yo soy Ana，但 soy 这个形状**已经说明了是「我」**，所以 yo 通常省略。只有强调「是我，不是别人」时才加上。这是西语和中文最大的区别之一：动词自己带着主语的信息。" },
        { table: { head: ["中文", "西语", "说明"], rows: [["我是 Ana", "Soy Ana.", "soy 自带「我」"], ["（强调）我是 Ana", "Yo soy Ana.", "加 yo 强调"], ["我是 Li Wei", "Soy Li Wei.", ""]] } }
      ],
      check: [
        { q: "填空：___ Ana.（我是 Ana）", a: "Soy" },
        { q: "选择：Soy Ana 里为什么没有 yo？", opts: ["soy 已经表示「我」", "yo 不能和 soy 一起用", "忘了写"], a: "soy 已经表示「我」" }
      ]
    },
    { explain: [
        { p: "更常见的自我介绍是 **Me llamo Ana**（我叫 Ana）。它是这样来的：动词 **llamar** 意思是「叫、称呼」；llamo 是它的「我」形状（把结尾 -ar 换成 -o，这套规则第 8 周系统学）；前面的 **me** 是「我自己」。所以 me llamo Ana 字面是「我把自己叫作 Ana」。" },
        { table: { head: ["部分", "意思"], rows: [["me", "我自己"], ["llamo", "叫（llamar 的「我」形状）"], ["Ana", "名字"], ["me llamo Ana", "我把自己叫作 Ana = 我叫 Ana"]] } },
        { tip: "Soy Ana 和 Me llamo Ana 都对。Me llamo 更像「我叫」，Soy 更像「我是」。初次见面两句都常用。" }
      ],
      check: [
        { q: "选择：me llamo 里的 llamo 来自哪个动词？", opts: ["llamar（叫）", "ser（是）", "llamo 本身是动词"], a: "llamar（叫）" },
        { q: "选择：me 的意思是", opts: ["我自己", "我的", "是"], a: "我自己" }
      ]
    },
    { explain: [
        { p: "自我介绍时前后各加一句：开头 **Hola**，结尾 **Mucho gusto**（很高兴认识你）或 **Encantado**（男性说）/ **Encantada**（女性说），意思一样。问对方「你呢」用第 2 周学的 **¿Y tú?**。" },
        { table: { head: ["说话人", "内容"], rows: [["Ana", "Hola, me llamo Ana. ¿Y tú?"], ["Wei", "Soy Wei. Mucho gusto."], ["Ana", "Encantada."]] } }
      ],
      check: [
        { q: "选择：女性说「很高兴认识你」用", opts: ["Encantada", "Encantado"], a: "Encantada" },
        { q: "翻译：你好，我叫 Wei。你呢？", a: "Hola, me llamo Wei. ¿Y tú?" }
      ]
    }
  ],
  examples: [
    ["Soy Ana.", "我是 Ana。", "soy（我是，ser 的「我」形状）+ Ana。主语「我」省略。"],
    ["Yo soy Li Wei.", "我是李伟。（强调）", "yo（我）+ soy（我是）。加 yo 是强调，日常可省。"],
    ["Me llamo Ana.", "我叫 Ana。", "me（我自己）+ llamo（叫，来自 llamar）→ 我把自己叫作 Ana。"],
    ["Hola, me llamo Wei. ¿Y tú?", "你好，我叫 Wei。你呢？", "hola + me llamo Wei + y（和）+ tú（你）→ 你呢。"],
    ["Soy Pedro. Mucho gusto.", "我是 Pedro。很高兴认识你。", "soy Pedro + mucho gusto（很多愉快）。"],
    ["Encantada, señor.", "很高兴认识您，先生。（女性说）", "encantada（女性形式）+ señor。"]
  ],
  vocab: [
    ["ser", "是（原形）", "会变形状：我是 = soy"],
    ["soy", "我是", "[SOY]，自带「我」"],
    ["llamar", "叫；称呼（原形）", "[ya-MAR]"],
    ["me llamo", "我叫", "me 我自己 + llamo 叫"],
    ["tú", "你", "[TÚ]，有符号"],
    ["encantado/a", "很高兴认识你", "男 -o / 女 -a"]
  ],
  exercises: [
    { q: "填空：___ Wei.（我是）", a: "Soy" },
    { q: "填空：Me ___ Ana.（我叫）", a: "llamo" },
    { q: "选择：「我把自己叫作」是哪句的字面意思？", opts: ["Me llamo", "Soy", "Mucho gusto"], a: "Me llamo" },
    { q: "yo 在 Soy Ana 里为什么可以省略？", a: "soy 的形状已经说明主语是「我」" },
    { q: "翻译：我叫 Li Wei。很高兴认识你。", a: "Me llamo Li Wei. Mucho gusto." },
    { q: "翻译：你好，我是 Ana。你呢？", a: "Hola, soy Ana. ¿Y tú?" }
  ],
  task: "录一段 15 秒自我介绍：Hola, me llamo … / Soy … / Mucho gusto。用两种说法各录一遍。"
},

w3d2: {
  title: "你是……：eres",
  goal: "学完能问「你是谁」「你叫什么」，并回答。",
  recap: [
    { q: "上一课：「我是」怎么说？", a: "soy" },
    { q: "上一课：me llamo 里的 llamo 来自哪个动词？", a: "llamar（叫）" },
    { q: "上一课：女性说「很高兴认识你」？", a: "Encantada" }
  ],
  steps: [
    { explain: [
        { p: "昨天 ser 的「我」形状是 soy，今天学「你」的形状：**eres**。「你是 Ana」= Eres Ana。和 soy 一样，eres 自带「你」，tú 通常省略。" },
        { p: "问「你是谁」用 **¿Quién eres?**：quién = 谁。问句前后各一个问号。" },
        { table: { head: ["中文", "西语"], rows: [["你是 Ana", "Eres Ana."], ["你是谁？", "¿Quién eres?"], ["你是 Ana 吗？", "¿Eres Ana?（语调上扬）"], ["是的，我是 Ana", "Sí, soy Ana."], ["不，我是 Marta", "No, soy Marta."]] } }
      ],
      check: [
        { q: "填空：¿Quién ___?（你是谁？）", a: "eres" },
        { q: "选择：「你是 Ana 吗」是", opts: ["¿Eres Ana?", "¿Soy Ana?", "¿Es Ana?"], a: "¿Eres Ana?" }
      ]
    },
    { explain: [
        { p: "me llamo 的「你」版本是 **te llamas**：me → te（你自己），llamo → llamas（llamar 的「你」形状，结尾 -as）。问「你叫什么」= **¿Cómo te llamas?**：cómo（怎么）+ te llamas（你叫）→ 你把自己叫作什么。" },
        { table: { head: ["人称", "自己", "llamar 的形状", "整句"], rows: [["我", "me", "llamo", "Me llamo Ana."], ["你", "te", "llamas", "¿Cómo te llamas?"]] } },
        { tip: "记住这一对：我 → me … -o，你 → te … -as。第 8 周学动词变形时你会发现 -o / -as 就是「我 / 你」的通用结尾。" }
      ],
      check: [
        { q: "填空：¿Cómo ___ llamas?（你叫什么？）", a: "te" },
        { q: "选择：llamas 是 llamar 的哪个形状？", opts: ["你", "我", "他"], a: "你" }
      ]
    }
  ],
  examples: [
    ["¿Quién eres? — Soy Ana.", "你是谁？——我是 Ana。", "quién（谁）+ eres（你是）；soy（我是）+ Ana。"],
    ["¿Eres Marta? — No, soy Ana.", "你是 Marta 吗？——不，我是 Ana。", "eres（你是）+ Marta，语调上扬成问句；no + soy Ana。"],
    ["¿Cómo te llamas? — Me llamo Wei.", "你叫什么？——我叫 Wei。", "cómo（怎么）+ te（你自己）+ llamas（叫，你的形状）；me llamo Wei。"],
    ["Eres Pedro, ¿sí o no?", "你是 Pedro，是不是？", "eres Pedro + sí o no（是还是不是）。"],
    ["Hola, ¿cómo te llamas? — Ana. ¿Y tú?", "你好，你叫什么？——Ana。你呢？", "问名字可以只答名字；¿y tú? 反问。"]
  ],
  vocab: [
    ["eres", "你是", "[E-res]，ser 的「你」形状"],
    ["quién", "谁", "[KIÉN]，问句里有符号"],
    ["te llamas", "你叫", "te 你自己 + llamas"],
    ["¿Cómo te llamas?", "你叫什么名字？", "cómo 怎么 + te llamas"],
    ["cómo", "怎么；如何", "[CÓ-mo]"]
  ],
  exercises: [
    { q: "填空：___ Ana.（你是 Ana）", a: "Eres" },
    { q: "填空：¿Cómo te ___?（你叫什么？）", a: "llamas" },
    { q: "选择：quién 的意思是", opts: ["谁", "怎么", "多少"], a: "谁" },
    { q: "翻译：你是谁？", a: "¿Quién eres?" },
    { q: "翻译：你叫什么？——我叫 Ana。", a: "¿Cómo te llamas? — Me llamo Ana." },
    { q: "翻译：你是 Wei 吗？——是的，我是 Wei。", a: "¿Eres Wei? — Sí, soy Wei." }
  ],
  task: "自问自答录音：¿Quién eres? / ¿Cómo te llamas? / ¿Eres …? 各问一次并回答。"
},

w3d3: {
  title: "我来自……：soy de",
  goal: "学完能说自己来自哪里，能问对方来自哪里。",
  recap: [
    { q: "上一课：「你是」怎么说？", a: "eres" },
    { q: "上一课：「你叫什么」？", a: "¿Cómo te llamas?" },
    { q: "上一课：quién 的意思？", a: "谁" }
  ],
  steps: [
    { explain: [
        { p: "说来自哪里，在 soy 后面加 **de**（来自、……的）+ 地名：**Soy de China**（我来自中国）。地名首字母大写。城市也一样：Soy de Pekín。" },
        { table: { head: ["国家", "西语", "读音"], rows: [["中国", "China", "CHI-na"], ["西班牙", "España", "es-PA-nya"], ["墨西哥", "México", "MÉ-ji-co，x 读 j"], ["阿根廷", "Argentina", "ar-jen-TI-na"], ["美国", "Estados Unidos", "es-TA-dos u-NI-dos"], ["日本", "Japón", "ja-PÓN"], ["韩国", "Corea", "co-RE-a"], ["法国", "Francia", "FRAN-cia"]] } }
      ],
      check: [
        { q: "填空：Soy ___ China.（我来自中国）", a: "de" },
        { q: "选择：México 的 x 读作", opts: ["j", "ks", "s"], a: "j" }
      ]
    },
    { explain: [
        { p: "问对方来自哪里：**¿De dónde eres?** 逐词是 de（从）+ dónde（哪里）+ eres（你是）→ 你从哪里来。注意 de 放在最前面，不能放句尾。" },
        { table: { head: ["说话人", "内容"], rows: [["Ana", "¿De dónde eres?"], ["Wei", "Soy de China, de Pekín. ¿Y tú?"], ["Ana", "Soy de España, de Madrid."]] } },
        { tip: "先说国家再说城市，中间用逗号和第二个 de：Soy de China, de Pekín。" }
      ],
      check: [
        { q: "翻译：你来自哪里？", a: "¿De dónde eres?" },
        { q: "选择：dónde 的意思是", opts: ["哪里", "谁", "怎么"], a: "哪里" }
      ]
    }
  ],
  examples: [
    ["Soy de China.", "我来自中国。", "soy（我是）+ de（来自）+ China（中国）。"],
    ["¿De dónde eres? — Soy de Pekín.", "你来自哪里？——我来自北京。", "de（从）+ dónde（哪里）+ eres（你是）；soy de Pekín。"],
    ["Soy de España, de Madrid.", "我来自西班牙，马德里。", "国家在前，城市在后，各带一个 de。"],
    ["¿Eres de México? — No, soy de Argentina.", "你来自墨西哥吗？——不，我来自阿根廷。", "eres de（你来自）+ México，语调上扬；no + soy de Argentina。"],
    ["Me llamo Yuki. Soy de Japón. Mucho gusto.", "我叫 Yuki。我来自日本。很高兴认识你。", "三句连起来就是一段自我介绍。"],
    ["¿Eres de Estados Unidos? — No, soy de Corea. ¿Y tú? — Soy de Francia.", "你来自美国吗？——不，我来自韩国。你呢？——我来自法国。", "eres de + 国家；no + soy de；¿y tú? 反问。"]
  ],
  vocab: [
    ["de", "来自；……的", "[DE]"],
    ["dónde", "哪里", "[DÓN-de]，问句有符号"],
    ["¿De dónde eres?", "你来自哪里？", "de 从 + dónde 哪里 + eres 你是"],
    ["China", "中国", "[CHI-na]"],
    ["España", "西班牙", "[es-PA-nya]"],
    ["México", "墨西哥", "x 读 j"],
    ["Argentina", "阿根廷", ""],
    ["Estados Unidos", "美国", "字面「联合的州」"],
    ["Japón", "日本", "[ja-PÓN]"],
    ["Corea", "韩国", ""],
    ["Francia", "法国", "[FRAN-cia]"]
  ],
  exercises: [
    { q: "填空：¿De ___ eres?（你来自哪里？）", a: "dónde" },
    { q: "翻译：我来自西班牙。", a: "Soy de España." },
    { q: "翻译：你来自日本吗？", a: "¿Eres de Japón?" },
    { q: "选择：「我来自中国，上海」", opts: ["Soy de China, de Shanghái.", "Soy China, Shanghái.", "De China soy Shanghái."], a: "Soy de China, de Shanghái." },
    { q: "选择：de 在 ¿De dónde eres? 里的位置", opts: ["句首", "句尾", "eres 后面"], a: "句首" },
    { q: "翻译：我叫 Ana，我来自墨西哥。", a: "Me llamo Ana, soy de México." }
  ],
  task: "录一段 20 秒自我介绍：名字 + 国家 + 城市 + mucho gusto；再问一遍 ¿De dónde eres?"
},

w3d4: {
  title: "我是中国人：国籍（阳性）",
  goal: "学完男性能说自己的国籍，能说「你是西班牙人吗」。",
  recap: [
    { q: "上一课：「我来自中国」？", a: "Soy de China." },
    { q: "上一课：「你来自哪里」？", a: "¿De dónde eres?" },
    { q: "上一课：México 的 x 读？", a: "j" }
  ],
  steps: [
    { explain: [
        { p: "除了「来自中国」，还可以直接说「我是中国人」：**Soy chino**。国籍词从国家名变来，**小写**（国家名才大写）。今天先学男性说的形式（阳性），明天学女性的。" },
        { table: { head: ["国家", "国籍（阳性）", "变法"], rows: [["China", "chino", "去 -a 加 -o"], ["México", "mexicano", "加 -ano"], ["Argentina", "argentino", "去 -a 加 -o"], ["Corea", "coreano", "加 -no"], ["España", "español", "以辅音 l 结尾"], ["Japón", "japonés", "以 -és 结尾"], ["Francia", "francés", "以 -és 结尾"], ["Estados Unidos", "estadounidense", "以 -e 结尾"]] } },
        { tip: "国籍词同时也是语言名：chino = 中文，español = 西班牙语，japonés = 日语。" }
      ],
      check: [
        { q: "选择：「我是中国人」（男）", opts: ["Soy chino.", "Soy China.", "Soy de chino."], a: "Soy chino." },
        { q: "选择：国籍词的首字母", opts: ["小写", "大写"], a: "小写" }
      ]
    },
    { explain: [
        { p: "问对方（男性）：**¿Eres español?**（你是西班牙人吗？）语调上扬即可。回答 Sí, soy español 或 No, soy mexicano。" },
        { table: { head: ["说话人", "内容"], rows: [["Ana", "¿Eres japonés?"], ["Wei", "No, soy chino. ¿Y tú?"], ["Ana", "Soy de España."]] } }
      ],
      check: [
        { q: "翻译：你是墨西哥人吗？（问男性）", a: "¿Eres mexicano?" },
        { q: "填空：No, soy ___.（不，我是韩国人，男）", a: "coreano" }
      ]
    }
  ],
  examples: [
    ["Soy chino.", "我是中国人。（男）", "soy（我是）+ chino（中国人，阳性）。"],
    ["¿Eres español? — No, soy argentino.", "你是西班牙人吗？——不，我是阿根廷人。", "eres（你是）+ español；no + soy argentino。"],
    ["Soy japonés, de Tokio.", "我是日本人，来自东京。", "soy japonés（日本人）+ de Tokio（来自东京）。"],
    ["¿Eres mexicano? — No, me llamo Tom, soy estadounidense.", "你是墨西哥人吗？——不，我叫 Tom，我是美国人。", "eres mexicano（你是墨西哥人）；estadounidense 男女同形。"],
    ["¿Eres francés o coreano? — Coreano.", "你是法国人还是韩国人？——韩国人。", "o（还是）连接两个选项；回答可只说国籍。"]
  ],
  vocab: [
    ["chino", "中国人；中国的；中文", "阳性"],
    ["español", "西班牙人；西班牙语", "[es-pa-NYOL]"],
    ["mexicano", "墨西哥人", "x 读 j"],
    ["argentino", "阿根廷人", ""],
    ["coreano", "韩国人", ""],
    ["japonés", "日本人；日语", "[ja-po-NÉS]"],
    ["francés", "法国人；法语", "[fran-ΘÉS / fran-SÉS]"],
    ["estadounidense", "美国人", "男女同形"]
  ],
  exercises: [
    { q: "翻译：我是西班牙人。（男）", a: "Soy español." },
    { q: "翻译：你是日本人吗？（问男性）", a: "¿Eres japonés?" },
    { q: "选择：México → 国籍", opts: ["mexicano", "méxico", "mexicés"], a: "mexicano" },
    { q: "选择：Francia → 国籍", opts: ["francés", "francio", "franciano"], a: "francés" },
    { q: "chino 除了「中国人」还有什么意思？", a: "中文（语言）；中国的" },
    { q: "翻译：不，我是韩国人。", a: "No, soy coreano." }
  ],
  task: "说 6 句「X 是 Y 国人」的自我介绍句（换 6 个国籍），录音；女性学习者明天再录阴性版。"
},

w3d5: {
  title: "国籍（阴性）与第三周复习",
  goal: "学完女性能说自己的国籍，理解 -o / -a 的性别变化。",
  recap: [
    { q: "上一课：「我是中国人」（男）？", a: "Soy chino." },
    { q: "上一课：España → 国籍？", a: "español" },
    { q: "上一课：国籍词首字母大写吗？", a: "不，小写" }
  ],
  steps: [
    { explain: [
        { p: "西语的形容词要**跟说话对象的性别一致**。女性说「我是中国人」不是 soy chino，而是 **soy china**：结尾 -o 换成 -a。这是西语最基本的规律之一，以后每个形容词都会用到。" },
        { table: { head: ["阳性（男）", "阴性（女）", "规律"], rows: [["chino", "china", "-o → -a"], ["mexicano", "mexicana", "-o → -a"], ["argentino", "argentina", "-o → -a"], ["coreano", "coreana", "-o → -a"], ["español", "española", "辅音结尾 + a"], ["japonés", "japonesa", "+ a，去掉重音符号"], ["francés", "francesa", "+ a，去掉重音符号"], ["estadounidense", "estadounidense", "-e 结尾不变"]] } },
        { tip: "japonés 加了 -a 变成 japonesa 后，重音自然落在 ne（元音结尾，倒数第二音节），所以不再需要符号。" }
      ],
      check: [
        { q: "变阴性：chino →", a: "china" },
        { q: "选择：española 的构成", opts: ["español + a", "españo + la", "españ + ola"], a: "español + a" }
      ]
    },
    { explain: [
        { p: "问女性也要用阴性：**¿Eres china?**。第 1 周的 bueno/a、caro/a、hijo/a、chico/a、encantado/a 都是同一条规律：男或阳性用 -o，女或阴性用 -a。" },
        { table: { head: ["说话人", "内容"], rows: [["Wei", "¿Eres española?"], ["Ana", "Sí, soy española, de Madrid. ¿Y tú?"], ["Wei", "Soy chino, de Pekín. Encantado."], ["Ana", "Encantada."]] } }
      ],
      check: [
        { q: "翻译：你是日本人吗？（问女性）", a: "¿Eres japonesa?" },
        { q: "选择：女性说「很高兴认识你」", opts: ["Encantada", "Encantado"], a: "Encantada" }
      ]
    },
    { explain: [
        { p: "第三周结束。你现在能做完整的自我介绍：Hola, me llamo … / Soy de … / Soy chino(a) / Mucho gusto，并能反问对方。周六录下来，和第 1 周的录音对比。" }
      ],
      check: [
        { q: "翻译：你好，我叫 Ana，我是西班牙人（女），来自马德里。", a: "Hola, me llamo Ana, soy española, de Madrid." },
        { q: "翻译：你来自哪里？你叫什么？", a: "¿De dónde eres? ¿Cómo te llamas?" }
      ]
    }
  ],
  examples: [
    ["Soy china.", "我是中国人。（女）", "soy + china（-o 换 -a）。"],
    ["¿Eres española? — Sí, soy española.", "你是西班牙人吗？（问女性）——是的。", "española = español + a。"],
    ["Me llamo Yuki, soy japonesa.", "我叫 Yuki，我是日本人。（女）", "japonesa = japonés + a，去符号。"],
    ["¿Eres coreana, francesa o argentina? — Argentina.", "你是韩国人、法国人还是阿根廷人？（问女性）——阿根廷人。", "三个阴性国籍用逗号和 o 连接；回答只说国籍。argentina 小写是国籍，Argentina 大写是国家。"],
    ["Hola, soy Marta. Soy mexicana, de Cancún. Encantada.", "你好，我是 Marta。我是墨西哥人，来自坎昆。很高兴认识你。", "一段完整的女性自我介绍。"]
  ],
  vocab: [
    ["china", "中国人（女）", "chino 的阴性"],
    ["española", "西班牙人（女）", "español + a"],
    ["mexicana", "墨西哥人（女）", ""],
    ["japonesa", "日本人（女）", "去掉重音符号"],
    ["coreana", "韩国人（女）", ""],
    ["francesa", "法国人（女）", ""],
    ["argentina", "阿根廷人（女）", "和国家名 Argentina 只差大小写"]
  ],
  exercises: [
    { q: "变阴性：mexicano →", a: "mexicana" },
    { q: "变阴性：francés →", a: "francesa（去掉重音符号）" },
    { q: "选择：estadounidense 的阴性是", opts: ["estadounidense（不变）", "estadounidensa", "estadounidena"], a: "estadounidense（不变）" },
    { q: "翻译：我是韩国人。（女）", a: "Soy coreana." },
    { q: "翻译：你是中国人吗？（问女性）——是的，我来自上海。", a: "¿Eres china? — Sí, soy de Shanghái." },
    { q: "为什么 japonesa 没有重音符号？", a: "加 -a 后以元音结尾，重音自然落在倒数第二音节 ne，不需要符号" }
  ],
  task: "录一段 30 秒的完整自我介绍（名字、国籍、来自哪个城市、很高兴认识你），用你自己的性别形式；再录一遍反问对方的三个问题。"
},

/* ═══════════ 第 4 周 · 我是谁 II ═══════════ */

w4d1: {
  title: "他是、她是：es",
  goal: "学完能介绍第三个人：他是 Juan，她叫 Ana，她是西班牙人。",
  recap: [
    { q: "上一课：chino 的阴性？", a: "china" },
    { q: "上一课：japonés 的阴性？", a: "japonesa" },
    { q: "第 3 周：「我是」「你是」？", a: "soy, eres" }
  ],
  steps: [
    { explain: [
        { p: "ser 的第三个形状：**es**，用于「他是 / 她是 / 它是」。第 2 周的 Mi nombre es Ana 里的 es 就是它。「他」是 **él**（有符号），「她」是 **ella**。介绍别人时通常加上 él / ella 或名字，因为 es 分不出他还是她。" },
        { table: { head: ["中文", "西语"], rows: [["他是 Juan", "Él es Juan."], ["她是 Ana", "Ella es Ana."], ["Ana 是西班牙人", "Ana es española."], ["Juan 来自墨西哥", "Juan es de México."], ["他是谁？", "¿Quién es?"]] } },
        { tip: "él 有符号，el 没符号是另一个词（「这个」，第 5 周学）。" }
      ],
      check: [
        { q: "填空：Ella ___ Ana.（她是 Ana）", a: "es" },
        { q: "选择：「他」是", opts: ["él", "ella", "el"], a: "él" }
      ]
    },
    { explain: [
        { p: "「他叫 / 她叫」是 **se llama**：me → te → se（他自己 / 她自己），llamo → llamas → llama。三个形状放在一起看：" },
        { table: { head: ["人称", "自己", "llamar", "整句"], rows: [["我", "me", "llamo", "Me llamo Ana."], ["你", "te", "llamas", "¿Cómo te llamas?"], ["他 / 她", "se", "llama", "Se llama Juan. / Ella se llama Ana."]] } },
        { p: "问「他 / 她叫什么」：**¿Cómo se llama?**。" }
      ],
      check: [
        { q: "填空：Él ___ llama Pedro.（他叫 Pedro）", a: "se" },
        { q: "翻译：她叫什么？", a: "¿Cómo se llama?" }
      ]
    }
  ],
  examples: [
    ["Él es Juan. Es de España.", "他是 Juan。他来自西班牙。", "él（他）+ es（是）+ Juan；es de（来自）+ España，第二句主语省略。"],
    ["Ella es Ana. Es española.", "她是 Ana。她是西班牙人。", "ella（她）+ es Ana；es española（阴性，因为是她）。"],
    ["¿Quién es? — Es mi papá.", "他是谁？——是我爸爸。", "quién（谁）+ es（是）；es + mi（我的）+ papá。"],
    ["¿Cómo se llama? — Se llama Marta.", "她叫什么？——她叫 Marta。", "cómo + se（她自己）+ llama（叫）；se llama Marta。"],
    ["Mi amigo se llama Pedro. Es mexicano.", "我朋友叫 Pedro。他是墨西哥人。", "mi amigo（我朋友）+ se llama Pedro；es mexicano。"]
  ],
  vocab: [
    ["es", "他是 / 她是 / 它是", "ser 的第三个形状"],
    ["él", "他", "有符号"],
    ["ella", "她", "[E-ya]"],
    ["se llama", "他叫 / 她叫", "se 他自己 + llama"],
    ["¿Cómo se llama?", "他 / 她叫什么？", ""],
    ["amigo/a", "朋友", "第 1 周见过，男 -o 女 -a"]
  ],
  exercises: [
    { q: "填空：Ella ___ de Japón.（她来自日本）", a: "es" },
    { q: "填空：¿Cómo ___ llama?（他叫什么？）", a: "se" },
    { q: "选择：me / te / se 分别对应", opts: ["我 / 你 / 他她", "他 / 你 / 我", "我 / 他 / 你"], a: "我 / 你 / 他她" },
    { q: "翻译：他是 Pedro，他来自墨西哥。", a: "Él es Pedro, es de México." },
    { q: "翻译：她叫 Ana，她是西班牙人。", a: "Ella se llama Ana, es española." },
    { q: "翻译：他是谁？", a: "¿Quién es?" }
  ],
  task: "介绍两个朋友或家人各 3 句（叫什么、来自哪里、是哪国人），录音。"
},

w4d2: {
  title: "我是学生：职业",
  goal: "学完能说自己和别人的职业，知道职业前不加冠词。",
  recap: [
    { q: "上一课：「她是」？", a: "ella es" },
    { q: "上一课：「他叫」？", a: "se llama" },
    { q: "上一课：él 和 el 的区别？", a: "él 有符号是「他」，el 没符号是「这个」（第 5 周学）" }
  ],
  steps: [
    { explain: [
        { p: "说职业和说国籍一样：**soy + 职业**。今天 6 个职业，大部分有男女两个形式，规律和国籍一样：-o / -a，辅音结尾加 -a。" },
        { table: { head: ["职业", "男", "女"], rows: [["学生", "estudiante", "estudiante（同形）"], ["老师", "profesor", "profesora"], ["医生", "médico", "médica"], ["工程师", "ingeniero", "ingeniera"], ["服务员", "camarero", "camarera"], ["记者", "periodista", "periodista（同形）"]] } },
        { tip: "以 -e 或 -ista 结尾的职业男女同形，靠上下文或前面的 él / ella 区分。" }
      ],
      check: [
        { q: "选择：女老师是", opts: ["profesora", "profesor", "profesa"], a: "profesora" },
        { q: "选择：estudiante 的女性形式", opts: ["estudiante（不变）", "estudianta"], a: "estudiante（不变）" }
      ]
    },
    { explain: [
        { p: "一条和英语不同的规则：说职业时**不加「一个」**。英语说 I am a student，西语只说 **Soy estudiante**，不说 Soy un estudiante。问职业：**¿Qué eres?**（你是什么？qué = 什么）。" },
        { table: { head: ["说话人", "内容"], rows: [["Ana", "¿Qué eres?"], ["Wei", "Soy ingeniero. ¿Y tú?"], ["Ana", "Soy profesora."]] } }
      ],
      check: [
        { q: "改错：Soy un estudiante.", a: "Soy estudiante.（职业前不加 un）" },
        { q: "选择：qué 的意思是", opts: ["什么", "谁", "哪里"], a: "什么" }
      ]
    }
  ],
  examples: [
    ["Soy estudiante.", "我是学生。", "soy + estudiante，不加 un。"],
    ["¿Qué eres? — Soy médico.", "你是做什么的？——我是医生。", "qué（什么）+ eres（你是）；soy médico（男医生）。"],
    ["Ella es profesora, de España.", "她是老师，来自西班牙。", "ella es + profesora（女老师）+ de España。"],
    ["Mi papá es ingeniero y mi mamá es médica.", "我爸爸是工程师，我妈妈是医生。", "两个「X es 职业」用 y（和）连接；médica 阴性。"],
    ["Pedro es camarero. Es mexicano.", "Pedro 是服务员。他是墨西哥人。", "es camarero + es mexicano，第二句主语省略。"],
    ["Soy periodista, de Argentina.", "我是记者，来自阿根廷。", "periodista 男女同形。"]
  ],
  vocab: [
    ["estudiante", "学生", "男女同形"],
    ["profesor/a", "老师", "[pro-fe-SOR]"],
    ["médico/a", "医生", "[MÉ-di-co]"],
    ["ingeniero/a", "工程师", "g 在 e 前读 j"],
    ["camarero/a", "服务员", "拉美说 mesero/a"],
    ["periodista", "记者", "-ista 男女同形"],
    ["qué", "什么", "[KÉ]，问句有符号"],
    ["¿Qué eres?", "你是做什么的？", "问职业"]
  ],
  exercises: [
    { q: "翻译：我是老师。（女）", a: "Soy profesora." },
    { q: "翻译：他是医生。", a: "Él es médico." },
    { q: "选择：「我是学生」", opts: ["Soy estudiante.", "Soy un estudiante.", "Soy estudiante un."], a: "Soy estudiante." },
    { q: "翻译：你是做什么的？——我是工程师。", a: "¿Qué eres? — Soy ingeniero." },
    { q: "选择：camarero 的女性形式", opts: ["camarera", "camarero", "camariste"], a: "camarera" },
    { q: "翻译：我妈妈是记者。", a: "Mi mamá es periodista." }
  ],
  task: "说 6 句：自己 + 5 个家人或朋友的职业（用 soy / es），录音。"
},

w4d3: {
  title: "我们是、他们是：somos、son",
  goal: "学完能说「我们是朋友」「他们是学生」。",
  recap: [
    { q: "上一课：「我是学生」怎么说，要不要 un？", a: "Soy estudiante.，不要 un" },
    { q: "上一课：「你是做什么的」？", a: "¿Qué eres?" },
    { q: "上一课：médico 的阴性？", a: "médica" }
  ],
  steps: [
    { explain: [
        { p: "ser 还有两个形状：「我们是」**somos**，「他们是 / 她们是」**son**。「我们」是 **nosotros**（全男或有男有女）/ **nosotras**（全女）；「他们」**ellos**，「她们」**ellas**。和 soy、eres 一样，代词通常省略。" },
        { table: { head: ["人称", "代词", "ser"], rows: [["我", "yo", "soy"], ["你", "tú", "eres"], ["他 / 她", "él / ella", "es"], ["我们", "nosotros / nosotras", "somos"], ["他们 / 她们", "ellos / ellas", "son"]] } }
      ],
      check: [
        { q: "填空：___ amigos.（我们是朋友）", a: "Somos" },
        { q: "填空：Ellos ___ estudiantes.（他们是学生）", a: "son" }
      ]
    },
    { explain: [
        { p: "主语是复数，后面的名词和国籍也要变复数：加 **-s**（元音结尾）或 **-es**（辅音结尾）。有男有女的一群人用阳性复数。" },
        { table: { head: ["单数", "复数", "例句"], rows: [["amigo", "amigos", "Somos amigos."], ["estudiante", "estudiantes", "Son estudiantes."], ["chino", "chinos", "Somos chinos."], ["español", "españoles", "Son españoles."], ["china", "chinas", "Ellas son chinas.（全女）"]] } },
        { tip: "Ana y Juan son españoles：一男一女也用阳性复数 españoles。" }
      ],
      check: [
        { q: "变复数：amigo →", a: "amigos" },
        { q: "选择：Ana y Marta son ___.（都是中国人）", opts: ["chinas", "chinos", "china"], a: "chinas" }
      ]
    }
  ],
  examples: [
    ["Somos amigos.", "我们是朋友。", "somos（我们是）+ amigos（朋友，复数 -s）。"],
    ["Nosotros somos de China. Somos chinos.", "我们来自中国。我们是中国人。", "nosotros（我们）+ somos de + China；第二句省略 nosotros，somos + chinos（复数）。"],
    ["Ellos son estudiantes.", "他们是学生。", "ellos（他们）+ son（是）+ estudiantes（复数）。"],
    ["Ana y Marta son españolas.", "Ana 和 Marta 是西班牙人。", "两个女性 → españolas（español + a + s）。"],
    ["Pedro y yo somos ingenieros.", "Pedro 和我是工程师。", "Pedro y yo（Pedro 和我）= 我们，所以用 somos；ingenieros 复数。"],
    ["¿Son de México? — No, son de Argentina.", "他们来自墨西哥吗？——不，来自阿根廷。", "son de（他们来自）；语调上扬成问句。"]
  ],
  vocab: [
    ["somos", "我们是", "[SO-mos]"],
    ["son", "他们是 / 她们是", "[SON]"],
    ["nosotros/as", "我们", "[no-SO-tros]"],
    ["ellos / ellas", "他们 / 她们", "[E-yos]"],
    ["amigos", "朋友们", "amigo + s"],
    ["estudiantes", "学生们", "estudiante + s"]
  ],
  exercises: [
    { q: "填空：Nosotros ___ estudiantes.", a: "somos" },
    { q: "填空：Ellas ___ profesoras.", a: "son" },
    { q: "变复数：español →", a: "españoles（辅音结尾加 -es）" },
    { q: "翻译：我们是朋友。", a: "Somos amigos." },
    { q: "翻译：他们是医生。", a: "Ellos son médicos." },
    { q: "翻译：Ana 和我来自中国。", a: "Ana y yo somos de China." }
  ],
  task: "说 6 句用 somos 和 son 的话（我们是……，他们是……），录音。"
},

w4d4: {
  title: "您是：usted 与 ser 全表",
  goal: "学完能礼貌地对陌生人说话，并把 ser 的六个形状连成一张表。",
  recap: [
    { q: "上一课：「我们是」「他们是」？", a: "somos, son" },
    { q: "上一课：amigo 的复数？", a: "amigos" },
    { q: "上一课：一男一女「是西班牙人」用哪个形式？", a: "españoles（阳性复数）" }
  ],
  steps: [
    { explain: [
        { p: "对长辈、陌生人、服务场合，「你」要换成礼貌的「您」：**usted**。特别的是，usted 用的是**「他」的形状** es：¿Usted es profesor?（您是老师吗？）。usted 常缩写成 Ud.。「您们」是 **ustedes**，用「他们」的形状 son。" },
        { table: { head: ["中文", "用 tú（熟人）", "用 usted（礼貌）"], rows: [["你是 / 您是老师", "Eres profesor.", "Usted es profesor."], ["你 / 您叫什么？", "¿Cómo te llamas?", "¿Cómo se llama usted?"], ["你 / 您来自哪里？", "¿De dónde eres?", "¿De dónde es usted?"]] } },
        { tip: "usted 的问句通常保留 usted 这个词，否则和「他」分不清。拉美地区不用 vosotros（你们），对一群人一律说 ustedes。" }
      ],
      check: [
        { q: "选择：usted 用哪个 ser 的形状？", opts: ["es（和「他」一样）", "eres", "soy"], a: "es（和「他」一样）" },
        { q: "翻译：您来自哪里？", a: "¿De dónde es usted?" }
      ]
    },
    { explain: [
        { p: "ser 的六个形状现在全齐了。第 6 个是西班牙用的「你们」**vosotros / vosotras** → **sois**，拉美用 ustedes → son 代替。把整张表背下来：" },
        { table: { head: ["人称", "代词", "ser", "例句"], rows: [["我", "yo", "soy", "Soy Ana."], ["你", "tú", "eres", "Eres Juan."], ["他 / 她 / 您", "él / ella / usted", "es", "Es profesor."], ["我们", "nosotros/as", "somos", "Somos amigos."], ["你们（西班牙）", "vosotros/as", "sois", "Sois estudiantes."], ["他们 / 她们 / 您们", "ellos / ellas / ustedes", "son", "Son de China."]] } }
      ],
      check: [
        { q: "填空：Vosotros ___ estudiantes.（你们是学生，西班牙）", a: "sois" },
        { q: "按顺序说出 ser 的六个形状", a: "soy, eres, es, somos, sois, son" }
      ]
    }
  ],
  examples: [
    ["¿Usted es profesor? — Sí, soy profesor.", "您是老师吗？——是的，我是老师。", "usted（您）+ es（用「他」的形状）+ profesor；回答用 soy。"],
    ["¿Cómo se llama usted? — Me llamo Carlos.", "您叫什么？——我叫 Carlos。", "se llama（他叫的形状）+ usted；回答 me llamo。"],
    ["¿De dónde es usted? — Soy de Corea.", "您来自哪里？——我来自韩国。", "de dónde + es usted；soy de Corea。"],
    ["Ustedes son estudiantes, ¿sí o no?", "您们是学生，是不是？", "ustedes（您们）+ son（他们的形状）+ estudiantes。"],
    ["Vosotros sois de España.", "你们来自西班牙。（西班牙用法）", "vosotros（你们）+ sois（ser 的「你们」形状）+ de España。"],
    ["Buenos días, señora. ¿Usted es profesora?", "早上好，女士。您是老师吗？", "señora + usted es + profesora（女老师，不加冠词）。"]
  ],
  vocab: [
    ["usted", "您", "[us-TED]，用「他」的形状"],
    ["ustedes", "您们；你们（拉美）", "用「他们」的形状"],
    ["vosotros/as", "你们（西班牙）", "[bo-SO-tros]"],
    ["sois", "你们是（西班牙）", "[SOIS]"],
    ["¿Cómo se llama usted?", "您叫什么？", "礼貌问名字"],
    ["¿De dónde es usted?", "您来自哪里？", "礼貌问来源"]
  ],
  exercises: [
    { q: "填空：¿Usted ___ médico?（您是医生吗？）", a: "es" },
    { q: "翻译：您叫什么？", a: "¿Cómo se llama usted?" },
    { q: "选择：对服务员或陌生人用", opts: ["usted", "tú", "él"], a: "usted" },
    { q: "选择：拉美对一群人说「你们」用", opts: ["ustedes", "vosotros", "ellos"], a: "ustedes" },
    { q: "写出 ser 的六个形状", a: "soy, eres, es, somos, sois, son" },
    { q: "翻译：您们是来自日本吗？", a: "¿Ustedes son de Japón?" }
  ],
  task: "把 ser 的六个形状各配一句话说出来，录音；再用 usted 问一遍名字和来源。"
},

w4d5: {
  title: "第一阶段复习：完整自我介绍",
  goal: "把四周学的东西串成一段 30 秒的自我介绍和一段问答。",
  recap: [
    { q: "上一课：usted 用 ser 的哪个形状？", a: "es" },
    { q: "上一课：ser 的六个形状？", a: "soy, eres, es, somos, sois, son" },
    { q: "第 3 周：「我叫」的字面意思？", a: "我把自己叫作（me 我自己 + llamo 叫）" }
  ],
  steps: [
    { explain: [
        { p: "四周下来你有了一套完整的自我介绍。把它拆成五句，每句用了哪课的内容：" },
        { table: { head: ["句子", "内容", "来自"], rows: [["Hola, buenos días.", "问候", "W2"], ["Me llamo Wei. / Soy Wei.", "名字", "W3D1"], ["Soy de China, de Pekín.", "来源", "W3D3"], ["Soy chino. Soy ingeniero.", "国籍、职业", "W3D4, W4D2"], ["Mucho gusto. / Encantado.", "结束", "W2D3, W3D1"]] } }
      ],
      check: [
        { q: "翻译：你好。我叫 Ana。我来自西班牙。我是老师（女）。很高兴认识你。", a: "Hola. Me llamo Ana. Soy de España. Soy profesora. Mucho gusto." },
        { q: "翻译：他叫 Pedro，他是墨西哥人，是医生。", a: "Se llama Pedro, es mexicano, es médico." }
      ]
    },
    { explain: [
        { p: "反过来问别人，也是五个问题。tú 和 usted 两套都要会：" },
        { table: { head: ["问什么", "对熟人（tú）", "对陌生人（usted）"], rows: [["名字", "¿Cómo te llamas?", "¿Cómo se llama usted?"], ["来源", "¿De dónde eres?", "¿De dónde es usted?"], ["国籍", "¿Eres chino/a?", "¿Usted es chino/a?"], ["职业", "¿Qué eres?", "¿Qué es usted?"], ["谁", "¿Quién eres?", "¿Quién es usted?"]] } }
      ],
      check: [
        { q: "翻译：您是做什么的？", a: "¿Qué es usted?" },
        { q: "翻译：你是西班牙人吗？（问女性熟人）", a: "¿Eres española?" }
      ]
    },
    { explain: [
        { p: "发音自查：这一段介绍里有 ll（llamo）、ñ（España）、j 音（ingeniero 的 g）、不送气的 p（Pekín）、θ / s（gracias）。录音回听，逐个对照第 1 周的规则。" },
        { p: "周六的任务是把这段介绍录下来，和第 1 周第 1 天的 8 个词录音放在一起听。周日周测。下周开始学「东西和地方」：桌子、房子、在哪里。" }
      ],
      check: [
        { q: "选择：ingeniero 里的 g 读作", opts: ["像 j（在 e 前）", "硬 g"], a: "像 j（在 e 前）" },
        { q: "选择：España 里的 ñ 读作", opts: ["尼呀合一", "n"], a: "尼呀合一" }
      ]
    }
  ],
  examples: [
    ["Hola, buenos días. Me llamo Wei.", "你好，早上好。我叫 Wei。", "hola + buenos días + me llamo Wei。"],
    ["Soy de China, de Pekín. Soy chino.", "我来自中国，北京。我是中国人。", "soy de + 国家 + de + 城市；soy chino。"],
    ["Soy ingeniero. Mucho gusto.", "我是工程师。很高兴认识你。", "soy + 职业（不加 un）+ mucho gusto。"],
    ["¿Y usted? ¿Cómo se llama? ¿De dónde es?", "您呢？您叫什么？您来自哪里？", "y usted（您呢）+ 两个 usted 问句。"],
    ["Ella es Ana. Es española y es profesora.", "她是 Ana。她是西班牙人，是老师。", "ella es + es española + y + es profesora。"],
    ["Ana es de Madrid y Yuki es de Tokio. Yo también soy estudiante.", "Ana 来自马德里，Yuki 来自东京。我也是学生。", "es de + 城市；yo también（我也）+ soy estudiante。"]
  ],
  vocab: [
    ["¿Y usted?", "您呢？", "y 和 + usted 您"],
    ["¿Qué es usted?", "您是做什么的？", "礼貌问职业"],
    ["Pekín", "北京", "[pe-KÍN]"],
    ["Madrid", "马德里", "[ma-DRID]"],
    ["Tokio", "东京", "[TO-kio]"],
    ["también", "也", "[tam-BIÉN]，回应「我也是」"]
  ],
  exercises: [
    { q: "翻译：你好，我叫 Marta，我是墨西哥人（女），来自坎昆（Cancún）。", a: "Hola, me llamo Marta, soy mexicana, de Cancún." },
    { q: "翻译：他是我朋友，叫 Juan，是西班牙人。", a: "Es mi amigo, se llama Juan, es español." },
    { q: "填空：Nosotros ___ de Corea y ellos ___ de Japón.", a: "somos / son" },
    { q: "选择：对陌生人问名字", opts: ["¿Cómo se llama usted?", "¿Cómo te llamas?", "¿Quién eres?"], a: "¿Cómo se llama usted?" },
    { q: "改错：Soy un médico.", a: "Soy médico." },
    { q: "翻译：我也是学生。", a: "Yo también soy estudiante." }
  ],
  task: "录一段 30 秒完整自我介绍（问候、名字、来源、国籍、职业、结束语），再用 usted 问对方三个问题。这段录音周六还要用。"
}

});
