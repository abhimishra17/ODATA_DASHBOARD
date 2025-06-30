sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("com.asint.interns.project2.controller.Chart", {
      onInit() {
        // VizFrame is already bound via XML; tweak properties if desired
        const oFrame = this.byId("idPieChart");
        oFrame.setVizProperties({
          title: { text: "Product Stock Distribution" },
          legend: { visible: true },
          plotArea: { dataLabel: { visible: true } }
        });
      }
    });
  });
