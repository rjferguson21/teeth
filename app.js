app = angular.module('app', ['ngMaterial'])

app.controller('AppCtrl', function() {
    var ctrl = this
    ctrl.surfaces = [
      "O",
      "B",
      "MO",
      "DO",
      "OB",
      "MOD",
      "MOB",
      "DOB",
      "MOL",
      "DOL",
      "MODB",
      "MODL",
      "MODBL",
      "OL",
      "L"
    ]

    ctrl.appointment = {
      teeth: []
    }

    ctrl.addTooth = function(tooth) {
      ctrl.appointment.teeth.push(angular.copy(tooth)); 
      ctrl.tooth = undefined
    }
    return this
  });
  