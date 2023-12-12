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
  "白夜初次进入TBO时便位于艾兹维泽区域的高危地带！",
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
  "八大区域皆有属于自己的核心地带！",
  "每个区域的核心地带并不一定在这个区域的中央！譬方说，毒沼矿谷坐落于艾兹维泽的边界上！",
  "艾兹维泽区域的核心地带是毒沼矿谷！",
  "有些区域的核心地带几乎与其迷宫划等号！",
  "薙峯霞林区域的核心地带范围最大，近乎覆盖整个区域！",
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
  "除卡迩玻什外，叶赖锡安区域还有两个安全区！",
  "虽然浓雾弥漫，但薙峯霞林区域实际上坐落于佩蒂利亚大陆的干燥线上！",
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
  "TBO世界的痛感为真实世界的四分之一！",
  "现实世界的尿意与饥渴感等会原封不动地反映给游戏中的你！",
  "NeuralLinker会在你使用设备时关注你周围的现实世界，并在特殊情况发生时警告游戏中的你！",
  "NeuralLinker和NeuroLinker只差两个字母！",
  "普通的传送水晶无法在迷宫中使用！",
  "每个大型区域都至少并至多有一座迷宫！",
  "迷宫中受损的区域会在一天之内自我修复！",
  "有些迷宫的结构可能会不断地产生变化！",
  "月星历史上的科技巅峰位于叶赖锡安区域，而非沙漠地带亚穆路陀区域！",
  "迷宫中也会存在安全地带，但你无法在那里保存复活点！",
  "保存复活点需要用到重生锚！",
  "一个玩家只能在短时间内使用最多三次重生锚，超限会导致死亡时被传送至当前区域的传送广场！",
  "每个重生锚最多只能累积三次充能，且每当有人通过此重生锚复活都会导致充能减一！",
  "重生锚的充能每小时都会恢复一格！",
  "重生锚在锚定成功后，只能被锚定者解除！",
  "重生锚在非锚定状态下会损失所有的充能！",
  "月星系统承认的是安全区范围，而并非建筑物，因此建筑物内可能也会被划分为“野外”！",
  "由于重生锚的造价十分昂贵，同一锚定者在短距离内锚定多个重生锚并不是个好主意！",
  "锚定后的重生锚可以被任何玩家使用，但绑定锚点需要经过锚定者的许可（解除绑定不需要许可）！",
  "NeuralLinker将在检测到你的身体处于危险状态时强制将你弹出游戏！",
  "四轮之柱曾经差点就要成为六轮之柱！",
  "我也喜欢大重未有（比划剪刀手）！",
  "公测期间的大型公会一般拥有超过一百位成员！",
  "月星的公测期只持续了现实的七天！",
  "将时间倍数设置为144究竟有什么特殊的意义呢？",
  "有超过100条不同的豆知识！",
  "你可以在右下角打开/关闭月星世界的地图！",
  "若你不确定本阅读器是否为最新版本，可确认一下页面最右下角的版本编号！",
  "Kimi no website not so good！",
  "重生锚可以用于驱散直径10米内的魔物并防止魔物/野生动物在此生成！",
  "巨量重生锚出现在一片区域后即会使那里成为安全区，但这需要的重生锚数量真的很多！",
  "虚无山脉曾像仙境般美丽！",
  "重生锚的原材料是佩蒂利亚翡翠！",
  "在玩家或NPC接触佩蒂利亚翡翠的表面后，它将短暂地闪耀出对象的元素代表色！",
  "听说虚无山脉的迷宫最终Boss是一只六翼的巨型蝴蝶！",
  "NPC无法使用重生锚重生，但因重生锚具有驱散魔物的效果，他们仍会在住处锚定重生锚！",
  "重生锚素材与虚无山脉曾经形态的灵感来自于作者林忆雨！",
  "你可以解锁各种稀奇古怪的被动技能来帮助你完成各种生产业目的！",
  "和伊一直都在尝试剖析佩蒂利亚翡翠的魔力构成，以达成使用单一水晶储存多种元素属性的目的！",
  "某些被动技能对绝大部分玩家有帮助，但也有少部分玩家根本不需要系统辅助即可达成目的！",
  "资料页左下角的青色按钮可用于打开属性加点模拟器哦！",
  "你甚至可以使用页面跳转按钮跳转至事件簿系列故事！",
  "你可以使用页面跳转按钮跳转至白夜今明世界观的任何故事，无论主线还是支线！",
  "攻击效率为+0%的玩家依然可能比攻击效率为+3000%的玩家的攻击效率要高！",
  "耐久加点的提升也可以正面影响移动速度！",
  "智慧加点不仅对魔法攻防的提升有帮助，还可以用来提高暴击率！",
  "物理攻击只在攻击消耗弹药时归类为远程物理攻击！这意味着投掷长枪也会是远程攻击（消耗了长枪！）",
  "BYD游戏笔记！",
  "Build Your Dream 游戏笔记！",
  "说脏话牛奶！",
  "玩原神玩的！",
  "玩怪猎玩的！",
  "玩黄油玩的！",
  "502：Bad Gateway",
  "豆知识很符合读者的平均精神状态！",
  "我乃从天而降的一道光，照亮混沌的令和网络世界，为漂泊在电子之海的宅宅们献上笑容！向大家保证世界会和平！虽然我躁郁，但尽管放心！当代互联网小天使，堂堂降临！！",
  "你知道海神市吗？",
  "索姆尼洛拉被誉为花海中的仙境之村，但这里的科技水平极其落后，甚至没有普及电灯！",
  "姆歇戎区域与薙峯霞林区域拥有全大陆90%的虫类魔物！",
  "薙峯霞林区域的西侧边缘附近地热储能丰富，因此拥有不少的天然温泉！",
  "虽然布雷姆城是最受玩家欢迎的安全区，但布雷姆西南方同属于塞壬区域的芙纳丝镇却由于气候过于湿润温暖，故无太多玩家居住！",
  "御/天真正/伊赋夜。",
  "须臾仙境的迷宫区域“落英绝尘之乡”已不复存在！",
  "你几乎无法找到完全不具备防御力的衣物！",
  "你可以同时使用多把武器，但它们的属性并不会共享或叠加！",
  "资料页左下角可以切换至元素法典，其内拥有对衍生作者非常有参考价值的信息！",
  "TBO的货币“锡安”是人造物体！",
  "饲养魔物作为宠物较不切实际，因为魔物无法靠近重生锚，而玩家家中一般必定会有重生锚！",
  "野外造房子不插重生锚很容易让房子内部生成魔物！",
  "精英怪拥有记忆，能够记得其他生物曾对自己做出的行为，且精英怪死亡复活后记忆不会重置！",
  "佩蒂利亚大陆并非月星世界唯一的大陆！",
  "塞壬区域的迷宫被称为“图莱诺尖塔”，意为雷霆的高塔。但它的样貌更像是一座倒置的丛林金字塔！",
  "须臾仙境区域是中国古文化主题的区域！",
  "须臾仙境区域的迷宫Boss攫灮蚀檀胡蝶是唯一被推断为永久死亡的迷宫Boss！",
  "TBO内是可以涩涩的！",
  "TBO内是不推荐涩涩的！",
  "养白夜不如养两条叉烧肠粉！",
  "斯卢霍维城至伊古弥安城的这段看似不长的直线道路是佩蒂利亚大陆地表最危险的道路之一！",
  "伦卡由旬山脚城镇郎歌亥因的名字意为“灰色的城镇”！",
  "亚穆路陀会定期挂起灾难性的沙尘暴，且主要安全区洳图里城就在沙尘暴的范围之内！",
  "由于定期性沙尘暴，洳图里城附近的玩家每次拥有的探索时间相当于是有限的！",
  "别妄想孤身在野外抵抗暴风雪或沙尘暴，你是活不下来的！",
  "亚穆路陀的绿洲地带不受沙尘暴侵害！",
  "亚穆路陀的迷宫Boss是一台巨大的古代高科技机械！",
  "佩蒂利亚大陆的文明曾到达过相当先进的高度！",
  "若你在荒无人烟的野外挑选了一个小范围区域杀死太多魔物，你并不会因此遇见等级越来越高的魔物，只会发现魔物的生成频率大大降低了！",
  "如今的佩蒂利亚大陆科技最发达处为叶赖锡安区域的主要安全区卡迩玻什！",
  "在同一个区域杀害太多魔物会使得系统开始针对此区域进行“调整适应”，这也正是为何叶赖锡安的魔物平均如此之强！",
];

const hintButton = document.getElementById("hintButton");
const hintContainer = document.getElementById("hintContainer");
let currentHintTimeout;
let restrictToggle = false;

function showHint() {
  hintContainer.style.display = 'flex';
  clearTimeout(currentHintTimeout);
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];
  hintContainer.textContent = randomSentence;

  currentHintTimeout = setTimeout(() => {
    hintContainer.textContent = "";
    hintContainer.style.display = 'none';
  }, randomSentence.length * 180);
}

hintButton.addEventListener("click", showHint);

document.getElementById('restrictButton').onclick = function() {
  if (restrictToggle) {
    document.getElementById('modal').style.display = 'none';
    restrictToggle = false;
  } else {
    document.getElementById('modal').style.display = 'block';
    restrictToggle = true;
  }
};
function checkCode() {
  var inputCode = document.getElementById('codeInput').value;
  if (inputCode === "Moonlight") {
      setCookie('hiddenText', 'true', 365);
      document.getElementById('modal').style.display = 'none';
      alert("通往真实的晨星 正散发着柔和的微光");
  } else {
      alert("通往真实的晨星 尚未点亮");
  }
  document.getElementById('modal').style.display = 'none';
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
