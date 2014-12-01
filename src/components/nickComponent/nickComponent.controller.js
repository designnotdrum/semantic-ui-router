'use strict';

angular.module('angularUiRouter')
  .controller('NickComponentCtrl', function ($scope) {
    // nothing yet

    $scope.mySelections =[];

    $scope.myData = [

    {name: 'Jackmerius Tacktheritrix', team: 'East', age: 21, photo: 'https://lh4.googleusercontent.com/-oWtRQ6TwG78/AAAAAAAAAAI/AAAAAAAAABA/vka32KV_eLk/photo.jpg'},
    {name: 'Quatro Quatro', team: 'West', age: 22, photo: 'https://lh4.googleusercontent.com/-rC4zl31hz0E/AAAAAAAAAAI/AAAAAAAAADE/fpN8y1wCb0I/photo.jpg'},
    {name: 'L\'Carpetron Dookmarriot', team: 'East', age: 20, photo: 'http://i.imgur.com/RCzDU.png'},
    {name: 'X-Wing @Aliciousness', team: 'West', age: 21, photo: 'http://s3.amazonaws.com/rapgenius/U6zS9cTBQ4iPXaNTlPtY_x_wing__aliciousness.jpg'},
    {name: 'Javaris Jamar Javarison-Lamar', team: 'East', age: 21, photo: 'https://lh6.googleusercontent.com/-GTrBrchJ5cY/AAAAAAAAAAI/AAAAAAAAAA8/auJ0yhnvPwo/photo.jpg'},
    {name: 'Shakiraquan T.G.I.F. Carter', team: 'West', age: 23, photo: 'assets/images/stgifcarter.jpg'},
    {name: 'T\'variusness King', team: 'East', age: 22, photo: 'https://lh6.googleusercontent.com/-rtJMGuc_x80/AAAAAAAAAAI/AAAAAAAAAAA/GGlVO2qzbeE/s600-c-k/photo.jpg'},
    {name: 'Scoish Velociraptor Maloish', team: 'West', age: 21, photo: 'http://2.bp.blogspot.com/-BY9yZlL7TOQ/Uo6-jNXX_EI/AAAAAAAAALU/tdAspIdctjs/s1600/Maloish.jpg'},
    {name: 'Hingle McCringleberry', team: 'East', age: 22, photo: 'http://jawzone.com/sites/default/files/members/pictures/picture-137-1374214504.jpg'},
    {name: 'T.J. A.J. R.J. Backslashinfourth V', team: 'West', age: 20, photo: 'https://lh4.googleusercontent.com/-OyKMPDL2uhE/AAAAAAAAAAI/AAAAAAAAABQ/KbMcYu9w1Rw/photo.jpg'}];

    $scope.gridOptions = {
    	data: 'myData',
    	columnDefs: [
    		{field: 'name', displayName: 'Name'},
    		{field: 'team', displayName: 'Team'},
    		{field: 'age', displayName: 'Age'}],
    	selectedItems: $scope.mySelections,
    	multiSelect: true
    };
  });