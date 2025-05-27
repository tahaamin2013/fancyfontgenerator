"use client"
// pages/emojis.tsx or app/emojis/page.tsx
import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import Head from 'next/head';

interface Category {
  emoji: string;
  name: string;
  subcategories: {
    name: string;
    emojis: string[];
  }[];
}

const emojiCategories: Category[] = [
  {
    emoji: '🚓',
    name: '911',
    subcategories: [
      {
        name: 'Veicoli di Emergenza',
        emojis: ['🚔', '🚓', '🚑', '🚒']
      },
      {
        name: 'Personale e Protezione',
        emojis: ['🔫', '👮', '⛑', '👷']
      },
      {
        name: 'Medicina e Salute',
        emojis: ['💊', '💉', '🏥', '🔬', '🅰', '🅱', '🆎', '🅾', '🤒', '🤕']
      }
    ]
  },
  {
    emoji: '🔐',
    name: 'Sicurezza',
    subcategories: [
      {
        name: 'Serrature e Accesso',
        emojis: ['🔓', '🔒', '🔏', '🔐']
      },
      {
        name: 'Porte e Chiavi',
        emojis: ['🚪', '🔑', '🗝']
      }
    ]
  },
  {
    emoji: '😊',
    name: 'Faccine e Persone',
    subcategories: [
      {
        name: 'Faccine Sorridenti',
        emojis: ['😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑']
      },
      {
        name: 'Persona e Corpo',
        emojis: ['👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩']
      },
      {
        name: 'Gesti della Mano',
        emojis: ['👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪']
      }
    ]
  },
  {
    emoji: '🔥',
    name: 'Animali e Natura',
    subcategories: [
      {
        name: 'Animali',
        emojis: ['🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾']
      },
      {
        name: 'Piante',
        emojis: ['💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼']
      },
      {
        name: 'Meteo',
        emojis: ['🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊']
      }
    ]
  },
  {
    emoji: '🎉',
    name: 'Attività ed Eventi',
    subcategories: [
      {
        name: 'Celebrazioni',
        emojis: ['🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮']
      },
      {
        name: 'Media',
        emojis: ['🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻']
      },
      {
        name: 'Musica e Suono',
        emojis: ['🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '🎵', '🎶']
      }
    ]
  },
  {
    emoji: '🔐',
    name: 'Sicurezza e Serrature',
    subcategories: [
      {
        name: 'Serrature e Accesso',
        emojis: ['🔓', '🔒', '🔏', '🔐']
      },
      {
        name: 'Porte e Chiavi',
        emojis: ['🚪', '🔑', '🗝']
      }
    ]
  },
  {
    emoji: '💼',
    name: 'Abbigliamento e Accessori',
    subcategories: [
      {
        name: 'Vestiti',
        emojis: ['👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙']
      },
      {
        name: 'Accessori',
        emojis: ['💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄']
      },
      {
        name: 'Calzature',
        emojis: ['👟', '👞', '👡', '👠', '👢']
      }
    ]
  },
  {
    emoji: '🍕',
    name: 'Cibo e Bevande',
    subcategories: [
      {
        name: 'Cibo',
        emojis: ['🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽']
      },
      {
        name: 'Bevande',
        emojis: ['☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷']
      }
    ]
  },
  {
    emoji: '🚗',
    name: 'Trasporti',
    subcategories: [
      {
        name: 'Veicoli',
        emojis: ['🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🚗', '🚕', '🚙', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜']
      },
      {
        name: 'Aria e Acqua',
        emojis: ['🚀', '✈', '🚁', '🚤', '🚢', '⛵', '🚣', '⚓']
      },
      {
        name: 'Trasporto Pubblico',
        emojis: ['🚂', '🚃', '🚄', '🚅', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚎', '🚌', '🚍']
      }
    ]
  },
  {
    emoji: '📦',
    name: 'Oggetti e Strumenti',
    subcategories: [
      {
        name: 'Ufficio e Cartoleria',
        emojis: ['📁', '📂', '📅', '📆', '🗂', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '🖇', '📏', '📐', '✂', '🖊', '🖋', '✒', '📝', '✏', '🔍', '🔎']
      },
      {
        name: 'Strumenti e Attrezzature',
        emojis: ['🔧', '🔨', '⚒', '🛠', '⛏', '🔩', '⚙', '🗜', '⚖', '🔗', '⛓', '💉', '💊']
      },
      {
        name: 'Casa',
        emojis: ['🚪', '🛏', '🛋', '🚽', '🚿', '🛁', '🔑', '🗝']
      }
    ]
  },
  {
    emoji: '🏠',
    name: 'Luoghi ed Edifici',
    subcategories: [
      {
        name: 'Edifici',
        emojis: ['🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏨', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒']
      },
      {
        name: 'Geografico',
        emojis: ['🌍', '🌎', '🌏', '🌐', '🗺', '🗾', '🏔', '⛰', '🌋', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏗', '🛤', '🛣']
      },
      {
        name: 'Luoghi di Trasporto',
        emojis: ['🛣', '🛤', '🛢', '⛽', '🚧', '🚦', '🚥', '🚏']
      }
    ]
  },
  {
    emoji: '⚽',
    name: 'Sport ed Attività',
    subcategories: [
      {
        name: 'Sport',
        emojis: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '⛳', '🏹', '🎣', '🥊', '🥋', '🎿', '⛷', '🏂', '🏋', '🚴', '🚵', '🏇', '🧗']
      },
      {
        name: 'Giochi',
        emojis: ['🎮', '🕹', '🎲', '♠', '♥', '♦', '♣']
      }
    ]
  },
  {
    emoji: '🌐',
    name: 'Simboli e Segni',
    subcategories: [
      {
        name: 'Simboli',
        emojis: ['♻', '⚠', '🚸', '⛔', '🚫', '❌', '⭕', '✅', '☑', '✔', '❗', '❓', '❕', '❔']
      },
      {
        name: 'Frecce',
        emojis: ['⬆', '⬇', '⬅', '➡', '↗', '↘', '↙', '↖', '↔', '↕', '🔄', '↪', '↩', '⤴', '⤵']
      },
      {
        name: 'Valuta',
        emojis: ['💰', '💴', '💵', '💶', '💷', '💸', '💳']
      }
    ]
  },
  {
    emoji: '🈯',
    name: 'Asiatici',
    subcategories: [
      {
        name: 'Simboli Asiatici',
        emojis: [
          '🈯',
          '🈁',
          '🈳',
          '🈂',
          '🈵',
          '🈴',
          '🈲',
          '🈹',
          '🉐',
          '🉑',
          '㊙',
          '㊗',
          '🈺',
          '🈶',
          '🈚',
          '🈷',
          '🈸',
          '💮'
        ]
      }
    ]
  },
  {
    emoji: '➕',
    name: 'Matematica',
    subcategories: [
      {
        name: 'Simboli Matematici',
        emojis: [
          '➕','➖','✖','➗','÷','∞','π','‰','‱','√','∛','∠','∡','∢','∝','±','∓','∗','℥','Ω','ℎ','ℏ','ℇ','K','℃','℉',
          'α','β','γ','Δ','∇','η','θ','ψ','λ','μ','ϕ','ω','ℼ','℈','Ø','∩','∪','∈','∉','⊆','⊂','⊄','⊇','⊃','⊅','∆','⊖','×',
          '∀','∁','∂','∃','∄','∅','∊','∋','∌','∍','ℵ','ℂ','ℍ','ℕ','ℙ','ℚ','ℝ','ℤ','ƒ','Ƒ','Σ','⅀','∫','∬','∭','∮','∯','∰','∱',
          '∲','∳','⅟','½','⅓','⅕','⅙','⅛','⅔','⅖','⅚','⅜','¾','⅗','⅝','⅞','⅘','≂','≃','≄','≅','≆','≇','≈','≉','≊','≋','≌','≍',
          '≎','≏','≐','≑','≒','≓','≔','≕','≖','≗','≘','≙','≚','≛','≜','≝','≞','≟','≠','≡','≤','≥','≦','≧','≨','≩','⊰','⊱','⋛','⋚',
          '⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹','⁺','⁼','⁽','⁾','ⁿ','ᴬ','ᴭ','ᴮ','ᴯ','ᴰ','ᴱ','ᴲ','ᴳ','ᴴ','ᴵ','ᴶ','ᴷ','ᴸ','ᴹ','ᴺ',
          'ᴻ','ᴼ','ᴽ','ᴾ','ᴿ','ᵀ','ᵁ','ᵂ','ᵃ','ᵇ','ᶜ','ᵈ','ᵉ','ᶠ','ᵍ','ʰ','ᶦ','ʲ','ᵏ','ᶫ','ᵐ','ᶰ','ᵒ','ᵖ','ʳ','ˢ','ᵗ','ᵘ',
          'ᵛ','ʷ','ˣ','ʸ','ᶻ','ᵄ','ᵅ','ᵆ','ᵊ','ᵋ','ᵌ','ᵎ','ᵑ','ᵓ','ᵔ','ᵕ','ᵙ','ᵚ','ᵜ','ᵝ','ᵞ','ᵟ','ᵠ','ᵡ','ᶛ','ᶝ','ᶞ',
          'ᶟ','ᶡ','ᶢ','ᶣ','ᶤ','ᶥ','ᶧ','ᶨ','ᶩ','ᶪ','ᶬ','ᶭ','ᶮ','ᶯ','ᶱ','ᶲ','ᶳ','ᶴ','ᶵ','ᶶ','ᶷ','ᶸ','ᶹ','ᶺ','ᶼ','ᶽ','ᶾ',
          '₀','₁','₂','₃','₄','₅','₆','₇','₈','₉','ₐ','ₑ','ₔ','ᵢ','ₒ','ᵣ','ᵤ','ᵥ','ₓ','₊','₋','₌','₍','₎','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ',
          'Ⅶ','Ⅷ','Ⅸ','Ⅺ','Ⅻ','ⅱ','ⅲ','ⅳ','ⅵ','ⅶ','ⅷ','ⅸ','ⅺ','ⅻ','⓵','⓶','⓷','⓸','⓹','⓺','⓻','⓼','⓽','⓾','⓿','➊','➋',
          '➌','➍','➎','➏','➐','➑','➒','➓','⓫','⓬','⓭','⓮','⓯','⓰','⓱','⓲','⓳','⓴','⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨',
          '⑩','⑪','⑫','⑬','⑭','⑮','⑯','⑰','⑱','⑲','⑳','➀','➁','➂','➃','➄','➅','➆','➇','➈','➉','⑴','⑵','⑶','⑷','⑸','⑹',
          '⑺','⑻','⑼','⑽','⑾','⑿','⒀','⒁','⒂','⒃','⒄','⒅','⒆','⒇','⒈','⒉','⒊','⒋','⒌','⒍','⒎','⒏','⒐','⒑','⒒','⒓',
          '⒔','⒕','⒖','⒗','⒘','⒙','⒚','⒛','🄀','🄁','🄂','🄃','🄄','🄅','🄆','🄇','🄈','🄉','🄊'
        ]
      }
    ]
  },
  {
    emoji: '😂',
    name: 'Emozioni',
    subcategories: [
      {
        name: 'Faccine e Sentimenti',
        emojis: [
          '🤓','🤗','🤔','🙄','🤐','🙃','🤑','🤒','🤕','💩','🎭','😪','😏','😷','😴','💤','🕳','🗯','🤖','😉','😃','😊','😇',
          '☺','😌','😎','😺','😈','☻','ت','ツ','😼','🙂','😆','😀','😄','😅','😂','😸','😹','🙈','😢','😜','😝','😛','😋','😍',
          '😻','💘','❣','💓','🖤','😘','😚','😽','💋','😙','😗','😮','😨','😳','😦','😯','😵','😲','😶','🙎','😁','😬','😡','👿',
          '😠','😤','😑','😾','👺','😔','😣','😞','😒','😕','😐','😟','☹','🙍','🙁','😭','😿','😧','😰','😥','😓','😱','😫','😩',
          '🙀','💔','🐵','🙊','🙉'
        ]
      },
      {
        name: 'Gesti e Mani',
        emojis: [
          '✊','✌','👏','🙏','🙌','🖕','🤘','👍','👌','💪','👎','👊','🖐','🖖','👋','✋','👐','🙋','🤝','🤛','🤜','🤞','🤚','🤙','💅','🤳'
        ]
      }
    ]
  },
  {
    emoji: '☺',
    name: 'Positivo',
    subcategories: [
      {
        name: 'Faccine Positive',
        emojis: ['😉', '🤓', '🙃']
      }
    ]
  },
  {
    emoji: '😊',
    name: 'Sorrisi',
    subcategories: [
      {
        name: 'Faccine Sorridenti',
        emojis: ['😃', '😊', '😇', '😉', '☺', '😌', '😎', '😏', '😺', '😈', '☻', 'ت', 'ツ', '😼', '💩', '🙂', '🤗', '🤓', '🙃']
      }
    ]
  },
  {
    emoji: '😄',
    name: 'Risate',
    subcategories: [
      {
        name: 'Faccine di Risate',
        emojis: ['😆', '😀', '😄', '😅', '😂', '😼', '😸', '😹', '🙈', '😏']
      }
    ]
  },
  {
    emoji: '😭',
    name: 'Pianto',
    subcategories: [
      {
        name: 'Faccine Piangenti',
        emojis: ['😢', '😂', '😹', '😭', '😿']
      }
    ]
  },
  {
    emoji: '😜',
    name: 'Lingua',
    subcategories: [
      {
        name: 'Faccine con la Lingua',
        emojis: ['😜', '😝', '😛', '😋', '🤐']
      }
    ]
  },
  {
    emoji: '❤',
    name: 'Amore',
    subcategories: [
      {
        name: 'Simboli dell\'Amore',
        emojis: ['😍', '😻', '💘', '❣', '💓', '🖤', '😘', '😚', '😽', '💋', '💔', '💝', '❤', '♡', '♥', '💌', '🏩', '💒', '👰', '💍', '👫', '⚣', '⚢', '⚥', '⚦', '⚧', '👬', '👭', '👪', '💏', '💑', '❥', '❦', '❧', '۵', 'ღ', '💕', '💖', '💗', '💞', '💟', '💙', '💚', '💛', '💜', '⚤', '😘']
      }
    ]
  },
  {
    emoji: '😘',
    name: 'Bacio',
    subcategories: [
      {
        name: 'Faccine Bacianti',
        emojis: ['😘', '😚', '😽', '💋', '😙', '😗']
      }
    ]
  },
  {
    emoji: '😮',
    name: 'Confuso',
    subcategories: [
      {
        name: 'Faccine Confuse',
        emojis: ['😮', '😨', '😳', '😦', '😯', '😵', '😲', '😶', '🙎', '🙄', '😒']
      }
    ]
  },
  {
    emoji: '😒',
    name: 'Negativo',
    subcategories: [
      {
        name: 'Faccine Negative',
        emojis: ['😁', '😬', '😠']
      }
    ]
  },
  {
    emoji: '😡',
    name: 'Arrabbiato',
    subcategories: [
      {
        name: 'Faccine Arrabbiate',
        emojis: ['😡', '👿', '😠', '😤', '😑', '😾', '👺', '😒']
      }
    ]
  },
  {
    emoji: '😔',
    name: 'Triste',
    subcategories: [
      {
        name: 'Faccine Tristi',
        emojis: ['😔', '😣', '😞', '😒', '😕', '😐', '😟', '☹', '🙍', '🙁']
      }
    ]
  },
  {
    emoji: '😓',
    name: 'Spaventato',
    subcategories: [
      {
        name: 'Faccine Spaventate',
        emojis: ['😧', '😰', '😥', '😓', '😨', '😱', '😫', '😩', '😯', '🙀']
      }
    ]
  },
  {
    emoji: '🐵',
    name: 'Scimmia',
    subcategories: [
      {
        name: 'Faccine della Scimmia',
        emojis: ['🐵', '🙈', '🙊', '🙉']
      }
    ]
  },
  {
    emoji: '👌',
    name: 'Mani',
    subcategories: [
      {
        name: 'Gesti delle Mani',
        emojis: ['🙈', '🙊', '🙉', '✊', '✌', '👏', '🙏', '🙌', '🖕', '🤘', '👍', '👌', '💪', '👎', '👊', '🖐', '🖖', '👋', '✋', '👐', '🙋', '🤔', '🤝', '🤛', '🤜', '🤞', '🤚', '🤙', '💅', '🤳', '✍', '🖒', '👆', '👇', '👈', '👉', '☜', '☞', '☝', '☟', '☚', '☛', '🙆', '🙅', '💁', '💆']
      }
    ]
  },
  {
    emoji: '😸',
    name: 'Gatto',
    subcategories: [
      {
        name: 'Faccine del Gatto',
        emojis: ['😸', '😺', '😹', '😽', '😻', '😼', '😾', '😿', '🙀']
      }
    ]
  },
  {
    emoji: '😇',
    name: 'Spirituale',
    subcategories: [
      {
        name: 'Simboli Spirituali',
        emojis: ['☯', '☮', '†', '☨', '✞', '✝', '☥', '☦', '☩', '✙', '♋', '♁', '☿', '✡', '🔯', '☬', '☧', '☸', '♆', '🔱', '⚜', '☪', '卐', '卍', '🔮', '🐉', '💒', '⛪', '👼', '😇', '👹', '💀', '⛧', '⛥', 'ψ', '📿', '☠', '🕊', '🛐', '🕋', '🕌', '🕍', '🕎', '⚛', '🕉', '⛩', '♈', '♉', '♊', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🦀', '🦂', '☮']
      }
    ]
  },
  {
    emoji: '☮',
    name: 'Politica',
    subcategories: [
      {
        name: 'Simboli Politici',
        emojis: ['☭', 'Ⓐ', '☮', '✌', '☪', '卐', '⚔', '✯', '⚜', '☫', '⚖', '⚑', '🚭', '🛂', '🔞', '♻', '✊', '☤', '🎖', '🎗', '🗳', '🏳', '🏴', '👊', '💀', '☠', '☣', '☢', '🔫', '💣', '💥', '🔥', '🚀', '🚬', '💊', '💉', '💀']
      }
    ]
  },
  {
    emoji: '💀',
    name: 'Pericoloso',
    subcategories: [
      {
        name: 'Simboli Pericolosi',
        emojis: ['👊', '💀', '☠', '☣', '☢', '🔫', '💣', '💥', '🔥', '🚀', '🚬', '💊', '💉', '⚔', '👽', '⚡', 'ϟ', '⚰', '⚱', '🏺']
      }
    ]
  },
  {
    emoji: '💰',
    name: 'Denaro',
    subcategories: [
      {
        name: 'Denaro e Valuta',
        emojis: ['💰', '💸', '💹', '💳', '🏧', '🤑', '💱', '💲', '💵', '💶', '💴', '💷', '€', '¢', '£', 'Ұ', '¥', '₴', '₡', '₦', '₱', '₮', '₩', '₺', '₵', '฿', '₫', '₭', '₥', '₹', '₨', '௹', '﷼', '৳', '₪', '₳', '₤', '₠', '₢', '₯', '₣', 'ƒ', '₲', '₶', 'ℳ', '₧', '₰', '₷', '💱']
      }
    ]
  },
  {
    emoji: '💱',
    name: 'Valuta',
    subcategories: [
      {
        name: 'Simboli della Valuta',
        emojis: ['💱', '💲', '💵', '💶', '💴', '💷', '€', '¢', '£', 'Ұ', '¥', '₴', '₡', '₦', '₱', '₮', '₩', '₺', '₵', '฿', '₫', '₭', '₥', '₹', '₨', '௹', '﷼', '৳', '₪']
      }
    ]
  },
  {
    emoji: '🎉',
    name: 'Divertimento',
    subcategories: [
      {
        name: 'Celebrazione e Festa',
        emojis: ['🎂', '🎀', '🎁', '🎄', '🎅', '🎆', '🎈', '👻', '🎃', '🎉', '🎊', '💝', '🕯', '⛓', '🗡', '⚔', '🛡', '🏹', '🎡', '🎠', '🎢', '🎭', '🎪', '🔞', '🎟', '🆐', '🚵', '🚴', '🏇', '🏂', '🏄', '🏊', '🎿', '🏎', '🎰', '🎯']
      },
      {
        name: 'Giochi e Tavoli',
        emojis: ['🎮', '🎲', '👾', '🕹', '🎱', '🀄', '🃏']
      },
      {
        name: 'Semi delle Carte',
        emojis: ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
      },
      {
        name: 'Trasporti e Corse',
        emojis: ['🚢', '🚠', '🚡', '🚲', '🚣', '🚤', '⛵', '🏍']
      }
    ]
  },
  {
    emoji: '🎂',
    name: 'Vacanze',
    subcategories: [
      {
        name: 'Vacanze e Celebrazione',
        emojis: ['🎂', '🎀', '🎁', '🎄', '🎅', '🎆', '🎈', '👻', '🎃', '🎉', '🎊', '💝', '🕯', '⛓', '🗡', '⚔', '🛡', '🏹']
      }
    ]
  },
  {
    emoji: '⚽',
    name: 'Sport',
    subcategories: [
      {
        name: 'Sport e Giochi',
        emojis: ['🏆', '🏁', '🏎', '🏅', '🚵', '🚴', '🏇', '🏂', '🏄', '🏊', '🎿', '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🀄', '🎮', '🎲', '🎯', '👾', '🕹', '🎱', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
      }
    ]
  },
  {
    emoji: '🏊',
    name: 'Fisico',
    subcategories: [
      {
        name: 'Attività Fisiche',
        emojis: ['🚵', '🚴', '🏇', '🏂', '🏄', '🏊', '🎿', '🏎', '🎯', '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🎱']
      }
    ]
  },
  {
    emoji: '🎲',
    name: 'Gioco',
    subcategories: [
      {
        name: 'Sport e Giochi',
        emojis: [
          '🎲', '🎰', '🎯', '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏',
          '🏐', '🏑', '🏒', '🏓', '🏸', '🀄', '🎮', '👾', '🕹', '🎱'
        ]
      },
      {
        name: 'Scacchi',
        emojis: ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟']
      },
      {
        name: 'Carte',
        emojis: ['🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
      }
    ]
  },
  {
    emoji: '⚽',
    name: 'Palla',
    subcategories: [
      {
        name: 'Palle e Sport Correlati',
        emojis: [
          '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🎱'
        ]
      }
    ]
  },
  {
    emoji: '🀄',
    name: 'Intellettuale',
    subcategories: [
      {
        name: 'Giochi da Tavolo e Scacchi',
        emojis: [
          '🀄', '🎮', '🎲', '🎯', '👾', '🕹', '🎱', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟',
          '🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦'
        ]
      }
    ]
  },
  {
    emoji: '♕',
    name: 'Scacchi',
    subcategories: [
      {
        name: 'Pezzi degli Scacchi',
        emojis: ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟']
      }
    ]
  },
  {
    emoji: '🃏',
    name: 'Carte',
    subcategories: [
      {
        name: 'Semi delle Carte e Jolly',
        emojis: ['🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
      }
    ]
  },
  {
    emoji: '✅',
    name: 'Scelta',
    subcategories: [
      {
        name: 'Selezione e Conferma',
        emojis: ['✅', '❎', '☐', '☑', '☒', '✔', '✘', '🆗', '✓', '👍', '👎', '✋', '👌', '➡']
      }
    ]
  },
  {
    emoji: '➡',
    name: 'Direzione',
    subcategories: [
      {
        name: 'Frecce e Direzioni',
        emojis: [
          '⬅', '➡', '⬆', '⬇', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '🔁', '🔂', '🔀', '↩', '↪', '🔼', '🔽',
          '⏪', '⏩', '⏫', '⏬', '🔃', '🔝', '🔙', '🔚', '🔛', '🔜', '⤴', '⤵', '⌫', '⌧', '⌦', '⏭', '⏯',
          '⏮', '⏸', '⏹', '⏺', '➟', '➢', '➣', '➤', '➥', '➦', '➧', '➨', '➚', '➘', '➙', '➛', '➜', '➝',
          '➞', '➸', '♐', '➲', '➳', '⏎', '➴', '➵', '➶', '➷', '➹', '➺', '➻', '➼', '➽', '←', '↑', '→',
          '↓', '↚', '↛', '↜', '↝', '↞', '↟', '↠', '↡', '↢', '↣', '↤', '↥', '↦', '↧', '↨', '➫', '➬',
          '➩', '➪', '➭', '➮', '➯', '➱', '↫', '↬', '↭', '↮', '↯', '↰', '↱', '↲', '↳', '↴', '↵', '↶',
          '↷', '↸', '↹', '↺', '↻', '↼', '↽', '↾', '↿', '⇀', '⇁', '⇂', '⇃', '⇄', '⇅', '⇆', '⇇', '⇈',
          '⇉', '⇊', '⇋', '⇌', '⇍', '⇎', '⇏', '⇐', '⇑', '⇒', '⇓', '⇔', '⇕', '⇖', '⇗', '⇘', '⇙', '⇚',
          '⇛', '⇜', '⇝', '⇞', '⇟', '⇠', '⇡', '⇢', '⇣', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '⇪', '➿', '➰',
          '⇫', '⇬', '⇭', '⇮', '⇯', '⇰', '⇱', '⇲', '⇳', '⇴', '⇵', '⇶', '⇷', '⇸', '⇹', '⇺', '✋', '👆',
          '👇', '👈', '👉', '☜', '☞', '☝', '☟', '☚', '☛'
        ]
      }
    ]
  },
  {
    emoji: '👩',
    name: 'Donne',
    subcategories: [
      {
        name: 'Donne e Simboli Femminili',
        emojis: [
          '♀', '유', '🚺', '💆', '💇', '💋', '💅', '🙋', '🙆', '🙅', '💁', '💃', '👧', '👩', '👰', '👵', '👸', '🎎',
          '👯', '👭', '👒', '♕', '♛', '👠', '👡', '👢', '⛸', '👗', '👚', '👘', '👙', '🎽', '👖', '💄', '💎', '🎀'
        ]
      }
    ]
  },
  {
    emoji: '👦',
    name: 'Uomini',
    subcategories: [
      {
        name: 'Uomini e Simboli Maschili',
        emojis: [
          '♂', '웃', '👮', '🎅', '🙇', '🚹', '🕴', '🚶', '🏃', '💂', '👦', '👨', '👲', '👳', '👴', '👬', '🎩', '👑',
          '♔', '♚', '👞', '👟', '⛸', '👕', '👔', '🎽', '👖'
        ]
      }
    ]
  },
  {
    emoji: '🌤',
    name: 'Meteo',
    subcategories: [
      {
        name: 'Simboli del Meteo',
        emojis: ['℃', '℉', '°', '⛅', '🌂', '☂', '☔', '💨', '⚡', 'ϟ', '🌃', '🌅', '🌇', '🌈', '⛄', '🌡', '🌤', '🌥', '🌩', '🌪', '💧', '💦', '🌊', '⛈', '🌦', '🌧', '🌨', '🌫', '🔥', '🔆', '🔅', '🌞', '☀', '☼', '⛱', '☁', '❆', '❄', '❅', '☃', '🌁', '😪', '🌬', '💧']
      }
    ]
  },
  {
    emoji: '💧',
    name: 'Acqua',
    subcategories: [
      {
        name: 'Acqua e Correlati',
        emojis: ['💧', '💦', '🌊', '🏊', '🏄', '☔', '⛈', '🌦', '🌧', '🌨', '🌫', '☂', '🚿', '⛲', '🛀', '🛁']
      }
    ]
  },
  {
    emoji: '🔥',
    name: 'Caldo',
    subcategories: [
      {
        name: 'Calore e Riscaldamento',
        emojis: ['🔥', '🔆', '🔅', '🌞', '☀', '☼', '🌇', '🌅', '⛱', '☕', '💡', '💣', '💥']
      }
    ]
  },
  {
    emoji: '❄',
    name: 'Freddo',
    subcategories: [
      {
        name: 'Freddo e Neve',
        emojis: ['☁', '❆', '❄', '❅', '☃', '⛄', '🌁', '😪', '🌬', '💡']
      }
    ]
  },
  {
    emoji: '💡',
    name: 'Elettronica',
    subcategories: [
      {
        name: 'Elettronica e Dispositivi',
        emojis: ['🔋', '📷', '🎬', '📼', '📹', '📺', '📡', '💻', '🎥', '🔌', '🔦', '💡', '🎞', '🖥', '🖨', '⌨', '🖱', '🖲', '📽', '📸', '📠', '📻', '💾', '💽', '💿', '📀', '✇']
      }
    ]
  },
  {
    emoji: '🍕',
    name: 'Cibo',
    subcategories: [
      {
        name: 'Cibo e Consumo',
        emojis: ['🍴', '🔪', '🍲', '🍱', '🍚', '🍙', '🍞', '🍛', '🍣', '🧀', '🍽', 'Ψ', '🍵', '🍶', '🍼', '☕', '🍻', '🍺', '🍷', '🍸', '🍹', '🍾', '🍦', '🍨', '🍧', '🎂', '🍰', '🍩', '🍮', '🍪', '🍘', '🍫', '🍬', '🍭', '🍡', '🍯', '🍿', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍜', '🍢', '🍳', '🍤', '🌭', '🌮', '🌯']
      },
      {
        name: 'Bevande',
        emojis: ['🍵', '🍶', '🍼', '☕', '🍻', '🍺', '🍷', '🍸', '🍹', '🍾']
      },
      {
        name: 'Alcolici',
        emojis: ['🍻', '🍺', '🍷', '🍸', '🍹', '🍾']
      },
      {
        name: 'Dolciumi',
        emojis: ['🍦', '🍨', '🍧', '🎂', '🍰', '🍩', '🍮', '🍪', '🍘', '🍫', '🍬', '🍭', '🍡', '🍯', '🍿']
      },
      {
        name: 'Cibi Salati e Veloce',
        emojis: ['🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍜', '🍢', '🍳', '🍤', '🧀', '🌭', '🌮', '🌯', '🍿']
      },
      {
        name: 'Fast Food',
        emojis: ['🍟', '🍔', '🍗']
      },
      {
        name: 'Frutta',
        emojis: ['🍑', '🍎', '🍏', '🍊', '🍋', '🍌', '🍐', '🍍']
      },
      {
        name: 'Verdure',
        emojis: ['🍅', '🍠', '🍆', '🌽', '🌶']
      },
      {
        name: 'Frutti di Bosco',
        emojis: ['🍒', '🍇', '🍉', '🍓', '🍈']
      },
      {
        name: 'Carnoso',
        emojis: ['🍗', '🍖', '🍢', '🍔']
      }
    ]
  },
  {
    emoji: '👶',
    name: 'Vita',
    subcategories: [
      {
        name: 'Umano',
        emojis: ['👶', '⚥', '🤒', '🤕', '💃', '👧', '👩', '👰', '👵', '👸', '💁', '🎎', '👯', '👭', '🚶', '🏃', '💂', '👦', '👨', '👲', '👳', '👴', '👬']
      },
      {
        name: 'Corpo',
        emojis: ['💪', '👂', '👅', '👀', '👃', '👄', '💅', '👁']
      },
      {
        name: 'Piante',
        emojis: ['🍀', '🍄', '🌱', '🍁', '🍂', '🍃', '🌵', '🌴', '🌾', '🌿', '🌰', '🌲', '🌳', '☘']
      },
      {
        name: 'Fiori',
        emojis: ['🌹', '🌷', '🌸', '🌼', '🌺', '🌻', '💐', '✿', '❀', '✽', '✾', '❁', '❃', '❋', '⚘', '🏵']
      },
      {
        name: 'Mammiferi',
        emojis: ['🐾', '🐆', '🐼', '🐒', '🐰', '🐴', '🐎', '🐽', '🐷', '🐖', '🐗', '🐫', '🐪', '🐘', '🐨', '🐑', '🐏', '🐐', '🐶', '🐻', '🐺', '🐮', '🐄', '🐃', '🐂', '🐭', '🐯', '🐅', '🦁', '🦄', '🐿', '🐈', '🐕', '🐩', '🐇', '🐁', '🐀', '🐹', '🐱']
      },
      {
        name: 'Rettili',
        emojis: ['🐢', '🐍', '🐸']
      },
      {
        name: 'Molluschi',
        emojis: ['🐚', '🐌']
      },
      {
        name: 'Uccelli',
        emojis: ['🐦', '🐧', '🦃', '🕊', '🐓', '🐔', '🐤', '🐥', '🐣']
      },
      {
        name: 'Artropodi',
        emojis: ['🐛', '🐜', '🐝', '🐞', '🕷', '🕸', '🦂']
      },
      {
        name: 'Sottomarino',
        emojis: ['🐙', '🐊', '🐡', '🐟', '🐠', '🐬', '🐳', '🐋', '🦀']
      },
      {
        name: 'Animali Domestici',
        emojis: ['🐈', '🐕', '🐩', '🐶', '🐰', '🐇', '🐁', '🐀', '🐭', '🐹', '🐱', '🐢', '🐍']
      },
      {
        name: 'Pollame',
        emojis: ['🐓', '🐔', '🐤', '🐥', '🐣']
      }
    ]
  },
  {
    emoji: '▲',
    name: 'Forme',
    subcategories: [
      {
        name: 'Forme Geometriche',
        emojis: ['▲', '▼', '◄', '►', '▶', '◀', '◣', '◢', '◥', '◤', '▸', '◂', '▴', '▾', '△', '▽', '▷', '◁', '⊿', '▻', '◅', '▵', '▿', '▹', '◃', '◉', '◯', '○', '☉', '◌', '◍', '◎', '●', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '❂', '☢', '⊗', '⊙', '◘', '◙']
      },
      {
        name: 'Quadrati e Rettangoli',
        emojis: ['❏', '❐', '❑', '❒', '▀', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '▉', '▊', '▋', '█', '▌', '▍', '▎', '▏', '▐', '░', '▒', '▓', '▔', '▕', '▖', '▗', '▝', '▘', '▞', '▚', '▙', '▟', '▛', '▜', '■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯']
      },
      {
        name: 'Simboli Speciali',
        emojis: ['☰', '☲', '☱', '☴', '☵', '☶', '☳', '☷', '⌘', '⌑', '◾', '◼', '⬛', '◽', '◻', '⬜', '🔺', '🔻', '🔲', '🔳', '⚫', '⚪', '🔴', '🔵', '🔶', '🔷', '🔸', '🔹']
      },
      {
        name: 'Angoli',
        emojis: ['┌', '┍', '┎', '┏', '┐', '┑', '┒', '┓', '└', '┕', '┖', '┗', '┘', '┙', '┚', '┛', '├', '┝', '┞', '┟', '┠', '┡', '┢', '┣', '┤', '┥', '┦', '┧', '┨', '┩', '┪', '┫', '┬', '┭', '┮', '┯', '┰', '┱', '┲', '┳', '┴', '┵', '┶', '┷', '┸', '┹', '┺', '┻', '┼', '┽', '┾', '┿', '╀', '╁', '╂', '╃', '╄', '╅', '╆', '╇', '╈', '╉', '╊', '╋', '╌', '╍', '╎', '╏', '═', '║', '╒', '╓', '╔', '╕', '╖', '╗', '╘', '╙', '╚', '╛', '╜', '╝', '╞', '╟', '╠', '╡', '╢', '╣', '╤', '╥', '╦', '╧', '╨', '╩', '╪', '╫', '╬']
      }
    ]
  },
  {
    emoji: '🔊',
    name: 'Suono',
    subcategories: [
      {
        name: 'Musica',
        emojis: ['🎶', '🎵', '🎼', '📻', '♩', '♪', '♫', '♬', '♭', '♮', '♯', 'ø', '🎧', '🎙', '🎚', '🎛', '🎤', '🎸', '🎻', '🎷', '🎺', '📯', '🎹']
      },
      {
        name: 'Audio',
        emojis: ['📣', '📢', '🔊', '🔉', '🔈', '🔇', '🔕', '🔔']
      },
      {
        name: 'Strumenti',
        emojis: ['🎤', '🎸', '🎻', '🎷', '🎺', '📯', '🎹']
      }
    ]
  },
  {
    emoji: '⌚',
    name: 'Tempo',
    subcategories: [
      {
        name: 'Tempo e Orologi',
        emojis: ['📅', '⏰', '⌚', '⌛', '⏳', '🔞', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '⏱', '⏲', '🕰']
      }
    ]
  },
  {
    emoji: '👖',
    name: 'Abbigliamento',
    subcategories: [
      {
        name: 'Cappelli',
        emojis: ['🎩', '👒', '🎓', '👑', '♔', '♕', '♚', '♛', '⛑']
      },
      {
        name: 'Scarpe',
        emojis: ['👞', '👟', '⛸', '👠', '👡', '👢']
      },
      {
        name: 'Abiti',
        emojis: ['👕', '👔', '🎽', '👖', '👗', '👚', '👘', '👙']
      },
      {
        name: 'Accessori',
        emojis: ['👓', '👔', '🎀', '💍', '🌂', '☂', '☔', '🕶', '🏷']
      },
      {
        name: 'Borse',
        emojis: ['👛', '👜', '👝', '🎒', '💼', '🛍']
      }
    ]
  },
  {
    emoji: '📰',
    name: 'Carta',
    subcategories: [
      {
        name: 'Documenti',
        emojis: ['📰', '📄', '📃', '📑', '📜', '📋', '📅', '📆', '📁', '📂', '📚', '📘', '📓', '📔', '📒', '📖', '🎫', '✉', '📦', '🗂', '🗒', '🗓', '🗃', '🗄', '🗑']
      },
      {
        name: 'Strumenti di Scrittura',
        emojis: ['✍', '📝', '📇', '📊', '📈', '✂', '📌', '📎', '🔗', '✒', '✏', '📏', '📐', '🔖', '🔎', '🔍', '🖇', '✁', '✃', '✄', '✐', '✎', '✑', '🖋', '🖊', '🖌', '🖍']
      },
      {
        name: 'Posta',
        emojis: ['💌', '📨', '📩', '📫', '📪', '📬', '📭', '📮', '🗞']
      }
    ]
  },
  {
    emoji: '🔧',
    name: 'Lavoro',
    subcategories: [
      {
        name: 'Strumenti per Ufficio',
        emojis: ['✍', '📝', '📠', '📇', '📊', '📈', '✂', '📌', '📎', '🔗', '✒', '✏', '📏', '📐', '🔖', '🔎', '🔍', '🖇', '✁', '✃', '✄', '✐', '✎', '✑', '🖋', '🖊', '🖌', '🖍', '💻', '👓', '👔', '💼']
      },
      {
        name: 'Lavoro Creativo',
        emojis: ['🎨']
      },
      {
        name: 'Costruzione',
        emojis: ['🏢', '🏭', '🔧', '🔩', '🔨', '🕵', '🏗', '🏘', '🏚', '⛏', '⚒', '🛠', '⚙', '🗜']
      },
      {
        name: 'Scienza',
        emojis: ['⚗', '⚖']
      }
    ]
  },
  {
    emoji: '🚗',
    name: 'Trasporti',
    subcategories: [
      {
        name: 'Autocarri',
        emojis: ['🚚', '🚛', '🚐']
      },
      {
        name: 'Pubblico',
        emojis: ['🚍', '🚌', '🚃', '🚎', '🚊', '🚝', '🚈', '🚅', '✈', '⚓', '🚢', '🚂', '🚄', '🛳', '⛴', '🛥', '🛩', '🛫', '🛬', '🚠', '🚡']
      },
      {
        name: 'Viaggi',
        emojis: ['✈', '⚓', '🚢', '🚂', '🚄', '🚍', '🛳', '⛴', '🛥', '🛩', '🛫', '🛬', '🗻', '⛺', '🗽', '🏰', '🏯', '🗼', '🗿', '📍', '🏠', '⌘', '🗺', '🏔', '⛰', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏙', '🖼', '🛎']
      },
      {
        name: 'Personale',
        emojis: ['🚘', '🚙', '🚗', '🚖', '🚕', '🚐', '🚁', '🚲', '🚴', '🚵', '🏍', '🏇', '🚣', '🏊', '🏄', '🚤', '⛵', '🏂', '🎿', '🏎']
      },
      {
        name: 'Segnaletica',
        emojis: ['🚥', '🚧', '⛔', '⚠', '🚫', '🚏', '♿', '🅿', '🛂', '🚾', '🚳', '🚷', '⛽', '🚸', '✆', '🚭', '🏧', '🚽', '🚹', '🚺', '🚻', '🚼', '🔞', '📵', '🚱', '🚯', '🚮', '♻', '♲', '♼', '♽', '♺', '♳', '♴', '♵', '🆘', '🛃', '🛅', '🚰', 'Ⓜ', 'ℹ', '📶', '🌐']
      },
      {
        name: 'Destinazione',
        emojis: ['🗻', '⛺', '🗽', '🏰', '🏯', '🗼', '🗿', '📍', '🏠', '⌘', '🗺', '🏔', '⛰', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏙', '🖼', '🛎']
      },
      {
        name: 'Carburante e Infrastrutture',
        emojis: ['🛢', '🛣', '🛤']
      }
    ]
  },
  {
    emoji: '💉',
    name: 'Salute',
    subcategories: [
      {
        name: 'Medico',
        emojis: ['🚑', '👷', '💊', '💉', '🏥', '🔬', '🅰', '🅱', '🆎', '🅾', '👮', '⛑']
      }
    ]
  },
  {
    emoji: '💅',
    name: 'Bellezza',
    subcategories: [
      {
        name: 'Bellezza e Stile',
        emojis: ['💄', '💋', '💅', '💆', '💇', '💎', '🎀']
      }
    ]
  },
  {
    emoji: '🌟',
    name: 'Cosmo',
    subcategories: [
      {
        name: 'Zodiaco',
        emojis: ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🦀', '🦂']
      },
      {
        name: 'Luna',
        emojis: ['🌜', '🌛', '🌙', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '☾', '☽', '🌝', '🌚']
      },
      {
        name: 'Stelle',
        emojis: ['⭐', '🌟', '💫', '✨', '✴', '⋆', '✺', '✩', '✰', '✪', '✬', '✭', '✮', '✯', '❂', '✫', '✡', '🔯', '★', '✱', '✲', '✳', '✵', '✶', '✷', '✸', '✹', '✦', '✧', '🌠', '☄']
      },
      {
        name: 'Altro',
        emojis: ['☪']
      }
    ]
  },
  {
    emoji: '📺',
    name: 'Media',
    subcategories: [
      {
        name: 'Elettronica e Dispositivi',
        emojis: ['💻', '📠', '📷', '🎬', '🎥', '📹', '📼', '📺', '📱', '📲', '📤', '📥', '💽', '💾', '💿', '📀', '📡', '🔋', '🔌', '💡', '🔦', '📖']
      }
    ]
  },
  {
    emoji: '✆',
    name: 'Comunicazione',
    subcategories: [
      {
        name: 'Comunicazione',
        emojis: ['☕', '🍻', '✆', '☎', '☏', '📞', '📟', '📠', '📻', '📡', '📯', '🗣', '📣', '📢', '🔊', '🔉', '🔈', '🔇', '🔕', '🔔']
      },
      {
        name: 'Internet',
        emojis: ['📲', '📱', '💻', '📤', '📥', '🛰', '📧', '✉', '💌', '📨', '📩']
      },
      {
        name: 'Posta',
        emojis: ['📧', '✉', '💌', '📨', '📩', '📫', '📪', '📬', '📭', '📮', '📦', '🗞']
      }
    ]
  },
  {
    emoji: '🚀',
    name: 'Scienza',
    subcategories: [
      {
        name: 'Scienza e Ricerca',
        emojis: ['🔭', '🔬', '🐁', '☤', '🚀', '⚛', '🛰']
      }
    ]
  },
  {
    emoji: '©',
    name: 'Legale',
    subcategories: [
      {
        name: 'Simboli Legali',
        emojis: ['©', '®', '℗', '™', '℠', '§']
      }
    ]
  },
  {
    emoji: '📋',
    name: 'Halloween',
    subcategories: [
      {
        name: 'Spaventoso e Halloween',
        emojis: ['🎃', '🔥', '☠', '💀', '👽', '👾', '☣', '☢', '🤖', '😈', '👹', '🎭', '👻', '🃏', '🃝', '🕯', '🛍', '🎁', '🎉', '🍫', '🍬', '🍭', '👑', '🎩', '🌃', '🌑', '🌚', '🌝', '⛺', '🕷', '🕸', '🐍', '🍿', '🕴', '⚰', '🗡', '🔮']
      }
    ]
  },
  {
    emoji: '📋',
    name: 'Bandiere',
    subcategories: [
      {
        name: 'Bandiere dei Paesi',
        emojis: ['🇦🇫', '🇦🇽', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮']
      }
    ]
  },
  {
    emoji: '📋',
    name: 'Generale',
    subcategories: [
      {
        name: 'Varie',
        emojis: ['⛷', '🎊', '🎈', '🎇', '🎆', '🤒', '🏅', '🎖', '🎗', '🕴', '🍪', '🎀', '🍷', '🍕', '🍊', '🎃', '❅', '❆', '☃', '🌁', '⛄', '🔥', '😪', '☠', '💀', '👽', '👾', '☣', '☢', '🤖', '😈', '👹', '🎭', '👻', '🃏', '🃝', '🕯', '🛍', '🎁', '🎉', '🍫', '🍬', '🍭', '👑', '🎩', '🌃', '🌑', '🌚', '🌝', '⛺', '🕷', '🕸', '🐍', '🍿', '⚰', '🗡', '🔮', '●', '♥', '∙', '☻', '☹', '❣', '✝', '†', 'ღ', '🎄', '🎅', '🏆', '🎼', '🎸', '♩', '👓', '🎓', '👗', '💦', '⚡', '☀', '♂', '🏊', '👠', '☔', '💍', 'Ⓜ', '⚠', '🛂', '🚭', '🚫', '♻', '🚺', '🚹', '🚻', '🚼', '🚽', '🔞', 'π', '√', 'ⁿ', '£', '💲', '💵', '💱', '🔊', '€', '℉', '℃', '🏀', '🚍', '⚓', '🚔', '🚗', '🚙', '🚘', '🚕', '🚖', '🚒', '🚑', '🚴', '🏂', '⚽', '❤', '✌', 'ツ', '♡', '✔', '♛', '✿', '♫', '★', '♪', '🎤', '♚', '❥', '☮', '☯', '☼', '➳', '✪', '✞', '✯', '✎', '✘', '▲', '™', '☑', '▼', '卐', '✈', '♋', '∞', 'ϟ', '☪', '©', '☏', '®', '✉', '☁', '°', '✍', 'Ⓐ', '✄', '웃', '♒', '✫', '☂', '✡', '♀', '☕', '😂', '😍', '👌', '😘', '😊', '😭', '💋', '😁', '👊', '🎶', '☺', '😉', '💕', '👍', '😜', '😏', '😒', '😄', '😚', '👏', '💖', '💔', '💛', '😅', '💙', '💝', '😃', '😢', '🙈', '💓', '💚', '😆', '😝', '💪', '😻', '💜', '💘', '😔', '😇', '🎂', '💗', '😩', '✋', '➡', '😎', '😠', '💞', '🎧', '•', '🌟', '🙊', '😀', '🙏', '😞', '😣', '😱', '❝', '💑', '😤', '🔫', '🙌', '❞', '🌠', '▶', '👉', '😋', '👋', '🙉', '😌', '😹', '👐', '♬', '😽', '❄', '😡', '💩', '💤', '💰', '💣', '🎵', '💏', '✓']
      }
    ]
  }
];

export default function EmojisPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredCategories = emojiCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSubcategories = selectedCategory?.subcategories.filter(sub =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.emojis.some(emoji => emoji.includes(searchTerm))
  );

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSearchTerm('');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchTerm('');
  };

  if (!selectedCategory) {
    // Pagina di Panoramica Categorie
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Intestazione */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Categorie Emoji
                </h1>
                <p className="text-gray-600 mt-2">Scegli una categoria per esplorare le emoji</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cerca categorie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Griglia Categorie */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredCategories.map((category, index) => (
              <div
                key={category.name}
                onClick={() => handleCategorySelect(category)}
                className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-xl hover:border-purple-300/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {category.emoji}
                  </div>
                  <h2 className="font-semibold text-sm md:text-base text-gray-800 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {category.subcategories.length} sottocategorie
                  </p>
                </div>
              </div>
            ))}
          </div>
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-medium text-gray-600 mb-2">Nessuna categoria trovata</h2>
              <p className="text-gray-500">Prova a modificare i termini di ricerca</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Pagina di Dettaglio Categoria
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Intestazione */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToCategories}
                className="p-2 rounded-lg bg-white/90 hover:bg-purple-100 transition-colors duration-200 border border-gray-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">{selectedCategory.emoji}</span>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {selectedCategory.name}
                  </h1>
                </div>
                <p className="text-gray-600">
                  {selectedCategory.subcategories.length} sottocategorie •{' '}
                  {selectedCategory.subcategories.reduce((acc, sub) => acc + sub.emojis.length, 0)} emoji
                </p>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cerca emoji..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Sottocategorie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedSubcategory(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedSubcategory === null
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white/70 text-gray-700 hover:bg-purple-100 border border-gray-200'
            }`}
          >
            Tutto
          </button>
          {selectedCategory.subcategories.map((sub) => (
            <button
              key={sub.name}
              onClick={() => setSelectedSubcategory(sub.name)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedSubcategory === sub.name
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-purple-100 border border-gray-200'
              }`}
            >
              {sub.name} ({sub.emojis.length})
            </button>
          ))}
        </div>
        {/* Visualizzazione Emoji */}
        <div className="space-y-8">
          {(filteredSubcategories || selectedCategory.subcategories)
            .filter(sub => selectedSubcategory === null || sub.name === selectedSubcategory)
            .map((subcategory, index) => (
              <div
                key={subcategory.name}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  {subcategory.name}
                  <span className="text-sm text-gray-500 font-normal">
                    ({subcategory.emojis.length} emoji)
                  </span>
                </h2>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 gap-3">
                  {subcategory.emojis.map((emoji, emojiIndex) => (
                    <div
                      key={emojiIndex}
                      className="aspect-square bg-gradient-to-br from-white to-gray-50 rounded-lg flex items-center justify-center text-2xl hover:shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer border border-gray-100 hover:border-purple-300"
                      title={emoji}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}