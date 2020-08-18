const data = [
  { id: 1, url: `${process.env.PUBLIC_URL}/assets/images/bmo.png` },
  { id: 2, url: `${process.env.PUBLIC_URL}/assets/images/finn.png` },
  { id: 3, url: `${process.env.PUBLIC_URL}/assets/images/iceking.jpg` },
  { id: 4, url: `${process.env.PUBLIC_URL}/assets/images/jake.png` },
  { id: 5, url: `${process.env.PUBLIC_URL}/assets/images/lumpy.png` },
  { id: 6, url: `${process.env.PUBLIC_URL}/assets/images/marceline.jpg` },
  { id: 7, url: `${process.env.PUBLIC_URL}/assets/images/princess.png` },
  { id: 8, url: `${process.env.PUBLIC_URL}/assets/images/treetrunks.jpg` },
  { id: 9, url: `${process.env.PUBLIC_URL}/assets/images/flame.jpg` },
  { id: 10, url: `${process.env.PUBLIC_URL}/assets/images/prismo.png` },
  { id: 11, url: `${process.env.PUBLIC_URL}/assets/images/peppermint.jpg` },
  { id: 12, url: `${process.env.PUBLIC_URL}/assets/images/gunter.jpg` },
];

export default {
  shuffle: () => {
    let copy = [...data];

    for (let i = copy.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i - 1));

      let temp = copy[rand];
      copy[rand] = copy[i];
      copy[i] = temp;
    }
    let split = [];

    while (copy.length) {
      split.push(copy.splice(0, 3));
    }

    return split;
  },
};
