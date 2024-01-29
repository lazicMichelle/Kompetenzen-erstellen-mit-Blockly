Blockly.Blocks['b_1'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("b_1")
            .appendField("Feld 1");
        this.setOutput(true, "b_text");
        this.setColour(105);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b_2'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("b_2")
            .appendField("Feld 2");
        this.setOutput(true, "b_1");
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b_3'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("b_3")
            .appendField("Feld 3");
        this.setOutput(true, "b_2");
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};