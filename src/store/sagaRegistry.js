import mainSaga from "containers/main/saga";


const sagas = [
  mainSaga,
];
export default function registerSagaWithMiddleware(middleware) {
  sagas.forEach((saga) => middleware.run(saga));
}
