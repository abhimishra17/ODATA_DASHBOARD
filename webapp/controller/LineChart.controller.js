sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("com.asint.interns.project2.controller.LineChart", {
      onInit: function () {
        // Get the VizFrame control from the view
        const oFrame = this.byId("idLineChart");
  
        // Only set properties if the VizFrame exists
        if (oFrame) {
          oFrame.setVizProperties({
            title: {
              text: "Product Stock Over Time",
              visible: true
            },
            legend: {
              visible: true
            },
            plotArea: {
              dataLabel: {
                visible: true
              }
            },
            categoryAxis: {
              title: {
                text: "Product Name"
              }
            },
            valueAxis: {
              title: {
                text: "Units In Stock"
              }
            }
          });
        } else {
          console.log("LineChart: VizFrame with id 'idLineChart' not found.");
        }
      }
    });
  });
  