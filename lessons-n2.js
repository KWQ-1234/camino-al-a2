window.LESSONS = Object.assign(window.LESSONS || {}, {

/* ═══════════ 第 5 周 · 东西与地方 I ═══════════ */

w5d1: {
  title: "名词的性别与 el / la",
  goal: "学完能给一个名词配上 el 或 la，知道 -o 多为阳性、-a 多为阴性。",
  recap: [
    { q: "上一课：ser 的六个形状？", a: "soy, eres, es, somos, sois, son" },
    { q: "上一课：对陌生人问名字用哪句？", a: "¿Cómo se llama usted?" },
    { q: "上一课：「我也是学生」怎么说？", a: "Yo también soy estudiante." }
  ],
  steps: [
    { explain: [
        { p: "西语的每个名词都有**性别**：不是阳性就是阴性。这和真实的性别没关系，桌子、书都有性别，只是语法上的分类。判断的第一条办法看结尾：**-o 结尾多为阳性，-a 结尾多为阴性**。第 3 周的 chino / china 就是同一条规律，只是那时用在人身上。" },
        { table: { head: ["结尾", "性别", "第 1 周学过的词"], rows: [["-o", "阳性", "gato 猫、perro 狗、zapato 鞋"], ["-a", "阴性", "mesa 桌子、casa 房子、rosa 玫瑰"]] } },
        { tip: "以后每学一个名词，先看结尾：-o 想成「他」，-a 想成「她」。" }
      ],
      check: [
        { q: "选择：silla（椅子）是什么性？", opts: ["阴性（-a 结尾）", "阳性（-a 结尾）"], a: "阴性（-a 结尾）" },
        { q: "选择：libro（书）是什么性？", opts: ["阳性（-o 结尾）", "阴性（-o 结尾）"], a: "阳性（-o 结尾）" }
      ]
    },
    { explain: [
        { p: "西语名词前面通常放一个小词，作用像英语的 the，意思接近「这个 / 那个」，同时**带着性别标签**：阳性用 **el**，阴性用 **la**。所以「书」不是 libro，而是 el libro；「椅子」是 la silla。第 1–2 周的名词都没带这个词，从今天起一律带上：la mesa、la casa、el gato。" },
        { table: { head: ["性别", "小词", "例子"], rows: [["阳性", "el", "el libro 书、el coche 汽车、el gato 猫"], ["阴性", "la", "la silla 椅子、la ventana 窗户、la puerta 门、la cosa 东西"]] } },
        { p: "注意 **el**（这个）没有符号，第 4 周的 **él**（他）有符号，是两个词。以 -e 结尾的名词看不出性别，要连冠词一起记：el coche 是阳性，la noche 是阴性。" }
      ],
      check: [
        { q: "填 el 或 la：___ puerta（门）", a: "la" },
        { q: "选择：el 和 él 的区别", opts: ["el 是「这个」，él 是「他」", "一样，都是「他」", "el 是「她」"], a: "el 是「这个」，él 是「他」" }
      ]
    },
    { explain: [
        { p: "两个必须记的例外：**el día**（天）以 -a 结尾却是阳性，所以第 2 周的问候是 buenos días，不是 buenas；**la mano**（手）以 -o 结尾却是阴性。这两个词太常用，今天就把它们记死。" },
        { p: "有了冠词就能说「这本书是 Ana 的」：**El libro es de Ana**。de 在第 3 周是「来自」，这里是它的第二个意思「……的」：es de Ana = 属于 Ana。问「这是什么」用第 4 周的 qué：**¿Qué es? — Es la puerta.**" }
      ],
      check: [
        { q: "填 el 或 la：___ día（天）", a: "el（例外）" },
        { q: "翻译：这本书是 Juan 的。", a: "El libro es de Juan." }
      ]
    }
  ],
  examples: [
    ["El libro es de Ana.", "这本书是 Ana 的。", "el（这个，阳性冠词）+ libro（书，-o 阳性）+ es（是，ser 的「它」形状）+ de（……的）+ Ana → 这本书属于 Ana。"],
    ["La silla y la mesa son de mi mamá.", "椅子和桌子是我妈妈的。", "la silla（椅子，-a 阴性）+ y（和）+ la mesa（桌子，阴性）+ son（是，两样东西所以用复数形状）+ de mi mamá（我妈妈的）。"],
    ["¿Qué es? — Es la puerta.", "这是什么？——是门。", "qué（什么）+ es（它是）；es + la puerta（门，-a 阴性用 la）。"],
    ["El coche es de Juan y es muy caro.", "这辆车是 Juan 的，很贵。", "el coche（汽车，-e 结尾看不出性别，要记住是阳性）+ es de Juan（是 Juan 的）+ y + es muy caro（很贵，caro 配阳性用 -o）。"],
    ["La ventana es de la casa de Ana.", "这扇窗户是 Ana 家的。", "la ventana（窗户，阴性）+ es de（属于）+ la casa（房子，阴性）+ de Ana（Ana 的）。"],
    ["La cosa es de mi amigo Pedro.", "这东西是我朋友 Pedro 的。", "la cosa（东西，阴性）+ es de（属于）+ mi amigo（我朋友）+ Pedro。"]
  ],
  vocab: [
    ["el", "这个（阳性冠词）", "[EL]，没符号；él 有符号是「他」"],
    ["la", "这个（阴性冠词）", "[LA]"],
    ["el libro", "书", "[LI-bro]，-o 阳性"],
    ["la silla", "椅子", "[SI-ya]，-a 阴性"],
    ["la ventana", "窗户", "[ben-TA-na]"],
    ["la puerta", "门", "[PUER-ta]"],
    ["el coche", "汽车", "[CO-che]，-e 结尾要记；拉美说 el carro / el auto"],
    ["la cosa", "东西", "[CO-sa]"]
  ],
  exercises: [
    { q: "填 el 或 la：___ libro", a: "el" },
    { q: "填 el 或 la：___ ventana", a: "la" },
    { q: "选择：mano（手）前面用", opts: ["la（例外）", "el"], a: "la（例外）" },
    { q: "选择：「这辆车」是", opts: ["el coche", "la coche", "él coche"], a: "el coche" },
    { q: "翻译：这把椅子是我妈妈的。", a: "La silla es de mi mamá." },
    { q: "翻译：这是什么？——是书。", a: "¿Qué es? — Es el libro." }
  ],
  task: "环顾房间，指着 8 样东西说 el / la + 名词（不会的词先用今天的 8 个），录音，注意每个词都带冠词。"
},

w5d2: {
  title: "un / una 与 hay",
  goal: "学完能说「有一张床」「有一个问题」「没问题」。",
  recap: [
    { q: "上一课：-o 结尾的名词多为什么性？", a: "阳性" },
    { q: "上一课：「门」带冠词怎么说？", a: "la puerta" },
    { q: "上一课：两个例外是？", a: "el día（阳性）、la mano（阴性）" }
  ],
  steps: [
    { explain: [
        { p: "昨天的 el / la 是「这个」（特指）。说「一个」（随便哪一个）用另一对小词：阳性 **un**，阴性 **una**。它们是这样来的：第 2 周数字 1 有两个写法 uno / un，**un** 就是 uno 放在名词前掉了 -o；**una** 是 uno 把 -o 换成 -a，和 chino → china 同一条规律。" },
        { table: { head: ["性别", "这个（特指）", "一个（泛指）"], rows: [["阳性", "el libro", "un libro"], ["阳性", "el baño 洗手间", "un baño"], ["阴性", "la cama 床", "una cama"], ["阴性", "la cocina 厨房", "una cocina"]] } }
      ],
      check: [
        { q: "填 un 或 una：___ cama（一张床）", a: "una" },
        { q: "选择：un 是从哪个词来的？", opts: ["uno（数字 1）", "el", "usted"], a: "uno（数字 1）" }
      ]
    },
    { explain: [
        { p: "说「有一张床」用 **hay**（有、存在）。hay 和 ser 最大的不同：它**只有这一个形状**，不管后面是一样东西还是很多，不管谁说，都是 hay。**Hay una cama**（有一张床）。问「有没有」不用改语序，语调上扬即可：**¿Hay un baño?**（有洗手间吗？）否定在前面加 no：**No hay problema**（没问题）。" },
        { table: { head: ["中文", "西语"], rows: [["有一张床", "Hay una cama."], ["有洗手间吗？", "¿Hay un baño?"], ["有一个衣柜和一盏灯", "Hay un armario y una lámpara."], ["没问题", "No hay problema."]] } },
        { tip: "hay 后面接 un / una 或数字，**不接 el / la**：说「有那本书」不能用 hay，要用下周的 está。hay 说的是「存在不存在」，不是「在哪里」。" }
      ],
      check: [
        { q: "填空：___ una cama.（有一张床）", a: "Hay" },
        { q: "选择：hay 有几个形状？", opts: ["一个，永远是 hay", "六个，像 ser", "两个，单数和复数"], a: "一个，永远是 hay" }
      ]
    },
    { explain: [
        { p: "一个新的例外：**el problema**（问题）以 -a 结尾却是阳性，因为它和一批以 **-ma** 结尾的词一样来自希腊语，这一批全是阳性。所以是 un problema，不是 una problema。和昨天的 el día 放在一起记：-a 结尾的例外都是阳性的。" }
      ],
      check: [
        { q: "填 un 或 una：___ problema", a: "un（-ma 阳性）" },
        { q: "翻译：有问题吗？——没有，没问题。", a: "¿Hay un problema? — No, no hay problema." }
      ]
    }
  ],
  examples: [
    ["Hay una cama.", "有一张床。", "hay（有，只有这一个形状）+ una（一个，阴性）+ cama（床，-a 阴性）。"],
    ["Hay un armario y una lámpara.", "有一个衣柜和一盏灯。", "hay + un armario（一个衣柜，-o 阳性用 un）+ y + una lámpara（一盏灯，阴性用 una）。"],
    ["¿Hay un baño? — Sí, hay un baño.", "有洗手间吗？——有，有一个洗手间。", "hay + un baño（一个洗手间），语调上扬成问句；回答 sí + 同一句。"],
    ["Hay una cocina y una mesa.", "有一个厨房和一张桌子。", "hay + una cocina（厨房，阴性）+ y + una mesa（桌子，阴性）。"],
    ["¿Hay un problema? — No, no hay problema.", "有问题吗？——不，没问题。", "hay + un problema（问题，-ma 结尾是阳性，所以用 un）；no（不）+ no hay problema（没有问题）。"],
    ["Hay un gato y un perro.", "有一只猫和一条狗。", "hay + un gato（猫，阳性）+ y + un perro（狗，阳性）。第 1 周的词加上 un 就能用。"]
  ],
  vocab: [
    ["un", "一个（阳性）", "uno 在名词前掉 -o"],
    ["una", "一个（阴性）", "[U-na]"],
    ["hay", "有；存在", "[AI]，h 不发音；只有一个形状，后面不接 el / la"],
    ["el baño", "洗手间", "[BA-nyo]"],
    ["la cama", "床", "[CA-ma]"],
    ["la cocina", "厨房", "[co-CI-na]"],
    ["el armario", "衣柜", "[ar-MA-rio]"],
    ["la lámpara", "灯", "[LÁM-pa-ra]，有符号"],
    ["el problema", "问题（-ma 阳性）", "-ma 结尾的词来自希腊语，阳性"]
  ],
  exercises: [
    { q: "填 un 或 una：___ lámpara", a: "una" },
    { q: "填 un 或 una：___ armario", a: "un" },
    { q: "选择：「有一个洗手间」", opts: ["Hay un baño.", "Hay el baño.", "Es un baño."], a: "Hay un baño." },
    { q: "改错：Hay la cama.", a: "Hay una cama.（hay 后面不接 la）" },
    { q: "翻译：没问题。", a: "No hay problema." },
    { q: "翻译：有一张床和一个衣柜。", a: "Hay una cama y un armario." }
  ],
  task: "用 hay 说 6 句描述自己的房间（Hay una cama, hay un armario…），录音。"
},

w5d3: {
  title: "复数与 los / las",
  goal: "学完能把名词变成复数，并配上 los / las / unos / unas，会说「有很多……」。",
  recap: [
    { q: "上一课：hay 有几个形状？", a: "一个" },
    { q: "上一课：「一张床」？", a: "una cama" },
    { q: "上一课：hay 后面能接 el / la 吗？", a: "不能，接 un / una 或数字" }
  ],
  steps: [
    { explain: [
        { p: "第 4 周说过 amigo → amigos、español → españoles。今天把复数规则说完整，一共三条：**元音结尾加 -s**；**辅音结尾加 -es**；**-z 结尾把 z 换成 c 再加 -es**（因为 z 后面不能接 e，第 1 周说过 ce 里的 c 已经读 θ 音）。" },
        { table: { head: ["规则", "单数", "复数"], rows: [["元音 + s", "el libro 书", "libros"], ["元音 + s", "la cama 床", "camas"], ["辅音 + es", "la ciudad 城市", "ciudades"], ["辅音 + es", "la flor 花", "flores"], ["-z → -ces", "el lápiz 铅笔", "lápices"]] } },
        { tip: "ciudad、universidad 这类 **-dad 结尾**的词全是阴性，这是继 -a 之后第二条判断阴性的规律。" }
      ],
      check: [
        { q: "变复数：la ciudad →", a: "ciudades" },
        { q: "选择：lápiz 的复数", opts: ["lápices", "lápizes", "lápizs"], a: "lápices" }
      ]
    },
    { explain: [
        { p: "名词变复数，前面的小词也要跟着变：**el → los，la → las**（都是加 s）；**un → unos，una → unas**（一些）。冠词和名词永远同性同数，像一对总是一起出现的搭档。" },
        { table: { head: ["单数", "复数", "意思"], rows: [["el libro", "los libros", "这些书"], ["la flor", "las flores", "这些花"], ["un lápiz", "unos lápices", "一些铅笔"], ["una cosa", "unas cosas", "一些东西"]] } }
      ],
      check: [
        { q: "填 los 或 las：___ flores", a: "las" },
        { q: "翻译：一些铅笔", a: "unos lápices" }
      ]
    },
    { explain: [
        { p: "「很多」是第 1 周的 mucho/a，它也像形容词一样跟名词变：阳性复数 **muchos**，阴性复数 **muchas**。和 hay 连用就是「有很多……」：Hay muchos libros（有很多书），Hay muchas flores（有很多花）。hay 还是不变。" }
      ],
      check: [
        { q: "填空：Hay ___ flores.（有很多花）", a: "muchas" },
        { q: "翻译：有很多学生。", a: "Hay muchos estudiantes." }
      ]
    }
  ],
  examples: [
    ["El lápiz es de Ana y los lápices son de Juan.", "这支铅笔是 Ana 的，这些铅笔是 Juan 的。", "el lápiz（铅笔，单数）+ es de Ana；los lápices（lápiz 的复数，z → ces，冠词 el → los）+ son（复数用 son）+ de Juan。"],
    ["La flor es de mi mamá y las flores son de Marta.", "这朵花是我妈妈的，这些花是 Marta 的。", "la flor（花，辅音结尾）+ es de；las flores（flor + es，la → las）+ son de。"],
    ["Hay unos lápices y unas flores.", "有一些铅笔和一些花。", "hay（有，不变）+ unos lápices（一些铅笔，un → unos）+ y + unas flores（一些花，una → unas）。"],
    ["Pekín y Madrid son ciudades. Pekín es una ciudad de China.", "北京和马德里是城市。北京是中国的一座城市。", "son ciudades（ciudad + es）；es una ciudad（一座城市，-dad 阴性用 una）+ de China（中国的）。"],
    ["Hay muchas universidades. La universidad de Ana es muy buena.", "有很多大学。Ana 的大学很好。", "hay muchas（很多，阴性复数）+ universidades（universidad + es）；la universidad de Ana + es muy buena（很好，buena 配阴性）。"],
    ["Hay muchos libros y muchas cosas.", "有很多书和很多东西。", "hay + muchos libros（阳性复数 -os 配 libros）+ y + muchas cosas（阴性复数 -as 配 cosas）。"]
  ],
  vocab: [
    ["los", "这些（阳性）", "el 的复数"],
    ["las", "这些（阴性）", "la 的复数"],
    ["unos / unas", "一些", "un / una 的复数"],
    ["el lápiz", "铅笔（复数 lápices）", "[LÁ-piz]，z 读 θ"],
    ["lápices", "铅笔（复数）", "z → c 再加 -es，符号保留"],
    ["la ciudad", "城市（复数 ciudades）", "[ciu-DAD]，-dad 阴性"],
    ["la universidad", "大学", "[u-ni-ber-si-DAD]，-dad 阴性"],
    ["la flor", "花（复数 flores）", "[FLOR]"],
    ["muchos / muchas", "很多（复数）", "mucho/a 的复数，跟名词变"]
  ],
  exercises: [
    { q: "变复数：la universidad →", a: "las universidades" },
    { q: "变复数：un lápiz →", a: "unos lápices" },
    { q: "选择：___ flores son de Ana.", opts: ["Las", "Los", "La"], a: "Las" },
    { q: "选择：「有很多书」", opts: ["Hay muchos libros.", "Hay muchas libros.", "Hay mucho libros."], a: "Hay muchos libros." },
    { q: "翻译：有一些花。", a: "Hay unas flores." },
    { q: "翻译：这些铅笔是我朋友的。", a: "Los lápices son de mi amigo." }
  ],
  task: "把第 5 周学的 14 个名词全部变成复数并带上 los / las 说一遍，再用 hay muchos / muchas 说 4 句，录音。"
},

w5d4: {
  title: "estar 表位置 I：está + en",
  goal: "学完能问「……在哪里」，回答「它在……里」。",
  recap: [
    { q: "上一课：lápiz 的复数？", a: "lápices" },
    { q: "上一课：el 的复数？", a: "los" },
    { q: "上一课：「很多花」？", a: "muchas flores" }
  ],
  steps: [
    { explain: [
        { p: "西语有**两个「是」**。第 3–4 周学的 ser 说「是什么」（身份、来源、职业）。今天学第二个：**estar**，专门说「**在哪里**」。它的「它 / 他 / 她」形状是 **está**，和 ser 的 es 对应：es = 它是，está = 它在。注意 está 有符号，重音在 tá。" },
        { table: { head: ["动词", "「它 / 他 / 她」形状", "意思", "例句"], rows: [["ser", "es", "是什么", "El libro es de Ana. 书是 Ana 的"], ["estar", "está", "在哪里", "El libro está… 书在……"]] } }
      ],
      check: [
        { q: "选择：「它在」是", opts: ["está", "es", "hay"], a: "está" },
        { q: "选择：está 和 es 分别来自", opts: ["estar 和 ser", "ser 和 estar", "都来自 ser"], a: "estar 和 ser" }
      ]
    },
    { explain: [
        { p: "está 后面接 **en**（在……里 / 在……上）再接地点：**El libro está en la mesa**（书在桌子上）。en 一个词管「里」和「上」两种情况。地点名词照样带 el / la。今天的 4 个地点：" },
        { table: { head: ["地点", "西语", "例句"], rows: [["银行", "el banco", "Ana está en el banco."], ["超市", "el supermercado", "Mi mamá está en el supermercado."], ["车站", "la estación", "Mi papá está en la estación."], ["学校", "la escuela", "Juan está en la escuela."]] } },
        { tip: "estación 以 -ción 结尾，这类词全是阴性，是判断阴性的第三条规律（前两条：-a、-dad）。" }
      ],
      check: [
        { q: "填空：El libro ___ en la mesa.（书在桌上）", a: "está" },
        { q: "填 el 或 la：___ estación", a: "la（-ción 阴性）" }
      ]
    },
    { explain: [
        { p: "问「……在哪里」：**¿Dónde está + 名词?** dónde 就是第 3 周 ¿De dónde eres? 里的「哪里」，现在不带 de，直接放句首。回答时主语可以省略：¿Dónde está el banco? — Está en la calle de la estación." },
        { table: { head: ["问", "答"], rows: [["¿Dónde está el banco?", "Está en la calle de la estación."], ["¿Dónde está Ana?", "Está en la escuela."]] } }
      ],
      check: [
        { q: "翻译：超市在哪里？", a: "¿Dónde está el supermercado?" },
        { q: "填空：¿Dónde ___ Juan? — ___ en la escuela.", a: "está / Está" }
      ]
    }
  ],
  examples: [
    ["El libro está en la mesa.", "书在桌子上。", "el libro（书）+ está（它在，estar 的「它」形状）+ en（在……上）+ la mesa（桌子）。"],
    ["¿Dónde está el banco? — Está en la calle de la estación.", "银行在哪里？——在车站那条街上。", "dónde（哪里）+ está（在）+ el banco（银行）；está + en la calle（在街上）+ de la estación（车站的）。"],
    ["Mi mamá está en el supermercado.", "我妈妈在超市。", "mi mamá（我妈妈）+ está + en el supermercado（在超市里，-o 阳性用 el）。"],
    ["¿Dónde está Ana? — Está en la escuela.", "Ana 在哪里？——她在学校。", "dónde está + Ana；回答省略主语，está + en la escuela（在学校）。"],
    ["El gato está en la casa, en la cama.", "猫在房子里，在床上。", "el gato（猫）+ está + en la casa（在房子里）+ en la cama（在床上）。en 既是「里」也是「上」。"],
    ["Mi papá está en la estación.", "我爸爸在车站。", "mi papá + está + en la estación（在车站，-ción 阴性用 la）。"]
  ],
  vocab: [
    ["estar", "在；处于（原形）", "[es-TAR]，第二个「是」，说位置"],
    ["está", "它在 / 他在", "[es-TÁ]，有符号；和 ser 的 es 对应"],
    ["en", "在……里 / 上", "[EN]，一个词管里和上"],
    ["el banco", "银行", "[BAN-co]"],
    ["el supermercado", "超市", "[su-per-mer-CA-do]"],
    ["la estación", "车站", "[es-ta-CIÓN]，-ción 阴性，复数 estaciones 去符号"],
    ["la escuela", "学校", "[es-CUE-la]"],
    ["¿Dónde está…?", "……在哪里？", "dónde 哪里 + está 在"]
  ],
  exercises: [
    { q: "填空：Mi mamá ___ en el banco.", a: "está" },
    { q: "填空：El libro está ___ la mesa.", a: "en" },
    { q: "选择：「书是 Ana 的」和「书在桌上」分别用", opts: ["es / está", "está / es", "es / es"], a: "es / está" },
    { q: "翻译：车站在哪里？", a: "¿Dónde está la estación?" },
    { q: "翻译：Juan 在学校。", a: "Juan está en la escuela." },
    { q: "翻译：猫在床上。", a: "El gato está en la cama." }
  ],
  task: "说 6 句「X está en Y」（书、猫、妈妈、朋友……在哪），再问 3 句 ¿Dónde está…?，录音。"
},

w5d5: {
  title: "estar 表位置 II：estoy / estás",
  goal: "学完能说「我在家」「你在哪儿」「我在这里」，并把第 5 周串起来。",
  recap: [
    { q: "上一课：「它在」？", a: "está" },
    { q: "上一课：「银行在哪里」？", a: "¿Dónde está el banco?" },
    { q: "上一课：en 的意思？", a: "在……里 / 在……上" }
  ],
  steps: [
    { explain: [
        { p: "昨天 estar 只学了「它在」está。今天补上「我」和「你」：**estoy**（我在）、**estás**（你在）。看它们和 ser 的关系：soy 结尾 -oy，estoy 也是 -oy；eres 和 estás 都是「你」形状，estás 有符号。三个形状排在一起，两个动词一一对应：" },
        { table: { head: ["人称", "ser 是什么", "estar 在哪里"], rows: [["我", "soy", "estoy"], ["你", "eres", "estás"], ["他 / 她 / 它", "es", "está"]] } },
        { p: "问「你在哪儿」：**¿Dónde estás?**；答「我在家」：**Estoy en casa**。「在家」是固定说法，**不加 la**（其他地方都加：en la escuela、en el banco）。" }
      ],
      check: [
        { q: "填空：¿Dónde ___?（你在哪儿？）", a: "estás" },
        { q: "选择：「我在家」", opts: ["Estoy en casa.", "Estoy en la casa.", "Soy en casa."], a: "Estoy en casa." }
      ]
    },
    { explain: [
        { p: "回答位置还可以用两个小词：**aquí**（这里）、**allí**（那里）。它们直接跟在 estoy / está 后面，不用 en：Estoy aquí（我在这里），El libro está allí（书在那里）。allí 的 ll 和 calle 一样读「y」。新地点：**la oficina**（办公室）。" },
        { table: { head: ["中文", "西语"], rows: [["我在这里", "Estoy aquí."], ["书在那里", "El libro está allí."], ["我在办公室", "Estoy en la oficina."]] } }
      ],
      check: [
        { q: "选择：aquí 的意思", opts: ["这里", "那里", "在家"], a: "这里" },
        { q: "翻译：书在那里，在桌上。", a: "El libro está allí, en la mesa." }
      ]
    },
    { explain: [
        { p: "第 5 周结束，五件事各一句：el / la 是性别标签；un / una 是「一个」；hay 说「有没有」且只有一个形状；复数 -s / -es / -ces；está en 说「在哪里」。周六把房间里的东西用 hay 和 está 各说一遍。" }
      ],
      check: [
        { q: "选择：「有一张床」和「床在这里」", opts: ["Hay una cama. / La cama está aquí.", "Está una cama. / Hay la cama aquí."], a: "Hay una cama. / La cama está aquí." },
        { q: "翻译：你在哪儿？——我在办公室。", a: "¿Dónde estás? — Estoy en la oficina." }
      ]
    }
  ],
  examples: [
    ["¿Dónde estás? — Estoy en casa.", "你在哪儿？——我在家。", "dónde（哪里）+ estás（你在，estar 的「你」形状）；estoy（我在）+ en casa（在家，固定不加 la）。"],
    ["Estoy en la oficina con mi amigo.", "我和我朋友在办公室。", "estoy（我在）+ en la oficina（在办公室，-a 阴性用 la）+ con（和）+ mi amigo（我朋友）。"],
    ["¿Estás en la escuela? — No, estoy en el banco.", "你在学校吗？——不，我在银行。", "estás（你在）+ en la escuela，语调上扬；no + estoy en el banco。"],
    ["Estoy aquí, en la cocina.", "我在这里，在厨房。", "estoy + aquí（这里，不用 en）+ en la cocina（在厨房）补充说明。"],
    ["El libro está allí, en la mesa.", "书在那里，在桌上。", "el libro + está（它在）+ allí（那里）+ en la mesa。"],
    ["Ana está en casa y yo estoy en la oficina.", "Ana 在家，我在办公室。", "Ana está（她在）+ en casa；y + yo estoy（我在，加 yo 是对比强调）+ en la oficina。"]
  ],
  vocab: [
    ["estoy", "我在", "[es-TOY]，没符号，结尾像 soy"],
    ["estás", "你在", "[es-TÁS]，有符号"],
    ["aquí", "这里", "[a-KÍ]，有符号"],
    ["allí", "那里", "[a-YÍ]，ll 读 y"],
    ["en casa", "在家", "固定说法，不加 la"],
    ["la oficina", "办公室", "[o-fi-CI-na]"],
    ["¿Dónde estás?", "你在哪儿？", "dónde 哪里 + estás 你在"]
  ],
  exercises: [
    { q: "填空：Yo ___ en casa.", a: "estoy" },
    { q: "填空：¿Dónde ___ tú?", a: "estás" },
    { q: "选择：estoy / estás / está 对应 ser 的", opts: ["soy / eres / es", "es / eres / soy", "soy / es / eres"], a: "soy / eres / es" },
    { q: "改错：Estoy en la casa.（我在家）", a: "Estoy en casa.（「在家」不加 la）" },
    { q: "翻译：我在这里。", a: "Estoy aquí." },
    { q: "翻译：你在哪儿？——我在超市。", a: "¿Dónde estás? — Estoy en el supermercado." }
  ],
  task: "自问自答录音：¿Dónde estás? 回答 4 个不同地点（en casa、en la oficina、aquí、en el banco），再用 hay 和 está 各说 3 句描述房间。"
},

/* ═══════════ 第 6 周 · 东西与地方 II ═══════════ */

w6d1: {
  title: "estar 全表与 cerca / lejos",
  goal: "学完能说「我们在公园」「餐厅靠近银行」，并把 estar 六个形状连成一张表。",
  recap: [
    { q: "上一课：「我在」？", a: "estoy" },
    { q: "上一课：「我在家」怎么说，加不加 la？", a: "Estoy en casa.，不加 la" },
    { q: "上一课：aquí 的意思？", a: "这里" }
  ],
  steps: [
    { explain: [
        { p: "estar 还差三个形状：**estamos**（我们在）、**estáis**（你们在，西班牙）、**están**（他们在）。它们和 ser 的 somos、sois、son 一一对应。usted 用 está，ustedes 用 están，和 ser 的规矩一样。符号规律：除了 estoy 和 estamos，其他四个都有符号。" },
        { table: { head: ["人称", "ser", "estar", "例句"], rows: [["我", "soy", "estoy", "Estoy en casa."], ["你", "eres", "estás", "¿Dónde estás?"], ["他 / 她 / 您", "es", "está", "Está en el banco."], ["我们", "somos", "estamos", "Estamos en el parque."], ["你们（西班牙）", "sois", "estáis", "¿Estáis en casa?"], ["他们 / 您们", "son", "están", "Están en la escuela."]] } }
      ],
      check: [
        { q: "填空：Nosotros ___ en el parque.（我们在公园）", a: "estamos" },
        { q: "按顺序说出 estar 的六个形状", a: "estoy, estás, está, estamos, estáis, están" }
      ]
    },
    { explain: [
        { p: "说「靠近」「远离」用两个词组：**cerca de**（靠近……）、**lejos de**（远离……），后面接地点。这里有一条拼写规则：**de + el 必须合并成 del**。cerca de el banco 不对，要说 cerca del banco。de + la 不合并：cerca de la estación。" },
        { table: { head: ["中文", "西语", "说明"], rows: [["靠近银行", "cerca del banco", "de + el → del"], ["靠近车站", "cerca de la estación", "de + la 不变"], ["远离超市", "lejos del supermercado", "de + el → del"], ["远离学校", "lejos de la escuela", ""]] } },
        { tip: "del 只发生在 de + el（这个）。de + él（他）不合并：el libro de él。" }
      ],
      check: [
        { q: "填空：El restaurante está cerca ___ banco.", a: "del" },
        { q: "选择：「远离车站」", opts: ["lejos de la estación", "lejos del estación", "lejos de el estación"], a: "lejos de la estación" }
      ]
    },
    { explain: [
        { p: "「在……旁边」是 **al lado de**：lado 是「侧、边」，前面的 **al** 是 a（在、到）+ el 合并来的，和 del 是同一种合并：a + el → al。所以 al lado de 字面是「在……的一边」。后面的 de 照样遇到 el 变 del：al lado del banco。今天两个新地点：el parque（公园）、el restaurante（餐厅）。" }
      ],
      check: [
        { q: "选择：al 是哪两个词合并的？", opts: ["a + el", "de + el", "a + la"], a: "a + el" },
        { q: "翻译：学校在超市旁边。", a: "La escuela está al lado del supermercado." }
      ]
    }
  ],
  examples: [
    ["Estamos en el parque.", "我们在公园。", "estamos（我们在，estar 的「我们」形状，对应 somos）+ en el parque（在公园）。"],
    ["¿Estáis en casa? — No, estamos en el restaurante.", "你们在家吗？——不，我们在餐厅。", "estáis（你们在，对应 sois）+ en casa；no + estamos + en el restaurante（在餐厅）。"],
    ["Los libros están en la mesa.", "书都在桌上。", "los libros（这些书，复数）+ están（它们在，对应 son）+ en la mesa。"],
    ["El restaurante está cerca del banco.", "餐厅靠近银行。", "el restaurante + está + cerca de（靠近）+ el banco → de + el 合并成 del。"],
    ["El parque está lejos de la estación.", "公园离车站很远。", "el parque + está + lejos de（远离）+ la estación；de + la 不合并。"],
    ["La escuela está al lado del supermercado.", "学校在超市旁边。", "la escuela + está + al lado de（在……旁边，al = a + el）+ el supermercado → del。"]
  ],
  vocab: [
    ["estamos", "我们在", "[es-TA-mos]，没符号，对应 somos"],
    ["estáis", "你们在", "[es-TÁIS]，西班牙用，对应 sois"],
    ["están", "他们在", "[es-TÁN]，有符号，对应 son"],
    ["cerca de", "靠近", "[CER-ca]"],
    ["lejos de", "远离", "[LE-jos]，j 读喉音"],
    ["del", "de + el", "必须合并；de + la 不合并"],
    ["al lado de", "在……旁边", "al = a + el；lado 边"],
    ["el parque", "公园", "[PAR-que]"],
    ["el restaurante", "餐厅", "[res-tau-RAN-te]，-e 结尾，阳性"]
  ],
  exercises: [
    { q: "填空：Ellos ___ en el restaurante.", a: "están" },
    { q: "填空：Vosotros ___ en el parque.", a: "estáis" },
    { q: "填空：El banco está cerca ___ hotel.", a: "del" },
    { q: "选择：哪两个形状没有符号？", opts: ["estoy, estamos", "está, están", "estás, estáis"], a: "estoy, estamos" },
    { q: "翻译：我们在公园，公园靠近学校。", a: "Estamos en el parque, el parque está cerca de la escuela." },
    { q: "翻译：餐厅在银行旁边。", a: "El restaurante está al lado del banco." }
  ],
  task: "把 estar 的六个形状各配一句话说出来，再说 4 句你家附近的地点（cerca de / lejos de / al lado de），录音。"
},

w6d2: {
  title: "ser 还是 estar I",
  goal: "学完能判断说「是什么」用 ser、说「在哪里」用 estar。",
  recap: [
    { q: "上一课：「我们在」？", a: "estamos" },
    { q: "上一课：de + el 合并成？", a: "del" },
    { q: "上一课：「在……旁边」？", a: "al lado de" }
  ],
  steps: [
    { explain: [
        { p: "两个「是」现在都学全了，今天把它们放在一起分工。**ser** 回答「**是什么**」：名字、身份、来源、职业，都是这个人或东西本来的属性。**estar** 回答「**在哪里**」：位置。判断时先问自己：这句话是在说「它是什么」还是「它在哪」。" },
        { table: { head: ["问什么", "动词", "例句"], rows: [["是谁", "ser", "Es Ana."], ["来自哪里", "ser", "Es de Madrid."], ["做什么的", "ser", "Es profesora."], ["是谁的", "ser", "Es de Juan."], ["在哪里", "estar", "Está en Madrid."]] } },
        { tip: "最容易混的一对：**es de Madrid**（来自马德里，ser）和 **está en Madrid**（现在人在马德里，estar）。看后面的小词：de 跟 ser，en 跟 estar。" }
      ],
      check: [
        { q: "选择：Ana ___ de China.（Ana 来自中国）", opts: ["es", "está"], a: "es" },
        { q: "选择：Ana ___ en China.（Ana 在中国）", opts: ["está", "es"], a: "está" }
      ]
    },
    { explain: [
        { p: "用地理词练习分工。**el país**（国家）、**la capital**（首都）说的是「是什么」，用 ser：España es un país，Madrid es la capital de España。**el centro**（市中心）、**la playa**（海滩）、**el museo**（博物馆）多半说「在哪里」，用 estar：El museo está en el centro。" },
        { table: { head: ["是什么（ser）", "在哪里（estar）"], rows: [["España es un país.", "El museo está en el centro."], ["Madrid es la capital.", "La playa está lejos del centro."]] } }
      ],
      check: [
        { q: "填 es 或 está：Madrid ___ la capital de España.", a: "es" },
        { q: "填 es 或 está：El museo ___ en el centro.", a: "está" }
      ]
    },
    { explain: [
        { p: "位置会变，所以常和 **ahora**（现在）一起用：Ana es de Madrid, pero ahora está en Pekín（Ana 来自马德里，但现在在北京）。一句里两个动词各管一件事：es de 说她的来源，永远不变；está en 说她现在的位置，明天可能就变了。这条「**变的用 estar，不变的用 ser**」下次讲状态时还会用到。" }
      ],
      check: [
        { q: "翻译：Juan 是服务员，现在在餐厅。", a: "Juan es camarero, ahora está en el restaurante." },
        { q: "选择：「会变的」用", opts: ["estar", "ser"], a: "estar" }
      ]
    }
  ],
  examples: [
    ["España es un país. Madrid es la capital de España.", "西班牙是一个国家。马德里是西班牙的首都。", "es（是，ser）+ un país（一个国家，-s 结尾要记，阳性）；es + la capital（首都，阴性）+ de España（西班牙的）。两句都在说「是什么」。"],
    ["El museo está en el centro.", "博物馆在市中心。", "el museo（博物馆）+ está（在，estar）+ en el centro（在市中心）。说「在哪里」。"],
    ["Ana es de Madrid, pero ahora está en Pekín.", "Ana 来自马德里，但现在在北京。", "es de（来自，ser + de）+ Madrid；pero（但是）+ ahora（现在）+ está en（在，estar + en）+ Pekín。来源不变用 ser，位置会变用 estar。"],
    ["Somos estudiantes y estamos en la universidad.", "我们是学生，我们在大学里。", "somos（我们是，身份）+ estudiantes；y + estamos（我们在，位置）+ en la universidad。"],
    ["La playa está lejos del centro.", "海滩离市中心很远。", "la playa（海滩，阴性）+ está + lejos de（远离）+ el centro → del centro。"],
    ["Juan es camarero. Ahora está en el restaurante.", "Juan 是服务员。他现在在餐厅。", "es camarero（是服务员，职业用 ser，不加 un）；ahora + está en el restaurante（现在在餐厅，位置用 estar）。"]
  ],
  vocab: [
    ["el país", "国家", "[pa-ÍS]，有符号，复数 países"],
    ["la capital", "首都", "[ca-pi-TAL]，-l 结尾，阴性要记"],
    ["el centro", "市中心", "[CEN-tro]"],
    ["la playa", "海滩", "[PLA-ya]"],
    ["el museo", "博物馆", "[mu-SE-o]"],
    ["ahora", "现在", "[a-O-ra]，h 不发音"]
  ],
  exercises: [
    { q: "选择：Pedro ___ médico.", opts: ["es", "está"], a: "es" },
    { q: "选择：Pedro ___ en el museo.", opts: ["está", "es"], a: "está" },
    { q: "选择：Marta ___ de Argentina y ahora ___ en España.", opts: ["es / está", "está / es", "es / es"], a: "es / está" },
    { q: "填 es 或 está：Pekín ___ la capital de China.", a: "es" },
    { q: "翻译：海滩在哪里？——在市中心旁边。", a: "¿Dónde está la playa? — Está al lado del centro." },
    { q: "翻译：我是中国人，现在我在马德里。", a: "Soy chino, ahora estoy en Madrid." }
  ],
  task: "说 6 句：3 句用 ser 说自己是什么（名字、来源、职业），3 句用 estar 说现在在哪，录音。"
},

w6d3: {
  title: "形容词与性数一致",
  goal: "学完能说「新车」「漂亮的花」「大城市」，形容词跟名词一起变。",
  recap: [
    { q: "上一课：「Ana 来自马德里」用 ser 还是 estar？", a: "ser：Ana es de Madrid." },
    { q: "上一课：「Ana 现在在马德里」？", a: "Ana está en Madrid." },
    { q: "上一课：「首都」？", a: "la capital" }
  ],
  steps: [
    { explain: [
        { p: "形容词是描述名词的词，比如「新的」「大的」。第 1 周的 bueno/a、caro/a 和第 3 周的 chino/a 都是。西语形容词有两条铁律，今天先说第一条：**放在名词后面**，而且**性别跟名词一致**：-o 配阳性名词，-a 配阴性名词。中文说「新车」，西语说「车新」：el coche nuevo。" },
        { table: { head: ["形容词", "配阳性名词", "配阴性名词"], rows: [["nuevo/a 新的", "el coche nuevo", "la casa nueva"], ["pequeño/a 小的", "el libro pequeño", "la ciudad pequeña"], ["bonito/a 漂亮的", "el parque bonito", "la flor bonita"], ["viejo/a 旧的", "el hotel viejo", "la mesa vieja"], ["barato/a 便宜的", "el coche barato", "la cosa barata"], ["feo/a 丑的", "el zapato feo", "la silla fea"]] } }
      ],
      check: [
        { q: "填空：la casa ___（新房子，nuevo）", a: "nueva" },
        { q: "选择：「小城市」", opts: ["la ciudad pequeña", "la pequeña ciudad", "la ciudad pequeño"], a: "la ciudad pequeña" }
      ]
    },
    { explain: [
        { p: "第二条铁律：**数也要一致**。名词是复数，形容词也加 -s：los coches nuevos，las flores bonitas。以 **-e 结尾**的形容词（如 **grande** 大的）阴阳同形，只变数：el coche grande、la casa grande、las casas grandes。第 3 周的 estadounidense 就是这种。" },
        { table: { head: ["单数", "复数"], rows: [["el coche nuevo", "los coches nuevos"], ["la flor bonita", "las flores bonitas"], ["la ciudad grande", "las ciudades grandes"]] } }
      ],
      check: [
        { q: "变复数：la flor bonita →", a: "las flores bonitas" },
        { q: "选择：grande 配阴性名词时", opts: ["不变，还是 grande", "变成 granda"], a: "不变，还是 grande" }
      ]
    },
    { explain: [
        { p: "说「车是新的」用 ser + 形容词：**El coche es nuevo**。形容词不挨着名词了，但仍然跟主语的性和数一致：La casa es nueva，Las flores son bonitas。这些都是东西本来的特征，不会变，所以用 ser，和昨天的规矩一致。" }
      ],
      check: [
        { q: "填空：Las flores ___ bonitas.", a: "son" },
        { q: "翻译：这座城市很大。", a: "La ciudad es grande." }
      ]
    }
  ],
  examples: [
    ["El coche es nuevo y la casa es nueva.", "车是新的，房子是新的。", "el coche（阳性）+ es + nuevo（-o 配阳性）；la casa（阴性）+ es + nueva（-a 配阴性）。"],
    ["Es una ciudad pequeña y bonita.", "这是一座又小又漂亮的城市。", "es + una ciudad（一座城市，阴性）+ pequeña（小的）+ y + bonita（漂亮的），两个形容词都放名词后、都配阴性。"],
    ["Las flores son bonitas.", "这些花很漂亮。", "las flores（复数阴性）+ son（复数）+ bonitas（-a 配阴性 + s 配复数）。"],
    ["Los libros son viejos, pero son buenos.", "这些书旧，但很好。", "los libros + son viejos（旧的，阳性复数）+ pero（但是）+ son buenos（好的，阳性复数）。"],
    ["El hotel es barato, pero es feo.", "这家旅馆便宜，但很丑。", "el hotel + es barato（便宜的，阳性）+ pero + es feo（丑的，阳性）。"],
    ["Madrid es una ciudad grande.", "马德里是一座大城市。", "es una ciudad（一座城市）+ grande（大的，-e 结尾阴阳同形），放在名词后。"]
  ],
  vocab: [
    ["grande", "大的", "[GRAN-de]，-e 结尾阴阳同形，复数 grandes"],
    ["pequeño/a", "小的", "[pe-KE-nyo]"],
    ["bonito/a", "漂亮的", "[bo-NI-to]"],
    ["nuevo/a", "新的", "[NUE-bo]"],
    ["viejo/a", "旧的；老的", "[BIE-jo]"],
    ["barato/a", "便宜的", "[ba-RA-to]，反义是第 1 周的 caro/a"],
    ["feo/a", "丑的", "[FE-o]，反义是 bonito/a"]
  ],
  exercises: [
    { q: "填空：el libro ___（新书，nuevo）", a: "nuevo" },
    { q: "填空：las casas ___（旧房子，viejo）", a: "viejas" },
    { q: "选择：「漂亮的花」", opts: ["la flor bonita", "la bonita flor", "la flor bonito"], a: "la flor bonita" },
    { q: "选择：grande 的复数", opts: ["grandes", "grandos", "grande"], a: "grandes" },
    { q: "翻译：这些车很便宜。", a: "Los coches son baratos." },
    { q: "翻译：这是一座又大又丑的城市。", a: "Es una ciudad grande y fea." }
  ],
  task: "用今天 7 个形容词各说一句「X es …」，主语换不同性别和单复数，录音。"
},

w6d4: {
  title: "estar + 状态形容词",
  goal: "学完能说「我累了」「你好吗——我很好」，知道状态用 estar。",
  recap: [
    { q: "上一课：形容词放名词前还是后？", a: "后" },
    { q: "上一课：grande 配阴性名词怎么变？", a: "不变，还是 grande" },
    { q: "上一课：「新车」？", a: "el coche nuevo" }
  ],
  steps: [
    { explain: [
        { p: "estar 除了说「在哪里」，还说「**现在处于什么状态**」：累、忙、生病、高兴。这些和位置一样是**会变的**，今天累明天不累，所以用 estar 不用 ser。用法是 **estar + 形容词**，形容词照样跟主语的性数一致：Estoy cansado（男说）/ Estoy cansada（女说）。" },
        { table: { head: ["状态", "男 / 阳性", "女 / 阴性"], rows: [["累的", "cansado", "cansada"], ["高兴的", "contento", "contenta"], ["难过的", "triste", "triste（-e 同形）"], ["生病的", "enfermo", "enferma"], ["忙的", "ocupado", "ocupada"], ["紧张的", "nervioso", "nerviosa"]] } }
      ],
      check: [
        { q: "填空：Ana está ___.（Ana 累了，cansado）", a: "cansada" },
        { q: "选择：「我们很忙」（都是男性）", opts: ["Estamos ocupados.", "Somos ocupados.", "Estamos ocupado."], a: "Estamos ocupados." }
      ]
    },
    { explain: [
        { p: "问「你好吗」就是问状态：**¿Cómo estás?** = cómo（怎么样，第 3 周 ¿Cómo te llamas? 里的词）+ estás（你处于）→ 你处于什么状态。回答 **Estoy bien**（我很好，bien 第 2 周学过）或 **Estoy mal**（我不好）。bien / mal 不是形容词，不变性数。对陌生人用 usted：¿Cómo está usted?" },
        { table: { head: ["说话人", "内容"], rows: [["Ana", "Hola, ¿cómo estás?"], ["Wei", "Estoy bien, gracias. ¿Y tú?"], ["Ana", "Hoy estoy cansada."]] } },
        { tip: "第 2 周的 ¿Qué tal? 和 ¿Cómo estás? 意思一样，¿Qué tal? 更随意。" }
      ],
      check: [
        { q: "翻译：你好吗？——我很好，谢谢。", a: "¿Cómo estás? — Estoy bien, gracias." },
        { q: "选择：对陌生人问「您好吗」", opts: ["¿Cómo está usted?", "¿Cómo estás usted?", "¿Cómo es usted?"], a: "¿Cómo está usted?" }
      ]
    },
    { explain: [
        { p: "ser 和 estar 的分工第二条：昨天的形容词（nuevo、grande）说的是东西**本来的样子**，用 ser；今天的形容词说的是**现在的状态**，用 estar。同一个人两句话可以各用一个：Juan es profesor y hoy está muy ocupado（Juan 是老师，今天很忙）。**hoy**（今天）常和 estar 一起出现，因为状态是今天的事。" }
      ],
      check: [
        { q: "选择：Ana ___ médica y hoy ___ enferma.", opts: ["es / está", "está / es", "está / está"], a: "es / está" },
        { q: "选择：「书是新的」用", opts: ["ser：El libro es nuevo.", "estar：El libro está nuevo."], a: "ser：El libro es nuevo." }
      ]
    }
  ],
  examples: [
    ["¿Cómo estás? — Estoy bien, gracias. ¿Y tú?", "你好吗？——我很好，谢谢。你呢？", "cómo（怎么样）+ estás（你处于）→ 你好吗；estoy（我处于）+ bien（好）+ gracias；¿y tú? 反问。"],
    ["Hoy estoy cansada.", "我今天累了。（女性说）", "hoy（今天）+ estoy（我处于）+ cansada（累的，女性用 -a）。"],
    ["Ana está enferma y está en casa.", "Ana 病了，她在家。", "está enferma（她处于生病状态，阴性 -a）+ y + está en casa（她在家，位置）。两个 está，一个说状态一个说位置。"],
    ["¿Estás nervioso? — No, estoy contento.", "你紧张吗？——不，我很高兴。（男性）", "estás（你处于）+ nervioso（紧张的，阳性）；no + estoy contento（高兴的）。"],
    ["Mi amigo está mal hoy: está triste.", "我朋友今天不好：他很难过。", "está mal（处于不好的状态，mal 不变形）+ hoy；está triste（难过的，-e 同形）。"],
    ["Juan es profesor y hoy está muy ocupado.", "Juan 是老师，今天很忙。", "es profesor（职业，本来的属性，ser）+ y + hoy + está muy ocupado（今天很忙，会变的状态，estar；muy 很）。"]
  ],
  vocab: [
    ["cansado/a", "累的", "[can-SA-do]，配 estar"],
    ["contento/a", "高兴的", "[con-TEN-to]，配 estar"],
    ["triste", "难过的", "[TRIS-te]，-e 阴阳同形"],
    ["enfermo/a", "生病的", "[en-FER-mo]"],
    ["ocupado/a", "忙的", "[o-cu-PA-do]"],
    ["nervioso/a", "紧张的", "[ner-BIO-so]"],
    ["mal", "不好（副词）", "[MAL]，不变性数；反义 bien"],
    ["¿Cómo estás?", "你好吗？", "cómo 怎么样 + estás 你处于；对 usted 说 ¿Cómo está usted?"],
    ["hoy", "今天", "[OY]，h 不发音"]
  ],
  exercises: [
    { q: "填空：Yo ___ cansado.（我累了）", a: "estoy" },
    { q: "填空：Marta está ___.（Marta 很高兴，contento）", a: "contenta" },
    { q: "选择：Mis amigos ___ ocupados hoy.", opts: ["están", "son", "está"], a: "están" },
    { q: "选择：Mi papá ___ médico.", opts: ["es", "está"], a: "es" },
    { q: "翻译：你好吗？——不太好，我病了。（男性）", a: "¿Cómo estás? — Mal, estoy enfermo." },
    { q: "翻译：我们今天很紧张。（都是女性）", a: "Hoy estamos nerviosas." }
  ],
  task: "录一段对话：¿Cómo estás? 之后用 4 个不同状态回答（bien / cansado / ocupado / contento），再用自己的性别形式各说一遍。"
},

w6d5: {
  title: "hay 还是 está；第 6 周复习",
  goal: "学完能分清「有一家药店」用 hay、「药店在哪」用 está，并把第 6 周串起来。",
  recap: [
    { q: "上一课：「你好吗」？", a: "¿Cómo estás?" },
    { q: "上一课：「我累了」（女性）？", a: "Estoy cansada." },
    { q: "上一课：「他是老师，今天很忙」用哪两个动词？", a: "es profesor（ser）/ está ocupado（estar）" }
  ],
  steps: [
    { explain: [
        { p: "hay 和 está 都能翻成中文的「有 / 在」，分工看**说的东西是不是已知的**。**hay** 说「有没有这样一个东西」，对方还不知道它，所以后面接 un / una / 数字 / muchos，从不接 el / la。**está** 说「那个东西在哪」，双方都知道它是哪个，所以前面是 el / la 或名字。" },
        { table: { head: ["hay（有没有）", "está（在哪里）"], rows: [["Hay una farmacia aquí.", "La farmacia está aquí."], ["Hay un mercado en el centro.", "El mercado está en el centro."], ["¿Hay un bar?", "¿Dónde está el bar?"]] } },
        { tip: "口诀：hay 配 un，está 配 el。中文里「这儿有家药店」→ hay；「药店在这儿」→ está。" }
      ],
      check: [
        { q: "选择：___ una tienda en la calle.", opts: ["Hay", "Está"], a: "Hay" },
        { q: "选择：La tienda ___ en la calle.", opts: ["está", "hay"], a: "está" }
      ]
    },
    { explain: [
          { p: "地方还有两种状态：**abierto/a**（开着的）、**cerrado/a**（关着的）。它们和昨天的 cansado 一样是会变的状态，所以用 estar，性数跟名词：El bar está abierto，La tienda está cerrada。今天四个地方：el mercado（市场）、la tienda（商店）、la farmacia（药店）、el bar（酒吧）。" },
          { table: { head: ["地方", "开着", "关着"], rows: [["el mercado", "está abierto", "está cerrado"], ["la tienda", "está abierta", "está cerrada"], ["la farmacia", "está abierta", "está cerrada"], ["el bar", "está abierto", "está cerrado"]] } }
      ],
      check: [
        { q: "填空：La farmacia está ___.（药店关着，cerrado）", a: "cerrada" },
        { q: "翻译：市场开着。", a: "El mercado está abierto." }
      ]
    },
    { explain: [
        { p: "第 6 周结束。你现在有三个「有 / 是 / 在」：**ser** 说是什么（Es la capital），**estar** 说在哪里和什么状态（Está en el centro / Está cerrado），**hay** 说有没有（Hay un mercado）。还有形容词的两条铁律：放名词后、性数一致。周六用这三个词描述你家附近，周日周测。下周学「我有」。" }
      ],
      check: [
        { q: "选择：「有一个博物馆」「博物馆在市中心」「博物馆很大」", opts: ["Hay un museo. / El museo está en el centro. / El museo es grande.", "Está un museo. / El museo hay en el centro. / El museo está grande."], a: "Hay un museo. / El museo está en el centro. / El museo es grande." },
        { q: "翻译：药店在哪里？——在酒吧旁边，但今天关着。", a: "¿Dónde está la farmacia? — Está al lado del bar, pero hoy está cerrada." }
      ]
    }
  ],
  examples: [
    ["¿Hay una farmacia aquí? — Sí, está allí, al lado del bar.", "这里有药店吗？——有，在那里，酒吧旁边。", "hay + una farmacia（问有没有，用 una）；回答换成 está（说它在哪）+ allí + al lado del bar（在酒吧旁边，de + el → del）。"],
    ["Hay un mercado en el centro.", "市中心有一个市场。", "hay + un mercado（一个市场，未知的用 un）+ en el centro（在市中心）。"],
    ["¿Dónde está la tienda? — Está cerca de la estación.", "商店在哪里？——靠近车站。", "dónde está + la tienda（已知的那家店，用 la）；está + cerca de la estación。"],
    ["La tienda está cerrada hoy.", "商店今天关着。", "la tienda（阴性）+ está（状态用 estar）+ cerrada（关着的，-a 配阴性）+ hoy。"],
    ["El bar está abierto ahora.", "酒吧现在开着。", "el bar（阳性）+ está + abierto（开着的，-o 配阳性）+ ahora（现在）。"],
    ["Hay muchos bares en Madrid, pero el bar de Juan está cerrado.", "马德里有很多酒吧，但 Juan 的酒吧关着。", "hay muchos bares（有很多酒吧，bar + es）+ en Madrid；pero + el bar de Juan（Juan 的那家，已知用 el）+ está cerrado（关着）。"]
  ],
  vocab: [
    ["abierto/a", "开着的", "[a-BIER-to]，配 estar"],
    ["cerrado/a", "关着的", "[ce-RRA-do]，rr 颤音，配 estar"],
    ["el mercado", "市场", "[mer-CA-do]"],
    ["la tienda", "商店", "[TIEN-da]"],
    ["la farmacia", "药店", "[far-MA-cia]"],
    ["el bar", "酒吧", "[BAR]，复数 bares"]
  ],
  exercises: [
    { q: "选择：___ un banco cerca de aquí.", opts: ["Hay", "Está", "Es"], a: "Hay" },
    { q: "选择：El banco ___ cerca de aquí.", opts: ["está", "hay", "es"], a: "está" },
    { q: "改错：Hay la farmacia en la calle.", a: "Hay una farmacia en la calle.（hay 不接 la）" },
    { q: "填空：El mercado está ___.（开着，abierto）", a: "abierto" },
    { q: "翻译：有一家商店吗？——有，但关着。", a: "¿Hay una tienda? — Sí, pero está cerrada." },
    { q: "翻译：酒吧在市场旁边。", a: "El bar está al lado del mercado." }
  ],
  task: "描述你家附近：用 hay 说 3 个有什么，用 está 说 3 个在哪里，用 está abierto / cerrado 说 2 个，录音。"
},

/* ═══════════ 第 7 周 · 我有 ═══════════ */

w7d1: {
  title: "我有、你有：tengo / tienes",
  goal: "学完能说「我有一支笔」「你有手机吗」「我没有钱」。",
  recap: [
    { q: "上一课：hay 后面接 el / la 吗？", a: "不接，接 un / una" },
    { q: "上一课：「商店关着」？", a: "La tienda está cerrada." },
    { q: "上一课：「药店在哪里」？", a: "¿Dónde está la farmacia?" }
  ],
  steps: [
    { explain: [
        { p: "hay 是「存在」，说「**我有**」（我拥有）要用另一个动词 **tener**（有）。它的「我」形状是 **tengo**：结尾 -o 和 soy、estoy 的「我」味道一致，只是中间多了个 g，要记。**Tengo un libro**（我有一本书）。「你有」是 **tienes**：结尾 -es 像 eres，词干里的 e 裂成了 ie（tener → tienes），这种「e 变 ie」以后还会碰到。" },
        { table: { head: ["人称", "ser", "estar", "tener"], rows: [["我", "soy", "estoy", "tengo"], ["你", "eres", "estás", "tienes"]] } }
      ],
      check: [
        { q: "填空：___ un libro.（我有一本书）", a: "Tengo" },
        { q: "选择：tienes 里的 ie 是从哪来的？", opts: ["tener 词干的 e 变成 ie", "加了一个 i", "和 eres 一样的结尾"], a: "tener 词干的 e 变成 ie" }
      ]
    },
    { explain: [
        { p: "问「你有……吗」直接语调上扬：**¿Tienes móvil?**。泛泛地问有没有某类东西时**不加冠词**：¿Tienes coche? Tengo dinero（我有钱）。特指某一个才加 un 或 el：Tengo un móvil nuevo（我有一部新手机），Tengo la llave de la casa（我有家里的那把钥匙）。否定在动词前加 no：**No tengo dinero**（我没有钱）。" },
        { table: { head: ["问", "答"], rows: [["¿Tienes móvil?", "Sí, tengo un móvil nuevo."], ["¿Tienes dinero?", "No, no tengo dinero."], ["¿Tienes la llave?", "No, no tengo la llave."]] } }
      ],
      check: [
        { q: "翻译：你有车吗？", a: "¿Tienes coche?" },
        { q: "翻译：不，我没有钱。", a: "No, no tengo dinero." }
      ]
    },
    { explain: [
        { p: "今天 6 样随身物品，都带冠词记：el dinero（钱）、el bolígrafo（圆珠笔）、la llave（钥匙）、el móvil（手机）、el ordenador（电脑）、la bolsa（包）。其中三个西班牙和拉美说法不同：手机拉美叫 el celular，电脑拉美叫 la computadora，汽车拉美叫 el carro。两边都能听懂，先记西班牙的说法。" }
      ],
      check: [
        { q: "选择：「手机」在西班牙说", opts: ["el móvil", "el celular", "la computadora"], a: "el móvil" },
        { q: "填 el 或 la：___ llave（钥匙）", a: "la" }
      ]
    }
  ],
  examples: [
    ["Tengo un bolígrafo y un lápiz.", "我有一支圆珠笔和一支铅笔。", "tengo（我有，tener 的「我」形状）+ un bolígrafo（一支圆珠笔）+ y + un lápiz（一支铅笔）。"],
    ["¿Tienes móvil? — Sí, tengo un móvil nuevo.", "你有手机吗？——有，我有一部新手机。", "tienes（你有，e → ie）+ móvil（泛问不加冠词）；tengo + un móvil nuevo（一部新手机，形容词在后）。"],
    ["No tengo dinero.", "我没有钱。", "no（不）+ tengo（我有）+ dinero（钱，泛指不加冠词）→ 我没有钱。"],
    ["¿Tienes la llave de la casa? — No, no tengo la llave.", "你有家里的钥匙吗？——没有，我没有那把钥匙。", "tienes + la llave（特指那把钥匙，用 la）+ de la casa（房子的）；no, no tengo la llave。"],
    ["Tengo un ordenador en la oficina.", "我在办公室有一台电脑。", "tengo + un ordenador（一台电脑，拉美说 computadora）+ en la oficina（在办公室）。"],
    ["Tengo la bolsa de mi mamá.", "我拿着我妈妈的包。", "tengo + la bolsa（那个包，特指用 la）+ de mi mamá（我妈妈的）。"]
  ],
  vocab: [
    ["tener", "有（原形）", "[te-NER]，拥有；hay 是「存在」"],
    ["tengo", "我有", "[TEN-go]，-o 结尾 + g"],
    ["tienes", "你有", "[TIE-nes]，e → ie"],
    ["el dinero", "钱", "[di-NE-ro]"],
    ["el bolígrafo", "圆珠笔", "[bo-LÍ-gra-fo]，口语常说 el boli"],
    ["la llave", "钥匙", "[YA-be]，ll 读 y"],
    ["el móvil", "手机", "[MÓ-bil]，拉美说 el celular"],
    ["el ordenador", "电脑", "[or-de-na-DOR]，拉美说 la computadora"],
    ["la bolsa", "包", "[BOL-sa]"]
  ],
  exercises: [
    { q: "填空：Yo ___ un móvil.", a: "tengo" },
    { q: "填空：¿___ coche?（你有车吗？）", a: "Tienes" },
    { q: "选择：「我没有钱」", opts: ["No tengo dinero.", "Tengo no dinero.", "No hay dinero."], a: "No tengo dinero." },
    { q: "选择：hay 和 tengo 的区别", opts: ["hay 是「存在」，tengo 是「我拥有」", "一样", "hay 是「我有」"], a: "hay 是「存在」，tengo 是「我拥有」" },
    { q: "翻译：你有电脑吗？——有，我有一台旧电脑。", a: "¿Tienes ordenador? — Sí, tengo un ordenador viejo." },
    { q: "翻译：我有一个包和一把钥匙。", a: "Tengo una bolsa y una llave." }
  ],
  task: "掏出口袋和包里的东西，说 6 句 Tengo… / No tengo…，再问自己 3 句 ¿Tienes…?，录音。"
},

w7d2: {
  title: "tener 全表与家庭",
  goal: "学完能说「我父亲有一辆车」「我们有两个兄弟」，会用 mi / mis / tu / tus。",
  recap: [
    { q: "上一课：「我有」？", a: "tengo" },
    { q: "上一课：「你有手机吗」？", a: "¿Tienes móvil?" },
    { q: "上一课：「我没有钱」？", a: "No tengo dinero." }
  ],
  steps: [
    { explain: [
        { p: "tener 剩下四个形状：**tiene**（他有）、**tenemos**（我们有）、**tenéis**（你们有，西班牙）、**tienen**（他们有）。规律：tienes / tiene / tienen 都有 e → ie；tenemos / tenéis 词干不变，结尾和 ser 的 somos / sois 一样是 -mos / -is。usted 用 tiene，ustedes 用 tienen。" },
        { table: { head: ["人称", "ser", "estar", "tener"], rows: [["我", "soy", "estoy", "tengo"], ["你", "eres", "estás", "tienes"], ["他 / 她 / 您", "es", "está", "tiene"], ["我们", "somos", "estamos", "tenemos"], ["你们（西班牙）", "sois", "estáis", "tenéis"], ["他们 / 您们", "son", "están", "tienen"]] } }
      ],
      check: [
        { q: "填空：Mi padre ___ un coche.（我父亲有一辆车）", a: "tiene" },
        { q: "按顺序说出 tener 的六个形状", a: "tengo, tienes, tiene, tenemos, tenéis, tienen" }
      ]
    },
    { explain: [
        { p: "今天的名词是家人。第 1 周的 mamá / papá 是口语，正式说法是 **la madre / el padre**。**los padres** 是「父母」，不是「父亲们」（一群里有男有女用阳性复数，第 4 周说过）。兄弟姐妹、祖父母都是 -o / -a 一对：el hermano / la hermana，el abuelo / la abuela，和 hijo / hija 同一条规律。**la familia**（家庭）以 -a 结尾，阴性。" },
        { table: { head: ["男", "女", "复数（合称）"], rows: [["el padre 父亲", "la madre 母亲", "los padres 父母"], ["el hermano 兄弟", "la hermana 姐妹", "los hermanos 兄弟姐妹"], ["el abuelo 祖父", "la abuela 祖母", "los abuelos 祖父母"], ["el hijo 儿子", "la hija 女儿", "los hijos 子女"]] } }
      ],
      check: [
        { q: "选择：los padres 的意思", opts: ["父母", "父亲们", "祖父母"], a: "父母" },
        { q: "填空：el abuelo / la ___（祖母）", a: "abuela" }
      ]
    },
    { explain: [
        { p: "「我的」第 2 周学过 **mi**，复数是 **mis**：mi hermano（我兄弟）、mis hermanos（我的兄弟们）。「你的」是 **tu / tus**，同样只按数变。注意 mi / tu **不按性别变**：mi madre、mi padre 都是 mi。tu 没有符号，第 3 周的 tú（你）有符号，是两个词。" },
        { table: { head: ["", "单数", "复数"], rows: [["我的", "mi padre / mi madre", "mis padres"], ["你的", "tu hermano / tu hermana", "tus hermanos"]] } }
      ],
      check: [
        { q: "填空：___ padres tienen una casa.（我的父母）", a: "Mis" },
        { q: "选择：tu 和 tú 的区别", opts: ["tu 是「你的」，tú 是「你」", "一样", "tu 是「你」，tú 是「你的」"], a: "tu 是「你的」，tú 是「你」" }
      ]
    }
  ],
  examples: [
    ["Mi padre tiene un coche nuevo.", "我父亲有一辆新车。", "mi padre（我父亲）+ tiene（他有，e → ie）+ un coche nuevo（一辆新车）。"],
    ["Tenemos una familia grande.", "我们有一个大家庭。", "tenemos（我们有，结尾 -mos 像 somos）+ una familia（家庭，阴性）+ grande（大的，放名词后）。"],
    ["¿Tenéis hermanos? — Sí, tenemos un hermano.", "你们有兄弟姐妹吗？——有，我们有一个兄弟。", "tenéis（你们有，西班牙）+ hermanos（泛问不加冠词）；tenemos + un hermano。"],
    ["Mis padres tienen una casa en Madrid.", "我父母在马德里有一栋房子。", "mis padres（我的父母，mi + s 配复数）+ tienen（他们有）+ una casa + en Madrid。"],
    ["Mi madre tiene una hermana y mi padre tiene un hermano.", "我母亲有一个姐妹，我父亲有一个兄弟。", "mi madre + tiene + una hermana；mi padre + tiene + un hermano。mi 不按性别变。"],
    ["¿Tu abuela es de Pekín? — Sí, y mis abuelos tienen una casa allí.", "你祖母来自北京吗？——是的，我祖父母在那里有一栋房子。", "tu abuela（你的祖母）+ es de Pekín（来源用 ser）；mis abuelos（我的祖父母）+ tienen + una casa + allí（那里）。"]
  ],
  vocab: [
    ["tiene", "他有", "[TIE-ne]，也用于 usted"],
    ["tenemos", "我们有", "[te-NE-mos]，词干不变"],
    ["tenéis", "你们有", "[te-NÉIS]，西班牙用"],
    ["tienen", "他们有", "[TIE-nen]，也用于 ustedes"],
    ["el padre", "父亲", "[PA-dre]，口语 papá"],
    ["la madre", "母亲", "[MA-dre]，口语 mamá"],
    ["el hermano / la hermana", "兄弟 / 姐妹", "[er-MA-no]，h 不发音"],
    ["el abuelo / la abuela", "祖父 / 祖母", "[a-BUE-lo]"],
    ["los padres", "父母", "不是「父亲们」"],
    ["la familia", "家庭", "[fa-MI-lia]"],
    ["mis", "我的（复数）", "mi + s，不按性别变"],
    ["tu / tus", "你的", "没符号；tú 有符号是「你」"]
  ],
  exercises: [
    { q: "填空：Nosotros ___ dos hijos.", a: "tenemos" },
    { q: "填空：Mis abuelos ___ una casa grande.", a: "tienen" },
    { q: "填空：¿Vosotros ___ coche?", a: "tenéis" },
    { q: "选择：「我的父母」", opts: ["mis padres", "mi padres", "mis padre"], a: "mis padres" },
    { q: "翻译：你有兄弟姐妹吗？——有，我有一个姐妹。", a: "¿Tienes hermanos? — Sí, tengo una hermana." },
    { q: "翻译：我母亲有一部新手机。", a: "Mi madre tiene un móvil nuevo." }
  ],
  task: "说 6 句家人「有什么」（Mi padre tiene…, mis abuelos tienen…），再用 tener 六个形状各说一句，录音。"
},

w7d3: {
  title: "数字 21–100 与年龄",
  goal: "学完能数到 100，会问答「你多大」。",
  recap: [
    { q: "上一课：「他们有」？", a: "tienen" },
    { q: "上一课：「父母」？", a: "los padres" },
    { q: "上一课：mi 的复数？", a: "mis" }
  ],
  steps: [
    { explain: [
        { p: "第 2 周数到 20。**21–29** 的写法和 16–19 一样是「二十 + 数字」拼成一个词：dieciséis 是 diez y seis 缩写，**veintiuno** 就是 veinte y uno 缩写。写成一个词后 veinti- 固定，后面接 uno 到 nueve。三个要写符号：veintidós、veintitrés、veintiséis（重音落在末尾，按第 1 周规则三要标出来）。" },
        { table: { head: ["数字", "西语", "来历"], rows: [["21", "veintiuno", "veinte y uno"], ["22", "veintidós", "veinte y dos，加符号"], ["25", "veinticinco", "veinte y cinco"], ["28", "veintiocho", "veinte y ocho"]] } }
      ],
      check: [
        { q: "选择：21 是", opts: ["veintiuno", "veinte uno", "veinte y uno（分开写）"], a: "veintiuno" },
        { q: "选择：veintiuno 是哪两个数拼的？", opts: ["veinte + uno", "dos + uno", "diez + uno"], a: "veinte + uno" }
      ]
    },
    { explain: [
        { p: "整十数各是一个词：**treinta** 30、**cuarenta** 40、**cincuenta** 50、**sesenta** 60、**setenta** 70、**ochenta** 80、**noventa** 90，都以 -enta 结尾（treinta 是 -einta）。100 是 **cien**。31 以上和 21–29 不同，**要分开写并用 y 连接**：treinta y uno，cuarenta y cinco，noventa y nueve。" },
        { table: { head: ["整十", "西语", "+ 1 的写法"], rows: [["30", "treinta", "treinta y uno"], ["40", "cuarenta", "cuarenta y uno"], ["50", "cincuenta", "cincuenta y uno"], ["60", "sesenta", "sesenta y uno"], ["70", "setenta", "setenta y uno"], ["80", "ochenta", "ochenta y uno"], ["90", "noventa", "noventa y uno"], ["100", "cien", "—"]] } },
        { tip: "只有 21–29 拼成一个词，31 起一律分开加 y。setenta 和 sesenta 只差一个字母，多读几遍。" }
      ],
      check: [
        { q: "用西语写：45", a: "cuarenta y cinco" },
        { q: "选择：100 是", opts: ["cien", "ciento", "cientos"], a: "cien" }
      ]
    },
    { explain: [
        { p: "西语说年龄用 tener：「我 30 岁」字面是「我有 30 年」：**Tengo treinta años**（año 第 1 周学过）。问「你多大」= **¿Cuántos años tienes?**（cuántos 多少 + años 年 + tienes 你有）。一个小规矩：uno 在阳性名词前变 un（第 5 周的 un 就是这么来的），所以 21 岁是 **veintiún años**，加符号保住重音。" },
        { table: { head: ["问", "答"], rows: [["¿Cuántos años tienes?", "Tengo veintiún años."], ["¿Cuántos años tiene tu padre?", "Tiene cincuenta y cinco años."]] } }
      ],
      check: [
        { q: "翻译：你多大？", a: "¿Cuántos años tienes?" },
        { q: "选择：「我 21 岁」", opts: ["Tengo veintiún años.", "Tengo veintiuno años.", "Soy veintiún años."], a: "Tengo veintiún años." }
      ]
    }
  ],
  examples: [
    ["¿Cuántos años tienes? — Tengo veintiún años.", "你多大？——我 21 岁。", "cuántos（多少）+ años（年）+ tienes（你有）→ 你有多少年；tengo + veintiún（21，在阳性名词 años 前 uno 变 un）+ años。"],
    ["Tengo treinta y tres años y mi hermana tiene veintiuno.", "我 33 岁，我姐妹 21 岁。", "tengo + treinta y tres（30 和 3，分开加 y）+ años；mi hermana tiene + veintiuno（后面没有名词，用完整的 veintiuno）。"],
    ["Mi padre tiene cincuenta y cinco años y mi madre tiene cuarenta y ocho.", "我父亲 55 岁，我母亲 48 岁。", "tiene + cincuenta y cinco（50 + 5）+ años；tiene + cuarenta y ocho（40 + 8），第二次 años 省略。"],
    ["Mi abuelo tiene setenta años y mi abuela tiene sesenta y nueve.", "我祖父 70 岁，我祖母 69 岁。", "setenta（70）+ años；sesenta y nueve（60 + 9）。setenta 和 sesenta 注意区分。"],
    ["Treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien.", "30、40、50、60、70、80、90、100。", "整十数各一个词，都以 -enta 结尾；cien 是 100。"],
    ["Hay cien estudiantes en la universidad.", "大学里有一百个学生。", "hay（有）+ cien（100，直接放名词前）+ estudiantes + en la universidad。"]
  ],
  vocab: [
    ["veintiuno", "21", "[bein-ti-U-no]，veinte y uno 拼成一个词"],
    ["veintiún", "21（在阳性名词前）", "veintiuno 掉 -o 加符号：veintiún años"],
    ["treinta", "30", "[TREIN-ta]"],
    ["cuarenta", "40", "[cua-REN-ta]"],
    ["cincuenta", "50", "[cin-CUEN-ta]"],
    ["sesenta", "60", "[se-SEN-ta]"],
    ["setenta", "70", "[se-TEN-ta]，和 sesenta 只差一个字母"],
    ["ochenta", "80", "[o-CHEN-ta]"],
    ["noventa", "90", "[no-BEN-ta]"],
    ["cien", "100", "[CIEN]，不说 ciento"],
    ["¿Cuántos años tienes?", "你多大？", "字面「你有多少年」"],
    ["tener … años", "……岁", "Tengo treinta años. 不用 ser"]
  ],
  exercises: [
    { q: "用西语写：27", a: "veintisiete" },
    { q: "用西语写：64", a: "sesenta y cuatro" },
    { q: "用西语写：99", a: "noventa y nueve" },
    { q: "选择：「我 21 岁」里 21 写成", opts: ["veintiún", "veintiuno", "veinte y un"], a: "veintiún" },
    { q: "翻译：你父亲多大？——他 70 岁。", a: "¿Cuántos años tiene tu padre? — Tiene setenta años." },
    { q: "翻译：我 35 岁。", a: "Tengo treinta y cinco años." }
  ],
  task: "从 20 数到 100（每次加 1 数到 30，之后每次加 10），再说出 4 个家人的年龄，录音。"
},

w7d4: {
  title: "tener hambre / sed / frío / calor",
  goal: "学完能说「我饿了」「我很渴」「我有点冷」，知道这些用 tener 不用 estar。",
  recap: [
    { q: "上一课：「你多大」？", a: "¿Cuántos años tienes?" },
    { q: "上一课：「21 岁」？", a: "veintiún años" },
    { q: "上一课：100？", a: "cien" }
  ],
  steps: [
    { explain: [
        { p: "昨天年龄是「有几年」，今天更多这种说法：中文「我饿」，西语说「我**有**饿」：**Tengo hambre**。hambre（饥饿）、sed（口渴）、frío（冷）、calor（热）都是名词，所以跟在 tener 后面，**不用 estar，也不用 ser**。问「你饿吗」：¿Tienes hambre?" },
        { table: { head: ["中文", "西语", "字面"], rows: [["我饿了", "Tengo hambre.", "我有饥饿"], ["我渴了", "Tengo sed.", "我有口渴"], ["我冷", "Tengo frío.", "我有冷"], ["我热", "Tengo calor.", "我有热"]] } }
      ],
      check: [
        { q: "选择：「我饿了」", opts: ["Tengo hambre.", "Estoy hambre.", "Soy hambre."], a: "Tengo hambre." },
        { q: "填空：¿Tienes ___?（你渴吗？）", a: "sed" }
      ]
    },
    { explain: [
        { p: "同一个套路再加两个：**sueño**（困，字面「睡意」）和 **miedo**（害怕）：Tengo sueño（我困了），Tengo miedo（我害怕）。换人就换 tener 的形状：Mi hijo tiene sueño（我儿子困了），Tenemos frío（我们冷）。" },
        { table: { head: ["中文", "西语"], rows: [["我困了", "Tengo sueño."], ["我害怕", "Tengo miedo."], ["我们冷", "Tenemos frío."], ["我儿子困了", "Mi hijo tiene sueño."]] } }
      ],
      check: [
        { q: "翻译：我困了。", a: "Tengo sueño." },
        { q: "填空：Nosotros ___ calor.（我们热）", a: "tenemos" }
      ]
    },
    { explain: [
        { p: "说程度：因为 hambre 这些是名词，「很」要用第 1 周的 **mucho/a**（很多），不是 muy（muy 只放形容词和副词前，如 muy bien）。mucho 跟名词的性别：hambre 和 sed 是阴性 → mucha hambre、mucha sed；frío、calor、sueño、miedo 是阳性 → mucho frío、mucho calor。「有点」是 **un poco**：Tengo un poco de sed，或者单独回答 Un poco." },
        { table: { head: ["程度", "例子"], rows: [["很", "mucha hambre / mucho frío"], ["有点", "un poco de sed / — Un poco."]] } }
      ],
      check: [
        { q: "选择：「我很饿」", opts: ["Tengo mucha hambre.", "Tengo muy hambre.", "Tengo mucho hambre."], a: "Tengo mucha hambre." },
        { q: "选择：「我很冷」", opts: ["Tengo mucho frío.", "Tengo mucha frío.", "Estoy muy frío."], a: "Tengo mucho frío." }
      ]
    }
  ],
  examples: [
    ["Tengo hambre.", "我饿了。", "tengo（我有）+ hambre（饥饿，名词，h 不发音）→ 我有饥饿 = 我饿了。"],
    ["¿Tienes sed? — Sí, tengo mucha sed.", "你渴吗？——是的，我很渴。", "tienes（你有）+ sed（口渴）；tengo + mucha（很多，配阴性 sed）+ sed。"],
    ["Tenemos frío. La ventana está abierta.", "我们冷。窗户开着。", "tenemos（我们有）+ frío（冷）；la ventana + está abierta（开着，状态）。"],
    ["Hoy tengo mucho calor.", "我今天很热。", "hoy（今天）+ tengo + mucho（很多，配阳性 calor）+ calor（热）。"],
    ["Mi hijo tiene sueño.", "我儿子困了。", "mi hijo（我儿子）+ tiene（他有）+ sueño（睡意）→ 他困了。"],
    ["¿Tienes miedo? — Un poco.", "你害怕吗？——有一点。", "tienes + miedo（害怕）；回答 un poco（一点），可以单独说。"]
  ],
  vocab: [
    ["hambre", "饥饿（tener hambre 饿）", "[AM-bre]，h 不发音；阴性，说 mucha hambre"],
    ["sed", "口渴", "[SED]，阴性，mucha sed"],
    ["frío", "冷", "[FRÍ-o]，阳性，mucho frío"],
    ["calor", "热", "[ca-LOR]，阳性，mucho calor"],
    ["sueño", "困", "[SUE-nyo]，字面「睡意」，mucho sueño"],
    ["miedo", "害怕", "[MIE-do]，mucho miedo"],
    ["un poco", "一点", "接名词加 de：un poco de sed"]
  ],
  exercises: [
    { q: "填空：Tengo ___.（我冷）", a: "frío" },
    { q: "填空：Mi madre tiene ___.（我母亲困了）", a: "sueño" },
    { q: "选择：「你饿吗」", opts: ["¿Tienes hambre?", "¿Estás hambre?", "¿Eres hambre?"], a: "¿Tienes hambre?" },
    { q: "选择：「我很渴」", opts: ["Tengo mucha sed.", "Tengo muy sed.", "Tengo mucho sed."], a: "Tengo mucha sed." },
    { q: "翻译：我们很热。", a: "Tenemos mucho calor." },
    { q: "翻译：你害怕吗？——不，我有点困。", a: "¿Tienes miedo? — No, tengo un poco de sueño." }
  ],
  task: "说 6 句自己现在的感觉（Tengo hambre / mucha sed / un poco de frío…），再问自己 3 句 ¿Tienes…?，录音。"
},

w7d5: {
  title: "介绍家庭；第 7 周复习",
  goal: "学完能说一段 40 秒的家庭介绍：几口人、每个人叫什么、多大、做什么。",
  recap: [
    { q: "上一课：「我饿了」？", a: "Tengo hambre." },
    { q: "上一课：「很渴」用 muy 还是 mucha？", a: "mucha：mucha sed" },
    { q: "上一课：「有一点」？", a: "un poco" }
  ],
  steps: [
    { explain: [
        { p: "介绍家庭先数人：**la persona**（人）是阴性，不管说的是男是女；「我们家四口人」= **En mi familia somos cuatro personas**（在我家我们是四个人），用 somos 因为「我们」包括自己。今天再加几个说人的词：el hombre（男人）、la mujer（女人）、el niño / la niña（小孩）、el marido（丈夫）、la esposa（妻子）。" },
        { table: { head: ["词", "意思", "说明"], rows: [["la persona", "人", "永远阴性，复数 personas"], ["el hombre / la mujer", "男人 / 女人", "hombre 的 h 不发音"], ["el niño / la niña", "小孩", "-o / -a 一对"], ["el marido / la esposa", "丈夫 / 妻子", "不是 -o / -a 一对，各记各的"]] } }
      ],
      check: [
        { q: "选择：「人」是", opts: ["la persona", "el persona", "la persono"], a: "la persona" },
        { q: "翻译：我们家三口人。", a: "En mi familia somos tres personas." }
      ]
    },
    { explain: [
        { p: "把第 3–7 周的句型串成一段家庭介绍，每个人三句：叫什么（se llama）、多大（tiene … años）、做什么（es + 职业）。最后一句说家人在哪（está en）。" },
        { table: { head: ["句子", "来自"], rows: [["En mi familia somos cuatro personas.", "W4 somos + 今天 persona"], ["Mi padre se llama Juan, tiene sesenta años y es médico.", "W4D1 se llama、W7D3 años、W4D2 职业"], ["Mi madre es profesora y está muy ocupada.", "W4D2 职业、W6D4 状态"], ["Tengo una hermana. Tiene un niño y una niña.", "W7D1 tengo、W7D2 tiene"], ["Mi familia está en Pekín y yo estoy en Madrid.", "W5 estar 位置"]] } }
      ],
      check: [
        { q: "翻译：我母亲叫 Marta，她 50 岁，是记者。", a: "Mi madre se llama Marta, tiene cincuenta años y es periodista." },
        { q: "翻译：我姐妹有一个儿子。", a: "Mi hermana tiene un hijo." }
      ]
    },
    { explain: [
        { p: "第 7 周结束。tener 管三件事：拥有（tengo un móvil）、年龄（tengo treinta años）、感觉（tengo hambre）。到今天你有三个完整的动词表：ser、estar、tener，各六个形状。周六录 40 秒家庭介绍，周日周测。下周开始学动作：说话、学习、工作。" }
      ],
      check: [
        { q: "选择：「我有一部手机 / 我 30 岁 / 我饿了」都用哪个动词？", opts: ["tener", "ser", "estar"], a: "tener" },
        { q: "按顺序说出 tener 的六个形状", a: "tengo, tienes, tiene, tenemos, tenéis, tienen" }
      ]
    }
  ],
  examples: [
    ["En mi familia somos cuatro personas.", "我们家四口人。", "en mi familia（在我家）+ somos（我们是）+ cuatro personas（四个人，persona 阴性复数）。"],
    ["Mi padre es un hombre muy bueno. Tiene sesenta años.", "我父亲是个很好的男人。他 60 岁。", "es un hombre（是一个男人，h 不发音）+ muy bueno（很好的，放名词后）；tiene sesenta años（60 岁）。"],
    ["Mi madre es una mujer muy ocupada: es médica.", "我母亲是个很忙的女人：她是医生。", "es una mujer（是一个女人）+ muy ocupada（很忙的，配阴性）；es médica（女医生，职业不加 una）。"],
    ["Mi hermana tiene un niño y una niña.", "我姐妹有一个男孩和一个女孩。", "mi hermana + tiene（她有）+ un niño（一个男孩）+ y + una niña（一个女孩）。"],
    ["El marido de Ana es ingeniero y la esposa de Juan es profesora.", "Ana 的丈夫是工程师，Juan 的妻子是老师。", "el marido de Ana（Ana 的丈夫）+ es ingeniero；la esposa de Juan（Juan 的妻子）+ es profesora。"],
    ["Mi familia está en Pekín y yo estoy en Madrid.", "我家人在北京，我在马德里。", "mi familia + está（它在，家庭是单数）+ en Pekín；yo estoy（我在，加 yo 对比）+ en Madrid。"]
  ],
  vocab: [
    ["la persona", "人", "[per-SO-na]，永远阴性"],
    ["el hombre", "男人", "[OM-bre]，h 不发音"],
    ["la mujer", "女人", "[mu-JER]，也有「妻子」的意思"],
    ["el niño / la niña", "小孩", "[NI-nyo]"],
    ["el marido", "丈夫", "[ma-RI-do]"],
    ["la esposa", "妻子", "[es-PO-sa]，也说 la mujer"]
  ],
  exercises: [
    { q: "填空：En mi familia ___ cinco personas.", a: "somos" },
    { q: "选择：「男人」", opts: ["el hombre", "la hombre", "el hombra"], a: "el hombre" },
    { q: "填空：Mi hermano tiene una ___.（女儿）", a: "hija" },
    { q: "翻译：我的丈夫是服务员，他 40 岁。", a: "Mi marido es camarero, tiene cuarenta años." },
    { q: "翻译：Juan 的妻子是中国人。", a: "La esposa de Juan es china." },
    { q: "翻译：我祖父母在马德里，我父母在北京。", a: "Mis abuelos están en Madrid y mis padres están en Pekín." }
  ],
  task: "录一段 40 秒家庭介绍：几口人、每个人叫什么、多大、做什么、在哪里；再把 ser、estar、tener 三张表各念一遍。"
}

});
