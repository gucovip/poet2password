// ==UserScript==
// @name         Poet
// @namespace    https://github.com/raiyeeeric/poet/blob/master/Poet.user.js
// @version      1.0.4
// @description  try to take over the world!
// @author       You
// @match        *://*.raiyee.cn
// @run-at            document-end
// @grant       GM_setClipboard
// @grant       GM_xmlhttpRequest
// @grant             unsafeWindow
// @require https://cdn.bootcss.com/jquery/2.1.3/jquery.min.js
// @require https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js
// ==/UserScript==

(function($) {
    'use strict';
    unsafeWindow.XMLHttpRequest = GM_xmlhttpRequest
    
    let library = [
        "空山新雨后，天气晚来秋。# 3x~hT7wlq",
        "明月松间照，清泉石上流。#M)sjzQq4^6",
        "竹喧归浣女，莲动下渔舟。#Zxgh0Ld_yz",
        "随意春芳歇，王孙自可留。#@1cfxWszkl",
        "一道残阳铺水中，半江瑟瑟半江红。#1@c1p~]Bjs~bjh",
        "可怜九月初三夜，露似真珠月似弓。#Kl9)c3164zz)s$",
        "远上寒山石径斜，白云深处有人家。#Y^h34j/B~scyr+",
        "停车坐爱枫林晚，霜叶红于二月花。#Tcz2flwSyh>2)*",
        "千里黄云白日曛，北风吹雁雪纷纷。#Qlh~B*x^~cy*f~",
        "莫愁前路无知己，天下谁人不识君？#!cq6!zjT_?r!4j",
        "千山鸟飞绝，万径人踪灭。#Q3nfjWjrzm$",
        "孤舟蓑笠翁，独钓寒江雪。#GzslwDdhj*3",
        "日暮苍山远 ，天寒白屋贫。#*mc3yTh%wp",
        "柴门闻犬吠 ，风雪夜归人。#Cmwqf~*1gr",
        "朝辞白帝彩云间，千里江陵一日还。#Cc%lc~jQlj01*h",
        "两岸猿声啼不住，轻舟已过万重山。#2ayst!zQz1@w`3",
        "离离原上草，一岁一枯荣。#L~y^c1s1kr",
        "野火烧不尽，春风吹又生。#Yhs!jC~cys1",
        "远芳侵古道，晴翠接荒城。#Yfqg@Qcjhc2",
        "又送王孙去，萋萋满别情。#Ysws7Q~mbq",
        "远看山有色，近听水无声。#Yk3ysJt~!s",
        "春去花还在，人来鸟不惊。#C7*@@Rln!!",
        "李白乘舟将欲行，忽闻岸上踏歌声。#Lb*zjyxHwa^tgs1",
        "桃花潭水深千尺，不及汪伦送我情。#Tht~sqc!jwls5q",
        "死去元知万事空，但悲不见九州同。#4qyzw4 Db!j9zt",
        "王师北定中原日，家祭无忘告乃翁。#W4^dzy*Jj!wgnw",
        "秦时明月汉时关，万里长征人未还。#Q4m)h4gWlczr!h",
        "但使龙城飞将在，不教胡马度阴山。#D4$cfj@!jhmdy3",
        "滚滚长江东逝水，浪花淘尽英雄。#@~|j}4~L*tjyx",
        "是非成败转头空。青山依旧在，几度夕阳红。#4!cb\t Q31j@?dx1h",
        "白发渔樵江渚上，惯看秋月春风。Bfyqjz^Gkq)c~1",
        "一壶浊酒喜相逢。古今多少事，都付笑谈中。#1hz9xxfgGjds4Dfxt]",
        "春江潮水连海平，海上明月共潮生。#Cjc~-hpH^m)gcs1",
        "滟滟随波千万里，何处春江无月明！#Y~sbqwl?ccj~)m2",
        "江流宛转绕芳甸，月照花林皆似霰(xiàn)。#J6w\rfd)z*lj4x",
        "空里流霜不觉飞，汀上白沙看不见。# l6s!jfT^bsk!j",
        "江天一色无纤尘，皎皎空中孤月轮。#Jt14!xcJ~ ]g)l",
        "江畔何人初见月？江月何年初照人？#Jp?rcj)J)?nczr2",
        "人生代代无穷已，江月年年望相似。#Rsd~!q1J)n~wx4",
        "不知江月待何人，但见长江送流水。#!zj)d?rDj|js6~",
        "白云一片去悠悠，青枫浦上不胜愁。#B~1pqy~Qfp^!sc",
        "谁家今夜扁舟子？何处相思明月楼？#?+jybzz?cx4m)l",
        "可怜楼上月徘徊，应照离人妆镜台。#Kll^)phYzlrzjt2",
        "玉户帘中卷不去，捣衣砧上拂还来。#Yhl]j!qD1z^fhl2",
        "此时相望不相闻，愿逐月华流照君。#C4xw!xwYz)h6zj",
        "鸿雁长飞光不度，鱼龙潜跃水成文。#Hy|fg!dY$qy~cw2",
        "昨夜闲潭梦落花，可怜春半不还家。#Zyxtml*Klcb!h+1",
        "江水流春去欲尽，江潭落月复西斜。#J~6cqyjJtl)f{/",
        "斜月沉沉藏海雾，碣石潇湘无限路。#/)c~chwJ4xx!x6",
        "不知乘月几人归，落月摇情满江树。#!z*)?rgL)yqmj|4",
        "白日依山尽，黄河入海流。#B*13jHh>h6",
        "欲穷千里目，更上一层楼。#YqqlmG^1cl",
        "黄沙远上白云间，一片孤城万仞山。#Hsy^b~j1pgcwr3",
        "羌笛何须怨杨柳，春风不度玉门关。#Qd?xyylC~b!dymg1",
        "日照香炉生紫烟，遥看瀑布挂前川。#*zxlszyYkpbg$c1",
        "飞流直下三千尺，疑是银河落九天。#F6z_3qcY4yhl9t",
        "松下问童子，言师采药去。#S_?tzY4cyq",
        "只在此山中，云深不知处。#Z@c3]~s!zc",
        "渭城朝雨浥轻尘，客舍青青柳色新。#Wcz~1qcKsq~lsx",
        "劝君更尽一杯酒，西出阳关无故人。#Qjgj1b9{c1g!gr",
        "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。#Ktl|hy&lt;q6~r+G#{~sm",
        "夕阳西下，断肠人在天涯。#X1{_Dcr@ty",
        "危楼高百尺，手可摘星辰。#Wlg%cSkz*c2",
        "不敢高声语，恐惊天上人。#!ggsyK!t^r2",
        "塞下秋来风景异，衡阳雁去无留意。#S_ql~#1H1yq!61",
        "四面边声连角起，千嶂里，长烟落日孤城闭。4mbs-j7Qzl|yl*gcb",
        "浊酒一杯家万里，燕然未勒归无计。#Z91b+wlYr!lg!j",
        "羌管悠悠霜满地。#Qgy~smd1",
        "人不寐，将军白发征夫泪。#R!mJjbfzfl",
        "故人西辞黄鹤楼，烟花三月下扬州。#Gr{chhlY*3)_yz",
        "孤帆远影碧空尽，唯见长江天际流。#Gfyyb jWj|jtj6",
        "君问归期未有期，巴山夜雨涨秋池。#J?gq!yq83y~zqc",
        "何当共剪西窗烛，却话巴山夜雨时。#?dgj{czQh83y~4",
        "折戟沉沙铁未销，自将磨洗认前朝。#Zjcst!xZjmxrqc",
        "东风不与周郎便，铜雀春深锁二乔。#D~!yzlbTqcss2q",
        "月落乌啼霜满天，江枫渔火对愁眠。#)lwtsmtJfyh2cm",
        "姑苏城外寒山寺，夜半钟声到客船。#Gscwh34Ybzsdkc",
        "岐王宅里寻常见，崔九堂前几度闻。#7wzlxcjC9tq?dw",
        "正是江南好风景，落花时节又逢君。#Z4j_h~jL*4jyfj",
        "烟笼寒水月笼沙，夜泊秦淮近酒家。#Ylh~)lsYbqhj9+",
        "商女不知亡国恨，隔江犹唱后庭花。#S0!zwghGjycht*",
        "轻轻的我走了，正如我轻轻的来；#Q~.5zlZr5q~.l",
        "我轻轻的招手，作别西天的云彩。#5q~.zsZb{t.~c",
        "那河畔的金柳，是夕阳中的新娘；#Nhp.$l4x1].xn",
        "波光里的艳影，在我的心头荡漾。#Bgl.yy@5.xtdy",
        "软泥上的青荇，油油的在水底招摇；#Rn^.qxY~.@~lzy2",
        "在康河的柔波里，我甘心做一条水草！#@kh.rbl5gxz1t~c",
        "那榆荫下的一潭，不是清泉，是天上虹；#Nys_.1t!4qq4t^h",
        "揉碎在浮藻间，沉淀着彩虹似的梦。#Rs@fzjCdzch4.m",
        "寻梦？撑一支长篙，向青草更青处漫溯；#XmC1z|g>qcgqcms",
        "满载一船星辉，在星辉斑斓里放歌。#Mz1c*h@*hbllfg",
        "但我不能放歌，悄悄是别离的笙箫；#D5!nfgQ~4ll.sx",
        "夏虫也为我沉默，沉默是今晚的康桥！#Xcyw5cmCm4jw.kq",
        "悄悄的我走了，正如我悄悄的来；#Q~.5zlZr5q~.l",
        "我挥一挥衣袖，不带走一片云彩。#5h1h1x!dz1p*c",
        "吴丝蜀桐张高秋，空山凝云颓不流。#W4stzgq 3n~t!6",
        "江娥啼竹素女愁，李凭中国弹箜篌。#Jetzs0yLp]gtkh",
        "昆山玉碎凤凰叫，芙蓉泣露香兰笑。#K3ysfhjFrq6xlx",
        "十二门前融冷光，二十三丝动紫皇。#12mqrlg243~dzh",
        "女娲炼石补天处，石破天惊逗秋雨。#0wl4btc4ptj,q~",
        "梦入神山教神妪，老鱼跳波瘦蛟舞。#M>s3jsyLytbsj5",
        "吴质不眠倚桂树，露脚斜飞湿寒兔。#Wz!myj|6j/fsht",
        "月黑雁飞高，单于夜遁逃。#)hyfgC>ydt2",
        "欲将轻骑逐，大雪满弓刀。#Yjqjz>*m$(1",
        "长安一片月，万户捣衣声。#|a1p)Whd1s",
        "秋风吹不尽，总是玉关情。#Q~c!jZ4ygq",
        "何日平胡虏，良人罢远征。#?*phlLr!yz1",
        "床前明月光，疑是地上霜。#Cqm)gY4d^s",
        "举头望明月，低头思故乡。#Jtwm)Dt4gx",
        "红豆生南国，春来发几枝。#H,s_gClf?z1",
        "愿君多采撷，此物最相思。#YjdcxCwzx4$",
        "春眠不觉晓，处处闻啼鸟。#Cm!jxC~wtn3",
        "夜来风雨声，花落知多少。#Yl~~s*lzds3",
        "海上生明月，天涯共此时。#H^sm)Tygc4",
        "情人怨遥夜，竟夕起相思。#QryyyJx7x4$",
        "灭烛怜光满，披衣觉露滋。#MzlgmP1j6z$",
        "不堪盈手赠，还寝梦佳期。#!kyszHqm+7",
        "明月几时有？把酒问青天。#M)?4y89?Qt",
        "不知天上宫阙，今夕是何年。#!Zt^gqJx4?n",
        "我欲乘风归去，又恐琼楼玉宇，高处不胜寒。#5Yc~g7Ykqlyy^C!sh",
        "起舞弄清影，何似在人间。#75Nqy?4@Rj",
        "转朱阁，低绮户，照无眠。#Zzg_7HZ!m",
        "不应有恨，何事长向别时圆？#!Yyh?4|>B4@",
        "人有悲欢离合，月有阴晴圆缺，此事古难全。#Rybhlh)Yyq@qC4gnq",
        "但愿人长久，千里共婵娟。#Dyr|9Qlgcj",
        "十八新娘八十郎，苍苍白发对红妆。#18Xn80lC~%fdhz",
        "鸳鸯被里成双夜，一树梨花压海棠。#Yyblc2y1|L*yht",
        "汉皇重色思倾国，御宇多年求不得。#Hh`s4qgYydnq!d",
        "杨家有女初长成，养在深闺人未识。#Y+y0czcY@sgr!s",
        "天生丽质难自弃，一朝选在君王侧。#Tslznzq1Zx@jwc",
        "回眸一笑百媚生，六宫粉黛无颜色。#Hm1x%ms6Gfd!ys",
        "春寒赐浴华清池，温泉水滑洗凝脂。#ChcyhqcWq~hxnz3",
        "侍儿扶起娇无力，始是新承恩泽时。#42Fqj!l44Xcez4",
        "云鬓花颜金步摇，芙蓉帐暖度春宵。#~B*y$byFrzndcx",
        "春宵苦短日高起，从此君王不早朝。#Cxkd*g7Ccjw!zc",
        "承欢侍宴无闲暇，春从春游夜专夜。#Ch4y!xxCccyyzy",
        "后宫佳丽三千人，三千宠爱在一身。#Hg+l3qr3Qca@1s",
        "金屋妆成娇侍夜，玉楼宴罢醉和春。#$wzcj4yYly8z&c",
        "姊妹弟兄皆列土，可怜光彩生门户。#ZmdxjltKlgcsmh4$",
        "遂令天下父母心，不重生男重生女。#S0t_fmx!`s1`s0",
        "骊宫高处入青云，仙乐风飘处处闻。#Lggcrq~Xy~pc~w2",
        "缓歌谩舞凝丝竹，尽日君王看不足。#Hgm5n~zJ*jwk!z",
        "渔阳鼙鼓动地来，惊破霓裳羽衣曲。#Y*pgddlJpnsy17",
        "九重城阙烟尘生，千乘万骑西南行。#9`CjycsQcwj{_x",
        "翠华摇摇行复止，西出都门百余里。#Chy~xfz{cdm%yl3",
        "六军不发无奈何，宛转蛾眉马前死。#6J!f!nhWzemmq4",
        "花钿委地无人收，翠翘金雀玉搔头。#*Xwd!rsCq$qyst2",
        "君王掩面救不得，回看血泪相和流。#Jwymj!dHkxlx&6",
        "黄埃散漫风萧索，云栈萦纡登剑阁。#Hasm~xs~Zywdjg2",
        "峨嵋山下少人行，旌旗无光日色薄。#Em3_srxJq!g*sb",
        "蜀江水碧蜀山青，圣主朝朝暮暮情。#Sj~bs3qSzz~m~q",
        "行宫见月伤心色，夜雨闻铃肠断声。#Xgj)sxsY~w0cdds",
        "天旋地转回龙驭，到此踌躇不能去。#Txdzh$yDccc!n7",
        "马嵬坡下泥土中，不见玉颜空死处。#Mwp_nt]!Jyy 4c",
        "君臣相顾尽沾衣，东望都门信马归。#Jcxgjz1}Wdmxmg",
        "归来池苑皆依旧，太液芙蓉未央柳。#Glcyj1jTyfr!y6",
        "芙蓉如面柳如眉，对此如何不泪垂。#Frrm6rmDcr?!lc",
        "春风桃李花开日，秋雨梧桐叶落时。#C~tl*k*Q~wtyl4",
        "西宫南内多秋草，落叶满阶红不扫。#{G_ndqcLymjh!s",
        "梨园弟子白发新，椒房阿监青娥老。#Lydz%fxSfajqel3",
        "夕殿萤飞思悄然，孤灯挑尽未成眠。#Xdyf4qrGdtj!cm",
        "迟迟钟鼓初长夜，耿耿星河欲曙天。#C~zgc|yG~*hyst",
        "鸳鸯瓦冷霜华重，翡翠衾寒谁与共。#Yywlsh`Fcqh?&g",
        "悠悠生死别经年，魂魄不曾来入梦。#Y~s4bjnHp!cl>m",
        "临邛道士鸿都客，能以精诚致魂魄。#0Q@4hdkN1jczhp",
        "为感君王辗转思，遂教方士殷勤觅。#Wgjwnz4@Jf4yqm",
        "排空驭气奔如电，升天入地求之遍。#P y7brdSt>dqzb",
        "上穷碧落下黄泉，两处茫茫皆不见。#^Qbl_hq2Cm~j!j",
        "忽闻海上有仙山，山在虚无缥渺间。#Hwh^yx33@Xwpmj",
        "楼阁玲珑五云起，其中绰约多仙子。#Lgll5~77]Zydxz",
        "中有一人字太真，雪肤花貌参差是。#]Y1rztz*F*mcc4",
        "金阙西厢叩玉扃(jiōng)，转教小玉报双成。#$J{skyjZj&lt;yb2c",
        "闻道汉家天子使，九华帐里梦魂惊。#W@hjtzs9Hzlmh!",
        "揽衣推枕起徘徊，珠箔银屏迤逦开。#R1tz7phZbyp@@k",
        "云鬓半偏新睡觉，花冠不整下堂来。#*Bbpxsj*G!z_tl",
        "风吹仙袂飘飘举，犹似霓裳羽衣舞。#~Cxmp~jY4nc~15",
        "玉容寂寞泪阑干，梨花一枝春带雨。#YrjmllgL*1zcd~",
        "含情凝睇谢君王，一别音容两渺茫。#Hqntxjw1Byr2mm",
        "昭阳殿里恩爱绝，蓬莱宫中日月长。#Zydle2jPlg]*)|",
        "回头下望人寰处，不见长安见尘雾。#Ht_wrhc!J|ajcw",
        "惟将旧物表深情，钿合金钗寄将去。#WjjwbsqDh$cjjq4",
        "钗留一股合一扇，钗擘黄金合分钿。#Cl1gh1sCbh$hfd",
        "但教心似金钿坚，天上人间会相见。#Djx4$djT^rjhxj",
        "临别殷勤重寄词，词中有誓两心知。#0Byq`jcC]y42xz",
        "七月七日长生殿，夜半无人私语时。#7)7*CsdYb!r4y4",
        "在天愿作比翼鸟，在地愿为连理枝。#@Tyzbyn@Dywllz1",
        "天长地久有时尽，此恨绵绵无绝期。#T|d9y4jChm~!j7",
        "独坐池塘如虎踞，绿杨树下养精神。#Dzctrhj6Y|_yjs",
        "春来我不先开口，哪个虫儿敢作声？#Cl5!xkk?Gc2gzs",
        "碧玉妆成一树高，万条垂下绿丝绦。#Byzc1|^Wtc_6~d",
        "不知细叶谁裁出，二月春风似剪刀。#!Zxy?cc2)C~4j(",
        "两个黄鹂鸣翠柳，一行白鹭上青天。#2ghlmcl1hbl^qt",
        "窗含西岭千秋雪，门泊东吴万里船。#Ch{0qq*Mb}5wlc",
        "清明时节雨纷纷，路上行人欲断魂。#Qm4j~f~6^xrydh",
        "借问酒家何处有，牧童遥指杏花村。#J?9+?cyMtyzx*c",
        "锦城丝管日纷纷，半入江风半入云。#Jc4g*f~B&gt;j~b&gt;~",
        "此曲只应天上有，人间能得几回闻。#C7zyt^yRjnd?hw",
        "朱雀桥边野草花，乌衣巷口夕阳斜。#Zqqbyc*W1xkx1/",
        "旧时王谢堂前燕，飞入寻常百姓家。#94wxtqyF&gt;xc%x+",
        "梅子黄时日日晴，小溪泛尽却山行。#Mzh4*~q&lt;xfjq3x",
        "绿阴不减来时路，添得黄鹂四五声。#6y!-l46Tdhl45s",
        "泉眼无声惜细流，树阴照水爱晴柔。#Qy!sxx6|yz~2qr",
        "小荷才露尖尖角，早有蜻蜓立上头。#&lt;hc6j~jZyqtl^t",
        "银烛秋光冷画屏，轻罗小扇扑流萤。#YzqglhpQl&lt;3p6y",
        "天阶夜色凉如水，坐看牵牛织女星。#Tjyslr~Zkqnz0*",
        "绿蚁新醅酒，红泥小火炉。#61xp9Hn&lt;hl",
        "晚来天欲雪，能饮一杯无？#Wlty*Ny1b!",
        "天高云淡，望断南飞雁。#Tg~dWd_fy4",
        "不到长城非好汉，屈指行程二万。#!d|c!hhQzxc2w",
        "六盘山上高峰，红旗漫卷西风。#6p3^gfHqmj{~",
        "今日长缨在手，何时缚住苍龙？#J*cy@s?4fzc$",
        "好雨知时节， 当春乃发生。#H~z4jDcnfs",
        "随风潜入夜， 润物细无声。#@~q&gt;yRwx0s",
        "野径云俱黑， 江船火独明。#Yj~jhJch1m",
        "晓看红湿处， 花重锦官城。#Xkh4c*`jgc",
        "种豆南山下，草盛豆苗稀。#Z,_3_Cs,mx",
        "晨兴理荒秽，带月荷锄归。#CxlhhD)chg1",
        "道狭草木长，夕露沾我衣。#@xcmcX6z51",
        "衣沾不足惜，但使愿无违。#1z!zxD4y!@"
    ]

    let newPoets = []

    function findLibrary(content) {
        var result = false

        $([].concat(library).concat(newPoets)).each(function(index, item) {
            if (item.indexOf(content) >= 0) {
                result = item
            }
        })
        return result
    }

    function initCopy() {
        $($('div')[0]).css({
            margin: '0',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        })
        // $("button").attr("data-clipboard-action", "copy")
        // $("button").attr("data-clipboard-target", "#copyPoet")
        $("button").replaceWith('<button id="coCopy" style="position:  absolute;top: 10px;right: 10px;font-size: 12px;" data-clipboard-action="copy" data-clipboard-target="#copyPoet">复制继续</button>' +
                                '<button id="goNext" style="position:  absolute;top: 10px;left: 10px;font-size: 12px;" data-clipboard-action="copy" data-clipboard-target="#copyPoet">Continue</button>')
        $("#coCopy").click(function(e) {
            $("#copyPoet").show()
            var clipboard = new ClipboardJS('button')
            clipboard.on('success', function(e) {
                e.clearSelection();
                $("#copyPoet").hide()
                window.location = '/home'
            });
            clipboard.on('error', function(e) {
                $("#copyPoet").hide()
            });
        })
        $("#goNext").click(function(e) {
            window.location = '/home'
        })
    }

    function stringToEntity(str, radix) {
        let arr = str.split('')
        radix = radix || 0
        let tmp = arr.map(item =>
                          `&#${(radix?'x'+item.charCodeAt(0).toString(16):item.charCodeAt(0))};`).join('')
        console.log(tmp)
        return tmp
    }

    function decodePoet(supperUrl, poets) {
        // if (!supperUrl.includes(location.href)) return false
        initCopy()
        var title = $($('div')[0]).find('div')[0].innerText
        if (poets) newPoets = poets
        $($('div')[0]).find('div').each(function(index, item) {
            var password = findLibrary(item.innerText)
            if (password) {
                if (item.style.color) {
                    var $divRed = $(item)
                    $divRed.append('<input style="display:none;" id="copyPoet" value="' + password.split('#')[1] + '">')
                }
                $(item).append('<div>' + password.split('#')[1] + '</div>')
            }
        })
    }
    GM_xmlhttpRequest({
        url: "http://www.guco.vip:3030/getDomainAndPoets",
        method: "GET",
        onload: function(res) {
            var ret = JSON.parse(res.response)
            console.log(ret)
            var supperUrl = ret.suppotUrls
            var newPoets = ret.poets
            decodePoet(supperUrl, newPoets)
        },
        onerror: function() {
            decodePoet([
                "http://ip.raiyee.cn/",
                "http://sql.raiyee.cn:1000/",
                "http://redisn.raiyee.cn:1000/",
                "http://redis.raiyee.cn:1000/"
            ], [])
        }
    })
})(jQuery);
