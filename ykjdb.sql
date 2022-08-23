/*
Navicat MySQL Data Transfer

Source Server         : localhost@3306
Source Server Version : 50739
Source Host           : localhost:3306
Source Database       : ykjdb

Target Server Type    : MYSQL
Target Server Version : 50739
File Encoding         : 65001

Date: 2022-08-23 17:20:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodsinfo
-- ----------------------------
DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `gid` int(255) NOT NULL AUTO_INCREMENT,
  `gname` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `rent` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `description` varchar(15555) DEFAULT NULL,
  `owner` int(11) DEFAULT '0',
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=1020 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of goodsinfo
-- ----------------------------
INSERT INTO `goodsinfo` VALUES ('1', ' 画物语 (Dixit Odyssey)', '100.00', '5.00', 'https://tvax4.sinaimg.cn/thumbnail/005WJM5Tly1h1oazxzqmmj30nw0nw0xo.jpg', 'topList', '屏息凝神！图画即将展开！画物语是款挑战你想象力与推理能力的说书人游戏，配合游戏所附的84张精美图画，无数的故事等待着你的述说，让每场游戏充满全新惊奇。欢迎来到画物语的世界，在这个奇幻的世界里，玩家将化身为说书人与猜谜者。作为说书人你需要通过灵活的思维，丰富的想象力来形容你选择的卡牌图画，可以是一个词，一段故事甚至是一首歌，而猜谜人则负责在众多的卡牌中找到说书人所真正打出的那张卡牌。', '1');
INSERT INTO `goodsinfo` VALUES ('2', '乌诺牌 (UNO)', '18.00', '1.00', 'https://tva3.sinaimg.cn/thumbnail/005WJM5Tly1h1oazy6uf4j30c30c33zd.jpg', 'topList', 'UNO是一种牌类游戏，于1971年由Merle Robbins发明，现由游戏公司Mattel生产。由于游戏规则中，当玩家手上只余下一张牌时，必须喊出\"uno\"，因而得名。Uno是西班牙语和意大利语中“1”的意思，发音为“乌诺”。UNO牌分三类牌：普通牌(76张)、功能牌(24张)、万能牌(8张)，不同的牌对应牌面点不同。', '1');
INSERT INTO `goodsinfo` VALUES ('3', '米勒山谷狼人', '28.00', '2.00', 'https://tvax1.sinaimg.cn/thumbnail/005WJM5Tly1h1oazydu12j30fe0fe40h.jpg', 'topList', '远离尘世的米勒山谷成了狼人出没的乐园，可怕的怪物正在威胁着这个宁静的小镇，镇民们必须立刻采取行动，在全镇都变成狼人的食物之前阻止这场危机！米勒山谷的狼人是一款炒热气氛、快速上手的派对游戏，适合家庭聚会或是朋友派对时游玩，适合8-20名玩家一起游戏，当心上瘾！', '1');
INSERT INTO `goodsinfo` VALUES ('4', '三国杀', '50.00', '5.00', 'https://tvax3.sinaimg.cn/thumbnail/005WJM5Tly1h1oazykj5jj30d00d03zx.jpg', 'topList', '三国杀作为市场上众多三国题材游戏的一员，将三国历史与桌面游戏进行了完美的“联姻”。以桌面游戏独有的方式向玩家展示了一个个鲜活的三国人物，一段段精彩的三国故事。三国杀里每一名武将的技能都是从这名武将的生平履历或性格特点中而来。', '1');
INSERT INTO `goodsinfo` VALUES ('5', '富饶之城 (Citadels)', '65.00', '8.00', 'https://tvax1.sinaimg.cn/thumbnail/005WJM5Tly1h1oazyon1xj3092092751.jpg', 'topList', '游戏中，玩家扮演城市规划师，建造最受国王喜爱的城市。在这个过程中，玩家需要收集金钱和建筑图纸，并获得城市中专业人士的支持。每一轮中，玩家会轮流选择一位特殊身份角色，该角色会为玩家提供特殊能力。例如：刺客可以谋杀其他玩家，修士可以向其他玩家乞讨，而建筑师允许玩家建造多个建筑。', '1');
INSERT INTO `goodsinfo` VALUES ('6', '抵抗组织:阿瓦隆', '100.00', '8.00', 'https://tvax2.sinaimg.cn/thumbnail/005WJM5Tly1h1oazyw06rj30cr0crq4e.jpg', 'topList', '正义与邪恶在阿瓦隆开始决战，这关乎到人类未来的文明。亚瑟代表了不列颠的未来，以及对繁荣和荣誉的承诺，但在他勇敢的战士团当中却藏匿著昧了良心的莫德雷德爪牙。这些邪恶势力的人数虽少，但彼此了解对方，并尽力在亚瑟忠臣之间隐藏好邪恶的身份。\r\n', '1');
INSERT INTO `goodsinfo` VALUES ('1001', '历史巨轮', '120.00', '15.00', 'https://tva2.sinaimg.cn/thumbnail/005WJM5Tly1h24ud6v08aj309q06ywhx.jpg', 'indexImgs', '请做好准备,你将创造一个历经时代变迁的伟大文明。在游戏中,每位玩家潜心发展自己的文明，努力让它在历史长卷中留下浓墨重彩的一笔。你可以借助文学，戏剧，宗教，奇迹以及伟大的领袖等让自己的文明获得相应的文化点数。所有文明的起点都是一样的，但你的抉择将导致你和其他文明的差异。鼓励发展文化艺术，掠夺羸弱的对手，或是经营快餐连锁店等，你的每一项决定都可能改变自己的发展轨迹。', '1');
INSERT INTO `goodsinfo` VALUES ('1002', '特奥蒂瓦坎：创录', '280.00', '22.00', 'https://tva2.sinaimg.cn/thumbnail/005WJM5Tly1h24ud74pslj30m80ci0y5.jpg', 'indexImgs', '好游戏，非常适合轻度玩家过度。一局游戏基本就一个小时左右，体验十分流畅，在不复杂的规则下构造出了一个非常有挑战性的规则，熟悉我的朋友都知道我特别喜欢规则简单但通过巧妙构思形成复杂策略的游戏，这款游戏无疑做到了。', '1');
INSERT INTO `goodsinfo` VALUES ('1003', '碧蓝深处', '190.00', '18.00', 'https://tva2.sinaimg.cn/thumbnail/005WJM5Tly1h24ud7qbdij30m80cidk5.jpg', 'indexImgs', '在最后的大陆上，有一座岛孤岛名叫风吼岛。这里流传着一项古老习俗——潜水。每年夏至，村民都会举行仪式，然后进行潜水竞赛，从海中寻回圣石：长老在悬崖上将圣石丢进海里，然后健儿们纷纷潜入深海，并在友善的海龟和魔鱼的帮助下，争夺圣石。获胜者可以获得“英雄”称号。但是要注意，海洋里还栖息着鲨鱼，可不能掉以轻心。', '1');
INSERT INTO `goodsinfo` VALUES ('1004', '大搜查！时光冒险', '80.00', '9.00', 'https://tvax4.sinaimg.cn/thumbnail/005WJM5Tly1h24ud859cmj30hc0m8tb4.jpg', 'indexImgs', '·马戏团来了，但有人准备了一场破坏活动！阻止他。\r\n·体验20世纪初巴黎的珠宝比赛\r\n·教授的时间机器工作异常。您必须将时间轴恢复正常！', '1');
INSERT INTO `goodsinfo` VALUES ('1005', '马拉开波', '178.00', '15.00', 'https://tvax3.sinaimg.cn/thumbnail/005WJM5Tly1h24ud8cm9vj3095095aal.jpg', 'indexImgs', '《马拉开波》是由著名桌游设计师Alexander Pfister于今年打造的一款全新策略游戏。游戏中玩家扮演一位船长，在17世纪群雄争霸的加勒比海努力提升声望，获得财富与荣誉。游戏还加入了引人入胜的故事模式，扬帆起航，你的冒险旅程就此展开！', '1');
INSERT INTO `goodsinfo` VALUES ('1006', 'Clank！太空回响', '238.00', '20.00', 'https://tva2.sinaimg.cn/thumbnail/005WJM5Tly1h24ud8nzy1j30mn0gok7q.jpg', '卡牌游戏', '《太空回响》是近年来最为出色的卡牌构筑桌游，刺激的游戏体验让人欲罢不能。记住！在探索未知太空船的时候别发出太多噪音！如果被飞船的统治者听到了你们的声响，厄运就会降临！《太空回响》兼顾了桌游的策略性和娱乐性，是老少咸宜的桌游佳作!', '1');
INSERT INTO `goodsinfo` VALUES ('1007', '作战室', '300.00', '28.00', 'https://tva3.sinaimg.cn/thumbnail/005WJM5Tly1h24ud9cvx8j31yq1zex3m.jpg', '聚会游戏', '欧洲战场美国加全球战场德国各一局\r\n在规则不复杂的情况下能体验二战全景还能进行微操的极爽战棋。\r\n讨论环节得存在让dt极大的减少，且参与感大幅度提升。\r\n战斗方面，海量骰子下微操的快感属实独一档。\r\n个人所认为的局限大概有两个\r\n1是还原度不够，不过毕竟不是兵棋，简化其实挺好的。\r\n2是打法感觉有点固定，体现在前期的关键战役上，尤其是轴心国方面。', '1');
INSERT INTO `goodsinfo` VALUES ('1008', '巨肩之城：芝加哥', '320.00', '35.00', 'https://tva3.sinaimg.cn/thumbnail/005WJM5Tly1h24ud9mln8j30i50p0n14.jpg', '聚会游戏', '1875-1915年，Chicago的黄金时代，企业家林立，各大知名品牌登上历史舞台。“世界的猪肉商、工匠、小麦仓储，铁路和国家货运搬运工，暴躁、魁梧、喧嚣，巨肩之城……”，游戏也在盒盖内饰上印着的诗人Carl Sandburg的诗篇中开启了。', '1');
INSERT INTO `goodsinfo` VALUES ('1009', '强国争坝', '220.00', '18.00', '\r\nhttps://tvax4.sinaimg.cn/thumbnail/005WJM5Tly1h24ud9vamrj30ta15oalm.jpg', '聚会游戏', '一场水利能源的革命已经到来.....\r\n\r\n现在是1922年。第一次世界大战的炮声已沉寂了四年，整个世界正在复苏。水力发电，伟大的尼古拉.特斯拉的馈赠，以此为契机世界各国从战争的灰烬中飞速崛起。一场新的战争即将在阿尔卑斯山的山谷中开始：你会击败你的对手，建立世界上最大的水电能源帝国吗？', '1');
INSERT INTO `goodsinfo` VALUES ('1010', '火星之上', '230.00', '18.00', 'https://tva2.sinaimg.cn/thumbnail/005WJM5Tly1h24uda4bpnj30k50p0mym.jpg', '聚会游戏', '一个版图上的主要行动，配合一个多种多样的高级行动，再加上穿梭阶段的拔人生产等等，真的太好玩啦！特别的是玩了一个发电站蓝图卡的高级行动是可以无视距离进行一次升级建筑，真的好狠，配合拿蓝图卡，全场白嫖别人建的建筑.\r\n代入感极佳，虽然思考量很大但是行动很流畅，暂时觉得大得分点应该是根据LSS奖励板块进行建造以及升级高级建筑卡牌的分数，还有科学家和合约卡也是补分的好方法。', '1');
INSERT INTO `goodsinfo` VALUES ('1011', 'Trickerion: Collector\'s Edition\r\n', '220.00', '18.00', 'https://tva3.sinaimg.cn/thumbnail/005WJM5Tly1h24udac4d6j306u06umyr.jpg', '聚会游戏', '编程+工放，特别的地方在于得分板块比较集中，并且可以蹭别人的表演得分，所以大家的目标会比较统一，不会各玩各的。缺点是伪编程，盖牌没有顺序，要自己记顺序，记性差的容易忘记刚刚的策略。还有就是某些黑市卡太强了，有点失衡。', '1');
INSERT INTO `goodsinfo` VALUES ('1012', '冒险战略：达美安娜之塔', '268.00', '20.00', 'https://tva3.sinaimg.cn/thumbnail/005WJM5Tly1h24udak7xbj30go0goqfr.jpg', '美式扮演', '耐玩的美式策略成长游戏，基本规则简单，角色成长的职业路线可变性，解决了初次体验职业路线规划错误的不可逆问题。\r\n当5大基础职业的不同组合满足精英职业的需求后，精英职业诞生，在整个13关卡游戏中，2/3可以由精英职业完成，职业体验时间合理。\r\n关卡怪物行动和人物行动设计精妙，每回合人物和怪物行动先后随机，怪物通过行动卡组随机抽取发动，可控性和随机性恰当好处，代入感极好，充满乐趣。', '1');
INSERT INTO `goodsinfo` VALUES ('1013', '方舟动物园', '258.00', '15.00', 'https://tvax2.sinaimg.cn/thumbnail/005WJM5Tly1h24udaoewbj30dp0go75e.jpg', '聚会游戏', '在《方舟动物园》中，你将规划并设计一座充满现代化,科学化管理的动物园。你将建造饲养区，安置动物，并在全球各地支持各种动物保护项目，以求努力打造出最成功的的动物学机构。各类专家以及独特的建筑都将协助你实现这一目标。\r\n《方舟动物园》的核心由255张卡牌构成,涉及动物、专家、独特建筑以及保护项目,每张卡牌都具有特定的能力。使用它们来增加你动物园的魅力以及科研声望，并收获保护点数。每位玩家均有一套行动卡牌，你将通过使用并升级它们来实现你的计划。', '1');
INSERT INTO `goodsinfo` VALUES ('1014', '果岛大亨', '180.00', '9.00', 'https://tvax4.sinaimg.cn/thumbnail/005WJM5Tly1h24uday63mj30go0gogmz.jpg', '聚会游戏', '1-4人轻量级策略桌游\r\n笑死，没有玩自己模式都不敢说自己是个德了？\r\n玩家在一片满是水果的岛屿上采集水果，可以追求种类合理，也可以追求极致的数量。大！就是好！\r\n收集到的水果可以用来完成岛上个各种订单，订单完成后你有获得更多的空间来采集水果。\r\n除此之外，还可以用水果来交易商业板块，购买冰淇淋，甚至于在工厂灌满液体。\r\n简而言之，在果岛，你可以用水果来获得一切。', '1');
INSERT INTO `goodsinfo` VALUES ('1015', '领国者：阶级霸权之路', '420.00', '34.00', 'https://tva2.sinaimg.cn/thumbnail/005WJM5Tly1h24udb2tkwj30go0go0ug.jpg', '德式策略', '无产阶级+免费医疗=爆人口领补助金咯\r\n', '1');
INSERT INTO `goodsinfo` VALUES ('1016', '沙丘：帝国', '334.00', '23.00', 'https://tva4.sinaimg.cn/thumbnail/005WJM5Tly1h24udbb4n6j30go0gotac.jpg', '德式策略', '《沙丘：帝国》是一个基于“沙丘宇宙”的设定创作的桌面游戏。它艺术形象来自传奇影业预计于2021年上映的最新电影《沙丘》，而整个沙丘故事最早发端于弗兰克·赫伯特，布莱恩·赫伯特以及凯文·J·安德森的同名系列小说。\r\n\r\n作为兰兹拉德某个大家族的领袖，你的工作包括树立旗帜、统帅士兵和调遣间谍。战争即将来临，而冲突的核心区域就在厄拉科斯，也就是那个被俗称为“沙丘”的沙漠行星。', '1');
INSERT INTO `goodsinfo` VALUES ('1018', '污痕圣杯：阿瓦隆的陨落', '588.00', '45.00', 'https://tvax1.sinaimg.cn/thumbnail/005WJM5Tly1h24uda81b5j30go0gomyl.jpg', '美式扮演', '《污痕圣杯：阿瓦隆的陨落》（简称TG）是一款剧情丰富的生存与探索游戏，可供1-4人游戏，背景设置在一个融合了亚瑟王传说与凯尔特神话的凄凉世界中，透过Awaken Realms（AR）的艺术家和作家们独特而黑暗的视角进行呈现。  这座名叫阿瓦隆的岛屿绝非人类居所。', '1');
INSERT INTO `goodsinfo` VALUES ('1019', 'Hamlet', '322.00', '16.00', 'https://tvax3.sinaimg.cn/thumbnail/005WJM5Tly1h24udbttkpj306u06ujrm.jpg', '聚会游戏', '在英语里将没有教堂的小村庄叫做“Hamlet”，所以在游戏中，我们都是小村庄中的居民，想要通过自己的努力建设，让大伙儿拥有一座教堂。玩家们通过在农田种植小麦、在矿场开采矿石、在伐木场加工木料、在市场贸易赚钱、在市政厅采购蓝图、劳力和驴子，将物资成批送往教堂。当最后一批货物抵达教堂，玩家们的使命也即将完成，对于教堂贡献最多的玩家，将取得胜利。\r\n', '1');

-- ----------------------------
-- Table structure for message_list
-- ----------------------------
DROP TABLE IF EXISTS `message_list`;
CREATE TABLE `message_list` (
  `msg_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1022 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of message_list
-- ----------------------------
INSERT INTO `message_list` VALUES ('1001', '系统消息', '欢迎您使用共享桌游小程序平台！', '2022-05-10 17:24:07', '1');
INSERT INTO `message_list` VALUES ('1002', '系统消息', '每日签到会获得贡献值，不要忘了签到哦！', '2022-05-10 18:08:10', '1');
INSERT INTO `message_list` VALUES ('1003', '你的桌游 画物语 (Dixit Odyssey)已经归还了', '感谢您的分享', '2022-05-12 22:40:35', '1');
INSERT INTO `message_list` VALUES ('1004', '你的桌游米勒山谷狼人被预定了', '买家的联系电话: 1234; 买家的地址: 重庆渝北', '2022-05-12 22:42:11', '1');
INSERT INTO `message_list` VALUES ('1005', '你的桌游米勒山谷狼人被预定了', '买家的联系电话: 1234; 买家的地址: 重庆渝北', '2022-05-12 22:44:35', '1');
INSERT INTO `message_list` VALUES ('1006', '你的桌游米勒山谷狼人已经归还了', '感谢您的分享', '2022-05-12 22:45:26', '1');
INSERT INTO `message_list` VALUES ('1007', '你的桌游马拉开波被预定了', '买家的联系电话: 1234; 买家的地址: 重庆渝北', '2022-05-12 22:46:11', '1');
INSERT INTO `message_list` VALUES ('1008', '你的桌游米勒山谷狼人已经归还了', '感谢您的分享', '2022-05-12 23:01:07', '1');
INSERT INTO `message_list` VALUES ('1009', '你的桌游冒险战略：达美安娜之塔被预定了', '买家的联系电话: 1234; 买家的地址: 重庆涪陵', '2022-05-12 23:48:44', '1');
INSERT INTO `message_list` VALUES ('1010', '你的桌游冒险战略：达美安娜之塔已经归还了', '感谢您的分享', '2022-05-12 23:48:56', '1');
INSERT INTO `message_list` VALUES ('1011', '你的桌游 画物语 (Dixit Odyssey)被预定了', '买家的联系电话: ; 买家的地址: null', '2022-05-13 04:50:55', '1');
INSERT INTO `message_list` VALUES ('1012', '你的桌游乌诺牌 (UNO)被预定了', '买家的联系电话: ; 买家的地址: null', '2022-05-13 12:54:25', '1');
INSERT INTO `message_list` VALUES ('1013', '你的桌游果岛大亨被预定了', '买家的联系电话: 1234; 买家的地址: 重庆涪陵', '2022-05-13 16:15:39', '1');
INSERT INTO `message_list` VALUES ('1014', '你的桌游果岛大亨已经归还了', '感谢您的分享', '2022-05-13 16:16:02', '1');
INSERT INTO `message_list` VALUES ('1015', '你的桌游马拉开波已经归还了', '感谢您的分享', '2022-05-18 21:51:41', '1');
INSERT INTO `message_list` VALUES ('1016', '你的桌游 画物语 (Dixit Odyssey)被预定了', '买家的联系电话: 1234; 买家的地址: 重庆涪陵', '2022-05-18 21:54:52', '1');
INSERT INTO `message_list` VALUES ('1017', '你的桌游 画物语 (Dixit Odyssey)已经归还了', '感谢您的分享', '2022-05-18 21:55:15', '1');
INSERT INTO `message_list` VALUES ('1018', '你的桌游米勒山谷狼人已经归还了', '感谢您的分享', '2022-08-23 15:49:17', '1');
INSERT INTO `message_list` VALUES ('1019', '你的桌游米勒山谷狼人已经归还了', '感谢您的分享', '2022-08-23 15:49:23', '1');
INSERT INTO `message_list` VALUES ('1020', '你的桌游果岛大亨已经归还了', '感谢您的分享', '2022-08-23 15:53:36', '1');
INSERT INTO `message_list` VALUES ('1021', '你的桌游冒险战略：达美安娜之塔已经归还了', '感谢您的分享', '2022-08-23 15:54:22', '1');

-- ----------------------------
-- Table structure for orderinfo
-- ----------------------------
DROP TABLE IF EXISTS `orderinfo`;
CREATE TABLE `orderinfo` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` datetime NOT NULL,
  `complete_time` datetime DEFAULT NULL,
  `owner` int(11) NOT NULL,
  `renter` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1014 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of orderinfo
-- ----------------------------
INSERT INTO `orderinfo` VALUES ('1007', '2022-05-12 22:44:35', '2022-08-23 15:49:23', '1', '1', '3', '1');
INSERT INTO `orderinfo` VALUES ('1008', '2022-05-12 22:46:11', '2022-05-18 21:51:41', '1', '1', '1005', '1');
INSERT INTO `orderinfo` VALUES ('1009', '2022-05-12 23:48:44', '2022-08-23 15:54:22', '1', '1', '1012', '1');
INSERT INTO `orderinfo` VALUES ('1010', '2022-05-13 04:50:55', null, '1', '2', '1', '0');
INSERT INTO `orderinfo` VALUES ('1011', '2022-05-13 12:54:25', null, '1', '2', '2', '0');
INSERT INTO `orderinfo` VALUES ('1012', '2022-05-13 16:15:39', '2022-08-23 15:53:36', '1', '1', '1014', '1');
INSERT INTO `orderinfo` VALUES ('1013', '2022-05-18 21:54:52', '2022-05-18 21:55:15', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT '',
  `contribution` int(11) DEFAULT '0',
  `address` varchar(255) DEFAULT NULL,
  `wallet` double(10,0) DEFAULT NULL,
  `daily_check` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'ykj1', '123', '13911112222', '0', '重庆市涪陵区长江师范学院南苑', '111090', '2022-08-23');
INSERT INTO `userinfo` VALUES ('2', 'ykj2', '123', '', '0', null, '1109', '2022-05-12');

-- ----------------------------
-- Table structure for wish_list
-- ----------------------------
DROP TABLE IF EXISTS `wish_list`;
CREATE TABLE `wish_list` (
  `user_id` int(11) NOT NULL,
  `gid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of wish_list
-- ----------------------------
INSERT INTO `wish_list` VALUES ('1', '1001');
INSERT INTO `wish_list` VALUES ('1', '1002');
INSERT INTO `wish_list` VALUES ('1', '1003');
INSERT INTO `wish_list` VALUES ('1', '1004');
INSERT INTO `wish_list` VALUES ('1', '2');
INSERT INTO `wish_list` VALUES ('1', '4');
INSERT INTO `wish_list` VALUES ('1', '1008');
INSERT INTO `wish_list` VALUES ('1', '1018');
INSERT INTO `wish_list` VALUES ('2', '1');
