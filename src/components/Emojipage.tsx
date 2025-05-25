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
        name: 'Emergency Vehicles',
        emojis: ['🚔', '🚓', '🚑', '🚒']
      },
      {
        name: 'Personnel & Protection',
        emojis: ['🔫', '👮', '⛑', '👷']
      },
      {
        name: 'Medical & Health',
        emojis: ['💊', '💉', '🏥', '🔬', '🅰', '🅱', '🆎', '🅾', '🤒', '🤕']
      }
    ]
  },
   {
    emoji: '🔐',
    name: 'Security',
    subcategories: [
      {
        name: 'Locks & Access',
        emojis: ['🔓', '🔒', '🔏', '🔐']
      },
      {
        name: 'Doors & Keys',
        emojis: ['🚪', '🔑', '🗝']
      }
    ]
  },
  {
  emoji: '😊',
  name: 'Smileys & People',
  subcategories: [
    {
      name: 'Face Smiling',
      emojis: ['😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑']
    },
    {
      name: 'Person & Body',
      emojis: ['👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩']
    },
    {
      name: 'Hand Gestures',
      emojis: ['👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪']
    }
  ]
},
{
  emoji: '🔥',
  name: 'Animals & Nature',
  subcategories: [
    {
      name: 'Animals',
      emojis: ['🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾']
    },
    {
      name: 'Plants',
      emojis: ['💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼']
    },
    {
      name: 'Weather',
      emojis: ['🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊']
    }
  ]
},
{
  emoji: '🎉',
  name: 'Activities & Events',
  subcategories: [
    {
      name: 'Celebrations',
      emojis: ['🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮']
    },
    {
      name: 'Media',
      emojis: ['🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻']
    },
    {
      name: 'Music & Sound',
      emojis: ['🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '🎵', '🎶']
    }
  ]
},
{
  emoji: '🔐',
  name: 'Security & Locks',
  subcategories: [
    {
      name: 'Locks & Access',
      emojis: ['🔓', '🔒', '🔏', '🔐']
    },
    {
      name: 'Doors & Keys',
      emojis: ['🚪', '🔑', '🗝']
    }
  ]
},
{
  emoji: '💼',
  name: 'Clothing & Accessories',
  subcategories: [
    {
      name: 'Clothes',
      emojis: ['👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙']
    },
    {
      name: 'Accessories',
      emojis: ['💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄']
    },
    {
      name: 'Footwear',
      emojis: ['👟', '👞', '👡', '👠', '👢']
    }
  ]
},
{
  emoji: '🍕',
  name: 'Food & Drinks',
  subcategories: [
    {
      name: 'Food',
      emojis: ['🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽']
    },
    {
      name: 'Drinks',
      emojis: ['☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷']
    }
  ]
},
{
  emoji: '🚗',
  name: 'Transportation',
  subcategories: [
    {
      name: 'Vehicles',
      emojis: ['🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🚗', '🚕', '🚙', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜']
    },
    {
      name: 'Air & Water',
      emojis: ['🚀', '✈', '🚁', '🚤', '🚢', '⛵', '🚣', '⚓']
    },
    {
      name: 'Public Transport',
      emojis: ['🚂', '🚃', '🚄', '🚅', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚎', '🚌', '🚍']
    }
  ]
},
{
  emoji: '📦',
  name: 'Objects & Tools',
  subcategories: [
    {
      name: 'Office & Stationery',
      emojis: ['📁', '📂', '📅', '📆', '🗂', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '🖇', '📏', '📐', '✂', '🖊', '🖋', '✒', '📝', '✏', '🔍', '🔎']
    },
    {
      name: 'Tools & Equipment',
      emojis: ['🔧', '🔨', '⚒', '🛠', '⛏', '🔩', '⚙', '🗜', '⚖', '🔗', '⛓', '💉', '💊']
    },
    {
      name: 'Household',
      emojis: ['🚪', '🛏', '🛋', '🚽', '🚿', '🛁', '🔑', '🗝']
    }
  ]
},
{
  emoji: '🏠',
  name: 'Places & Buildings',
  subcategories: [
    {
      name: 'Buildings',
      emojis: ['🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏨', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒']
    },
    {
      name: 'Geographic',
      emojis: ['🌍', '🌎', '🌏', '🌐', '🗺', '🗾', '🏔', '⛰', '🌋', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏗', '🛤', '🛣']
    },
    {
      name: 'Transport Places',
      emojis: ['🛣', '🛤', '🛢', '⛽', '🚧', '🚦', '🚥', '🚏']
    }
  ]
},
{
  emoji: '⚽',
  name: 'Sports & Activities',
  subcategories: [
    {
      name: 'Sports',
      emojis: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '⛳', '🏹', '🎣', '🥊', '🥋', '🎿', '⛷', '🏂', '🏋', '🚴', '🚵', '🏇', '🧗']
    },
    {
      name: 'Games',
      emojis: ['🎮', '🕹', '🎲', '♠', '♥', '♦', '♣']
    }
  ]
},
{
  emoji: '🌐',
  name: 'Symbols & Signs',
  subcategories: [
    {
      name: 'Symbols',
      emojis: ['♻', '⚠', '🚸', '⛔', '🚫', '❌', '⭕', '✅', '☑', '✔', '❗', '❓', '❕', '❔']
    },
    {
      name: 'Arrows',
      emojis: ['⬆', '⬇', '⬅', '➡', '↗', '↘', '↙', '↖', '↔', '↕', '🔄', '↪', '↩', '⤴', '⤵']
    },
    {
      name: 'Currency',
      emojis: ['💰', '💴', '💵', '💶', '💷', '💸', '💳']
    }
  ]
},
{
  emoji: '🈯',
  name: 'Asian',
  subcategories: [
    {
      name: 'Asian Symbols',
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
  name: 'Maths',
  subcategories: [
    {
      name: 'Math Symbols',
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
  name: 'Emotions',
  subcategories: [
    {
      name: 'Faces & Feelings',
      emojis: [
        '🤓','🤗','🤔','🙄','🤐','🙃','🤑','🤒','🤕','💩','🎭','😪','😏','😷','😴','💤','🕳','🗯','🤖','😉','😃','😊','😇',
        '☺','😌','😎','😺','😈','☻','ت','ツ','😼','🙂','😆','😀','😄','😅','😂','😸','😹','🙈','😢','😜','😝','😛','😋','😍',
        '😻','💘','❣','💓','🖤','😘','😚','😽','💋','😙','😗','😮','😨','😳','😦','😯','😵','😲','😶','🙎','😁','😬','😡','👿',
        '😠','😤','😑','😾','👺','😔','😣','😞','😒','😕','😐','😟','☹','🙍','🙁','😭','😿','😧','😰','😥','😓','😱','😫','😩',
        '🙀','💔','🐵','🙊','🙉'
      ]
    },
    {
      name: 'Gestures & Hands',
      emojis: [
        '✊','✌','👏','🙏','🙌','🖕','🤘','👍','👌','💪','👎','👊','🖐','🖖','👋','✋','👐','🙋','🤝','🤛','🤜','🤞','🤚','🤙','💅','🤳'
      ]
    }
  ]
},
{
  emoji: '☺',
  name: 'Positive',
  subcategories: [
    {
      name: 'Positive Faces',
      emojis: ['😉', '🤓', '🙃']
    }
  ]
},
{
  emoji: '😊',
  name: 'Smile',
  subcategories: [
    {
      name: 'Smile Faces',
      emojis: ['😃', '😊', '😇', '😉', '☺', '😌', '😎', '😏', '😺', '😈', '☻', 'ت', 'ツ', '😼', '💩', '🙂', '🤗', '🤓', '🙃']
    }
  ]
},
{
  emoji: '😄',
  name: 'Laugh',
  subcategories: [
    {
      name: 'Laugh Faces',
      emojis: ['😆', '😀', '😄', '😅', '😂', '😼', '😸', '😹', '🙈', '😏']
    }
  ]
},{
  emoji: '😭',
  name: 'Cry',
  subcategories: [
    {
      name: 'Cry Faces',
      emojis: ['😢', '😂', '😹', '😭', '😿']
    }
  ]
},
{
  emoji: '😜',
  name: 'Tongue',
  subcategories: [
    {
      name: 'Tongue Faces',
      emojis: ['😜', '😝', '😛', '😋', '🤐']
    }
  ]
},
{
  emoji: '❤',
  name: 'Love',
  subcategories: [
    {
      name: 'Love Symbols',
      emojis: ['😍', '😻', '💘', '❣', '💓', '🖤', '😘', '😚', '😽', '💋', '💔', '💝', '❤', '♡', '♥', '💌', '🏩', '💒', '👰', '💍', '👫', '⚣', '⚢', '⚥', '⚦', '⚧', '👬', '👭', '👪', '💏', '💑', '❥', '❦', '❧', '۵', 'ღ', '💕', '💖', '💗', '💞', '💟', '💙', '💚', '💛', '💜', '⚤', '😘']
    }
  ]
},
{
  emoji: '😘',
  name: 'Kiss',
  subcategories: [
    {
      name: 'Kiss Faces',
      emojis: ['😘', '😚', '😽', '💋', '😙', '😗']
    }
  ]
},
{
  emoji: '😮',
  name: 'Confused',
  subcategories: [
    {
      name: 'Confused Faces',
      emojis: ['😮', '😨', '😳', '😦', '😯', '😵', '😲', '😶', '🙎', '🙄', '😒']
    }
  ]
},
{
  emoji: '😒',
  name: 'Negative',
  subcategories: [
    {
      name: 'Negative Faces',
      emojis: ['😁', '😬', '😠']
    }
  ]
},
{
  emoji: '😡',
  name: 'Angry',
  subcategories: [
    {
      name: 'Angry Faces',
      emojis: ['😡', '👿', '😠', '😤', '😑', '😾', '👺', '😒']
    }
  ]
},
{
  emoji: '😔',
  name: 'Sad',
  subcategories: [
    {
      name: 'Sad Faces',
      emojis: ['😔', '😣', '😞', '😒', '😕', '😐', '😟', '☹', '🙍', '🙁']
    }
  ]
},

{
  emoji: '😓',
  name: 'Afraid',
  subcategories: [
    {
      name: 'Afraid Faces',
      emojis: ['😧', '😰', '😥', '😓', '😨', '😱', '😫', '😩', '😯', '🙀']
    }
  ]
},
{
  emoji: '🐵',
  name: 'Monkey',
  subcategories: [
    {
      name: 'Monkey Faces',
      emojis: ['🐵', '🙈', '🙊', '🙉']
    }
  ]
},
{
  emoji: '👌',
  name: 'Hands',
  subcategories: [
    {
      name: 'Hand Gestures',
      emojis: ['🙈', '🙊', '🙉', '✊', '✌', '👏', '🙏', '🙌', '🖕', '🤘', '👍', '👌', '💪', '👎', '👊', '🖐', '🖖', '👋', '✋', '👐', '🙋', '🤔', '🤝', '🤛', '🤜', '🤞', '🤚', '🤙', '💅', '🤳', '✍', '🖒', '👆', '👇', '👈', '👉', '☜', '☞', '☝', '☟', '☚', '☛', '🙆', '🙅', '💁', '💆']
    }
  ]
},
{
  emoji: '😸',
  name: 'Cat',
  subcategories: [
    {
      name: 'Cat Faces',
      emojis: ['😸', '😺', '😹', '😽', '😻', '😼', '😾', '😿', '🙀']
    }
  ]
},
{
  emoji: '😇',
  name: 'Spiritual',
  subcategories: [
    {
      name: 'Spiritual Symbols',
      emojis: ['☯', '☮', '†', '☨', '✞', '✝', '☥', '☦', '☩', '✙', '♋', '♁', '☿', '✡', '🔯', '☬', '☧', '☸', '♆', '🔱', '⚜', '☪', '卐', '卍', '🔮', '🐉', '💒', '⛪', '👼', '😇', '👹', '💀', '⛧', '⛥', 'ψ', '📿', '☠', '🕊', '🛐', '🕋', '🕌', '🕍', '🕎', '⚛', '🕉', '⛩', '♈', '♉', '♊', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🦀', '🦂', '☮']
    }
  ]
},
{
  emoji: '☮',
  name: 'Politics',
  subcategories: [
    {
      name: 'Political Symbols',
      emojis: ['☭', 'Ⓐ', '☮', '✌', '☪', '卐', '⚔', '✯', '⚜', '☫', '⚖', '⚑', '🚭', '🛂', '🔞', '♻', '✊', '☤', '🎖', '🎗', '🗳', '🏳', '🏴', '👊', '💀', '☠', '☣', '☢', '🔫', '💣', '💥', '🔥', '🚀', '🚬', '💊', '💉', '💀']
    }
  ]
},
{
  emoji: '💀',
  name: 'Dangerous',
  subcategories: [
    {
      name: 'Dangerous Symbols',
      emojis: ['👊', '💀', '☠', '☣', '☢', '🔫', '💣', '💥', '🔥', '🚀', '🚬', '💊', '💉', '⚔', '👽', '⚡', 'ϟ', '⚰', '⚱', '🏺']
    }
  ]
},
{
  emoji: '💰',
  name: 'Money',
  subcategories: [
    {
      name: 'Money & Currency',
      emojis: ['💰', '💸', '💹', '💳', '🏧', '🤑', '💱', '💲', '💵', '💶', '💴', '💷', '€', '¢', '£', 'Ұ', '¥', '₴', '₡', '₦', '₱', '₮', '₩', '₺', '₵', '฿', '₫', '₭', '₥', '₹', '₨', '௹', '﷼', '৳', '₪', '₳', '₤', '₠', '₢', '₯', '₣', 'ƒ', '₲', '₶', 'ℳ', '₧', '₰', '₷', '💱']
    }
  ]
},
{
  emoji: '💱',
  name: 'Currency',
  subcategories: [
    {
      name: 'Currency Symbols',
      emojis: ['💱', '💲', '💵', '💶', '💴', '💷', '€', '¢', '£', 'Ұ', '¥', '₴', '₡', '₦', '₱', '₮', '₩', '₺', '₵', '฿', '₫', '₭', '₥', '₹', '₨', '௹', '﷼', '৳', '₪']
    }
  ]
},
{
  emoji: '🎉',
  name: 'Fun',
  subcategories: [
    {
      name: 'Celebration & Party',
      emojis: ['🎂', '🎀', '🎁', '🎄', '🎅', '🎆', '🎈', '👻', '🎃', '🎉', '🎊', '💝', '🕯', '⛓', '🗡', '⚔', '🛡', '🏹', '🎡', '🎠', '🎢', '🎭', '🎪', '🔞', '🎟', '🆐', '🚵', '🚴', '🏇', '🏂', '🏄', '🏊', '🎿', '🏎', '🎰', '🎯']
    },
    {
      name: 'Games & Board',
      emojis: ['🎮', '🎲', '👾', '🕹', '🎱', '🀄', '🃏']
    },
    {
      name: 'Card Suits',
      emojis: ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
    },
    {
      name: 'Transport & Ride',
      emojis: ['🚢', '🚠', '🚡', '🚲', '🚣', '🚤', '⛵', '🏍']
    }
  ]
},
{
  emoji: '🎂',
  name: 'Holiday',
  subcategories: [
    {
      name: 'Holiday & Celebration',
      emojis: ['🎂', '🎀', '🎁', '🎄', '🎅', '🎆', '🎈', '👻', '🎃', '🎉', '🎊', '💝', '🕯', '⛓', '🗡', '⚔', '🛡', '🏹']
    }
  ]
},
{
  emoji: '⚽',
  name: 'Sports',
  subcategories: [
    {
      name: 'Sports & Games',
      emojis: ['🏆', '🏁', '🏎', '🏅', '🚵', '🚴', '🏇', '🏂', '🏄', '🏊', '🎿', '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🀄', '🎮', '🎲', '🎯', '👾', '🕹', '🎱', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
    }
  ]
},
{
  emoji: '🏊',
  name: 'Physical',
  subcategories: [
    {
      name: 'Physical Activities',
      emojis: ['🚵', '🚴', '🏇', '🏂', '🏄', '🏊', '🎿', '🏎', '🎯', '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🎱']
    }
  ]
},
{
  emoji: '🎲',
  name: 'Game',
  subcategories: [
    {
      name: 'Sports & Games',
      emojis: [
        '🎲', '🎰', '🎯', '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏',
        '🏐', '🏑', '🏒', '🏓', '🏸', '🀄', '🎮', '👾', '🕹', '🎱'
      ]
    },
    {
      name: 'Chess',
      emojis: ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟']
    },
    {
      name: 'Cards',
      emojis: ['🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
    }
  ]
},
{
  emoji: '⚽',
  name: 'Ball',
  subcategories: [
    {
      name: 'Balls & Related Sports',
      emojis: [
        '⚽', '⚾', '🎾', '🏀', '🏈', '🏉', '🎳', '⛳', '🏌', '⛸', '⛷', '⛹', '🏋', '🏏', '🏐', '🏑', '🏒', '🏓', '🏸', '🎱'
      ]
    }
  ]
},
{
  emoji: '🀄',
  name: 'Intellectual',
  subcategories: [
    {
      name: 'Board Games & Chess',
      emojis: [
        '🀄', '🎮', '🎲', '🎯', '👾', '🕹', '🎱', '♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟',
        '🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦'
      ]
    }
  ]
},
{
  emoji: '♕',
  name: 'Chess',
  subcategories: [
    {
      name: 'Chess Pieces',
      emojis: ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟']
    }
  ]
},
{
  emoji: '🃏',
  name: 'Cards',
  subcategories: [
    {
      name: 'Card Suits & Joker',
      emojis: ['🃏', '♤', '♧', '♡', '♢', '♠', '♣', '♥', '♦']
    }
  ]
},
{
  emoji: '✅',
  name: 'Choice',
  subcategories: [
    {
      name: 'Selection & Confirmation',
      emojis: ['✅', '❎', '☐', '☑', '☒', '✔', '✘', '🆗', '✓', '👍', '👎', '✋', '👌', '➡']
    }
  ]
},
{
  emoji: '➡',
  name: 'Direction',
  subcategories: [
    {
      name: 'Arrows & Directions',
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
  name: 'Women',
  subcategories: [
    {
      name: 'Women & Female Symbols',
      emojis: [
        '♀', '유', '🚺', '💆', '💇', '💋', '💅', '🙋', '🙆', '🙅', '💁', '💃', '👧', '👩', '👰', '👵', '👸', '🎎',
        '👯', '👭', '👒', '♕', '♛', '👠', '👡', '👢', '⛸', '👗', '👚', '👘', '👙', '🎽', '👖', '💄', '💎', '🎀'
      ]
    }
  ]
},
{
  emoji: '👦',
  name: 'Men',
  subcategories: [
    {
      name: 'Men & Male Symbols',
      emojis: [
        '♂', '웃', '👮', '🎅', '🙇', '🚹', '🕴', '🚶', '🏃', '💂', '👦', '👨', '👲', '👳', '👴', '👬', '🎩', '👑',
        '♔', '♚', '👞', '👟', '⛸', '👕', '👔', '🎽', '👖'
      ]
    }
  ]
},
{
  emoji: '🌤',
  name: 'Weather',
  subcategories: [
    {
      name: 'Weather Symbols',
      emojis: ['℃', '℉', '°', '⛅', '🌂', '☂', '☔', '💨', '⚡', 'ϟ', '🌃', '🌅', '🌇', '🌈', '⛄', '🌡', '🌤', '🌥', '🌩', '🌪', '💧', '💦', '🌊', '⛈', '🌦', '🌧', '🌨', '🌫', '🔥', '🔆', '🔅', '🌞', '☀', '☼', '⛱', '☁', '❆', '❄', '❅', '☃', '🌁', '😪', '🌬', '💧']
    }
  ]
},
{
  emoji: '💧',
  name: 'Water',
  subcategories: [
    {
      name: 'Water & Related',
      emojis: ['💧', '💦', '🌊', '🏊', '🏄', '☔', '⛈', '🌦', '🌧', '🌨', '🌫', '☂', '🚿', '⛲', '🛀', '🛁']
    }
  ]
},
{
  emoji: '🔥',
  name: 'Hot',
  subcategories: [
    {
      name: 'Heat & Warmth',
      emojis: ['🔥', '🔆', '🔅', '🌞', '☀', '☼', '🌇', '🌅', '⛱', '☕', '💡', '💣', '💥']
    }
  ]
},
{
  emoji: '❄',
  name: 'Cold',
  subcategories: [
    {
      name: 'Cold & Snow',
      emojis: ['☁', '❆', '❄', '❅', '☃', '⛄', '🌁', '😪', '🌬', '💡']
    }
  ]
},
{
  emoji: '💡',
  name: 'Electronics',
  subcategories: [
    {
      name: 'Electronics & Devices',
      emojis: ['🔋', '📷', '🎬', '📼', '📹', '📺', '📡', '💻', '🎥', '🔌', '🔦', '💡', '🎞', '🖥', '🖨', '⌨', '🖱', '🖲', '📽', '📸', '📠', '📻', '💾', '💽', '💿', '📀', '✇']
    }
  ]
},
{
  emoji: '🍕',
  name: 'Food',
  subcategories: [
    {
      name: 'Food & Eating',
      emojis: ['🍴', '🔪', '🍲', '🍱', '🍚', '🍙', '🍞', '🍛', '🍣', '🧀', '🍽', 'Ψ', '🍵', '🍶', '🍼', '☕', '🍻', '🍺', '🍷', '🍸', '🍹', '🍾', '🍦', '🍨', '🍧', '🎂', '🍰', '🍩', '🍮', '🍪', '🍘', '🍫', '🍬', '🍭', '🍡', '🍯', '🍿', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍜', '🍢', '🍳', '🍤', '🌭', '🌮', '🌯']
    },
    {
      name: 'Drinks',
      emojis: ['🍵', '🍶', '🍼', '☕', '🍻', '🍺', '🍷', '🍸', '🍹', '🍾']
    },
    {
      name: 'Alcohol',
      emojis: ['🍻', '🍺', '🍷', '🍸', '🍹', '🍾']
    },
    {
      name: 'Confectionery',
      emojis: ['🍦', '🍨', '🍧', '🎂', '🍰', '🍩', '🍮', '🍪', '🍘', '🍫', '🍬', '🍭', '🍡', '🍯', '🍿']
    },
    {
      name: 'Salty & Fast Food',
      emojis: ['🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍜', '🍢', '🍳', '🍤', '🧀', '🌭', '🌮', '🌯', '🍿']
    },
    {
      name: 'Fast Food',
      emojis: ['🍟', '🍔', '🍗']
    },
    {
      name: 'Fruits',
      emojis: ['🍑', '🍎', '🍏', '🍊', '🍋', '🍌', '🍐', '🍍']
    },
    {
      name: 'Vegetables',
      emojis: ['🍅', '🍠', '🍆', '🌽', '🌶']
    },
    {
      name: 'Berries',
      emojis: ['🍒', '🍇', '🍉', '🍓', '🍈']
    },
    {
      name: 'Meaty',
      emojis: ['🍗', '🍖', '🍢', '🍔']
    }
  ]
},
{
 emoji: '👶',
 name: 'Life',
 subcategories: [
   {
     name: 'Human',
     emojis: ['👶', '⚥', '🤒', '🤕', '💃', '👧', '👩', '👰', '👵', '👸', '💁', '🎎', '👯', '👭', '🚶', '🏃', '💂', '👦', '👨', '👲', '👳', '👴', '👬']
   },
   {
     name: 'Body',
     emojis: ['💪', '👂', '👅', '👀', '👃', '👄', '💅', '👁']
   },
   {
     name: 'Plants',
     emojis: ['🍀', '🍄', '🌱', '🍁', '🍂', '🍃', '🌵', '🌴', '🌾', '🌿', '🌰', '🌲', '🌳', '☘']
   },
   {
     name: 'Flowers',
     emojis: ['🌹', '🌷', '🌸', '🌼', '🌺', '🌻', '💐', '✿', '❀', '✽', '✾', '❁', '❃', '❋', '⚘', '🏵']
   },
   {
     name: 'Mammals',
     emojis: ['🐾', '🐆', '🐼', '🐒', '🐰', '🐴', '🐎', '🐽', '🐷', '🐖', '🐗', '🐫', '🐪', '🐘', '🐨', '🐑', '🐏', '🐐', '🐶', '🐻', '🐺', '🐮', '🐄', '🐃', '🐂', '🐭', '🐯', '🐅', '🦁', '🦄', '🐿', '🐈', '🐕', '🐩', '🐇', '🐁', '🐀', '🐹', '🐱']
   },
   {
     name: 'Reptiles',
     emojis: ['🐢', '🐍', '🐸']
   },
   {
     name: 'Molluscs',
     emojis: ['🐚', '🐌']
   },
   {
     name: 'Birds',
     emojis: ['🐦', '🐧', '🦃', '🕊', '🐓', '🐔', '🐤', '🐥', '🐣']
   },
   {
     name: 'Arthropods',
     emojis: ['🐛', '🐜', '🐝', '🐞', '🕷', '🕸', '🦂']
   },
   {
     name: 'Underwater',
     emojis: ['🐙', '🐊', '🐡', '🐟', '🐠', '🐬', '🐳', '🐋', '🦀']
   },
   {
     name: 'Pets',
     emojis: ['🐈', '🐕', '🐩', '🐶', '🐰', '🐇', '🐁', '🐀', '🐭', '🐹', '🐱', '🐢', '🐍']
   },
   {
     name: 'Chicken',
     emojis: ['🐓', '🐔', '🐤', '🐥', '🐣']
   }
 ]
},
{
 emoji: '▲',
 name: 'Shapes',
 subcategories: [
   {
     name: 'Geometric Shapes',
     emojis: ['▲', '▼', '◄', '►', '▶', '◀', '◣', '◢', '◥', '◤', '▸', '◂', '▴', '▾', '△', '▽', '▷', '◁', '⊿', '▻', '◅', '▵', '▿', '▹', '◃', '◉', '◯', '○', '☉', '◌', '◍', '◎', '●', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '❂', '☢', '⊗', '⊙', '◘', '◙']
   },
   {
     name: 'Squares & Rectangles',
     emojis: ['❏', '❐', '❑', '❒', '▀', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '▉', '▊', '▋', '█', '▌', '▍', '▎', '▏', '▐', '░', '▒', '▓', '▔', '▕', '▖', '▗', '▝', '▘', '▞', '▚', '▙', '▟', '▛', '▜', '■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯']
   },
   {
     name: 'Special Symbols',
     emojis: ['☰', '☲', '☱', '☴', '☵', '☶', '☳', '☷', '⌘', '⌑', '◾', '◼', '⬛', '◽', '◻', '⬜', '🔺', '🔻', '🔲', '🔳', '⚫', '⚪', '🔴', '🔵', '🔶', '🔷', '🔸', '🔹']
   },
   {
     name: 'Corners',
     emojis: ['┌', '┍', '┎', '┏', '┐', '┑', '┒', '┓', '└', '┕', '┖', '┗', '┘', '┙', '┚', '┛', '├', '┝', '┞', '┟', '┠', '┡', '┢', '┣', '┤', '┥', '┦', '┧', '┨', '┩', '┪', '┫', '┬', '┭', '┮', '┯', '┰', '┱', '┲', '┳', '┴', '┵', '┶', '┷', '┸', '┹', '┺', '┻', '┼', '┽', '┾', '┿', '╀', '╁', '╂', '╃', '╄', '╅', '╆', '╇', '╈', '╉', '╊', '╋', '╌', '╍', '╎', '╏', '═', '║', '╒', '╓', '╔', '╕', '╖', '╗', '╘', '╙', '╚', '╛', '╜', '╝', '╞', '╟', '╠', '╡', '╢', '╣', '╤', '╥', '╦', '╧', '╨', '╩', '╪', '╫', '╬']
   }
 ]
},
{
 emoji: '🔊',
 name: 'Sound',
 subcategories: [
   {
     name: 'Music',
     emojis: ['🎶', '🎵', '🎼', '📻', '♩', '♪', '♫', '♬', '♭', '♮', '♯', 'ø', '🎧', '🎙', '🎚', '🎛', '🎤', '🎸', '🎻', '🎷', '🎺', '📯', '🎹']
   },
   {
     name: 'Audio',
     emojis: ['📣', '📢', '🔊', '🔉', '🔈', '🔇', '🔕', '🔔']
   },
   {
     name: 'Instruments',
     emojis: ['🎤', '🎸', '🎻', '🎷', '🎺', '📯', '🎹']
   }
 ]
},
{
 emoji: '⌚',
 name: 'Time',
 subcategories: [
   {
     name: 'Time & Clocks',
     emojis: ['📅', '⏰', '⌚', '⌛', '⏳', '🔞', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '⏱', '⏲', '🕰']
   }
 ]
},
{
 emoji: '👖',
 name: 'Wear',
 subcategories: [
   {
     name: 'Hats',
     emojis: ['🎩', '👒', '🎓', '👑', '♔', '♕', '♚', '♛', '⛑']
   },
   {
     name: 'Shoes',
     emojis: ['👞', '👟', '⛸', '👠', '👡', '👢']
   },
   {
     name: 'Clothes',
     emojis: ['👕', '👔', '🎽', '👖', '👗', '👚', '👘', '👙']
   },
   {
     name: 'Accessories',
     emojis: ['👓', '👔', '🎀', '💍', '🌂', '☂', '☔', '🕶', '🏷']
   },
   {
     name: 'Bags',
     emojis: ['👛', '👜', '👝', '🎒', '💼', '🛍']
   }
 ]
},
{
 emoji: '📰',
 name: 'Paper',
 subcategories: [
   {
     name: 'Documents',
     emojis: ['📰', '📄', '📃', '📑', '📜', '📋', '📅', '📆', '📁', '📂', '📚', '📘', '📓', '📔', '📒', '📖', '🎫', '✉', '📦', '🗂', '🗒', '🗓', '🗃', '🗄', '🗑']
   },
   {
     name: 'Writing Tools',
     emojis: ['✍', '📝', '📇', '📊', '📈', '✂', '📌', '📎', '🔗', '✒', '✏', '📏', '📐', '🔖', '🔎', '🔍', '🖇', '✁', '✃', '✄', '✐', '✎', '✑', '🖋', '🖊', '🖌', '🖍']
   },
   {
     name: 'Mail',
     emojis: ['💌', '📨', '📩', '📫', '📪', '📬', '📭', '📮', '🗞']
   }
 ]
},
{
 emoji: '🔧',
 name: 'Work',
 subcategories: [
   {
     name: 'Office Tools',
     emojis: ['✍', '📝', '📠', '📇', '📊', '📈', '✂', '📌', '📎', '🔗', '✒', '✏', '📏', '📐', '🔖', '🔎', '🔍', '🖇', '✁', '✃', '✄', '✐', '✎', '✑', '🖋', '🖊', '🖌', '🖍', '💻', '👓', '👔', '💼']
   },
   {
     name: 'Creative Work',
     emojis: ['🎨']
   },
   {
     name: 'Construction',
     emojis: ['🏢', '🏭', '🔧', '🔩', '🔨', '🕵', '🏗', '🏘', '🏚', '⛏', '⚒', '🛠', '⚙', '🗜']
   },
   {
     name: 'Science',
     emojis: ['⚗', '⚖']
   }
 ]
},
{
 emoji: '🚗',
 name: 'Transport',
 subcategories: [
   {
     name: 'Truck',
     emojis: ['🚚', '🚛', '🚐']
   },
   {
     name: 'Public',
     emojis: ['🚍', '🚌', '🚃', '🚎', '🚊', '🚝', '🚈', '🚅', '✈', '⚓', '🚢', '🚂', '🚄', '🛳', '⛴', '🛥', '🛩', '🛫', '🛬', '🚠', '🚡']
   },
   {
     name: 'Travel',
     emojis: ['✈', '⚓', '🚢', '🚂', '🚄', '🚍', '🛳', '⛴', '🛥', '🛩', '🛫', '🛬', '🗻', '⛺', '🗽', '🏰', '🏯', '🗼', '🗿', '📍', '🏠', '⌘', '🗺', '🏔', '⛰', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏙', '🖼', '🛎']
   },
   {
     name: 'Personal',
     emojis: ['🚘', '🚙', '🚗', '🚖', '🚕', '🚐', '🚁', '🚲', '🚴', '🚵', '🏍', '🏇', '🚣', '🏊', '🏄', '🚤', '⛵', '🏂', '🎿', '🏎']
   },
   {
     name: 'Signs',
     emojis: ['🚥', '🚧', '⛔', '⚠', '🚫', '🚏', '♿', '🅿', '🛂', '🚾', '🚳', '🚷', '⛽', '🚸', '✆', '🚭', '🏧', '🚽', '🚹', '🚺', '🚻', '🚼', '🔞', '📵', '🚱', '🚯', '🚮', '♻', '♲', '♼', '♽', '♺', '♳', '♴', '♵', '🆘', '🛃', '🛅', '🚰', 'Ⓜ', 'ℹ', '📶', '🌐']
   },
   {
     name: 'Destination',
     emojis: ['🗻', '⛺', '🗽', '🏰', '🏯', '🗼', '🗿', '📍', '🏠', '⌘', '🗺', '🏔', '⛰', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏙', '🖼', '🛎']
   },
   {
     name: 'Fuel & Infrastructure',
     emojis: ['🛢', '🛣', '🛤']
   }
 ]
},
{
 emoji: '💉',
 name: 'Health',
 subcategories: [
   {
     name: 'Medical',
     emojis: ['🚑', '👷', '💊', '💉', '🏥', '🔬', '🅰', '🅱', '🆎', '🅾', '👮', '⛑']
   }
 ]
},
{
 emoji: '💅',
 name: 'Beauty',
 subcategories: [
   {
     name: 'Beauty & Style',
     emojis: ['💄', '💋', '💅', '💆', '💇', '💎', '🎀']
   }
 ]
},
{
 emoji: '🌟',
 name: 'Cosmos',
 subcategories: [
   {
     name: 'Zodiac',
     emojis: ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🦀', '🦂']
   },
   {
     name: 'Moon',
     emojis: ['🌜', '🌛', '🌙', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '☾', '☽', '🌝', '🌚']
   },
   {
     name: 'Stars',
     emojis: ['⭐', '🌟', '💫', '✨', '✴', '⋆', '✺', '✩', '✰', '✪', '✬', '✭', '✮', '✯', '❂', '✫', '✡', '🔯', '★', '✱', '✲', '✳', '✵', '✶', '✷', '✸', '✹', '✦', '✧', '🌠', '☄']
   },
   {
     name: 'Other',
     emojis: ['☪']
   }
 ]
},
{
 emoji: '📺',
 name: 'Media',
 subcategories: [
   {
     name: 'Electronics & Devices',
     emojis: ['💻', '📠', '📷', '🎬', '🎥', '📹', '📼', '📺', '📱', '📲', '📤', '📥', '💽', '💾', '💿', '📀', '📡', '🔋', '🔌', '💡', '🔦', '📖']
   }
 ]
},
{
 emoji: '✆',
 name: 'Communicate',
 subcategories: [
   {
     name: 'Communication',
     emojis: ['☕', '🍻', '✆', '☎', '☏', '📞', '📟', '📠', '📻', '📡', '📯', '🗣', '📣', '📢', '🔊', '🔉', '🔈', '🔇', '🔕', '🔔']
   },
   {
     name: 'Internet',
     emojis: ['📲', '📱', '💻', '📤', '📥', '🛰', '📧', '✉', '💌', '📨', '📩']
   },
   {
     name: 'Mail',
     emojis: ['📧', '✉', '💌', '📨', '📩', '📫', '📪', '📬', '📭', '📮', '📦', '🗞']
   }
 ]
},
{
 emoji: '🚀',
 name: 'Science',
 subcategories: [
   {
     name: 'Science & Research',
     emojis: ['🔭', '🔬', '🐁', '☤', '🚀', '⚛', '🛰']
   }
 ]
},
{
 emoji: '©',
 name: 'Legal',
 subcategories: [
   {
     name: 'Legal Symbols',
     emojis: ['©', '®', '℗', '™', '℠', '§']
   }
 ]
},
{
 emoji: '📋',
 name: 'Halloween',
 subcategories: [
   {
     name: 'Spooky & Halloween',
     emojis: ['🎃', '🔥', '☠', '💀', '👽', '👾', '☣', '☢', '🤖', '😈', '👹', '🎭', '👻', '🃏', '🃝', '🕯', '🛍', '🎁', '🎉', '🍫', '🍬', '🍭', '👑', '🎩', '🌃', '🌑', '🌚', '🌝', '⛺', '🕷', '🕸', '🐍', '🍿', '🕴', '⚰', '🗡', '🔮']
   }
 ]
},
{
 emoji: '📋',
 name: 'Flags',
 subcategories: [
   {
     name: 'Country Flags',
     emojis: ['🇦🇫', '🇦🇽', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮']
   }
 ]
},
{
 emoji: '📋',
 name: 'General',
 subcategories: [
   {
     name: 'Miscellaneous',
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
    // Categories Overview Page
    return (

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">

        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Emoji Categories
                </h1>
                <p className="text-gray-600 mt-2">Choose a category to explore emojis</p>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
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
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.subcategories.length} subcategories
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-medium text-gray-600 mb-2">No categories found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Category Detail Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
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
                  {selectedCategory.subcategories.length} subcategories • 
                  {selectedCategory.subcategories.reduce((acc, sub) => acc + sub.emojis.length, 0)} emojis
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search emojis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories */}
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
            All
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

        {/* Emojis Display */}
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
                  ({subcategory.emojis.length} emojis)
                </span>
              </h3>
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