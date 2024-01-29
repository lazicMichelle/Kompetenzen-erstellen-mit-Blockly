//import { blockToText } from "./blockText";

// blocks (dropdown: ["id, value"])
Blockly.Blocks['b_group'] = {
    init: function () {
        this.appendEndRowInput()
            .appendField(new Blockly.FieldTextInput("Gruppentitel"), "groupValue");
        this.appendStatementInput("group_input")
        //this.setNextStatement(true, 'b_id');
        this.setColour(230);
    }
};

Blockly.Blocks['b_id'] = {
    init: function () {
        this.appendValueInput("id_field")
            .setCheck("b_id")
            .appendField("ID:")
            .appendField(new Blockly.FieldTextInput("ID eingeben"), "idValue");
        this.setInputsInline(true);
        this.setPreviousStatement("b_group");
        this.setNextStatement("b_lerntyp");
        this.setColour(160);
    }
};

Blockly.Blocks['b_lerntyp'] = {
    init: function () {
        this.appendValueInput("lerntyp_field")
            .setCheck("b_lerntyp")
            .appendField(new Blockly.FieldDropdown([["Kenntnis", "Kenntnis: "], ["Fertigkeit", "Fertigkeit: "], ["Kompetenz", "Kompetenz: "]]), "lerntypValue");
        this.setOutput(true, "b_id");
        this.setColour(330);
    }
};

Blockly.Blocks['b_person'] = {
    init: function () {
        this.appendValueInput("person_field")
            .setCheck("b_person")
            .appendField(new Blockly.FieldDropdown([["Studierende", "Studierende koennen "], ["AbsolventInnen", "AbsolventInnen koennen "], ["Kombination beider", "Studierende/AbsolventInnen koennen "]]), "personValue");
        this.setOutput(true, "b_lerntyp");
        this.setColour(260);
    }
};

Blockly.Blocks['b_text'] = {
    init: function () {
        this.appendValueInput("text_field")
            .setCheck("b_text")
            .appendField(new Blockly.FieldTextInput("Text eingeben..."), "textValue");
        this.setOutput(true, "b_person");
        this.setColour(20);
    }
};

// Dimensionen
Blockly.Blocks['dim_erinnern'] = {
    init: function () {
        this.appendValueInput("dim_er_vi")
            .setCheck("dim_erinnern")
            .appendField(new Blockly.FieldDropdown([["vermitteln.", "vermitteln."], ["wiedererkennen", "wiedererkennen."], ["abrufen", "abrufen."]]), "erinnernValue");
        this.setOutput(true, "b_text");
        this.setColour(120);
    }
};

Blockly.Blocks['dim_verstehen'] = {
    init: function () {4
        this.appendValueInput("dim_vs_vi")
            .setCheck("dim_verstehen")
            .appendField(new Blockly.FieldDropdown([["verstehen", "verstehen."], ["interpretieren", "interpretieren."], ["darstellen", "darstellen."], ["klassifizieren", "klassifizieren."],
                                                    ["zusammenfassen", "zusammenfassen."], ["schlussfolgern", "schlussfolgern."], ["vergleichen", "vergleichen."], ["erlautern", "erlautern."]]), "verstehenValue");
        this.setOutput(true, "b_text");
        this.setColour(120);
    }
};

Blockly.Blocks['dim_anwenden'] = {
    init: function () {
        this.appendValueInput("dim_an_vi")
            .setCheck("dim_anwenden")
            .appendField(new Blockly.FieldDropdown([["anwenden", "anwenden."], ["ausfuehren", "ausfuehren."], ["durchfuehren", "durchfuehren."]]), "anwendenValue");
        this.setOutput(true, "b_text");
        this.setColour(120);
    }
};

Blockly.Blocks['dim_analysieren'] = {
    init: function () {
        this.appendValueInput("dim_ay_vi")
            .setCheck("dim_analysieren")
            .appendField(new Blockly.FieldDropdown([["analysieren", "analysieren."], ["differenzieren", "differenzieren."], ["organisieren", "organisieren."], ["zuordnen", "zuordnen."]]), "analysierenValue");
        this.setOutput(true, "b_text");
        this.setColour(120);
    }
};

Blockly.Blocks['dim_bewerten'] = {
    init: function () {
        this.appendValueInput("dim_b_vi")
            .setCheck("dim_bewerten")
            .appendField(new Blockly.FieldDropdown([["bewerten", "bewerten."], ["auswerten", "auswerten."], ["ueberpruefen", "ueberpruefen."], ["kritisieren", "kritisieren."]]), "bewertenValue");
        this.setOutput(true, "b_text");
        this.setColour(120);
    }
};

Blockly.Blocks['dim_schaffen'] = {
    init: function () {
        this.appendValueInput("dim_s_vi")
            .setCheck("dim_schaffen")
            .appendField(new Blockly.FieldDropdown([["schaffen", "schaffen."], ["erschaffen", "erschaffen."], ["erzeugen", "erzeugen."], ["planen", "planen."], ["produzieren", "produzieren."]]), "schaffenValue");
        this.setOutput(true, "b_text");
        this.setColour(120);
    }
};



// toolbox
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
                    'type': 'b_group',
                },
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
                    'type': 'b_person',
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
                    'type': 'b_text',
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Dimension',
            'categorystyle': 'variable_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'dim_erinnern',
                },
                {
                    'kind': 'block',
                    'type': 'dim_verstehen',
                },
                {
                    'kind': 'block',
                    'type': 'dim_anwenden',
                },
                {
                    'kind': 'block',
                    'type': 'dim_analysieren',
                },
                {
                    'kind': 'block',
                    'type': 'dim_bewerten',
                },
                {
                    'kind': 'block',
                    'type': 'dim_schaffen',
                },
            ],
        },
    ],
};

// workspace laden
let workspace = null;

function start() {
    console.log('Startfunktion wird aufgerufen.');
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
    });

    workspace.addChangeListener(event => {
        handleWorkspaceChange(workspace);
    });
}

// changelistener für änderungen und textgenerierung
function handleWorkspaceChange(workspace) {
    console.log('Changelistener wird aufgerufen.');

    // Block zu Text für jeden einzelnen Block-Typ
    const generatedTextsForGroup = blockToText(workspace, 'b_group');
    const generatedTextsForId = blockToText(workspace, 'b_id');
    const generatedTextsForLerntyp = blockToText(workspace, 'b_lerntyp');
    const generatedTextsForPerson = blockToText(workspace, 'b_person');
    const generatedTextsForText = blockToText(workspace, 'b_text');
    //const generatedTextsForDim = blockToText(workspace, 'dimension');

    // Ausgabe zusammenstellen
    let fullText = '';
    for (let i = 0; i < generatedTextsForGroup.length; i++) {
        fullText += generatedTextsForGroup[i] + '\n' + '  ' + generatedTextsForId[i] + '\n' + '    ' + generatedTextsForLerntyp[i] + generatedTextsForPerson[i] + generatedTextsForText[i] + ' (Dimension)' + '\n\n';
    }

    //const generatedTexts = generatedTextsForGroup[0] + '\n' + generatedTextsForId + '\n' + generatedTextsForLerntyp + generatedTextsForPerson + generatedTextsForGroup[1];
    document.getElementById('generatedTextContainer').value = fullText;
}


// umwandlung von Block zu Text für jeden Typ
function blockToText(workspace, blockType) {
    const blocks = workspace.getAllBlocks();
    const matchingBlocks = blocks.filter(block => block.type === blockType);

    const generatedTexts = matchingBlocks.map(block => {
        // Spezifische Logik für jeden Blocktyp
        switch (blockType) {
            case 'b_id':
                const idValue = block.getFieldValue('idValue');
                return 'ID: ' + idValue;

            // Hier kannst du weitere Cases für andere Blocktypen hinzufügen
            case 'b_lerntyp':
                const lerntypValue = block.getFieldValue('lerntypValue');
                return lerntypValue;

            case 'b_person':
                const personValue = block.getFieldValue('personValue');
                return personValue;

            case 'b_group':
                const groupValue = block.getFieldValue('groupValue');
                return groupValue;

            case 'b_text':
                const textValue = block.getFieldValue('textValue');
                return textValue;

            // Weitere Blocktypen können hier hinzugefügt werden

            default:
                return 'Unbekannter Blocktyp';
        }
    });

    return generatedTexts;
}