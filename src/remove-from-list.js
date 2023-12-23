
function removeKFromList(l,k) {
  if (l.value === k) { l = l.next; }

  const f = (obj) => {
    if (obj.value == k) {
      obj = obj.next;
      f(obj)
    }

    if (obj.next !== null) {
      if (obj.next.value == k) {
        obj.next = obj.next.next;
        if (obj.next) {
          f(obj);
        } else return;
        if (obj.next.value == k) f(obj);
      } else f(obj.next);
    }
  }

  f(l);
  return l
}



module.exports = {
  removeKFromList
};