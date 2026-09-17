window.LESSONS = Object.assign(window.LESSONS || {}, {

/* ═══════════ 第 8 周 · 动作 I（规则动词） ═══════════ */

w8d1: {
  title: "我说、你说：hablo / hablas",
  goal: "学完能说「我说中文」「你说西语吗」，并明白 -o / -as 两个结尾是从哪里来的。",
  recap: [
    { q: "上一课：「丈夫」「妻子」怎么说？", a: "el marido / la esposa" },
    { q: "第 7 周：「我有」「你有」？", a: "tengo / tienes" },
    { q: "第 7 周：「我饿了」怎么说？字面意思是什么？", a: "Tengo hambre.（我有饿）" }
  ],
  steps: [
    { explain: [
        { p: "到现在为止你学的动词（ser、estar、tener）都是「一个动词六个形状，逐个背」。好消息是：西语大部分动词其实**很规则**。它们的原形以 **-ar** 结尾，比如 **hablar**（说）、**estudiar**（学习）、**trabajar**（工作）。原形只是词典里的名字，不能直接说「我说」，要先变形状。" },
        { p: "变形状只有一步：**去掉 -ar，加上表示「谁」的结尾**。「我」的结尾是 **-o**：habl + o = **hablo**（我说）。这个 -o 你早就见过——**me llamo** 里的 llamo，就是 llamar 去掉 -ar 加 -o。" },
        { table: { head: ["原形", "去掉 -ar", "加 -o = 我……"], rows: [["hablar 说", "habl-", "hablo 我说"], ["estudiar 学习", "estudi-", "estudio 我学习"], ["trabajar 工作", "trabaj-", "trabajo 我工作"], ["llamar 叫", "llam-", "(me) llamo 我叫"]] } }
      ],
      check: [
        { q: "填空：hablar → 去掉 -ar 加 -o → ___（我说）", a: "hablo" },
        { q: "选择：me llamo 里的 -o 表示", opts: ["我", "你", "他"], a: "我" }
      ]
    },
    { explain: [
        { p: "「你」的结尾是 **-as**：habl + as = **hablas**（你说）。同样，第 3 周的 **te llamas** 里的 llamas 就是 llamar + as。所以「我 = -o，你 = -as」这一对你其实已经用了五周，今天只是把它套到所有 -ar 动词上。" },
        { p: "和 soy / eres 一样，hablo 自带「我」、hablas 自带「你」，yo / tú 通常省略。问句只要把语调抬高：¿Hablas chino?（你说中文吗？）回答：Sí, hablo chino。" },
        { table: { head: ["谁", "结尾", "hablar", "estudiar", "trabajar"], rows: [["yo", "-o", "hablo", "estudio", "trabajo"], ["tú", "-as", "hablas", "estudias", "trabajas"]] } },
        { tip: "trabajar 的 j 读像用力呼出的 h：[tra-ba-HAR]；hablar 的 h 不发音：[a-BLAR]。" }
      ],
      check: [
        { q: "填空：¿___ español?（你说西语吗？）", a: "Hablas" },
        { q: "选择：estudias 的意思是", opts: ["你学习", "我学习", "学习（原形）"], a: "你学习" }
      ]
    },
    { explain: [
        { p: "这些形状既表示「正在做」也表示「经常做」：Estudio español 可以是「我在学西语」，也可以是「我（平时）学西语」。说在哪里工作用第 5 周的 **en**：Trabajo en un banco。问「你在哪里工作」：**¿Dónde trabajas?**，dónde 你在 ¿Dónde está? 里已经用过。" },
        { table: { head: ["中文", "西语"], rows: [["我说中文", "Hablo chino."], ["我学西语", "Estudio español."], ["我在一家银行工作", "Trabajo en un banco."], ["你在哪里工作？", "¿Dónde trabajas?"], ["你上学还是工作？", "¿Estudias o trabajas?"]] } }
      ],
      check: [
        { q: "翻译：我在一家医院工作。", a: "Trabajo en un hospital." },
        { q: "翻译：你在哪里工作？", a: "¿Dónde trabajas?" }
      ]
    }
  ],
  examples: [
    ["Hablo chino y un poco de español.", "我说中文和一点西班牙语。", "hablo（我说，hablar 去 -ar 加 -o）+ chino（中文）+ y（和）+ un poco de（一点）+ español（西班牙语）。"],
    ["¿Hablas inglés? — Sí, hablo inglés.", "你说英语吗？——是的，我说英语。", "hablas（你说，-as）+ inglés（英语），语调上扬成问句；sí + hablo（我说）+ inglés。"],
    ["Estudio español en casa.", "我在家学西语。", "estudio（我学，estudiar 去 -ar 加 -o）+ español + en casa（在家）。"],
    ["¿Estudias o trabajas? — Trabajo en un banco.", "你上学还是工作？——我在一家银行工作。", "estudias（你学，-as）+ o（还是）+ trabajas（你工作，-as）；trabajo（我工作，-o）+ en（在）+ un banco（一家银行）。"],
    ["¿Dónde trabajas? — Trabajo en un hospital, soy médico.", "你在哪里工作？——我在一家医院工作，我是医生。", "dónde（哪里）+ trabajas（你工作）；trabajo en + un hospital（一家医院）+ soy médico（我是医生）。"],
    ["Hoy no trabajo, estudio en casa.", "今天我不工作，在家学习。", "hoy（今天）+ no（不）+ trabajo（我工作）+ estudio（我学习）+ en casa。no 放在动词前面。"]
  ],
  vocab: [
    ["hablar", "说（原形）", "[a-BLAR]，h 不发音；去掉 -ar 再加结尾"],
    ["hablo / hablas", "我说 / 你说", "habl + o / habl + as；其余四个形状下一课"],
    ["estudiar", "学习（原形）", "[es-tu-DIAR]"],
    ["estudio / estudias", "我学习 / 你学习", "estudi + o / as"],
    ["trabajar", "工作（原形）", "[tra-ba-HAR]，j 读用力的 h"],
    ["trabajo / trabajas", "我工作 / 你工作", "trabaj + o / as；trabajo en + 地点"],
    ["¿Dónde trabajas?", "你在哪里工作？", "dónde 哪里 + trabajas 你工作"],
    ["el inglés", "英语", "[in-GLÉS]，和 japonés 一样末尾有符号"]
  ],
  exercises: [
    { q: "填空：Yo ___ chino.（说）", a: "hablo" },
    { q: "填空：¿___ español?（你学）", a: "Estudias" },
    { q: "选择：hablo 的 -o 和哪句里的 -o 是同一个东西？", opts: ["me llamo", "¿Cómo?", "hola"], a: "me llamo" },
    { q: "变形：trabajar → 我工作 / 你工作", a: "trabajo / trabajas" },
    { q: "翻译：你在哪里工作？——我在一家银行工作。", a: "¿Dónde trabajas? — Trabajo en un banco." },
    { q: "翻译：我说中文，学西语。", a: "Hablo chino y estudio español." }
  ],
  task: "用 hablo / estudio / trabajo 各说一句关于自己的真话，再用 hablas / estudias / trabajas 问朋友三个问题，录音。"
},

w8d2: {
  title: "-ar 动词全表",
  goal: "学完能说「她说」「我们说」「他们说」，把 -ar 动词六个形状连成一张表。",
  recap: [
    { q: "上一课：hablar 去掉 -ar 加什么表示「我」？", a: "-o（hablo）" },
    { q: "上一课：「你工作」怎么说？", a: "trabajas" },
    { q: "上一课：「你在哪里工作」？", a: "¿Dónde trabajas?" }
  ],
  steps: [
    { explain: [
        { p: "「他 / 她 / 您」的结尾是 **-a**：habl + a = **habla**（他说）。第 4 周 **se llama** 里的 llama 就是它：llamar + a。和 ser 的 es 一样，usted 和「他」用同一个形状。Mi madre habla chino（我妈妈说中文）。" },
        { table: { head: ["谁", "结尾", "hablar", "你早就会的"], rows: [["yo", "-o", "hablo", "me llamo"], ["tú", "-as", "hablas", "te llamas"], ["él / ella / usted", "-a", "habla", "se llama"]] } }
      ],
      check: [
        { q: "填空：Mi padre ___ en un banco.（工作）", a: "trabaja" },
        { q: "选择：se llama 里的 llama 是 llamar 加了什么结尾？", opts: ["-a", "-o", "-as"], a: "-a" }
      ]
    },
    { explain: [
        { p: "复数三个结尾：「我们」**-amos**，「你们」（西班牙）**-áis**，「他们 / 您们」**-an**：hablamos、habláis、hablan。读音注意：hablamos 重音在 bla，habláis 的 á 带符号，重音在词尾。这样 -ar 动词六个形状就齐了，**所有规则 -ar 动词都套这一张表**。" },
        { table: { head: ["谁", "结尾", "hablar", "trabajar"], rows: [["yo", "-o", "hablo", "trabajo"], ["tú", "-as", "hablas", "trabajas"], ["él / ella / usted", "-a", "habla", "trabaja"], ["nosotros/as", "-amos", "hablamos", "trabajamos"], ["vosotros/as", "-áis", "habláis", "trabajáis"], ["ellos / ellas / ustedes", "-an", "hablan", "trabajan"]] } },
        { tip: "拉美不用 vosotros，对一群人说「你们」用 ustedes + hablan，和 ser 的 son 一样。" }
      ],
      check: [
        { q: "填空：Nosotros ___ español.（说）", a: "hablamos" },
        { q: "按顺序说出 hablar 的六个形状", a: "hablo, hablas, habla, hablamos, habláis, hablan" }
      ]
    },
    { explain: [
        { p: "再加五个常用 -ar 动词，全部照 hablar 的表变：**escuchar**（听）、**mirar**（看）、**comprar**（买）、**cocinar**（做饭）、**tomar**（拿；喝；乘车）。tomar 特别常用：tomar un café = 喝杯咖啡。" },
        { table: { head: ["原形", "意思", "我（-o）", "我们（-amos）", "他们（-an）"], rows: [["escuchar", "听", "escucho", "escuchamos", "escuchan"], ["mirar", "看", "miro", "miramos", "miran"], ["comprar", "买", "compro", "compramos", "compran"], ["cocinar", "做饭", "cocino", "cocinamos", "cocinan"], ["tomar", "拿；喝", "tomo", "tomamos", "toman"]] } }
      ],
      check: [
        { q: "变形：comprar，nosotros →", a: "compramos" },
        { q: "选择：「他们听音乐」", opts: ["Escuchan música.", "Escucha música.", "Escuchamos música."], a: "Escuchan música." }
      ]
    }
  ],
  examples: [
    ["Mi madre habla chino y un poco de inglés.", "我妈妈说中文和一点英语。", "mi madre（我妈妈）+ habla（她说，-a）+ chino + y + un poco de（一点）+ inglés（英语）。"],
    ["Hablamos español en la escuela.", "我们在学校说西语。", "hablamos（我们说，-amos）+ español + en la escuela（在学校）。"],
    ["¿Habláis chino? — Sí, hablamos chino.", "你们说中文吗？——是的，我们说中文。", "habláis（你们说，-áis，西班牙用法）+ chino；sí + hablamos（我们说）+ chino。"],
    ["Mis padres trabajan en un banco y mi hermana estudia en la universidad.", "我父母在一家银行工作，我姐姐在大学读书。", "mis padres（我父母）+ trabajan（他们工作，-an）+ en un banco + y + mi hermana（我姐妹）+ estudia（她学习，-a）+ en la universidad（在大学）。"],
    ["Escuchamos música en casa y miramos la televisión.", "我们在家听音乐、看电视。", "escuchamos（我们听，escuchar + amos）+ música（音乐）+ en casa + y + miramos（我们看，mirar + amos）+ la televisión（电视）。"],
    ["Compro pan en el mercado, mi padre cocina y tomamos café.", "我在市场买面包，我爸爸做饭，我们喝咖啡。", "compro（我买，comprar + o）+ pan（面包）+ en el mercado（在市场）+ mi padre + cocina（他做饭，cocinar + a）+ y + tomamos（我们喝，tomar + amos）+ café。"]
  ],
  vocab: [
    ["habla / hablamos / habláis / hablan", "他说 / 我们说 / 你们说 / 他们说", "habl + a / amos / áis / an；全表 hablo, hablas, habla, hablamos, habláis, hablan"],
    ["trabaja / trabajamos / trabajan", "他工作 / 我们工作 / 他们工作", "trabajar 全表：trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan"],
    ["estudia / estudiamos / estudian", "他学习 / 我们学习 / 他们学习", "estudiar 全表：estudio, estudias, estudia, estudiamos, estudiáis, estudian"],
    ["escuchar / escuchamos", "听（原形）/ 我们听", "escucho, escuchas, escucha, escuchamos, escucháis, escuchan"],
    ["mirar / miramos", "看（原形）/ 我们看", "miro, miras, mira, miramos, miráis, miran"],
    ["comprar / compro", "买（原形）/ 我买", "compro, compras, compra, compramos, compráis, compran"],
    ["cocinar / cocina", "做饭（原形）/ 他做饭", "cocino, cocinas, cocina, cocinamos, cocináis, cocinan；la cocina 是「厨房」"],
    ["tomar / tomamos", "拿；喝；乘车（原形）/ 我们喝", "tomo, tomas, toma, tomamos, tomáis, toman；tomar un café"],
    ["la música", "音乐", "[MÚ-si-ka]"],
    ["la televisión", "电视", "[te-le-bi-SIÓN]，口语 la tele"],
    ["el pan", "面包", "[PAN]"]
  ],
  exercises: [
    { q: "变形：hablar，ellos →", a: "hablan" },
    { q: "填空：Mi hermano ___ en un hospital.（trabajar）", a: "trabaja" },
    { q: "选择：Nosotros ___ música.", opts: ["escuchamos", "escuchan", "escucha"], a: "escuchamos" },
    { q: "变形：tomar，vosotros →", a: "tomáis" },
    { q: "翻译：我妈妈做饭做得很好。", a: "Mi madre cocina muy bien." },
    { q: "翻译：我们在超市买面包。", a: "Compramos pan en el supermercado." }
  ],
  task: "把 hablar 的六个形状各配一句话说出来；再用 escuchar、comprar、tomar 各说一句「我们……」，录音。"
},

w8d3: {
  title: "-er 动词：comer",
  goal: "学完能说「我吃米饭」「我们喝茶」，并知道 -er 动词只是把 -ar 表里的 a 换成 e。",
  recap: [
    { q: "上一课：「他们说」怎么说？", a: "hablan" },
    { q: "上一课：hablar 的六个结尾？", a: "-o, -as, -a, -amos, -áis, -an" },
    { q: "上一课：「我们听音乐」？", a: "Escuchamos música." }
  ],
  steps: [
    { explain: [
        { p: "第二类动词原形以 **-er** 结尾：**comer**（吃）。方法完全一样：去掉 -er，加结尾。「我」仍然是 **-o**：com + o = **como**（我吃）。其余结尾把 -ar 表里的 **a 换成 e**：-es、-e、-emos、-éis、-en。" },
        { table: { head: ["谁", "-ar：hablar", "-er：comer"], rows: [["yo", "habl-o", "com-o"], ["tú", "habl-as", "com-es"], ["él / ella / usted", "habl-a", "com-e"], ["nosotros/as", "habl-amos", "com-emos"], ["vosotros/as", "habl-áis", "com-éis"], ["ellos / ellas / ustedes", "habl-an", "com-en"]] } },
        { tip: "记法：-ar 动词用 a，-er 动词用 e；「我」永远是 -o。" }
      ],
      check: [
        { q: "填空：Yo ___ arroz.（吃）", a: "como" },
        { q: "选择：「你吃」是", opts: ["comes", "comas", "come"], a: "comes" }
      ]
    },
    { explain: [
        { p: "**beber**（喝）、**leer**（读）、**aprender**（学会）都照 comer 的表。leer 去掉 -er 只剩 le-，再加结尾：leo, lees, lee, leemos, leéis, leen——两个 e 连在一起是正常的。aprender 和 estudiar 的区别：estudiar 是「学」这个动作，aprender 是「学会、掌握」。" },
        { table: { head: ["谁", "beber 喝", "leer 读", "aprender 学会"], rows: [["yo", "bebo", "leo", "aprendo"], ["tú", "bebes", "lees", "aprendes"], ["él / ella / usted", "bebe", "lee", "aprende"], ["nosotros/as", "bebemos", "leemos", "aprendemos"], ["vosotros/as", "bebéis", "leéis", "aprendéis"], ["ellos / ellas / ustedes", "beben", "leen", "aprenden"]] } }
      ],
      check: [
        { q: "变形：beber，nosotros →", a: "bebemos" },
        { q: "变形：leer，él →", a: "lee" }
      ]
    },
    { explain: [
        { p: "问「你吃什么」：**¿Qué comes?**（qué 什么 + comes 你吃），回答直接说食物：Como arroz。喝的东西：**el agua**（水）是阴性名词，但单数前面用 el——因为 la agua 两个 a 连读听不清，复数还是 las aguas。**el té**（茶）带符号，用来区别 te（你自己）。" },
        { table: { head: ["中文", "西语"], rows: [["你吃什么？", "¿Qué comes?"], ["我吃米饭", "Como arroz."], ["我喝水", "Bebo agua."], ["我喝茶", "Bebo té."]] } }
      ],
      check: [
        { q: "翻译：你吃什么？", a: "¿Qué comes?" },
        { q: "选择：「水」前面用", opts: ["el agua", "la agua"], a: "el agua" }
      ]
    }
  ],
  examples: [
    ["Como arroz y bebo té.", "我吃米饭，喝茶。", "como（我吃，comer 去 -er 加 -o）+ arroz（米饭）+ y + bebo（我喝，beber + o）+ té（茶）。"],
    ["¿Qué comes? — Como jamón con pan.", "你吃什么？——我吃火腿配面包。", "qué（什么）+ comes（你吃，-es）；como（我吃）+ jamón（火腿）+ con（和）+ pan（面包）。"],
    ["Mi padre lee un libro en el sofá.", "我爸爸在沙发上读书。", "mi padre + lee（他读，leer + e）+ un libro（一本书）+ en el sofá（在沙发上）。"],
    ["Aprendemos español en la universidad.", "我们在大学学西语。", "aprendemos（我们学会，aprender + emos）+ español + en la universidad。"],
    ["Los niños beben agua y comen tomate.", "孩子们喝水、吃番茄。", "los niños（孩子们）+ beben（他们喝，-en）+ agua（水）+ y + comen（他们吃，-en）+ tomate（番茄）。"],
    ["¿Bebéis café? — No, bebemos té.", "你们喝咖啡吗？——不，我们喝茶。", "bebéis（你们喝，-éis）+ café；no + bebemos（我们喝，-emos）+ té。"]
  ],
  vocab: [
    ["comer", "吃（原形）", "[ko-MER]；como, comes, come, comemos, coméis, comen"],
    ["como / comes / come / comemos / coméis / comen", "我吃 / 你吃 / 他吃 / 我们吃 / 你们吃 / 他们吃", "去掉 -er，加 -o -es -e -emos -éis -en"],
    ["beber", "喝（原形）", "[be-BER]；bebo, bebes, bebe, bebemos, bebéis, beben"],
    ["bebo / bebes / bebe / bebemos / bebéis / beben", "我喝 / 你喝 / 他喝 / 我们喝 / 你们喝 / 他们喝", "照 comer 的表"],
    ["leer", "读（原形）", "[le-ER]；leo, lees, lee, leemos, leéis, leen"],
    ["leo / lees / lee / leemos / leéis / leen", "我读 / 你读 / 他读 / 我们读 / 你们读 / 他们读", "le- + 结尾，两个 e 相连"],
    ["aprender", "学会（原形）", "[a-pren-DER]；aprendo, aprendes, aprende, aprendemos, aprendéis, aprenden"],
    ["aprendo / aprendes / aprende / aprendemos / aprendéis / aprenden", "我学会 / 你学会 / 他学会 / 我们学会 / 你们学会 / 他们学会", "estudiar 是学的动作，aprender 是学会"],
    ["el arroz", "米饭", "[a-RROZ]，z 读 θ（拉美读 s）"],
    ["el agua", "水", "阴性，但单数用 el；复数 las aguas"],
    ["el té", "茶", "[TÉ]，有符号，区别 te（你自己）"],
    ["¿Qué comes?", "你吃什么？", "qué 什么 + comes 你吃"]
  ],
  exercises: [
    { q: "变形：comer，tú →", a: "comes" },
    { q: "变形：leer，ellos →", a: "leen" },
    { q: "填空：Nosotros ___ español.（aprender）", a: "aprendemos" },
    { q: "选择：comer 的「我们」形状", opts: ["comemos", "comamos", "comimos"], a: "comemos" },
    { q: "翻译：我喝水。", a: "Bebo agua." },
    { q: "翻译：你们吃什么？", a: "¿Qué coméis?" }
  ],
  task: "说出 comer 和 beber 的六个形状，再说三句「我吃……、我喝……」的真话，录音。"
},

w8d4: {
  title: "-ir 动词：vivir",
  goal: "学完能问「你住哪儿」并回答「我住在……」，三类规则动词全部会变。",
  recap: [
    { q: "上一课：comer 的「我们」形状？", a: "comemos" },
    { q: "上一课：-er 动词的结尾把 a 换成什么？", a: "e" },
    { q: "上一课：「水」怎么说，冠词用哪个？", a: "el agua" }
  ],
  steps: [
    { explain: [
        { p: "第三类原形以 **-ir** 结尾：**vivir**（住；生活）。结尾几乎和 -er 一样：-o、-es、-e、-en 完全相同，只有两处不同——「我们」是 **-imos**，「你们」是 **-ís**：vivo, vives, vive, **vivimos**, **vivís**, viven。" },
        { table: { head: ["谁", "-er：comer", "-ir：vivir"], rows: [["yo", "como", "vivo"], ["tú", "comes", "vives"], ["él / ella / usted", "come", "vive"], ["nosotros/as", "com**emos**", "viv**imos**"], ["vosotros/as", "com**éis**", "viv**ís**"], ["ellos / ellas / ustedes", "comen", "viven"]] } },
        { tip: "记法：-ir 动词只在「我们」「你们」两处用 i，其余和 -er 一模一样。" }
      ],
      check: [
        { q: "填空：Yo ___ en Madrid.（住）", a: "vivo" },
        { q: "选择：vivir 的「我们」形状", opts: ["vivimos", "vivemos", "vivamos"], a: "vivimos" }
      ]
    },
    { explain: [
        { p: "问住哪里：**¿Dónde vives?**（dónde 哪里 + vives 你住）。回答 **Vivo en** + 地方：Vivo en Pekín / en una casa grande / con mi familia。再学两个 -ir 动词：**escribir**（写）、**abrir**（打开），全部照 vivir 变：escribo, escribes…；abro, abres…。" },
        { table: { head: ["中文", "西语"], rows: [["你住哪儿？", "¿Dónde vives?"], ["我住在北京", "Vivo en Pekín."], ["我们住在一套公寓里", "Vivimos en un piso."], ["我写我的名字", "Escribo mi nombre."], ["我开门", "Abro la puerta."]] } },
        { tip: "「公寓」西班牙叫 el piso，拉美叫 el apartamento 或 el departamento。" }
      ],
      check: [
        { q: "翻译：你住哪里？", a: "¿Dónde vives?" },
        { q: "变形：abrir，ellos →", a: "abren" }
      ]
    }
  ],
  examples: [
    ["¿Dónde vives? — Vivo en Shanghái con mi familia.", "你住哪儿？——我和家人住在上海。", "dónde（哪里）+ vives（你住，-es）；vivo（我住，vivir 去 -ir 加 -o）+ en Shanghái + con（和）+ mi familia（我的家人）。"],
    ["Mis abuelos viven en un piso pequeño cerca del parque.", "我祖父母住在公园附近的一套小公寓里。", "mis abuelos（我祖父母）+ viven（他们住，-en）+ en un piso（在一套公寓）+ pequeño（小的）+ cerca del（靠近，de + el）+ parque（公园）。"],
    ["Vivimos en Madrid, en el centro.", "我们住在马德里，在市中心。", "vivimos（我们住，-imos）+ en Madrid + en el centro（在市中心）。"],
    ["Escribo mi nombre con el bolígrafo.", "我用圆珠笔写我的名字。", "escribo（我写，escribir + o）+ mi nombre（我的名字）+ con（用）+ el bolígrafo（圆珠笔）。"],
    ["Tengo calor y abro la puerta.", "我热，就开门。", "tengo calor（我热，字面「我有热」）+ y + abro（我打开，abrir + o）+ la puerta（门）。"],
    ["¿Vivís en la ciudad? — No, vivimos cerca de la playa.", "你们住在城里吗？——不，我们住在海滩附近。", "vivís（你们住，-ís）+ en la ciudad（在城市）；no + vivimos（我们住）+ cerca de（靠近）+ la playa（海滩）。"]
  ],
  vocab: [
    ["vivir", "住；生活（原形）", "[bi-BIR]；vivo, vives, vive, vivimos, vivís, viven"],
    ["vivo / vives / vive / vivimos / vivís / viven", "我住 / 你住 / 他住 / 我们住 / 你们住 / 他们住", "去掉 -ir，加 -o -es -e -imos -ís -en"],
    ["¿Dónde vives?", "你住哪儿？", "回答 Vivo en…"],
    ["escribir", "写（原形）", "[es-kri-BIR]；escribo, escribes, escribe, escribimos, escribís, escriben"],
    ["escribo / escribes / escribe / escribimos / escribís / escriben", "我写 / 你写 / 他写 / 我们写 / 你们写 / 他们写", "照 vivir 的表"],
    ["abrir", "打开（原形）", "[a-BRIR]；abro, abres, abre, abrimos, abrís, abren"],
    ["abro / abres / abre / abrimos / abrís / abren", "我开 / 你开 / 他开 / 我们开 / 你们开 / 他们开", "照 vivir 的表"],
    ["el piso", "公寓（西班牙）", "[PI-so]；拉美 el apartamento"]
  ],
  exercises: [
    { q: "变形：vivir，nosotros →", a: "vivimos" },
    { q: "变形：escribir，tú →", a: "escribes" },
    { q: "选择：¿Dónde ___ tus padres?", opts: ["viven", "vive", "vivís"], a: "viven" },
    { q: "选择：-ir 和 -er 哪两个形状不同？", opts: ["我们、你们", "我、你", "他、他们"], a: "我们、你们" },
    { q: "翻译：我住在北京。", a: "Vivo en Pekín." },
    { q: "翻译：我打开门。", a: "Abro la puerta." }
  ],
  task: "自问自答 ¿Dónde vives?，再说 vivir 六个形状各一句（我住在……，我父母住在……），录音。"
},

w8d5: {
  title: "三类动词对照；第 8 周复习",
  goal: "把 -ar / -er / -ir 三张表并成一张，能说出一天里做的事。",
  recap: [
    { q: "上一课：「我们住」怎么说？", a: "vivimos" },
    { q: "上一课：-ir 和 -er 哪两处不同？", a: "我们 -imos、你们 -ís" },
    { q: "上一课：「你住哪儿」？", a: "¿Dónde vives?" }
  ],
  steps: [
    { explain: [
        { p: "三类动词放在一起看，规律只有三条：①「我」永远是 **-o**；② -ar 用 **a**，-er / -ir 用 **e**；③ 只有「我们」「你们」三类各不同（-amos / -emos / -imos，-áis / -éis / -ís）。会了这张表，以后每学一个规则动词，六个形状自动就有了。" },
        { table: { head: ["谁", "hablar", "comer", "vivir"], rows: [["yo", "hablo", "como", "vivo"], ["tú", "hablas", "comes", "vives"], ["él / ella / usted", "habla", "come", "vive"], ["nosotros/as", "hablamos", "comemos", "vivimos"], ["vosotros/as", "habláis", "coméis", "vivís"], ["ellos / ellas / ustedes", "hablan", "comen", "viven"]] } }
      ],
      check: [
        { q: "变形：trabajar，vosotros →", a: "trabajáis" },
        { q: "选择：三类动词哪个形状完全一样？", opts: ["我（-o）", "我们", "你们"], a: "我（-o）" }
      ]
    },
    { explain: [
        { p: "用 qué 问动作：**¿Qué estudias?**（你学什么？）、¿Qué comes?、¿Qué lees?，结构都是 qué + 动词。一个小细节：**y**（和）后面的词以 i- 开头时，y 要变成 **e**，否则两个 i 音连在一起听不清：chino **e** inglés。" },
        { table: { head: ["中文", "西语"], rows: [["你学什么？", "¿Qué estudias?"], ["我学西语", "Estudio español."], ["中文和英语", "chino e inglés"], ["我有课", "Tengo clase."], ["我有很多工作", "Tengo mucho trabajo."]] } },
        { tip: "trabajo 既是「我工作」（动词）也是「工作」（名词）：Tengo mucho trabajo。看前面有没有 el / mucho 就能分清。" }
      ],
      check: [
        { q: "填空：Hablo chino ___ inglés.", a: "e" },
        { q: "翻译：你学什么？", a: "¿Qué estudias?" }
      ]
    },
    { explain: [
        { p: "本周的 15 个动词加上前几周的 en、casa、oficina，已经够说一天的事：Trabajo en una oficina, como en un restaurante, leo en casa。录音自查：hablo 的 h 不发音、trabajo 的 j 用力、vivir 的 v 读 b。下周学问句系统、钟点和「去」。" },
        { table: { head: ["动作", "西语"], rows: [["我在办公室工作", "Trabajo en una oficina."], ["我们在餐厅吃饭", "Comemos en un restaurante."], ["我在家读书", "Leo en casa."], ["我学十个新词", "Aprendo diez palabras nuevas."]] } }
      ],
      check: [
        { q: "翻译：我们在餐厅吃饭。", a: "Comemos en un restaurante." },
        { q: "选择：Mi madre ___ un libro.（leer）", opts: ["lee", "lea", "leo"], a: "lee" }
      ]
    }
  ],
  examples: [
    ["Hablo chino e inglés, y aprendo español.", "我说中文和英语，在学西语。", "hablo（我说）+ chino + e（和，在 i- 开头的词前代替 y）+ inglés + y + aprendo（我学会）+ español。"],
    ["¿Qué estudias? — Estudio español. Tengo clase hoy.", "你学什么？——我学西语。我今天有课。", "qué（什么）+ estudias（你学）；estudio español；tengo（我有）+ clase（课）+ hoy（今天）。"],
    ["Trabajo en una oficina y como en un restaurante.", "我在一家办公室工作，在餐厅吃饭。", "trabajo（我工作）+ en una oficina（在一间办公室）+ y + como（我吃）+ en un restaurante（在一家餐厅）。"],
    ["Mi hermano tiene mucho trabajo y come en la oficina.", "我哥哥工作很多，在办公室吃饭。", "mi hermano + tiene（他有）+ mucho trabajo（很多工作，名词）+ y + come（他吃，-e）+ en la oficina。"],
    ["La comida de mi madre está muy buena.", "我妈妈做的饭很好吃。", "la comida（饭菜）+ de mi madre（我妈妈的）+ está（处于，说食物好吃用 estar）+ muy buena（很好，配阴性 comida）。"],
    ["Mis padres viven en Pekín, trabajan mucho y leen muchos libros.", "我父母住在北京，工作很多，读很多书。", "mis padres + viven（他们住）+ en Pekín + trabajan（他们工作）+ mucho（很多）+ y + leen（他们读）+ muchos libros（很多书）。"]
  ],
  vocab: [
    ["la clase", "课；教室", "[KLA-se]；tengo clase 我有课"],
    ["el trabajo", "工作（名词）", "[tra-BA-ho]；和「我工作」trabajo 同形"],
    ["la comida", "饭菜；食物；午饭", "[ko-MI-da]，来自 comer"],
    ["e", "和（在 i- 开头的词前代替 y）", "chino e inglés"],
    ["¿Qué estudias?", "你学什么？", "qué + 动词"],
    ["la palabra", "词；单词", "[pa-LA-bra]"]
  ],
  exercises: [
    { q: "变形：comer，vosotros / vivir，vosotros →", a: "coméis / vivís" },
    { q: "变形：escribir，nosotros / hablar，nosotros →", a: "escribimos / hablamos" },
    { q: "填空：Mis padres ___ en Madrid.（vivir）", a: "viven" },
    { q: "选择：chino ___ inglés", opts: ["e", "y", "o"], a: "e" },
    { q: "翻译：你吃什么？——我吃米饭和面包。", a: "¿Qué comes? — Como arroz y pan." },
    { q: "翻译：我们在大学学西语，在家读书。", a: "Aprendemos español en la universidad y leemos en casa." }
  ],
  task: "不看表，口头把 hablar、comer、vivir 各六个形状说一遍并计时；再说 5 句「我在哪里做什么」，录音。"
},

/* ═══════════ 第 9 周 · 提问、时间、否定、去 ═══════════ */

w9d1: {
  title: "疑问词系统",
  goal: "学完能用 qué / quién / dónde / cuándo / cómo / por qué / cuánto 问出所有基本问题。",
  recap: [
    { q: "上一课：三类动词「我」的结尾？", a: "-o" },
    { q: "上一课：「我们」三类分别是？", a: "-amos / -emos / -imos" },
    { q: "上一课：chino 和 inglés 之间用哪个「和」？", a: "e" }
  ],
  steps: [
    { explain: [
        { p: "你已经在固定句里用过 **qué**（¿Qué eres?）、**quién**（¿Quién eres?）、**dónde**（¿Dónde está?）、**cómo**（¿Cómo te llamas?）。今天把它们排成一个系统：疑问词都带**重音符号**，句子前后各一个问号，语序永远是 **疑问词 + 动词 + 其余**，不用像英语那样加助动词。" },
        { table: { head: ["疑问词", "意思", "例句"], rows: [["¿Qué?", "什么", "¿Qué estudias?"], ["¿Quién?", "谁", "¿Quién es ella?"], ["¿Dónde?", "哪里", "¿Dónde trabaja tu padre?"], ["¿Cómo?", "怎么；怎样", "¿Cómo estás?"]] } }
      ],
      check: [
        { q: "填疑问词：¿___ vives? — En Madrid.", a: "Dónde" },
        { q: "填疑问词：¿___ es ella? — Es mi hermana.", a: "Quién" }
      ]
    },
    { explain: [
        { p: "两个新的：**cuándo**（什么时候）：¿Cuándo trabajas?；**¿por qué?**（为什么）由 por + qué 拼成，**分开写、qué 带符号**。回答用 **porque**（因为），**连写、无符号**——两个词长得像，写法正好相反。" },
        { table: { head: ["疑问词", "意思", "例句"], rows: [["¿Cuándo?", "什么时候", "¿Cuándo estudias?"], ["¿Por qué?", "为什么（分开写）", "¿Por qué estudias español?"], ["porque", "因为（连写，用于回答）", "Porque tengo amigos en España."]] } }
      ],
      check: [
        { q: "填：¿___ estudias español? — Porque tengo amigos en España.", a: "Por qué" },
        { q: "选择：「因为」是", opts: ["porque", "por qué", "por"], a: "porque" }
      ]
    },
    { explain: [
        { p: "**cuánto**（多少）要跟着后面的名词变性数，和第 6 周的形容词一样：cuánto dinero（阳单）、cuánta agua（阴单）、cuántos libros（阳复）、cuántas sillas（阴复）。¿Cuántos años tienes? 里的 cuántos 配阳性复数 años；¿Cuánto es? 后面没有名词，所以不变。" },
        { table: { head: ["形式", "配什么", "例子"], rows: [["cuánto", "阳性单数", "¿Cuánto dinero tienes?"], ["cuánta", "阴性单数", "¿Cuánta agua hay?"], ["cuántos", "阳性复数", "¿Cuántos años tienes?"], ["cuántas", "阴性复数", "¿Cuántas personas hay?"]] } },
        { tip: "不用疑问词的一般疑问句，只要句尾语调抬高：¿Vives en Madrid? — Sí, vivo en Madrid。" }
      ],
      check: [
        { q: "填：¿___ hermanas tienes?（多少个姐妹）", a: "Cuántas" },
        { q: "选择：¿Cuánto es? 里为什么用 cuánto 不变？", opts: ["后面没有名词", "es 是单数", "cuánto 永远不变"], a: "后面没有名词" }
      ]
    }
  ],
  examples: [
    ["¿Qué estudias? — Estudio español.", "你学什么？——我学西语。", "qué（什么）+ estudias（你学）；estudio（我学）+ español。"],
    ["¿Quién es ella y cómo se llama? — Es mi hermana, se llama Marta.", "她是谁，叫什么？——她是我姐姐，叫 Marta。", "quién（谁）+ es（她是）+ ella + y + cómo（怎么）+ se llama（她叫）；es mi hermana + se llama Marta。"],
    ["¿Dónde trabaja tu padre? — En un banco.", "你爸爸在哪里工作？——在一家银行。", "dónde（哪里）+ trabaja（他工作，-a）+ tu padre（你爸爸）；回答可以只说地点 en un banco。"],
    ["¿Cuándo estudias? — Hoy no, mañana.", "你什么时候学习？——今天不，明天。", "cuándo（什么时候）+ estudias（你学）；hoy（今天）+ no + mañana（明天）。"],
    ["¿Por qué estudias español? — Porque tengo amigos en España.", "你为什么学西语？——因为我在西班牙有朋友。", "por qué（为什么，分开写）+ estudias español；porque（因为，连写）+ tengo（我有）+ amigos + en España。"],
    ["¿Cuántas personas hay en tu familia? — Cuatro.", "你家有几口人？——四口。", "cuántas（多少，阴性复数配 personas）+ personas（人）+ hay（有）+ en tu familia（在你家）；cuatro（四）。"]
  ],
  vocab: [
    ["qué", "什么", "[KÉ]，带符号；qué + 动词"],
    ["quién", "谁", "[KIÉN]"],
    ["dónde", "哪里", "[DÓN-de]"],
    ["cómo", "怎么；怎样", "[KÓ-mo]"],
    ["cuándo", "什么时候", "[KUÁN-do]"],
    ["por qué", "为什么", "por + qué，分开写、带符号"],
    ["porque", "因为", "[POR-ke]，连写、无符号，用于回答"],
    ["cuánto / cuánta / cuántos / cuántas", "多少", "跟名词变性数；没有名词时用 cuánto"]
  ],
  exercises: [
    { q: "填疑问词：¿___ vives? — En Madrid.", a: "Dónde" },
    { q: "填疑问词：¿___ es tu profesor? — Es el señor Pedro.", a: "Quién" },
    { q: "填疑问词：¿___ hermanos tienes? — Dos.", a: "Cuántos" },
    { q: "填疑问词：¿___ estudias chino? — Porque vivo en China.", a: "Por qué" },
    { q: "翻译：你什么时候工作？", a: "¿Cuándo trabajas?" },
    { q: "翻译：你为什么在家吃饭？——因为我做饭。", a: "¿Por qué comes en casa? — Porque cocino." }
  ],
  task: "用 7 个疑问词各造一个问句问朋友，录音；然后自问自答一遍。"
},

w9d2: {
  title: "几点了：¿Qué hora es?",
  goal: "学完能问几点了、说几点，并说「我几点做什么」。",
  recap: [
    { q: "上一课：「为什么」和「因为」怎么写？", a: "por qué（分开、带符号）/ porque（连写）" },
    { q: "上一课：「什么时候」？", a: "cuándo" },
    { q: "上一课：「你有几个姐妹」里的「多少」用哪个形式？", a: "cuántas（配阴性复数 hermanas）" }
  ],
  steps: [
    { explain: [
        { p: "问几点：**¿Qué hora es?**（qué 什么 + hora 钟点 + es 是）。hora 是阴性名词，所以冠词用 la / las。回答用 ser：一点是单数 **Es la una**（una 就是「一」的阴性，配 hora）；两点起是复数 **Son las dos / las tres…**。分钟用 y 加在后面：Son las tres y diez（3:10）。" },
        { table: { head: ["时间", "西语", "说明"], rows: [["1:00", "Es la una.", "单数 es + la"], ["2:00", "Son las dos.", "复数 son + las"], ["3:10", "Son las tres y diez.", "y + 分钟"], ["12:00", "Son las doce.", ""]] } },
        { tip: "la / las 跟着 hora 变，不是跟着数字：是 la una、las dos，不是 el uno。" }
      ],
      check: [
        { q: "用西语说：2:00", a: "Son las dos." },
        { q: "选择：1:00", opts: ["Es la una.", "Son la una.", "Son las una."], a: "Es la una." }
      ]
    },
    { explain: [
        { p: "一刻是 **cuarto**（四分之一），半是 **media**（一半，配阴性 hora）：Son las dos **y cuarto**（2:15），Son las dos **y media**（2:30）。过了半点用「下一小时减去」：**menos**（减）：4:45 = Son las cinco **menos cuarto**（五点差一刻）。" },
        { table: { head: ["时间", "西语"], rows: [["2:15", "Son las dos y cuarto."], ["2:30", "Son las dos y media."], ["4:45", "Son las cinco menos cuarto."], ["5:50", "Son las seis menos diez."]] } },
        { tip: "拉美也常直接说 las cuatro y cuarenta y cinco（四点四十五），两种都对。" }
      ],
      check: [
        { q: "用西语说：3:30", a: "Son las tres y media." },
        { q: "用西语说：8:45", a: "Son las nueve menos cuarto." }
      ]
    },
    { explain: [
        { p: "说明早晚，在钟点后面加 **de la mañana**（早上的）/ **de la tarde**（下午的）/ **de la noche**（晚上的）：Son las ocho de la noche。「在几点做什么」用 **a**：**¿A qué hora trabajas?** — **A las nueve**。注意：「几点了」用 es / son，「在几点」用 a la / a las。" },
        { table: { head: ["中文", "西语"], rows: [["早上八点", "las ocho de la mañana"], ["你几点上班？", "¿A qué hora trabajas?"], ["九点（上班）", "A las nueve."], ["我一点吃饭", "Como a la una."]] } }
      ],
      check: [
        { q: "翻译：你几点吃饭？", a: "¿A qué hora comes?" },
        { q: "填空：Trabajo ___ las ocho.（在八点）", a: "a" }
      ]
    }
  ],
  examples: [
    ["¿Qué hora es? — Son las diez y media.", "几点了？——十点半。", "qué（什么）+ hora（钟点）+ es（是）；son（是，复数）+ las diez（十点）+ y media（加半）。"],
    ["Es la una y cuarto.", "一点一刻。", "es（是，一点用单数）+ la una（一点，una 配阴性 hora）+ y cuarto（加一刻）。"],
    ["Son las ocho menos cuarto de la mañana.", "早上七点三刻。", "son las ocho（八点）+ menos cuarto（减一刻）= 7:45；de la mañana（早上的）。"],
    ["¿A qué hora trabajas? — A las nueve.", "你几点上班？——九点。", "a（在）+ qué hora（几点）+ trabajas（你工作）；a las nueve（在九点）。"],
    ["Como a las dos de la tarde.", "我下午两点吃饭。", "como（我吃）+ a las dos（在两点）+ de la tarde（下午的）。"],
    ["Son las once de la noche y tengo sueño.", "晚上十一点了，我困了。", "son las once（十一点）+ de la noche（晚上的）+ y + tengo sueño（我困，字面「我有困」）。"]
  ],
  vocab: [
    ["la hora", "小时；钟点", "[O-ra]，h 不发音，阴性"],
    ["¿Qué hora es?", "几点了？", "qué + hora + es"],
    ["es la una", "一点", "一点用单数 es + la una"],
    ["son las dos", "两点", "两点起用复数 son + las + 数字"],
    ["y cuarto", "一刻（过）", "cuarto 四分之一"],
    ["y media", "半", "media 一半，配阴性 hora"],
    ["menos cuarto", "差一刻", "menos 减；下一小时减去"],
    ["de la mañana / de la tarde / de la noche", "早上的 / 下午的 / 晚上的", "跟在钟点后面"],
    ["¿A qué hora…?", "几点……？", "a 在 + qué hora"],
    ["a las…", "在……点", "a la una / a las dos"]
  ],
  exercises: [
    { q: "用西语说：1:30", a: "Es la una y media." },
    { q: "用西语说：4:15", a: "Son las cuatro y cuarto." },
    { q: "用西语说：8:45", a: "Son las nueve menos cuarto." },
    { q: "用西语说：晚上 10 点", a: "Son las diez de la noche." },
    { q: "选择：¿A qué hora comes? — ___ las dos.", opts: ["A", "Son", "Es"], a: "A" },
    { q: "选择：___ la una.", opts: ["Es", "Son", "Está"], a: "Es" }
  ],
  task: "说出你一天里 5 个固定时间点做什么（Trabajo a las…, Como a las…），录音。"
},

w9d3: {
  title: "否定：no、nunca、nada、nadie",
  goal: "学完会说「不……」「从不」「什么都不」「没有人」，并会回应「我也不」。",
  recap: [
    { q: "上一课：「几点了」怎么问？", a: "¿Qué hora es?" },
    { q: "上一课：4:45 怎么说？", a: "Son las cinco menos cuarto." },
    { q: "上一课：「在九点」？", a: "A las nueve." }
  ],
  steps: [
    { explain: [
        { p: "否定最简单：把 **no** 放在动词前面。No hablo inglés（我不说英语）。回答问题时 no 会出现两次：¿Hablas inglés? — **No, no hablo inglés.** 第一个 no 是「不」（回答），第二个 no 是「不说」（否定动词）。第 7 周的 No, no tengo 就是这个结构。" },
        { table: { head: ["肯定", "否定"], rows: [["Hablo inglés.", "No hablo inglés."], ["Vivo en Madrid.", "No vivo en Madrid."], ["¿Trabajas hoy? — Sí, trabajo.", "¿Trabajas hoy? — No, no trabajo."]] } }
      ],
      check: [
        { q: "变否定：Hablo inglés. →", a: "No hablo inglés." },
        { q: "回答（否定）：¿Vives en Madrid? →", a: "No, no vivo en Madrid." }
      ]
    },
    { explain: [
        { p: "更强的否定词：**nunca**（从不）、**nada**（什么都不）、**nadie**（没有人）。它们放在动词**后面**时，前面必须有 no：No como nada（我什么都不吃）——这叫「双重否定」，西语里是正确的。放在动词**前面**就不要 no：Nunca bebo vino。每个否定词都有一个肯定的对应：" },
        { table: { head: ["肯定", "否定"], rows: [["algo 某物；什么", "nada 什么都不"], ["alguien 某人", "nadie 没有人"], ["también 也", "tampoco 也不"]] } }
      ],
      check: [
        { q: "填空：No hay ___ en casa.（没有人）", a: "nadie" },
        { q: "填空：___ bebo café.（从不）", a: "Nunca" }
      ]
    },
    { explain: [
        { p: "别人说肯定句，你说「我也是」**Yo también**（第 4 周学过）；别人说否定句，「我也不」是 **Yo tampoco**，不能说 yo también no。再加两个简短回应：**Sí, claro**（是，当然）和 No, gracias（不了，谢谢）。" },
        { table: { head: ["对方说", "你回应"], rows: [["Tengo hambre.", "Yo también.（我也是）"], ["No tengo coche.", "Yo tampoco.（我也没有）"], ["¿Un café?", "Sí, claro. / No, gracias."]] } }
      ],
      check: [
        { q: "填空：No tengo coche. — Yo ___.", a: "tampoco" },
        { q: "选择：¿Un café? — ___", opts: ["Sí, claro.", "Yo tampoco.", "Nadie."], a: "Sí, claro." }
      ]
    }
  ],
  examples: [
    ["No hablo inglés, pero hablo chino.", "我不说英语，但我说中文。", "no（不）+ hablo（我说）+ inglés + pero（但是）+ hablo chino。"],
    ["¿Trabajas hoy? — No, no trabajo hoy.", "你今天上班吗？——不，我今天不上班。", "trabajas（你工作）+ hoy（今天）；no（不，回答）+ no trabajo（我不工作）+ hoy。"],
    ["Nunca bebo vino. — Yo tampoco.", "我从不喝酒。——我也不。", "nunca（从不，放动词前不加 no）+ bebo（我喝）+ vino（酒）；yo（我）+ tampoco（也不）。"],
    ["¿Comes algo? — No, no como nada, no tengo hambre.", "你吃点什么吗？——不，我什么都不吃，我不饿。", "comes（你吃）+ algo（什么）；no + no como（我不吃）+ nada（什么都不，双重否定）+ no tengo hambre（我不饿）。"],
    ["¿Hay alguien en la oficina? — No, no hay nadie.", "办公室里有人吗？——不，没有人。", "hay（有）+ alguien（某人）+ en la oficina；no + no hay（没有）+ nadie（任何人）。"],
    ["¿Un café? — Sí, claro. Gracias.", "来杯咖啡？——好啊，当然。谢谢。", "un café（一杯咖啡，语调上扬）；sí（是）+ claro（当然）+ gracias。"]
  ],
  vocab: [
    ["nunca", "从不", "[NUN-ka]，放动词前不加 no"],
    ["nada", "什么都不", "[NA-da]；No … nada"],
    ["nadie", "没有人", "[NA-die]；No hay nadie"],
    ["algo", "某物；什么", "[AL-go]，nada 的肯定版"],
    ["alguien", "某人", "[AL-gien]，nadie 的肯定版"],
    ["tampoco", "也不", "[tam-PO-ko]；Yo tampoco 我也不"],
    ["claro", "当然", "[KLA-ro]；Sí, claro."]
  ],
  exercises: [
    { q: "变否定：Vivo en Madrid. →", a: "No vivo en Madrid." },
    { q: "回答（否定）：¿Hablas inglés? →", a: "No, no hablo inglés." },
    { q: "填空：___ como en un restaurante.（从不）", a: "Nunca" },
    { q: "填空：No bebo ___.（什么都不）", a: "nada" },
    { q: "选择：No tengo dinero. — Yo ___.", opts: ["tampoco", "también", "nada"], a: "tampoco" },
    { q: "选择：¿Hay ___ en casa? — No, no hay nadie.", opts: ["alguien", "nadie", "nada"], a: "alguien" }
  ],
  task: "自问自答 6 个一般疑问句（¿Trabajas hoy? ¿Bebes café?…），一半肯定回答，一半否定回答，录音。"
},

w9d4: {
  title: "去：ir、al、ir a + 原形",
  goal: "学完能说「我去超市」「你去哪儿」「我明天要学习」。",
  recap: [
    { q: "上一课：「我也不」怎么说？", a: "Yo tampoco." },
    { q: "上一课：「没有人」？", a: "nadie" },
    { q: "上一课：nunca 放在动词前面时要不要 no？", a: "不要（Nunca bebo café.）" }
  ],
  steps: [
    { explain: [
        { p: "**ir**（去）是不规则动词，六个形状要整个背：**voy, vas, va, vamos, vais, van**。好在它们都很短，而且 vamos、vais、van 的结尾和 -ar 表一样。ir 后面用 **a** 接地点：Voy a la escuela。**a + el 合并成 al**：Voy al cine（不能说 a el cine）。第 6 周的 del（de + el）是同一种合并。" },
        { table: { head: ["谁", "ir", "例句"], rows: [["yo", "voy", "Voy al banco."], ["tú", "vas", "¿Vas al cine?"], ["él / ella / usted", "va", "Va a la escuela."], ["nosotros/as", "vamos", "Vamos al parque."], ["vosotros/as", "vais", "¿Vais a casa?"], ["ellos / ellas / ustedes", "van", "Van al mercado."]] } },
        { tip: "问「去哪里」：¿Adónde vas?（a + dónde）。a la 不合并：Voy a la playa。" }
      ],
      check: [
        { q: "填空：Yo ___ al banco.", a: "voy" },
        { q: "填空：Voy ___ cine.（a + el）", a: "al" }
      ]
    },
    { explain: [
        { p: "**ir a + 动词原形** = 打算 / 将要做，是最常用的将来说法：Voy a estudiar（我要学习）。Vamos a comer 既可以是「我们要吃饭」，也可以是「我们去吃饭吧」。常配的时间词：hoy、mañana、**esta tarde**（今天下午）、**esta noche**（今晚）、**este fin de semana**（这个周末）。este / esta = 这个，跟名词性别走。" },
        { table: { head: ["中文", "西语"], rows: [["我要学习", "Voy a estudiar."], ["我们要吃饭", "Vamos a comer."], ["今晚", "esta noche（noche 阴性）"], ["这个周末", "este fin de semana（fin 阳性）"], ["明天我要工作", "Mañana voy a trabajar."]] } }
      ],
      check: [
        { q: "翻译：明天我要工作。", a: "Mañana voy a trabajar." },
        { q: "选择：「今晚」", opts: ["esta noche", "este noche", "la noche"], a: "esta noche" }
      ]
    }
  ],
  examples: [
    ["Voy al supermercado.", "我去超市。", "voy（我去，ir 的「我」形状）+ al（a + el 合并）+ supermercado（超市）。"],
    ["¿Adónde vas? — Voy a la universidad.", "你去哪儿？——我去大学。", "adónde（去哪里，a + dónde）+ vas（你去）；voy a（我去）+ la universidad（a la 不合并）。"],
    ["Mañana voy a estudiar español.", "明天我要学西语。", "mañana（明天）+ voy a（我将要）+ estudiar（学习，原形）+ español。"],
    ["Esta noche vamos a comer en un restaurante.", "今晚我们要去餐厅吃饭。", "esta noche（今晚）+ vamos a（我们将要）+ comer（吃，原形）+ en un restaurante。"],
    ["Mis padres van a viajar a España este fin de semana.", "我父母这个周末要去西班牙旅行。", "mis padres + van a（他们将要）+ viajar（旅行，原形）+ a España（去西班牙）+ este fin de semana（这个周末）。"],
    ["¿Vais al cine esta tarde? — No, vamos al parque.", "你们今天下午去电影院吗？——不，我们去公园。", "vais（你们去）+ al cine + esta tarde（今天下午）；no + vamos（我们去）+ al parque。"]
  ],
  vocab: [
    ["ir", "去（原形）", "[IR]，不规则：voy, vas, va, vamos, vais, van"],
    ["voy / vas / va / vamos / vais / van", "我去 / 你去 / 他去 / 我们去 / 你们去 / 他们去", "整个背下来；后面接 a + 地点"],
    ["al", "a + el", "Voy al cine；a la 不合并"],
    ["¿Adónde vas?", "你去哪儿？", "adónde = a + dónde"],
    ["ir a + 原形", "将要……；打算……", "Voy a comer. 相当于英语 going to"],
    ["este / esta", "这个", "este 配阳性，esta 配阴性"],
    ["esta noche / esta tarde", "今晚 / 今天下午", ""],
    ["el fin de semana", "周末", "[FIN]；este fin de semana 这个周末"],
    ["viajar", "旅行（原形）", "[bia-HAR]，规则 -ar：viajo, viajas, viaja, viajamos, viajáis, viajan"]
  ],
  exercises: [
    { q: "变形：ir，nosotros →", a: "vamos" },
    { q: "填空：Yo ___ ___ cine.（ir + a + el）", a: "voy al" },
    { q: "填空：Mañana ellos ___ a viajar.", a: "van" },
    { q: "选择：¿___ vas? — A la escuela.", opts: ["Adónde", "Dónde", "Qué"], a: "Adónde" },
    { q: "翻译：我们今晚要去吃饭。", a: "Esta noche vamos a comer." },
    { q: "翻译：你周末要去哪儿？", a: "¿Adónde vas el fin de semana?" }
  ],
  task: "说出你这周末和明天要做的 6 件事（Voy a…），再自问自答 ¿Adónde vas? 三次，录音。"
},

w9d5: {
  title: "hacer、poder、querer",
  goal: "学完能说「你在做什么」「我想吃」「我不能去」。",
  recap: [
    { q: "上一课：ir 的六个形状？", a: "voy, vas, va, vamos, vais, van" },
    { q: "上一课：a + el 合并成？", a: "al" },
    { q: "上一课：「我要学习」（将来）怎么说？", a: "Voy a estudiar." }
  ],
  steps: [
    { explain: [
        { p: "**hacer**（做）几乎是规则的 -er 动词：只有「我」不规则，是 **hago**（不是 haco），其余照 comer 的表：haces, hace, hacemos, hacéis, hacen。**¿Qué haces?** = 你在做什么？（也可以问「你做什么工作」）。回答：Hago la cena（我做晚饭）。" },
        { table: { head: ["谁", "hacer", "对照 comer"], rows: [["yo", "**hago**（不规则）", "como"], ["tú", "haces", "comes"], ["él / ella / usted", "hace", "come"], ["nosotros/as", "hacemos", "comemos"], ["vosotros/as", "hacéis", "coméis"], ["ellos / ellas / ustedes", "hacen", "comen"]] } }
      ],
      check: [
        { q: "变形：hacer，yo →", a: "hago" },
        { q: "翻译：你在做什么？", a: "¿Qué haces?" }
      ]
    },
    { explain: [
        { p: "**poder**（能）和 **querer**（想要）是「词干变化」动词：结尾完全照 -er 表，但重音落在词干上时，词干里的 **o 变 ue**、**e 变 ie**：puedo、quiero。nosotros / vosotros 的重音在词尾（po-DE-mos），词干不变：podemos, podéis；queremos, queréis。表的形状像一只靴子：上面四格变，下面两格不变。" },
        { table: { head: ["谁", "poder 能", "querer 想要"], rows: [["yo", "p**ue**do", "qu**ie**ro"], ["tú", "p**ue**des", "qu**ie**res"], ["él / ella / usted", "p**ue**de", "qu**ie**re"], ["nosotros/as", "podemos", "queremos"], ["vosotros/as", "podéis", "queréis"], ["ellos / ellas / ustedes", "p**ue**den", "qu**ie**ren"]] } }
      ],
      check: [
        { q: "变形：poder，nosotros →", a: "podemos（词干不变）" },
        { q: "变形：querer，ellos →", a: "quieren" }
      ]
    },
    { explain: [
        { p: "poder 和 querer 后面**直接接动词原形**，中间不加任何词：Quiero comer（我想吃），No puedo ir（我不能去），¿Puedes abrir la puerta?（你能开门吗？）。querer 也可以接名词：Quiero un café（我想要一杯咖啡）。" },
        { table: { head: ["中文", "西语"], rows: [["我想吃", "Quiero comer."], ["我想要一杯咖啡", "Quiero un café."], ["我明天不能去", "No puedo ir mañana."], ["你能开门吗？", "¿Puedes abrir la puerta?"]] } },
        { tip: "¿Quieres…? 是最简单的邀请：¿Quieres comer? 回答 Sí, quiero / No, gracias。" }
      ],
      check: [
        { q: "翻译：我想要一杯咖啡。", a: "Quiero un café." },
        { q: "选择：No ___ ir mañana.（我不能）", opts: ["puedo", "puede", "podemos"], a: "puedo" }
      ]
    }
  ],
  examples: [
    ["¿Qué haces? — Hago la cena.", "你在做什么？——我在做晚饭。", "qué（什么）+ haces（你做）；hago（我做，hacer 唯一不规则的形状）+ la cena（晚餐）。"],
    ["Quiero un café, por favor.", "请给我一杯咖啡。", "quiero（我想要，querer e→ie）+ un café + por favor（请）。"],
    ["¿Quieres comer algo? — No, gracias, no tengo hambre.", "你想吃点什么吗？——不了，谢谢，我不饿。", "quieres（你想要）+ comer（吃，原形）+ algo（点什么）；no, gracias + no tengo hambre（我不饿）。"],
    ["No puedo ir al cine mañana, tengo mucho trabajo.", "我明天不能去电影院，我有很多工作。", "no puedo（我不能，poder o→ue）+ ir（去，原形）+ al cine + mañana；tengo mucho trabajo（我有很多工作）。"],
    ["¿Puedes abrir la ventana, por favor? — Sí, claro.", "你能开一下窗吗？——当然。", "puedes（你能）+ abrir（打开，原形）+ la ventana + por favor；sí, claro（当然）。"],
    ["Queremos viajar a México, pero mis amigos no pueden.", "我们想去墨西哥旅行，但我朋友们不能去。", "queremos（我们想要，词干不变）+ viajar（旅行）+ a México；pero + mis amigos + no pueden（他们不能，o→ue）。"]
  ],
  vocab: [
    ["hacer", "做（原形）", "[a-ZER]；hago, haces, hace, hacemos, hacéis, hacen"],
    ["hago / haces / hace / hacemos / hacéis / hacen", "我做 / 你做 / 他做 / 我们做 / 你们做 / 他们做", "只有 hago 不规则"],
    ["¿Qué haces?", "你在做什么？", "也可问「你做什么工作」"],
    ["poder", "能；可以（原形）", "[po-DER]；puedo, puedes, puede, podemos, podéis, pueden"],
    ["puedo / puedes / puede / podemos / podéis / pueden", "我能 / 你能 / 他能 / 我们能 / 你们能 / 他们能", "o→ue，nosotros / vosotros 不变"],
    ["querer", "想要（原形）", "[ke-RER]；quiero, quieres, quiere, queremos, queréis, quieren"],
    ["quiero / quieres / quiere / queremos / queréis / quieren", "我想要 / 你想要 / 他想要 / 我们想要 / 你们想要 / 他们想要", "e→ie，nosotros / vosotros 不变"],
    ["poder / querer + 原形", "能做 / 想做……（后接原形）", "中间不加任何词：Quiero comer. / No puedo ir."]
  ],
  exercises: [
    { q: "变形：hacer，yo →", a: "hago" },
    { q: "变形：poder，nosotros →", a: "podemos" },
    { q: "变形：querer，ellos →", a: "quieren" },
    { q: "选择：¿___ ir al cine esta noche? — Sí, puedo.", opts: ["Puedes", "Podes", "Puedo"], a: "Puedes" },
    { q: "翻译：我想要一杯茶。", a: "Quiero un té." },
    { q: "翻译：我们明天不能去。", a: "No podemos ir mañana." }
  ],
  task: "说 6 句：3 句 quiero + 想做的事，3 句 no puedo + 不能做的事，录音。"
},

/* ═══════════ 第 10 周 · 场景与第一阶段总复习 ═══════════ */

w10d1: {
  title: "saber、conocer 与人称 a",
  goal: "学完能分清「会 / 知道」「认识」「能」，说自己会不会游泳、认不认识某人。",
  recap: [
    { q: "上一课：hacer 的「我」？", a: "hago" },
    { q: "上一课：poder 的 o 在哪几个人称不变 ue？", a: "nosotros / vosotros（podemos, podéis）" },
    { q: "上一课：「我想吃」？", a: "Quiero comer." }
  ],
  steps: [
    { explain: [
        { p: "中文的「会、能、知道、认识」在西语里分给三个动词。**saber** = 知道信息、会一项学来的技能。它只有「我」不规则：**sé**（带符号，区别 se 他自己），其余照 -er 表：sabes, sabe, sabemos, sabéis, saben。接原形 = 会做：Sé cocinar；接 **que**（……这件事）= 知道：Sé que tienes hambre；**No sé** = 我不知道。" },
        { table: { head: ["谁", "saber", "例句"], rows: [["yo", "**sé**", "Sé nadar. 我会游泳。"], ["tú", "sabes", "¿Sabes cocinar?"], ["él / ella / usted", "sabe", "Sabe bailar."], ["nosotros/as", "sabemos", "No sabemos."], ["vosotros/as", "sabéis", ""], ["ellos / ellas / ustedes", "saben", ""]] } }
      ],
      check: [
        { q: "填空：___ nadar.（我会）", a: "Sé" },
        { q: "选择：sé 上的符号是为了区别", opts: ["se（他自己）", "sí", "es"], a: "se（他自己）" }
      ]
    },
    { explain: [
        { p: "**conocer** = 认识人、熟悉地方。也只有「我」不规则：**conozco**，其余 conoces, conoce, conocemos, conocéis, conocen。宾语是**具体的人**时，前面要加 **a**：Conozco **a** Ana。这个 a 叫「人称 a」，本身没有意思，只是标记「动作作用在人身上」。宾语是地方就不加：Conozco Madrid。" },
        { table: { head: ["宾语", "加不加 a", "例句"], rows: [["人", "加", "Conozco a tu hermano."], ["地方", "不加", "Conozco Madrid."], ["东西", "不加", "Conozco el restaurante."]] } }
      ],
      check: [
        { q: "填空：Conozco ___ tu hermano.（人称 a）", a: "a" },
        { q: "变形：conocer，yo →", a: "conozco" }
      ]
    },
    { explain: [
        { p: "三个动词的分工：**saber** 管学来的技能和信息；**poder** 管有没有条件、许可、力气；**conocer** 管认不认识。所以「你会说西语吗」用 saber（¿Sabes hablar español?），「你现在能说吗（方不方便）」才用 poder（¿Puedes hablar ahora?）。" },
        { table: { head: ["动词", "管什么", "例子"], rows: [["saber", "会技能；知道信息", "Sé nadar. / No sé."], ["poder", "能（条件、许可）", "Hoy no puedo nadar."], ["conocer", "认识人；熟悉地方", "Conozco a Ana. / Conozco Madrid."]] } }
      ],
      check: [
        { q: "选择：¿___ nadar? — Sí, un poco.", opts: ["Sabes", "Conoces", "Puedes"], a: "Sabes" },
        { q: "选择：Hoy no ___ ir al cine, tengo mucho trabajo.", opts: ["puedo", "sé", "conozco"], a: "puedo" }
      ]
    }
  ],
  examples: [
    ["¿Sabes nadar? — Sí, sé nadar, pero hoy no puedo.", "你会游泳吗？——会，但我今天不能游。", "sabes（你会）+ nadar（游泳，原形）；sé（我会）+ nadar + pero + hoy no puedo（今天不能）。"],
    ["No sé dónde está el banco.", "我不知道银行在哪儿。", "no sé（我不知道）+ dónde está（在哪里）+ el banco。"],
    ["¿Conoces Madrid? — No, no conozco Madrid.", "你熟悉马德里吗？——不，我不熟悉。", "conoces（你熟悉）+ Madrid（地方，不加 a）；no + no conozco（我不熟悉，「我」形状不规则）+ Madrid。"],
    ["Conozco a tu hermano, es médico.", "我认识你哥哥，他是医生。", "conozco（我认识）+ a（人称 a，宾语是人）+ tu hermano（你兄弟）；es médico（他是医生）。"],
    ["Sé que tienes hambre.", "我知道你饿了。", "sé（我知道）+ que（……这件事）+ tienes hambre（你饿了）。"],
    ["Mi madre sabe cocinar muy bien y mi padre sabe bailar.", "我妈妈很会做饭，我爸爸会跳舞。", "mi madre + sabe（她会）+ cocinar（做饭）+ muy bien（很好）+ y + mi padre + sabe + bailar（跳舞）。"]
  ],
  vocab: [
    ["saber", "知道；会（技能）（原形）", "[sa-BER]；sé, sabes, sabe, sabemos, sabéis, saben"],
    ["sé / sabes / sabe / sabemos / sabéis / saben", "我知道 / 你知道 / 他知道 / 我们知道 / 你们知道 / 他们知道", "只有 sé 不规则；No sé 我不知道"],
    ["conocer", "认识；熟悉（原形）", "[ko-no-ZER]；conozco, conoces, conoce, conocemos, conocéis, conocen"],
    ["conozco / conoces / conoce / conocemos / conocéis / conocen", "我认识 / 你认识 / 他认识 / 我们认识 / 你们认识 / 他们认识", "只有 conozco 不规则"],
    ["a", "人称 a：动词 + a + 人", "Conozco a Juan.；地方不加"],
    ["que", "……这件事（连词）", "[KE]，无符号；Sé que…"],
    ["nadar", "游泳（原形）", "[na-DAR]，规则 -ar：nado, nadas, nada, nadamos, nadáis, nadan"],
    ["bailar", "跳舞（原形）", "[bai-LAR]，规则 -ar：bailo, bailas, baila, bailamos, bailáis, bailan"]
  ],
  exercises: [
    { q: "选择：¿___ a mi hermana?", opts: ["Conoces", "Sabes", "Puedes"], a: "Conoces" },
    { q: "选择：¿___ cocinar? — Sí, muy bien.", opts: ["Sabes", "Conoces", "Puedes"], a: "Sabes" },
    { q: "变形：conocer，yo → / saber，yo →", a: "conozco / sé" },
    { q: "填空：Conozco ___ Ana, pero no conozco ___ Madrid.", a: "a / （不加）" },
    { q: "翻译：我不知道。", a: "No sé." },
    { q: "翻译：我认识一个西班牙医生。", a: "Conozco a un médico español." }
  ],
  task: "说 6 句：2 句 sé + 技能，2 句 no sé + 技能，2 句 conozco a + 人，录音。"
},

w10d2: {
  title: "在餐厅",
  goal: "学完能在餐厅从进门、点菜到结账全程用西语。",
  recap: [
    { q: "上一课：saber 的「我」？", a: "sé" },
    { q: "上一课：「我认识 Ana」要加什么？", a: "人称 a：Conozco a Ana." },
    { q: "上一课：conocer 的「我」？", a: "conozco" }
  ],
  steps: [
    { explain: [
        { p: "餐厅有一套固定句子。进门：**Una mesa para dos, por favor**——**para** 是「给；为了」，una mesa para dos = 给两个人的桌子。点菜最礼貌的说法是 **Quisiera…**（我想要）：它是 querer 的客气形状，比 quiero 软；或者 **Para mí, …**（给我来……，mí 带符号 = 我）。" },
        { table: { head: ["谁", "说什么", "意思"], rows: [["你", "Una mesa para dos, por favor.", "请给两人一张桌子。"], ["服务员", "¿Qué quiere?", "您想要什么？"], ["你", "Quisiera el menú del día.", "我想要当日套餐。"], ["你", "Para mí, el pescado.", "我要鱼。"]] } }
      ],
      check: [
        { q: "翻译：请给三人一张桌子。", a: "Una mesa para tres, por favor." },
        { q: "选择：比 quiero 客气的说法", opts: ["Quisiera", "Sé", "Puedo"], a: "Quisiera" }
      ]
    },
    { explain: [
        { p: "**el menú del día**（当日套餐）= 前菜 + 主菜 + 甜点或咖啡，价格固定，西班牙午餐很常见。食物：**el pescado**（鱼）、**el pollo**（鸡肉）、**la ensalada**（沙拉）、**el postre**（甜点）；喝的：el agua、el vino、**la cerveza**（啤酒）。说「喝的要……」用 **Para beber, …**（beber 是第 8 周的「喝」）。" },
        { table: { head: ["中文", "西语"], rows: [["鱼", "el pescado"], ["鸡肉", "el pollo（ll 读呀）"], ["沙拉", "la ensalada"], ["甜点", "el postre"], ["啤酒", "la cerveza"], ["喝的要一瓶水", "Para beber, un agua."]] } }
      ],
      check: [
        { q: "翻译：我要鱼和一份沙拉。", a: "Para mí, el pescado y una ensalada." },
        { q: "选择：「鸡肉」", opts: ["el pollo", "el pescado", "el postre"], a: "el pollo" }
      ]
    },
    { explain: [
        { p: "服务员会问 **¿Algo más?**（还要别的吗？= algo 什么 + más 更多），答 No, gracias 或 Sí, un postre。结账：**La cuenta, por favor**（cuenta 账单）；问价钱用第 2 周的 ¿Cuánto es?。服务员对你用 usted，你也用 usted 回应，这是餐厅里的默认礼貌。" },
        { table: { head: ["谁", "说什么"], rows: [["服务员", "¿Algo más?"], ["你", "No, gracias. La cuenta, por favor."], ["你", "¿Cuánto es?"], ["服务员", "Son veinte euros."]] } }
      ],
      check: [
        { q: "翻译：请结账。", a: "La cuenta, por favor." },
        { q: "选择：¿Algo más? — ___", opts: ["No, gracias.", "Igualmente.", "Yo tampoco."], a: "No, gracias." }
      ]
    }
  ],
  examples: [
    ["Una mesa para dos, por favor.", "请给两人一张桌子。", "una mesa（一张桌子）+ para（给）+ dos（两人）+ por favor（请）。"],
    ["Quisiera el menú del día.", "我想要当日套餐。", "quisiera（我想要，querer 的礼貌形状）+ el menú（套餐）+ del día（当天的，de + el）。"],
    ["Para mí, el pescado con arroz y una ensalada.", "我要鱼配米饭和一份沙拉。", "para mí（给我）+ el pescado（鱼）+ con arroz（配米饭）+ y + una ensalada（一份沙拉）。"],
    ["Para beber, una cerveza y un agua.", "喝的要一杯啤酒和一瓶水。", "para beber（用来喝的）+ una cerveza（一杯啤酒）+ y + un agua（一瓶水，agua 单数用 un / el）。"],
    ["¿Algo más? — No, gracias. El pollo está muy bueno.", "还要别的吗？——不了，谢谢。鸡肉很好吃。", "algo（什么）+ más（更多）→ 还要别的吗；no, gracias；el pollo（鸡肉）+ está muy bueno（很好吃，说食物好吃用 estar）。"],
    ["La cuenta, por favor. ¿Cuánto es? — Son veinte euros.", "请结账。多少钱？——二十欧元。", "la cuenta（账单）+ por favor；cuánto（多少）+ es（是）；son（是，复数）+ veinte euros（二十欧元）。"]
  ],
  vocab: [
    ["para", "给；为了", "[PA-ra]；una mesa para dos"],
    ["quisiera", "我想要（礼貌）", "[ki-SIE-ra]，querer 的客气形状，只需记这一个"],
    ["para mí", "给我（来……）", "mí 带符号 = 我，区别 mi（我的）"],
    ["el menú del día", "当日套餐", "[me-NÚ]；del = de + el"],
    ["el pescado", "鱼（食物）", "[pes-KA-do]"],
    ["el pollo", "鸡肉", "[PO-yo]，ll 读呀"],
    ["la ensalada", "沙拉", "[en-sa-LA-da]"],
    ["el postre", "甜点", "[POS-tre]"],
    ["la cerveza", "啤酒", "[zer-BE-za]，z 读 θ（拉美 s）"],
    ["para beber", "喝的要……", "para + beber（喝，原形）"],
    ["¿Algo más?", "还要别的吗？", "algo 什么 + más 更多"],
    ["la cuenta", "账单", "[KUEN-ta]；La cuenta, por favor."]
  ],
  exercises: [
    { q: "翻译：请给两人一张桌子。", a: "Una mesa para dos, por favor." },
    { q: "翻译：我要鸡肉和一杯啤酒。", a: "Para mí, el pollo y una cerveza." },
    { q: "选择：___ el menú del día.", opts: ["Quisiera", "Sé", "Conozco"], a: "Quisiera" },
    { q: "选择：¿Algo más? — ___", opts: ["No, gracias.", "Sí, claro, adiós.", "Igualmente."], a: "No, gracias." },
    { q: "翻译：请结账。多少钱？", a: "La cuenta, por favor. ¿Cuánto es?" },
    { q: "选择：「喝的要水」", opts: ["Para beber, agua.", "Para comer, agua.", "Para mí, la cuenta."], a: "Para beber, agua." }
  ],
  task: "自己扮演两个角色，把从进门到结账的 8 句对话录一遍：服务员用 usted，你用 quisiera / para mí。"
},

w10d3: {
  title: "频率与作息：siempre、por la mañana",
  goal: "学完能说「我总是在家吃早饭」「我早上工作、晚上学习」「每天……」。",
  recap: [
    { q: "上一课：「我想要（客气）」怎么说？", a: "Quisiera…" },
    { q: "上一课：「请结账」？", a: "La cuenta, por favor." },
    { q: "上一课：「还要别的吗」？", a: "¿Algo más?" }
  ],
  steps: [
    { explain: [
        { p: "说「多常做」有三个词：**siempre**（总是）、**a veces**（有时，字面「在几次」）、nunca（从不，上周学过）。它们放在动词前面最自然：Siempre como en casa。再学一个规则 -ar 动词 **desayunar**（吃早饭）：desayuno, desayunas, desayuna…；desayuno 同时也是名词「早饭」，就像 trabajo 既是「我工作」也是「工作」。" },
        { table: { head: ["频率", "西语", "例句"], rows: [["总是", "siempre", "Siempre desayuno en casa."], ["有时", "a veces", "A veces como en un restaurante."], ["从不", "nunca", "Nunca bebo vino."]] } }
      ],
      check: [
        { q: "填空：___ como en casa.（总是）", a: "Siempre" },
        { q: "选择：「有时」", opts: ["a veces", "siempre", "nunca"], a: "a veces" }
      ]
    },
    { explain: [
        { p: "说一天的时段用 **por**：**por la mañana**（在早上）、**por la tarde**（在下午）、**por la noche**（在晚上）。它和上周的 de la mañana 分工明确：跟着具体钟点用 **de**（a las ocho de la mañana），不带钟点用 **por**（Trabajo por la mañana）。「每天」是 **todos los días**（todos 所有 + los días 这些天）；「每周一」是 **los lunes**（lunes 单复同形，加 los 表示「每逢」）。" },
        { table: { head: ["中文", "西语", "说明"], rows: [["早上（不带钟点）", "por la mañana", "por"], ["早上八点", "a las ocho de la mañana", "de"], ["每天", "todos los días", "todos + los días"], ["每周一", "los lunes", "los + lunes"]] } }
      ],
      check: [
        { q: "填空：Estudio ___ la noche.（在晚上，不带钟点）", a: "por" },
        { q: "翻译：每天", a: "todos los días" }
      ]
    }
  ],
  examples: [
    ["Siempre desayuno en casa.", "我总是在家吃早饭。", "siempre（总是）+ desayuno（我吃早饭，desayunar 去 -ar 加 -o）+ en casa（在家）。"],
    ["Por la mañana trabajo y por la tarde estudio español.", "我早上工作，下午学西语。", "por la mañana（在早上）+ trabajo（我工作）+ y + por la tarde（在下午）+ estudio español。"],
    ["Todos los días como a las dos.", "我每天两点吃午饭。", "todos（所有）+ los días（这些天）→ 每天；como（我吃）+ a las dos（在两点）。"],
    ["A veces vamos al cine por la noche.", "我们有时晚上去看电影。", "a veces（有时）+ vamos（我们去）+ al cine（去电影院）+ por la noche（在晚上）。"],
    ["Nunca bebo café por la noche.", "我晚上从不喝咖啡。", "nunca（从不，放动词前不加 no）+ bebo（我喝）+ café + por la noche。"],
    ["Los lunes desayuno con mi madre. ¿Y tú, qué desayunas?", "每周一我和妈妈一起吃早饭。你呢，你早饭吃什么？", "los lunes（每周一）+ desayuno（我吃早饭）+ con mi madre；y tú（你呢）+ qué（什么）+ desayunas（你吃早饭，-as）。"]
  ],
  vocab: [
    ["siempre", "总是", "[SIEM-pre]，放动词前"],
    ["a veces", "有时", "[a BE-zes]，字面「在几次」"],
    ["desayunar", "吃早饭（原形）", "[de-sa-yu-NAR]，规则 -ar：desayuno, desayunas, desayuna, desayunamos, desayunáis, desayunan"],
    ["desayuno / desayunas / desayuna / desayunamos / desayunáis / desayunan", "我吃早饭 / 你吃早饭 / 他吃早饭 / 我们吃早饭 / 你们吃早饭 / 他们吃早饭", "el desayuno 也是名词「早饭」"],
    ["por la mañana", "在早上", "不带钟点用 por"],
    ["por la tarde", "在下午", ""],
    ["por la noche", "在晚上", ""],
    ["todos los días", "每天", "todos 所有 + los días"],
    ["los lunes", "每周一", "lunes 单复同形；los + 星期 = 每逢"]
  ],
  exercises: [
    { q: "填空：___ desayuno en casa.（总是）", a: "Siempre" },
    { q: "选择：Trabajo ___ la mañana.（不带钟点）", opts: ["por", "de", "a"], a: "por" },
    { q: "选择：Como a las dos ___ la tarde.（带钟点）", opts: ["de", "por", "en"], a: "de" },
    { q: "翻译：我每天学西语。", a: "Estudio español todos los días." },
    { q: "翻译：我们有时晚上去餐厅。", a: "A veces vamos a un restaurante por la noche." },
    { q: "变形：desayunar，nosotros →", a: "desayunamos" }
  ],
  task: "说出你一天的作息：早上、下午、晚上各做什么，用上 siempre / a veces / nunca 各一次，录音。"
},

w10d4: {
  title: "总复习 I：四个核心动词",
  goal: "把 ser / estar / tener / hay 的分工和本阶段所有动词排成两张表，一眼看清。",
  recap: [
    { q: "上一课：「总是」？", a: "siempre" },
    { q: "上一课：「每天」？", a: "todos los días" },
    { q: "上一课：por la mañana 和 de la mañana 怎么分？", a: "带钟点用 de，不带钟点用 por" }
  ],
  steps: [
    { explain: [
        { p: "第 3–7 周的四个核心动词各管一块：**ser** 管不变的（身份、来源、职业）；**estar** 管会变的（位置、心情、累病忙）；**tener** 管拥有、年龄、饿渴冷热；**hay** 只有一个形状，管「有没有、存在」。**hay 还是 está**：第一次提到、不确定有没有 → hay（Hay un banco cerca）；已知的具体东西在哪 → está（El banco está cerca）。" },
        { table: { head: ["动词", "yo", "tú", "él", "nosotros", "ellos", "用来说"], rows: [["ser", "soy", "eres", "es", "somos", "son", "身份、来源、职业"], ["estar", "estoy", "estás", "está", "estamos", "están", "位置、状态、心情"], ["tener", "tengo", "tienes", "tiene", "tenemos", "tienen", "拥有、年龄、饿渴"], ["hay", "—", "—", "hay", "—", "—", "存在、有没有"]] } }
      ],
      check: [
        { q: "选择：___ un supermercado cerca de mi casa.", opts: ["Hay", "Está", "Es"], a: "Hay" },
        { q: "选择：Mi hermana ___ profesora y hoy ___ cansada.", opts: ["es / está", "está / es", "es / es"], a: "es / está" }
      ]
    },
    { explain: [
        { p: "第 8–10 周的动词分两类：**规则**的（hablar / comer / vivir 三张表，加 trabajar、estudiar、beber、leer、escribir、abrir、desayunar 等）和**不规则**的六个：ir、hacer、poder、querer、saber、conocer。不规则的也有规律：hacer / saber / conocer 只有「我」怪；poder / querer 是靴子形；只有 ir 要整个背。" },
        { table: { head: ["动词", "yo", "tú", "él", "nosotros", "ellos"], rows: [["hablar", "hablo", "hablas", "habla", "hablamos", "hablan"], ["comer", "como", "comes", "come", "comemos", "comen"], ["vivir", "vivo", "vives", "vive", "vivimos", "viven"], ["ir", "voy", "vas", "va", "vamos", "van"], ["hacer", "hago", "haces", "hace", "hacemos", "hacen"], ["poder", "puedo", "puedes", "puede", "podemos", "pueden"], ["querer", "quiero", "quieres", "quiere", "queremos", "quieren"], ["saber", "sé", "sabes", "sabe", "sabemos", "saben"], ["conocer", "conozco", "conoces", "conoce", "conocemos", "conocen"]] } }
      ],
      check: [
        { q: "变形：ir，ellos / hacer，yo / querer，nosotros →", a: "van / hago / queremos" },
        { q: "选择：¿___ nadar? — Sí, pero hoy no ___.", opts: ["Sabes / puedo", "Puedes / sé", "Conoces / puedo"], a: "Sabes / puedo" }
      ]
    },
    { explain: [
        { p: "顺便补几个说自己生活时绕不开的词：**la empresa**（公司）、**la vida**（生活）、**el tiempo**（时间）、**libre**（空闲的）：No tengo tiempo（我没时间）用 tener，因为时间是「拥有」的东西；**otro / otra**（另一个）：¿Quieres otro café?；**entonces**（那么）用来接话。" },
        { table: { head: ["中文", "西语", "用哪个核心动词"], rows: [["我在一家公司工作", "Trabajo en una empresa.", "—"], ["我没有时间", "No tengo tiempo.", "tener"], ["我周末有空", "Tengo tiempo libre el fin de semana.", "tener"], ["马德里的生活很美好", "La vida en Madrid es bonita.", "ser"]] } }
      ],
      check: [
        { q: "翻译：我没有时间。", a: "No tengo tiempo." },
        { q: "填空：Hay ___ problema.（另一个）", a: "otro" }
      ]
    }
  ],
  examples: [
    ["Trabajo en una empresa y estudio español por la noche.", "我在一家公司工作，晚上学西语。", "trabajo（我工作）+ en una empresa（在一家公司）+ y + estudio español + por la noche（在晚上）。"],
    ["Hay un banco cerca de mi casa. El banco está al lado del supermercado.", "我家附近有一家银行。那家银行在超市旁边。", "hay（有，第一次提到）+ un banco + cerca de mi casa；el banco（已知的那家）+ está（在）+ al lado del（在……旁边）+ supermercado。"],
    ["No tengo tiempo hoy, tengo mucho trabajo.", "我今天没时间，工作很多。", "no tengo（我没有）+ tiempo（时间）+ hoy；tengo mucho trabajo（我有很多工作）。"],
    ["El fin de semana tengo tiempo libre y voy al parque.", "周末我有空，就去公园。", "el fin de semana（周末）+ tengo（我有）+ tiempo libre（空闲时间）+ y + voy（我去）+ al parque。"],
    ["¿Quieres otro café? — No, gracias. Entonces, ¿vamos?", "你还要一杯咖啡吗？——不了，谢谢。那么，我们走吧？", "quieres（你想要）+ otro（另一个）+ café；no, gracias；entonces（那么）+ vamos（我们走，语调上扬）。"],
    ["Mi vida en Madrid es muy bonita: tengo amigos y trabajo.", "我在马德里的生活很美好：我有朋友和工作。", "mi vida（我的生活）+ en Madrid + es（是，用 ser 说性质）+ muy bonita；tengo（我有）+ amigos + y + trabajo（工作，名词）。"]
  ],
  vocab: [
    ["la empresa", "公司", "[em-PRE-sa]"],
    ["la vida", "生活", "[BI-da]"],
    ["el tiempo", "时间", "[TIEM-po]；no tengo tiempo 我没时间"],
    ["libre", "空闲的；自由的", "[LI-bre]，阴阳同形；tiempo libre"],
    ["otro/a", "另一个；再一个", "[O-tro]，前面不加 un：otro café"],
    ["entonces", "那么；然后", "[en-TON-zes]，用来接话"]
  ],
  exercises: [
    { q: "选择：El supermercado ___ cerca de mi casa.", opts: ["está", "hay", "es"], a: "está" },
    { q: "选择：___ veinte años.", opts: ["Tengo", "Soy", "Estoy"], a: "Tengo" },
    { q: "选择：Mi padre ___ médico y ahora ___ en el hospital.", opts: ["es / está", "está / es", "es / hay"], a: "es / está" },
    { q: "变形：saber，yo / conocer，yo / poder，nosotros →", a: "sé / conozco / podemos" },
    { q: "翻译：我在一家公司工作，没有很多空闲时间。", a: "Trabajo en una empresa y no tengo mucho tiempo libre." },
    { q: "翻译：你还要一杯茶吗？", a: "¿Quieres otro té?" }
  ],
  task: "不看表，口头把表里 9 个动词各按 yo / tú / él / nosotros / ellos 说一遍，计时，目标 4 分钟内。"
},

w10d5: {
  title: "总复习 II：里程碑 1",
  goal: "录一段 2 分钟的介绍：我是谁、我的家和家人、我一天做什么。",
  recap: [
    { q: "上一课：「公司」？", a: "la empresa" },
    { q: "上一课：hay 还是 está：第一次提到、不确定有没有用哪个？", a: "hay" },
    { q: "上一课：「另一个」？", a: "otro / otra" }
  ],
  steps: [
    { explain: [
        { p: "第一段：我是谁。把第 3–7 周的内容串起来——名字（me llamo）、来源（soy de）、国籍职业（soy…）、年龄（tengo … años）、住处（vivo en）、家庭（somos…, tengo…）。每句都是你已经会的，只是连着说。" },
        { table: { head: ["说什么", "句子", "来自"], rows: [["名字、来源", "Me llamo Wei, soy de China.", "W3"], ["职业", "Soy ingeniero.", "W4"], ["年龄", "Tengo treinta años.", "W7"], ["住处", "Vivo en Shanghái con mi familia.", "W8"], ["家庭", "Somos cuatro: mis padres, mi hermana y yo.", "W4, W7"]] } }
      ],
      check: [
        { q: "翻译：我 30 岁，和家人住在上海。", a: "Tengo treinta años y vivo en Shanghái con mi familia." },
        { q: "翻译：我们四口人：父母、姐姐和我。", a: "Somos cuatro: mis padres, mi hermana y yo." }
      ]
    },
    { explain: [
        { p: "第二段：我的家。用 ser 说性质（Mi casa es pequeña），用 tener 说有几个房间（tiene dos habitaciones，**la habitación** = 房间），用 hay 说家里、街区有什么（hay un mercado），用 estar 说在哪里（está cerca del centro）。**el barrio** = 街区；**tranquilo / tranquila** = 安静的，配名词性别。" },
        { table: { head: ["说什么", "句子", "用哪个动词"], rows: [["房子性质", "Mi casa es pequeña pero bonita.", "ser"], ["有几个房间", "Tiene tres habitaciones y una cocina.", "tener"], ["街区性质", "Mi barrio es tranquilo.", "ser"], ["位置", "Está cerca del centro.", "estar"], ["附近有什么", "Hay un mercado y un parque.", "hay"]] } }
      ],
      check: [
        { q: "翻译：我家有两个房间和一个厨房。", a: "Mi casa tiene dos habitaciones y una cocina." },
        { q: "选择：「街区」", opts: ["el barrio", "la habitación", "el piso"], a: "el barrio" }
      ]
    },
    { explain: [
        { p: "第三段：我的一天。用上周的时段词和频率词，再加两个顺序词：**primero**（首先）、**después**（之后）：Primero desayuno, después voy al trabajo a las nueve。结束语用 **Hasta pronto**（很快见，pronto = 快）。三段连起来大约 2 分钟——这就是里程碑 1。录音后和第 1 周、第 4 周的录音放在一起听。" },
        { table: { head: ["顺序", "句子"], rows: [["首先", "Primero desayuno en casa."], ["之后", "Después voy al trabajo a las nueve."], ["中午", "Como a las dos con mis amigos."], ["晚上", "Por la noche estudio español y a veces leo."], ["结束", "Hasta pronto."]] } }
      ],
      check: [
        { q: "填空：___ como, ___ estudio.（首先 / 之后）", a: "Primero / después" },
        { q: "选择：「很快见」", opts: ["Hasta pronto", "Hasta mañana", "Hasta luego"], a: "Hasta pronto" }
      ]
    }
  ],
  examples: [
    ["Hola, me llamo Wei, soy de China y soy ingeniero.", "你好，我叫伟，来自中国，是工程师。", "me llamo（我叫）+ Wei + soy de（我来自）+ China + y + soy ingeniero（我是工程师，不加 un）。"],
    ["Tengo treinta años y vivo en Shanghái con mi familia. Somos cuatro.", "我 30 岁，和家人住在上海。我们四口人。", "tengo treinta años（我 30 岁）+ y + vivo en（我住在）+ Shanghái + con mi familia（和我的家人）；somos cuatro（我们是四个人）。"],
    ["Mi casa es pequeña pero bonita: tiene tres habitaciones y una cocina grande.", "我家小但漂亮：有三个房间和一个大厨房。", "mi casa + es（是，说性质用 ser）+ pequeña（小的，阴性）+ pero（但是）+ bonita；tiene（它有）+ tres habitaciones（三个房间）+ y + una cocina grande（一个大厨房）。"],
    ["Mi barrio es tranquilo y está cerca del centro. Hay un mercado y un parque.", "我的街区很安静，靠近市中心。有一个市场和一个公园。", "mi barrio（我的街区）+ es tranquilo（安静的，配阳性 barrio）+ y + está（在）+ cerca del centro；hay（有）+ un mercado + y + un parque。"],
    ["Primero desayuno, después voy al trabajo a las nueve.", "我先吃早饭，然后九点去上班。", "primero（首先）+ desayuno（我吃早饭）+ después（之后）+ voy（我去）+ al trabajo（去工作的地方）+ a las nueve（在九点）。"],
    ["Por la noche como con mi familia y a veces leo un libro. Hasta pronto.", "晚上我和家人吃饭，有时读一本书。很快见。", "por la noche（在晚上）+ como（我吃）+ con mi familia + y + a veces（有时）+ leo（我读）+ un libro；hasta pronto（很快见）。"]
  ],
  vocab: [
    ["la habitación / las habitaciones", "房间 / 房间们", "[a-bi-ta-ZIÓN]，h 不发音；复数去符号加 -es"],
    ["el barrio", "街区", "[BA-rrio]，rr 颤音"],
    ["tranquilo/a", "安静的；平静的", "[tran-KI-lo]，qu 读 k"],
    ["primero", "首先", "[pri-ME-ro]"],
    ["después", "之后；然后", "[des-PUÉS]"],
    ["hasta pronto", "很快见", "hasta 直到 + pronto 快"]
  ],
  exercises: [
    { q: "翻译：你好，我叫 Marta，我是墨西哥人（女），住在马德里。", a: "Hola, me llamo Marta, soy mexicana y vivo en Madrid." },
    { q: "翻译：我家有三个房间，在市中心附近。", a: "Mi casa tiene tres habitaciones y está cerca del centro." },
    { q: "选择：Mi barrio ___ tranquilo y ___ cerca de la playa.", opts: ["es / está", "está / es", "hay / está"], a: "es / está" },
    { q: "填空：___ desayuno, ___ voy a la oficina.", a: "Primero / después" },
    { q: "翻译：晚上我学西语，有时看电视。", a: "Por la noche estudio español y a veces miro la televisión." },
    { q: "翻译：我们周末去海滩。很快见。", a: "El fin de semana vamos a la playa. Hasta pronto." }
  ],
  task: "录 2 分钟：我是谁（5 句）、我的家（4 句）、我的一天（5 句），结尾说 Hasta pronto；和第 1 周、第 4 周的录音放在一起听。"
}

});
