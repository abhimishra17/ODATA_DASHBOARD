sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.asint.interns.project2.controller.Detail", {
      onInit: function() {

        var oRouter = this.getOwnerComponent().getRouter();

        // oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
        oRouter.getRoute("RouteDetail").attachPatternMatched(this._onObjectMatched, this);

      },
  
      _onObjectMatched: function(oEvent) {
        
        var sId = oEvent.getParameter("arguments").productId;

        var sPath = "/Products(" + sId + ")";

        this.getView().bindElement({ path: sPath });
      }
    });
  });
  