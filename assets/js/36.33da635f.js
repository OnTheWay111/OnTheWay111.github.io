(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{561:function(s,t,a){s.exports=a.p+"assets/img/img_1.4d04b522.png"},892:function(s,t,a){"use strict";a.r(t);var n=a(23),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:a(561),alt:"img_1.png"}})]),s._v(" "),n("h2",{attrs:{id:"_1-首先确认服务器出于安全的状态-也就是没有人能够任意地连接mysql数据库。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先确认服务器出于安全的状态-也就是没有人能够任意地连接mysql数据库。"}},[s._v("#")]),s._v(" 1．首先确认服务器出于安全的状态，也就是没有人能够任意地连接MySQL数据库。")]),s._v(" "),n("p",[s._v("因为在重新设置MySQL的root密码的期间，MySQL数据库完全出于没有密码保护的\n状态下，其他的用户也可以任意地登录和修改MySQL的信息。可以采用将MySQL对\n外的端口封闭，并且停止Apache以及所有的用户进程的方法实现服务器的准安全\n状态。最安全的状态是到服务器的Console上面操作，并且拔掉网线。")]),s._v(" "),n("h2",{attrs:{id:"_2-修改mysql的登录设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改mysql的登录设置"}},[s._v("#")]),s._v(" 2．修改MySQL的登录设置：")]),s._v(" "),n("p",[n("code",[s._v("vi /etc/my.cnf")]),s._v("\n在[mysqld]的段中加上一句：skip-grant-tables\n例如：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql/mysql.sock \nskip-grant-tables\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("保存并且退出vi。")]),s._v(" "),n("h2",{attrs:{id:"_3-重新启动mysqld"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-重新启动mysqld"}},[s._v("#")]),s._v(" 3．重新启动mysqld")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("$ /etc/init.d/mysqld restart 或者service mysqld restart\nStopping MySQL: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" OK "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nStarting MySQL: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" OK "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_4-登录并修改mysql的root密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-登录并修改mysql的root密码"}},[s._v("#")]),s._v(" 4．登录并修改MySQL的root密码")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@bogon bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/mysql")]),s._v("\nWelcome to the MySQL monitor.  Commands end with "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("g.\nYour MySQL connection "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" is "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nServer version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".49 MySQL Community Server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" by Remi\n\nCopyright "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v(", Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'help;'")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\h'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" help. Type "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\c'")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" the current input statement.\n\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" UPDATE user SET Password "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" password "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lizhen7'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" WHERE User "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRows matched: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  Changed: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  Warnings: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("至此，密码修改完毕")]),s._v(" "),n("h2",{attrs:{id:"_5-将mysql的登录设置修改回来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-将mysql的登录设置修改回来"}},[s._v("#")]),s._v(" 5．将MySQL的登录设置修改回来")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("将刚才在[mysqld]的段中加上的skip-grant-tables删除\n保存并且退出vi。")]),s._v(" "),n("h2",{attrs:{id:"_6-重新启动mysqld"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-重新启动mysqld"}},[s._v("#")]),s._v(" 6．重新启动mysqld")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/etc/init.d/mysqld restart\nStopping MySQL: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" OK "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nStarting MySQL: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" OK "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);