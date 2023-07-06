 // 后期考虑通过读取json设置文件来设置起始日期
const startDate = '2023.03.20';
const counter = document.querySelector('.title-and-time>span>span');

const dateToNow = date => {
  const targetDate = new Date(date);
  const today = new Date();
  const diff = today.getTime() - targetDate.getTime();
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  return days;
}

const daysDiffer = dateToNow(startDate);

const incrementingCounter = () => {
  counter.innerText = '0';

  const updateCounter = () => {
      const target = +daysDiffer;
      const c = +counter.innerText;
      const increment = target / 200

      if(c < target) {
          counter.innerText = Math.ceil(c + increment);
          setTimeout(updateCounter, 3);
      } else {
          counter.innerText = target;
      }
    }
    updateCounter();
}

incrementingCounter();