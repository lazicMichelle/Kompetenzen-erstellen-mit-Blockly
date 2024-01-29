/*
*  Block Definitonen
*  vorübergehend in main.js weil anders nicht möglich, sonst funktioniert die start() nicht mehr
*/

// id block
Blockly.Blocks['b_id'] = {
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
    },
    canConnect: function (otherBlock) {
        console.log('Checking connection for b_id:', otherBlock.type);
        return otherBlock.type === 'b_lerntyp';
    }
};

Blockly.Blocks['b_lerntyp'] = {
    init: function () {
        this.appendValueInput("lerntyp_field")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["Kenntnis:", "lerntyp_1"], ["Fertigkeit:", "lerntyp_2"], ["Kompetenz:", "lerntyp_3"]]), "lerntyp_value");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    canConnect: function (otherBlock) {
        return otherBlock.type === 'person_a' || otherBlock.type === 'person_s' || otherBlock.type === 'person_as';
    }
};

Blockly.Blocks['person_a'] = {
    init: function () {
        this.appendValueInput("pa_value")
            .setCheck("String")
            .appendField("AbsolventInnen");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['person_s'] = {
    init: function () {
        this.appendValueInput("ps_value")
            .setCheck("String")
            .appendField("Studierende");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['person_as'] = {
    init: function () {
        this.appendValueInput("pas_value")
            .setCheck("String")
            .appendField("AbsolventInnen/Studierende");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// andere blöcke einfügen....

// generieren von text (javascriptcode) aus blöcken
const javascriptGenerator = new Blockly.Generator('JavaScript');

javascriptGenerator.forBlock['b_id'] = function (block) {
    console.log('Generating code for b_id block');
    const idValue = block.getFieldValue('id_value');
    const text = 'ID: ' + idValue;
    return [text, Blockly.javascript.Order.NONE];
};

javascriptGenerator.forBlock['b_lerntyp'] = function (block) {
    const idValue = block.getFieldValue('lerntyp_value');
    const text = idValue;
    return [text, Blockly.javascript.Order.NONE];
};

javascriptGenerator.forBlock['person_a'] = function (block) {
    const idValue = block.getFieldValue('pa_value');
    const text = idValue;
    return [text, Blockly.javascript.Order.NONE];
};

javascriptGenerator.forBlock['person_s'] = function (block) {
    const idValue = block.getFieldValue('ps_value');
    const text = idValue;
    return [text, Blockly.javascript.Order.NONE];
};

javascriptGenerator.forBlock['person_as'] = function (block) {
    const idValue = block.getFieldValue('pas_value');
    const text = idValue;
    return [text, Blockly.javascript.Order.NONE];
};

/*
*  Toolbox Definiotn mit vorher definierten Blöcken
*/
const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': 'Start',
            'categorystyle': 'logic_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'b_id',
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Lerntyp',
            'categorystyle': 'math_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'b_lerntyp',
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Person',
            'categorystyle': 'text_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'person_a',
                },
                {
                    'kind': 'block',
                    'type': 'person_s',
                },
                {
                    'kind': 'block',
                    'type': 'person_as',
                },
            ],
        },
        /*{
            'kind': 'category',
            'name': 'Dimension',
            'categorystyle': 'variable_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': dim_wissen,
                },
                {
                    'kind': 'block',
                    'type': dim_verstehen,
                },
                {
                    'kind': 'block',
                    'type': dim_anwenden,
                },
                {
                    'kind': 'block',
                    'type': dim_vermitteln,
                },
                {
                    'kind': 'block',
                    'type': dim_erschaffen,
                },
                {
                    'kind': 'block',
                    'type': dim_analysieren,
                },
                {
                    'kind': 'block',
                    'type': dim_bewerten,
                },
                {
                    'kind': 'block',
                    'type': dim_verfuegen,
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Freitext',
            'categorystyle': 'loop_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': b_text_1,
                },
                {
                    'kind': 'block',
                    'type': b_text_2,
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Sonstiges',
            'categorystyle': 'list_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': b_group,
                },
                {
                    'kind': 'block',
                    'type': b_abh,
                },
            ],
        },*/
    ],
};

/*
*  Workspace erstellen und ChangeListener für Text-Anzeige
*/
let workspace = null;

function start() {
    console.log('Startfunktion wird aufgerufen.');
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
    });

    workspace.addChangeListener(event => {
        console.log('Changelistener wird aufgerufen.');
        const code = javascript.javascriptGenerator.workspaceToCode(workspace);
        document.getElementById('generatedTextContainer').value = code;
    });
}