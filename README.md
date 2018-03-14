# poet
规则生成诗歌密码
支持全文生成和单行生成。
## 全文生成
* 将诗歌全文粘贴到poet文件中，执行命令 yarn dev ，结果将打印出来。
## 单行生成
* 执行命令 yarn dev {单行诗歌诗歌} ，即可
## 规则
1. 两句连在一起，取拼音首字母，句首字母大写；
2. 数字规则
    * 谐音líng/lín换成0、零；形象字女、母、雌、阴；
    * 谐音yī换成1；形象字男、公、雄、阳；
    * ai/两换成2，亦可替换双、对
    * 谐音san/shan换成3
    * 谐音si/shi换成4
    * 谐音wu/wo换成5，可替换我、舞
    * 谐音liu/lu/lü换成6
    * 谐音qi/qu/chi换成7，
    * 谐音ba/bai换成8，
    * 谐音jiu换成9，
3. 特殊字符规则：
    * ! 叹号 exclamation mark/bang，可替代未、不、无等否定字，也可代惊、叹
    * ? 问号 question mark，可替代谁、何、问、几
    * , 逗号 comma，可替代谐音dòu
    * . 点号 dot/period/point ，可替代点、的
    * : 冒号 colon ，可替代冒
    * ; 分号 semicolon ，可替代分
    * ” 双引号 quotation marks/double quote ，可替代双
    * ‘ 单引号/撇号 apostrophe/single quote ，可替代单
    * ` 重音号 backquote/grave accent，可替代重
    * \* 星号 asterisk/star，可替代星、乘、日、阳、花、雪、菊
    * \+ 加号 plus sign，可替代谐音jiā
    * \- 减号/横线 hyphen/dash/minus sign/ ,可替代减、横、连
    * = 等号 equal sign，可替代等
    * / 斜线 slash，可替代斜
    * \ 反斜线 backslash/escape，可替代反转
    * | 竖线 bar/pipe/vertical bar ，替代谐音shù、长
    * _ 下划线 underline/underscore，可替代下、南
    * $ 美元符号 dollar sign，可替代美、弓、龙（盘在柱子上的龙） 、蛇、谐音qián(钱等)、jīn（金等）
    * @ at at sign ，替代在以及任何可滚动或环状意境的字，比如滚、环、圈；还可替代所有有辶的字，如：逃进近遁边随等。
    * \# 井号 crosshatch/sharp/hash，可替代井、网，也可谐音jǐng
    * % 百分号 percent sign/mod，替代百、白
    * & and/和/兼 and/ampersand，替代和、兼、且
    * ^ 折音号 circumflex/caret ，可替代上、北
    * ~ 波浪号 tilde，可替代云、水、雨、风、浪、丝等有波纹意境的字以及叠字的第二字
    * {} （左右）花括号/大括号 (left/right|open/close) braces，{可替代西，}可替代东
    * [] （左右）方括号/中括号 (left/right|open/close) brackets，]可替代中、右，[可替代左
    * () （左右）圆括号/小括号 (left/right|open/close) parentheses， )可替代月，(可替代刀
    * <> 尖括号 angle brackets
    * < 小于号 less than，可替代小、
    * \> 大于号 greater than，可替代大、于、入、向
    * 空格 可替代空
* ps: 谐音暂时不带声调匹配
* 具体规则可以查看 rule.js 文件
* 温馨提示：由于规则过于复杂，记忆效果差，为了密码的前后一致性，不要在重要的场合人脑输入，以防忘记密码产生不必要的麻烦！
