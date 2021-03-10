const interactions = [
    //miku
    Interaction("miku", "rin", "この歌をみんなに！", "きっと届くはずだよ！"),
    Interaction("rin", "miku", "この調子でゴーゴー！", "うん！ いいステージになりそうだね！"),
    Interaction("miku", "len", "もっとみんなと歌っていたいな！", "オレもだよ！ このまま、ずっと、ずーっと！"),
    Interaction("len", "miku", "この調子でノっていこう！", "ふふ、オッケー！"),
    Interaction("miku", "luka", "いいテンポできてるね！", "ええ、でも気を抜いてはダメよ？"),
    Interaction("luka", "miku", "ミク、私たちも頑張りましょ！", "うん！ この歌が、みんなに届くように！"),
    Interaction("miku", "meiko", "みんなの想いが、伝わってくる！", "ええ、きっと最高のステージになるわ！"),
    Interaction("meiko", "miku", "ミク、いい感じみたいね！", "うん！ この調子で、しっかり歌を届けるよ！"),
    Interaction("miku", "kaito", "ここからだね、KAITO！", "僕たちのいいところ、見せないとね！"),
    Interaction("kaito", "miku", "みんないい顔してるね！", "きっと、素敵なステージになるよ！"),
    //rin
    Interaction("rin", "len", "みんなノリノリだね！", "あっはは、そういう自分だって！"),
    Interaction("len", "rin", "オレたちで最高のステージにしよう！", "もちろん！ いくよ、レン！"),
    Interaction("rin", "luka", "綺麗な音があふれてるよ！", "ええ、この流れ、大事にしたいわ！"),
    Interaction("luka", "rin", "その調子よ、リン！", "ありがとうルカ！ でもまだまだいけるよ！"),
    Interaction("rin", "meiko", "ここまでは順調かな？", "うん、すごくよく歌えてるわ！"),
    Interaction("meiko", "rin", "リン？ ちゃんとついてきてる？", "もちろん！ 私も盛り上げるよ！"),
    Interaction("rin", "kaito", "これが私たちの実力だよ！", "あはは、頼もしいね！"),
    Interaction("kaito", "rin", "リズムもテンポも最高だね！", "うん！ 私もノってきたよ！"),
    //len
    Interaction("len", "luka", "最後までこの調子でいこう！", "ええ、私も協力するわ！"),
    Interaction("luka", "len", "頑張ってるわね、レン！", "へへっ、もっと褒めてくれてもいいよ？"),
    Interaction("len", "meiko", "へへっ、順調順調！", "まったく… 油断大敵よ？"),
    Interaction("meiko", "len", "いい調子できてるわね！", "でしょでしょ？"),
    Interaction("len", "kaito", "KAITOもちゃーんとついてきてよ？", "大丈夫！ 任せてほしいな！"),
    Interaction("kaito", "len", "ここからが、大事なところだね！", "オレたちなら大丈夫だって！"),
    //luka
    Interaction("luka", "meiko", "そろそろ私たちの見せ場かしら？", "カッコいいところ見せちゃいましょ！"),
    Interaction("meiko", "luka", "私たちでもっとみんなを引っ張っていくわよ！", "ええ、行きましょう、MEIKO！"),
    Interaction("luka", "kaito", "ここまで順調ね、流石だわ", "僕だけじゃなくて、みんなのおかげだよ！"),
    Interaction("kaito", "luka", "そろそろ僕たちも活躍しないとね！", "ええ、そうしましょう！"),
    //meiko
    Interaction("meiko", "kaito", "こんなもんじゃないでしょ、KAITO？", "もちろん！ まだまだいけるさ！"),
    Interaction("kaito", "meiko", "すごい！ ここまでいい感じだね！", "そうね、このままラストスパートよ！"),
    //kaito
    //ichika
    Interaction("ichika", "saki", "咲希、ここからだよ！", "もっちろん！ あげてこー！"),
    Interaction("saki", "ichika", "みんな楽しそう！ 青春っぽい！", "もう、咲希ってば、はしゃぎすぎ！"),
    Interaction("ichika", "honami", "私ももっと盛り上げないと！", "一歌ちゃんならできるよ！"),
    Interaction("honami", "ichika", "もっといい音が叩けそう！", "私も… 今なら何でも弾けそう！"),
    Interaction("ichika", "shiho", "みんなノってるね！", "そういう一歌こそ！"),
    Interaction("shiho", "ichika", "空気が、一つになっている！", "すごい… これがライブなんだね！"),
    Interaction("ichika", "miku_leo", "すごい…！ いい感じ！", "みんなの実力だよ！"),
    Interaction("miku_leo", "ichika", "一歌、しっかりついてきて！", "うん、任せて！"),
    Interaction("ichika", "emu", "みんな喜んでくれてる…！", "うん！ 笑顔でいっぱいだね！"),
    Interaction("emu", "ichika", "れっつわんだほーい！", "わ、わんだほーい…！"),
    Interaction("ichika", "nene", "うまく歌えてるかな？", "うん、わたしは好きだな…"),
    Interaction("nene", "ichika", "ほ、星乃さん、一緒に…", "うん…！ 一緒に歌おう！"),
    Interaction("ichika", "luka", "私たちの演奏、届いてるかな…？", "ええ、きっと！"),
    Interaction("luka", "ichika", "とっても素敵な演奏ね！", "みんなの応援があるからかな…"),
    Interaction("ichika", "meiko", "ここは走りすぎないように…", "ええ、その調子よ！"),
    Interaction("meiko", "ichika", "みんなの歌、もっと聞かせて！", "うん、私も聞いてほしい！"),
    //saki
    Interaction("saki", "honami", "アタシの想い、この音に乗せて！", "うん！ みんなに届くように！"),
    Interaction("honami", "saki", "わたしがみんなを引っ張る！", "お！ ほなちゃんカッコいい！"),
    Interaction("saki", "shiho", "笑顔だよ、しほちゃん！", "演奏には関係ない…"),
    Interaction("shiho", "saki", "いい音、出てるね！", "えへへ、この調子でどんどんいくよ！"),
    Interaction("saki", "haruka", "はるかちゃん、さっすが！", "どういたしまして！"),
    Interaction("saki", "haruka", "ライブってすごいね！", "そうね… みんなの想いが、一つになる場所だから！"),
    Interaction("haruka", "saki", "天馬さん、いくよ！", "うん、どんどん盛り上げよう！"),
    Interaction("saki", "miku_leo", "もっと盛り上げていこう！", "ふふっ、咲希が一番楽しそう！"),
    Interaction("miku_leo", "saki", "咲希、楽しんでる？", "うん、すっごく楽しい！"),
    Interaction("saki", "tsukasa", "この勢いで頑張るね！", "ふっ！ 流石は我が妹！"),
    Interaction("tsukasa", "saki", "まだまだ盛り上げるぞ！", "いけいけー！ お兄ちゃーん！"),
    Interaction("saki", "emu", "みんなわんだほいしてる？", "もちろんだっほーい！"),
    Interaction("emu", "saki", "咲希ちゃん、あれいっちゃおう！", "わんわん～、わんだほーい！"),
    Interaction("saki", "nene", "いけいけねねちゃん！", "えむとノリが同じなんだけど…"),
    Interaction("nene", "saki", "あの、よろしく…", "こっちこそよろしく、ねねちゃん！"),
    Interaction("saki", "luka", "もっと楽しんじゃおう！", "ええ、その意気よ！"),
    Interaction("luka", "saki", "さあ、その調子よ！", "はい、任せてください！"),
    Interaction("saki", "meiko", "ガンガンいっちゃおう！", "迷いのない良い音ね！"),
    Interaction("meiko", "saki", "まだまだこれからね！", "はい、集中集中！"),
    //honami
    Interaction("honami", "shiho", "この調子で盛り上げていこう！", "OK！ いくよ、穂波！"),
    Interaction("shiho", "honami", "いい音、出てるじゃん！", "ほんと！？ ありがとう！"),
    Interaction("honami", "miku_leo", "この勢いでいきます！", "穂波、カッコいいよ！"),
    Interaction("miku_leo", "honami", "さすが、リズムばっちり！", "ありがとう、ミクちゃん！"),
    Interaction("honami", "shizuku", "音が胸に響いてきます！", "あなたの音も、しっかりと響いているわ！"),
    Interaction("shizuku", "honami", "このまま油断せずに最後まで！", "はい！ 一音一音、大切に！"),
    Interaction("honami", "emu", "えむちゃん楽しそうだね！", "えへへ、穂波ちゃんも！"),
    Interaction("emu", "honami", "穂波ちゃん、わんだほーい！", "わ…わんだほーい！"),
    Interaction("honami", "nene", "素敵な歌声ですね！", "え、あ、ありがとう…"),
    Interaction("nene", "honami", "望月さんのドラム、歌いやすい…", "この調子でサポートしますね！"),
    Interaction("honami", "kanade", "わたしのドラム、どうですか？", "すごく正確で歌いやすい…"),
    Interaction("kanade", "honami", "いいテンポで来てるね", "はい！ このまま駆け抜けましょう！"),
    Interaction("honami", "luka", "いい調子ですね！", "あら、まだまだここからよ？"),
    Interaction("luka", "honami", "ここが見せ場ね！", "練習の成果、見せます！"),
    Interaction("honami", "meiko", "焦らず行きましょう！", "ええ、みんなの音を聞かなくちゃね！"),
    Interaction("meiko", "honami", "さっ、あともう少し！", "最後まで油断は禁物ですね！"),
    //shiho
    Interaction("shiho", "miku_leo", "音が1つになっている…！", "うん、ライブの空気って最高！"),
    Interaction("miku_leo", "shiho", "まだまだいけるでしょ？", "もちろん、アゲていくよ！"),
    Interaction("shiho", "shizuku", "その調子。が、頑張って…", "しぃちゃん…！"),
    Interaction("shizuku", "shiho", "しぃちゃんと一緒で嬉しいわ！", "分かったから、よそ見しない"),
    Interaction("shiho", "emu", "いい調子じゃん！", "志歩ちゃんもキラキラ笑顔だね！"),
    Interaction("emu", "shiho", "志歩ちゃんわんだほいやって！", "わ、わん…無理！"),
    Interaction("shiho", "nene", "歌、しっかり響いてるね！", "これだけは負けたくないから…"),
    Interaction("nene", "shiho", "日野森さん、いい音出てるね", "生半可な練習、してないからね"),
    Interaction("shiho", "luka", "カッコ悪いところ見せられない…！", "ふふ、十分カッコいいわよ？"),
    Interaction("luka", "shiho", "安定した演奏ね！", "これくらいできないとね。"),
    Interaction("shiho", "meiko", "最高の演奏にしてみせる！", "ええ、その意気よ！"),
    Interaction("meiko", "shiho", "この一体感、最高ね！", "うん、私も好き…！"),
    //miku_leo
    Interaction("miku_leo", "luka", "みんな、いい調子だね！", "ふふ、最後までこの調子でいきたいわね"),
    Interaction("luka", "miku_leo", "みんな、すごくいい感じね！", "いいね、もっと盛り上げていこう！"),
    //minori
    Interaction("minori", "haruka", "L・O・V・E、遥！", "み、みのりの応援がすごい…"),
    Interaction("haruka", "minori", "私たちの想いを、みんなに！", "大丈夫、きっと伝わるよ！"),
    Interaction("minori", "airi", "愛莉ちゃん、絶好調だね！", "当たり前よ、ステージの上だもの！"),
    Interaction("airi", "minori", "へばってないでしょうね！", "うん！ まだまだ大丈夫！"),
    Interaction("minori", "shizuku", "雫ちゃんみたいに、キラキラ踊れてるかな？", "とっても可愛いわよ、みのりちゃん！"),
    Interaction("shizuku", "minori", "大丈夫、みんなとならできる！", "そうだよ！ わたしたち、一人じゃない！"),
    Interaction("minori", "kohane", "楽しさが伝わってくるね！", "うん！ 体全部で浴びてるみたいだね！"),
    Interaction("kohane", "minori", "ひとつひとつ音を重ねて…！", "丁寧に、でも楽しく笑顔で！"),
    Interaction("minori", "miku_more", "練習通りにやれば大丈夫！", "うん！ みのりちゃんなら出来るよ！"),
    Interaction("miku_more", "minori", "ふふ、いいステージになりそうだね！", "うん！ よーし、ラストスパート！"),
    Interaction("minori", "rin", "ライブ楽しいね、リンちゃん！", "うん！ まだまだ歌っていたいな！"),
    Interaction("rin", "minori", "ここからだね！", "うん！ もっともっと頑張る！"),
    Interaction("minori", "luka", "今のステップ、どうかな？", "楽しそうですごくよかったわ！"),
    Interaction("luka", "minori", "リラックスしていきましょう！", "はい！ 深呼吸、深呼吸…！"),
    //haruka
    Interaction("haruka", "airi", "最後まで油断せずにね！", "その言葉、そっくりそのまま返してあげる！"),
    Interaction("airi", "haruka", "遥、ついてきてる？", "当然よ。愛莉こそ遅れないでね？"),
    Interaction("haruka", "shizuku", "私たちの想いをどこまでも！", "ええ、届けましょう、みんなに！"),
    Interaction("shizuku", "haruka", "遥ちゃん、合わせるわ！", "流石ね、タイミング完璧！"),
    Interaction("haruka", "an", "杏、気を抜いちゃダメよ？", "ちょっとちょっと、誰に言ってんの？"),
    Interaction("an", "haruka", "遥、ちゃんとついてきてる？", "もちろん、場数では私も負けてないんだから！"),
    Interaction("haruka", "emu", "響け、私たちの想い！", "遥ちゃんカッコいい！"),
    Interaction("emu", "haruka", "みんな笑顔にしちゃお！", "うん、協力するね！"),
    Interaction("haruka", "miku_more", "流石だねミク！", "ふふ、遥ちゃんもいい調子！"),
    Interaction("miku_more", "haruka", "ペンライト綺麗だね！", "うん、みんなの想いに答えなくちゃ！"),
    Interaction("haruka", "rin", "リン、まだまだいけそう？", "もっちろん！ 見ててね！"),
    Interaction("rin", "haruka", "みんなに希望をお届け！", "私も負けてられないな…！"),
    Interaction("haruka", "luka", "みんなの想い、繋げなきゃ！", "ええ、ファンのみんなのためにもね！"),
    Interaction("luka", "haruka", "想いを込めて歌いましょう！", "うん、みんなに希望を届けるために！"),
    //airi
    Interaction("airi", "shizuku", "このステージ、最高ね！", "ふふ、私も同じこと考えてた！"),
    Interaction("shizuku", "airi", "みんなの気持ちが一つになってる気がする！", "気がするじゃなくて、そうなのよ！ さ、まだまだ行くわよ！"),
    Interaction("airi", "ena", "ステージって最高でしょ？", "うん… アイドルの気持ちが、少し分かったかも！"),
    Interaction("ena", "airi", "ここまで順調！", "ええ、最高のパフォーマンスだわ！"),
    Interaction("airi", "miku_more", "ライブはこうじゃなくちゃ！", "うん！ すごく楽しいね！"),
    Interaction("miku_more", "airi", "愛莉ちゃん、いくよ！", "ええ、ここからが見せ場よね！"),
    Interaction("airi", "rin", "特訓の成果を見せるわよ！", "いけいけ愛莉ちゃん！"),
    Interaction("rin", "airi", "みんなノってるー！", "リンってば絶好調ね！"),
    Interaction("airi", "luka", "最高のわたしたちを見せるわよ！", "さあ、行きましょう！"),
    Interaction("luka", "airi", "たくさんの応援が聞こえるわ！", "ええ、しっかり応えなくちゃね！"),
    //shizuku
    Interaction("shizuku", "miku_more", "私たちの歌をみんなに！", "うん！ 絶対届けようね！"),
    Interaction("miku_more", "shizuku", "雫ちゃん、いい感じだね！", "練習の成果が出せてよかったわ！"),
    Interaction("shizuku", "rin", "ステップ、完璧だったわ！", "やったー！ この調子で頑張るね！"),
    Interaction("rin", "shizuku", "最高の歌を届けようね！", "今日のために練習したんだものね！"),
    Interaction("shizuku", "luka", "まだまだ盛り上げたいわ！", "ええ、一緒に頑張りましょう！"),
    Interaction("luka", "shizuku", "みんなの歌が響き渡ってるわね！", "ファンのみんなにも届いてるかしら？"),
    //miku_more
    Interaction("miku_more", "rin", "盛り上がってきてるね！", "うん！ でも、まだまだこれからだよ！"),
    //kohane
    Interaction("kohane", "an", "このドキドキ、杏ちゃんも感じてる？", "もちろん！ でももっとドキドキさせてあげる！"),
    Interaction("an", "kohane", "まだまだ楽しんじゃおう！", "私ももっと歌いたい！"),
    Interaction("kohane", "akito", "私だって、もっとできることが…！", "やりたいようにやれ、フォローくらいしてやる"),
    Interaction("akito", "kohane", "まだ余力ありそうだな！", "全部出し切らなきゃだね！"),
    Interaction("kohane", "toya", "すごいね、緊張してないなんて…！", "必要な練習はしてきたからな"),
    Interaction("toya", "kohane", "まだいけるんじゃないか？", "うん！ 頑張ってみる！"),
    Interaction("kohane", "miku_vivid", "全力でいくね！", "いいね、受けて立つよ！"),
    Interaction("miku_vivid", "kohane", "いいよ！ その感じでラストスパート！", "うん！ 私にだってきっとできる！"),
    Interaction("kohane", "rin", "みんなの隣で、私も！", "その気持ちがあれば大丈夫！"),
    Interaction("rin", "kohane", "一緒に歌うって楽しいね！", "うん、私もすごく楽しい！"),
    Interaction("kohane", "len", "楽しんでもらえてるかな？", "大丈夫、自分たちを信じて！"),
    Interaction("len", "kohane", "この感じ、ワクワクする！", "うん！ 私も！"),
    Interaction("kohane", "meiko", "MEIKOさん、一緒に！", "ええ、思いっきり歌いましょう！"),
    Interaction("meiko", "kohane", "私も行こうかしら！", "MEIKOさんの歌、楽しみです！"),
    //an
    Interaction("an", "akito", "お手並み拝見！", "はっ、じゃあ見てな！"),
    Interaction("akito", "an", "見てろ、ここからだ！", "いいね、絶好調じゃん！"),
    Interaction("an", "toya", "冬弥ももっと楽しんだら？", "十分そうしてるつもりだが…"),
    Interaction("toya", "an", "今のところは順調か", "流石、安定感あるよね！"),
    Interaction("an", "miku_vivid", "調子出てきたね！", "まだこんなもんじゃないよ！"),
    Interaction("miku_vivid", "an", "杏、調子はどう？", "もちろん！ 絶好調だよ！"),
    Interaction("an", "rin", "リンちゃん調子はどう？", "もっちろん、絶好調！"),
    Interaction("rin", "an", "みんな！ いっくよー！", "オッケー！ リンちゃん！"),
    Interaction("an", "len", "ここは私がリードするね！", "さすが！ 頼りにしてるよ！"),
    Interaction("len", "an", "みんな、盛り上がっていこう！", "レンくん張り切ってるね！"),
    Interaction("an", "meiko", "最高に楽しいですね！", "ええ、いい音があふれてるわ！"),
    Interaction("meiko", "an", "だいぶ温まってきたわね！", "このままもっと沸かせちゃおうよ！"),
    //akito
    Interaction("akito", "toya", "満足するのは早いぞ！", "ああ、分かってる！"),
    Interaction("toya", "akito", "俺たちの出番だな", "ったく、待ちくたびれた！"),
    Interaction("akito", "tsukasa", "意外とやるじゃねえか！", "意外とはなんだ意外とは！"),
    Interaction("tsukasa", "akito", "その調子でついてこい！", "はぁ、手ぇ抜くわけにいかねえしな！"),
    Interaction("akito", "ena", "やればできるじゃねえか！", "ふん、あんたにそう言われてもね"),
    Interaction("ena", "akito", "足、引っ張らないでよ", "こっちのセリフだっつーの"),
    Interaction("akito", "mizuki", "おい、ついてきてるか？", "今のところね！"),
    Interaction("mizuki", "akito", "弟クン、さあ行くよ！", "だからそれやめろっての…！"),
    Interaction("akito", "miku_vivid", "もっと行けるだろ、ミク！", "そっちも出し惜しみはナシだよ！"),
    Interaction("miku_vivid", "akito", "そろそろ見せ場だね？", "おう、やってやろうぜ！"),
    Interaction("akito", "rin", "リン、まだいけるか？", "うん！ まっかせて！"),
    Interaction("rin", "akito", "歌が気持ちよく響いてる！", "ああ、いい調子だな！"),
    Interaction("akito", "len", "調子上がってきてるな！", "まあね！ そろそろ本気でいくよ！"),
    Interaction("len", "akito", "ちゃんとついてきてる？", "誰に言ってんだ？ 当然だろ！"),
    Interaction("akito", "meiko", "よっし、このまま…！", "ええ、勢い大事よね！"),
    Interaction("meiko", "akito", "思う存分やっちゃって！", "ああ、加減はナシだ！"),
    //toya
    Interaction("toya", "tsukasa", "盛り上がってきましたね", "しかし、オレたちはその上をいくのだ！"),
    Interaction("tsukasa", "toya", "冬弥、やっといい笑顔になったな！", "えっ？ 俺、笑ってますか？"),
    Interaction("toya", "mizuki", "一緒に歌えるとはな…", "ボクもワクワクしてるよ！"),
    Interaction("mizuki", "toya", "冬弥クン、調子いいね！", "暁山こそ、いい感じだ！"),
    Interaction("toya", "miku_vivid", "今の俺ならもっと…！", "いいね！ 聞かせて、私たちに！"),
    Interaction("miku_vivid", "toya", "いいね、音に乗れてる！", "ああ、とても楽しい！"),
    Interaction("toya", "rin", "一緒に歌えるなんてな", "えへへ、私も楽しみ！"),
    Interaction("rin", "toya", "みんな楽しそうだね！", "ああ、俺も楽しい"),
    Interaction("toya", "len", "俺も負けていられないな", "うん、遠慮なくやっちゃって！"),
    Interaction("len", "toya", "最っ高のステージにしようね！", "ああ、みんなで作ろう、必ず！"),
    Interaction("toya", "meiko", "ここで歌うと決めたんだ！", "その想い、届けましょ！"),
    Interaction("meiko", "toya", "いい調子で来てるわね！", "みんなのお陰ですね"),
    //miku_vivid
    Interaction("miku_vivid", "len", "いいね！ ちょっとアドリブ入れたくなる！", "って言いながらもう入れてるし！"),
    Interaction("miku_vivid", "meiko", "かなりいい調子だね！", "ふふ、ミクもすっかりノリノリだもんね！"),
    Interaction("meiko", "miku_vivid", "順調順調！", "私もまだまだ行けるよ！"),
    //tsukasa
    Interaction("tsukasa", "emu", "見ろ！ みんなの笑顔を！", "あたしも思わずわんだほーい！"),
    Interaction("emu", "tsukasa", "音がキラキラしてるよ！", "ああ、この調子でいくぞ！"),
    Interaction("tsukasa", "nene", "ふっ、オレを呼ぶ歓声が聞こえる！", "耳、大丈夫？"),
    Interaction("nene", "tsukasa", "しっかり合わせてよ？", "誰に言っている！ 任せろ！"),
    Interaction("tsukasa", "rui", "かなり調子いいぞ！", "本当に君は本番に強いねえ！"),
    Interaction("rui", "tsukasa", "素晴らしいショーになる予感がするよ！", "ああ、オレもそう思っていた！"),
    Interaction("tsukasa", "mizuki", "みんなの笑顔のために！", "ヒュー！ 先輩カッコいー！"),
    Interaction("mizuki", "tsukasa", "ハッピーエンドが一番！", "ああ、最後は笑顔だ！"),
    Interaction("tsukasa", "miku_wonder", "ショーの時間だぞ！", "うん！ みんなを笑顔にー！"),
    Interaction("miku_wonder", "tsukasa", "それじゃ、いっくよー！", "いくってなんだ！ そんな段取りあったか！？"),
    Interaction("tsukasa", "rin", "オレたちの見せ場だな！", "ワクワク、ワクワク！"),
    Interaction("rin", "tsukasa", "みんなカッコいー！", "一番はオレだがな！"),
    Interaction("tsukasa", "len", "よし、オレに続けー！", "ははは、カッコいい！"),
    Interaction("len", "tsukasa", "いい感じだね！", "ああ、この調子でいくぞ！"),
    Interaction("tsukasa", "meiko", "最高のショーを！", "絶対成功させましょう！"),
    Interaction("meiko", "tsukasa", "ついてきてる？", "もちろん！ まだまだいけるぞ！"),
    Interaction("tsukasa", "kaito", "ショーはこれからだ！", "ボクも協力するよ！"),
    Interaction("kaito", "tsukasa", "盛り上がってるね！", "ふん、オレがいるからな！"),
    //emu
    Interaction("emu", "nene", "見せ場がきたね！", "ちゃんと決めてみせる！"),
    Interaction("nene", "emu", "このまま、最後まで！", "がんばれがんばれ寧々ちゃん！"),
    Interaction("emu", "rui", "いけいけゴーゴーわんだほーい！", "そうだね、この勢いは大事にしなくては！"),
    Interaction("rui", "emu", "ここからは任せたよ、えむ君！", "はーい！ いくよー、フルパワーわんだほーい！"),
    Interaction("emu", "mafuyu", "センパイも一緒にわんだほーい！", "えっ？ わ、わんだほい…"),
    Interaction("mafuyu", "emu", "楽しいね、鳳さん！", "は、はひ！"),
    Interaction("emu", "miku_wonder", "フルパワーわんだほーい！", "ミクも～、わんだほーい！"),
    Interaction("miku_wonder", "emu", "えむちゃん絶好調！", "うん！ まだまだいけるよ！"),
    Interaction("emu", "rin", "たっくさんの笑顔のために！", "私も頑張って歌うね！"),
    Interaction("rin", "emu", "ドキドキする歌だね！", "うん！ 最後まで聞きたいな！"),
    Interaction("emu", "len", "みんな楽しそう！", "盛り上がってる証拠だね！"),
    Interaction("len", "emu", "盛り上げていこう！", "うん！ あたし得意だよ！"),
    Interaction("emu", "meiko", "みんなを笑顔にできるかな！", "もちろん！ さあ頑張りましょう！"),
    Interaction("meiko", "emu", "みんな楽しんでる？", "うん！ とってもわんだほーい！"),
    Interaction("emu", "kaito", "みんな息ピッタリ！", "うん！ 気持ちがいいね！"),
    Interaction("kaito", "emu", "疲れてないかい？", "うん！ 運動得意なんだ！"),
    //nene 
    Interaction("nene", "rui", "楽しそうだね", "ふふっ、これだけ盛り上がっていて楽しくないはずがないよ"),
    Interaction("rui", "nene", "ここからが僕たちの真骨頂だ！", "うん、行くよ、ネネロボ！"),
    Interaction("nene", "miku_wonder", "自分の足でステージに…！", "ねねちゃん、ファイトー☆"),
    Interaction("miku_wonder", "nene", "寧々ちゃんレッツゴー！", "こ、心の準備が…"),
    Interaction("nene", "rin", "わたしだって、これくらい…！", "大丈夫、自分を信じて！"),
    Interaction("rin", "nene", "ここまで絶好調！", "こういうときこそ注意しないと…"),
    Interaction("nene", "len", "なんかいい感じ…", "うん！ この調子だね！"),
    Interaction("len", "nene", "もっと前に出ちゃおうよ！", "え、ま、待って…！"),
    Interaction("nene", "meiko", "ショーはやっぱり楽しい…！", "あら、いい笑顔ね！"),
    Interaction("meiko", "nene", "順調ね、流石だわ！", "あ、ありがとう…"),
    Interaction("nene", "kaito", "想いを歌にのせて…！", "ああ、きっと届くよ！"),
    Interaction("kaito", "nene", "キミも歌おう！", "う、うん… よろしく…"),
    //rui
    Interaction("rui", "mizuki", "おや、ずいぶん協力的だね？", "昔馴染みのためだからかな？"),
    Interaction("rui", "mizuki", "さて、行こうか瑞希", "オッケー！ イッツ・ショータイム！"),
    Interaction("mizuki", "rui", "そろそろボクの出番かな？", "僕のことも忘れてもらっては困るよ？"),
    Interaction("mizuki", "rui", "類もカワイイポーズしてみる？", "いやいや、君の株を奪うような真似は出来ないよ"),
    Interaction("rui", "miku_wonder", "仕込みは上々だよ", "よーし、あとは任せて！"),
    Interaction("miku_wonder", "rui", "類くん、アレよろしく！", "ではとっておきのをスイッチオン！"),
    Interaction("rui", "rin", "ショーはまだこれからだよ！", "うん！ どんどん盛り上げちゃおう！"),
    Interaction("rin", "rui", "すっごくいい感じ！", "ああ、お手並み拝見だね"),
    Interaction("rui", "len", "さあ、クライマックスだ！", "うん！ 最後まで頑張ろう！"),
    Interaction("len", "rui", "ここはオレに任せて！", "ああ、頼りにしているよ"),
    Interaction("rui", "meiko", "僕たちの出番かな？", "ふふ、燃えてきちゃうわね！"),
    Interaction("meiko", "rui", "ここからが本番ね！", "ああ、気を引き締めていこう！"),
    Interaction("rui", "kaito", "幕が下りるまで気は抜けないね", "大丈夫、この調子でいこう！"),
    Interaction("kaito", "rui", "順調だね！", "ハッピーエンドも近いようだね"),
    //miku_wonder
    Interaction("miku_wonder", "kaito", "この調子で、どんどん盛り上げちゃおー！", "そうだね、みんなならきっとできるよ！"),
    //kanade
    Interaction("kanade", "mafuyu", "すごく気持ちのこもった音…", "奏にはそう聞こえるんだね？"),
    Interaction("mafuyu", "kanade", "みんな楽しそう…", "まふゆは違うの？"),
    Interaction("kanade", "ena", "うん、いい音…", "ずっと聞いていたいよね…！"),
    Interaction("ena", "kanade", "奏、楽しんでいこ？", "私は作業に戻りたい…"),
    Interaction("kanade", "mizuki", "ちょ、ちょっと休憩…", "ダメダメ、まだこれからだよ？"),
    Interaction("mizuki", "kanade", "ボクもフルスロットルで頑張っちゃおうかな？", "わたしは見てるから、頑張って"),
    Interaction("kanade", "miku_night", "わたしたちは一人じゃない", "うん、だから一緒に…"),
    Interaction("miku_night", "kanade", "音がたくさん響いて、胸の奥がなんか、変…", "それはきっと、楽しいっていう気持ちだと思う"),
    Interaction("kanade", "rin", "たくさんの人に届くように…", "うん！ 一生懸命歌うね！"),
    Interaction("rin", "kanade", "いい感じだね！", "うん、この調子でいきたい"),
    //mafuyu
    Interaction("mafuyu", "ena", "これでいいでしょ？", "その言い方どうにかなんない？"),
    Interaction("ena", "mafuyu", "ふふっ、このままラストまで！", "油断してると足をすくわれるよ…"),
    Interaction("mafuyu", "mizuki", "瑞希、前に出ないの？", "さりげないカワイさも必要でしょ？"),
    Interaction("mizuki", "mafuyu", "部屋で撮るだけじゃこの空気は味わえないね！", "そうだね。悪く、ないかも…"),
    Interaction("mafuyu", "miku_night", "私歌えてるかな…", "うん、ちゃんと伝わってる"),
    Interaction("miku_night", "mafuyu", "もっと一緒に歌おう", "うん、いいよ"),
    Interaction("mafuyu", "rin", "みんな楽しそうだね", "素敵な歌だもんね！"),
    Interaction("rin", "mafuyu", "なんだか胸の奥があったかいね！", "なんとなく、分かるかも…"),
    //ena
    Interaction("ena", "mizuki", "私、注目されちゃってる！？", "はいはい、よかったねー"),
    Interaction("mizuki", "ena", "えななんの本気が見てみたーい！", "ちょっと、逆に調子狂うでしょ？"),
    Interaction("ena", "miku_night", "いい調子で来てるよね！", "うん、私の楽しい…"),
    Interaction("miku_night", "ena", "絵名の歌、好き", "え？ じゃあ、頑張っちゃおうかな？"),
    Interaction("ena", "rin", "ちょっとノってきたかも！", "いいね！ その調子！"),
    Interaction("rin", "ena", "まだまだいける？", "これくらい余裕だから"),
    //mizuki
    Interaction("mizuki", "miku_night", "ミクとなら心強いね！", "そう、嬉しいな…"),
    Interaction("miku_night", "mizuki", "瑞希、楽しい？", "もっちろん！ ミクも楽しもうよ！"),
    Interaction("rin", "mizuki", "みんなの歌、素敵だね！", "ボクたちも負けてられないね！"),
    Interaction("mizuki", "rin", "一緒にハモってみない？", "いいね！ 楽しそう！")
    //miku_night
];
