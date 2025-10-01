export class AnalysisModel  {
   static getAll() {
    const raw = localStorage.getItem('gi:analyses');
    try {
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return []; 
    }
   }
}

