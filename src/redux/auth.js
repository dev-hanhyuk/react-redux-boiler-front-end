const INITIAL_STATE = {
  name: 'Han Hyuk Cho',
  email: 'hanhyuk83.cho@gmail.com',
  lv: 1,
  dept: 'HR',
  super: []
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    default: return state;
  }
}