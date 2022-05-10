//그래프 DB구조 만들기

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
