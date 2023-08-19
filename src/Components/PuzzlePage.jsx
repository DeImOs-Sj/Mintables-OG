// import React, { useState } from 'react';
// import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
// import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

// function PuzzlePage({ imageUrl }) {
//     const [isSolved, setIsSolved] = useState(false);

//     const handleSolved = () => {
//         setIsSolved(true);
//     };

//     return (
//         <div className="max-w-[900px] mx-auto border-4 rounded-md">
//             <JigsawPuzzle
//                 imageSrc={imageUrl}
//                 rows={3}
//                 columns={3}
//                 onSolved={handleSolved}
//                 className="jigsaw-puzzle"
//             />
//             <button onClick={() => window.history.back()} className="mt-4 block mx-auto py-2 px-4 bg-gray-800 text-white rounded-lg">
//                 Back to Image
//             </button>
//         </div>
//     );
// }

// export default PuzzlePage;
