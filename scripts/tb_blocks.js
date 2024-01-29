//Custom Blocks

// ID, auch Zeilenstart
const b_id = {
    init: function () {
        this.appendValueInput("id_field")
            .setCheck(null)
            .appendField("ID:")
            .appendField(new Blockly.FieldTextInput("ID eingeben"), "id_value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



//Lerntyp
const b_lerntyp = {
    init: function () {
        this.appendValueInput("lerntyp_field")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["Kenntnis:", "lerntyp_1"], ["Fertigkeit:", "lerntyp_2"], ["Kompetenz:", "lerntyp_3"]]), "lerntyp_value");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Personen
const person_a = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("AbsolventInnen");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const person_s = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("Studierende");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

const person_as = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("AbsolventInnen/Studierende");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
/*
// Dimensionen
export const dim_wissen = {
    init: function () {
        this.appendValueInput("dim_wi_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["wissen", "wi_1"], ["weiﬂ", "wi_2"], ["gewusst", "wi_3"]]), "dim_wi_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_verstehen = {
    init: function () {
        this.appendValueInput("dim_vs_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["verstehen", "vs_1"], ["verstehen1", "vs_2"], ["verstehen2", "vs_3"]]), "dim_vs_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_anwenden = {
    init: function () {
        this.appendValueInput("dim_anw_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["anwenden", "anw_1"], ["anzuwenden", "anw_2"], ["anwenden", "anw_3"]]), "dim_anw_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_vermitteln = {
    init: function () {
        this.appendValueInput("dim_vm_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["vermitteln", "vm_1"], ["zu vermitteln", "vm_2"], ["vermitteln2", "vm_3"]]), "dim_vm_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_erschaffen = {
    init: function () {
        this.appendValueInput("dim_er_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["erschaffen", "er_1"], ["zu erschaffen", "er_2"], ["erschaffen2", "er_3"]]), "dim_er_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_analysieren = {
    init: function () {
        this.appendValueInput("dim_ana_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["analysieren", "ana_1"], ["zu analysieren", "ana_2"], ["analysieren2", "ana_3"]]), "dim_ana_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_bewerten = {
    init: function () {
        this.appendValueInput("dim_bew_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["bewerten", "bew_1"], ["zu bewerten", "bew_2"], ["bewerten2", "bew_3"]]), "dim_bew_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const dim_verfuegen = {
    init: function () {
        this.appendValueInput("dim_vf_vi")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["verfuegen", "vf_1"], ["zu verfuegen", "vf_2"], ["verfuegen2", "vf_3"]]), "dim_vf_dw");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Leere Textfelder
export const b_text_1 = {
    init: function () {
        this.appendValueInput("text_field")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput("Text eingeben..."), "text_value");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

export const b_text_2 = {
    init: function () {
        this.appendEndRowInput()
            .appendField(new Blockly.FieldTextInput("Text eingeben..."), "text_value");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Guppierungen
export const b_group = {
    init: function () {
        this.appendEndRowInput()
            .appendField(new Blockly.FieldTextInput("Gruppentitel"), "group_titel");
        this.appendStatementInput("group_input")
            .setCheck("Kompetenzen");
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Abh‰ngigkeiten
export const b_abh = {
    init: function () {
        this.appendEndRowInput()
            .appendField("Abhaengig von:")
            .appendField(new Blockly.FieldTextInput("ID eingeben"), "abh_id_value");
        this.setPreviousStatement(true, "b_abh");
        this.setNextStatement(true, "b_abh");
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
*/