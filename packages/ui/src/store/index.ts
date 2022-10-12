interface Surface {
  title: string;
  id: string;
  type: string | 'image' | 'article' | 'code' | 'counterdown' | 'stat';
}
interface State {
  title: string | undefined;
  surfaces: Surface[];
}
const localStorage = window.localStorage;
const store = {
  saveStore: (data: State) => {
    localStorage.setItem('travel_store', JSON.stringify(data));
  },
  getStore: (): State => {
    const originStore = localStorage.getItem('travel_store');
    return originStore
      ? JSON.parse(originStore)
      : {
          title: 'Building decks and blocks , presentation like a doc',
          surfaces: null,
        };
  },
};

export { store };
