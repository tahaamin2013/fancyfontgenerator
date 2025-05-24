// "use client";

// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Search, Copy, Check, Heart } from 'lucide-react';
// import { SymbolCategory } from "@/lib/symbol-data";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";

// interface SymbolBrowserProps {
//   categories: SymbolCategory[];
// }

// export function SymbolBrowser({ categories }: SymbolBrowserProps) {
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [favorites, setFavorites] = useState<string[]>([]);
//   const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
//   const { toast } = useToast();

//   // Load favorites from localStorage
//   useEffect(() => {
//     const savedFavorites = localStorage.getItem("symbolFavorites");
//     if (savedFavorites) {
//       setFavorites(JSON.parse(savedFavorites));
//     }
//   }, []);

//   // Save favorites to localStorage
//   useEffect(() => {
//     localStorage.setItem("symbolFavorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const handleCopySymbol = (symbol: string) => {
//     navigator.clipboard.writeText(symbol);
//     setCopiedSymbol(symbol);
    
//     toast({
//       title: "Símbolo copiado!",
//       description: `"${symbol}" foi copiado para a área de transferência.`,
//       duration: 2000,
//     });
    
//     setTimeout(() => {
//       setCopiedSymbol(null);
//     }, 2000);
//   };

//   const toggleFavorite = (symbol: string) => {
//     if (favorites.includes(symbol)) {
//       setFavorites(favorites.filter(fav => fav !== symbol));
//     } else {
//       setFavorites([...favorites, symbol]);
//     }
//   };

//   const filteredCategories = categories.map(category => {
//     if (searchQuery) {
//       return {
//         ...category,
//         symbols: category.symbols.filter(symbol => 
//           symbol.includes(searchQuery)
//         )
//       };
//     }
//     return category;
//   });

//   const allSymbols = filteredCategories.flatMap(category => category.symbols);
//   const favoriteSymbols = allSymbols.filter(symbol => favorites.includes(symbol));

//   return (
//     <div className="space-y-6">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//         <Input
//           placeholder="Buscar símbolos..."
//           className="pl-10 bg-white/80 backdrop-blur-sm"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-9 mb-4 bg-white/80 backdrop-blur-sm">
//           <TabsTrigger value="all">Todos</TabsTrigger>
//           <TabsTrigger value="favorites">Favoritos</TabsTrigger>
//           {categories.map((category) => (
//             <TabsTrigger key={category.id} value={category.id}>
//               {category.name}
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         <TabsContent value="all">
//           <SymbolGrid 
//             symbols={allSymbols} 
//             onCopy={handleCopySymbol} 
//             onToggleFavorite={toggleFavorite}
//             favorites={favorites}
//             copiedSymbol={copiedSymbol}
//           />
//         </TabsContent>

//         <TabsContent value="favorites">
//           {favoriteSymbols.length > 0 ? (
//             <SymbolGrid 
//               symbols={favoriteSymbols} 
//               onCopy={handleCopySymbol} 
//               onToggleFavorite={toggleFavorite}
//               favorites={favorites}
//               copiedSymbol={copiedSymbol}
//             />
//           ) : (
//             <Card>
//               <CardContent className="flex flex-col items-center justify-center p-8 text-center">
//                 <Heart className="text-gray-300 mb-4" size={48} />
//                 <h3 className="text-xl font-medium mb-2">Nenhum favorito ainda</h3>
//                 <p className="text-gray-500">
//                   Clique no coração em qualquer símbolo para adicioná-lo aos seus favoritos.
//                 </p>
//               </CardContent>
//             </Card>
//           )}
//         </TabsContent>

//         {categories.map((category) => (
//           <TabsContent key={category.id} value={category.id}>
//             <SymbolGrid 
//               symbols={category.symbols} 
//               onCopy={handleCopySymbol} 
//               onToggleFavorite={toggleFavorite}
//               favorites={favorites}
//               copiedSymbol={copiedSymbol}
//             />
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// }

// interface SymbolGridProps {
//   symbols: string[];
//   onCopy: (symbol: string) => void;
//   onToggleFavorite: (symbol: string) => void;
//   favorites: string[];
//   copiedSymbol: string | null;
// }

// function SymbolGrid({ symbols, onCopy, onToggleFavorite, favorites, copiedSymbol }: SymbolGridProps) {
//   if (symbols.length === 0) {
//     return (
//       <Card>
//         <CardContent className="flex items-center justify-center p-8 text-center">
//           <p className="text-gray-500">Nenhum símbolo encontrado.</p>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
//       {symbols.map((symbol, index) => (
//         <Card 
//           key={`${symbol}-${index}`} 
//           className={cn(
//             "group relative overflow-hidden transition-all hover:shadow-md",
//             copiedSymbol === symbol && "ring-2 ring-rose-500"
//           )}
//         >
//           <CardContent className="p-0">
//             <div 
//               className="flex items-center justify-center h-16 text-2xl cursor-pointer hover:bg-rose-50 transition-colors"
//               onClick={() => onCopy(symbol)}
//             >
//               {symbol}
//             </div>
//             <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
//               <Button 
//                 variant="ghost" 
//                 size="icon" 
//                 className="h-8 w-8" 
//                 onClick={() => onCopy(symbol)}
//               >
//                 {copiedSymbol === symbol ? (
//                   <Check className="h-4 w-4 text-green-500" />
//                 ) : (
//                   <Copy className="h-4 w-4" />
//                 )}
//               </Button>
//               <Button 
//                 variant="ghost" 
//                 size="icon" 
//                 className="h-8 w-8" 
//                 onClick={() => onToggleFavorite(symbol)}
//               >
//                 <Heart 
//                   className={cn(
//                     "h-4 w-4", 
//                     favorites.includes(symbol) ? "fill-rose-500 text-rose-500" : "text-gray-400"
//                   )} 
//                 />
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

import React from 'react'

const symbolbrowser = () => {
  return (
    <div>
      
    </div>
  )
}

export default symbolbrowser
