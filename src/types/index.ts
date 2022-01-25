
export type News = {
  data: {
    title: {
      text: string;
    }[];
    text1: {
      text: string;
    }[];
    text2: {
      text: string;
    }[];
    text3: {
      text: string;
    }[];
    image: {
      alt: string;
      url: string;
    };
    image2: {
      alt: string;
      url: string;
    };
    category: string,
    description: {
      text: string;
    }[],
    date:string
  };
  id: string,
  uid: string,
}