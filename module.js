class Module {
     _name = "";

    constructor(_name) {
        this._name = _name;
    }

    getMessage (){
        return `Hello,players, ${this._name} `;
    }
}

module.exports.Module = Module;