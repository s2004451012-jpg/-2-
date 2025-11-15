
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: '床清掃において、ポリッシャーを使用する際の適切な回転数は次のうちどれか？',
    options: ['50～100rpm', '150～200rpm', '300～400rpm', '500rpm以上'],
    correctAnswerIndex: 1,
    explanation: {
      ja: '床材や汚れの種類にもよりますが、一般的な洗浄作業では150～200rpmが標準的な回転数です。これより低いと洗浄力が落ち、高すぎると床材を傷める可能性があります。',
      en: 'Although it depends on the type of flooring and dirt, 150-200 rpm is the standard rotation speed for general cleaning work. A lower speed will reduce cleaning power, and a higher speed may damage the flooring.',
      vi: 'Mặc dù tùy thuộc vào loại vật liệu sàn và mức độ bẩn, tốc độ quay tiêu chuẩn cho công việc làm sạch thông thường là 150-200 vòng/phút. Tốc độ thấp hơn sẽ làm giảm hiệu quả làm sạch, và tốc độ quá cao có thể làm hỏng vật liệu sàn.',
    },
  },
  {
    id: 2,
    question: '感染症対策として、消毒用エタノールで最も効果的な濃度はどれか？',
    options: ['50%未満', '60%', '70～80%', '99%以上'],
    correctAnswerIndex: 2,
    explanation: {
      ja: '消毒用エタノールは、70～80%の濃度で最も高い殺菌効果を発揮します。水分が一定量含まれていることで、細菌の膜を透過しやすくなるためです。',
      en: 'Disinfectant ethanol exhibits the highest bactericidal effect at a concentration of 70-80%. The presence of a certain amount of water makes it easier to penetrate the bacterial membrane.',
      vi: 'Cồn y tế có tác dụng diệt khuẩn cao nhất ở nồng độ 70-80%. Sự có mặt của một lượng nước nhất định giúp cồn dễ dàng xuyên qua màng tế bào của vi khuẩn.',
    },
  },
  {
    id: 3,
    question: 'ガラス清掃で使用する「スクイジー」の正しい使い方はどれか？',
    options: [
      '力を入れてゴシゴシこする',
      '常に乾いた状態で使用する',
      'ガラス面に対して約45度の角度を保ち、一定の力で引く',
      '円を描くように動かす',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: 'スクイジーはガラス面に対し約45度の角度を保ち、上から下へ、または横へ一定の力で引くのが基本です。これにより、水分と汚れをきれいに取り除くことができます。',
      en: 'The basic way to use a squeegee is to maintain an angle of about 45 degrees to the glass surface and pull it from top to bottom or sideways with constant force. This allows you to remove water and dirt cleanly.',
      vi: 'Cách sử dụng cơ bản của cây gạt kính là giữ một góc khoảng 45 độ so với bề mặt kính và kéo từ trên xuống dưới hoặc từ bên này sang bên kia với một lực không đổi. Điều này giúp loại bỏ nước và bụi bẩn một cách sạch sẽ.',
    },
  },
  {
    id: 4,
    question: 'カーペットのシミ抜き作業で、最初に行うべきことは何か？',
    options: [
      'シミに直接洗剤をかける',
      'ブラシで強くこする',
      '何のシミか特定し、目立たない場所でテストする',
      '熱湯をかける',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: 'シミの種類によって対処法が異なるため、まず何のシミかを特定することが重要です。また、洗剤がカーペットを変色させないか、目立たない場所で必ずテスト（パッチテスト）を行います。',
      en: 'It is important to first identify the type of stain, as the treatment method differs depending on the stain. Also, always test the detergent in an inconspicuous area (patch test) to see if it discolors the carpet.',
      vi: 'Điều quan trọng là phải xác định loại vết bẩn trước tiên, vì phương pháp xử lý sẽ khác nhau tùy thuộc vào vết bẩn. Ngoài ra, hãy luôn thử chất tẩy rửa ở một khu vực khó thấy (thử nghiệm trên mảng vá) để xem nó có làm đổi màu thảm hay không.',
    },
  },
  {
    id: 5,
    question: '日常清掃と定期清掃の最も大きな違いは何か？',
    options: [
      '作業員の人数',
      '使用する道具',
      '作業の頻度と目的',
      '作業時間帯',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '日常清掃は美観維持のため毎日または定期的に行う軽度の清掃ですが、定期清掃は日常清掃では落としきれない汚れを除去し、建材を保護するために月１回や年数回など計画的に行われる大掛かりな清掃です。',
      en: 'Daily cleaning is light cleaning performed daily or regularly to maintain appearance, while periodic cleaning is large-scale cleaning performed systematically, such as once a month or several times a year, to remove dirt that cannot be removed by daily cleaning and to protect building materials.',
      vi: 'Vệ sinh hàng ngày là công việc vệ sinh nhẹ nhàng được thực hiện hàng ngày hoặc định kỳ để duy trì vẻ đẹp, trong khi vệ sinh định kỳ là công việc vệ sinh quy mô lớn được thực hiện theo kế hoạch, chẳng hạn như mỗi tháng một lần hoặc vài lần một năm, để loại bỏ các vết bẩn không thể làm sạch bằng vệ sinh hàng ngày và để bảo vệ vật liệu xây dựng.',
    },
  },
   {
    id: 6,
    question: '安全な作業のために、脚立を使用する際に最も注意すべきことは何か？',
    options: [
      '天板に座って作業する',
      '二人同時に乗る',
      '完全に開いて、平らな場所に設置する',
      '片足でバランスをとる',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '脚立は完全に開き、四本の脚がすべて接地する平らで安定した場所に設置することが最も重要です。天板に乗ったり、不安定な使い方をしたりすると転落事故の原因になります。',
      en: 'It is most important to fully open the stepladder and place it on a flat, stable surface where all four legs are on the ground. Working on the top plate or using it in an unstable manner can cause falls.',
      vi: 'Điều quan trọng nhất là phải mở hoàn toàn thang chữ A và đặt nó trên một bề mặt phẳng, ổn định, nơi cả bốn chân đều tiếp đất. Làm việc trên tấm ván trên cùng hoặc sử dụng nó một cách không ổn định có thể gây ra tai nạn ngã.',
    },
  },
  {
    id: 7,
    question: 'トイレ清掃において、衛生上最も注意して清掃すべき場所はどこか？',
    options: [
      '鏡',
      '床',
      'ドアノブ、スイッチ、水栓レバーなどの人がよく触れる場所',
      '壁',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '不特定多数の人が触れるドアノブ、照明のスイッチ、水栓レバーなどは、接触感染のリスクが非常に高い場所です。これらの場所は特に念入りに除菌・清掃する必要があります。',
      en: 'Doorknobs, light switches, faucet levers, etc., which are touched by an unspecified number of people, are places with a very high risk of contact infection. These areas require particularly careful disinfection and cleaning.',
      vi: 'Tay nắm cửa, công tắc đèn, cần gạt nước, v.v., là những nơi mà nhiều người không xác định chạm vào, có nguy cơ lây nhiễm qua tiếp xúc rất cao. Những khu vực này cần được khử trùng và làm sạch đặc biệt cẩn thận.',
    },
  },
  {
    id: 8,
    question: 'ダスタークロスに吸塵剤を塗布する目的は何か？',
    options: [
      '良い香りをさせるため',
      'ホコリを舞い上がらせず、効率よく捕集するため',
      '床を滑りやすくするため',
      '静電気を発生させるため',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '吸塵剤は、ダスタークロスに湿り気を与え、ホコリや髪の毛などを舞い上がらせることなく、吸着させて効率的に除去するために使用します。',
      en: 'A dust-collecting agent is used to moisten the duster cloth and efficiently remove dust, hair, etc., by adsorbing them without kicking them up into the air.',
      vi: 'Chất hút bụi được sử dụng để làm ẩm khăn lau bụi và loại bỏ bụi, tóc, v.v. một cách hiệu quả bằng cách hấp thụ chúng mà không làm chúng bay lên không trung.',
    },
  },
  {
    id: 9,
    question: 'ワックス塗布後、完全に乾燥するまでの歩行が禁止される主な理由は何か？',
    options: [
      'ワックスがもったいないから',
      'ワックスの性能が十分に発揮されず、光沢ムラや傷の原因になるから',
      '匂いが広がるから',
      '法律で決まっているから',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: 'ワックスが完全に硬化する前に歩行すると、足跡がついたり、ゴミが付着したりして光沢が均一になりません。また、皮膜が弱くなり、傷がつきやすくなるなど、ワックス本来の保護性能が損なわれます。',
      en: 'If you walk on the wax before it has completely hardened, footprints or debris may be left behind, resulting in uneven gloss. The film will also be weakened, making it more susceptible to scratches and impairing the original protective performance of the wax.',
      vi: 'Nếu bạn đi trên lớp sáp trước khi nó khô cứng hoàn toàn, dấu chân hoặc rác có thể bị dính lại, dẫn đến độ bóng không đồng đều. Lớp màng cũng sẽ bị yếu đi, dễ bị trầy xước hơn và làm giảm hiệu suất bảo vệ ban đầu của sáp.',
    },
  },
  {
    id: 10,
    question: '嘔吐物処理の際に、二次感染を防ぐために最も重要なことは何か？',
    options: [
      '素早くティッシュで拭き取る',
      'すぐに水で洗い流す',
      '使い捨てのマスク、手袋、エプロンを着用し、適切に処理キットを使用する',
      '消臭スプレーを大量にかける',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '嘔吐物にはノロウイルスなどの感染性微生物が含まれている可能性が高いです。処理者は必ず個人防護具（PPE）を着用し、嘔吐物を凝固剤で固め、ペーパータオルで静かに拭き取り、次亜塩素酸ナトリウムで消毒するなど、適切な手順を踏む必要があります。',
      en: 'Vomit is likely to contain infectious microorganisms such as norovirus. The person handling it must wear personal protective equipment (PPE), solidify the vomit with a solidifying agent, wipe it quietly with a paper towel, and disinfect it with sodium hypochlorite, following the proper procedures.',
      vi: 'Chất nôn có khả năng chứa các vi sinh vật lây nhiễm như norovirus. Người xử lý phải đeo thiết bị bảo hộ cá nhân (PPE), làm đông chất nôn bằng chất làm đông, lau nhẹ bằng khăn giấy và khử trùng bằng natri hypochlorite, tuân thủ các quy trình thích hợp.',
    },
  },
  {
    id: 11,
    question: 'ポリッシャーのパッドについて、色が濃い（黒など）ほど一般的にどうなるか？',
    options: [
      '柔らかくなり、艶出しに適する',
      '研磨力が強くなり、剥離作業に適する',
      '洗浄力が弱くなる',
      '価格が高くなる'
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: 'ポリッシャーのパッドは色によって硬さと研磨力が異なります。一般的に、白が最も柔らかく（艶出し用）、赤（洗浄用）、青（強洗浄用）、緑（強洗浄用）、茶（剥離手前）、黒が最も硬く研磨力が強い（剥離用）とされています。',
      en: 'Polisher pads vary in hardness and abrasiveness depending on the color. Generally, white is the softest (for polishing), followed by red (for cleaning), blue (for heavy-duty cleaning), green (for heavy-duty cleaning), brown (pre-stripping), and black is the hardest and most abrasive (for stripping).',
      vi: 'Các miếng đệm của máy đánh bóng có độ cứng và độ mài mòn khác nhau tùy thuộc vào màu sắc. Nói chung, màu trắng là mềm nhất (dùng để đánh bóng), tiếp theo là màu đỏ (dùng để làm sạch), màu xanh dương (dùng để làm sạch sâu), màu xanh lá cây (dùng để làm sạch sâu), màu nâu (trước khi bóc lớp phủ), và màu đen là cứng và mài mòn nhất (dùng để bóc lớp phủ).',
    },
  },
  {
    id: 12,
    question: '「ヒールマーク」とは何か？',
    options: [
      'かかとの高い靴のこと',
      '床についた靴のかかとのゴム跡',
      '作業員の休憩場所の印',
      'ワックスのブランド名'
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: 'ヒールマークとは、靴のかかと部分（特にゴム製）が床に擦れることで付着する黒い筋状の汚れのことです。専用のクリーナーやパッドで除去できます。',
      en: 'A heel mark is a black streak-like mark left on the floor when the heel of a shoe (especially a rubber one) rubs against it. It can be removed with a special cleaner or pad.',
      vi: 'Vệt gót giày là một vết bẩn dạng sọc đen để lại trên sàn khi gót giày (đặc biệt là gót cao su) cọ xát vào nó. Nó có thể được loại bỏ bằng chất tẩy rửa hoặc miếng đệm chuyên dụng.',
    }
  },
  {
    id: 13,
    question: '「作業表示板」を立てる際、最も注意すべきことは何ですか？',
    options: [
      'できるだけ大きく、目立つ色のものを選ぶ',
      '通行人や利用者の邪魔にならない、かつ見やすい位置に立てる',
      '作業が終了するまで絶対に動かさない',
      'ビルの入り口にさえ置いておけばよい',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '安全確保と利用者の利便性の両立が重要です。表示板は作業エリアを明確にしつつ、通行の妨げにならないよう配慮して設置する必要があります。',
      en: 'It is important to balance safety with user convenience. The sign should clearly indicate the work area while being placed considerately so as not to obstruct passage.',
      vi: 'Việc cân bằng giữa đảm bảo an toàn và sự tiện lợi cho người sử dụng là rất quan trọng. Bảng hiệu cần phải chỉ rõ khu vực làm việc và được đặt một cách cân nhắc để không cản trở lối đi.',
    },
  },
  {
    id: 14,
    question: '階段の繊維床（カーペット）を吸塵する際の注意点として、適切でないものはどれですか？',
    options: [
      '掃除機のコードで通行人が足を引っかけないように注意する',
      '階段の上から下に向かって作業を進める',
      '利用者が多い時間帯を避けて作業する',
      'コードが邪魔なので、コードレス掃除機がなければ作業はできない',
    ],
    correctAnswerIndex: 3,
    explanation: {
      ja: 'コードレス掃除機が理想的ですが、ない場合でもコードの管理を徹底すれば安全に作業できます。コードの位置に常に気を配り、必要であれば補助員を配置するなどの対策を取ります。「作業できない」は間違いです。',
      en: 'A cordless vacuum is ideal, but even without one, work can be done safely by managing the cord thoroughly. Always be aware of the cord\'s position and take measures such as having an assistant if necessary. Stating that the work "cannot be done" is incorrect.',
      vi: 'Máy hút bụi không dây là lý tưởng, nhưng ngay cả khi không có, công việc vẫn có thể được thực hiện an toàn bằng cách quản lý dây điện cẩn thận. Luôn chú ý đến vị trí của dây và thực hiện các biện pháp như bố trí người hỗ trợ nếu cần. Nói rằng "không thể làm việc" là sai.',
    },
  },
  {
    id: 15,
    question: 'ショッピングモールのトイレで注射針を発見した場合、現場責任者として従業員に最初に指示すべきことは何ですか？',
    options: [
      'すぐに拾ってゴミ箱に捨てる',
      '絶対に触らず、その場から離れて安全を確保する',
      'トイレットペーパーで包んで隠しておく',
      'お客様に見つからないように、トイレの隅に移動させる',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '注射針は血液感染症などのリスクがあり非常に危険です。従業員の安全を最優先し、絶対に触らせず、まずは現場の安全を確保させることが最初の指示となります。',
      en: 'Syringes are extremely dangerous due to the risk of blood-borne infections. Prioritizing employee safety, the first instruction is to ensure they do not touch it under any circumstances and to secure the safety of the area first.',
      vi: 'Kim tiêm rất nguy hiểm do có nguy cơ lây nhiễm các bệnh qua đường máu. Ưu tiên hàng đầu là sự an toàn của nhân viên, hướng dẫn đầu tiên là tuyệt đối không được chạm vào nó và trước hết phải đảm bảo an toàn tại hiện trường.',
    },
  },
  {
    id: 16,
    question: '危険物（注射針など）が発見されたトイレを、一般の人が利用できないようにするための一時的な措置として最も適切なものはどれですか？',
    options: [
      '口頭で「入らないでください」と伝え続ける',
      '「清掃中」の看板を立てておく',
      '「使用禁止」や「立入禁止」の表示を明確に行い、入り口をカラーコーンなどで物理的に塞ぐ',
      '電気を消しておく',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '状況の深刻さを伝え、誤って人が入るのを防ぐために、「使用禁止」などの明確な表示と、物理的な封鎖を組み合わせることが最も効果的で安全です。「清掃中」では緊急性が伝わりにくい場合があります。',
      en: 'To convey the seriousness of the situation and prevent people from entering by mistake, the most effective and safe method is to combine a clear sign like "Do Not Use" with a physical blockade. A "Cleaning in Progress" sign may not adequately communicate the urgency.',
      vi: 'Để truyền đạt mức độ nghiêm trọng của tình hình và ngăn người khác vô tình đi vào, phương pháp hiệu quả và an toàn nhất là kết hợp một biển báo rõ ràng như "Cấm sử dụng" với việc rào chắn vật lý. Biển báo "Đang dọn dẹp" có thể không truyền tải được tính cấp bách của tình hình.',
    },
  },
  {
    id: 17,
    question: '温水洗浄便座付きトイレの清掃後チェック（インスペクション）で、特に注意すべき点はどれですか？',
    options: [
      '便座の温水が熱すぎないか',
      'トイレットペーパーの三角折りがきれいか',
      '便器のフチ裏や、ノズル周りに汚れが残っていないか',
      '芳香剤の匂いが十分か',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '便器のフチ裏やノズル部分は汚れが溜まりやすく、見落としがちな箇所です。衛生面で非常に重要であり、利用者に不快感を与えないためにも、これらの箇所の洗浄品質を厳しくチェックする必要があります。',
      en: 'The underside of the toilet rim and the nozzle area are places where dirt easily accumulates and are often overlooked. They are extremely important for hygiene and must be rigorously checked for cleaning quality to avoid discomfort to users.',
      vi: 'Mặt dưới của vành bồn cầu và khu vực vòi phun là những nơi dễ tích tụ bụi bẩn và thường bị bỏ qua. Chúng rất quan trọng về mặt vệ sinh và phải được kiểm tra chất lượng làm sạch nghiêm ngặt để tránh gây khó chịu cho người sử dụng.',
    },
  },
  {
    id: 18,
    question: 'ステンレスの「ヘアライン仕上げ」の面を清掃する際の正しい方法はどれですか？',
    options: [
      '円を描くように磨く',
      'ヘアラインの目に沿って、一定方向に拭く',
      '固いブラシでこする',
      'どんな方向から拭いても変わらない',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: 'ヘアライン仕上げには細かい筋状の模様があります。この目に逆らって拭くと、汚れが筋に入り込んだり、細かい傷がついたりする原因になります。必ず目に沿って拭くことが重要です。',
      en: 'A hairline finish has fine, linear patterns. Wiping against this grain can cause dirt to get trapped in the lines or create fine scratches. It is essential to always wipe along the grain.',
      vi: 'Bề mặt hoàn thiện hairline có các đường vân nhỏ. Lau ngược chiều các đường vân này có thể khiến bụi bẩn bị kẹt lại hoặc gây ra các vết xước nhỏ. Điều cần thiết là luôn lau theo chiều của các đường vân.',
    },
  },
  {
    id: 19,
    question: '安全のため、脚立の一番上の天板に乗ってはいけない理由は何ですか？',
    options: [
      '天板が汚れるから',
      '天板は道具を置くための場所だから',
      '体を支えるものがなく、バランスを崩して転落する危険性が非常に高いから',
      '法律で禁止されているから',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '天板は作業用のステップとして設計されていません。上に乗ると重心が高くなり、体を支える場所もないため非常に不安定です。転落事故の大きな原因となるため、絶対に乗ってはいけません。',
      en: 'The top plate is not designed as a step for working. Standing on it raises your center of gravity and makes you very unstable as there is no place to support your body. It is a major cause of falling accidents and you must never stand on it.',
      vi: 'Tấm ván trên cùng không được thiết kế để làm bậc đứng làm việc. Đứng trên đó làm tăng trọng tâm của bạn và khiến bạn rất không ổn định vì không có chỗ để giữ cơ thể. Đó là nguyên nhân chính gây ra tai nạn ngã và bạn tuyệt đối không được đứng trên đó.',
    },
  },
  {
    id: 20,
    question: '床洗浄機（ポリッシャー）を使用する際、電源コードの取り扱いで最も安全な方法はどれですか？',
    options: [
      'コードを肩にかけて作業する',
      'コードを機械の進行方向の前に投げておく',
      'コードが常に機械の後ろ側に来るように操作する',
      'コードの長さが足りなければ、延長コードを何本もつなぐ',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: 'ポリッシャーの操作中にコードを巻き込んだり、踏んだりすると、断線や感電、転倒の原因となり危険です。常にコードが機械の稼働範囲の後ろにあるように意識して操作することが安全の基本です。',
      en: 'Getting the cord tangled in or running over it with the polisher can cause disconnection, electric shock, or falls, which is dangerous. The basic safety rule is to operate the machine while being mindful to keep the cord behind its working area at all times.',
      vi: 'Việc dây điện bị vướng vào hoặc bị máy đánh bóng cán qua có thể gây đứt dây, điện giật hoặc té ngã, rất nguy hiểm. Quy tắc an toàn cơ bản là vận hành máy trong khi luôn ý thức giữ dây điện phía sau khu vực làm việc của nó.',
    },
  },
  {
    id: 21,
    question: '日本語能力がまだ十分でない外国籍の新人従業員に仕事を教える際、最も効果的な方法は何ですか？',
    options: [
      '難しい専門用語を使って詳しく説明する',
      'マニュアルを渡して、自分で読ませる',
      '写真やイラストを多く使った手順書を見せ、実際にやって見せる（実演する）',
      '大きな声でゆっくり話す',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '言葉の壁がある場合、視覚的な情報が非常に有効です。写真や実演を交えることで、言葉だけでは伝わりにくい作業内容を直感的に理解させることができます。やさしい日本語を併用するとさらに効果的です。',
      en: 'When there is a language barrier, visual information is extremely effective. Using photos and demonstrations allows the employee to intuitively understand work procedures that are difficult to convey with words alone. Using simple Japanese as well is even more effective.',
      vi: 'Khi có rào cản ngôn ngữ, thông tin trực quan là cực kỳ hiệu quả. Sử dụng hình ảnh và trình diễn giúp nhân viên hiểu một cách trực quan các quy trình công việc khó truyền đạt chỉ bằng lời nói. Sử dụng thêm tiếng Nhật đơn giản sẽ còn hiệu quả hơn.',
    },
  },
  {
    id: 22,
    question: 'ビルクリーニング業務の「粗利率」を改善するため、現場責任者として検討すべきでないことはどれですか？',
    options: [
      '作業手順を見直し、無駄な時間を削減する',
      '資材の在庫管理を徹底し、無駄な発注をなくす',
      '契約金額を上げるよう、オーナーに強く要求する',
      '日勤者をパート従業員に置き換えるなど、人件費の安い労働力構成を検討する',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '契約金額の交渉は、通常、現場責任者ではなく営業担当や本社の役割です。現場責任者は、与えられた予算の中で、作業の効率化やコスト削減（労務費、資材費の管理）によって利益を最大化することが求められます。',
      en: 'Contract price negotiation is typically the role of the sales department or head office, not the site supervisor. The site supervisor is expected to maximize profit within the given budget by improving work efficiency and reducing costs (managing labor and material costs).',
      vi: 'Đàm phán giá hợp đồng thường là vai trò của bộ phận kinh doanh hoặc trụ sở chính, không phải của người giám sát tại hiện trường. Người giám sát tại hiện trường được kỳ vọng sẽ tối đa hóa lợi nhuận trong ngân sách cho phép bằng cách nâng cao hiệu quả công việc và giảm chi phí (quản lý chi phí lao động và vật tư).',
    },
  },
  {
    id: 23,
    question: '従業員が無断で欠勤した場合、現場責任者が行うべき対応として、優先順位が低いものはどれですか？',
    options: [
      '本人に電話して安否を確認する',
      '作業が滞らないように、他の従業員でカバーする体制を組む',
      '無断欠勤の理由について、他の従業員に憶測で話す',
      '上司に状況を報告する',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '憶測で話すことは、本人のプライバシーを侵害し、職場の人間関係を悪化させる可能性があるため、厳に慎むべきです。安否確認、業務への影響の最小化、上司への報告が優先されるべき行動です。',
      en: 'Speculating is something you should strictly avoid as it can violate the employee\'s privacy and worsen workplace relationships. Confirming their safety, minimizing the impact on operations, and reporting to a supervisor are the priority actions.',
      vi: 'Bạn nên tuyệt đối tránh suy đoán vì nó có thể vi phạm quyền riêng tư của nhân viên và làm xấu đi các mối quan hệ tại nơi làm việc. Xác nhận sự an toàn của họ, giảm thiểu tác động đến hoạt động và báo cáo cho cấp trên là những hành động ưu tiên.',
    },
  },
  {
    id: 24,
    question: '手洗い石鹸の消費量が急増した原因を調査する際、従業員への聞き取りで確認すべき重要なポイントは何ですか？',
    options: [
      '最近、手を洗う回数が増えたか',
      '石鹸の補充方法（希釈率など）が正しく行われているか',
      '他の従業員がたくさん使っているのを見たか',
      '石鹸の香りが好きか',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '意図せず原液のまま補充してしまったり、希釈率を間違えたりすると、1回あたりの使用量が増え、全体の消費量が急増する原因となります。使用方法のヒューマンエラーは、まず確認すべき重要なポイントです。',
      en: 'Accidentally refilling with undiluted concentrate or getting the dilution ratio wrong can increase the amount used per wash, causing a sharp rise in overall consumption. Human error in usage procedures is a key point to check first.',
      vi: 'Vô tình đổ dung dịch đậm đặc hoặc sai tỷ lệ pha loãng có thể làm tăng lượng sử dụng mỗi lần rửa, gây ra sự gia tăng đột ngột trong tiêu thụ tổng thể. Lỗi của con người trong quy trình sử dụng là một điểm quan trọng cần kiểm tra đầu tiên.',
    },
  },
  {
    id: 25,
    question: '清掃作業中に、床用のワックスがステンレスの扉に飛び散ってしまいました。この汚れを除去するのに最も適した洗剤の種類はどれですか？',
    options: [
      '酸性洗剤',
      '中性または弱アルカリ性の洗剤',
      '塩素系漂白剤',
      '研磨剤入りのクレンザー',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: 'ワックスは樹脂なので、アルカリ性の洗剤で分解できます。ただし、ステンレスを傷めないよう、まずは中性洗剤で試し、落ちなければ弱アルカリ性の洗剤を使用するのが安全です。酸性や塩素系、研磨剤は材質を傷める可能性があります。',
      en: 'Wax is a resin, so it can be broken down with an alkaline detergent. However, to avoid damaging the stainless steel, it is safest to first try a neutral detergent, and if that doesn\'t work, use a weakly alkaline one. Acidic, chlorine-based, or abrasive agents can damage the material.',
      vi: 'Sáp là một loại nhựa, vì vậy nó có thể được phân hủy bằng chất tẩy rửa có tính kiềm. Tuy nhiên, để tránh làm hỏng thép không gỉ, an toàn nhất là thử trước với chất tẩy rửa trung tính, và nếu không hiệu quả, hãy sử dụng chất tẩy rửa có tính kiềm yếu. Các chất có tính axit, clo hoặc mài mòn có thể làm hỏng vật liệu.',
    },
  },
  {
    id: 26,
    question: 'ビルメンテナンスにおいて、PDCAサイクルを回すことの目的として、最も適切なものはどれですか？',
    options: [
      '毎日同じ作業を繰り返すため',
      '計画(Plan)、実行(Do)、評価(Check)、改善(Act)を繰り返すことで、継続的に業務品質を向上させるため',
      '問題が発生したときに、責任者を決めるため',
      'できるだけ早く作業を終わらせるため',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: 'PDCAサイクルは、業務を計画し、実行し、その結果を評価して、次の改善につなげるという一連の流れです。これを繰り返すことで、問題点を改善し、サービスの品質を継続的に高めていくことができます。',
      en: 'The PDCA cycle is a process of planning work, executing it, evaluating the results, and linking them to the next improvement. By repeating this, you can fix problems and continuously enhance service quality.',
      vi: 'Chu trình PDCA là một quy trình lập kế hoạch công việc, thực hiện nó, đánh giá kết quả và liên kết chúng với sự cải tiến tiếp theo. Bằng cách lặp lại điều này, bạn có thể khắc phục các vấn đề và liên tục nâng cao chất lượng dịch vụ.',
    },
  },
  {
    id: 27,
    question: 'トイレの個室点検で「トイレットペーパーが補充されているか」を確認する際、同時に見るべきポイントは？',
    options: [
      'ペーパーホルダーがピカピカに磨かれているか',
      '予備のペーパーが、すぐに使える状態でセットされているか',
      'ペーパーのブランドが指定のものか',
      'ペーパーの残量がちょうど半分になっているか',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '主ロールがなくなっても利用者が困らないように、予備のロールが正しくセットされ、スムーズに取り出せる状態になっているかを確認することが重要です。利用者の視点に立った、一歩進んだ確認です。',
      en: 'It is important to check that the spare roll is set correctly and can be taken out smoothly so that users are not inconvenienced even if the main roll runs out. This is a proactive check from the user\'s perspective.',
      vi: 'Điều quan trọng là phải kiểm tra xem cuộn giấy dự phòng đã được lắp đúng cách và có thể lấy ra một cách trơn tru để người dùng không gặp bất tiện ngay cả khi cuộn giấy chính đã hết. Đây là một sự kiểm tra chủ động từ góc độ của người dùng.',
    },
  },
  {
    id: 28,
    question: '営業時間中に廊下で清掃作業を行う場合、安全のために最も重要なことは何ですか？',
    options: [
      'できるだけ速く作業を終わらせる',
      '作業中であることを示す表示板を設置し、通行人の安全な通路を確保する',
      '大きな音を立てないように静かに作業する',
      '同僚との私語を慎む',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '営業時間中の作業では、利用者の安全確保が最優先です。作業エリアを明確に示し、滑ったりつまずいたりする危険がないように、安全な通路を確保することが不可欠です。',
      en: 'When working during business hours, ensuring the safety of users is the top priority. It is essential to clearly mark the work area and secure a safe passage to prevent any danger of slipping or tripping.',
      vi: 'Khi làm việc trong giờ hành chính, việc đảm bảo an toàn cho người sử dụng là ưu tiên hàng đầu. Điều cần thiết là phải đánh dấu rõ ràng khu vực làm việc và đảm bảo một lối đi an toàn để ngăn chặn bất kỳ nguy cơ trượt ngã nào.',
    },
  },
  {
    id: 29,
    question: '経験豊富なベテラン従業員(Bさん)に、開店前の清掃作業を割り当てる際の適切な指示の出し方はどれですか？',
    options: [
      '「いつも通りお願いします」と、本人の裁量に任せる',
      '細かい手順を一つ一つ、最初から最後まで説明する',
      '「今日は特に〇〇を重点的にお願いします」と、要点や変更点を明確に伝える',
      '何も言わなくても、やってくれるはずだと期待する',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: 'ベテランであっても、その日の重点項目や注意点を明確に伝えることで、期待する品質を確保しやすくなります。全てを任せるのではなく、要点を伝えることで、信頼と的確な指示を両立させることができます。',
      en: 'Even with a veteran employee, clearly communicating the day\'s priorities and points of caution makes it easier to ensure the expected quality. Instead of leaving everything to them, communicating the key points allows you to combine trust with precise instructions.',
      vi: 'Ngay cả với một nhân viên kỳ cựu, việc truyền đạt rõ ràng các ưu tiên và điểm cần lưu ý trong ngày sẽ giúp đảm bảo chất lượng mong đợi dễ dàng hơn. Thay vì giao phó mọi thứ, việc truyền đạt các điểm chính cho phép bạn kết hợp sự tin tưởng với các hướng dẫn chính xác.',
    },
  },
  {
    id: 30,
    question: '床洗浄作業の見積もりを作成するにあたり、「作業面積」を算出する際に考慮すべきことは何ですか？',
    options: [
      '部屋全体の面積をそのまま使う',
      '部屋全体の面積から、備品（机、棚など）が置かれている「占有面積」を差し引く',
      '歩く部分だけの面積を測る',
      '作業員の数で面積を割る',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '実際に洗浄する面積は、部屋全体の面積から、洗浄できない備品などが置かれた部分の面積を引いたものになります。これを正しく計算しないと、作業時間や費用の見積もりが不正確になります。',
      en: 'The actual area to be cleaned is the total area of the room minus the area occupied by equipment that cannot be cleaned. If this is not calculated correctly, the estimates for work time and cost will be inaccurate.',
      vi: 'Diện tích thực tế cần làm sạch là tổng diện tích của căn phòng trừ đi diện tích bị chiếm dụng bởi các thiết bị không thể làm sạch. Nếu không tính toán chính xác điều này, các ước tính về thời gian làm việc và chi phí sẽ không chính xác.',
    },
  },
  {
    id: 31,
    question: '濡れた床で作業する際に、転倒を防ぐために最も重要な履物は何ですか？',
    options: [
      '普通の運動靴',
      '長靴',
      '滑り止め機能のある靴（耐滑靴）',
      'サンダル',
    ],
    correctAnswerIndex: 2,
    explanation: {
      ja: '水や洗剤で濡れた床は非常に滑りやすくなっています。耐滑性能のある専用の作業靴を履くことで、転倒のリスクを大幅に減らすことができます。安全な作業の基本です。',
      en: 'Floors wet with water or detergent are extremely slippery. Wearing special work shoes with slip-resistant performance can significantly reduce the risk of falling. It is a basic for safe work.',
      vi: 'Sàn nhà bị ướt bởi nước hoặc chất tẩy rửa rất trơn trượt. Việc mang giày làm việc chuyên dụng có tính năng chống trượt có thể giảm đáng kể nguy cơ bị ngã. Đó là một nguyên tắc cơ bản để làm việc an toàn.',
    },
  },
  {
    id: 32,
    question: '従業員が来ないため、2人で行う予定だった作業を1人で行わなければならなくなりました。この時、現場責任者がまず判断すべきことは何ですか？',
    options: [
      '作業品質を多少落としてでも、時間内に終わらせる',
      '1人で安全に作業を完遂できるか、もし無理なら計画を変更・中止できないか検討する',
      '残業してでも、すべての作業を終わらせる',
      'お客様には何も伝えず、とにかく作業を始める',
    ],
    correctAnswerIndex: 1,
    explanation: {
      ja: '安全が最優先です。1人では危険な作業でないか、また時間内に品質を保って終わらせることが可能かを見極める必要があります。無理な場合は、上司やお客様に相談し、作業内容の変更や延期を検討するのが適切な判断です。',
      en: 'Safety is the top priority. It is necessary to determine if the work is dangerous for one person and if it can be completed on time while maintaining quality. If it\'s unreasonable, the appropriate decision is to consult with a supervisor or the customer and consider changing or postponing the work.',
      vi: 'An toàn là ưu tiên hàng đầu. Cần phải xác định xem công việc có nguy hiểm cho một người làm hay không và liệu có thể hoàn thành đúng giờ trong khi vẫn duy trì chất lượng hay không. Nếu không hợp lý, quyết định phù hợp là tham khảo ý kiến của cấp trên hoặc khách hàng và xem xét thay đổi hoặc hoãn lại công việc.',
    },
  }
];
