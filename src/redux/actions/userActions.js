export const updateUserName = userName => {
  return {
    type: 'UPDATE_USERNAME',
    userName,
  };
};

export const updatePassWord = passWord => {
  return {
    type: 'UPDATE_PASSWORD',
    passWord,
  };
};

export const submitAction = () => {
  return {
    type: 'SUBMIT',
  };
};