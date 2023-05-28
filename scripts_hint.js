const sentences = [
  "TBO是《月星 -Online-》的英文首字母简写！",
  "《月星 -Online-》是本书世界观中人类历史上第一部全沉浸式MMORPG游戏！",
  "《月星 -Online-》的本体售价极其昂贵，并非一般玩家可承担的范畴！",
  "《月星 -Online-》的3000名公测者可以免费获取原价极其昂贵的专用设备与游戏软件！",
  "向濑白夜在TBO中的ID为“黑羽谅璃#001”！",
  "一般情况下，月星会自动将玩家的ID设为玩家的真实姓名，且玩家无法对此进行更改！",
  "截至公测结束，没有任何玩家的ID由#002结尾！",
  "由于传播热度不同，颁发给全世界范围的公测名额中有超过66%的玩家来自日本！",
  "杉原夜季最初创作这个故事系列是为了致敬《加速世界》！",
  "只有不到5%的TBO玩家幸运（或不幸）地获得了日或月元素！",
  "和歌森勿栖是白夜在TBO中遇见的第一位玩家！",
  "“茶屋和伊”这一姓名中隐藏了三个Y！",
  "“和歌森勿栖”的名字“勿栖”与日语的“茄子”读音相同！",
  "方聆弦本人其实原本打算要给书中的“方聆弦”起其他的姓名，但作者提议直接采用“方聆弦”一名！",
  "白夜初次进入TBO时便位于艾兹维泽区域的中心地带！",
  "月见花绫栾是第一位发现薙峯霞林区域最终迷宫“薙峯霞城”的玩家！",
  "截至公测第三日，月见花绫栾拥有全TBO第二高的平A穿甲量！",
  "公测期间的四位最强玩家被民间统称为“四轮之柱”！",
  "风、地、水、火四大基础元素组成世界的说法，最先由古希腊哲学家恩培多克勒所提出！",
  "善于利用“系统外技能”将决定玩家的实力上限！",
  "五大基础属性对玩家角色数值的提升效果皆不明！",
  "不持有特殊技能的正常情况下，物理闪避率最高封顶为60%！",
  "TBO的玩家在达成成就后将会获得永久的角色数值提升！",
  "伦卡由旬区域的野生生物数量要远远多于魔物！",
  "月星世界拥有各式的交通工具，你甚至可以骑乘部分拥有长途旅行习性的魔物！",
  "卡迩玻什城拥有覆盖面巨大的蒸汽火车轨道系统，最长的线路甚至直通竹内町西南部！",
  "洳图里城的北方是一片常年被猛烈沙尘暴所包围的神秘荒漠地带！",
  "竹内町时常阴云密布，但实际降雨概率远远小于布雷姆！",
  "由于浓雾遮蔽了视野与潜在的危险，薙峯霞林区域绝大部分地区都几乎未被玩家探索！",
  "在TBO中死亡的玩家会体验一回真正死亡的感觉！",
  "于TBO中失去意识的玩家将会被强行踢下线并回到现实世界！",
  "韵笺才浅的所有成员均为中国玩家，这正是为何和歌森勿栖无法加入这个公会！",
  "久礼夏月所持的相机等现代器械在NPC眼中等同于魔器，属于NPC无法以科学角度理解的科技水平！",
  "玩家在受到伤害后，对应的血条部分会转红，并以每半秒丢失上限值12.5%的速度缩窄！",
  "由于玩家只会在血条完全变空时死去，满血却被一击必杀的玩家将拥有整整4秒的时间治疗自己！",
  "TBO的登出实际原理是玩家主动将自己的意识从游戏中的身体内抽离！",
  "玩家在施放技能时，自身角色数据将先经由玩家的大脑进行整合与处理！",
  "由于有系统的辅助，TBO玩家的思考能力将是各自在现实生活中的数十倍！",
  "与姓名风格截然不同，神来社词音崇尚的其实是欧洲骑士道！",
  "黑羽谅璃作为本故事的关键角色，真实出场次数仅一次，且篇幅仅为单一场景！",
  "神来社词音是主角团年龄最小的成员，仅读初中！",
  "久礼夏月本科时的理科成绩其实非常优异！",
  "方聆弦曾是一所医院的神经外科主刀医生！",
  "久礼夏月是主角七人组唯一的男性成员！",
  "月见花绫栾在现世中是一位游走在边缘地带的艺妓大学生！",
  "艾兹维泽区域的最终迷宫位于地底极深处！",
  "叶赖锡安区域等级最低的野怪也超过了20级，导致新手玩家在这里的野外寸步难行！",
  "八大区域皆有属于自己的中心地带！",
  "姆歇戎区域是八大区域中唯一不存在任何传送广场的区域！",
  "前面的蛆，以后再来探索吧！",
  "玩家仍然可以通过传送广场传送至姆歇戎区域，但这将会是不可逆传送！",
  "由于玩家在死亡后会立即重生于上一个记录点，任何复活手段都等同于没有用处！",
  "“黑羽谅璃”这一名称灵感来自《加速世界》系列的女主角“黑羽早雪”！",
  "本书的ED1《→Unfinished→》同样是动漫《加速世界》的ED1！",
  "向濑白夜不是香濑白椰！",
  "杉原夜季不是山芋圆椰几！",
  "向濑白夜并非杉原夜季的原创角色！",
  "本书的主角组七人全都不是杉原夜季的原创角色！",
  "“向濑白夜”这一姓名对应了“白夜今明”中的前者！",
  "月星系统对应了“白夜今明”中的后者！",
  "月星曾差点被命名为“今明”，后来一位名为今里安悠加的女孩将其改为了“月星”！",
  "在月星世界内入睡的玩家不会做梦！",
  "这个故事系列同样位于《人类幸福研究中心》世界观之下！",
  "四大基础元素确实拥有各自得天独厚的优势，而这在装备强化方面体现得尤为显著！",
  "日元素与月元素玩家单独强化装备时会比四大基础元素拉胯数倍！",
  "月星世界的NPC曾传言，月星世界曾存在魔族，但玩家根本找寻不到类似种族的踪迹！",
  "这是一条豆知识！",
  "这不是一条豆知识！",
  "锟斤拷白夜锟斤拷锟斤拷#001锟斤拷！",
  "杉原夜季为这本书约稿的开支超过了6000RMB！",
  "不是所有的斯基都是丸善司机！",
  "月星世界由一位拥有人类情感与思维的超级AI所掌控！",
  "月星世界拥有八个大型区域，其中玩家人口最高的为塞壬区域！",
  "塞壬区域的最大安全区不叫塞壬，而是名为布雷姆城！",
  "除了错综复杂的水路系统，塞壬区域还坐落着原始丛林！",
  "截至公测结束，佩蒂利亚大陆的中心都是空无一物的光秃山脉！",
  "月星世界的最主要大陆名为佩蒂利亚大陆！",
  "叶赖锡安的NPC人口极其密集，以至于绝大多数玩家难以在卡迩玻什找到定居空间！",
  "卡迩玻什是月星世界首个达到蒸汽时代科技高度的城市！",
  "薙峯霞林区域拥有竹内町与㭉村两个主要安全区，但是传送广场坐落在竹内町！",
  "杉原夜季毕业即失业了，所以才有空写这么多条豆知识！",
  "我草，原！",
  "风元素可以将水与火元素扩散至更大的范围！",
  "地元素在物理防御上有着得天独厚的优势，但前提是你有研习过地元素魔法！",
  "火元素在物理攻击上有着得天独厚的优势，但前提是你有研习过火元素魔法！",
  "水元素在魔法攻击上有着得天独厚的优势，但前提是你有研习过水元素魔法！",
  "风元素在魔法防御上有着得天独厚的优势，但前提是你有研习过风元素魔法！",
  "风元素天生便精通四种强化类型中的“融合”！",
  "地元素天生便精通四种强化类型中的“附魔”！",
  "水元素天生便精通四种强化类型中的“改造”！",
  "火元素天生便精通四种强化类型中的“锻造”！",
  "四种强化类型中的“融合”意味着将两种事物合成为一种新事物，并继承前者部分特性（不可逆）！",
  "四种强化类型中的“附魔”意味着将本不该出现在一种事物上的特性赋予这一事物（可逆）！",
  "四种强化类型中的“改造”意味着基于一种事物，将其性质进行一定程度的改写（不可逆）！",
  "四种强化类型中的“锻造”意味着结合数种不同事物，将其转变为单种全新的事物（不可逆）！",
  "既然并非现世，大家定会友好相处吧！",
  "你有见到兽耳酱吗？",
  "让我先想想这条要写些啥……",
  "夜晚寂寞时，可以饮用维他柠檬茶！",
  "这个“豆知识”功能的图标是作者自己制作的！",
  "最开始的时候，本网页根本没有白色主题界面！",
  "你也可以为本系列创作衍生故事！",
  "记得在马桶水箱里放几个瓶子节约用水！",
  "其实白夜今明并非妄想限界系列的第一篇故事，不过之前的故事已经被推翻！",
  "本书曾经有考虑过写成限制级，但后来杉原夜季并未这么做！",
  "其实这本书的15禁分级只是吓唬人用的，读者完全可以是10岁甚至9岁！",
  "第一回公测名单中，久礼夏月的名字就在黑羽谅璃的前一行！",
  "故事开始时的方聆弦已经将近30岁了！",
  "若你在现世疲倦，可以登入TBO爆睡十几小时再回到现世，而现实时间只过了几分钟！",
  "擛壥敀栭恀揑妉摼椆梀媃揑應帋帒奿揑榖丄懘ID墳堊乽岦悾敀栭#001乿丅",
  "我不是恶龙太监！",
  "月星世界的日历算法又被称为“翡翠历”！",
  "月星中的一年只有300天，其中共六个月份，每月有50天！",
  "月星日历中每个月有足足50天，且一天仍旧为24小时！",
  "月星世界拥有天气变化，以及极其稀有的全区域共享型特殊气候，但并不存在四季更替！",
];

const hintButton = document.getElementById("hintButton");
const hintContainer = document.getElementById("hintContainer");
let currentHintTimeout;

function showHint() {
  hintContainer.style.display = 'flex';
  clearTimeout(currentHintTimeout);
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];
  hintContainer.textContent = randomSentence;

  currentHintTimeout = setTimeout(() => {
    hintContainer.textContent = "";
    hintContainer.style.display = 'none';
  }, randomSentence.length * 130);
}

hintButton.addEventListener("click", showHint);
