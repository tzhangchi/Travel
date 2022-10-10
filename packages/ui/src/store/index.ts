interface Surface {
  title: string;
  id: string;
  type: string | 'image' | 'article' | 'code' | 'counterdown' | 'stat';
}
interface State {
  title: string;
  surfaces: Surface[];
}
const store = {
  saveStore: (data: State) => {
    localStorage.setItem('deckjs_store', JSON.stringify(data));
  },
  getStore: () => {
    return JSON.stringify(localStorage.getItem('deckjs_store'));
  },
};

export { store };
