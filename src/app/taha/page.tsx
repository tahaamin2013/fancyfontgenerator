'use client';
import { useState } from 'react';

export default function EmojiPickerPage() {
  const [activeCategory, setActiveCategory] = useState('smileys');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const categories = [
    { id: 'smileys', icon: '😀', name: 'Smileys & Emotion' },
    { id: 'people', icon: '👤', name: 'People & Body' },
    { id: 'animals', icon: '🐱', name: 'Animals & Nature' },
    { id: 'food', icon: '🍎', name: 'Food & Drink' },
    { id: 'activities', icon: '⚽', name: 'Activities' },
    { id: 'travel', icon: '🚗', name: 'Travel & Places' },
    { id: 'objects', icon: '💡', name: 'Objects' },
    { id: 'symbols', icon: '❤️', name: 'Symbols' },
    { id: 'flags', icon: '🏳️', name: 'Flags' }
  ];

  const emojiData = {
    smileys: [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', 
      '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', 
      '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', 
      '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏',
      '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
      '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠'
    ],
    people: [
      '👶', '🧒', '👦', '👧', '🧑', '👱', '👨', '🧔', 
      '👩', '🧓', '👴', '👵', '🙍', '🙎', '🙅', '🙆', 
      '💁', '🙋', '🧏', '🙇', '🤦', '🤷', '👮', '🕵️', 
      '💂', '👷', '🤴', '👸', '👳', '👲', '🧕', '👼',
      '🤰', '🤱', '👯', '💃', '🕺', '🧖', '🧙', '🧚',
      '🧛', '🧜', '🧝', '🧞', '🧟', '💆', '💇', '🚶'
    ],
    animals: [
      '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', 
      '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', 
      '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', 
      '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗',
      '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜',
      '🦟', '🦗', '🕷️', '🕸️', '🦂', '🐢', '🐍', '🦎'
    ],
    food: [
      '🍎', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', 
      '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', 
      '🥑', '🥦', '🥬', '🥒', '🌶️', '🌽', '🥕', '🧄', 
      '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨',
      '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩',
      '🍗', '🍖', '🌭', '🍔', '🍟', '🍕', '🥪', '🥙'
    ],
    activities: [
      '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', 
      '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', 
      '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', 
      '🥊', '🥋', '🎽', '🛹', '🛼', '🛷', '⛸️', '🥌',
      '🎯', '🪄', '🎮', '🕹️', '🎰', '🎲', '🧩', '🃏',
      '🀄', '🎴', '🎭', '🖼️', '🎨', '🧵', '🪡', '🧶'
    ],
    travel: [
      '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', 
      '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🏍️', '🛵', 
      '🚲', '🛴', '🛺', '🚨', '🚔', '🚍', '🚘', '🚖', 
      '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄',
      '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '✈️',
      '🛫', '🛬', '🛩️', '💺', '🛰️', '🚀', '🛸', '🚁'
    ],
    objects: [
      '💡', '🔦', '🕯️', '🪔', '🧯', '🛢️', '💸', '💵', 
      '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🧰', 
      '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🪚', '🔩', 
      '⚙️', '🧲', '🔫', '💣', '🧨', '🪃', '🗡️', '⚔️',
      '🛡️', '🚬', '⚰️', '🪦', '⚱️', '🏺', '🔮', '📿',
      '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️', '🩹', '🩺'
    ],
    symbols: [
      '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', 
      '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', 
      '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', 
      '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈',
      '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐',
      '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️'
    ],
    flags: [
      '🏳️', '🏴', '🏁', '🚩', '🏳️‍🌈', '🏳️‍⚧️', '🇺🇸', '🇬🇧', 
      '🇫🇷', '🇩🇪', '🇯🇵', '🇨🇳', '🇮🇳', '🇧🇷', '🇨🇦', '🇦🇺', 
      '🇷🇺', '🇰🇷', '🇮🇹', '🇪🇸', '🇲🇽', '🇳🇱', '🇸🇪', '🇳🇴', 
      '🇩🇰', '🇫🇮', '🇵🇱', '🇹🇷', '🇸🇦', '🇪🇬', '🇿🇦', '🇦🇷',
      '🇨🇱', '🇨🇴', '🇵🇪', '🇻🇪', '🇺🇾', '🇵🇾', '🇪🇨', '🇧🇴',
      '🇬🇾', '🇸🇷', '🇫🇰', '🇬🇫', '🇹🇭', '🇻🇳', '🇲🇾', '🇸🇬'
    ]
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    console.log('Selected emoji:', emoji);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-white text-3xl mb-8">Emoji Picker</h1>
        
        {/* Display Selected Emoji */}
        {selectedEmoji && (
          <div className="mb-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-white mb-2">Selected Emoji:</p>
            <span className="text-4xl">{selectedEmoji}</span>
          </div>
        )}

        {/* Emoji Picker Container */}
        <div className="w-80 bg-gray-800 rounded-lg p-3 shadow-2xl">
          {/* Category Navigation */}
          <div className="flex justify-between bg-gray-900 rounded-md p-2 mb-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 p-2 rounded text-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white scale-110'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
                title={category.name}
              >
                {category.icon}
              </button>
            ))}
          </div>

          {/* Category Title */}
          <div className="text-gray-300 text-sm mb-2 text-left">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </div>

          {/* Emoji Grid */}
          <div className="grid grid-cols-8 gap-1 max-h-48 overflow-y-auto pr-2">
            {emojiData[activeCategory]?.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="p-2 text-xl hover:bg-gray-700 rounded transition-all duration-150 hover:scale-125 active:scale-95"
                title={emoji}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-500 text-center mt-2">
            Click an emoji to select
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
}       