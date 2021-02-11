const musics = [
    Music(1, "Tell Your World",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2012, 3, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=PqJNc9KVIZE"),
            mURL("3DMV", "https://www.youtube.com/watch?v=UUaVUWCPv_Y")
        ]
    ),
    Music(2, "ネクストネスト",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2014, 6, 27),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23881953"),
            mURL("原曲", "https://www.youtube.com/watch?v=ajlDAQeWQKE")
        ]
    ),
    Music(3, "メルト",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2007, 12, 7),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm1715919"),
            mURL("10th ANNIVERSARY MIX", "https://www.youtube.com/watch?v=4YHUamjfJ0k")
        ]
    ),
    Music(4, "初音ミクの消失",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2008, 4, 8),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm2937784"),
            mURL("10周年リメイク", "https://www.youtube.com/watch?v=VWVtIg5cdDU")
        ]
    ),
    Music(5, "Blessing",
        [
            Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"])
        ],
        mDate(2014, 4, 11),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23304692"),
            mURL("原曲", "https://www.youtube.com/watch?v=E4tIHBx7bqc")
        ]
    ),
    Music(6, "alive",
        [
            Vocal("virtual", ["rin"])
        ],
        mDate(2020, 9, 30),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37597218"),
            mURL("原曲", "https://www.youtube.com/watch?v=y7RfoyBJxCg")
        ]
    ),
    Music(7, "ロキ",
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["miku", "ichika"])
        ],
        mDate(2018, 2, 27),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32798041"),
            mURL("原曲", "https://www.youtube.com/watch?v=Xg-qfsKN2_E"),
            mURL("3DMV", "https://www.youtube.com/watch?v=PD8PHqWuSUI")
        ]
    ),
    Music(8, "テオ",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "miku"]),
            Vocal("another", ["ichika"])
        ],
        mDate(2017, 7, 8),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31533883"),
            mURL("原曲", "https://www.youtube.com/watch?v=bmkY2yc1K7Q"),
            mURL("3DMV", "https://www.youtube.com/watch?v=RCULeLioEnc")
        ]
    ),
    Music(9, "ヒバナ -Reloaded-",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika"]),
            Vocal("another", ["meiko"]),
            Vocal("another", ["ichika"])
        ],
        mDate(2017, 8, 4),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31685272"),
            mURL("原曲", "https://www.youtube.com/watch?v=hxSg2Ioz3LM")
        ]
    ),
    Music(10, "ハッピーシンセサイザ",
        [
            Vocal("virtual", ["luka", "gumi"]),
            Vocal("virtual", ["miku", "luka", "rin", "meiko"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku"]),
            Vocal("another", ["minori", "haruka"]),
            Vocal("another", ["airi", "shizuku"])
        ],
        mDate(2010, 11, 22),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm12825985"),
            mURL("原曲", "https://www.youtube.com/watch?v=poiZSEjQBgw"),
            mURL("3DMV", "https://www.youtube.com/watch?v=4x2oA5vy2_U")
        ]
    ),
    Music(11, "Nostalogic",
        [
            Vocal("virtual", ["meiko"]),
            Vocal("sekai", ["haruka", "shizuku", "meiko"]),
            Vocal("another", ["shizuku"])
        ],
        mDate(2014, 11, 5),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24848610")
        ]
    ),
    Music(12, "ツギハギスタッカート",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "airi", "shizuku"])
        ],
        mDate(2014, 6, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23762151"),
            mURL("原曲", "https://www.youtube.com/watch?v=p2Irc9NPCtk"),
            mURL("3DMV", "https://www.youtube.com/watch?v=6iwD9hM9ND4")
        ]
    ),
    Music(13, "劣等上等",
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["rin", "len", "kohane", "an"])
        ],
        mDate(2018, 7, 13),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33510542"),
            mURL("原曲", "https://www.youtube.com/watch?v=oEkGC2HV7rc"),
            mURL("3DMV", "https://www.youtube.com/watch?v=mjbDHb4B5NY"),
            mURL("マジカルミライ2018", "https://www.nicovideo.jp/watch/so33838374"),
            mURL("マジカルミライ2018", "https://www.youtube.com/watch?v=T7-AXotDMDE")
        ]
    ),
    Music(14, "ドクター＝ファンクビート",
        [
            Vocal("virtual", ["kaito"]),
            Vocal("sekai", ["kaito", "akito", "toya"]),
            Vocal("another", ["len"])
        ],
        mDate(2015, 6, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm26470008"),
            mURL("原曲", "https://www.youtube.com/watch?v=CPxxurEcGTw")
        ]
    ),
    Music(15, "フラジール",
        [
            Vocal("virtual", ["gumi"]),
            Vocal("virtual", ["len", "kaito"]),
            Vocal("sekai", ["akito", "toya"]),
            Vocal("another", ["akito"]),
            Vocal("another", ["toya"])
        ],
        mDate(2016, 9, 10),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29610327"),
            mURL("原曲", "https://www.youtube.com/watch?v=a_rrj1Xh5LI"),
            mURL("2DMV", "https://www.youtube.com/watch?v=9kZ6MPqj9Tg")
        ]
    ),
    Music(16, "ブリキノダンス",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "rui", "len"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["rui"])
        ],
        mDate(2013, 3, 10),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm20296308"),
            mURL("3DMV", "https://www.youtube.com/watch?v=msnpPsYN2oM")
        ]
    ),
    Music(17, "スイートマジック",
        [
            Vocal("virtual", ["rin"]),
            Vocal("virtual", ["miku", "rin", "len", "meiko", "kaito"]),
            Vocal("sekai", ["rin", "emu", "nene", "tsukasa", "rui"]),
            Vocal("another", ["emu"]),
            Vocal("another", ["nene"])
        ],
        mDate(2011, 4, 2),
        mDate(2020, 9, 30),
        [
            mURL("オリジナル", "https://www.nicovideo.jp/watch/sm14044008"),
            mURL("オリジナル", "https://www.youtube.com/watch?v=Vz1C44EDkYA"),
            mURL("3DMV", "https://www.youtube.com/watch?v=gPimbh-jxCo")
        ]
    ),
    Music(18, "ぼうけんのしょがきえました！",
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["tsukasa", "emu", "rin", "len"])
        ],
        mDate(2014, 11, 14),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24909819"),
            mURL("原曲", "https://www.youtube.com/watch?v=vqiULULdvMA")
        ]
    ),
    Music(19, "シャルル",
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["ena", "mizuki"]),
            Vocal("another", ["mizuki"]),
            Vocal("another", ["ena"])
        ],
        mDate(2016, 10, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29854242"),
            mURL("原曲", "https://www.youtube.com/watch?v=TA5OFS_xX0c"),
            mURL("3DMV", "https://www.youtube.com/watch?v=diTjDNKgjLE")
        ]
    ),
    Music(20, "ハロ／ハワユ",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["mafuyu", "ena", "miku"])
        ],
        mDate(2010, 7, 20),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm11448603"),
            mURL("原曲", "https://www.youtube.com/watch?v=-M4sAQYi6r4")
        ]
    ),
    Music(21, "自傷無色",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "kanade", "mafuyu"])
        ],
        mDate(2013, 1, 20),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19870840"),
            mURL("3DMV", "https://www.youtube.com/watch?v=LEEyYKrEvvk")
        ]
    ),
    Music(22, "needLe",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"]),
            Vocal("another", ["saki"])
        ],
        mDate(2020, 8, 14),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=buoYwfZG4vQ"),
            mURL("3DMV", "https://www.youtube.com/watch?v=kXGtXnq1iF8")
        ]
    ),
    Music(23, "アイドル親衛隊",
        [
            Vocal("virtual", ["miku", "rin", "luka", "meiko"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "miku"])
        ],
        mDate(2020, 9, 9),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=4QL9tLfVFJg"),
            mURL("3DMV", "https://www.youtube.com/watch?v=3yQWZcYXcgg")
        ]
    ),
    Music(24, "Ready Steady",
        [
            Vocal("virtual", ["miku", "rin", "len"]),
            Vocal("sekai", ["kohane", "an", "akito", "toya", "miku"])
        ],
        mDate(2020, 9, 30),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37601066"),
            mURL("原曲", "https://www.youtube.com/watch?v=XAg1jDDG49Y"),
            mURL("3DMV", "https://www.youtube.com/watch?v=cj3y6DBjyvs")
        ]
    ),
    Music(25, "セカイはまだ始まってすらいない",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "miku"]),
            Vocal("another", ["tsukasa", "emu"]),
            Vocal("another", ["nene", "rui"])
        ],
        mDate(2020, 4, 17),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36685972"),
            mURL("原曲", "https://www.youtube.com/watch?v=1s8NNPgdl5g"),
            mURL("3DMV", "https://www.youtube.com/watch?v=cFExVIRuGso")
        ]
    ),
    Music(26, "悔やむと書いてミライ",
        [
            Vocal("sekai", ["kanade", "mafuyu", "ena", "mizuki", "miku"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"])
        ],
        mDate(2020, 4, 22),
        mDate(2020, 9, 30),
        [
            mURL("セルフカバー", "https://www.nicovideo.jp/watch/sm36723146"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=r2OS97F6P_U"),
            mURL("3DMV", "https://www.youtube.com/watch?v=an_gDTrVdHo")
        ],
    ),
    Music(27, "セカイ",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "tsukasa", "kanade", "miku"])
        ],
        mDate(2020, 7, 31),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=9vyIPWBeRes"),
            mURL("3DMV", "https://www.youtube.com/watch?v=jxP2_vihhpM")
        ]
    ),
    Music(28, "ワーワーワールド",
        [
            Vocal("virtual", ["miku", "rin"]),
            Vocal("sekai", ["minori", "kohane", "miku"])
        ],
        mDate(2020, 8, 5),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37301259"),
            mURL("原曲", "https://www.youtube.com/watch?v=okJ9Vk6owG8"),
            mURL("3DMV", "https://www.youtube.com/watch?v=GJbEn1srk3Y")
        ]
    ),
    Music(29, "アスノヨゾラ哨戒班",
        [
            Vocal("sekai", ["ichika"])
        ],
        mDate(2014, 8, 19),
        mDate(2020, 10, 1),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24276234"),
            mURL("原曲", "https://www.youtube.com/watch?v=XogSflwXgpw"),
        ]
    ),
    Music(30, "ニア",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "haruka", "miku"]),
            Vocal("another", ["haruka"])
        ],
        mDate(2017, 7, 2),
        mDate(2020, 10, 2),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31477166"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=7uacnNTk7I8"),
            mURL("3DMV", "https://www.youtube.com/watch?v=mzZOoZqDly4")
        ]
    ),
    Music(31, "Just Be Friends",
        [
            Vocal("virtual", ["luka"]),
            Vocal("sekai", ["kohane", "an", "luka"]),
            Vocal("another", ["kohane"]),
            Vocal("another", ["an"])
        ],
        mDate(2009, 7, 4),
        mDate(2020, 10, 3),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm7528841"),
            mURL("2DMV", "https://www.youtube.com/watch?v=esaV1kjzg_Q")
        ]
    ),
    Music(32, "脱法ロック",
        [
            Vocal("virtual", ["len"]),
            Vocal("sekai", ["tsukasa", "rui", "len"]),
            Vocal("another", ["kaito"])
        ],
        mDate(2016, 6, 19),
        mDate(2020, 10, 4),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29081909"),
            mURL("原曲", "https://www.youtube.com/watch?v=u5mHVUwDf_0")
        ]
    ),
    Music(33, "命に嫌われている。",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kanade", "miku"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["rin"]),
            Vocal("another", ["luka"])
        ],
        mDate(2017, 8, 6),
        mDate(2020, 10, 5),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31700140"),
            mURL("原曲", "https://www.youtube.com/watch?v=0HYm60Mjm0k"),
            mURL("2DMV", "https://www.youtube.com/watch?v=F7iqxHOth58"),
            mURL("2DMV(アナザー)", "https://www.youtube.com/watch?v=wNxrGUf6G0A")
        ]
    ),
    Music(34, "ワールドイズマイン",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2008, 5, 31),
        mDate(2020, 10, 6),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm3504435")
        ]
    ),
    Music(35, "ダンスロボットダンス",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["emu", "nene", "miku"]),
            Vocal("another", ["emu"])
        ],
        mDate(2016, 12, 6),
        mDate(2020, 10, 7),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm30177801"),
            mURL("原曲", "https://www.youtube.com/watch?v=g7dvpD_zlIM"),
            mURL("3DMV(一部)", "https://www.youtube.com/watch?v=1HPXT1_SRPw")
        ]
    ),
    Music(36, "Hand in Hand",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2015, 7, 8),
        mDate(2020, 10, 8),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/so26654381"),
            mURL("原曲", "https://www.youtube.com/watch?v=RKtoreimcQ8"),
            mURL("マジカルミライ2015", "https://www.youtube.com/watch?v=s7h9tkfc7Eg")
        ]
    ),
    Music(37, "夜咄ディセイヴ",
        [
            Vocal("virtual", ["ia"]),
            Vocal("sekai", ["akito", "toya", "len"]),
            Vocal("another", ["akito"]),
            Vocal("another", ["toya"])
        ],
        mDate(2013, 2, 17),
        mDate(2020, 10, 9),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm20116702"),
            mURL("原曲", "https://www.youtube.com/watch?v=aPDaFGqMX4I")
        ]
    ),
    Music(38, "Gimme×Gimme",
        [
            Vocal("virtual", ["miku", "rin"])
        ],
        mDate(2019, 10, 26),
        mDate(2020, 10, 10),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm35866152"),
            mURL("原曲", "https://www.youtube.com/watch?v=ERo-sPa1a5g")
        ]
    ),
    Music(39, "ビバハピ",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "miku"]),
            Vocal("another", ["minori", "airi"])
        ],
        mDate(2013, 7, 26),
        mDate(2020, 10, 11),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm21443197"),
            mURL("原曲", "https://www.youtube.com/watch?v=WiUjG9fF3zw"),
            mURL("2DMV", "https://www.youtube.com/watch?v=zAkqd6iw-lo")
        ]
    ),
    Music(40, "ジャンキーナイトタウンオーケストラ",
        [
            Vocal("virtual", ["len"])
        ],
        mDate(2019, 12, 20),
        mDate(2020, 10, 12),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36109943"),
            mURL("原曲", "https://www.youtube.com/watch?v=E1PGiyRjqkU")
        ]
    ),
    Music(41, "ミラクルペイント",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "miku"])
        ],
        mDate(2007, 11, 22),
        mDate(2020, 10, 13),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm1588476"),
            mURL("原曲", "https://www.youtube.com/watch?v=gqPWXe0dCC4"),
            mURL("2DMV", "https://www.youtube.com/watch?v=kU4Rth300FM")
        ]
    ),
    Music(42, "on the rocks",
        [
            Vocal("virtual", ["meiko", "kaito"])
        ],
        mDate(2014, 7, 8),
        mDate(2020, 10, 14),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23954284"),
            mURL("原曲", "https://www.youtube.com/watch?v=hk1L0ZV2bVc")
        ]
    ),
    Music(43, "携帯恋話",
        [
            Vocal("virtual", ["ena", "mizuki", "miku"])
        ],
        mDate(2020, 5, 22),
        mDate(2020, 10, 15),
        [
            mURL("セルフカバー", "https://www.nicovideo.jp/watch/sm36903498"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=bNagYg_YGbU"),
            mURL("2DMV", "https://www.youtube.com/watch?v=kNLyqES4fC8")
        ]
    ),
    Music(44, "39みゅーじっく！",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2016, 6, 29),
        mDate(2020, 10, 16),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29145868"),
            mURL("原曲", "https://www.youtube.com/watch?v=OuLZlZ18APQ")
        ]
    ),
    Music(45, "青く駆けろ！",
        [
            Vocal("sekai", ["miku", "ichika"])
        ],
        mDate(2020, 8, 13),
        mDate(2020, 10, 17),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37349785"),
            mURL("原曲", "https://www.youtube.com/watch?v=_qbKRIwkTCc"),
            mURL("WEBムービー", "https://www.youtube.com/watch?v=w3VTDaAYvmQ")
        ]
    ),
    Music(46, "ステラ",
        [
            Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"])
        ],
        mDate(2020, 11, 16),
        mDate(2020, 10, 18),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37828296"),
            mURL("セカイVer.", "https://www.youtube.com/watch?v=AL6hWKN0WQo")
        ]
    ),
    Music(47, "Leia - Remind",
        [
            Vocal("virtual", ["luka"]),
        ],
        mDate(2011, 1, 1),
        mDate(2020, 10, 19),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm13185918"),
            mURL("原曲(Remind)", "https://www.youtube.com/watch?v=e0ddGWxyhUQ")
        ]
    ),
    Music(48, "ジャックポットサッドガール",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kanade", "mafuyu", "ena", "mizuki", "miku"]),
            Vocal("another", ["mafuyu"])
        ],
        mDate(2020, 10, 24),
        mDate(2020, 10, 20),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37716686"),
            mURL("原曲", "https://www.youtube.com/watch?v=B2llCEKbxwA")
        ]
    ),
    Music(49, "メルティランドナイトメア",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2018, 2, 16),
        mDate(2020, 10, 25),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32748202"),
            mURL("原曲", "https://www.youtube.com/watch?v=ZEy36W1xX8c"),
            mURL("3DMV", "https://www.youtube.com/watch?v=ZKbnmy82DZE")
        ]
    ),
    Music(50, "乙女解剖",
        [
            Vocal("virtual", ["miku"]),
            Vocal("another", ["mafuyu"]),
            Vocal("sekai", ["mafuyu", "mizuki", "miku"])
        ],
        mDate(2019, 1, 18),
        mDate(2020, 11, 1),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm34470195"),
            mURL("原曲", "https://www.youtube.com/watch?v=7zwCIz-Ohn4")
        ]
    ),
    Music(51, "potatoになっていく",
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["rui", "miku", "tsukasa", "emu", "nene"])
        ],
        mDate(2020, 3, 30),
        mDate(2020, 11, 7),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36594334"),
            mURL("原曲", "https://www.youtube.com/watch?v=Dun11cIEo9s"),
            mURL("3DMV", "https://www.youtube.com/watch?v=h_h1uJcLsAE")
        ]
    ),
    Music(52, "ローリンガール",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2010, 2, 14),
        mDate(2020, 11, 14),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm9714351"),
            mURL("原曲", "https://www.youtube.com/watch?v=vnw8zURAxkU")
        ]
    ),
    Music(53, "モア！ジャンプ！モア！",
        [
            Vocal("sekai", ["airi", "miku", "minori", "haruka", "shizuku"])
        ],
        mDate(2020, 11, 19),
        mDate(2020, 11, 19),
        [
            mURL("2DMV", "https://www.youtube.com/watch?v=vjCfKbwD17c")
        ]
    ),
    Music(54, "裏表ラバーズ",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2009, 8, 30),
        mDate(2020, 11, 21),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm8082467"),
            mURL("原曲", "https://www.youtube.com/watch?v=b_cuMcDWwsI")
        ]
    ),
    Music(55, "アンノウン・マザーグース",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2017, 8, 22),
        mDate(2020, 11, 23),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31791630"),
            mURL("原曲", "https://www.youtube.com/watch?v=P_CSdxSGfaA")
        ]
    ),
    Music(56, "愛されなくても君がいる",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2020, 7, 22),
        mDate(2020, 11, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37223770"),
            mURL("原曲", "https://www.youtube.com/watch?v=ygY2qObZv24")
        ]
    ),
    Music(57, "ウミユリ海底譚",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "miku", "honami"])
        ],
        mDate(2014, 2, 24),
        mDate(2020, 12, 1),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm22960446"),
            mURL("原曲", "https://www.youtube.com/watch?v=7JANm3jOb2k"),
            mURL("3DMV(一部)", "https://www.youtube.com/watch?v=QmJrgaWzCW8")
        ]
    ),
    Music(58, "Forward",
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["rin", "meiko", "miku", "kaito", "len"]),
            Vocal("sekai", ["an", "kohane", "miku", "akito", "toya"]),
            Vocal("another", ["an", "kohane"])
        ],
        mDate(2020, 12, 11),
        mDate(2020, 12, 8),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37937383"),
            mURL("原曲", "https://www.youtube.com/watch?v=crCS77wqxTI"),
            mURL("3DMV", "https://www.youtube.com/watch?v=t7hnsVAsWCo")
        ]
    ),
    Music(59, "独りんぼエンヴィー",
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "luka", "rin"]),
            Vocal("sekai", ["miku", "kanade", "mizuki"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mizuki"])
        ],
        mDate(2012, 11, 29),
        mDate(2020, 12, 14),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19466301"),
            mURL("原曲", "https://www.youtube.com/watch?v=UKVioegPPds"),
            mURL("3DMV", "https://www.youtube.com/watch?v=luujC_Y4Wsw")
        ]
    ),
    Music(60, "ニジイロストーリーズ",
        [
            Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"]),
            Vocal("sekai", ["nene", "rui", "meiko", "kaito"]),
            Vocal("another", ["nene", "rui"]),
            Vocal("another", ["meiko", "kaito"])
        ],
        mDate(2020, 12, 20),
        mDate(2020, 12, 20),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37987111"),
            mURL("原曲", "https://www.youtube.com/watch?v=WztzykQSkgM"),
            mURL("2DMV", "https://www.youtube.com/watch?v=EIUO-fPrkSo")
        ]
    ),
    Music(61, "ODDS & ENDS",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2012, 8, 14),
        mDate(2020, 12, 24),
        [
            mURL("マジカルミライ2013", "https://www.youtube.com/watch?v=5kEoYWYnIIw")
        ]
    ),
    Music(62, "ドラマツルギー",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika"]),
            Vocal("another", ["ichika"])
        ],
        mDate(2017, 10, 10),
        mDate(2020, 12, 28),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32076378"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=jJzw1h5CR-I")
        ]
    ),
    Music(63, "グリーンライツ・セレナーデ",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2018, 7, 6),
        mDate(2020, 12, 29),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33480697"),
            mURL("原曲", "https://www.youtube.com/watch?v=XSLhsjepelI"),
            mURL("マジカルミライ2018", "https://www.nicovideo.jp/watch/so33838432"),
            mURL("マジカルミライ2018", "https://www.youtube.com/watch?v=U1oeOZVtA84")
        ]
    ),
    Music(64, "恋愛裁判",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["airi", "miku", "minori"]),
            Vocal("another", ["minori"]),
            Vocal("another", ["airi"])
        ],
        mDate(2014, 6, 10),
        mDate(2020, 12, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23750267"),
            mURL("原曲", "https://www.youtube.com/watch?v=TXzfQ0cP1P0")
        ]
    ),
    Music(65, "＊ハロー、プラネット。",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2009, 5, 24),
        mDate(2020, 12, 31),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm7138245"),
            mURL("10周年記念アレンジ", "https://www.nicovideo.jp/watch/sm35168447"),
            mURL("10周年記念アレンジ", "https://www.youtube.com/watch?v=9IwAL4fCJzg")
        ]
    ),
    Music(66, "千本桜",
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"])
        ],
        mDate(2011, 9, 17),
        mDate(2021, 1, 1),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm15630734")
        ]
    ),
    Music(67, "ECHO",
        [
            Vocal("virtual", ["gumi"]),
            Vocal("sekai", ["luka", "kohane", "an", "akito", "toya"]),
            Vocal("another", ["kohane", "toya"]),
            Vocal("another", ["an", "akito"])
        ],
        mDate(2014, 10, 8),
        mDate(2021, 1, 2),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24643818"),
            mURL("原曲", "https://www.youtube.com/watch?v=cQKGUgOfD8U")
        ]
    ),
    Music(68, "チュルリラ・チュルリラ・ダッダッダ！",
        [
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui"]),
            Vocal("another", ["tsukasa", "nene"])
        ],
        mDate(2016, 2, 22),
        mDate(2021, 1, 3),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm28276238"),
            mURL("原曲", "https://www.youtube.com/watch?v=_j0kfGNwIlw"),
            mURL("3DMV", "https://www.youtube.com/watch?v=QOU2jkl30Vs")
        ]
    ),
    Music(69, "ブレス・ユア・ブレス",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2019, 5, 31),
        mDate(2021, 1, 4),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm35199769"),
            mURL("原曲", "https://www.youtube.com/watch?v=a-Nf3QUFkOU"),
            mURL("マジカルミライ2019", "https://www.nicovideo.jp/watch/so35671517"),
            mURL("マジカルミライ2019", "https://www.youtube.com/watch?v=7EEUU-yIN5c")
        ]
    ),
    Music(70, "とても痛い痛がりたい",
        [
            Vocal("virtual", ["vy2v3"]),
            Vocal("sekai", ["miku", "mafuyu", "ena"])
        ],
        mDate(2012, 10, 3),
        mDate(2021, 1, 5),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19037197"),
            mURL("原曲", "https://www.youtube.com/watch?v=dBa8emykxEo")
        ]
    ),
    Music(71, "霽れを待つ",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["honami", "ichika", "miku", "saki", "shiho"]),
            Vocal("another", ["saki"]),
            Vocal("another", ["honami"])
        ],
        mDate(2021, 1, 10),
        mDate(2021, 1, 10),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38099931"),
            mURL("原曲", "https://www.youtube.com/watch?v=wvlUWjqGQSA"),
            mURL("2DMV", "https://www.youtube.com/watch?v=70ZLvDTonqI")
        ]
    ),
    Music(72, "ワールズエンド・ダンスホール",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2010, 5, 18),
        mDate(2021, 1, 14),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm10759623"),
            mURL("原曲", "https://www.youtube.com/watch?v=ZB75e7vzX0I")
        ]
    ),
    Music(73, "ヒビカセ",
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2014, 9, 24),
        mDate(2021, 1, 18),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24536934"),
            mURL("原曲", "https://www.youtube.com/watch?v=TkroHwQYpFE")
        ]
    ),
    Music(74, "Color of Drops",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["shizuku", "luka", "minori", "haruka", "airi"]),
            Vocal("another", ["haruka"]),
            Vocal("another", ["shizuku"])
        ],
        mDate(2021, 1, 29),
        mDate(2021, 1, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=i5rl-NGSYoo"),
            mURL("3DMV", "https://www.youtube.com/watch?v=vU-tfn7yyrQ")
        ]
    ),
    Music(75, "RAD DOGS",
        [
            Vocal("sekai", ["toya", "akito", "kohane", "an", "miku"])
        ],
        mDate(2021, 2, 7),
        mDate(2021, 1, 31),
        [
            mURL("2DMV", "https://www.youtube.com/watch?v=ZMbWDpC1N7s")
        ]
    ),
    Music(76, "ミルククラウン・オン・ソーネチカ",
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "shizuku", "miku"]),
            Vocal("another", ["minori"]),
            Vocal("another", ["shizuku"])
        ],
        mDate(2014, 4, 25),
        mDate(2021, 2, 6),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23404002"),
            mURL("原曲", "https://www.youtube.com/watch?v=zRar5r3TieE")
        ]
    ),
    Music(77, "タイムマシン",
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "luka", "meiko"]),
            Vocal("sekai", ["miku", "ichika", "saki"]),
            Vocal("another", ["saki"])
        ],
        mDate(2011, 12, 2),
        mDate(2021, 2, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=EgOWe9ByNaE"),
            mURL("3DMV", "https://www.youtube.com/watch?v=NHR3b9v_S0I")
        ]
    )
];