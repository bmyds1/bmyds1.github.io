const responces = [
    //ichika
    Responce("ichika", "saki", "咲希、ここからだよ！", "もっちろん！ あげてこー！"),
    Responce("saki", "ichika", "みんな楽しそう！ 青春っぽい！", "もう、咲希ってば、はしゃぎすぎ！"),
    Responce("ichika", "honami", "私ももっと盛り上げないと！", "一歌ちゃんならできるよ！"),
    Responce("honami", "ichika", "もっといい音が叩けそう！", "私も… 今なら何でも弾けそう！"),
    Responce("ichika", "shiho", "みんなノってるね！", "そういう一歌こそ！"),
    Responce("shiho", "ichika", "空気が、一つになっている！", "すごい… これがライブなんだね！"),
    Responce("ichika", "miku_leo", "すごい…！ いい感じ！", "みんなの実力だよ！"),
    Responce("miku_leo", "ichika", "一歌、しっかりついてきて！", "うん、任せて！"),
    Responce("ichika", "luka", "私たちの演奏、届いてるかな…？", "ええ、きっと！"),
    Responce("luka", "ichika", "とっても素敵な演奏ね！", "みんなの応援があるからかな…"),
    Responce("ichika", "meiko", "ここは走りすぎないように…", "ええ、その調子よ！"),
    Responce("meiko", "ichika", "みんなの歌、もっと聞かせて！", "うん、私も聞いてほしい！"),
    //saki
    Responce("saki", "honami", "私の想い、この音に乗せて！", "うん！ みんなに届くように！"),
    Responce("honami", "saki", "私がみんなを引っ張る！", "お！ ほなちゃんカッコいい！"),
    Responce("saki", "shiho", "笑顔だよ、志歩ちゃん！", "演奏には関係ない…"),
    Responce("shiho", "saki", "いい音、出てるね！", "えへへ、この調子でどんどんいくよ！"),
    Responce("saki", "haruka", "遥ちゃん、さっすが！", "どういたしまして！"),
    Responce("saki", "haruka", "ライブってすごいね！", "そうね… みんなの想いが、一つになる場所だから！"),
    Responce("haruka", "saki", "天馬さん、いくよ！", "うん、どんどん盛り上げよう！"),
    Responce("saki", "miku_leo", "もっと盛り上げていこう！", "ふふっ、咲希が一番楽しそう！"),
    Responce("miku_leo", "saki", "咲希、楽しんでる？", "うん、すっごく楽しい！"),
    Responce("saki", "luka", "もっと楽しんじゃおう！", "ええ、その意気よ！"),
    Responce("luka", "saki", "さあ、その調子よ！", "はい、任せてください！"),
    Responce("saki", "meiko", "ガンガンいっちゃおう！", "迷いのない良い音ね！"),
    Responce("meiko", "saki", "まだまだこれからね！", "はい、集中集中！"),
    //honami
    Responce("honami", "shiho", "この調子で盛り上げていこう！", "OK！ いくよ、穂波！"),
    Responce("shiho", "honami", "いい音、出てるじゃん！", "ほんと！？ ありがとう！"),
    Responce("honami", "miku_leo", "この勢いでいきます！", "穂波、カッコいいよ！"),
    Responce("miku_leo", "honami", "さすが、リズムばっちり！", "ありがとう、ミクちゃん！"),
    Responce("honami", "luka", "いい調子ですね！", "あら、まだまだここからよ？"),
    Responce("luka", "honami", "ここが見せ場ね！", "練習の成果、見せます！"),
    Responce("honami", "meiko", "焦らず行きましょう！", "ええ、みんなの音を聞かなくちゃね！"),
    Responce("meiko", "honami", "さっ、あともう少し！", "最後まで油断は禁物ですね！"),
    //shiho
    Responce("shiho", "miku_leo", "音が1つになっている…！", "うん、ライブの空気って最高！"),
    Responce("miku_leo", "shiho", "まだまだいけるでしょ？", "もちろん、アゲていくよ！"),
    Responce("shiho", "luka", "カッコ悪いところ見せられない…！", "ふふ、十分カッコいいわよ？"),
    Responce("luka", "shiho", "安定した演奏ね！", "これくらいできないとね。"),
    Responce("shiho", "meiko", "最高の演奏にしてみせる！", "ええ、その意気よ！"),
    Responce("meiko", "shiho", "この一体感、最高ね！", "うん、私も好き…！"),
    //miku_leo
    Responce("miku_leo", "luka", "みんな、いい調子だね！", "ふふ、最後までこの調子でいきたいわね"),
    Responce("luka", "miku_leo", "みんな、すごくいい感じね！", "いいね、もっと盛り上げていこう！"),
    //minori
    Responce("minori", "haruka", "L・O・V・E、遥！", "み、みのりの応援がすごい…"),
    Responce("haruka", "minori", "私たちの想いを、みんなに！", "大丈夫、きっと伝わるよ！"),
    Responce("minori", "airi", "愛莉ちゃん、絶好調だね！", "当たり前よ、ステージの上だもの！"),
    Responce("airi", "minori", "へばってないでしょうね！", "うん！ まだまだ大丈夫！"),
    Responce("minori", "shizuku", "雫ちゃんみたいに、キラキラ踊れてるかな？", "とっても可愛いわよ、みのりちゃん！"),
    Responce("shizuku", "minori", "大丈夫、みんなとならできる！", "そうだよ！ 私たち、一人じゃない！"),
    Responce("minori", "miku_more", "練習通りにやれば大丈夫！", "うん！ みのりちゃんなら出来るよ！"),
    Responce("miku_more", "minori", "ふふ、いいステージになりそうだね！", "うん！ よーし、ラストスパート！"),
    Responce("minori", "rin", "ライブ楽しいね、リンちゃん！", "うん！ まだまだ歌っていたいな！"),
    Responce("rin", "minori", "ここからだね！", "うん！ もっともっと頑張る！"),
    Responce("minori", "luka", "今のステップ、どうかな？", "楽しそうですごくよかったわ！"),
    Responce("luka", "minori", "リラックスしていきましょう！", "はい！ 深呼吸、深呼吸…！"),
    //haruka
    Responce("haruka", "airi", "最後まで油断せずにね！", "その言葉、そっくりそのまま返してあげる！"),
    Responce("airi", "haruka", "遥、ついてきてる？", "当然よ。愛莉こそ遅れないでね？"),
    Responce("haruka", "shizuku", "私たちの想いをどこまでも！", "ええ、届けましょう、みんなに！"),
    Responce("shizuku", "haruka", "遥ちゃん、合わせるわ！", "流石ね、タイミング完璧！"),
    Responce("haruka", "miku_more", "流石だねミク！", "ふふ、遥ちゃんもいい調子！"),
    Responce("miku_more", "haruka", "ペンライト綺麗だね！", "うん、みんなの想いに答えなくちゃ！"),
    Responce("haruka", "rin", "リン、まだまだいけそう？", "もっちろん！ 見ててね！"),
    Responce("rin", "haruka", "みんなに希望をお届け！", "私も負けてられないな…！"),
    Responce("haruka", "luka", "みんなの想い、繋げなきゃ！", "ええ、ファンのみんなのためにもね！"),
    Responce("luka", "haruka", "想いを込めて歌いましょう！", "うん、みんなに希望を届けるために！"),
    //airi
    Responce("airi", "shizuku", "このステージ、最高ね！", "ふふ、私も同じこと考えてた！"),
    Responce("shizuku", "airi", "みんなの気持ちが一つになってる気がする！", "気がするじゃなくて、そうなのよ！ さ、まだまだ行くわよ！"),
    Responce("airi", "miku_more", "ライブはこうじゃなくちゃ！", "うん！ すごく楽しいね！"),
    Responce("miku_more", "airi", "愛莉ちゃん、いくよ！", "ええ、ここからが見せ場よね！"),
    Responce("airi", "rin", "特訓の成果を見せるわよ！", "いけいけ愛莉ちゃん！"),
    Responce("rin", "airi", "みんなノってるー！", "リンってば絶好調ね！"),
    Responce("airi", "luka", "最高の私たちを見せるわよ！", "さあ、行きましょう！"),
    Responce("luka", "airi", "たくさんの応援が聞こえるわ！", "ええ、しっかり応えなくちゃね！"),
    //shizuku
    Responce("shizuku", "miku_more", "私たちの歌をみんなに！", "うん！ 絶対届けようね！"),
    Responce("miku_more", "shizuku", "雫ちゃん、いい感じだね！", "練習の成果が出せてよかったわ！"),
    Responce("shizuku", "rin", "ステップ、完璧だったわ！", "やったー！ この調子で頑張るね！"),
    Responce("rin", "shizuku", "最高の歌を届けようね！", "今日のために練習したんだものね！"),
    Responce("shizuku", "luka", "まだまだ盛り上げたいわ！", "ええ、一緒に頑張りましょう！"),
    Responce("luka", "shizuku", "みんなの歌が響き渡ってるわね！", "ファンのみんなにも届いてるかしら？"),
    //miku_more
    Responce("miku_more", "rin", "盛り上がってきてるね！", "うん！ でも、まだまだこれからだよ！"),
    //kohane
    Responce("kohane", "an", "このドキドキ、杏ちゃんも感じてる？", "もちろん！ でももっとドキドキさせてあげる！"),
    Responce("an", "kohane", "まだまだ楽しんじゃおう！", "私ももっと歌いたい！"),
    Responce("kohane", "akito", "私だって、もっとできることが…！", "やりたいようにやれ、フォローくらいしてやる"),
    Responce("akito", "kohane", "まだ余力ありそうだな！", "全部出し切らなきゃだね！"),
    Responce("kohane", "toya", "すごいね、緊張してないなんて…！", "必要な練習はしてきたからな"),
    Responce("toya", "kohane", "まだいけるんじゃないか？", "うん！ 頑張ってみる！"),
    Responce("miku_vivid", "kohane", "いいよ！ その感じでラストスパート！", "うん！ 私にだってきっとできる！"),
    //an
    Responce("an", "akito", "お手並み拝見！", "はっ、じゃあ見てな！"),
    Responce("akito", "an", "見てろ、ここからだ！", "いいね、絶好調じゃん！"),
    Responce("an", "toya", "冬弥ももっと楽しんだら？", "十分そうしてるつもりだが…"),
    Responce("toya", "an", "今のところは順調か", "流石、安定感あるよね！"),
    //akito
    Responce("akito", "toya", "満足するのは早いぞ！", "ああ、分かってる！"),
    Responce("toya", "akito", "俺たちの出番だな", "ったく、待ちくたびれた！"),
    Responce("akito", "tsukasa", "意外とやるじゃねえか！", "意外とはなんだ意外とは！"),
    Responce("tsukasa", "akito", "その調子でついてこい！", "はぁ、手ぇ抜くわけにいかねえしな！"),
    Responce("akito", "mizuki", "おい、ついてきてるか？", "今のところね！"),
    Responce("mizuki", "akito", "弟クン、さあ行くよ！", "だからそれやめろっての…！"),
    //toya
    Responce("toya", "tsukasa", "盛り上がってきましたね", "しかし、オレたちはその上をいくのだ！"),
    Responce("tsukasa", "toya", "冬弥、やっといい笑顔になったな！", "えっ？ 俺、笑ってますか？"),
    Responce("toya", "mizuki", "一緒に歌えるとはな…", "ボクもワクワクしてるよ！"),
    Responce("mizuki", "toya", "冬弥クン、調子いいね！", "暁山こそ、いい感じだ！"),
    //miku_vivid
    Responce("miku_vivid", "len", "いいね！ ちょっとアドリブ入れたくなる！", "って言いながらもう入れてるし！"),
    Responce("miku_vivid", "meiko", "かなりいい調子だね！", "ふふ、ミクもすっかりノリノリだもんね！"),
    Responce("meiko", "miku_vivid", "順調順調！", "私もまだまだ行けるよ！"),
    //tsukasa
    Responce("tsukasa", "rui", "かなり調子いいぞ！", "本当に君は本番に強いねえ！"),
    Responce("rui", "tsukasa", "素晴らしいショーになる予感がするよ！", "ああ、俺もそう思っていた！"),
    Responce("tsukasa", "nene", "ふっ、俺を呼ぶ歓声が聞こえる！", "耳、大丈夫？"),
    Responce("nene", "tsukasa", "しっかり合わせてよ？", "誰に言っている！ 任せろ！"),
    //emu
    //rui
    Responce("rui", "nene", "ここからが僕たちの真骨頂だ！", "うん、行くよ、ネネロボ！"),
    Responce("nene", "rui", "楽しそうだね", "ふふっ、これだけ盛り上がっていて楽しくないはずがないよ"),
    Responce("rui", "mizuki", "おや、ずいぶん協力的だね？", "昔馴染みのためだからかな？"),
    Responce("rui", "mizuki", "さて、行こうか瑞希", "オッケー！ イッツ・ショータイム！"),
    Responce("mizuki", "rui", "そろそろボクの出番かな？", "僕のことも忘れてもらっては困るよ？"),
    Responce("mizuki", "rui", "類もカワイイポーズしてみる？", "いやいや、君の株を奪うような真似は出来ないよ"),
    //nene
    //miku_wonder
    //kanade
    Responce("kanade", "mafuyu", "すごく気持ちのこもった音…", "奏にはそう聞こえるんだね？"),
    Responce("mafuyu", "kanade", "みんな楽しそう…", "まふゆは違うの？"),
    Responce("kanade", "ena", "うん、いい音…", "ずっと聞いていたいよね…！"),
    Responce("ena", "kanade", "奏、楽しんでいこ？", "私は作業に戻りたい…"),
    Responce("kanade", "mizuki", "ちょ、ちょっと休憩…", "ダメダメ、まだこれからだよ？"),
    Responce("mizuki", "kanade", "ボクもフルスロットルで頑張っちゃおうかな？", "私は見てるから、頑張って"),
    //mafuyu
    Responce("mafuyu", "ena", "これでいいでしょ？", "その言い方どうにかなんない？"),
    Responce("ena", "mafuyu", "ふふっ、このままラストまで！", "油断してると足をすくわれるよ…"),
    Responce("mafuyu", "mizuki", "瑞希、前に出ないの？", "さりげないカワイさも必要でしょ？"),
    Responce("mizuki", "mafuyu", "部屋で撮るだけじゃこの空気は味わえないね！", "そうだね。悪く、ないかも…"),
    //ena
    Responce("ena", "mizuki", "私、注目されちゃってる！？", "はいはい、よかったねー"),
    Responce("mizuki", "ena", "えななんの本気が見てみたーい！", "ちょっと、逆に調子狂うでしょ？"),
    //mizuki
    //miku
    //rin
    Responce("rin", "luka", "綺麗な音があふれてるよ！", "ええ、この流れ、大事にしたいわ！"),
    Responce("luka", "rin", "その調子よ、リン！", "ありがとうルカ！ でもまだまだいけるよ！"),
    //len
    Responce("len", "meiko", "へへっ、順調順調！", "まったく… 油断大敵よ？"),
    Responce("meiko", "len", "いい調子できてるわね！", "でしょでしょ？"),
    //luka
    Responce("luka", "meiko", "そろそろ私たちの見せ場かしら？", "カッコいいところ見せちゃいましょ！"),
    Responce("meiko", "luka", "私たちでもっとみんなを引っ張っていくわよ！", "ええ、行きましょう、MEIKO！")
    //meiko
    //kaito
];
