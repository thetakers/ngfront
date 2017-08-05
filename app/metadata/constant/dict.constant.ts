/**
 * 字典
 */
export class DictConstant {
    constructor(parameters) {
        
    }

    //修改方式
  static createUpdateTypes() {
    let updateTypes = new Array<any>();
    updateTypes.push({ code: 0, text: "hide" });
    updateTypes.push({ code: 1, text: "show" });
    updateTypes.push({ code: 2, text: "disable" });
    return updateTypes;
  }

   static createAligns() {
    let aligns = new Array<any>();
    aligns.push({ code: "center", text: "center" });
    aligns.push({ code: "right", text: "right" });
    aligns.push({ code: "left", text: "left" });
    return aligns;
    }

  static createValigns() {
    let valigns = new Array<any>();
    valigns.push({ code: "middle", text: "middle" });
    valigns.push({ code: "top", text: "top" });
    valigns.push({ code: "bottom", text: "bottom" });
    return valigns;
  }

  static createfieldTypes() {
    let fieldTypes = new Array<any>();
    fieldTypes.push({ code: "text", text: "text" });
    fieldTypes.push({ code: "checkbox", text: "checkbox" });
    fieldTypes.push({ code: "downdrop", text: "downdrop" });
    fieldTypes.push({ code: "textarea", text: "textarea" });
    return fieldTypes;
  }

  static createButtons(){
    let funcButtons = new Array<any>();
    funcButtons.push({ code: 0, text: "service" });
    funcButtons.push({ code: 1, text: "dialog" });
    funcButtons.push({ code: 2, text: "window" });
    return funcButtons;
  }
  
  static createScopes() {
    let scopes = new Array<any>();
    scopes.push({ code: "ALL", text: "ALL" });
    scopes.push({ code: "CHILD", text: "CHILD" });
    scopes.push({ code: "SELF", text: "SELF" });
    return scopes;
  }

  static createExpressions(){ 
    let expressions = new Array<any>();
    expressions.push({ code: "=", text: "=" });
    expressions.push({ code: ">", text: ">" });
    expressions.push({ code: ">=", text: ">=" });
    expressions.push({ code: "<", text: "<" });
    expressions.push({ code: "<=", text: "<=" });
    expressions.push({ code: "like", text: "like" });
    return expressions;
  }

}
