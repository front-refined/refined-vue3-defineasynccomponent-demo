const slow = (comp: any, delay: number = 1000): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(comp), delay);
  });
};
export default slow;
