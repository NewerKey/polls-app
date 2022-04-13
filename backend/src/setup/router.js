const Router = request('express').Router;

module.exports = (app) => {
  const router = new Router();
  app.use(router);
};
