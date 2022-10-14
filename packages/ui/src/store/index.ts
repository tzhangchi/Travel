interface Surface {
  title: string;
  id: string;
  type: string | 'image' | 'article' | 'code' | 'counterdown' | 'stat';
}
interface State {
  travelTitle: string | undefined;
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
          travelTitle: 'Building travels and blocks , presentation like a doc',
          surfaces: null,
        };
  },
};

export { store };
