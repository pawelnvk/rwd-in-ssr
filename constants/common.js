const DESCRIPTION =
  'This is some random message, which is not really relevant at the moment. I didn’t just get the cure to el cancer, I got the cure to el everything. There’s no easy way to say this… I’m pregnant, Trevor! Oh, hello there! I bet you’re wondering, why the red suit? Well, that’s so bad guys can’t see me bleed! Sorry, I use humor to deflect my insecurities. Plus, I’m hilarious, so don’t hate.';
const TITLE = index => `Element ${index}`;

export const list = Array(30)
  .fill(0)
  .map((value, index) => ({
    description: DESCRIPTION,
    id: index + 1,
    title: TITLE(index + 1),
  }));
