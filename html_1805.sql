/*
Navicat MySQL Data Transfer

Source Server         : db_klg
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : html_1805

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-24 20:32:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for contents
-- ----------------------------
DROP TABLE IF EXISTS `contents`;
CREATE TABLE `contents` (
  `cid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) unsigned DEFAULT NULL,
  `content` varchar(2000) DEFAULT NULL,
  `dateline` int(10) unsigned DEFAULT '0',
  `support` int(11) unsigned DEFAULT '0',
  `oppose` int(11) unsigned DEFAULT '0',
  PRIMARY KEY (`cid`),
  KEY `oppose` (`oppose`),
  KEY `uid` (`uid`),
  KEY `support` (`support`)
) ENGINE=MyISAM AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contents
-- ----------------------------
INSERT INTO `contents` VALUES ('111', '3', '88888', '1536840108', '0', '0');
INSERT INTO `contents` VALUES ('110', '3', 'dfsfsdfd', '1536839877', '0', '0');
INSERT INTO `contents` VALUES ('109', '3', '5654645654', '1536839865', '0', '0');
INSERT INTO `contents` VALUES ('105', '3', 'gfdgdfgfdg', '1536839378', '0', '0');
INSERT INTO `contents` VALUES ('107', '3', '6767676756', '1536839479', '0', '0');
INSERT INTO `contents` VALUES ('108', '3', '55555rwsfd', '1536839604', '0', '0');
INSERT INTO `contents` VALUES ('106', '3', '4545435', '1536839454', '0', '0');
INSERT INTO `contents` VALUES ('104', '3', '555555555555555555555', '1536839260', '0', '0');
INSERT INTO `contents` VALUES ('103', '3', 'rtrtrt', '1536839199', '5', '0');
INSERT INTO `contents` VALUES ('102', '3', '55555', '1536839195', '0', '0');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `now` varchar(255) DEFAULT NULL,
  `commentCount` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('25', 'CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '899', '123', '100', '');
INSERT INTO `goodslist` VALUES ('26', 'CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '698', '544', '102', '#');
INSERT INTO `goodslist` VALUES ('27', 'Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '398', '34', '52', '');
INSERT INTO `goodslist` VALUES ('28', 'EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '998', '975', '6002', '');
INSERT INTO `goodslist` VALUES ('29', 'natio 月见草保湿乳�?25ml（香港直邮）', '../img/g5.jpg', '198', '434', '802', '');
INSERT INTO `goodslist` VALUES ('30', 'natio 月见草保湿乳�?25ml（香港直邮）', '../img/g6.jpg', '6998', '864', '1602', '#');
INSERT INTO `goodslist` VALUES ('31', '京城之霜 五爪提拉塑颜霜超值装(�?8g*2+美容�?00ml*2)', '../img/g7.jpg', '3998', '980', '10002', '#');
INSERT INTO `goodslist` VALUES ('32', '韩后 10周年乳清蛋白经典组（臻润礼盒*2盒）', '../img/g8.jpg', '698', '78', '88002', '#');
INSERT INTO `goodslist` VALUES ('93', '京城之霜 五爪提拉逆时修护眼霜特惠套装�?5g*2盒）', '../img/g9.jpg', '1998', '34344', '40002', '');
INSERT INTO `goodslist` VALUES ('103', '御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '678', '3402', '#');
INSERT INTO `goodslist` VALUES ('113', '1CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '1899', '123', '1000', '');
INSERT INTO `goodslist` VALUES ('122', '2CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '6298', '544', '1020', '#');
INSERT INTO `goodslist` VALUES ('131', '3Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '3398', '34', '520', '');
INSERT INTO `goodslist` VALUES ('141', '4EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '9918', '975', '60020', '');
INSERT INTO `goodslist` VALUES ('35', '5natio 月见草保湿乳�?25ml（香港直邮）', '../img/g5.jpg', '1498', '434', '8020', '');
INSERT INTO `goodslist` VALUES ('36', '6natio 月见草保湿乳�?25ml（香港直邮）', '../img/g6.jpg', '62398', '864', '16020', '#');
INSERT INTO `goodslist` VALUES ('37', '7京城之霜 五爪提拉塑颜霜超值装(�?8g*2+美容�?00ml*2)', '../img/g7.jpg', '3798', '980', '100020', '#');
INSERT INTO `goodslist` VALUES ('38', '8韩后 10周年乳清蛋白经典组（臻润礼盒*2盒）', '../img/g8.jpg', '498', '78', '880024', '#');
INSERT INTO `goodslist` VALUES ('39', '9京城之霜 五爪提拉逆时修护眼霜特惠套装�?5g*2盒）', '../img/g9.jpg', '1698', '344', '4002', '');
INSERT INTO `goodslist` VALUES ('40', '10御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '6678', '3202', '#');
INSERT INTO `goodslist` VALUES ('41', '御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '678', '3402', '#');
INSERT INTO `goodslist` VALUES ('42', '1CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '1899', '13423', '104500', '');
INSERT INTO `goodslist` VALUES ('43', '2CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '6298', '54334', '11020', '#');
INSERT INTO `goodslist` VALUES ('44', '3Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '3398', '345634', '52440', '');
INSERT INTO `goodslist` VALUES ('45', '4EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '9918', '97325', '600220', '');
INSERT INTO `goodslist` VALUES ('46', 'CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '899', '123', '100', '');
INSERT INTO `goodslist` VALUES ('47', 'CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '698', '544', '102', '#');
INSERT INTO `goodslist` VALUES ('48', 'Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '398', '34', '52', '');
INSERT INTO `goodslist` VALUES ('49', 'EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '998', '975', '6002', '');
INSERT INTO `goodslist` VALUES ('50', 'natio 月见草保湿乳�?25ml（香港直邮）', '../img/g5.jpg', '198', '434', '802', '');
INSERT INTO `goodslist` VALUES ('51', 'natio 月见草保湿乳�?25ml（香港直邮）', '../img/g6.jpg', '6998', '864', '1602', '#');
INSERT INTO `goodslist` VALUES ('52', '京城之霜 五爪提拉塑颜霜超值装(�?8g*2+美容�?00ml*2)', '../img/g7.jpg', '3998', '980', '10002', '#');
INSERT INTO `goodslist` VALUES ('53', '韩后 10周年乳清蛋白经典组（臻润礼盒*2盒）', '../img/g8.jpg', '698', '78', '88002', '#');
INSERT INTO `goodslist` VALUES ('96', '京城之霜 五爪提拉逆时修护眼霜特惠套装�?5g*2盒）', '../img/g9.jpg', '1998', '34344', '40002', '');
INSERT INTO `goodslist` VALUES ('54', '御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '678', '3402', '#');
INSERT INTO `goodslist` VALUES ('55', '1CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '1899', '123', '1000', '');
INSERT INTO `goodslist` VALUES ('56', '2CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '6298', '544', '1020', '#');
INSERT INTO `goodslist` VALUES ('57', '3Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '3398', '34', '520', '');
INSERT INTO `goodslist` VALUES ('58', '4EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '9918', '975', '60020', '');
INSERT INTO `goodslist` VALUES ('59', '5natio 月见草保湿乳�?25ml（香港直邮）', '../img/g5.jpg', '1498', '434', '8020', '');
INSERT INTO `goodslist` VALUES ('60', '6natio 月见草保湿乳�?25ml（香港直邮）', '../img/g6.jpg', '62398', '864', '16020', '#');
INSERT INTO `goodslist` VALUES ('61', '7京城之霜 五爪提拉塑颜霜超值装(�?8g*2+美容�?00ml*2)', '../img/g7.jpg', '3798', '980', '100020', '#');
INSERT INTO `goodslist` VALUES ('62', '8韩后 10周年乳清蛋白经典组（臻润礼盒*2盒）', '../img/g8.jpg', '498', '78', '880024', '#');
INSERT INTO `goodslist` VALUES ('63', '9京城之霜 五爪提拉逆时修护眼霜特惠套装�?5g*2盒）', '../img/g9.jpg', '1698', '344', '4002', '');
INSERT INTO `goodslist` VALUES ('64', '10御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '6678', '3202', '#');
INSERT INTO `goodslist` VALUES ('65', '御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '678', '3402', '#');
INSERT INTO `goodslist` VALUES ('66', '1CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '1899', '13423', '104500', '');
INSERT INTO `goodslist` VALUES ('68', '2CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '6298', '54334', '11020', '#');
INSERT INTO `goodslist` VALUES ('67', '3Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '3398', '345634', '52440', '');
INSERT INTO `goodslist` VALUES ('69', '4EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '9918', '97325', '600220', '');
INSERT INTO `goodslist` VALUES ('1', 'CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '899', '123', '100', '');
INSERT INTO `goodslist` VALUES ('2', 'CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '698', '544', '102', '#');
INSERT INTO `goodslist` VALUES ('3', 'Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '398', '34', '52', '');
INSERT INTO `goodslist` VALUES ('4', 'EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '998', '975', '6002', '');
INSERT INTO `goodslist` VALUES ('5', 'natio 月见草保湿乳�?25ml（香港直邮）', '../img/g5.jpg', '198', '434', '802', '');
INSERT INTO `goodslist` VALUES ('6', 'natio 月见草保湿乳�?25ml（香港直邮）', '../img/g6.jpg', '6998', '864', '1602', '#');
INSERT INTO `goodslist` VALUES ('7', '京城之霜 五爪提拉塑颜霜超值装(�?8g*2+美容�?00ml*2)', '../img/g7.jpg', '3998', '980', '10002', '#');
INSERT INTO `goodslist` VALUES ('8', '韩后 10周年乳清蛋白经典组（臻润礼盒*2盒）', '../img/g8.jpg', '698', '78', '88002', '#');
INSERT INTO `goodslist` VALUES ('9', '京城之霜 五爪提拉逆时修护眼霜特惠套装�?5g*2盒）', '../img/g9.jpg', '1998', '34344', '40002', '');
INSERT INTO `goodslist` VALUES ('10', '御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '678', '3402', '#');
INSERT INTO `goodslist` VALUES ('11', '1CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '1899', '123', '1000', '');
INSERT INTO `goodslist` VALUES ('12', '2CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '6298', '544', '1020', '#');
INSERT INTO `goodslist` VALUES ('13', '3Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '3398', '34', '520', '');
INSERT INTO `goodslist` VALUES ('14', '4EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '9918', '975', '60020', '');
INSERT INTO `goodslist` VALUES ('15', '5natio 月见草保湿乳�?25ml（香港直邮）', '../img/g5.jpg', '1498', '434', '8020', '');
INSERT INTO `goodslist` VALUES ('16', '6natio 月见草保湿乳�?25ml（香港直邮）', '../img/g6.jpg', '62398', '864', '16020', '#');
INSERT INTO `goodslist` VALUES ('17', '7京城之霜 五爪提拉塑颜霜超值装(�?8g*2+美容�?00ml*2)', '../img/g7.jpg', '3798', '980', '100020', '#');
INSERT INTO `goodslist` VALUES ('18', '8韩后 10周年乳清蛋白经典组（臻润礼盒*2盒）', '../img/g8.jpg', '498', '78', '880024', '#');
INSERT INTO `goodslist` VALUES ('19', '9京城之霜 五爪提拉逆时修护眼霜特惠套装�?5g*2盒）', '../img/g9.jpg', '1698', '344', '4002', '');
INSERT INTO `goodslist` VALUES ('20', '10御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '6678', '3202', '#');
INSERT INTO `goodslist` VALUES ('10', '御泥�?黑玫瑰奢华蚕丝面膜升级套�?7�?�?6�?（共42片）', '../img/g10.jpg', '2998', '678', '3402', '#');
INSERT INTO `goodslist` VALUES ('21', '1CEMOY 南极冰川黑面�?片装（香港直邮）', '../img/g1.jpg', '1899', '13423', '104500', '');
INSERT INTO `goodslist` VALUES ('22', '2CEMOY 安瓶海藻修复面膜5片装（香港直邮）', '../img/g2.jpg', '6298', '54334', '11020', '#');
INSERT INTO `goodslist` VALUES ('23', '3Sudocrem 屁屁霜屁屁乐125g（香港直邮）', '../img/g3.jpg', '3398', '345634', '52440', '');
INSERT INTO `goodslist` VALUES ('24', '4EAORON 水光针蜂毒胶囊面�?0ml*8颗（香港直邮�?', '../img/g4.jpg', '9918', '97325', '600220', '');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(16) DEFAULT NULL,
  `password` char(32) DEFAULT NULL,
  `avatar` tinyint(1) unsigned DEFAULT '1',
  `login_key` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('18', '18125742696', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('19', '17765603073', 'df10ef8509dc176d733d59549e7dbfaf', '1', null);
INSERT INTO `users` VALUES ('20', '18244923685', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('21', '18125742636', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('22', '18125743693', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('23', '18125745566', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('24', '18125743546', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('25', '18125742896', '5d4687760064d0e088c63add33c5e8da', '1', null);
INSERT INTO `users` VALUES ('26', '17765603072', '3fb2768babbdc8a67e32302c32d7e543', '1', null);
INSERT INTO `users` VALUES ('27', '18125744456', 'df10ef8509dc176d733d59549e7dbfaf', '1', null);
SET FOREIGN_KEY_CHECKS=1;
