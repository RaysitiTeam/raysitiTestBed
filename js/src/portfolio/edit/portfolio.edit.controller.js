(function() {
    angular.module('raysiti')
        .controller('PortfolioEditController', PortfolioEditController);
    PortfolioEditController.$inject = ['$scope', 'PortfolioCreateService', 'AlertModalService', '$state','$stateParams'];

    function PortfolioEditController($scope, PortfolioCreateService, AlertModalService, $state, $stateParams) {
        var vm = $scope;
        vm.inputFileObj = {};
        vm.statusMesage = '';
        vm.fileResultDiv = {
            'showFileResult': false,
            'warning': false,
            'message': ''
        };
        vm.inputForm = {
            name: '',
            category: '',
            client: '',
            description: '',
            files: '',
            video: ''
        };

        vm.availableCategories = ['Logo','Brochure','Web Design','White Board','Architectural','3D Stall/Kiosk','VFX/Post','Educational Animations'];


        vm.updatePortfolio = function(inputObj) {
          //STEP 1 : convert category array as a concatenated string
          if(inputObj.hasOwnProperty('category')){
            if(Object.prototype.toString.call(inputObj.category) === '[object Array]'){
              inputObj.category = inputObj.category.toString();
            }//endif:input.category is an object
          }//endif:inputObj has category
            console.log('inputObj is: ', inputObj);
            var updatePortfolioService = PortfolioCreateService.updatePortfolio(inputObj);
            updatePortfolioService.then(function(response) {
                if (response.hasOwnProperty('data')) {
                    console.log('Response is: ', response.data);
                    AlertModalService.confirm('Success', 'Created Successfully')
                        .then(function() {
                            $state.go('portfolio-list');
                        });
                } //enif:if response has data
            }); //end:then
        }; //end:updatePortfolio

        vm.uploadFile = function(inputfile) {
            vm.fileResultDiv = {
                'showFileResult': false,
                'warning': false,
                'message': ''
            };
            console.log('Upload File to be is', inputfile);
            // console.log('File type is ',typeof(inputfile));

            //FIXME: PAJ - Calling PHP Service - fileupload.php
            var uploadFileService = PortfolioCreateService.uploadFiletoServer(inputfile);
            uploadFileService.then(function(response) {
                if (response.hasOwnProperty('data')) {
                    var dataObj = response.data;
                    if (dataObj.hasOwnProperty('status')) {
                        if (dataObj.status == 'success') {
                            vm.fileResultDiv.showFileResult = true;
                            vm.fileResultDiv.warning = false;
                            vm.fileResultDiv.message = dataObj.message + " (" + dataObj.path + ")";
                            //NOTE: update the input form object file with all the file paths uploaded
                            var relativePath = PortfolioCreateService.getRelativePath(dataObj.path);
                            if (vm.inputForm.files.length > 1) {
                                vm.inputForm.files = vm.inputForm.files.concat(";");
                            }
                            vm.inputForm.files = vm.inputForm.files.concat(relativePath);
                            console.log('File List is now: ', vm.inputForm.files);
                        } else {
                            vm.fileResultDiv.showFileResult = true;
                            vm.fileResultDiv.warning = true;
                            vm.fileResultDiv.message = response.data.message;
                        }
                    } else {
                        console.error('Error - response.data does not have a status ppty', response.data);
                    }
                } else {
                    console.error('Error -  response does not have data ppty', response);
                } //endif:if response has response.data
            }); //end:then
        }; //uploadFile()

        if($stateParams.hasOwnProperty('name')&& $stateParams.hasOwnProperty('client') && $stateParams.hasOwnProperty('category')){
          if($stateParams.name && $stateParams.client && $stateParams.category){
            vm.inputForm.name = $stateParams.name;
            vm.inputForm.client = $stateParams.client;
            vm.inputForm.category = PortfolioCreateService.stringToArray($stateParams.category);
            vm.inputForm.description = $stateParams.description;
            vm.inputForm.files = $stateParams.files;
            vm.inputForm.video = $stateParams.video;            
          }else{
            AlertModalService.confirm('Invalid Record', 'Selected Record is non-existant')
            .then(function(){
              $state.go('portfolio-list');
            });//end:then
          }
        }else{
          AlertModalService.confirm('Invalid Record', 'Selected Record is non-existant')
          .then(function(){
            $state.go('portfolio-list');
          });//end:then
        }//endif:stateParams has properties
    } //end:PortfolioEditController
}()); //iife
