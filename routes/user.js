module.exports = ({ router }) => {
    // getting the home route
    router.get('/', (ctx, next) => {
      console.log(ctx);
      ctx.body = { a:1, b:2, c:3 };
    });
  };