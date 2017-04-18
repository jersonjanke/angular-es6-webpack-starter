import exampleHtml from './example.html';

let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'vm',
  controller: function(exampleService, toastr) {    
    const vm = this;
    vm.title = exampleService.title();   
    toastr.success('Hello world!', 'Toastr fun!'); 
  }

}

export default exampleComponent;
