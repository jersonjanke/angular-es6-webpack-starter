function exampleService($state) {

  return {
    title: () => $state.current.name
  }

}

export default exampleService;
