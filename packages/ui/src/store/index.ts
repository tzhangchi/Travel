import type { Surface } from './../surface';
interface State {
  travelTitle: string | undefined;
  surfaces: Surface[];
}
const localStorage = window.localStorage;
const store = {
  saveStoreSurfaces: (surfaces: Surface[]) => {
    const originStore = store.getStore();
    originStore.surfaces = surfaces;
    localStorage.setItem('travel_store', JSON.stringify(originStore));
  },
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
