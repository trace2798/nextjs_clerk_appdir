import { g, config, auth } from "@grafbase/sdk";

// @ts-ignore
const User = g
  .model("User", {
    name: g.string().length({ min: 2, max: 100 }),
    email: g.string().unique(),
    imageUrl: g.url(),
    description: g.string().length({ min: 2, max: 1000 }).optional(),
    posts: g
      .relation(() => Post)
      .list()
      .optional(),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().update();
  });

// @ts-ignore
const Post = g
  .model("Post", {
    title: g.string().length({ min: 4 }),
    description: g.string().optional(),
    image: g.url(),
    category: g.string().search(),
    createdBy: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().delete().update();
  });

const clerk = auth.OpenIDConnect({
  issuer: g.env("CLERK_ISSUER_URL"),
});

export default config({
  schema: g,
  auth: {
    providers: [clerk],
    rules: (rules) => rules.private(),
  },
});
