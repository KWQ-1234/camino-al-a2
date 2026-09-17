window.LESSONS = Object.assign(window.LESSONS || {}, {

/* ───────── 第 23 周 · 正式命令式与双代词 ───────── */

w23d1: {
  title: "usted 命令式",
  goal: "学完能用 usted / ustedes 对陌生人、客户下达礼貌指令：请进、请签名、请稍等。",
  explain: [
    { p: "第 17 周学的 tú 命令式（habla, come）只对熟人用。对陌生人、长辈、客户要用 **usted 命令式**（imperativo de usted），对一群人用 **ustedes**（拉美的 ustedes 也用于「你们」）。它的做法和 tú 否定式一样，来自**虚拟式**（subjuntivo）词干：取现在时 yo 形式去掉 -o，-ar 动词换成 **-e / -en**，-er / -ir 动词换成 **-a / -an**。所以 tú 说 habla，usted 说 hable；tú 说 come，usted 说 coma。" },
    { table: { head: ["动词", "yo 现在时", "usted", "ustedes"], rows: [["hablar", "hablo", "hable", "hablen"], ["comer", "como", "coma", "coman"], ["escribir", "escribo", "escriba", "escriban"], ["tener", "tengo", "tenga", "tengan"], ["venir", "vengo", "venga", "vengan"], ["poner", "pongo", "ponga", "pongan"], ["hacer", "hago", "haga", "hagan"], ["decir", "digo", "diga", "digan"], ["salir", "salgo", "salga", "salgan"], ["ir", "voy", "vaya", "vayan"], ["ser", "soy", "sea", "sean"], ["dar", "doy", "dé", "den"]] } },
    { p: "**从 yo 出发**这条路能覆盖几乎所有不规则动词：tengo → tenga，pongo → ponga，digo → diga，conozco → conozca。只有 ir（vaya）、ser（sea）、dar（dé）、estar（esté）、saber（sepa）要单独背。拼写小调整：-car → -que（busque），-gar → -gue（pague），-zar → -ce（empiece），只为保持原来的读音。" },
    { p: "办公场景的常用指令：Pase（请进）、Espere un momento（请稍等）、Firme aquí（请在这里签名）、Rellene el formulario（请填表）。加上 por favor 更客气。" },
    { tip: "带反身或宾语代词时，代词接在命令式后面并加重音符号：siéntese（请坐）、dígame（请说）。第 4 天专门讲代词位置，现在先把这两个当整体记住。" }
  ],
  examples: [
    ["Pase, por favor. Siéntese.", "请进。请坐。"],
    ["Espere un momento, ahora le atiendo.", "请稍等，我马上为您服务。"],
    ["Rellene este formulario con letra clara.", "请用清晰的字迹填写这张表格。"],
    ["Firme aquí y ponga la fecha.", "请在这里签名并写上日期。"],
    ["Tenga, su recibo.", "给您，您的收据。"],
    ["Vayan a la ventanilla tres, por favor.", "请各位去三号窗口。"],
    ["Dígame su nombre y su número de teléfono.", "请告诉我您的姓名和电话号码。"],
    ["Traiga una fotocopia de su documento.", "请带一份您证件的复印件来。"]
  ],
  vocab: [
    ["la oficina", "办公室；办事处", "oficina de correos 邮局"],
    ["la ventanilla", "窗口（柜台）", "ventanilla tres 三号窗口"],
    ["el formulario", "表格", "rellenar un formulario 填表"],
    ["rellenar", "填写", "ll 读呀"],
    ["firmar", "签名", "la firma 签名（名词）"],
    ["el recibo", "收据", "Tenga, su recibo."],
    ["el documento", "证件；文件", "documento de identidad 身份证件"],
    ["la fotocopia", "复印件", "hacer una fotocopia 复印"],
    ["el turno", "轮次；号", "coger turno 取号；拉美 tomar turno"],
    ["el trámite", "手续", "hacer un trámite 办手续"],
    ["el/la funcionario/a", "公务员；办事员", ""],
    ["atender", "接待；为……服务", "e→ie：atiendo；Ahora le atiendo."],
    ["Pase.", "请进。", "pasar 的 usted 命令式"]
  ],
  exercises: [
    { q: "填空：hablar，usted 命令式 → ___", a: "hable" },
    { q: "填空：tener，ustedes 命令式 → ___", a: "tengan" },
    { q: "选择：___ aquí, por favor. (firmar, usted)", opts: ["Firme", "Firma", "Firmo"], a: "Firme" },
    { q: "选择：___ al segundo piso. (ir, ustedes)", opts: ["Vayan", "Van", "Id"], a: "Vayan" },
    { q: "选择：从 yo 形式推导 usted 命令式，哪个是对的？", opts: ["pongo → ponga", "pongo → pone", "pongo → pongue"], a: "pongo → ponga" },
    { q: "把 tú 命令式改成 usted：espera → ___，escribe → ___，ven → ___", a: "espere / escriba / venga" },
    { q: "翻译：请填写这张表格。（usted）", a: "Rellene este formulario, por favor." },
    { q: "翻译：请各位稍等。（ustedes）", a: "Esperen un momento, por favor." }
  ],
  task: "扮演办事员，用 usted 命令式对着录音说 8 条指令（请进、请坐、请稍等、请签名、请填表、请出示证件、请去三号窗口、请拿好收据）。"
},

w23d2: {
  title: "否定命令式全人称",
  goal: "学完能对任何人说「别……」：no hables, no hable, no habléis, no hablen。",
  explain: [
    { p: "肯定命令式各人称形式不同（habla / hable / hablad / hablen），但**否定命令式**（imperativo negativo）非常统一：全部人称都是 **no + 虚拟式现在时**。usted 的肯定式 hable 前面加 no 就是否定式；tú 则要换形式：habla → no hables，come → no comas。vosotros 的肯定式是 -ad / -ed / -id（hablad, comed, vivid），否定式 no habléis / no comáis / no viváis。" },
    { table: { head: ["人称", "hablar 肯定", "hablar 否定", "tener 肯定", "tener 否定"], rows: [["tú", "habla", "no hables", "ten", "no tengas"], ["usted", "hable", "no hable", "tenga", "no tenga"], ["nosotros", "hablemos", "no hablemos", "tengamos", "no tengamos"], ["vosotros", "hablad", "no habléis", "tened", "no tengáis"], ["ustedes", "hablen", "no hablen", "tengan", "no tengan"]] } },
    { p: "tú 的不规则肯定式（di, haz, ve, pon, sal, ten, ven, sé）在否定式里全部回到虚拟式：no digas, no hagas, no vayas, no pongas, no salgas, no tengas, no vengas, no seas。还有 no des（dar）、no estés（estar）。" },
    { p: "公共场所的告示常用**原形**表示禁止：No fumar（禁止吸烟）、No pasar（禁止通行），或 **Prohibido + 原形**：Prohibido aparcar。口头对某个人说时才用命令式：No fume aquí, por favor。" },
    { tip: "代词在否定命令式里放在动词**前面**：No se preocupe（您别担心）、No lo toques（别碰它）。" }
  ],
  examples: [
    ["No hable tan alto, por favor.", "请您别说这么大声。"],
    ["No fumen en la sala de espera.", "请各位不要在候诊室吸烟。"],
    ["No toquéis eso, es peligroso.", "你们别碰那个，很危险。"],
    ["No dejes la puerta abierta.", "别让门开着。"],
    ["No se preocupe, no es grave.", "您别担心，不严重。"],
    ["No aparquen delante de la entrada.", "请各位不要停在入口前面。"],
    ["No empuje; tire de la puerta.", "别推，请拉门。"],
    ["Prohibido pasar. Salida de emergencia.", "禁止通行。紧急出口。"]
  ],
  vocab: [
    ["prohibido/a", "禁止的", "Prohibido fumar."],
    ["fumar", "吸烟", "No fumar 禁止吸烟"],
    ["molestar", "打扰", "No molestar（酒店门牌）"],
    ["la entrada", "入口；门票", ""],
    ["la salida", "出口", "salida de emergencia 紧急出口"],
    ["empujar", "推", "门上标 Empujar"],
    ["tirar", "拉；扔", "门上标 Tirar；tirar de 拉"],
    ["aparcar", "停车", "拉美 estacionar"],
    ["el peligro", "危险", "peligroso/a 危险的"],
    ["¡Cuidado!", "小心！", "tener cuidado 小心"],
    ["el aviso", "通知；告示", "aviso importante"],
    ["la sala de espera", "候诊室；候车室", ""],
    ["preocuparse", "担心", "No se preocupe. 您别担心"]
  ],
  exercises: [
    { q: "填空：hablar，tú 否定命令式 → no ___", a: "hables" },
    { q: "填空：venir，vosotros 否定命令式 → no ___", a: "vengáis" },
    { q: "选择：No ___ eso, por favor. (hacer, usted)", opts: ["haga", "hace", "haz"], a: "haga" },
    { q: "选择：No ___ tarde, chicos. (llegar, vosotros)", opts: ["lleguéis", "llegáis", "llegad"], a: "lleguéis" },
    { q: "选择：告示牌上「禁止停车」通常写", opts: ["Prohibido aparcar", "No aparque", "No aparcas"], a: "Prohibido aparcar" },
    { q: "把肯定改成否定：pon (tú) → / vaya (usted) → / salid (vosotros) →", a: "no pongas / no vaya / no salgáis" },
    { q: "翻译：您别担心。", a: "No se preocupe." },
    { q: "翻译：别（你）关窗户。（cerrar）", a: "No cierres la ventana." }
  ],
  task: "写 6 条你家或公司的「禁止」规则，各用 tú、usted、vosotros 否定命令式说一遍并录音。"
},

w23d3: {
  title: "双代词 se lo",
  goal: "学完能把「把它给他」说成一个短句：se lo doy。",
  explain: [
    { p: "间接宾语代词（me / te / le / nos / os / les，说「给谁」）和直接宾语代词（lo / la / los / las，说「什么」）可以连用。规则只有两条：① **间接在前，直接在后**：¿Me das el bolígrafo? — Te lo doy。② 两个都是第三人称时，**le / les 变成 se**：不能说 le lo，要说 **se lo**。这就是 se lo 的来历，和反身的 se 无关。" },
    { table: { head: ["给谁", "+ lo", "+ la", "+ los", "+ las"], rows: [["me", "me lo", "me la", "me los", "me las"], ["te", "te lo", "te la", "te los", "te las"], ["le → se", "se lo", "se la", "se los", "se las"], ["nos", "nos lo", "nos la", "nos los", "nos las"], ["os", "os lo", "os la", "os los", "os las"], ["les → se", "se lo", "se la", "se los", "se las"]] } },
    { p: "se 本身分不清是「给他 / 给她 / 给您 / 给他们」，需要时加 **a + 人**说明：Se lo envío a usted / a ella / a mis padres。名词变成代词时性数要跟原名词一致：la llave → se **la** doy；los documentos → se **los** entrego。" },
    { p: "两个代词一起放在变位动词前面，中间不插任何词；否定的 no 放在最前面：No te lo doy。第 4 天再讲接在动词后面的情况。" },
    { tip: "常用问句：¿Me lo puede repetir?（您能再说一遍吗？）¿Me la das?（把它给我好吗？）" }
  ],
  examples: [
    ["¿Me das el bolígrafo? — Sí, te lo doy.", "把笔给我好吗？——好，给你。"],
    ["Le envío el paquete a mi madre. → Se lo envío mañana.", "我给妈妈寄包裹。→ 我明天寄给她。"],
    ["¿Le has dado la llave al recepcionista? — Sí, se la he dado.", "你把钥匙给前台了吗？——给了。"],
    ["No me lo explicaron bien.", "他们没给我解释清楚。"],
    ["Os la mando por correo esta tarde.", "我今天下午用邮件发给你们。"],
    ["¿Me lo puede repetir, por favor?", "您能再给我重复一遍吗？"],
    ["Nos los devuelven el lunes.", "他们周一把它们还给我们。"],
    ["Se lo digo a ella, no a usted.", "我是对她说的，不是对您。"]
  ],
  vocab: [
    ["el bolígrafo", "圆珠笔", "口语 el boli"],
    ["el paquete", "包裹", "enviar un paquete"],
    ["enviar", "寄；发送", "envío, envías…（í 有符号）"],
    ["mandar", "寄；发送；命令", "口语常用，同 enviar"],
    ["el sobre", "信封", ""],
    ["la llave", "钥匙", "ll 读呀"],
    ["devolver", "归还", "o→ue：devuelvo；分词 devuelto"],
    ["prestar", "借给", "¿Me lo prestas? 借我用用？"],
    ["entregar", "交付；递交", ""],
    ["explicar", "解释", "-car：expliqué"],
    ["repetir", "重复", "e→i：repito"],
    ["el mensaje", "消息；短信", "dejar un mensaje 留言"],
    ["la contraseña", "密码", "ñ"]
  ],
  exercises: [
    { q: "选择：¿Me prestas tu coche? — Sí, ___ presto.", opts: ["te lo", "te la", "me lo"], a: "te lo" },
    { q: "选择：Le doy las llaves a Ana. → ___ doy.", opts: ["Se las", "Le las", "Se la"], a: "Se las" },
    { q: "选择：¿Nos envías el paquete? — Sí, ___ envío hoy.", opts: ["os lo", "os la", "nos lo"], a: "os lo" },
    { q: "填空：¿Le has dado el mensaje a Juan? — Sí, ___ ___ he dado.", a: "se lo" },
    { q: "为什么不能说 le lo？", a: "两个第三人称代词连用时 le / les 要变成 se：se lo" },
    { q: "用代词改写：Explico la contraseña a mis padres.", a: "Se la explico." },
    { q: "翻译：他们没有把它（信封）还给我。", a: "No me lo devolvieron." },
    { q: "翻译：您能再给我重复一遍吗？", a: "¿Me lo puede repetir?" }
  ],
  task: "把 8 句例句各跟读 2 遍；再用 prestar / enviar / devolver / explicar 各造一句含双代词的句子并录音。"
},

w23d4: {
  title: "代词的三个位置",
  goal: "学完知道 se lo 放在动词前还是后：se lo doy / dámelo / voy a dárselo。",
  explain: [
    { p: "代词（单个或双代词）只有**三种位置**：① 放在变位动词**前面**——现在时、过去时、否定命令式都是如此：Se lo doy. No me lo des. ② **接在肯定命令式后面**，写成一个词：Dámelo. Démelo. Dígaselo. ③ 遇到**原形或副动词**时可二选一：接在后面（Voy a dárselo. Estoy explicándoselo.）或放在前面的变位动词之前（Se lo voy a dar. Se lo estoy explicando.），意思一样。" },
    { table: { head: ["情况", "位置", "例句"], rows: [["变位动词", "前面", "Te lo envío hoy."], ["否定命令式", "前面", "No me lo envíes."], ["肯定命令式", "后面，连写", "Envíamelo. / Envíemelo."], ["原形（poder, ir a, querer…）", "后面连写，或前面", "Puedo enviártelo. / Te lo puedo enviar."], ["副动词 estar + -ando", "后面连写，或前面", "Estoy enviándotelo. / Te lo estoy enviando."]] } },
    { p: "接在后面时原来的重音位置不变，所以往往要**补写重音符号**：da → dámelo（DA-me-lo），envía → envíamelo，explicando → explicándoselo，enviar → enviártelo。规律：加代词后重音仍在原处，一旦不符合重音规则就写符号。" },
    { p: "反身代词同理：me lo pongo（我把它穿上）→ 命令式 póntelo / póngaselo；否定 no te lo pongas。" },
    { tip: "最容易错的是 usted 肯定命令式 + 代词：dígame（请说）、démelo（请给我）、siéntese（请坐）——都连写并加符号。" }
  ],
  examples: [
    ["Envíemelo por correo electrónico, por favor.", "请用电子邮件把它发给我。"],
    ["No me lo envíe hoy; envíemelo mañana.", "今天别发给我，明天发。"],
    ["Voy a imprimírselo ahora mismo.", "我现在就给您打印出来。"],
    ["¿Puede confirmármela? / ¿Me la puede confirmar?", "您能帮我确认它（预约）吗？"],
    ["Estoy adjuntándotelo al correo.", "我正在把它附在邮件里给你。"],
    ["Dígaselo al director, por favor.", "请把这事告诉经理。"],
    ["No se lo digas a nadie.", "别告诉任何人。"],
    ["Guárdalo, no lo borres.", "把它保存好，别删。"]
  ],
  vocab: [
    ["la cita", "预约；约会", "pedir cita 预约"],
    ["confirmar", "确认", "confirmar una cita"],
    ["cancelar", "取消", ""],
    ["la reunión", "会议", "reunirse 开会"],
    ["el informe", "报告", ""],
    ["imprimir", "打印", "分词 impreso"],
    ["la impresora", "打印机", ""],
    ["adjuntar", "附上（附件）", "adjunto/a 附件"],
    ["guardar", "保存；保管", ""],
    ["borrar", "删除；擦掉", ""],
    ["el archivo", "文件（电子）", "abrir un archivo"],
    ["la copia", "副本；拷贝", "hacer una copia"],
    ["el/la director/a", "经理；主管；校长", ""]
  ],
  exercises: [
    { q: "选择：¿Me das el informe? — Sí, ___.", opts: ["dámelo", "te lo doy", "dáselo"], a: "te lo doy" },
    { q: "选择：¡El informe! ___ ahora. (dar, tú, 给我它)", opts: ["Dámelo", "Me lo da", "Dalo me"], a: "Dámelo" },
    { q: "选择：No ___ a nadie. (decir, tú, 把它告诉)", opts: ["se lo digas", "dígaselo", "díselo"], a: "se lo digas" },
    { q: "选择：Quiero ___ hoy. (enviar, 把它发给你)", opts: ["enviártelo", "enviarte lo", "te enviarlo"], a: "enviártelo" },
    { q: "把 Se lo estoy explicando 改成代词在后的形式", a: "Estoy explicándoselo." },
    { q: "填空：usted 命令式 + 代词：dar + me + lo → ___", a: "démelo" },
    { q: "为什么 dámelo 要写重音符号？", a: "加代词后重音仍在 da，变成倒数第三音节，不符合规则，所以要写符号" },
    { q: "翻译：请（usted）把它（la copia）发给我。", a: "Envíemela, por favor." }
  ],
  task: "三种位置各写 6 句、共 18 句（含至少 6 句双代词），朗读录音；重点听清 dámelo / démelo 的重音。"
},

w23d5: {
  title: "银行邮局酒店",
  goal: "学完能在银行、邮局、酒店前台用 usted 完成一次完整的正式对话。",
  explain: [
    { p: "正式场合的对话有固定开场和收尾。办事员会说 **¿En qué puedo ayudarle?**（有什么可以帮您？），你用 **Quisiera + 原形** 说需求；对方索要证件时说 **¿Me permite su documento?**，你递过去说 **Aquí lo tiene**（给您）。这些句子把本周的 usted 命令式和双代词全用上了。" },
    { table: { head: ["场景", "对方说", "你说"], rows: [["银行", "¿En qué puedo ayudarle?", "Quisiera abrir una cuenta corriente."], ["银行", "¿Me permite su documento?", "Sí, aquí lo tiene."], ["银行", "Firme aquí, por favor.", "¿Me da una copia?"], ["邮局", "¿Certificado o normal?", "Certificado, por favor. ¿Cuánto tarda?"], ["邮局", "Rellene este formulario.", "¿Me lo puede rellenar usted? No entiendo la letra."], ["酒店", "Buenas tardes, ¿tiene reserva?", "Sí, a nombre de Li."], ["酒店", "¿Me deja su documento? Firme aquí.", "Claro. ¿A qué hora es el desayuno?"], ["酒店", "Tenga, su llave.", "Gracias. ¿Hay caja fuerte en la habitación?"]] } },
    { p: "几个高频动词：**sacar dinero**（取钱）、**ingresar**（存钱）、**hacer una transferencia**（转账）；邮局里 **enviar / mandar** 加 certificado（挂号）；酒店里 **dejar la llave en recepción**（把钥匙留在前台）。收尾：Gracias, muy amable.（谢谢，您真好）——对方回 A usted.（该谢您）。" },
    { tip: "礼貌三件套：usted 命令式 + por favor + ¿Me puede…? 每句只用一个「请」就够，不要堆叠。" }
  ],
  examples: [
    ["¿En qué puedo ayudarle? — Quisiera sacar dinero de mi cuenta.", "有什么可以帮您？——我想从账户里取钱。"],
    ["¿Me permite su documento de identidad? — Sí, aquí lo tiene.", "能看一下您的身份证件吗？——好，给您。"],
    ["Quisiera enviar este paquete a China, certificado.", "我想把这个包裹挂号寄到中国。"],
    ["¿Cuánto tarda en llegar? — Unos diez días.", "多久能到？——大约十天。"],
    ["Tengo una reserva a nombre de Wang.", "我有一个以 Wang 名义的预订。"],
    ["¿Me puede dar la factura, por favor?", "能给我开发票吗？"],
    ["Deje la llave en recepción, por favor.", "请您把钥匙留在前台。"],
    ["Gracias, muy amable. — A usted.", "谢谢，您真好。——该谢您。"]
  ],
  vocab: [
    ["la cuenta corriente", "活期账户", "abrir una cuenta"],
    ["sacar dinero", "取钱", "拉美 retirar dinero"],
    ["ingresar", "存钱", "拉美 depositar"],
    ["el cajero automático", "自动取款机", "口语 el cajero"],
    ["la transferencia", "转账", "hacer una transferencia"],
    ["certificado/a", "挂号的（邮件）", "carta certificada"],
    ["tardar", "花费（时间）", "¿Cuánto tarda?"],
    ["el/la recepcionista", "前台接待员", ""],
    ["la recepción", "前台", ""],
    ["la caja fuerte", "保险箱", ""],
    ["el carné de identidad", "身份证", "西班牙 el DNI"],
    ["la factura", "发票；账单（服务）", "比 la cuenta 正式"],
    ["a nombre de", "以……的名义", "reserva a nombre de Li"],
    ["muy amable", "您真好（道谢）", "回答 A usted."]
  ],
  exercises: [
    { q: "选择：办事员开场问", opts: ["¿En qué puedo ayudarle?", "¿Qué quieres?", "¿Cómo te llamas?"], a: "¿En qué puedo ayudarle?" },
    { q: "选择：¿Me permite su documento? — Sí, ___.", opts: ["aquí lo tiene", "aquí lo tienes", "aquí la tiene"], a: "aquí lo tiene" },
    { q: "选择：Quisiera ___ dinero. (取钱)", opts: ["sacar", "ingresar", "tardar"], a: "sacar" },
    { q: "填空：¿Cuánto ___ en llegar el paquete? (tardar)", a: "tarda" },
    { q: "翻译：我想开一个活期账户。", a: "Quisiera abrir una cuenta corriente." },
    { q: "翻译：我有一个以 Chen 名义的预订。", a: "Tengo una reserva a nombre de Chen." },
    { q: "翻译：请（usted）把钥匙留在前台。", a: "Deje la llave en recepción, por favor." },
    { q: "别人说 Gracias, muy amable，你怎么回？", a: "A usted." }
  ],
  task: "分饰两角录一段 90 秒的酒店入住对话，前台全程用 usted 命令式，客人至少用 2 个双代词。"
},

/* ───────── 第 24 周 · 条件式与礼貌 ───────── */

w24d1: {
  title: "条件式的构成",
  goal: "学完能把任何动词变成「会……」的条件式：hablaría, tendría, haría。",
  explain: [
    { p: "**条件式**（condicional）的中文感觉是「会……、可以……、要是……就……」。构成非常简单：**整个原形 + -ía, -ías, -ía, -íamos, -íais, -ían**，三类动词完全相同（这套词尾就是 -er / -ir 动词过去未完成时的词尾）。hablar → hablaría，comer → comería，vivir → viviría。" },
    { table: { head: ["人称", "hablar", "tener", "hacer"], rows: [["yo", "hablaría", "tendría", "haría"], ["tú", "hablarías", "tendrías", "harías"], ["él / ella / usted", "hablaría", "tendría", "haría"], ["nosotros/as", "hablaríamos", "tendríamos", "haríamos"], ["vosotros/as", "hablaríais", "tendríais", "haríais"], ["ellos / ustedes", "hablarían", "tendrían", "harían"]] } },
    { p: "不规则词干和第 22 周的将来时**完全一样**：tendr-, podr-, pondr-, saldr-, vendr-, sabr-, querr-, habr-, har-, dir-。将来时说 tendré，条件式说 tendría；会一个就会另一个。" },
    { p: "条件式的四个用途，本周逐日展开：① 礼貌请求（Me gustaría…, ¿Podrías…?）；② 建议（Deberías…）；③ 假设与梦想（Yo viviría en…）；④ 过去角度的将来（Dijo que vendría 他说过他会来）。" },
    { tip: "yo 和 él 形式相同（hablaría），必要时加主语代词。所有条件式的 í 都带符号，别漏。" }
  ],
  examples: [
    ["Me gustaría viajar a Argentina.", "我想去阿根廷旅行。"],
    ["¿Podrías ayudarme con esto?", "你能帮我一下这个吗？"],
    ["Yo no haría eso.", "我不会那么做。"],
    ["Con más tiempo, aprendería italiano.", "有更多时间的话，我会学意大利语。"],
    ["Dijo que vendría a las cinco.", "他说他五点会来。"],
    ["Sería mejor salir temprano.", "早点出发会更好。"],
    ["¿Qué harías tú con un millón de euros?", "有一百万欧元你会做什么？"],
    ["Tendríamos que cambiar de idea.", "我们得改变主意了。"]
  ],
  vocab: [
    ["el consejo", "建议", "dar un consejo"],
    ["aconsejar", "建议；劝告", ""],
    ["recomendar", "推荐", "e→ie：recomiendo"],
    ["la sugerencia", "提议；建议", ""],
    ["la idea", "主意", "cambiar de idea 改变主意"],
    ["la opción", "选择；选项", ""],
    ["elegir", "选择", "e→i：elijo, eliges"],
    ["cambiar", "改变；换", "cambiar de + 名词"],
    ["mejorar", "改善；变好", ""],
    ["la decisión", "决定", "tomar una decisión 做决定"],
    ["decidir", "决定", ""],
    ["la costumbre", "习惯", "tener la costumbre de"]
  ],
  exercises: [
    { q: "填空：comer，yo 条件式 → ___", a: "comería" },
    { q: "填空：poder，nosotros 条件式 → ___", a: "podríamos" },
    { q: "选择：Yo ___ otra opción. (elegir)", opts: ["elegiría", "elegía", "elegiré"], a: "elegiría" },
    { q: "选择：¿Qué ___ tú en mi lugar? (hacer)", opts: ["harías", "hacías", "haces"], a: "harías" },
    { q: "选择：条件式的不规则词干与哪个时态相同？", opts: ["将来时", "过去未完成时", "简单过去时"], a: "将来时" },
    { q: "变位：decir，ellos → / salir，tú → / querer，usted →", a: "dirían / saldrías / querría" },
    { q: "翻译：他说他会打电话给我。（llamar）", a: "Dijo que me llamaría." },
    { q: "翻译：我们想改变主意。（me gustaría）", a: "Nos gustaría cambiar de idea." }
  ],
  task: "把 12 个常用动词（hablar, comer, vivir, tener, poder, hacer, decir, salir, poner, venir, saber, querer）按 yo / tú / nosotros 说成条件式，计时 3 分钟并录音。"
},

w24d2: {
  title: "礼貌地提要求",
  goal: "学完能用 me gustaría / ¿podría? / ¿le importaría? 三档礼貌提要求。",
  explain: [
    { p: "西语里提要求的礼貌程度靠**动词形式**调节。直接说 Quiero… 在店里、办公室会显得生硬；换成条件式马上柔和：**Me gustaría**（我想……）、**Querría / Quisiera**（我想要……）。问别人能不能做时也一样：¿Puedes? → **¿Podrías?** → **¿Podría usted?**。最客气的一档是 **¿Le importaría + 原形?**（您介意……吗？）。" },
    { table: { head: ["档次", "说法", "例"], rows: [["直接", "Quiero… / ¿Puedes…?", "Quiero un café. ¿Puedes abrir?"], ["客气", "Me gustaría… / ¿Podrías…?", "Me gustaría un café. ¿Podrías abrir?"], ["正式", "Querría… / ¿Podría usted…?", "Querría un café. ¿Podría abrir?"], ["最正式", "¿Le importaría…? / ¿Sería posible…?", "¿Le importaría abrir? ¿Sería posible cambiar?"]] } },
    { p: "问「介意吗」有两种：**¿Te importa si + 现在时?**（你介意我……吗？后面是自己要做的事：¿Te importa si abro la ventana?）和 **¿Te importaría + 原形?**（请对方做事）。回答「不介意，请便」是 **No, claro / Adelante**。" },
    { p: "开口前先道歉一句更自然：**Disculpe**（打扰一下，对 usted）/ **Perdona**（对 tú）。要求说完加 por favor。" },
    { tip: "me gustaría 后面本周只接原形（me gustaría cambiar…）；「我希望你……」要接虚拟式，留到第 25 周。" }
  ],
  examples: [
    ["Me gustaría cambiar de asiento, por favor.", "我想换个座位。"],
    ["¿Podría bajar el volumen? No oigo nada.", "您能把音量调低吗？我什么都听不见。"],
    ["¿Le importaría apagar el aire acondicionado?", "您介意关掉空调吗？"],
    ["Querría una mesa cerca de la ventana.", "我想要一张靠窗的桌子。"],
    ["¿Sería posible pagar con tarjeta?", "可以刷卡付款吗？"],
    ["¿Te importa si abro la ventana? — No, adelante.", "你介意我开窗吗？——不介意，请便。"],
    ["Disculpe la molestia, ¿podría repetirlo?", "抱歉打扰，您能再说一遍吗？"],
    ["Nos gustaría reservar para el sábado.", "我们想预订周六。"]
  ],
  vocab: [
    ["el favor", "帮忙", "pedir un favor 请人帮忙"],
    ["importar", "在意；介意", "¿Le importaría…?"],
    ["disculpe", "打扰一下；抱歉（usted）", "对 tú 说 perdona / disculpa"],
    ["la molestia", "打扰；麻烦", "Disculpe la molestia."],
    ["adelante", "请便；请进", ""],
    ["el asiento", "座位", "cambiar de asiento"],
    ["el volumen", "音量", "bajar / subir el volumen"],
    ["la calefacción", "暖气", ""],
    ["el aire acondicionado", "空调", ""],
    ["apagar", "关掉（电器）", "-gar：apagué"],
    ["encender", "打开（电器）；点燃", "e→ie：enciendo"],
    ["el descuento", "折扣", "hacer un descuento"],
    ["la cola", "队；队伍", "hacer cola 排队"]
  ],
  exercises: [
    { q: "选择：最客气的一档是", opts: ["¿Le importaría abrir la puerta?", "¿Puedes abrir la puerta?", "Abre la puerta."], a: "¿Le importaría abrir la puerta?" },
    { q: "选择：___ cambiar de asiento. (我想)", opts: ["Me gustaría", "Me gusta", "Me gustaba"], a: "Me gustaría" },
    { q: "选择：¿Te importa si ___ la ventana? (cerrar)", opts: ["cierro", "cerraría", "cerrar"], a: "cierro" },
    { q: "选择：¿Le importaría ___ el volumen? (bajar)", opts: ["bajar", "baja", "bajaría"], a: "bajar" },
    { q: "填空：¿___ usted apagar la calefacción? (poder，条件式)", a: "Podría" },
    { q: "翻译：您能给我打个折吗？", a: "¿Podría hacerme un descuento?" },
    { q: "翻译：我们想要一张两人桌。（querría）", a: "Querríamos una mesa para dos." },
    { q: "翻译：抱歉打扰，您介意开一下门吗？", a: "Disculpe la molestia, ¿le importaría abrir la puerta?" }
  ],
  task: "在 5 个日常场景（咖啡店、公交、办公室、邻居、商店）各说一句「直接 → 客气 → 最正式」三档要求，共 15 句录音。"
},

w24d3: {
  title: "deberías 给建议",
  goal: "学完能给朋友 5 条健康建议，从委婉到强烈。",
  explain: [
    { p: "给建议最常用 **deberías + 原形**（你应该……），比现在时 debes 委婉，因为条件式把「命令」变成了「我觉得」。更强一点是 **tendrías que + 原形**（你得……），更软一点是 **podrías + 原形**（你可以……）。不带主语的说法：**Lo mejor sería + 原形**（最好是……）。" },
    { table: { head: ["强度", "句型", "例"], rows: [["建议", "Podrías…", "Podrías caminar al trabajo."], ["应该", "Deberías…", "Deberías dormir más."], ["必须", "Tendrías que…", "Tendrías que dejar de fumar."], ["最好", "Lo mejor sería…", "Lo mejor sería ir al médico."], ["换位", "Yo que tú / Yo en tu lugar…", "Yo que tú, comería más verdura."], ["提议", "¿Por qué no + 现在时?", "¿Por qué no vas al gimnasio?"]] } },
    { p: "**Yo que tú**（我要是你）和 **Yo en tu lugar**（换成我在你的位置）后面接条件式，说的是「我会怎么做」。**¿Por qué no…?** 用现在时，语气最轻。否定建议：No deberías trabajar tanto。" },
    { p: "健康话题里三个高频结构：**dejar de + 原形**（戒掉、停止）、**hacer ejercicio**（锻炼）、**tomar menos azúcar**（少吃糖）。" },
    { tip: "deberías 是条件式，不是过去时；「你本应该」是 deberías haber + 分词，A2 阶段先不用。" }
  ],
  examples: [
    ["Deberías dormir al menos siete horas.", "你应该至少睡七个小时。"],
    ["Tendrías que hacer ejercicio tres veces por semana.", "你得每周锻炼三次。"],
    ["Deberías dejar de fumar; es malo para la salud.", "你应该戒烟，它对健康有害。"],
    ["Yo que tú, comería más verdura y menos grasa.", "我要是你，会多吃蔬菜少吃油脂。"],
    ["¿Por qué no vienes al gimnasio conmigo?", "你为什么不和我一起去健身房？"],
    ["Lo mejor sería tomar menos azúcar.", "最好是少吃糖。"],
    ["No deberías trabajar tanto; estás muy estresado.", "你不该工作那么多，你压力太大了。"],
    ["Podrías caminar al trabajo en vez de ir en coche.", "你可以走路上班，而不是开车。"]
  ],
  vocab: [
    ["la salud", "健康", "bueno / malo para la salud"],
    ["sano/a", "健康的", "comida sana"],
    ["la dieta", "饮食；节食", "estar a dieta 在节食"],
    ["el ejercicio", "锻炼；练习", "hacer ejercicio"],
    ["el estrés", "压力", "estresado/a 压力大的"],
    ["dejar de + 原形", "戒掉；停止做", "dejar de fumar"],
    ["el peso", "体重；重量", "perder peso 减重"],
    ["adelgazar", "变瘦；减肥", "反义 engordar 变胖"],
    ["la verdura", "蔬菜", ""],
    ["el azúcar", "糖", "tomar menos azúcar"],
    ["la grasa", "脂肪；油脂", ""],
    ["el gimnasio", "健身房", "ir al gimnasio"],
    ["en vez de", "而不是", "en vez de + 原形 / 名词"]
  ],
  exercises: [
    { q: "选择：___ dormir más. (你应该，委婉)", opts: ["Deberías", "Debes", "Debías"], a: "Deberías" },
    { q: "选择：Yo que tú, ___ al médico. (ir)", opts: ["iría", "voy", "iré"], a: "iría" },
    { q: "选择：¿Por qué no ___ menos café? (tomar)", opts: ["tomas", "tomarías", "tomes"], a: "tomas" },
    { q: "选择：三个句型里语气最强的是", opts: ["Tendrías que…", "Podrías…", "Deberías…"], a: "Tendrías que…" },
    { q: "填空：Lo mejor ___ hacer ejercicio. (ser)", a: "sería" },
    { q: "翻译：你应该戒烟。", a: "Deberías dejar de fumar." },
    { q: "翻译：换成我在你的位置，我会少吃糖。", a: "Yo en tu lugar, tomaría menos azúcar." },
    { q: "翻译：你不该工作那么多。", a: "No deberías trabajar tanto." }
  ],
  task: "给一位压力大、不运动的朋友录 5 条建议，分别用 podrías / deberías / tendrías que / yo que tú / ¿por qué no…?。"
},

w24d4: {
  title: "假设与梦想",
  goal: "学完能说「有钱的话我会……」，并能看懂 si tuviera / si fuera 这类句子。",
  explain: [
    { p: "条件式最有趣的用法是谈**想象中的情况**：Con más dinero, viajaría por todo el mundo（要是钱更多，我会环游世界）。前提可以用 **con + 名词**（con más tiempo）、**en tu lugar**，或干脆不说，直接用条件式：Yo viviría en una isla（我会住在岛上）。" },
    { p: "西班牙人说「如果我有……」用 **si + 过去虚拟式**（imperfecto de subjuntivo）+ 条件式：Si tuviera dinero, compraría una casa。这个时态到 B1 才系统学，现在只需**认出**四个最常见形式，不用自己造：" },
    { table: { head: ["si + 过去虚拟式", "意思", "后面接条件式"], rows: [["si tuviera", "如果我有", "…, compraría un coche."], ["si fuera", "如果我是", "…, no trabajaría."], ["si pudiera", "如果我能", "…, viajaría todo el año."], ["si viviera", "如果我住在", "…, iría a la playa cada día."]] } },
    { p: "梦想还常用 **Me encantaría + 原形**（我特别想……）和 **soñar con + 名词 / 原形**（梦想……）：Sueño con vivir en el extranjero。" },
    { tip: "si 后面别用条件式：不说 si tendría。A2 阶段主动说 con + 名词 / en tu lugar + 条件式就够；si tuviera 一类先认出来。" }
  ],
  examples: [
    ["Con un millón de euros, me mudaría a una isla.", "有一百万欧元的话，我会搬到一个岛上。"],
    ["Yo viviría en el extranjero un par de años.", "我会到国外住几年。"],
    ["Si tuviera más tiempo, aprendería a tocar el piano.", "如果我有更多时间，我会学弹钢琴。"],
    ["Si fuera rico, no trabajaría nunca más.", "如果我有钱，我就再也不工作了。"],
    ["En tu lugar, yo aceptaría ese trabajo.", "换成我在你的位置，我会接受那份工作。"],
    ["Me encantaría conocer Perú.", "我特别想去看看秘鲁。"],
    ["¿Dónde vivirías tú? — En una ciudad tranquila.", "你会住在哪里？——一个安静的城市。"],
    ["Sueño con tener mi propio restaurante.", "我梦想拥有自己的餐厅。"]
  ],
  vocab: [
    ["el sueño", "梦想；梦；困", "tener sueño 困"],
    ["soñar con", "梦想；梦见", "o→ue：sueño con"],
    ["la lotería", "彩票", "tocar la lotería 中彩票"],
    ["el millón", "百万", "un millón de euros"],
    ["la isla", "岛", ""],
    ["el extranjero", "国外", "vivir en el extranjero"],
    ["mudarse", "搬家", "me mudo a"],
    ["rico/a", "有钱的；好吃的", ""],
    ["famoso/a", "有名的", ""],
    ["feliz", "幸福的；快乐的", "复数 felices"],
    ["la libertad", "自由", ""],
    ["tranquilo/a", "安静的；平静的", "¡Tranquilo! 别急"],
    ["aceptar", "接受", ""],
    ["propio/a", "自己的", "mi propio restaurante"]
  ],
  exercises: [
    { q: "选择：Con más dinero, ___ una casa grande. (comprar)", opts: ["compraría", "compré", "compro"], a: "compraría" },
    { q: "选择：Si ___ rico, viajaría mucho. (ser, 识别)", opts: ["fuera", "sería", "era"], a: "fuera" },
    { q: "选择：Si tuviera tiempo, ___ más. (leer)", opts: ["leería", "leí", "leyera"], a: "leería" },
    { q: "选择：si 后面不能接", opts: ["条件式", "现在时", "过去虚拟式"], a: "条件式" },
    { q: "填空：Me ___ conocer Argentina. (encantar，条件式)", a: "encantaría" },
    { q: "翻译：换成我在你的位置，我会搬到一个更安静的城市。", a: "En tu lugar, yo me mudaría a una ciudad más tranquila." },
    { q: "翻译：有一百万你会做什么？", a: "¿Qué harías con un millón?" },
    { q: "看懂并翻译：Si pudiera, viviría en el extranjero.", a: "如果我能，我会住在国外。" }
  ],
  task: "录 8 句「有……的话我会……」的梦想（用 con + 名词 / en tu lugar + 条件式），至少 4 个不同动词。"
},

w24d5: {
  title: "写请求邮件",
  goal: "学完能写一封 100 词的正式请求邮件，开头、正文、结尾格式正确。",
  explain: [
    { p: "正式邮件三段：**开头称呼** → **说明来意 + 请求** → **致谢 + 结尾敬语**。称呼用 **Estimado/a + 姓氏**（尊敬的……），后面是**冒号**不是逗号：Estimada señora García:。来意用 **Le escribo para + 原形**（我写信是为了……）。请求用本周学的条件式：Me gustaría…, ¿Sería posible…?, ¿Podría…?" },
    { table: { head: ["部分", "正式（usted）", "非正式（tú）"], rows: [["称呼", "Estimado/a Sr./Sra. + 姓:", "Hola, + 名字:"], ["来意", "Le escribo para…", "Te escribo para…"], ["请求", "¿Sería posible…? / Me gustaría…", "¿Podrías…? / ¿Me haces un favor?"], ["致谢", "Le agradezco de antemano su ayuda.", "¡Gracias!"], ["结尾", "Atentamente, / Un saludo cordial,", "Un abrazo, / Un beso,"]] } },
    { p: "写作要点：① 邮件标题 Asunto 写清楚（Asunto: Información sobre el curso）；② 一段一个意思，每段两三句；③ 结尾前加 **Quedo a la espera de su respuesta**（等候您的回复）；④ 附件说 **Adjunto + 名词**（附上……）。" },
    { tip: "别混用 tú 和 usted：一封信里要么全是 le / su / podría，要么全是 te / tu / podrías。" }
  ],
  examples: [
    ["Asunto: Información sobre el curso de verano", "主题：关于暑期课程的信息"],
    ["Estimada señora García:", "尊敬的 García 女士："],
    ["Le escribo para pedirle información sobre el curso de español de julio.", "我写信是想向您咨询七月西语课程的信息。"],
    ["Me gustaría saber si todavía hay plazas libres.", "我想知道是否还有名额。"],
    ["¿Sería posible recibir el programa y los precios por correo electrónico?", "能否请您把课程安排和价格用邮件发给我？"],
    ["Adjunto mi solicitud y una copia de mi pasaporte.", "附上我的申请表和护照复印件。"],
    ["Le agradezco de antemano su ayuda. Quedo a la espera de su respuesta.", "提前感谢您的帮助。等候您的回复。"],
    ["Atentamente, Li Wei", "此致敬礼，李伟"]
  ],
  vocab: [
    ["estimado/a", "尊敬的（信件称呼）", "Estimado señor López:"],
    ["el asunto", "主题；事情", "邮件的 Asunto 栏"],
    ["atentamente", "此致敬礼（正式结尾）", ""],
    ["cordial", "亲切的", "Un saludo cordial"],
    ["el saludo", "问候", "Un saludo（结尾）"],
    ["el abrazo", "拥抱", "Un abrazo（非正式结尾）"],
    ["adjunto/a", "附上的；附件", "Adjunto el documento."],
    ["de antemano", "提前；预先", "gracias de antemano"],
    ["agradecer", "感谢", "agradezco（zc）"],
    ["la respuesta", "回复；答案", "responder 回复"],
    ["la solicitud", "申请；申请表", "solicitar 申请"],
    ["la plaza", "名额；广场", "hay plazas libres"],
    ["quedar a la espera de", "等候（正式）", "Quedo a la espera de su respuesta."]
  ],
  exercises: [
    { q: "选择：正式邮件的称呼后面用", opts: ["冒号", "逗号", "句号"], a: "冒号" },
    { q: "选择：___ para pedirle información. (我写信给您)", opts: ["Le escribo", "Te escribo", "Escribo le"], a: "Le escribo" },
    { q: "选择：正式邮件的结尾", opts: ["Atentamente,", "Un beso,", "Hasta luego,"], a: "Atentamente," },
    { q: "选择：¿___ posible recibir el programa por correo?", opts: ["Sería", "Es", "Será"], a: "Sería" },
    { q: "填空：Le ___ de antemano su ayuda. (agradecer, yo)", a: "agradezco" },
    { q: "翻译：我想知道课程多少钱。", a: "Me gustaría saber cuánto cuesta el curso." },
    { q: "翻译：附上我的申请表。", a: "Adjunto mi solicitud." },
    { q: "翻译：等候您的回复。", a: "Quedo a la espera de su respuesta." }
  ],
  task: "给一所语言学校写一封 100 词的请求邮件（问课程、价格、住宿），按「称呼—来意—请求—致谢—结尾」五项自查后朗读录音。"
},

/* ───────── 第 25 周 · 虚拟式初见 ───────── */

w25d1: {
  title: "虚拟式的变位",
  goal: "学完能把常用动词变成虚拟式现在时，并认出 6 个特殊形式。",
  explain: [
    { p: "**虚拟式**（subjuntivo）不是时态，而是一种「语气」（modo）：它出现在 que 引导的从句里，表示那件事不是事实陈述，而是愿望、要求、评价或还没发生的将来。你其实已经在用它了——usted 命令式 hable、否定命令式 no hables 都是虚拟式形式。今天先把变位学全，触发结构从明天起每天学一类。" },
    { p: "构成：取现在时 **yo 形式去掉 -o**，-ar 动词加 **-e, -es, -e, -emos, -éis, -en**；-er / -ir 动词加 **-a, -as, -a, -amos, -áis, -an**（所谓「换相反元音」）。从 yo 出发的好处是不规则词干自动保留：tengo → tenga，hago → haga，digo → diga，conozco → conozca，veo → vea。" },
    { table: { head: ["人称", "hablar", "comer", "tener", "ser", "estar", "ir", "haber", "saber", "dar"], rows: [["yo", "hable", "coma", "tenga", "sea", "esté", "vaya", "haya", "sepa", "dé"], ["tú", "hables", "comas", "tengas", "seas", "estés", "vayas", "hayas", "sepas", "des"], ["él / usted", "hable", "coma", "tenga", "sea", "esté", "vaya", "haya", "sepa", "dé"], ["nosotros", "hablemos", "comamos", "tengamos", "seamos", "estemos", "vayamos", "hayamos", "sepamos", "demos"], ["vosotros", "habléis", "comáis", "tengáis", "seáis", "estéis", "vayáis", "hayáis", "sepáis", "deis"], ["ellos / ustedes", "hablen", "coman", "tengan", "sean", "estén", "vayan", "hayan", "sepan", "den"]] } },
    { p: "**六个必须单独背的**：ser → sea，estar → esté，ir → vaya，haber → haya，saber → sepa，dar → dé。词干变化动词照旧（piense, pueda, quiera），但 -ir 动词在 nosotros / vosotros 也变：durmamos, sintamos, pidamos。拼写调整同命令式：busque, llegue, empiece。" },
    { tip: "yo 和 él 形式相同（hable）。虚拟式单独出现没有意义，一定跟在触发结构后面：quiero que hables。" }
  ],
  examples: [
    ["Quiero que vengas mañana.", "我想让你明天来。"],
    ["Espero que estés bien.", "我希望你一切都好。"],
    ["Es importante que sepas esto.", "你知道这件事很重要。"],
    ["Ojalá haya tiempo.", "但愿有时间。"],
    ["Que tengas un buen día.", "祝你有美好的一天。"],
    ["Espero que no sea nada grave.", "希望不是什么严重的事。"],
    ["Es necesario que hablemos.", "我们有必要谈谈。"],
    ["No quiero que vayáis solos.", "我不想让你们单独去。"]
  ],
  vocab: [
    ["el deseo", "愿望", "desear 希望；祝愿"],
    ["desear", "希望；祝愿", "Deseo que…"],
    ["la esperanza", "希望（名词）", "esperar 希望；等"],
    ["la emoción", "情绪；激动", ""],
    ["la alegría", "喜悦", "alegre 高兴的"],
    ["nervioso/a", "紧张的", "estar nervioso"],
    ["preocupado/a", "担心的", "estar preocupado por"],
    ["la sorpresa", "惊喜；惊讶", "¡Qué sorpresa!"],
    ["orgulloso/a", "骄傲的；自豪的", "estar orgulloso de"],
    ["la pena", "遗憾；难过", "¡Qué pena! 真遗憾"],
    ["el miedo", "害怕", "tener miedo de"],
    ["grave", "严重的", "No es grave."]
  ],
  exercises: [
    { q: "填空：hablar，虚拟式 tú → ___", a: "hables" },
    { q: "填空：tener，虚拟式 nosotros → ___", a: "tengamos" },
    { q: "选择：ir 的虚拟式 yo 形式是", opts: ["vaya", "voy", "iría"], a: "vaya" },
    { q: "选择：Espero que ___ bien. (estar, tú)", opts: ["estés", "estás", "estar"], a: "estés" },
    { q: "选择：从 yo 形式推导，conocer 的虚拟式是", opts: ["conozca", "conoce", "conocea"], a: "conozca" },
    { q: "写出 6 个特殊虚拟式（ser, estar, ir, haber, saber, dar 的 yo 形式）", a: "sea, esté, vaya, haya, sepa, dé" },
    { q: "填空：dormir，虚拟式 nosotros → ___", a: "durmamos" },
    { q: "翻译：我想让你明天来。", a: "Quiero que vengas mañana." }
  ],
  task: "把 10 个动词（hablar, comer, vivir, tener, hacer, poder, querer, ser, ir, saber）按 yo / tú / nosotros / ellos 说成虚拟式，计时 4 分钟并录音。"
},

w25d2: {
  title: "quiero que 想让",
  goal: "学完能说「我想让你……」「我希望他……」：quiero que vengas, espero que apruebe。",
  explain: [
    { p: "第一类触发结构：**表达愿望和要求的动词 + que + 虚拟式**。关键判断是主语：如果「想」的人和「做」的人是**同一个**，用原形：Quiero ir（我想去）；如果是**两个人**，就要 que + 虚拟式：Quiero que vayas（我想让你去）。中文里「想让、希望某人、需要某人」都对应这个结构。" },
    { table: { head: ["动词", "同一主语 → 原形", "不同主语 → que + 虚拟式"], rows: [["querer", "Quiero descansar.", "Quiero que descanses."], ["esperar", "Espero aprobar.", "Espero que apruebes."], ["necesitar", "Necesito salir.", "Necesito que salgas."], ["preferir", "Prefiero esperar.", "Prefiero que esperes."], ["desear", "Deseo viajar.", "Deseo que viajes."], ["pedir", "—", "Te pido que vengas."], ["gustar", "Me gusta cantar.", "Me gusta que cantes."]] } },
    { p: "这一类里最高频的是 **quiero que**、**espero que**、**necesito que**、**me gusta que**。否定同样用虚拟式：No quiero que mientas（我不想让你说谎）。que 前面的动词可以是任何人称，从句先用虚拟式现在时。" },
    { tip: "英语 I want you to come 直译成 quiero tú venir 是最常见的错误，正确只有一种：quiero que vengas。" }
  ],
  examples: [
    ["Quiero que me acompañes al médico.", "我想让你陪我去看医生。"],
    ["Espero que tengas suerte en la entrevista.", "希望你面试好运。"],
    ["Mis padres quieren que estudie más.", "我父母想让我多学习。"],
    ["Necesito que me apoyes en esto.", "我需要你在这件事上支持我。"],
    ["Prefiero que vengáis el sábado.", "我更希望你们周六来。"],
    ["Me gusta que la gente sea puntual.", "我喜欢人们守时。"],
    ["Os deseo que seáis muy felices.", "祝你们非常幸福。"],
    ["No quiero que mientas.", "我不想让你说谎。"]
  ],
  vocab: [
    ["acompañar", "陪伴；陪同", ""],
    ["invitar", "邀请", "invitar a alguien a"],
    ["la invitación", "邀请；请柬", ""],
    ["regalar", "送（礼物）", ""],
    ["apoyar", "支持", "el apoyo 支持"],
    ["confiar en", "信任", "Confío en ti.（í 有符号）"],
    ["la confianza", "信任；信心", ""],
    ["la paciencia", "耐心", "tener paciencia"],
    ["la suerte", "运气", "tener suerte；¡Suerte!"],
    ["puntual", "守时的", "ser puntual"],
    ["mentir", "说谎", "e→ie：miento；la mentira 谎言"],
    ["la entrevista", "面试；采访", ""],
    ["portarse bien", "表现好；乖", "Pórtate bien."]
  ],
  exercises: [
    { q: "选择：Quiero ___ conmigo. (venir, 你)", opts: ["que vengas", "venir", "que vienes"], a: "que vengas" },
    { q: "选择：Quiero ___ contigo. (ir, 我)", opts: ["ir", "que vaya", "que voy"], a: "ir" },
    { q: "选择：Espero que ___ pronto. (mejorar, usted)", opts: ["mejore", "mejora", "mejorar"], a: "mejore" },
    { q: "选择：Necesito que me ___. (apoyar, vosotros)", opts: ["apoyéis", "apoyáis", "apoyar"], a: "apoyéis" },
    { q: "填空：Mis padres quieren que yo ___ puntual. (ser)", a: "sea" },
    { q: "翻译：我想让你信任我。", a: "Quiero que confíes en mí." },
    { q: "翻译：我希望你们好运。", a: "Espero que tengáis suerte." },
    { q: "改错：Quiero tú estudiar más.", a: "Quiero que estudies más." }
  ],
  task: "录 10 句「我想让 / 希望 / 需要某人……」，对象至少包括 tú、usted、vosotros 三种。"
},

w25d3: {
  title: "评价 + 虚拟式",
  goal: "学完能用 es importante / necesario / mejor que 表达评价和建议。",
  explain: [
    { p: "第二类触发结构：**无人称评价 + que + 虚拟式**。es importante que（……很重要）、es necesario que（有必要……）、es mejor que（最好……）、es normal que（……很正常）、es posible que（可能……）、es una pena que（很遗憾……）。评价的对象是 que 后面那件事，所以用虚拟式。" },
    { table: { head: ["评价", "例句", "意思"], rows: [["es importante que", "Es importante que llegues a tiempo.", "你准时到很重要。"], ["es necesario que", "Es necesario que firme aquí.", "您有必要在这里签名。"], ["es mejor que", "Es mejor que no digas nada.", "你最好什么都别说。"], ["es normal que", "Es normal que estés nervioso.", "你紧张很正常。"], ["es posible que", "Es posible que llueva mañana.", "明天可能下雨。"], ["es una pena que", "Es una pena que no puedas venir.", "很遗憾你不能来。"]] } },
    { p: "两种例外：① 不针对具体某人的泛泛之谈用**原形**：Es importante dormir bien（睡好很重要）。② 说的是**事实**而非评价时用陈述式：**es verdad que**、**es evidente que**、**está claro que** + 陈述式：Es verdad que el examen es difícil。" },
    { p: "这一类是给建议的好工具，比 deberías 更客气，因为没有直接点名「你」：Es mejor que descanses。" },
    { tip: "es posible que 用虚拟式（不确定），但 seguro que（肯定）用陈述式：Seguro que viene。" }
  ],
  examples: [
    ["Es importante que llegues a tiempo a la entrevista.", "你准时到达面试很重要。"],
    ["Es necesario que firme aquí, señor.", "先生，您有必要在这里签名。"],
    ["Es mejor que no digas nada por ahora.", "目前你最好什么都别说。"],
    ["Es normal que estés nervioso antes del examen.", "考试前紧张很正常。"],
    ["Es una pena que no puedas venir a la fiesta.", "很遗憾你不能来参加聚会。"],
    ["Es posible que llueva esta tarde.", "今天下午可能下雨。"],
    ["Es verdad que el español es difícil, pero es bonito.", "西语确实难，但很美。"],
    ["Es importante dormir bien antes de un viaje.", "旅行前睡好很重要。"]
  ],
  vocab: [
    ["importante", "重要的", "es importante que"],
    ["necesario/a", "必要的", "es necesario que"],
    ["posible", "可能的", "es posible que"],
    ["raro/a", "奇怪的；少见的", "es raro que"],
    ["normal", "正常的", "es normal que"],
    ["lógico/a", "合理的；合逻辑的", "es lógico que"],
    ["justo/a", "公平的；正好的", "no es justo que"],
    ["evidente", "显而易见的", "es evidente que + 陈述式"],
    ["la verdad", "事实；真相", "es verdad que + 陈述式"],
    ["la ventaja", "优点；优势", ""],
    ["la desventaja", "缺点；劣势", ""],
    ["el punto de vista", "观点", "desde mi punto de vista"],
    ["a tiempo", "准时；及时", "llegar a tiempo"]
  ],
  exercises: [
    { q: "选择：Es importante que ___ a tiempo. (llegar, tú)", opts: ["llegues", "llegas", "llegar"], a: "llegues" },
    { q: "选择：Es verdad que Madrid ___ grande. (ser)", opts: ["es", "sea", "será"], a: "es" },
    { q: "选择：Es importante ___ bien. (泛指，睡)", opts: ["dormir", "que duermas", "que duerme"], a: "dormir" },
    { q: "选择：Es posible que ___ mañana. (llover)", opts: ["llueva", "llueve", "llovería"], a: "llueva" },
    { q: "填空：Es mejor que usted ___ mañana. (volver)", a: "vuelva" },
    { q: "填空：Es una pena que no ___ tiempo. (tener, nosotros)", a: "tengamos" },
    { q: "翻译：你多休息很重要。", a: "Es importante que descanses más." },
    { q: "翻译：很遗憾她不能来。", a: "Es una pena que ella no pueda venir." }
  ],
  task: "对一位准备面试的朋友，用 es importante / necesario / mejor / normal que 各说 2 句，共 8 句录音。"
},

w25d4: {
  title: "cuando + 虚拟式",
  goal: "学完能说「等我……的时候就……」：cuando termine, buscaré trabajo。",
  explain: [
    { p: "第三类触发：**cuando 指向将来**时，后面用虚拟式。中文「等我到家就给你打电话」里，「到家」还没发生，所以西语说 Cuando **llegue** a casa, te llamo。主句可以用将来时、ir a 或命令式。对比：说**习惯**或**过去**时 cuando 用陈述式：Cuando llego a casa, siempre cocino（每次到家都做饭）。" },
    { table: { head: ["时间指向", "cuando +", "例句"], rows: [["习惯（现在）", "陈述式现在时", "Cuando llego a casa, cocino."], ["过去", "陈述式过去时", "Cuando llegué a casa, cociné."], ["将来（还没发生）", "虚拟式现在时", "Cuando llegue a casa, cocinaré."]] } },
    { p: "同类的时间连词：**en cuanto**（一……就……）、**hasta que**（直到……）、**después de que**（在……之后），指向将来时都接虚拟式：En cuanto sepa algo, te lo digo。**antes de que**（在……之前）永远接虚拟式。" },
    { p: "人生规划是这个结构的天然话题：Cuando termine la carrera…（等我读完大学……）、Cuando me jubile…（等我退休……）、Cuando tenga dinero…（等我有钱……）。" },
    { tip: "cuando 后面不要用将来时：不说 cuando llegaré。判断口诀——「还没发生 → 虚拟式」。" }
  ],
  examples: [
    ["Cuando termine la carrera, buscaré trabajo en Madrid.", "等我读完大学，我会在马德里找工作。"],
    ["Cuando llegues a casa, llámame.", "你到家的时候给我打电话。"],
    ["Cuando tenga dinero, me compraré una casa.", "等我有钱了，我会买一套房子。"],
    ["Cuando me jubile, viviré en el campo.", "等我退休了，我会住在乡下。"],
    ["En cuanto sepa algo, te lo digo.", "我一有消息就告诉你。"],
    ["Esperaré aquí hasta que vuelvas.", "我会在这里等到你回来。"],
    ["Cuando llego a casa, siempre cocino.", "我每次到家都做饭。（习惯）"],
    ["Cuando se case, hará una boda grande.", "等她结婚，会办一场盛大的婚礼。"]
  ],
  vocab: [
    ["jubilarse", "退休", "la jubilación 退休"],
    ["graduarse", "毕业", "me gradúo（ú 有符号）"],
    ["la carrera", "大学专业；学业；赛跑", "terminar la carrera"],
    ["el título", "学位；文凭；标题", ""],
    ["casarse", "结婚", "casarse con"],
    ["la boda", "婚礼", ""],
    ["ahorrar", "储蓄；节省", "el ahorro 储蓄"],
    ["la meta", "目标", ""],
    ["conseguir", "获得；做到", "e→i：consigo；虚拟式 consiga"],
    ["el campo", "乡下；田野", ""],
    ["en cuanto", "一……就……", "+ 虚拟式（将来）"],
    ["hasta que", "直到", "+ 虚拟式（将来）"]
  ],
  exercises: [
    { q: "选择：Cuando ___ dinero, viajaré. (tener)", opts: ["tenga", "tengo", "tendré"], a: "tenga" },
    { q: "选择：Cuando ___ a casa, siempre leo. (llegar, 习惯)", opts: ["llego", "llegue", "llegaré"], a: "llego" },
    { q: "选择：En cuanto ___ el examen, te llamo. (terminar)", opts: ["termine", "termino", "terminaré"], a: "termine" },
    { q: "选择：Cuando ___ pequeño, vivía en el campo. (ser)", opts: ["era", "sea", "fuera"], a: "era" },
    { q: "填空：Esperaré hasta que ___. (volver, vosotros)", a: "volváis" },
    { q: "填空：Cuando me ___, viviré cerca del mar. (jubilar)", a: "jubile" },
    { q: "翻译：等我毕业，我会去西班牙。", a: "Cuando me gradúe, iré a España." },
    { q: "翻译：你到的时候给我发条消息。", a: "Cuando llegues, mándame un mensaje." }
  ],
  task: "录 8 句人生规划，全部以 Cuando + 虚拟式开头（毕业、找工作、有钱、结婚、退休……）。"
},

w25d5: {
  title: "愿望与目的从句",
  goal: "学完能用 ojalá 表达愿望、用 para que 说目的，并汇总本周 5 类触发。",
  explain: [
    { p: "**ojalá**（但愿）来自阿拉伯语「愿真主保佑」，后面直接接虚拟式，que 可加可不加：Ojalá (que) apruebes（但愿你通过）。它可以单独成句，是表达愿望最简单的方式。同类的还有 **¡Que + 虚拟式!** 祝福句：¡Que te mejores!（祝你早日康复）、¡Que aproveche!（祝好胃口）、¡Que descanses!（好好休息）。" },
    { p: "**para que**（为了让……）说目的：主语相同用 **para + 原形**（Ahorro para viajar 我攒钱为了旅行）；让**别人**做某事用 **para que + 虚拟式**（Te lo explico para que lo entiendas 我给你解释是为了让你明白）。" },
    { table: { head: ["触发类型", "结构", "例句"], rows: [["愿望 / 要求", "quiero / espero que", "Quiero que vengas."], ["评价", "es importante / mejor que", "Es mejor que descanses."], ["将来时间", "cuando / en cuanto", "Cuando llegue, te llamo."], ["祝愿", "ojalá / que…", "Ojalá apruebes."], ["目的", "para que", "Hablo despacio para que me entiendas."]] } },
    { tip: "五类触发之外的结构（creo que、sé que、es verdad que）都用陈述式。看到 que 先问：前面是愿望、评价、将来时间、祝愿、目的中的哪一个？" }
  ],
  examples: [
    ["Ojalá apruebes el examen.", "但愿你通过考试。"],
    ["Ojalá haga buen tiempo el domingo.", "但愿周日天气好。"],
    ["Ojalá que mi hermana consiga la beca.", "但愿我姐姐拿到奖学金。"],
    ["Te lo explico otra vez para que lo entiendas.", "我再给你解释一遍，好让你明白。"],
    ["Ahorro cada mes para viajar el año que viene.", "我每个月攒钱，为了明年去旅行。"],
    ["Hablo despacio para que me comprendan.", "我说得慢，为了让他们听懂。"],
    ["¡Que te mejores pronto!", "祝你早日康复！"],
    ["¡Que tengáis un buen viaje!", "祝你们旅途愉快！"]
  ],
  vocab: [
    ["ojalá", "但愿", "+ 虚拟式"],
    ["mejorarse", "康复；好转", "¡Que te mejores!"],
    ["aprobar", "通过（考试）", "o→ue：apruebo；反义 suspender"],
    ["la beca", "奖学金", "conseguir una beca"],
    ["la oportunidad", "机会", ""],
    ["el éxito", "成功", "tener éxito"],
    ["el premio", "奖；奖品", "ganar un premio"],
    ["la paz", "和平；安宁", ""],
    ["sonreír", "微笑", "sonrío；la sonrisa 微笑"],
    ["¡Que aproveche!", "祝好胃口！", "饭前说"],
    ["¡Que descanses!", "好好休息！", "睡前说"],
    ["otra vez", "再一次", ""],
    ["el año que viene", "明年", "= el próximo año"]
  ],
  exercises: [
    { q: "选择：Ojalá ___ buen tiempo mañana. (hacer)", opts: ["haga", "hace", "hará"], a: "haga" },
    { q: "选择：Ahorro ___ un coche. (为了买)", opts: ["para comprar", "para que compre", "para que compro"], a: "para comprar" },
    { q: "选择：Te llamo ___ no te preocupes. (为了让你)", opts: ["para que", "para", "porque"], a: "para que" },
    { q: "选择：饭前对别人说", opts: ["¡Que aproveche!", "¡Que descanses!", "¡Que te mejores!"], a: "¡Que aproveche!" },
    { q: "填空：Ojalá ___ pronto. (venir, ellos)", a: "vengan" },
    { q: "填空：Hablo despacio para que me ___. (entender, vosotros)", a: "entendáis" },
    { q: "翻译：但愿我拿到奖学金。", a: "Ojalá consiga la beca." },
    { q: "翻译：祝你旅途愉快！（tú）", a: "¡Que tengas un buen viaje!" }
  ],
  task: "录 10 个愿望：5 句 ojalá、3 句 ¡que…!、2 句 para que；周日听写时判断每句是陈述式还是虚拟式。"
},

/* ───────── 第 26 周 · A2 总复习与模拟 ───────── */

w26d1: {
  title: "时态选择",
  goal: "学完看到时间标记就能选对时态：ayer → indefinido，antes → imperfecto，mañana → futuro。",
  explain: [
    { p: "A2 一共学了 7 种动词形式：现在时、简单过去时、过去未完成时、现在完成时、将来时、条件式、虚拟式现在时。选择顺序是三问：① **什么时候**（过去 / 现在 / 将来）？② 过去的话，是**完成的事件**（indefinido）、**背景或习惯**（imperfecto）还是**和现在有关**（perfecto）？③ 有没有**触发**条件式或虚拟式的结构？" },
    { table: { head: ["时态", "标记词 / 信号", "例"], rows: [["现在时", "siempre, todos los días, ahora", "Trabajo en un banco."], ["indefinido", "ayer, anoche, hace dos años, en 2020", "Ayer fui al médico."], ["imperfecto", "antes, de pequeño, mientras, 描写", "Antes vivía en Pekín."], ["perfecto", "hoy, esta semana, ya, todavía no, alguna vez", "Hoy he comido fuera."], ["futuro", "mañana, el año que viene, 推测", "Mañana lloverá."], ["condicional", "me gustaría, deberías, con más dinero", "Con más dinero, viajaría."], ["subjuntivo", "quiero que, es mejor que, cuando（将来）, ojalá", "Ojalá apruebe."]] } },
    { p: "两个易混点：hoy / esta semana 在西班牙用 perfecto（he hecho），拉美常用 indefinido（hice），两种都对；cuando 指将来用虚拟式，指习惯或过去用陈述式。" },
    { tip: "做 40 句填空时先圈出标记词再变位；没有标记词的句子看动作性质：是完成的一次（indefinido）还是持续的背景（imperfecto）。" }
  ],
  examples: [
    ["Anteayer estuve en el médico y hoy ya estoy mejor.", "前天我去看了医生，今天已经好多了。"],
    ["Últimamente duermo mal por el estrés.", "最近我因为压力睡不好。"],
    ["De pequeño, iba al campo todos los veranos.", "小时候我每年夏天都去乡下。"],
    ["Esta semana he trabajado demasiado.", "这周我工作太多了。"],
    ["Dentro de dos años terminaré la carrera.", "两年后我将读完大学。"],
    ["A partir de mañana haré ejercicio cada día.", "从明天起我每天锻炼。"],
    ["Mientras tanto, seguiré estudiando español.", "与此同时，我会继续学西语。"],
    ["Por fin he encontrado trabajo. Ojalá me guste.", "我终于找到工作了。但愿我喜欢。"]
  ],
  vocab: [
    ["anteayer", "前天", ""],
    ["hace poco", "不久前", "+ indefinido"],
    ["últimamente", "最近", "+ perfecto / 现在时"],
    ["actualmente", "目前；现在", "不是「实际上」"],
    ["de momento", "暂时；目前", ""],
    ["dentro de", "（多久）之后", "dentro de dos días + 将来时"],
    ["a partir de", "从……起", "a partir de mañana"],
    ["mientras tanto", "与此同时", ""],
    ["enseguida", "马上", ""],
    ["por fin", "终于", ""],
    ["aún", "仍然；还", "= todavía"],
    ["demasiado", "太；太多", "trabajar demasiado"],
    ["seguir + 副动词", "继续做", "seguiré estudiando"]
  ],
  exercises: [
    { q: "选择：Ayer ___ con mi jefe. (hablar, yo)", opts: ["hablé", "hablaba", "he hablado"], a: "hablé" },
    { q: "选择：De pequeña ___ mucho miedo a los perros. (tener, ella)", opts: ["tenía", "tuvo", "ha tenido"], a: "tenía" },
    { q: "选择：Esta semana no ___ tiempo para nada. (tener, yo, 西班牙用法)", opts: ["he tenido", "tuve", "tenía"], a: "he tenido" },
    { q: "选择：Dentro de un mes ___ a Chile. (viajar, nosotros)", opts: ["viajaremos", "viajamos", "viajábamos"], a: "viajaremos" },
    { q: "选择：Con más dinero, ___ una casa en la playa. (comprar)", opts: ["compraría", "compraré", "compre"], a: "compraría" },
    { q: "选择：Cuando ___ la carrera, buscaré trabajo. (terminar)", opts: ["termine", "termino", "terminaré"], a: "termine" },
    { q: "填空：Estaba durmiendo cuando ___ el teléfono. (sonar)", a: "sonó" },
    { q: "填空：Ojalá ___ buen tiempo el domingo. (hacer)", a: "haga" }
  ],
  task: "自制 40 句填空：每种时态写 5–6 句带标记词的句子，遮住动词后限时 10 分钟完成，错的句子抄进错题本。"
},

w26d2: {
  title: "叙事综合",
  goal: "学完能把一段经历讲成「背景 → 事件 → 现在 → 打算」四段，时态各归其位。",
  explain: [
    { p: "讲一段完整经历需要四种时态配合：**imperfecto** 铺背景（那时候我……）、**indefinido** 推进事件（后来发生了……）、**perfecto** 连接现在（从那以后我已经……）、**futuro / ir a** 说打算（接下来我会……）。每段换时态时用连接词提示听者。" },
    { table: { head: ["段落", "时态", "常用连接词", "例句"], rows: [["背景", "imperfecto", "antes, en aquella época, mientras", "Antes vivía con mis padres."], ["事件", "indefinido", "un día, de repente, entonces, al cabo de", "Un día decidí mudarme."], ["结果 / 现在", "perfecto + 现在时", "desde entonces, últimamente, ahora", "Desde entonces he aprendido mucho."], ["打算", "futuro / ir a", "el año que viene, dentro de", "El año que viene volveré."]] } },
    { p: "让叙述更自然的三件小事：① 加感受词：afortunadamente（幸运的是）、desgraciadamente（不幸的是）、por suerte；② 用 **además**（此外）、**por eso**（因此）、**así que**（所以）把句子接起来；③ 结尾说一句评价：Fue una experiencia inolvidable。" },
    { tip: "同一句里两种过去时同时出现是正常的：Estaba lloviendo cuando salí。别为了「统一」把整段都写成一种时态。" }
  ],
  examples: [
    ["Hace dos años vivía en Pekín y trabajaba en una oficina.", "两年前我住在北京，在一家办公室工作。"],
    ["Un día decidí mudarme a Madrid para aprender español.", "有一天我决定搬到马德里学西语。"],
    ["Al principio no entendía nada, así que me sentía un poco solo.", "一开始我什么都听不懂，所以有点孤单。"],
    ["Al cabo de tres meses conocí a mis primeros amigos españoles.", "三个月后我认识了第一批西班牙朋友。"],
    ["Desde entonces he viajado por todo el país.", "从那以后我游遍了全国。"],
    ["Ahora echo de menos a mi familia, pero soy muy feliz aquí.", "现在我想念家人，但在这里很幸福。"],
    ["El año que viene volveré a China y buscaré un trabajo mejor.", "明年我会回中国，找一份更好的工作。"],
    ["Ha sido una experiencia inolvidable.", "这是一段难忘的经历。"]
  ],
  vocab: [
    ["la experiencia", "经历；经验", ""],
    ["inolvidable", "难忘的", ""],
    ["la aventura", "冒险；奇遇", ""],
    ["al principio", "一开始", ""],
    ["al cabo de", "过了（多久）之后", "al cabo de un mes"],
    ["desde entonces", "从那以后", "+ perfecto"],
    ["en aquella época", "在那个时候", "+ imperfecto"],
    ["además", "此外", ""],
    ["por eso", "因此", ""],
    ["así que", "所以", ""],
    ["afortunadamente", "幸运的是", "反义 desgraciadamente"],
    ["por suerte", "幸好", ""],
    ["echar de menos", "想念", "拉美 extrañar"],
    ["acostumbrarse a", "习惯于", "me acostumbré al horario"]
  ],
  exercises: [
    { q: "选择：讲「那时候的背景」用", opts: ["imperfecto", "indefinido", "perfecto"], a: "imperfecto" },
    { q: "选择：Un día ___ cambiar de trabajo. (decidir, yo)", opts: ["decidí", "decidía", "he decidido"], a: "decidí" },
    { q: "选择：Desde entonces ___ mucho. (aprender, yo)", opts: ["he aprendido", "aprendí", "aprendía"], a: "he aprendido" },
    { q: "选择：Al principio no ___ nada, pero al cabo de un mes ___ a entender. (entender / empezar)", opts: ["entendía / empecé", "entendí / empezaba", "he entendido / empecé"], a: "entendía / empecé" },
    { q: "填空：El año que viene ___ a China. (volver, yo)", a: "volveré" },
    { q: "填空：___ tanto, me acostumbré al horario español. (与此同时)", a: "Mientras" },
    { q: "翻译：我想念我的朋友们，但这里的生活很有趣。", a: "Echo de menos a mis amigos, pero la vida aquí es muy interesante." },
    { q: "翻译：这是一段难忘的经历。（perfecto）", a: "Ha sido una experiencia inolvidable." }
  ],
  task: "用「背景 4 句 + 事件 4 句 + 现在 2 句 + 打算 2 句」的框架讲一段自己的经历，录 3 分钟，回听时标出每个动词的时态。"
},

w26d3: {
  title: "礼貌与建议对话",
  goal: "学完能在投诉、求助场景中把命令式、条件式、虚拟式三种礼貌工具混合使用。",
  explain: [
    { p: "三周的语法最终服务于一件事：**得体地让别人做事**。手上有四种工具，按客气程度排列：① usted 命令式 + por favor（Firme aquí, por favor）；② 条件式请求（¿Podría revisarlo?）；③ 建议（Debería llamar al técnico）；④ 虚拟式建议（Le recomiendo que hable con el responsable / Es mejor que pida el reembolso）。" },
    { table: { head: ["功能", "句型", "例"], rows: [["投诉", "Quería quejarme de… / No funciona…", "Quería quejarme del ruido."], ["请求", "¿Podría…? / ¿Le importaría…?", "¿Podría cambiarme de habitación?"], ["坚持", "Le pido que… / Exijo…", "Le pido que lo arregle hoy."], ["建议（给朋友）", "Deberías… / Yo que tú…", "Yo que tú, pediría el reembolso."], ["建议（正式）", "Le recomiendo que… / Es mejor que…", "Le recomiendo que rellene una hoja de reclamaciones."], ["回应", "No se preocupe, ahora mismo se lo arreglamos.", "—"]] } },
    { p: "投诉的开场用过去未完成时更客气：**Quería quejarme de…**（我想投诉……）比 Quiero 柔和。对方常回 **Lo siento mucho** / **Ahora mismo lo soluciono**。西班牙的商店和酒店都必须提供 **hoja de reclamaciones**（投诉表），说出这个词通常问题就解决了。" },
    { tip: "recomendar / aconsejar / pedir + que 后面用虚拟式（Le recomiendo que llame）；同一句里别再加原形（不说 recomiendo que llamar）。" }
  ],
  examples: [
    ["Buenos días, quería quejarme: la calefacción no funciona.", "早上好，我想投诉：暖气不工作。"],
    ["¿Podría enviar a un técnico esta mañana?", "您能今天上午派个技术员来吗？"],
    ["Le pido que lo arregle hoy, por favor.", "请您今天修好它。"],
    ["Lo siento mucho. No se preocupe, ahora mismo se lo solucionamos.", "非常抱歉。您别担心，我们马上给您解决。"],
    ["Si no es posible, quisiera el reembolso.", "如果不行，我想要退款。"],
    ["Yo que tú, pediría la hoja de reclamaciones.", "我要是你，会要投诉表。"],
    ["Le recomiendo que hable con el responsable.", "我建议您和负责人谈谈。"],
    ["Es mejor que lo cambie; todavía está en garantía.", "您最好换掉它，它还在保修期内。"]
  ],
  vocab: [
    ["la queja", "投诉；抱怨", "quejarse de 投诉"],
    ["quejarse", "投诉；抱怨", "Quería quejarme de…"],
    ["funcionar", "运转；能用", "No funciona. 坏了"],
    ["la avería", "故障", "estar averiado/a"],
    ["roto/a", "坏的；破的", "romper 的分词"],
    ["arreglar", "修理；解决", "arreglar un problema"],
    ["el/la técnico/a", "技术员；维修工", ""],
    ["la garantía", "保修；保证", "estar en garantía"],
    ["el reembolso", "退款", "pedir el reembolso"],
    ["la hoja de reclamaciones", "投诉表", "西班牙商店必备"],
    ["el/la responsable", "负责人", ""],
    ["exigir", "要求；强求", "exijo（g→j）"],
    ["solucionar", "解决", "la solución 解决办法"],
    ["amable", "友善的；客气的", "muy amable"]
  ],
  exercises: [
    { q: "选择：投诉最客气的开场是", opts: ["Quería quejarme de…", "Quiero quejarme de…", "Me quejo de…"], a: "Quería quejarme de…" },
    { q: "选择：¿___ enviar a un técnico? (poder, usted, 条件式)", opts: ["Podría", "Puede", "Podía"], a: "Podría" },
    { q: "选择：Le recomiendo que ___ con el responsable. (hablar)", opts: ["hable", "habla", "hablar"], a: "hable" },
    { q: "选择：Yo que tú, ___ el reembolso. (pedir)", opts: ["pediría", "pido", "pida"], a: "pediría" },
    { q: "填空：No se preocupe, ahora mismo ___ ___ arreglamos. (把它给您)", a: "se lo" },
    { q: "填空：Es mejor que usted lo ___. (cambiar)", a: "cambie" },
    { q: "翻译：暖气不工作，您能今天修好它吗？", a: "La calefacción no funciona, ¿podría arreglarla hoy?" },
    { q: "翻译：我建议你要投诉表。（recomendar, tú）", a: "Te recomiendo que pidas la hoja de reclamaciones." }
  ],
  task: "录一段 2 分钟的酒店投诉对话：客人用 quería quejarme + 条件式 + 双代词，前台用 usted 命令式 + no se preocupe，最后由一位朋友用 deberías / le recomiendo que 各给一条建议。"
},

w26d4: {
  title: "DELE A2 阅读模拟",
  goal: "学完知道 DELE A2 阅读四个任务的题型和答题策略，并完成一次限时练习。",
  explain: [
    { p: "DELE A2 的阅读部分（Comprensión de lectura）共 **4 个任务、25 题、60 分钟**。任务 1：读一封邮件或通知，回答 5 道三选一；任务 2：8 条广告或短通知，各配一道三选一；任务 3：3 篇人物短文，把 6 句陈述配到对应的人；任务 4：一篇长一点的说明文，6 道三选一。所有题都不要求你懂每个词，只要求找到**对应的信息**。" },
    { table: { head: ["任务", "文本", "题数", "策略"], rows: [["1", "邮件 / 通知", "5", "先读题，再在文中找关键词"], ["2", "广告、告示", "8", "圈出数字、日期、价格"], ["3", "三个人的短文", "6", "每句陈述找同义改写"], ["4", "说明文", "6", "按段落顺序，一段一题"]] } },
    { p: "三条策略：① **先读题目再读文本**，带着问题找答案；② 题目常用**同义改写**，文中 gratuito 题里可能是 no hay que pagar，文中 imprescindible 题里可能是 obligatorio；③ 每题不超过 2 分钟，不会的先选一个再标记，最后回来。" },
    { p: "广告里的高频词今天全部认熟：oferta, gratuito, inscripción, requisito, fecha límite, plaza, imprescindible, disponible。看到它们就知道题目要问什么。" },
    { tip: "阅读考试不扣错分，绝不留空。" }
  ],
  examples: [
    ["Curso de cocina española. Plazas limitadas. Inscripción hasta el 15 de mayo.", "西班牙烹饪课。名额有限。5 月 15 日前报名。"],
    ["Entrada gratuita para menores de 12 años.", "12 岁以下儿童免费入场。"],
    ["Se busca camarero con experiencia. Imprescindible hablar inglés.", "招聘有经验的服务员。必须会说英语。"],
    ["Oferta válida hasta el domingo: segunda unidad a mitad de precio.", "优惠至周日有效：第二件半价。"],
    ["Requisitos: ser mayor de 18 años y tener carné de conducir.", "要求：年满 18 岁并持有驾照。"],
    ["La biblioteca permanecerá cerrada del 1 al 15 de agosto.", "图书馆将于 8 月 1 日至 15 日闭馆。"],
    ["Descuento del 20 % para estudiantes con matrícula.", "凭注册证明学生享八折。"],
    ["Para más información, consulte nuestro folleto o llame al 900 123 456.", "更多信息请查阅我们的宣传册或致电 900 123 456。"]
  ],
  vocab: [
    ["el anuncio", "广告；公告", ""],
    ["la oferta", "优惠；报价", "oferta válida hasta"],
    ["gratuito/a", "免费的", "= gratis"],
    ["la inscripción", "报名；注册", "inscribirse 报名"],
    ["el requisito", "要求；条件", ""],
    ["la fecha límite", "截止日期", ""],
    ["disponible", "可用的；有空的", ""],
    ["imprescindible", "必不可少的", ""],
    ["la matrícula", "注册；学费；车牌", ""],
    ["el folleto", "宣传册", ""],
    ["válido/a", "有效的", ""],
    ["limitado/a", "有限的", "plazas limitadas"],
    ["consultar", "查阅；咨询", ""],
    ["permanecer", "保持；停留", "permanecerá cerrado"]
  ],
  exercises: [
    { q: "选择：读「Entrada gratuita para menores de 12 años」，一个 10 岁的孩子", opts: ["不用付钱", "付半价", "不能进"], a: "不用付钱" },
    { q: "选择：「Imprescindible hablar inglés」的同义说法是", opts: ["Es obligatorio hablar inglés", "Es mejor hablar inglés", "No hace falta hablar inglés"], a: "Es obligatorio hablar inglés" },
    { q: "选择：「Inscripción hasta el 15 de mayo」意思是", opts: ["5 月 15 日之后不能报名", "5 月 15 日开始报名", "课程 5 月 15 日开始"], a: "5 月 15 日之后不能报名" },
    { q: "选择：「Oferta válida hasta el domingo」，周一去", opts: ["没有优惠", "还有优惠", "半价"], a: "没有优惠" },
    { q: "选择：DELE A2 阅读部分共有", opts: ["4 个任务，25 题", "3 个任务，20 题", "5 个任务，30 题"], a: "4 个任务，25 题" },
    { q: "选择：做阅读题最好的顺序是", opts: ["先读题再读文本", "先逐词读完文本", "先查所有生词"], a: "先读题再读文本" },
    { q: "翻译：名额有限。", a: "Plazas limitadas." },
    { q: "翻译：要求：年满 18 岁。", a: "Requisitos: ser mayor de 18 años." }
  ],
  task: "找一套 DELE A2 阅读样题（Instituto Cervantes 官网免费），限时 60 分钟做完 25 题，对答案后把错题的关键词抄下来。"
},

w26d5: {
  title: "A2 总复习",
  goal: "把 20 周的时态和代词排成两张总表，并按 DELE A2 写作格式写一封 80 词邮件。",
  explain: [
    { p: "这是 A2 阶段的最后一课。不学新东西，把所有动词形式排在一张表里看清各自的位置。每一列你都已经学过，缺的只是把它们放在一起看：" },
    { table: { head: ["动词", "presente", "indefinido", "imperfecto", "perfecto", "futuro", "condicional", "subjuntivo"], rows: [["hablar (yo)", "hablo", "hablé", "hablaba", "he hablado", "hablaré", "hablaría", "hable"], ["hablar (él)", "habla", "habló", "hablaba", "ha hablado", "hablará", "hablaría", "hable"], ["tener (yo)", "tengo", "tuve", "tenía", "he tenido", "tendré", "tendría", "tenga"], ["hacer (yo)", "hago", "hice", "hacía", "he hecho", "haré", "haría", "haga"], ["ir (yo)", "voy", "fui", "iba", "he ido", "iré", "iría", "vaya"], ["ser (yo)", "soy", "fui", "era", "he sido", "seré", "sería", "sea"], ["poder (yo)", "puedo", "pude", "podía", "he podido", "podré", "podría", "pueda"]] } },
    { table: { head: ["人称", "主语", "反身", "直接宾语", "间接宾语", "介词后"], rows: [["我", "yo", "me", "me", "me", "mí"], ["你", "tú", "te", "te", "te", "ti"], ["他 / 她 / 您", "él / ella / usted", "se", "lo / la", "le (→ se)", "él / ella / usted"], ["我们", "nosotros/as", "nos", "nos", "nos", "nosotros/as"], ["你们", "vosotros/as", "os", "os", "os", "vosotros/as"], ["他们 / 各位", "ellos / ellas / ustedes", "se", "los / las", "les (→ se)", "ellos / ellas / ustedes"]] } },
    { p: "命令式一行记住：tú 肯定 = 现在时 él 形式（habla, come）+ 8 个不规则；其余全部来自虚拟式（hable, hablen, no hables, no habléis）。代词位置：肯定命令式后面连写（dámelo），其余情况放前面（no me lo des, se lo doy），原形和副动词二选一。" },
    { p: "DELE A2 写作任务 1 是回一封邮件（60–70 词），任务 2 是写一段描述（70–80 词）。评分看四点：**完成题目的每一个要点、格式正确（称呼、结尾）、时态搭配、连接词**。写之前先列出题目要求的 3–4 个要点，写完逐条打勾。" },
    { tip: "周六的里程碑 5 是完整 DELE A2 样题。今天这封邮件要在 20 分钟内完成，超时就说明固定句式还要多练。" }
  ],
  examples: [
    ["Hola, Marta: ¡Gracias por tu correo!", "你好，Marta：谢谢你的邮件！"],
    ["Espero que estés bien.", "希望你一切都好。"],
    ["El mes pasado empecé un trabajo nuevo en una empresa de informática.", "上个月我在一家 IT 公司开始了新工作。"],
    ["Al principio estaba un poco nervioso, pero ya me he acostumbrado.", "一开始我有点紧张，但现在已经习惯了。"],
    ["Me gustaría visitarte en julio, cuando tenga vacaciones.", "我想七月去看你，等我放假的时候。"],
    ["¿Podrías decirme qué días te vienen bien?", "你能告诉我哪几天你方便吗？"],
    ["Cuando llegue, te llamaré para que me expliques cómo ir a tu casa.", "我到了会给你打电话，好让你告诉我怎么去你家。"],
    ["Un abrazo, Wei", "拥抱，伟"]
  ],
  vocab: [
    ["el borrador", "草稿", "escribir un borrador"],
    ["revisar", "检查；修改", ""],
    ["el párrafo", "段落", ""],
    ["la coma", "逗号", ""],
    ["el punto", "句号；点", ""],
    ["la ortografía", "拼写", ""],
    ["en primer lugar", "首先", "en segundo lugar 其次"],
    ["en resumen", "总之", ""],
    ["finalmente", "最后", ""],
    ["es decir", "也就是说", ""],
    ["sobre todo", "尤其；最主要", ""],
    ["en cuanto a", "至于；关于", ""],
    ["venir bien", "方便；合适", "¿Te viene bien el lunes?"]
  ],
  exercises: [
    { q: "变位：hablar，yo → indefinido / imperfecto / condicional / subjuntivo", a: "hablé / hablaba / hablaría / hable" },
    { q: "变位：tener，yo → perfecto / futuro / subjuntivo", a: "he tenido / tendré / tenga" },
    { q: "选择：Le doy el libro a Ana. → ___ doy.", opts: ["Se lo", "Le lo", "Se la"], a: "Se lo" },
    { q: "选择：¡El informe! ___ ahora mismo. (dar, usted, 给我它)", opts: ["Démelo", "Me lo dé", "Dámelo"], a: "Démelo" },
    { q: "选择：Ayer ___ mucho, pero hoy ___ sol. (llover / hacer)", opts: ["llovió / hace", "llovía / hizo", "ha llovido / hacía"], a: "llovió / hace" },
    { q: "选择：Cuando ___ vacaciones, iré a verte. (tener)", opts: ["tenga", "tengo", "tendré"], a: "tenga" },
    { q: "选择：DELE A2 写作任务 1 的字数大约是", opts: ["60–70 词", "150 词", "30 词"], a: "60–70 词" },
    { q: "翻译：你能告诉我哪一天你方便吗？（tú，条件式）", a: "¿Podrías decirme qué día te viene bien?" }
  ],
  task: "限时 20 分钟：回复一位西班牙朋友的邮件（80 词），必须包含一件上个月的事、一句现在的感受、一个 cuando + 虚拟式的计划和一个条件式请求；写完按 4 项评分点自查并朗读录音。"
}

});
