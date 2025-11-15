
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
  }
];
   