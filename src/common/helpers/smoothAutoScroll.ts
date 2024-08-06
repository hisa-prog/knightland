import { HeaderLinks } from "common/constants/HeaderLinks";

export const smoothAutoScroll = (id: string) => {
  const element = document.getElementById(id);
  let pos = element.style.position;
  let top = element.style.top;
  element.style.position = 'relative';
  element.style.top = HeaderLinks.find(i => i.id === id)?.paddingTop;
  element.scrollIntoView({behavior: 'smooth'});
  element.style.top = top;
  element.style.position = pos;
};